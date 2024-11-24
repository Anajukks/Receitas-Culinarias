<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request) {
        try {
            $validatedData = $request->validate([
                'nome' => 'required|string',
                'email' => 'required|email|unique:usuarios,email',
                'senha' => 'required|min:8',
            ], [
                'nome.string' => 'O nome deve ser válido.',
                'nome.required' => 'O campo nome é obrigatório',
                'email.required' => 'O campo email é obrigatório',
                'email.unique' => 'Esse email já está em uso',
                'email.email' => 'O email deve ser válido',
                'senha.required' => 'A campo senha é obrigatório',
                'senha.min' => 'A senha deve ter pelo menos 8 caracteres',
            ]);

            $usuario = Usuario::create([
                'nome' => $validatedData['nome']->nome,
                'email' => $validatedData['email']->email,
                'senha' => Hash::make($validatedData['senha']->senha)
            ]);
            
            // Criando um novo token de acesso para o usuário
            $token = $usuario->createToken('auth_token')->plainTextToken;

            return response()->json(['message' => 'Usuário cadastrado com sucesso!','access_token' => $token, 'token_type' => 'Bearer'], 201);
        } catch (ValidationException $e) {
            return response()->json(['message' => 'Erro de validação', 'errors' => $e->errors()], 422);
        }
    }

    public function login(Request $request) {
        $usuario = Usuario::where('email', $request->email)->first();

        if(!$usuario || !Hash::check($request->senha,$usuario->senha)) {
            return response()->json(['message' => 'As credenciais informadas estão incorretas.'], 404);
        }

        // Excluindo todos os tokens antigos do usuário
        $usuario->tokens()->delete();

        // Criando um novo token para o usuário
        $token = $usuario->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Usuário autenticado com sucesso!','access_token' => $token, 'token_type' => 'Bearer'], 201);
    }

    public function logout(Request $request) {
        $usuario = $request->user();

        // Excluindo último token de acesso do usuário
        $usuario->currentAccessToken()->delete();

        return response()->json(204);
    }
}
