<?php

namespace App\Http\Controllers;

use App\Models\Receita;
use Illuminate\Http\Request;

class ReceitaController extends Controller
{
    public function index()
    {
        return Receita::all();
    }

    // public function store(Request $request)
    // {
    //     return Receita::create([
    //         'usuario_id' => $request->usuario_id,
    //         'titulo' => $request->titulo,
    //         'ingredientes' => $request->ingredientes,
    //         'modo_de_preparo' => $request->modo_de_preparo,
    //         'tempo_de_preparo' => $request->tempo_de_preparo,
    //         'imagem' => $request->file('imagem')->get()
    //     ]);   
    // }

    public function store(Request $request)
    {
        // Verifica se a imagem foi enviada
        if ($request->hasFile('imagem') && $request->file('imagem')->isValid()) {
            // Salva a imagem e pega o caminho
            $imagePath = $request->file('imagem')->store('imagens_receitas', 'public');
        } else {
            $imagePath = null; // ou trata de acordo com a necessidade
        }

        // Criação da receita com o caminho da imagem (ou null, caso não tenha)
        return Receita::create([
            'usuario_id' => $request->usuario_id,
            'titulo' => $request->titulo,
            'ingredientes' => $request->ingredientes,
            'modo_de_preparo' => $request->modo_de_preparo,
            'tempo_de_preparo' => $request->tempo_de_preparo,
            'imagem' => $imagePath
        ]);

        Receita::create($request->all());
        return response('',201);
    }

    public function show($id)
    {
        return Receita::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $receita = Receita::findOrFail($id);
        $receita->update($request->all());
    }

    public function destroy($id)
    {
        $receita = Receita::findOrFail($id);
        $receita->delete();
    }
}
