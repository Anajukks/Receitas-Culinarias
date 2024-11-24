<?php

namespace App\Http\Controllers;

use App\Models\Receita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ReceitaController extends Controller
{
    public function validUser(Request $request)
    {
        // Coletando o id e token
        [$id, $token] = explode("|", $request->bearerToken(), 2);

        // Recuperando o token pelo id
        $user_id = DB::table('personal_access_tokens')->find($id)->tokenable_id;

        // Recuperando usuário a partir do id do token
        $usuario = DB::table('usuarios')->find($user_id);

        return $usuario;
    }

    public function index()
    {
        return response()->json(Receita::all(), 200);
    }

    public function store(Request $request)
    {
        $usuario = $this->validUser($request);

        if(!$usuario)
        {
            return response()->json(['message' => 'Usuário não existente ou não autenticado.'], 404);
        }

        try {
            $validatedData = $request->validate([
                'usuario_id' => 'required|exists:usuarios,id|min:1',
                'titulo' => 'required|string|min:10',
                'ingredientes' => 'required|array|min:1',
                'ingredientes.*.nome' => 'required|string|min:3',
                'ingredientes.*.quantidade' => 'required|string',
                'modo_de_preparo' => 'required|array',
                'modo_de_preparo.*.descricao' => 'required|string|min:3',
                'tempo_de_preparo' => 'required|string|min:3',
                'imagem' => 'required|file|mimes:jpg,png,pdf',
            ],[
                'usuario_id.exists' => 'O usuário selecionado não existe.',
                'usuario_id.required' => 'O campo usuario_id deve ser preenchido.',
                'titulo.string' => 'O título deve ser um texto.',
                'titulo.required' => 'O campo título deve ser preenchido.',
                'ingredientes.required' => 'O campo ingredientes devem ser preenchido.',
                'ingredientes.array' => 'O campo ingredientes deve ser um array.',
                'ingredientes.*.required' => 'Os ingredientes devem ser uma lista de 1 até n ingredientes.',
                'ingredientes.*.nome.required' => 'Cada ingrediente precisa de um nome e quantidade.',
                'ingredientes.*.quantidade.required' => 'Cada ingredientes precisa de um nome e quantidade.',  
                'ingredientes.*.nome.required' => 'O campo de nome deve ser uma string',
                'ingredientes.*.quantidade.string' => 'O campo de quantidade deve ser uma string: uma colher, 1x, 500g...',
                'modo_de_preparo.array' => 'O campo modo de preparo deve ser um array.',
                'modo_de_preparo.required' => 'O campo modo_de_preparo de ser preenchido.',
                'modo_de_preparo.*.required' => 'O modo de preparo deve possuir uma lista de 1 até n passos.',
                'modo_de_preparo.*.descricao.required' => 'Cada passo do modo de preparo precisa ter uma descricao.',
                'modo_de_preparo.*.descricao.string' => 'Cada descrição deve ser uma string.',
                'tempo_de_preparo.required' => 'O campo tempo de preparo deve ser preenchido.',
                'tempo_de_preparo.string' => 'O campo tempo de preparo deve ser uma string: 1 hora, 30 minutos, 3 dias...',
                'imagem.required' => 'O arquivo imagem deve ser preenchido.',
            ]);


            // Verificando se o usuário que está criando a receita é o mesmo do usuario_id
            if($usuario->id != $request->usuario_id)
            {
                return response()->json(['message' => 'Acesso não autorizado para esse recurso.'], 401);
            }

            $ingredientesMapeados = collect($request->ingredientes)->map(function ($ingrediente, $indice) {
                $text = ($indice) . '. ' . $ingrediente['nome'] . ': ' . $ingrediente['quantidade'] . "\n";
                return $text;
            });

            $ingredientesMapeados = $ingredientesMapeados->implode(', ');

            $preparoMapeados = collect($request->modo_de_preparo)->map(function ($modo, $indice) {
                $text = ($indice) . '. ' . $modo['descricao'] . "\n";
                return $text;
            });

            $preparoMapeados = $preparoMapeados->implode(', ');

            Receita::create([
                'usuario_id' => $request->usuario_id,
                'titulo' => $request->titulo,
                'ingredientes' => $ingredientesMapeados,
                'modo_de_preparo' => $preparoMapeados,
                'tempo_de_preparo' => $request->tempo_de_preparo,
                'imagem' => $request->file('imagem')->get()
            ]);   

            return response()->json('', 201);
        } catch (ValidationException $e) {
            return response()->json(['message'=> 'Erro de validação', 'errors' => $e->errors()], 422);
        }
    }

    public function show($id)
    {
        $receita = Receita::find($id);

        if(!$receita)
        {
            return response()->json(['message' => 'Receita não encontrada.'], 404);
        }

        return response()->json($receita, 200);
    }
    
    public function update(Request $request, $id)
    {
        $usuario = $this->validUser($request);

        if(!$usuario)
        {
            return response()->json(['message' => 'Usuário não existente ou não autenticado.'], 404);
        }

        $receita = Receita::find($id);

        if(!$receita)
        {
            return response()->json(['message' => 'Receita não encontrada.'], 404);
        }

        try {
            $validatedData = $request->validate([
                'usuario_id' => 'required|exists:usuarios,id|min:1',
                'titulo' => 'required|string|min:10',
                'ingredientes' => 'required|array|min:1',
                'ingredientes.*.nome' => 'required|string|min:3',
                'ingredientes.*.quantidade' => 'required|string',
                'modo_de_preparo' => 'required|array',
                'modo_de_preparo.*.descricao' => 'required|string|min:3',
                'tempo_de_preparo' => 'required|string|min:3',
                'imagem' => 'required|file|mimes:jpg,png,pdf',
            ],[
                'usuario_id.exists' => 'O usuário selecionado não existe.',
                'usuario_id.required' => 'O campo usuario_id deve ser preenchido.',
                'titulo.string' => 'O título deve ser um texto.',
                'titulo.required' => 'O campo título deve ser preenchido.',
                'ingredientes.required' => 'O campo ingredientes devem ser preenchido.',
                'ingredientes.array' => 'O campo ingredientes deve ser um array.',
                'ingredientes.*.required' => 'Os ingredientes devem ser uma lista de 1 até n ingredientes.',
                'ingredientes.*.nome.required' => 'Cada ingrediente precisa de um nome e quantidade.',
                'ingredientes.*.quantidade.required' => 'Cada ingredientes precisa de um nome e quantidade.',  
                'ingredientes.*.nome.required' => 'O campo de nome deve ser uma string',
                'ingredientes.*.quantidade.string' => 'O campo de quantidade deve ser uma string: uma colher, 1x, 500g...',
                'modo_de_preparo.array' => 'O campo modo de preparo deve ser um array.',
                'modo_de_preparo.required' => 'O campo modo_de_preparo de ser preenchido.',
                'modo_de_preparo.*.required' => 'O modo de preparo deve possuir uma lista de 1 até n passos.',
                'modo_de_preparo.*.descricao.required' => 'Cada passo do modo de preparo precisa ter uma descricao.',
                'modo_de_preparo.*.descricao.string' => 'Cada descrição deve ser uma string.',
                'tempo_de_preparo.required' => 'O campo tempo de preparo deve ser preenchido.',
                'tempo_de_preparo.string' => 'O campo tempo de preparo deve ser uma string: 1 hora, 30 minutos, 3 dias...',
                'imagem.required' => 'O arquivo imagem deve ser preenchido.',
            ]);

            // Verificando se o usuário que está alterando a receita é o mesmo do usuario_id
            if($usuario->id != $receita->usuario_id)
            {
                return response()->json(['message' => 'Acesso não autorizado para esse recurso.'], 401);
            }

            // Usuários não podem alterar o dono da receita
            if($receita->usuario_id != $request->usuario_id)
            {
                return response()->json(['message' => 'Não é possível alterar o usuário da receita.'], 403);
            }

            $ingredientesMapeados = collect($request->ingredientes)->map(function ($ingrediente, $indice) {
                $text = ($indice) . '. ' . $ingrediente['nome'] . ': ' . $ingrediente['quantidade'];
                return $text;
            });

            $ingredientesMapeados = $ingredientesMapeados->implode(', ');

            $preparoMapeados = collect($request->modo_de_preparo)->map(function ($modo, $indice) {
                $text = ($indice) . '. ' . $modo['descricao'];
                return $text;
            });

            $preparoMapeados = $preparoMapeados->implode(', ');

            $receita->update([
                'usuario_id' => $request->usuario_id,
                'titulo' => $request->titulo,
                'ingredientes' => $ingredientesMapeados,
                'modo_de_preparo' => $preparoMapeados,
                'tempo_de_preparo' => $request->tempo_de_preparo,
                'imagem' => $request->file('imagem')->get()
            ]);   
            
            return response()->json('', 200);
        } catch(ValidationException $e) {
            return response()->json(['message'=> 'Erro de validação', 'errors' => $e->errors()], 422);
        }
    }

    public function destroy(Request $request, $id)
    {
        $usuario = $this->validUser($request);

        if(!$usuario)
        {
            return response()->json(['message' => 'Usuário não existente ou não autenticado.'], 404);
        }

        $receita = Receita::find($id);

        if(!$receita)
        {
            return response()->json(['message' => 'Receita não encontrada.'], 404);
        }

        // Verificando se o usuário que está alterando a receita é o mesmo do usuario_id
        if($usuario->id != $receita->usuario_id)
        {
            return response()->json(['message' => 'Acesso não autorizado para esse recurso.'], 401);
        }

        $receita->delete();

        return response()->json('',201);
    }
}
