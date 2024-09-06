let dados = [
    {
        titulo : "Rayssa Leal",
        descricao : "A skatista brasileira, conhecida como Fadinha, se tornou a mais jovem medalhista olímpica da história do Brasil. Com apenas alguns anos de carreira profissional já coleciona títulos seu status como uma das maiores estrelas do skate feminino.",
        link : "https://pt.wikipedia.org/wiki/Raissa_Leal",
        tags : "skate, street, park, feminino, jovem talento, X Games, Tóquio 2020, medalha olímpica, mais jovem medalhista"
    }, 
    {
        titulo : "Rebeca Andrade",
        descricao : "A ginasta brasileira acumulou diversas medalhas olímpicas, tanto em provas individuais quanto por equipes, se tornando a maior medalhista olímpica do Brasil.",
        link : "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags : "solo, trave, salto, barras assimétricas, all-around, ginastica, ginástica, Tóquio 2020, medalhas olímpicas, Brasil, força, flexibilidade, versatilidade"
    }, 
    {
        titulo : "Beatriz Souza",
        descricao : "A judoca brasileira conquistou a medalha de ouro nas Olimpíadas de Paris 2024, sendo um dos destaques do esporte brasileiro.",
        link : "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags : "judô feminino, categorias leves, ippon, Jogos Olímpicos, judo, judô, Paris 2024, medalha de ouro"
    },
    {
        titulo : "Isaquias Queiroz",
        descricao : "Canoísta brasileiro, conquistou diversas medalhas olímpicas e é considerado um dos maiores nomes da canoagem mundial. Seus feitos o tornaram um dos principais representantes do esporte no Brasil.",
        link : "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        tags : "canoagem slalom, canoagem velocidade, Rio 2016, Rio 2016, Tóquio 2020, medalhas olímpicas"
      },
      {
        titulo : "Martine Grael",
        descricao : "Velejadora brasileira, integrante da dinastia Grael, uma das famílias mais vitoriosas do esporte olímpico brasileiro. Conquistou diversas medalhas em competições internacionais e é um ícone do esporte náutico no país.",
        link : "https://pt.wikipedia.org/wiki/Martine_Grael",
        tags : "vela olímpica, 49er FX, Rio 2016, Tóquio 2020, Rio 2016, Tóquio 2020, medalhas olímpicas, dinastia Grael"
      },
      {
        titulo : "Caio Bonfim",
        descricao : "Atleta brasileiro de marcha atlética, conquistou diversas medalhas em competições internacionais, incluindo uma medalha de prata nos Jogos Olímpicos. É um dos principais nomes da marcha atlética brasileira.",
        link : "https://pt.wikipedia.org/wiki/Caio_Bonfim",
        tags : "20km marcha, 50km marcha, Jogos Olímpicos, Rio 2016, Tóquio 2020, medalhas olímpicas"
      },
      {
        titulo : "Ana Marcela Cunha",
        descricao : "Nadadora brasileira de maratonas aquáticas, conquistou diversas medalhas em competições internacionais, incluindo uma medalha de ouro nos Jogos Olímpicos. É uma das maiores representantes da natação de maratonas no mundo.",
        link : "https://pt.wikipedia.org/wiki/Ana_Marcela_Cunha",
        tags : "maratona aquática, águas abertas, Jogos Olímpicos, Rio 2016, Tóquio 2020, medalhas olímpicas"
      },
      {
        titulo : "Alan Fonteles",
        descricao : "Voleibolista brasileiro, conquistou diversas medalhas em competições internacionais, incluindo uma medalha de ouro nos Jogos Olímpicos. É um dos principais nomes do vôlei de praia brasileiro.",
        link : "https://pt.wikipedia.org/wiki/Alan_Fonteles",
        tags : "vôlei de praia masculino, Jogos Olímpicos, Tóquio 2020, medalhas olímpicas"
      },
      {
        titulo : "Robert Scheidt",
        descricao : "Velejador brasileiro, um dos maiores medalhistas olímpicos do Brasil. Conquistou diversas medalhas em diferentes edições dos Jogos Olímpicos.",
        link : "https://pt.wikipedia.org/wiki/Robert_Scheidt",
        tags : "vela olímpica, Laser, Star, Jogos Olímpicos, múltiplas edições, medalhas olímpicas" 
      },
      {
        titulo : "Maurício Souza",
        descricao : "Voleibolista brasileiro, campeão olímpico e um dos maiores nomes do vôlei mundial. Sua força e habilidade no bloqueio o tornaram um ídolo do esporte.",
        link : "https://pt.wikipedia.org/wiki/Maurício_Souza",
        tags : "vôlei masculino, bloqueio, seleção brasileira, Rio 2016, medalhas olímpicas"
      },
      {
        titulo : "Aline Silva",
        descricao : "Judoca brasileira, medalhista olímpica, conhecida por sua técnica e garra dentro do tatame. É uma das principais representantes do judô feminino brasileiro.",
        link : "https://pt.wikipedia.org/wiki/Aline_Silva_(judoca)",
        tags : "Judo judô feminino, categorias pesadas, Jogos Olímpicos, Rio 2016, medalhas olímpicas"
      },
      {
        titulo : "César Cielo Filho",
        descricao : "Nadador brasileiro, recordista mundial e olímpico, conhecido por suas conquistas nas provas de velocidade. É um dos maiores nomes da natação brasileira.",
        link : "https://pt.wikipedia.org/wiki/César_Cielo_Filho",
        tags : "natação sprint, 50m livre, 100m livre, recordes mundiais, Pequim 2008, Londres 2012"
      },
      {
        titulo : "Giovanna Pedroso",
        descricao : "Atleta brasileira de salto triplo, medalhista olímpica e mundial. Seus saltos poderosos a consagraram como uma das maiores saltadoras do mundo.",
        link : "https://pt.wikipedia.org/wiki/Giovanna_Pedroso",
        tags : "salto triplo, Jogos Olímpicos, Tóquio 2020, medalhas olímpicas"
      },
      {
        titulo : "Arthur Zanetti",
        descricao : "Ginasta brasileiro, primeiro medalhista olímpico brasileiro na ginástica artística. Seus movimentos de argolas são considerados de alta dificuldade e beleza.",
        link : "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        tags : "argolas, Jogos Olímpicos, Londres 2012, Rio 2016, medalhas olímpicas, ginástica, ginastica"
      },
      {
        titulo : "Ingrid Oliveira",
        descricao : "Saltadora ornamental brasileira, conhecida por sua elegância e dificuldade nos saltos. É uma das principais representantes do salto ornamental brasileiro.",
        link : "https://pt.wikipedia.org/wiki/Ingrid_Oliveira",
        tags : "plataforma, trampolim, Jogos Olímpicos, Rio 2016"
      }
];

