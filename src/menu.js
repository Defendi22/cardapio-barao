// Dados do cardápio — transcritos dos cardápios impressos (pasta /images).
// Para alterar preços ou pratos, edite somente este arquivo.

const img = (name) => `/pratos/${name}.webp`

export const pratos = [
  {
    id: 'bacalhaus',
    title: 'Bacalhaus',
    subtitle: 'Lombos nobres preparados à moda portuguesa',
    banner: [
      { label: '1 pessoa · 200 g', value: 169 },
      { label: '2 pessoas · 400 g', value: 335 },
    ],
    items: [
      {
        name: 'Dourado e Crocante do Galego',
        desc: 'Lombo frito no puro azeite português, com batatinhas aloiradas, brócolis, azeitona portuguesa, pimentão vermelho, ovos, uma deliciosa cebola puxada com azeite e alho torrado para perfumar. Acompanha arroz e verdura.',
        img: img('galego'),
      },
      {
        name: 'Na Brasa do Manoel Capim',
        desc: 'Lombo de bacalhau assado na brasa, acompanha batatinhas aloiradas, brócolis, azeitona portuguesa, pimentão vermelho, ovos, uma deliciosa cebola puxada em azeite e alho torrado para perfumar. Acompanha arroz e verdura.',
        img: img('manoel-capim'),
      },
      {
        name: 'Zé do Pipo',
        desc: 'Lombo de bacalhau cozido no leite como antigamente e envolvido com aligot de batatas e queijo, verdura, cebola refogadinha, maionese gourmet e Catupiry. Tudo gratinado no forno e decorado com pimentões, ovos e azeitona portuguesa. Acompanha arroz.',
        img: img('ze-do-pipo'),
      },
      {
        name: 'Natas da Maria das Cabras',
        desc: 'Bacalhau em lombos com natas, batatinha corada, alho, noz-moscada, queijo parmesão, especiarias, ovos, verdura, pimenta e azeitonas portuguesas. Acompanha arroz e verdura.',
        img: img('natas'),
      },
      {
        name: 'Lagareiro ao Murro Trás-os-Montes',
        desc: 'Lombo de bacalhau mergulhado no azeite com batatinhas ao murro e a cabeça de alho confitadas no azeite e cebola. Tudo assado, pegando muito o sabor no nobre pescado. Recoberto com alho filetado, ovos, azeitona portuguesa e pimentão vermelho. Acompanha arroz e verdura.',
        img: img('lagareiro'),
      },
      {
        name: 'Portuguesa Laurindinha',
        desc: 'Lombo de bacalhau confitado em azeite português com batatinhas confitadas, cebola, dentes de alho, ovos, azeitona portuguesa, pimentão vermelho, louro, tomate-cereja e alecrim. Acompanha arroz e verdura.',
        img: img('laurindinha'),
      },
    ],
  },
  {
    id: 'portugueses',
    title: 'Petiscos Portugueses',
    subtitle: 'Sabores da terrinha para começar ou compartilhar',
    items: [
      { name: 'Sardinhada Portuguesa', img: img('sardinhada'), prices: [{ value: 99 }] },
      { name: 'Rasgadinho de Bacalhau', img: img('rasgadinho'), prices: [{ value: 24 }] },
      { name: 'Ceviche de Bacalhau', img: img('ceviche'), prices: [{ value: 74 }] },
      { name: 'Punheta de Bacalhau', img: img('punheta'), prices: [{ value: 74 }] },
      {
        name: 'Alheira à Caçador',
        desc: 'Embutido especial à base de carne de caça, suína e ave, pão, alho, páprica e pimenta. Fritas em cubos e um ovo frito.',
        img: img('alheira-cacador'),
        prices: [{ value: 59 }],
      },
      {
        name: 'Alheira Crocante',
        desc: 'Embutido de cortes suíno, bovino, ave, cebola, alho, paio, pernil, pimenta-do-reino e dedo-de-moça.',
        img: img('alheira-crocante'),
        prices: [{ value: 49 }],
      },
    ],
  },
  {
    id: 'bafo',
    title: 'Carnes à Bafo',
    subtitle: 'Defumadas lentamente em nossas churrasqueiras',
    items: [
      {
        name: 'Costela à Bafo',
        desc: 'A costela descansa em nossas churrasqueiras por longas 10 horas até encontrar a melhor maciez, aroma, textura e sabor. Servida com osso, acompanha farofa biju crocante, molho especial e uma guarnição preferida.',
        img: img('costela-bafo'),
        badge: 'Especialidade',
        prices: [
          { label: 'Do chef · aprox. 600 g', value: 145 },
          { label: '1/2 costela · aprox. 900 g', value: 199 },
          { label: 'Costela inteira · aprox. 1,4 kg', value: 329 },
        ],
      },
      {
        name: 'Cupim à Bafo',
        desc: 'O cupim Burnt Ends marmorizado é de procedência do cruzamento com gado europeu. Acompanha farofa biju crocante, molho especial e uma guarnição preferida.',
        img: img('cupim-bafo'),
        prices: [{ label: 'Do chef · aprox. 400 g', value: 134 }],
      },
      {
        name: 'Costelinha Suína no Barbecue',
        desc: 'Nossa Baby Back Ribs é de origem europeia, Large White (britânica) e Landrace (dinamarquesa), onde os animais se alimentam de frutas e castanhas, caracterizando o marmoreio da carne. Acompanha arroz, feijão, farofa, uma guarnição preferida e escolha entre os molhos barbecue ou mostarda com habanero e manga produzidos por nós.',
        img: img('costelinha'),
        prices: [{ label: '1 pessoa · 350 g', value: 89 }],
      },
      {
        name: 'Aperitivo de Costela à Bafo Desfiada',
        desc: '200 g de costela que descansa em nossas churrasqueiras por longas 10 horas até encontrar a melhor maciez, aroma, textura e sabor. Acompanha farofa biju, molho especial e uma guarnição preferida.',
        img: img('aperitivo-costela'),
        prices: [{ value: 73 }],
      },
      {
        name: 'Aperitivo de Cupim à Bafo Desfiado',
        desc: '200 g de Burnt Ends marmorizado, procedente do cruzamento de gado europeu. Farofa biju, molho especial e uma guarnição preferida.',
        img: img('aperitivo-cupim'),
        prices: [{ value: 73 }],
      },
    ],
    notes: [
      {
        title: 'Escolha a guarnição preferida',
        text: 'Mandioca frita ou cozida, fritas portuguesa, polenta ou batata rústica.',
      },
      {
        title: 'Escolha o seu molho preferido',
        text: 'Barbecue, creme de alho, chimichurri, vinagrete, cebolete na mostarda ou pimenta.',
      },
    ],
  },
  {
    id: 'parmegianas',
    title: 'Parmegianas & Escondidinhos',
    subtitle: 'Gratinados generosos, feitos para dividir',
    items: [
      {
        name: 'Parmegiana de Costela à Bafo',
        desc: 'A costela é empanada com farinha de rosca, molho de tomate da casa, coberta com muçarela em abundância. Acompanha arroz e fritas portuguesa.',
        img: img('parmegiana-costela'),
        prices: [
          { label: '1 pessoa', value: 89 },
          { label: '2 pessoas', value: 169 },
        ],
      },
      {
        name: 'Parmegianas',
        desc: 'A sua proteína preferida, com molho de tomate feito por nós e cobertura de muçarela. Acompanha arroz e fritas rústica. Serve 2 pessoas.',
        img: img('parmegianas'),
        prices: [
          { label: 'Frango', value: 119 },
          { label: 'Mignon', value: 159 },
          { label: 'Tilápia', value: 145 },
          { label: 'Berinjela', value: 99 },
        ],
      },
      {
        name: 'Escondidinhos',
        desc: 'O nome já diz tudo: a proteína é recoberta por uma deliciosa camada de aligot de batata, cebola, alho, alho-poró e queijo parmesão. Acompanha arroz e fritas portuguesa.',
        img: img('escondidinho'),
        prices: [
          { label: 'Costela à bafo, camarão ou carne seca · 1 pessoa', value: 89 },
          { label: 'Costela à bafo, camarão ou carne seca · 2 pessoas', value: 169 },
          { label: 'Frango · 1 pessoa', value: 79 },
          { label: 'Frango · 2 pessoas', value: 159 },
        ],
      },
    ],
  },
  {
    id: 'pratos',
    title: 'Pratos da Casa',
    subtitle: 'Clássicos brasileiros, bem servidos',
    items: [
      {
        name: 'Bife a Cavalo',
        desc: 'Bife suculento grelhado no ponto, coberto com ovo frito de gema macia, acompanhado de arroz branco, feijão e batatas fritas crocantes.',
        img: img('bife-cavalo'),
        prices: [{ value: 42 }],
      },
      {
        name: 'Virada Paulista',
        desc: 'Clássico da culinária paulista com arroz, feijão, couve refogada, farofa crocante, banana frita, ovo estrelado e suculenta carne suína grelhada.',
        img: img('virada-paulista'),
        prices: [{ value: 44 }],
      },
      {
        name: 'Macarronada ao Molho Sugo',
        desc: 'Macarrão ao molho sugo encorpado, coberto com suculentas tiras de frango ou carne grelhado(a).',
        img: img('macarronada'),
        prices: [
          { label: 'Frango', value: 29 },
          { label: 'Carne', value: 32 },
        ],
      },
      {
        name: 'Frango à Passarinho',
        desc: 'Frango em cortes a passarinho, frito.',
        img: img('frango-passarinho'),
        prices: [{ value: 69 }],
      },
    ],
  },
  {
    id: 'porcoes',
    title: 'Porções',
    subtitle: 'Para petiscar com a mesa toda',
    items: [
      {
        name: 'Bolinho de Costela à Bafo',
        desc: '8 unidades.',
        img: img('bolinho-costela-8'),
        prices: [{ value: 42 }],
      },
      {
        name: 'Bolinho de Costela com Fritas',
        desc: '5 unidades acompanhadas de fritas.',
        img: img('bolinho-costela-fritas'),
        prices: [{ value: 39 }],
      },
      {
        name: 'Bolinhos de Bacalhau',
        img: img('bolinho-bacalhau-8'),
        prices: [
          { label: '4 unidades', value: 20 },
          { label: '8 unidades', value: 38 },
        ],
      },
      {
        name: 'Mix de 15 Bolinhos',
        desc: 'O aperitivo perfeito com bolinhos de queijo, frango e carne.',
        img: img('mix-bolinhos'),
        prices: [{ value: 49 }],
      },
      {
        name: 'Pastelzinho Misto',
        desc: 'Mix de 12 unidades de pastéis de carne e queijo.',
        img: img('pastelzinho'),
        prices: [{ value: 66 }],
      },
      {
        name: 'Isca de Frango Crocante',
        desc: 'Frango deliciosamente temperado e empanado crocante. Serve 2 pessoas.',
        img: img('isca-frango'),
        prices: [{ value: 64 }],
      },
      {
        name: 'Isca de Tilápia',
        desc: 'Tilápia cortada em tirinhas com um empanamento exclusivamente feito por nós, super crocante. Serve 2 pessoas.',
        img: img('isca-tilapia'),
        prices: [{ value: 75 }],
      },
      { name: 'Panceta Crocante', img: img('panceta'), prices: [{ value: 64 }] },
      { name: 'Provolone à Milanesa', img: img('provolone'), prices: [{ value: 79 }] },
      {
        name: 'Tirinhas de Berinjela',
        desc: 'Berinjela filetada em palitos e empanada. Deliciosamente crocante a cada pedaço.',
        img: img('berinjela'),
        prices: [{ value: 34 }],
      },
      { name: 'Batata Portuguesa', img: img('batata'), prices: [{ value: 38 }] },
      { name: 'Polenta', img: img('polenta'), prices: [{ value: 38 }] },
      { name: 'Mandioca', img: img('mandioca'), prices: [{ value: 38 }] },
    ],
  },
  {
    id: 'jantar',
    title: 'Somente Jantar',
    subtitle: 'Disponíveis apenas no período noturno',
    items: [
      {
        name: 'Linguiça Acebolada',
        desc: 'Serve 2 pessoas.',
        img: img('linguica'),
        prices: [{ value: 49 }],
      },
      {
        name: 'Filé Mignon Acebolado',
        desc: 'Serve 2 pessoas.',
        img: img('file-acebolado'),
        prices: [{ value: 119 }],
      },
    ],
  },
  {
    id: 'saladas',
    title: 'Saladas',
    items: [
      { name: 'Salada Executivo', img: img('salada-executivo'), prices: [{ value: 8 }] },
      { name: 'Salada de Alface, Tomate e Cebola', img: img('salada-alface'), prices: [{ value: 19 }] },
    ],
  },
  {
    id: 'kids',
    title: 'Kids',
    subtitle: 'Pratos pensados para os pequenos',
    items: [
      {
        name: 'Prato Kids',
        desc: 'Arroz, feijão, fritas e a proteína escolhida.',
        img: img('kids-prato'),
        prices: [
          { label: 'Frango', value: 29 },
          { label: 'Carne', value: 35 },
        ],
      },
      {
        name: 'Strogonoff Kids',
        desc: 'Com arroz e batata palha.',
        img: img('strogonoff'),
        prices: [
          { label: 'Frango', value: 28 },
          { label: 'Carne', value: 35 },
        ],
      },
      {
        name: 'Macarrão Kids',
        desc: 'Macarrão ao sugo com fritas e a proteína escolhida.',
        img: img('kids-macarrao'),
        prices: [
          { label: 'Frango', value: 26 },
          { label: 'Carne', value: 29 },
        ],
      },
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas',
    subtitle: 'Doçaria portuguesa e clássicos da casa',
    items: [
      { name: 'Pastel de Belém com Sorvete', img: img('pastel-belem'), prices: [{ value: 25 }] },
      { name: 'Carolinas com Sorvete', img: img('carolinas'), prices: [{ value: 20 }] },
      { name: 'Petit Gâteau', img: img('petit-gateau'), prices: [{ value: 28 }] },
      { name: 'Sorvete 2 Bolas', img: img('sorvete'), prices: [{ value: 19 }] },
      {
        name: 'Docinho Português',
        img: img('docinho'),
        prices: [
          { label: 'Simples', value: 19 },
          { label: 'Com sorvete', value: 25 },
        ],
      },
      { name: 'Sorvete de Papaya com Cassis', img: img('papaya'), prices: [{ value: 22 }] },
      {
        name: 'Pudim de Leite',
        img: img('pudim'),
        prices: [
          { label: 'Simples', value: 19 },
          { label: 'Com sorvete', value: 25 },
        ],
      },
      { name: 'Mousse de Chocolate', img: img('mousse'), prices: [{ value: 15 }] },
    ],
  },
]

// Bebidas: listas sem foto, agrupadas em blocos.
export const bebidas = {
  id: 'bebidas',
  title: 'Bebidas',
  subtitle: 'Drinks, chopp, cervejas e muito mais',
  promo: {
    title: 'Pedindo balde com 6, a sétima é por nossa conta!',
    text: 'Válido para qualquer cerveja, sendo todas iguais.',
  },
  groups: [
    {
      title: 'Caipirinhas',
      note: 'Sabores: limão, frutas vermelhas, uva, abacaxi e maracujá',
      items: [
        { name: 'Caipirinha', desc: 'Cachaça ou vinho', value: 23 },
        { name: 'Caipiríssima', desc: 'Rum', value: 29 },
        { name: 'Caipiroska', desc: 'Vodka nacional', value: 32 },
        { name: 'Sakerinha', desc: 'Saquê', value: 29 },
      ],
    },
    {
      title: 'Drinks de Gin',
      note: 'Todos por R$ 36',
      items: [
        { name: 'Laranja com hibisco', value: 36 },
        { name: 'Manga com manjericão', value: 36 },
        { name: 'Frutas vermelhas', value: 36 },
        { name: 'Uva varietal', value: 36 },
        { name: 'Limão taiti', value: 36 },
        { name: 'Maracujá da terra', value: 36 },
        { name: 'Maracujá com dedo-de-moça', value: 36 },
        { name: 'Abacaxi com hortelã', value: 36 },
      ],
    },
    {
      title: 'Coquetéis',
      items: [
        { name: 'Margarita', value: 35 },
        { name: 'Aperol Spritz', value: 35 },
        { name: 'Negroni', value: 39 },
      ],
    },
    {
      title: 'Chopp Brahma',
      items: [
        { name: 'Caldereta', value: 11.9 },
        { name: 'Caneca', value: 17.9 },
        { name: 'Caldereta escuro', value: 13.9 },
        { name: 'Caneca escuro', value: 19.9 },
      ],
    },
    {
      title: 'Cervejas',
      items: [
        { name: 'Original', desc: '600 ml', value: 20 },
        { name: 'Heineken', desc: '600 ml', value: 24 },
        { name: 'Estrella Galicia', desc: '600 ml', value: 20 },
        { name: 'Spaten', desc: '600 ml', value: 20 },
        { name: 'Stella Artois', desc: '600 ml', value: 20 },
        { name: 'Serramalte', desc: '600 ml', value: 20 },
        { name: 'Heineken', desc: '355 ml', value: 15 },
        { name: 'Heineken 0%', desc: '355 ml', value: 15 },
        { name: 'Malzbier', desc: '355 ml', value: 15 },
        { name: 'Corona', desc: '350 ml', value: 15 },
        { name: 'Estrella Galicia', desc: '350 ml', value: 15 },
      ],
    },
    {
      title: 'Doses & Drinks',
      items: [
        { name: 'Vodka nacional', value: 16 },
        { name: 'Vodka importada', value: 28 },
        { name: 'Steinhäger nacional', value: 16 },
        { name: 'Steinhäger importado', value: 32 },
        { name: 'Campari', value: 19 },
        { name: 'Cuba Libre', value: 24 },
        { name: 'Tequila José Cuervo', value: 28 },
        { name: 'Cachaça Amburana', value: 19 },
        { name: 'Cachaça branca', value: 19 },
        { name: 'Cachaça no carvalho', value: 19 },
        { name: 'Jägermeister', value: 29 },
        { name: 'Vinho do Porto Ruby', value: 24 },
      ],
    },
    {
      title: 'Whiskies',
      items: [
        { name: 'Whisky 12 anos', desc: 'Black Label, Jack Daniel’s, Ballantine’s ou Chivas', value: 34 },
        { name: 'Black Label', desc: 'Garrafa', value: 330 },
        { name: 'Whisky 8 anos', desc: 'Red Label, Grant’s ou White Horse', value: 28 },
        { name: 'Red Label', desc: 'Garrafa', value: 190 },
      ],
    },
    {
      title: 'Vinhos & Espumante',
      items: [
        { name: 'Vinho português', desc: 'Taça 200 ml · tinto, branco ou rosé', value: 25 },
        { name: 'Vinho nacional suave', desc: 'Taça 200 ml · tinto', value: 24 },
        { name: 'Espumante importado', desc: 'Garrafa', value: 99 },
      ],
    },
    {
      title: 'Licores',
      note: 'Dose de 50 ml',
      items: [
        { name: 'Cassis', value: 12 },
        { name: 'Licor 43', value: 30 },
        { name: 'Frangelico', value: 30 },
        { name: 'Cointreau', value: 30 },
        { name: 'Amarula', value: 30 },
      ],
    },
    {
      title: 'Sem Álcool & Energéticos',
      items: [
        { name: 'Água', desc: 'Com ou sem gás', value: 7.9 },
        { name: 'H2O', desc: 'Tradicional ou Limonade', value: 11 },
        { name: 'Refrigerante lata 350 ml', desc: 'Coca-Cola, Guaraná ou Soda Limonada', value: 8.9 },
        { name: 'Tônica', desc: 'Tradicional ou citrus', value: 8.9 },
        { name: 'Sucos', desc: 'Laranja, uva, maçã ou abacaxi com hortelã', value: 13.9 },
        { name: 'Red Bull', value: 21 },
        { name: 'Smirnoff Ice', value: 19 },
      ],
    },
  ],
}
