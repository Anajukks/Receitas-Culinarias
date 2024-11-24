<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;


class ReceitaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('receitas')->insert([
            [
                'usuario_id' => 1,
                'titulo' => 'Bolo de Maçã',
                'imagem' => file_get_contents('public/img/bolo-de-maca.jpeg'),
                'ingredientes' => "1. Maçã: 3 unidades\n2. Farinha: 2 xícaras\n3. Açúcar: 1 xícara\n4. Ovos: 2 unidades\n5. Fermento: 1 colher de sopa",
                'modo_de_preparo' => "- Pré-aqueça o forno\n- Misture todos os ingredientes\n- Asse por 40 minutos a 180°C",
                'tempo_de_preparo' => '1 hora',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 2,
                'titulo' => 'Arroz com Feijão',
                'imagem' => file_get_contents('public/img/arroz-com-feijao.jpg'),
                'ingredientes' => "1. Arroz: 1 xícara\n2. Feijão: 1 xícara\n3. Água: 4 xícaras\n4. Sal: a gosto\n5. Alho: 1 dente",
                'modo_de_preparo' => "- Cozinhe o feijão\n- Refogue o alho e junte o arroz\n- Cozinhe o arroz e feijão juntos",
                'tempo_de_preparo' => '45min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 3,
                'titulo' => 'Torta de Limão',
                'imagem' => file_get_contents('public/img/torta-de-limao.jpg'),
                'ingredientes' => "1. Biscoito: 200g\n2. Manteiga: 100g\n3. Leite condensado: 1 lata\n4. Limão: 3 unidades\n5. Creme de leite: 1 lata",
                'modo_de_preparo' => "- Triture os biscoitos e misture com a manteiga\n- Recheie com leite condensado e limão\n- Deixe gelar por 2 horas",
                'tempo_de_preparo' => '2 horas',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 4,
                'titulo' => 'Salada de Frutas',
                'imagem' => file_get_contents('public/img/salada-de-frutas.jpg'),
                'ingredientes' => "1. Maçã: 1 unidade\n2. Banana: 1 unidade\n3. Morango: 5 unidades\n4. Laranja: 1 unidade\n5. Mel: a gosto",
                'modo_de_preparo' => "- Corte todas as frutas\n- Misture em uma tigela\n- Adicione mel a gosto",
                'tempo_de_preparo' => '10min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 5,
                'titulo' => 'Feijoada',
                'imagem' => file_get_contents('public/img/feijoada.jpg'),
                'ingredientes' => "1. Feijão preto: 500g\n2. Linguiça: 300g\n3. Bacon: 200g\n4. Carne seca: 300g\n5. Sal: a gosto",
                'modo_de_preparo' => "- Cozinhe o feijão\n- Frite a linguiça e o bacon\n- Misture tudo e cozinhe por mais 30 minutos",
                'tempo_de_preparo' => '3 horas',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 1,
                'titulo' => 'Pão Caseiro',
                'imagem' => file_get_contents('public/img/pao-caseiro.jpg'),
                'ingredientes' => "1. Farinha: 500g\n2. Fermento biológico: 10g\n3. Água: 300ml\n4. Sal: 1 colher de chá\n5. Açúcar: 1 colher de sopa",
                'modo_de_preparo' => "- Misture os ingredientes\n- Deixe a massa crescer por 1 hora\n- Asse por 30 minutos a 200°C",
                'tempo_de_preparo' => '2 horas',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 2,
                'titulo' => 'Estrogonofe de Frango',
                'imagem' => file_get_contents('public/img/estrogonofe-de-frango.jpg'),
                'ingredientes' => "1. Frango: 500g\n2. Creme de leite: 1 caixa\n3. Ketchup: 3 colheres de sopa\n4. Mostarda: 1 colher de sopa\n5. Champignon: 100g",
                'modo_de_preparo' => "- Corte o frango e refogue\n- Adicione o creme de leite, ketchup e mostarda\n- Misture tudo e sirva",
                'tempo_de_preparo' => '30min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 3,
                'titulo' => 'Panqueca',
                'imagem' => file_get_contents('public/img/panqueca.jpg'),
                'ingredientes' => "1. Leite: 1 xícara\n2. Ovos: 2 unidades\n3. Farinha de trigo: 1 xícara\n4. Sal: a gosto",
                'modo_de_preparo' => "- Bata todos os ingredientes\n- Despeje a massa na frigideira\n- Cozinhe até dourar dos dois lados",
                'tempo_de_preparo' => '20min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 4,
                'titulo' => 'Sopa de Legumes',
                'imagem' => file_get_contents('public/img/sopa-de-legumes.jpg'),
                'ingredientes' => "1. Batata: 2 unidades\n2. Cenoura: 1 unidade\n3. Abobrinha: 1 unidade\n4. Água: 1 litro\n5. Sal: a gosto",
                'modo_de_preparo' => "- Corte os legumes\n- Cozinhe em água por 30 minutos\n- Tempere com sal a gosto",
                'tempo_de_preparo' => '40min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 5,
                'titulo' => 'Lasanha de Carne',
                'imagem' => file_get_contents('public/img/lasanha-de-carne.jpg'),
                'ingredientes' => "1. Massa de lasanha: 500g\n2. Carne moída: 500g\n3. Molho de tomate: 1 lata\n4. Queijo mussarela: 300g\n5. Parmesão ralado: 50g",
                'modo_de_preparo' => "- Cozinhe a carne moída com o molho\n- Monte camadas com massa, carne e queijo\n- Asse por 30 minutos",
                'tempo_de_preparo' => '1 hora',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 1,
                'titulo' => 'Brigadeiro',
                'imagem' => file_get_contents('public/img/brigadeiro.jpg'),
                'ingredientes' => "1. Leite condensado: 1 lata\n2. Manteiga: 1 colher de sopa\n3. Chocolate em pó: 3 colheres de sopa\n4. Granulado: a gosto",
                'modo_de_preparo' => "- Misture o leite condensado, manteiga e chocolate\n- Cozinhe até engrossar\n- Modele e passe no granulado",
                'tempo_de_preparo' => '30min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'usuario_id' => 2,
                'titulo' => 'Omelete',
                'imagem' => file_get_contents('public/img/omelete.jpg'),
                'ingredientes' => "1. Ovos: 3 unidades\n2. Sal: a gosto\n3. Queijo: 50g\n4. Presunto: 50g\n5. Cebolinha: a gosto",
                'modo_de_preparo' => "- Bata os ovos com sal\n- Adicione o queijo, presunto e cebolinha\n- Cozinhe em uma frigideira até dourar",
                'tempo_de_preparo' => '15min',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
        
    }
}
