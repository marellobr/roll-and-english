const { getDb, run } = require('./database');
const { v4: uuidv4 } = require('uuid');

const microAulas = [
  {
    id: uuidv4(), titulo: 'Guard – Guarda', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Maintain your guard to defend and set up sweeps. Use your legs actively to control distance and create opportunities for attacks.',
    traducao: 'Mantenha sua guarda para se defender e preparar raspagens. Use as pernas ativamente para controlar a distancia.',
    video_link: 'https://www.youtube.com/embed/example_guard',
    vocabulario: JSON.stringify(['guard','defend','sweep','distance','legs','attack']),
    frases: JSON.stringify(["Don't let them pass your guard","Use your legs actively","Set up the sweep from here","Control the distance"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "guard"?',alternativas:['Guarda','Raspagem','Finalizacao'],resposta:'Guarda',explicacao:'Guard e a posicao onde voce esta por baixo com as pernas controlando o oponente.'},
      {pergunta:'Qual e o objetivo principal da guard?',alternativas:['Defender e preparar raspagens','Finalizar o oponente','Passar a guarda'],resposta:'Defender e preparar raspagens',explicacao:'Da guard voce se defende e prepara suas raspagens e finalizacoes.'},
      {pergunta:'Complete: "Don\'t let them pass your ___"',alternativas:['guard','mount','back'],resposta:'guard',explicacao:'"Dont let them pass your guard" - nao deixe eles passarem sua guarda!'}
    ]),
    pontos: 15, ordem: 1
  },
  {
    id: uuidv4(), titulo: 'Side Control – Controle Lateral', tipo: 'microlesson', categoria: 'technique',
    transcricao: "From side control, use your elbow to block the hip. Your back creates a line across your opponent's body.",
    traducao: 'Do controle lateral, use o cotovelo para bloquear o quadril. Suas costas criam uma linha pelo corpo do oponente.',
    video_link: 'https://www.youtube.com/embed/example_side_control',
    vocabulario: JSON.stringify(['side control','elbow','hip','block','pressure','stabilize']),
    frases: JSON.stringify(['Block the hip with your elbow','Stabilize the position first','Keep pressure on the upper body','Control the near side arm']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "side control"?',alternativas:['Controle lateral','Montada','Pegada nas costas'],resposta:'Controle lateral',explicacao:'Side control e a posicao ao lado do oponente - um dos controles mais dominantes.'},
      {pergunta:'O que bloqueia o quadril no side control?',alternativas:['O cotovelo','O joelho','A cabeca'],resposta:'O cotovelo',explicacao:'No side control, o cotovelo bloqueia o quadril impedindo o oponente de escapar.'},
      {pergunta:'Complete: "Stabilize the ___ first"',alternativas:['position','guard','choke'],resposta:'position',explicacao:'"Stabilize the position first" - estabilize a posicao primeiro antes de atacar.'}
    ]),
    pontos: 15, ordem: 2
  },
  {
    id: uuidv4(), titulo: 'Mount – Montada', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Control your opponent from the mount. Keep pressure on their chest and adjust your hips to maintain balance.",
    traducao: 'Controle o oponente da montada. Mantenha pressao no peito e ajuste os quadris para manter equilibrio.',
    video_link: 'https://www.youtube.com/embed/example_mount',
    vocabulario: JSON.stringify(['mount','pressure','balance','dominant','hips','chest']),
    frases: JSON.stringify(["Keep pressure on their chest","Adjust your hips for balance","Stay in a dominant position","Don't let them bridge and roll"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "mount"?',alternativas:['Montada','Guarda','Controle lateral'],resposta:'Montada',explicacao:'Mount e quando voce esta sentado sobre o peito do oponente - posicao de alto controle.'},
      {pergunta:'O que voce deve manter na montada?',alternativas:['Pressao no peito do oponente','Distancia do oponente','A guarda fechada'],resposta:'Pressao no peito do oponente',explicacao:'Manter pressao no peito e fundamental para controlar o oponente da montada.'},
      {pergunta:'Complete: "Don\'t let them ___ and roll"',alternativas:['bridge','sweep','escape'],resposta:'bridge',explicacao:'"Dont let them bridge and roll" - nao deixe o oponente fazer a ponte e rolar.'}
    ]),
    pontos: 15, ordem: 3
  },
  {
    id: uuidv4(), titulo: 'Half Guard – Meia Guarda', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'From half guard, use your underhook and hip position to recover full guard or initiate a sweep.',
    traducao: 'Da meia guarda, use o underhook e o quadril para recuperar a guarda ou iniciar uma raspagem.',
    video_link: 'https://www.youtube.com/embed/example_half_guard',
    vocabulario: JSON.stringify(['half guard','underhook','recover','frame','knee','hip']),
    frases: JSON.stringify(['Fight for the underhook','Use your knee as a frame','Recover your guard from here','Control the inside position']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "half guard"?',alternativas:['Meia guarda','Guarda completa','Guarda nas costas'],resposta:'Meia guarda',explicacao:'Half guard e quando voce controla uma das pernas do oponente entre as suas.'},
      {pergunta:'Qual e a chave para controlar a meia guarda?',alternativas:['O underhook','O collar grip','O joelho'],resposta:'O underhook',explicacao:'O underhook e fundamental na meia guarda - quem tem o underhook controla a posicao.'},
      {pergunta:'Complete: "Fight for the ___"',alternativas:['underhook','guard','choke'],resposta:'underhook',explicacao:'"Fight for the underhook" - lute pelo underhook!'}
    ]),
    pontos: 15, ordem: 4
  },
  {
    id: uuidv4(), titulo: 'Off Balance – Desequilibrio', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'The off balance creates momentum. Before you sweep, off balance your opponent first. Pull, push, create movement.',
    traducao: 'O desequilibrio cria momentum. Antes de raspar, desequilibre o oponente primeiro. Puxe, empurre, crie movimento.',
    video_link: 'https://www.youtube.com/embed/example_offbalance',
    vocabulario: JSON.stringify(['off balance','momentum','sweep','pull','push','initiate']),
    frases: JSON.stringify(['Off balance them before the sweep','Create momentum first','Pull and push to initiate',"Without momentum it's hard to finish"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "off balance"?',alternativas:['Desequilibrio','Raspagem','Postura'],resposta:'Desequilibrio',explicacao:'Off balance e o desequilibrio - fundamental para iniciar raspagens com eficiencia.'},
      {pergunta:'O que o off balance cria?',alternativas:['Momentum','Finalizacao','Guarda'],resposta:'Momentum',explicacao:'O off balance cria momentum - o movimento inicial que facilita a raspagem.'},
      {pergunta:'Complete: "Off balance them ___ the sweep"',alternativas:['before','after','during'],resposta:'before',explicacao:'"Off balance them before the sweep" - desequilibre antes de raspar!'}
    ]),
    pontos: 15, ordem: 5
  },
  {
    id: uuidv4(), titulo: 'Grips – Pegadas', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Be consistent with your grips. Stay on one set of grips and combine your techniques. Switching too early loses position.',
    traducao: 'Seja consistente com suas pegadas. Fique em um conjunto de pegadas e combine suas tecnicas.',
    video_link: 'https://www.youtube.com/embed/example_grips',
    vocabulario: JSON.stringify(['grips','collar grip','elbow grip','wrist','consistent','switch']),
    frases: JSON.stringify(['Stay consistent on your grips',"Don't switch grips too early",'Use collar grip to control distance','Fight to maintain your grips']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "grips"?',alternativas:['Pegadas','Raspagens','Finalizacoes'],resposta:'Pegadas',explicacao:'Grips sao as pegadas - fundamentais para controlar o oponente no kimono.'},
      {pergunta:'O que acontece se voce troca as pegadas cedo demais?',alternativas:['Perde a posicao','Finaliza mais rapido','Raspa o oponente'],resposta:'Perde a posicao',explicacao:'Trocar de pegada cedo demais leva a posicoes inconclusas e perde o controle.'},
      {pergunta:'Complete: "Don\'t switch grips too ___"',alternativas:['early','late','fast'],resposta:'early',explicacao:'"Dont switch grips too early" - nao troque de pegada cedo demais!'}
    ]),
    pontos: 15, ordem: 6
  },
  {
    id: uuidv4(), titulo: 'Chaining Techniques – Encadeamento', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Chain your techniques. If the first sweep doesn't work, connect to the next. Keep flowing without stopping.",
    traducao: 'Encadeie suas tecnicas. Se a primeira raspagem nao funcionar, conecte a proxima. Continue fluindo sem parar.',
    video_link: 'https://www.youtube.com/embed/example_chaining',
    vocabulario: JSON.stringify(['chain','connect','flow','reaction','combination','sequence']),
    frases: JSON.stringify(['Chain your techniques together',"React to your partner's defense",'Connect sweep to sweep','Keep flowing without stopping']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "chain your techniques"?',alternativas:['Encadear as tecnicas','Parar apos cada tecnica','Mudar de guarda'],resposta:'Encadear as tecnicas',explicacao:'Chaining e conectar uma tecnica a outra em sequencia sem parar.'},
      {pergunta:'O que deve guiar a proxima tecnica?',alternativas:['A reacao do oponente','Seu plano original','A posicao inicial'],resposta:'A reacao do oponente',explicacao:'Voce usa a defesa e reacao do oponente para decidir qual tecnica encadear.'},
      {pergunta:'Complete: "Keep ___ without stopping"',alternativas:['flowing','pushing','pulling'],resposta:'flowing',explicacao:'"Keep flowing without stopping" - continue fluindo sem parar!'}
    ]),
    pontos: 15, ordem: 7
  },
  {
    id: uuidv4(), titulo: 'Base – Base', tipo: 'microlesson', categoria: 'technique',
    transcricao: "A strong base is fundamental. Use a spread base to keep hips low. When hips are high, it's easy to be swept.",
    traducao: 'Uma base forte e fundamental. Use base aberta para manter quadris baixos. Quadris altos = facil de raspar.',
    video_link: 'https://www.youtube.com/embed/example_base',
    vocabulario: JSON.stringify(['base','spread base','hips','weight','low','strong']),
    frases: JSON.stringify(['Keep a strong base','Spread your base to stay low','Your hips should be low',"Don't let them off balance you"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "base" no jiu-jitsu?',alternativas:['Equilibrio e estrutura corporal','Finalizacao','Pegada'],resposta:'Equilibrio e estrutura corporal',explicacao:'Base e a estrutura de equilibrio - boa base significa ser dificil de desequilibrar.'},
      {pergunta:'Como manter boa base quando por cima?',alternativas:['Quadris baixos e base aberta','Quadris altos e joelhos juntos','Peso para frente'],resposta:'Quadris baixos e base aberta',explicacao:'Spread base com quadris baixos e a chave para nao ser raspado quando por cima.'},
      {pergunta:'Complete: "Keep a ___ base"',alternativas:['strong','open','closed'],resposta:'strong',explicacao:'"Keep a strong base" - mantenha uma base forte!'}
    ]),
    pontos: 15, ordem: 8
  },
  {
    id: uuidv4(), titulo: 'Sweep – Raspagem', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'A sweep reverses position from bottom to top. Use momentum, off balance and right grips to finish.',
    traducao: 'A raspagem reverte a posicao de baixo para cima. Use momentum, desequilibrio e pegadas certas.',
    video_link: 'https://www.youtube.com/embed/example_sweep',
    vocabulario: JSON.stringify(['sweep','reverse','come on top','momentum','bottom','finish']),
    frases: JSON.stringify(['Use momentum to finish the sweep','Come on top after the sweep','Maintain grips through the sweep','More momentum = easier to come on top']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "sweep"?',alternativas:['Raspagem','Finalizacao','Passagem de guarda'],resposta:'Raspagem',explicacao:'Sweep e a raspagem - reverte a posicao, levando voce de baixo para cima.'},
      {pergunta:'O que a raspagem faz com a posicao?',alternativas:['Reverte - voce vai de baixo para cima','Mantem a posicao','Finaliza o oponente'],resposta:'Reverte - voce vai de baixo para cima',explicacao:'A raspagem inverte a posicao - quem estava por baixo passa para cima.'},
      {pergunta:'Complete: "Come on ___ after the sweep"',alternativas:['top','guard','back'],resposta:'top',explicacao:'"Come on top after the sweep" - venha por cima depois da raspagem!'}
    ]),
    pontos: 15, ordem: 9
  },
  {
    id: uuidv4(), titulo: 'Hip Escape – Fuga de Quadril', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'The hip escape is fundamental. Move hips away from opponent to create space and recover guard.',
    traducao: 'A fuga de quadril e fundamental. Mova os quadris para longe do oponente para criar espaco e recuperar a guarda.',
    video_link: 'https://www.youtube.com/embed/example_hip_escape',
    vocabulario: JSON.stringify(['hip escape','shrimp','space','recover','movement','fundamental']),
    frases: JSON.stringify(['Hip escape to create space','Shrimp to recover guard','Move your hips away','Use hip escape to reset position']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "hip escape"?',alternativas:['Fuga de quadril','Raspagem','Passagem'],resposta:'Fuga de quadril',explicacao:'Hip escape e o movimento de fuga com os quadris - essencial para escapar posicoes ruins.'},
      {pergunta:'Qual e o objetivo do hip escape?',alternativas:['Criar espaco e recuperar a guarda','Finalizar o oponente','Passar a guarda'],resposta:'Criar espaco e recuperar a guarda',explicacao:'O hip escape cria espaco entre voce e o oponente para recuperar a guarda.'},
      {pergunta:'Complete: "___ to recover your guard"',alternativas:['Shrimp','Bridge','Roll'],resposta:'Shrimp',explicacao:'"Shrimp to recover your guard" - faca o shrimp para recuperar sua guarda!'}
    ]),
    pontos: 15, ordem: 10
  },
  {
    id: uuidv4(), titulo: 'Pass the Guard – Passagem de Guarda', tipo: 'microlesson', categoria: 'technique',
    transcricao: "To pass the guard, control grips, break structure and cross the hip line. Goal: stabilize in dominant position.",
    traducao: 'Para passar a guarda, controle as pegadas, quebre a estrutura e cruze a linha do quadril.',
    video_link: 'https://www.youtube.com/embed/example_pass',
    vocabulario: JSON.stringify(['pass','hip line','stabilize','cross','dominant','structure']),
    frases: JSON.stringify(['Cross the hip line to pass','Stabilize after you pass','Control grips before passing','Break their structure first']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "pass the guard"?',alternativas:['Passar a guarda','Raspar','Finalizar'],resposta:'Passar a guarda',explicacao:'Passing the guard e superar a guarda do oponente e alcancar posicao dominante.'},
      {pergunta:'O que voce precisa cruzar para passar a guarda?',alternativas:['A linha do quadril','A linha do joelho','A linha dos ombros'],resposta:'A linha do quadril',explicacao:'Cruzar a hip line e o momento em que a passagem se completa.'},
      {pergunta:'Complete: "Stabilize ___ you pass"',alternativas:['after','before','while'],resposta:'after',explicacao:'"Stabilize after you pass" - estabilize depois de passar a guarda!'}
    ]),
    pontos: 15, ordem: 11
  },
  {
    id: uuidv4(), titulo: 'Underhook – Underhook', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'The underhook gives control. With underhook you control upper body and can initiate sweeps or passes.',
    traducao: 'O underhook da controle. Com o underhook voce controla o tronco e pode iniciar raspagens ou passagens.',
    video_link: 'https://www.youtube.com/embed/example_underhook',
    vocabulario: JSON.stringify(['underhook','overhook','inside','control','upper body','fight']),
    frases: JSON.stringify(['Fight for the underhook','Underhook gives you control',"Don't give up the underhook",'Use underhook to initiate the pass']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "underhook"?',alternativas:['Braco por baixo do braco do oponente','Braco por cima','Pegada na gola'],resposta:'Braco por baixo do braco do oponente',explicacao:'Underhook e o braco passado por baixo do braco do oponente - posicao de controle.'},
      {pergunta:'O que o underhook controla?',alternativas:['O tronco do oponente','As pernas','A cabeca'],resposta:'O tronco do oponente',explicacao:'Com o underhook voce controla o tronco e pode ditar o movimento do oponente.'},
      {pergunta:'Complete: "Fight for the ___"',alternativas:['underhook','collar','wrist'],resposta:'underhook',explicacao:'"Fight for the underhook" - lute pelo underhook sempre!'}
    ]),
    pontos: 15, ordem: 12
  },
  {
    id: uuidv4(), titulo: 'Armbar – Chave de Braco', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Apply armbar by controlling arm and hip. Extend arm fully and lift hips to pressure the elbow joint.",
    traducao: 'Aplique a chave de braco controlando o braco e o quadril. Estenda totalmente e levante o quadril.',
    video_link: 'https://www.youtube.com/embed/pQ43Oy5k9yQ',
    vocabulario: JSON.stringify(['armbar','elbow','extend','lift hips','pressure','joint']),
    frases: JSON.stringify(['Control wrist and elbow','Extend the arm fully','Lift your hips to apply pressure','Tap out to avoid injury']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "armbar"?',alternativas:['Chave de braco','Estrangulamento','Raspagem'],resposta:'Chave de braco',explicacao:'Armbar e a chave de braco - hiperextende o cotovelo do oponente.'},
      {pergunta:'O que voce levanta para aplicar pressao no armbar?',alternativas:['Os quadris','Os joelhos','Os ombros'],resposta:'Os quadris',explicacao:'Levantar os quadris e o movimento principal do armbar - cria pressao no cotovelo.'},
      {pergunta:'Complete: "Extend the arm ___"',alternativas:['fully','halfway','slowly'],resposta:'fully',explicacao:'"Extend the arm fully" - estenda o braco completamente para o armbar!'}
    ]),
    pontos: 15, ordem: 13
  },
  {
    id: uuidv4(), titulo: 'Triangle – Triangulo', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Lock triangle by placing leg across neck trapping one arm. Adjust angle and squeeze to finish.",
    traducao: 'Trave o triangulo colocando a perna no pescoco e prendendo um braco. Ajuste o angulo e aperte para finalizar.',
    video_link: 'https://www.youtube.com/embed/example_triangle',
    vocabulario: JSON.stringify(['triangle','lock','neck','angle','squeeze','trap']),
    frases: JSON.stringify(['Lock the triangle tight','Adjust the angle first','Trap one arm inside','Squeeze your legs to finish']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "triangle"?',alternativas:['Triangulo','Chave de braco','Raspagem'],resposta:'Triangulo',explicacao:'Triangle e o triangulo - estrangulamento com as pernas em formato triangular.'},
      {pergunta:'O que voce precisa ajustar para finalizar o triangulo?',alternativas:['O angulo','A pegada','Os quadris'],resposta:'O angulo',explicacao:'Ajustar o angulo e fundamental para apertar o triangulo e finalizar.'},
      {pergunta:'Complete: "___ your legs to finish"',alternativas:['Squeeze','Open','Extend'],resposta:'Squeeze',explicacao:'"Squeeze your legs to finish" - aperte as pernas para finalizar o triangulo!'}
    ]),
    pontos: 15, ordem: 14
  },
  {
    id: uuidv4(), titulo: 'Choke – Estrangulamento', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'A choke cuts off blood or air to make opponent tap. Rear naked choke and collar chokes are most common.',
    traducao: 'O estrangulamento corta sangue ou ar para fazer o oponente bater. Mata-leao e chokes de gola sao os mais comuns.',
    video_link: 'https://www.youtube.com/embed/example_choke',
    vocabulario: JSON.stringify(['choke','blood flow','air','squeeze','rear naked','collar']),
    frases: JSON.stringify(['Apply the choke tight','Cut off the blood supply','Rear naked choke from the back','Use collar for the choke']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "choke"?',alternativas:['Estrangulamento','Chave de braco','Passagem'],resposta:'Estrangulamento',explicacao:'Choke e o estrangulamento - corta sangue ou ar para forcar o oponente a desistir.'},
      {pergunta:'O que o choke corta para funcionar?',alternativas:['Fluxo de sangue ou ar','Movimento das pernas','Pegadas do oponente'],resposta:'Fluxo de sangue ou ar',explicacao:'Chokes funcionam cortando o fluxo de sangue ou ar.'},
      {pergunta:'Complete: "Apply the choke ___"',alternativas:['tight','loose','slow'],resposta:'tight',explicacao:'"Apply the choke tight" - aplique o estrangulamento bem firme!'}
    ]),
    pontos: 15, ordem: 15
  },
  {
    id: uuidv4(), titulo: 'De La Riva – Guarda De La Riva', tipo: 'microlesson', categoria: 'technique',
    transcricao: "De La Riva uses outside hook on opponent's leg with collar grip to control posture and set up sweeps.",
    traducao: 'De La Riva usa ganchos externos na perna com pegada na gola para controlar a postura e preparar raspagens.',
    video_link: 'https://www.youtube.com/embed/example_dlr',
    vocabulario: JSON.stringify(['De La Riva','outside hook','collar','posture','control','sweep']),
    frases: JSON.stringify(['Set the DLR hook first','Control posture with collar','Hook to off balance','Connect to sweep from DLR']),
    quiz: JSON.stringify([
      {pergunta:'O que e a guarda De La Riva?',alternativas:['Guarda com gancho externo na perna','Guarda fechada','Meia guarda'],resposta:'Guarda com gancho externo na perna',explicacao:'De La Riva usa um gancho externo na perna - uma das guardas abertas mais usadas.'},
      {pergunta:'Qual pegada controla a postura na De La Riva?',alternativas:['Collar grip','Elbow grip','Wrist grip'],resposta:'Collar grip',explicacao:'O collar grip controla a postura do oponente na De La Riva.'},
      {pergunta:'Complete: "Set the ___ hook first"',alternativas:['DLR','inside','back'],resposta:'DLR',explicacao:'"Set the DLR hook first" - coloque o gancho da De La Riva primeiro!'}
    ]),
    pontos: 15, ordem: 16
  },
  {
    id: uuidv4(), titulo: 'Lasso Guard – Guarda Lasso', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Lasso wraps leg around opponent's arm to control posture and limit passing ability.",
    traducao: 'O lasso envolve a perna no braco do oponente para controlar a postura e limitar a passagem.',
    video_link: 'https://www.youtube.com/embed/example_lasso',
    vocabulario: JSON.stringify(['lasso','wrap','arm','posture','limit','control']),
    frases: JSON.stringify(['Wrap lasso around their arm','Lasso controls posture','Lasso limits the pass','Set up sweep from lasso']),
    quiz: JSON.stringify([
      {pergunta:'O que e a lasso guard?',alternativas:['Perna enrolada no braco do oponente','Guarda fechada','De La Riva'],resposta:'Perna enrolada no braco do oponente',explicacao:'Lasso guard envolve a perna no braco como um laco - controla postura e dificulta passagens.'},
      {pergunta:'O que a lasso guard limita?',alternativas:['A capacidade de passar a guarda','A raspagem','O estrangulamento'],resposta:'A capacidade de passar a guarda',explicacao:'O lasso limita e dificulta a passagem de guarda do oponente.'},
      {pergunta:'Complete: "Wrap lasso around their ___"',alternativas:['arm','leg','neck'],resposta:'arm',explicacao:'"Wrap lasso around their arm" - envolva o lasso ao redor do braco!'}
    ]),
    pontos: 15, ordem: 17
  },
  {
    id: uuidv4(), titulo: 'Tap Out – Bater', tipo: 'microlesson', categoria: 'command',
    transcricao: "Tap out to indicate submission. Tap clearly on mat or opponent. Tap early - no shame in it.",
    traducao: 'Bata para indicar desistencia. Bata claramente no tatame ou no oponente. Bata cedo - sem vergonha.',
    video_link: 'https://www.youtube.com/embed/example_tap',
    vocabulario: JSON.stringify(['tap out','submission','signal','mat','early','respect']),
    frases: JSON.stringify(['Tap early to prevent injury','Respect your training partner',"There's no shame in tapping",'Tap clearly']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "tap out"?',alternativas:['Bater para desistir','Raspar','Finalizar'],resposta:'Bater para desistir',explicacao:'Tap out e bater no tatame para indicar desistencia - sinal de respeito e seguranca.'},
      {pergunta:'Quando voce deve bater?',alternativas:['Cedo, antes de se machucar','Apenas quando nao consegue mais resistir','Nunca'],resposta:'Cedo, antes de se machucar',explicacao:'Bater cedo previne lesoes - nao ha vergonha em desistir de uma finalizacao.'},
      {pergunta:'Complete: "There\'s no ___ in tapping"',alternativas:['shame','point','reason'],resposta:'shame',explicacao:'"Theres no shame in tapping" - nao ha vergonha em bater!'}
    ]),
    pontos: 15, ordem: 18
  },
  {
    id: uuidv4(), titulo: 'Drilling – Pratica Repetitiva', tipo: 'microlesson', categoria: 'expression',
    transcricao: 'Drilling builds muscle memory through repetition. Find comfortable pace. Visualize opponent while drilling.',
    traducao: 'O drilling constroi memoria muscular pela repeticao. Encontre ritmo confortavel. Visualize o oponente.',
    video_link: 'https://www.youtube.com/embed/example_drilling',
    vocabulario: JSON.stringify(['drilling','repetition','muscle memory','pace','comfortable','visualize']),
    frases: JSON.stringify(['Find your pace when drilling','Drill to build muscle memory','Stay comfortable during drill','Visualize opponent while drilling']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "drilling"?',alternativas:['Praticar tecnicas repetidamente','Fazer sparring','Competir'],resposta:'Praticar tecnicas repetidamente',explicacao:'Drilling e pratica repetitiva sem resistencia - constroi memoria muscular.'},
      {pergunta:'O que o drilling constroi?',alternativas:['Memoria muscular','Forca fisica','Velocidade'],resposta:'Memoria muscular',explicacao:'O drilling constroi muscle memory - a execucao automatica das tecnicas.'},
      {pergunta:'Complete: "Find your ___ when drilling"',alternativas:['pace','partner','guard'],resposta:'pace',explicacao:'"Find your pace when drilling" - encontre seu ritmo no drilling!'}
    ]),
    pontos: 15, ordem: 19
  },
  {
    id: uuidv4(), titulo: 'Sparring – Treino Vivo', tipo: 'microlesson', categoria: 'expression',
    transcricao: 'Sparring is live training with resistance. Partner defends and attacks. Test techniques under realistic pressure.',
    traducao: 'Sparring e treino vivo com resistencia. O parceiro defende e ataca. Teste tecnicas sob pressao realista.',
    video_link: 'https://www.youtube.com/embed/example_sparring',
    vocabulario: JSON.stringify(['sparring','live','resistance','realistic','pressure','test']),
    frases: JSON.stringify(['Test techniques in sparring','Sparring has real resistance',"React to partner's defense",'Use sparring to find what works']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "sparring"?',alternativas:['Treino vivo com resistencia','Pratica sem resistencia','Competicao'],resposta:'Treino vivo com resistencia',explicacao:'Sparring e treino vivo - ambos aplicam tecnicas com resistencia real.'},
      {pergunta:'Qual e a diferenca entre drilling e sparring?',alternativas:['No sparring o parceiro resiste ativamente','No sparring voce nao usa tecnicas','No drilling voce usa mais forca'],resposta:'No sparring o parceiro resiste ativamente',explicacao:'No sparring o parceiro defende e ataca - diferente do drilling sem resistencia.'},
      {pergunta:'Complete: "Test your techniques in ___"',alternativas:['sparring','drilling','class'],resposta:'sparring',explicacao:'"Test your techniques in sparring" - teste suas tecnicas no sparring!'}
    ]),
    pontos: 15, ordem: 20
  },
  {
    id: uuidv4(), titulo: 'Back Mount – Pegada nas Costas', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Back mount is the most dominant position. Use hooks and seatbelt grip. Set up rear naked choke.',
    traducao: 'A pegada nas costas e a mais dominante. Use ganchos e a pegada de cinto. Prepare o mata-leao.',
    video_link: 'https://www.youtube.com/embed/example_back',
    vocabulario: JSON.stringify(['back mount','hooks','seatbelt','rear naked choke','dominant','control']),
    frases: JSON.stringify(['Take back and set hooks','Use seatbelt grip','Back is most dominant position','Set up rear naked choke']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "back mount"?',alternativas:['Pegada nas costas','Montada','Controle lateral'],resposta:'Pegada nas costas',explicacao:'Back mount e estar atras do oponente com ganchos - a posicao mais dominante.'},
      {pergunta:'Qual e a finalizacao mais comum do back mount?',alternativas:['Rear naked choke','Armbar','Triangle'],resposta:'Rear naked choke',explicacao:'O rear naked choke (mata-leao) e a finalizacao mais direta do back mount.'},
      {pergunta:'Complete: "Take the back and set your ___"',alternativas:['hooks','grips','collar'],resposta:'hooks',explicacao:'"Take the back and set your hooks" - pegue as costas e coloque os ganchos!'}
    ]),
    pontos: 15, ordem: 21
  },
  {
    id: uuidv4(), titulo: 'X-Guard – Guarda X', tipo: 'microlesson', categoria: 'technique',
    transcricao: "X-guard uses both legs to control one of opponent's legs, lifting them off balance for sweeps.",
    traducao: 'A guarda X usa as duas pernas para controlar uma perna do oponente, levantando-o para raspagens.',
    video_link: 'https://www.youtube.com/embed/example_xguard',
    vocabulario: JSON.stringify(['X-guard','lift','elevate','off balance','leg lock','sweep']),
    frases: JSON.stringify(['Enter X-guard to lift them','X-guard to off balance','Sweep from X-guard','Connect to leg locks from X']),
    quiz: JSON.stringify([
      {pergunta:'O que e a X-guard?',alternativas:['Guarda com duas pernas em uma perna do oponente','Guarda fechada','Meia guarda'],resposta:'Guarda com duas pernas em uma perna do oponente',explicacao:'X-guard controla e eleva uma perna do oponente com as duas pernas.'},
      {pergunta:'O que a X-guard faz com o oponente?',alternativas:['Eleva e desequilibra','Estrangula','Passa a guarda'],resposta:'Eleva e desequilibra',explicacao:'A X-guard eleva o oponente e o desequilibra - facilitando raspagens.'},
      {pergunta:'Complete: "Enter X-guard to ___ them"',alternativas:['lift','choke','pass'],resposta:'lift',explicacao:'"Enter X-guard to lift them" - entre na X-guard para elevar o oponente!'}
    ]),
    pontos: 15, ordem: 22
  },
  {
    id: uuidv4(), titulo: 'Reverse De La Riva – Guarda Reversa', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Reverse De La Riva uses inside hook on opponent's leg. Controls base and sets up back takes or leg attacks.",
    traducao: 'A Reversa usa gancho interno na perna. Controla a base e prepara a pegada nas costas ou ataques as pernas.',
    video_link: 'https://www.youtube.com/embed/example_rdlr',
    vocabulario: JSON.stringify(['reverse De La Riva','inside hook','back take','leg attack','base','control']),
    frases: JSON.stringify(['Set inside hook first','RDLR to take the back','Control base from RDLR','Connect to leg attacks']),
    quiz: JSON.stringify([
      {pergunta:'O que e a Reverse De La Riva?',alternativas:['Guarda com gancho interno na perna','Guarda De La Riva normal','Guarda fechada'],resposta:'Guarda com gancho interno na perna',explicacao:'Reverse DLR usa gancho interno - muito usada para pegada nas costas e ataques as pernas.'},
      {pergunta:'O que a Reverse DLR prepara principalmente?',alternativas:['Pegada nas costas ou ataques as pernas','Estrangulamentos','Passagens de guarda'],resposta:'Pegada nas costas ou ataques as pernas',explicacao:'A RDLR e uma plataforma para pegar as costas ou atacar as pernas do oponente.'},
      {pergunta:'Complete: "Set the ___ hook first"',alternativas:['inside','outside','back'],resposta:'inside',explicacao:'"Set the inside hook first" - coloque o gancho interno primeiro!'}
    ]),
    pontos: 15, ordem: 23
  },
  {
    id: uuidv4(), titulo: 'Knee Slide – Passagem pelo Joelho', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Knee slide uses knee sliding across thigh to pass guard. Combine with collar grip to control distance.',
    traducao: 'O knee slide usa o joelho deslizando pela coxa para passar a guarda. Combine com gola para controlar distancia.',
    video_link: 'https://www.youtube.com/embed/example_knee_slide',
    vocabulario: JSON.stringify(['knee slide','thigh','collar grip','distance','stabilize','slide']),
    frases: JSON.stringify(['Use knee slide to pass','Control collar as you pass','Slide knee across thigh','Stabilize after knee slide']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "knee slide"?',alternativas:['Passagem com joelho deslizando pela coxa','Raspagem','Guarda De La Riva'],resposta:'Passagem com joelho deslizando pela coxa',explicacao:'Knee slide e a passagem onde o joelho desliza pela coxa - muito usada no alto nivel.'},
      {pergunta:'Qual pegada controla a distancia no knee slide?',alternativas:['Collar grip','Elbow grip','Wrist grip'],resposta:'Collar grip',explicacao:'O collar grip controla a distancia e mantem pressao durante o knee slide.'},
      {pergunta:'Complete: "Slide your ___ across the thigh"',alternativas:['knee','foot','hip'],resposta:'knee',explicacao:'"Slide your knee across the thigh" - deslize o joelho pela coxa!'}
    ]),
    pontos: 15, ordem: 24
  },
  {
    id: uuidv4(), titulo: 'Leg Drag – Arrastar a Perna', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Leg drag uses arms to drag opponent's leg across body, removing guard. Opens way to side control or back.",
    traducao: 'O leg drag usa os bracos para arrastar a perna pelo corpo, removendo a guarda. Abre caminho para o controle lateral.',
    video_link: 'https://www.youtube.com/embed/example_leg_drag',
    vocabulario: JSON.stringify(['leg drag','drag','across','remove','side control','back']),
    frases: JSON.stringify(['Drag leg across body','Leg drag removes guard','Connect to side control after drag','Use leg drag to take back']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "leg drag"?',alternativas:['Arrastar a perna do oponente','Finalizacao de perna','Raspagem'],resposta:'Arrastar a perna do oponente',explicacao:'Leg drag arrasta a perna do oponente pelo corpo para remover a guarda.'},
      {pergunta:'O que o leg drag remove?',alternativas:['A guarda do oponente','Os ganchos','As pegadas'],resposta:'A guarda do oponente',explicacao:'O leg drag remove a guarda arrastando a perna para o lado.'},
      {pergunta:'Complete: "Drag the leg ___ their body"',alternativas:['across','under','over'],resposta:'across',explicacao:'"Drag the leg across their body" - arraste a perna pelo corpo do oponente!'}
    ]),
    pontos: 15, ordem: 25
  },
  {
    id: uuidv4(), titulo: 'Sprawl – Sprawl', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Sprawl defends against takedowns. Shoot hips back and down, driving weight into opponent to stop attack.',
    traducao: 'O sprawl defende contra derrubadas. Jogue o quadril para tras e baixo, colocando peso no oponente.',
    video_link: 'https://www.youtube.com/embed/example_sprawl',
    vocabulario: JSON.stringify(['sprawl','hips back','defend','takedown','weight','stop']),
    frases: JSON.stringify(['Sprawl to defend takedown','Drive hips back and down','Use weight to stop them','Sprawl and break the grip']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "sprawl"?',alternativas:['Jogar o quadril para tras para defender','Raspar','Passar a guarda'],resposta:'Jogar o quadril para tras para defender',explicacao:'Sprawl e jogar o quadril para tras e baixo - defesa contra derrubadas e ataques as pernas.'},
      {pergunta:'O sprawl defende contra o que?',alternativas:['Derrubadas e ataques as pernas','Estrangulamentos','Chaves de braco'],resposta:'Derrubadas e ataques as pernas',explicacao:'O sprawl e a defesa principal contra takedowns e ataques as pernas.'},
      {pergunta:'Complete: "Sprawl to ___ the takedown"',alternativas:['defend','finish','initiate'],resposta:'defend',explicacao:'"Sprawl to defend the takedown" - faca o sprawl para defender a derrubada!'}
    ]),
    pontos: 15, ordem: 26
  },
  {
    id: uuidv4(), titulo: 'Bridge – Ponte', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Bridge is explosive hip movement to escape bottom positions. Plant feet, drive hips up and to side.',
    traducao: 'A ponte e movimento explosivo do quadril para escapar. Plante os pes, empurre o quadril para cima e para o lado.',
    video_link: 'https://www.youtube.com/embed/example_bridge',
    vocabulario: JSON.stringify(['bridge','explosive','hips up','plant','escape','roll']),
    frases: JSON.stringify(['Bridge to escape mount','Plant feet and drive hips','Explosive bridge','Bridge and roll to reverse']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "bridge" no jiu-jitsu?',alternativas:['Movimento de ponte com o quadril','Passagem de guarda','Finalizacao'],resposta:'Movimento de ponte com o quadril',explicacao:'Bridge e elevar explosivamente o quadril - usado para escapar da montada.'},
      {pergunta:'Qual e o objetivo do bridge?',alternativas:['Escapar de posicoes inferiores','Finalizar o oponente','Passar a guarda'],resposta:'Escapar de posicoes inferiores',explicacao:'O bridge e usado para escapar de posicoes ruins como a montada.'},
      {pergunta:'Complete: "___ and roll to reverse"',alternativas:['Bridge','Sweep','Shrimp'],resposta:'Bridge',explicacao:'"Bridge and roll to reverse" - faca a ponte e role para reverter a posicao!'}
    ]),
    pontos: 15, ordem: 27
  },
  {
    id: uuidv4(), titulo: 'Longstep – Passo Longo', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Longstep uses a long step around opponent's leg to bypass guard. Get to tripod and drive weight to flatten.",
    traducao: 'O longstep usa passo longo ao redor da perna para contornar a guarda. Chegue ao tripe e coloque peso.',
    video_link: 'https://www.youtube.com/embed/example_longstep',
    vocabulario: JSON.stringify(['longstep','tripod','bypass','flatten','step','pass']),
    frases: JSON.stringify(['Longstep to bypass guard','Get to tripod position','Drive weight to flatten','Finish longstep pass']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "longstep"?',alternativas:['Passagem com passo longo ao redor da perna','Raspagem','Guarda lasso'],resposta:'Passagem com passo longo ao redor da perna',explicacao:'Longstep e uma passagem onde voce da um passo longo para contornar a guarda.'},
      {pergunta:'Qual posicao voce busca no longstep?',alternativas:['Tripod (tripe)','Side control direto','Mount direto'],resposta:'Tripod (tripe)',explicacao:'O tripod e a posicao intermediaria do longstep antes de finalizar a passagem.'},
      {pergunta:'Complete: "Longstep to ___ the guard"',alternativas:['bypass','pass','sweep'],resposta:'bypass',explicacao:'"Longstep to bypass the guard" - use o longstep para contornar a guarda!'}
    ]),
    pontos: 15, ordem: 28
  },
  {
    id: uuidv4(), titulo: 'Framing – Criar Frames', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Framing uses arms and legs as frames to create distance and prevent opponent advancing. Buys time to recover.',
    traducao: 'Framing usa bracos e pernas como estruturas para criar distancia e impedir o avanco. Ganha tempo para recuperar.',
    video_link: 'https://www.youtube.com/embed/example_framing',
    vocabulario: JSON.stringify(['frame','framing','distance','prevent','recover','structure']),
    frases: JSON.stringify(['Use arms as frames','Create distance with frame','Frame buys you time','Frame to prevent advancing']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "framing"?',alternativas:['Usar bracos e pernas para criar distancia','Raspar o oponente','Finalizar'],resposta:'Usar bracos e pernas para criar distancia',explicacao:'Framing e usar bracos e pernas como estruturas para criar distancia e espaco.'},
      {pergunta:'O que o frame te da?',alternativas:['Tempo para recuperar a guarda','Forca para raspar','Velocidade para finalizar'],resposta:'Tempo para recuperar a guarda',explicacao:'Um bom frame compra tempo para voce recuperar a guarda ou reposicionar.'},
      {pergunta:'Complete: "Use your arms as ___"',alternativas:['frames','hooks','grips'],resposta:'frames',explicacao:'"Use your arms as frames" - use os bracos como frames para criar distancia!'}
    ]),
    pontos: 15, ordem: 29
  },
  {
    id: uuidv4(), titulo: 'Posture – Postura', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Posture is how you hold your body. Good posture on top means upright. From guard, breaking opponent's posture is key.",
    traducao: 'Postura e como voce mantem o corpo. Boa postura por cima significa ereto. Da guarda, quebrar a postura e fundamental.',
    video_link: 'https://www.youtube.com/embed/example_posture',
    vocabulario: JSON.stringify(['posture','upright','break posture','control','spine','structure']),
    frases: JSON.stringify(['Maintain good posture on top','Break posture from guard','Control posture with collar','Bad posture = easy to sweep']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "break posture"?',alternativas:['Quebrar a postura do oponente puxando para frente','Raspar','Finalizar'],resposta:'Quebrar a postura do oponente puxando para frente',explicacao:'Break posture significa puxar o oponente para frente, quebrando sua estrutura ereta.'},
      {pergunta:'Por que a postura e importante por cima?',alternativas:['Evita ser raspado e mantem o controle','Para finalizar mais rapido','Para passar a guarda'],resposta:'Evita ser raspado e mantem o controle',explicacao:'Boa postura por cima dificulta raspagens e mantem seu controle da posicao.'},
      {pergunta:'Complete: "Bad posture = easy to ___"',alternativas:['sweep','choke','pass'],resposta:'sweep',explicacao:'Ma postura te torna facil de ser raspado - "bad posture = easy to sweep"!'}
    ]),
    pontos: 15, ordem: 30
  },
  {
    id: uuidv4(), titulo: 'Pressure – Pressao', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Pressure exhausts opponent, limits movement and creates submissions. Use weight intelligently.',
    traducao: 'A pressao cansa o oponente, limita o movimento e cria finalizacoes. Use o peso de forma inteligente.',
    video_link: 'https://www.youtube.com/embed/example_pressure',
    vocabulario: JSON.stringify(['pressure','weight','exhaust','limit','apply','intelligent']),
    frases: JSON.stringify(['Apply pressure to exhaust','Use weight intelligently','Pressure limits movement','More pressure = harder to escape']),
    quiz: JSON.stringify([
      {pergunta:'Por que aplicar "pressure" e importante?',alternativas:['Cansa e limita o movimento do oponente','Para raspar mais rapido','Para passar a guarda'],resposta:'Cansa e limita o movimento do oponente',explicacao:'Pressure cansa o oponente e limita seus movimentos - cria oportunidades de finalizacao.'},
      {pergunta:'O que voce usa para aplicar pressure?',alternativas:['O peso do corpo de forma inteligente','Apenas forca muscular','Velocidade'],resposta:'O peso do corpo de forma inteligente',explicacao:'Pressure usa o peso corporal de forma inteligente - nao e so forca bruta.'},
      {pergunta:'Complete: "Apply ___ to exhaust them"',alternativas:['pressure','speed','grips'],resposta:'pressure',explicacao:'"Apply pressure to exhaust them" - aplique pressao para cansa-los!'}
    ]),
    pontos: 15, ordem: 31
  },
  {
    id: uuidv4(), titulo: 'Inside Position – Posicao Interna', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Inside position controls inside of arms or legs. Having inside position gives control and limits offense.',
    traducao: 'A posicao interna controla a parte interna dos bracos ou pernas. Ter a posicao interna da controle e limita o ataque.',
    video_link: 'https://www.youtube.com/embed/example_inside',
    vocabulario: JSON.stringify(['inside position','inside','control','limit','offense','fight for']),
    frases: JSON.stringify(['Fight for inside position','Inside position = control','Control inside of arms','Never give up inside position']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "inside position"?',alternativas:['Controlar a parte interna dos membros','Posicao de guarda fechada','Montada'],resposta:'Controlar a parte interna dos membros',explicacao:'Inside position e controlar o interior dos bracos ou pernas - quem controla a posicao interna comanda o combate.'},
      {pergunta:'Por que a inside position e vantajosa?',alternativas:['Da controle e limita o ataque do oponente','E mais facil de manter','Facilita raspagens'],resposta:'Da controle e limita o ataque do oponente',explicacao:'Com inside position voce controla e limita o que o oponente pode fazer.'},
      {pergunta:'Complete: "Fight for the ___ position"',alternativas:['inside','outside','back'],resposta:'inside',explicacao:'"Fight for the inside position" - lute pela posicao interna!'}
    ]),
    pontos: 15, ordem: 32
  },
  {
    id: uuidv4(), titulo: 'Grip Break – Quebrar Pegada', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Breaking grips is essential before passing or attacking. Use leverage and movement not just strength.',
    traducao: 'Quebrar pegadas e essencial antes de passar ou atacar. Use alavanca e movimento - nao apenas forca.',
    video_link: 'https://www.youtube.com/embed/example_grip_break',
    vocabulario: JSON.stringify(['grip break','leverage','movement','strength','efficient','release']),
    frases: JSON.stringify(['Break grip before passing','Use leverage to break grips',"Don't just use strength","Break grip then attack"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "grip break"?',alternativas:['Quebrar a pegada do oponente','Fazer uma pegada','Raspar'],resposta:'Quebrar a pegada do oponente',explicacao:'Grip break e quebrar a pegada do oponente - fundamental antes de passar ou atacar.'},
      {pergunta:'O que usar para quebrar pegadas eficientemente?',alternativas:['Alavanca e movimento','Apenas forca','Velocidade'],resposta:'Alavanca e movimento',explicacao:'Alavanca e movimento sao mais eficientes que forca bruta para quebrar pegadas.'},
      {pergunta:'Complete: "Break the grip ___ you pass"',alternativas:['before','after','while'],resposta:'before',explicacao:'"Break the grip before you pass" - quebre a pegada antes de passar!'}
    ]),
    pontos: 15, ordem: 33
  },
  {
    id: uuidv4(), titulo: 'Weight Distribution – Distribuicao de Peso', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Weight distribution is where you place weight during fight. Shift to hips when on top to make elevation harder.',
    traducao: 'Distribuicao de peso e onde voce coloca o peso. Coloque nos quadris quando por cima para dificultar a elevacao.',
    video_link: 'https://www.youtube.com/embed/example_weight',
    vocabulario: JSON.stringify(['weight distribution','shift','hips','elevate','heavy','low']),
    frases: JSON.stringify(['Shift weight to your hips','Keep weight low','Make yourself heavy on top','Control where weight goes']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "weight distribution"?',alternativas:['Distribuicao do peso corporal','Raspagem','Finalizacao'],resposta:'Distribuicao do peso corporal',explicacao:'Weight distribution e controlar onde seu peso cai - fundamental para manter posicoes.'},
      {pergunta:'Onde colocar o peso quando por cima?',alternativas:['Nos quadris','Nos ombros','Nos joelhos'],resposta:'Nos quadris',explicacao:'Peso nos quadris quando por cima dificulta a elevacao e torna mais dificil ser desequilibrado.'},
      {pergunta:'Complete: "Shift your weight to your ___"',alternativas:['hips','shoulders','knees'],resposta:'hips',explicacao:'"Shift your weight to your hips" - coloque o peso nos quadris!'}
    ]),
    pontos: 15, ordem: 34
  },
  {
    id: uuidv4(), titulo: 'Reaction – Reacao', tipo: 'microlesson', categoria: 'technique',
    transcricao: "In jiu-jitsu you react to opponent's movement. Use their defense as signal for next technique. Action and reaction.",
    traducao: 'No jiu-jitsu voce reage ao movimento do oponente. Use a defesa como sinal para a proxima tecnica.',
    video_link: 'https://www.youtube.com/embed/example_reaction',
    vocabulario: JSON.stringify(['reaction','action','signal','respond','flow','chain']),
    frases: JSON.stringify(['Use reaction to chain techniques','Action and reaction - jiu-jitsu','React to their defense','If they push, you pull']),
    quiz: JSON.stringify([
      {pergunta:'Por que "action and reaction" e importante?',alternativas:['Para encadear tecnicas usando a defesa do oponente','Para ser mais forte','Para ser mais rapido'],resposta:'Para encadear tecnicas usando a defesa do oponente',explicacao:'Acao e reacao e usar o movimento do oponente a seu favor - a base do jiu-jitsu.'},
      {pergunta:'Se o oponente empurra, voce deve...?',alternativas:['Puxar','Empurrar de volta','Parar'],resposta:'Puxar',explicacao:'"If they push, you pull" - se empurram, voce puxa. Use a forca deles!'},
      {pergunta:'Complete: "React to their ___"',alternativas:['defense','attack','guard'],resposta:'defense',explicacao:'"React to their defense" - reaja a defesa deles para encadear a proxima tecnica!'}
    ]),
    pontos: 15, ordem: 35
  },
  {
    id: uuidv4(), titulo: 'Rear Naked Choke – Mata-Leao', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Rear naked choke from the back. Arm around neck, squeeze with bicep and forearm. Most effective choke.",
    traducao: 'Mata-leao pelas costas. Braco ao redor do pescoco, aperte com biceps e antebraco. O estrangulamento mais eficaz.',
    video_link: 'https://www.youtube.com/embed/example_rnc',
    vocabulario: JSON.stringify(['rear naked choke','mata-leao','bicep','forearm','neck','squeeze']),
    frases: JSON.stringify(['RNC from the back','Squeeze bicep and forearm','Set hooks before choke','Most effective choke']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "rear naked choke"?',alternativas:['Mata-leao pelas costas','Triangulo','Chave de braco'],resposta:'Mata-leao pelas costas',explicacao:'Rear naked choke e o mata-leao - estrangulamento pelas costas com braco ao redor do pescoco.'},
      {pergunta:'O que voce aperta para finalizar o RNC?',alternativas:['Biceps e antebraco','Maos','Pernas'],resposta:'Biceps e antebraco',explicacao:'A pressao do biceps e antebraco e o que cria o estrangulamento no mata-leao.'},
      {pergunta:'Complete: "Set your ___ before the choke"',alternativas:['hooks','grips','collar'],resposta:'hooks',explicacao:'"Set your hooks before the choke" - coloque os ganchos antes do estrangulamento!'}
    ]),
    pontos: 15, ordem: 36
  },
  {
    id: uuidv4(), titulo: 'Ezekiel Choke – Estrangulamento Ezequiel', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Ezekiel uses sleeve grip to choke. Insert four fingers in sleeve, slide hand across neck, finish.',
    traducao: 'O Ezequiel usa a manga para estrangular. Insira quatro dedos na manga, deslize pelo pescoco e finalize.',
    video_link: 'https://www.youtube.com/embed/example_ezekiel',
    vocabulario: JSON.stringify(['Ezekiel','sleeve','four fingers','neck','slide','finish']),
    frases: JSON.stringify(['Four fingers inside sleeve','Slide hand across neck','Ezekiel works from mount','Finish the Ezekiel']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "Ezekiel choke"?',alternativas:['Estrangulamento com a manga do kimono','Triangulo','Mata-leao'],resposta:'Estrangulamento com a manga do kimono',explicacao:'O Ezekiel usa a manga do proprio kimono para criar o estrangulamento.'},
      {pergunta:'Quantos dedos voce insere na manga no Ezekiel?',alternativas:['Quatro','Dois','Tres'],resposta:'Quatro',explicacao:'Quatro dedos dentro da manga e o detalhe fundamental para aplicar o Ezekiel.'},
      {pergunta:'Complete: "___ fingers inside the sleeve"',alternativas:['Four','Two','Three'],resposta:'Four',explicacao:'"Four fingers inside the sleeve" - quatro dedos dentro da manga para o Ezekiel!'}
    ]),
    pontos: 15, ordem: 37
  },
  {
    id: uuidv4(), titulo: 'Shoulder Lock – Chave de Ombro', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Shoulder lock attacks shoulder joint by rotating or extending arm beyond range. Common from side control and triangle.',
    traducao: 'A chave de ombro ataca a articulacao do ombro girando ou estendendo alem da amplitude.',
    video_link: 'https://www.youtube.com/embed/example_shoulder_lock',
    vocabulario: JSON.stringify(['shoulder lock','shoulder','joint','rotate','extend','range']),
    frases: JSON.stringify(['Attack the shoulder joint','Rotate arm for shoulder lock','Shoulder lock from side control','Connect from triangle']),
    quiz: JSON.stringify([
      {pergunta:'O que e um "shoulder lock"?',alternativas:['Chave que ataca o ombro','Estrangulamento','Chave de braco'],resposta:'Chave que ataca o ombro',explicacao:'Shoulder lock ataca a articulacao do ombro - muito usada do controle lateral e triangulo.'},
      {pergunta:'De onde o shoulder lock e comum?',alternativas:['Side control e triangle','Guard e mount','Back mount'],resposta:'Side control e triangle',explicacao:'O shoulder lock e frequentemente aplicado do side control e como alternativa ao triangulo.'},
      {pergunta:'Complete: "Attack the ___ joint"',alternativas:['shoulder','elbow','wrist'],resposta:'shoulder',explicacao:'"Attack the shoulder joint" - ataque a articulacao do ombro!'}
    ]),
    pontos: 15, ordem: 38
  },
  {
    id: uuidv4(), titulo: 'Wrist Lock – Chave de Pulso', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Wrist lock bends or rotates wrist past range of motion. Applied in many positions, often catches by surprise.',
    traducao: 'A chave de pulso dobra ou gira o pulso alem da amplitude. Aplicada em muitas posicoes, frequentemente pega de surpresa.',
    video_link: 'https://www.youtube.com/embed/example_wrist_lock',
    vocabulario: JSON.stringify(['wrist lock','wrist','bend','rotate','surprise','range']),
    frases: JSON.stringify(['Attack the wrist','Wrist lock surprises people','Bend wrist past range','Apply from many positions']),
    quiz: JSON.stringify([
      {pergunta:'O que e um "wrist lock"?',alternativas:['Chave que ataca o pulso','Estrangulamento','Chave de ombro'],resposta:'Chave que ataca o pulso',explicacao:'Wrist lock ataca a articulacao do pulso - pode ser aplicado em diversas posicoes.'},
      {pergunta:'Por que o wrist lock e eficaz?',alternativas:['Pega o oponente de surpresa','E facil de defender','Requer muita forca'],resposta:'Pega o oponente de surpresa',explicacao:'O wrist lock frequentemente pega o oponente de surpresa pois e menos esperado.'},
      {pergunta:'Complete: "Wrist lock catches people by ___"',alternativas:['surprise','force','speed'],resposta:'surprise',explicacao:'"Wrist lock catches people by surprise" - chave de pulso pega de surpresa!'}
    ]),
    pontos: 15, ordem: 39
  },
  {
    id: uuidv4(), titulo: 'Roll – Rolar / Treinar', tipo: 'microlesson', categoria: 'expression',
    transcricao: "To roll means to spar in jiu-jitsu. 'Let's roll' invites someone to spar. Rolling tests your game.",
    traducao: 'Rolar significa fazer sparring. "Lets roll" convida para treinar ao vivo. Rolar testa seu jogo.',
    video_link: 'https://www.youtube.com/embed/example_roll',
    vocabulario: JSON.stringify(['roll','rolling','spar','game','test','invite']),
    frases: JSON.stringify(["Let's roll!","Want to roll after class?","Rolling tests your game","I rolled with a black belt"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "lets roll"?',alternativas:['Vamos fazer sparring','Vamos fazer drilling','Vamos para academia'],resposta:'Vamos fazer sparring',explicacao:'"Lets roll" e o convite para fazer sparring - treino vivo no jiu-jitsu.'},
      {pergunta:'O que o rolling testa?',alternativas:['Seu jogo / suas tecnicas','Sua forca','Sua velocidade'],resposta:'Seu jogo / suas tecnicas',explicacao:'Rolling testa "your game" - suas tecnicas, estrategias e reacoes sob pressao real.'},
      {pergunta:'Complete: "Lets ___ after class"',alternativas:['roll','drill','train'],resposta:'roll',explicacao:'"Lets roll after class" - vamos rolar depois da aula!'}
    ]),
    pontos: 15, ordem: 40
  },
  {
    id: uuidv4(), titulo: 'Back Take – Pegar as Costas', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Taking the back means getting behind opponent and setting hooks. Leads directly to rear naked choke.",
    traducao: 'Pegar as costas significa ir atras e colocar os ganchos. Leva diretamente ao mata-leao.',
    video_link: 'https://www.youtube.com/embed/example_back_take',
    vocabulario: JSON.stringify(['back take','behind','hooks','establish','direct','dominant']),
    frases: JSON.stringify(['Take back and set hooks','Back take leads to choke','Get behind your opponent','Establish both hooks']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "back take"?',alternativas:['Pegar as costas do oponente','Raspagem','Passagem de guarda'],resposta:'Pegar as costas do oponente',explicacao:'Back take e posicionar-se atras do oponente com ganchos - leva a posicao mais dominante.'},
      {pergunta:'O que o back take leva diretamente?',alternativas:['Ao rear naked choke','Ao armbar','Ao triangle'],resposta:'Ao rear naked choke',explicacao:'Do back take voce busca diretamente o rear naked choke - o mata-leao.'},
      {pergunta:'Complete: "Establish both ___"',alternativas:['hooks','grips','collars'],resposta:'hooks',explicacao:'"Establish both hooks" - coloque os dois ganchos para controlar as costas!'}
    ]),
    pontos: 15, ordem: 41
  },
  {
    id: uuidv4(), titulo: 'Head Control – Controle da Cabeca', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Head control limits opponent's movement when passing guard. Essential for stabilizing.",
    traducao: 'O controle da cabeca limita o movimento ao passar a guarda. Essencial para estabilizar.',
    video_link: 'https://www.youtube.com/embed/example_head_control',
    vocabulario: JSON.stringify(['head control','head','limit','stabilize','escape','essential']),
    frases: JSON.stringify(['Control head to limit movement','Head control after pass','Use head control to stabilize','Never lose head control']),
    quiz: JSON.stringify([
      {pergunta:'Por que o "head control" e importante?',alternativas:['Limita movimento e estabiliza posicao','E a melhor finalizacao','Para raspar'],resposta:'Limita movimento e estabiliza posicao',explicacao:'Head control limita drasticamente o movimento do oponente - fundamental para estabilizar.'},
      {pergunta:'Quando usar head control?',alternativas:['Apos passar a guarda','Para raspar','Para finalizar do guard'],resposta:'Apos passar a guarda',explicacao:'Head control e especialmente importante apos passar a guarda para estabilizar a posicao.'},
      {pergunta:'Complete: "Never lose ___ control"',alternativas:['head','hip','arm'],resposta:'head',explicacao:'"Never lose head control" - nunca perca o controle da cabeca!'}
    ]),
    pontos: 15, ordem: 42
  },
  {
    id: uuidv4(), titulo: 'Hook – Gancho', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'A hook uses foot or leg to hook around opponent for control. Essential in guard and back mount.',
    traducao: 'O gancho usa o pe ou perna para enganchar no oponente. Essencial nas guardas e na pegada nas costas.',
    video_link: 'https://www.youtube.com/embed/example_hook',
    vocabulario: JSON.stringify(['hook','foot hook','inside hook','outside hook','engage','control']),
    frases: JSON.stringify(['Set your hooks','Inside hook is key','Use heel to set hook','Hooks control from the back']),
    quiz: JSON.stringify([
      {pergunta:'O que e um "hook" no jiu-jitsu?',alternativas:['Gancho com pe ou perna para controle','Finalizacao de braco','Passagem'],resposta:'Gancho com pe ou perna para controle',explicacao:'Hook e o gancho com pe ou perna - usado nas guardas e no back mount para controlar.'},
      {pergunta:'Onde os hooks sao essenciais?',alternativas:['Nas guardas e no back mount','Apenas na guard fechada','Apenas no mount'],resposta:'Nas guardas e no back mount',explicacao:'Hooks sao fundamentais nas guardas abertas e no back mount para controle.'},
      {pergunta:'Complete: "Set your ___"',alternativas:['hooks','grips','frames'],resposta:'hooks',explicacao:'"Set your hooks" - coloque seus ganchos para controlar!'}
    ]),
    pontos: 15, ordem: 43
  },
  {
    id: uuidv4(), titulo: 'Submission – Finalizacao', tipo: 'microlesson', categoria: 'expression',
    transcricao: 'A submission forces opponent to tap. Can be chokes restricting blood or air, or joint locks stressing joints.',
    traducao: 'Uma finalizacao forca o oponente a bater. Pode ser estrangulamentos ou chaves articulares.',
    video_link: 'https://www.youtube.com/embed/example_submission',
    vocabulario: JSON.stringify(['submission','tap','choke','joint lock','force','finish']),
    frases: JSON.stringify(['Go for the submission','Chain submissions together','Submission forces the tap','Chokes and locks are submissions']),
    quiz: JSON.stringify([
      {pergunta:'O que e uma "submission"?',alternativas:['Tecnica que forca o oponente a desistir','Posicao dominante','Passagem de guarda'],resposta:'Tecnica que forca o oponente a desistir',explicacao:'Submission e qualquer finalizacao - estrangulamento ou chave articular - que forca o tap.'},
      {pergunta:'Quais sao os dois tipos de submission?',alternativas:['Chokes e joint locks','Sweeps e passes','Guards e positions'],resposta:'Chokes e joint locks',explicacao:'Submissions sao chokes (estrangulamentos) ou joint locks (chaves articulares).'},
      {pergunta:'Complete: "Chain your ___ together"',alternativas:['submissions','grips','guards'],resposta:'submissions',explicacao:'"Chain your submissions together" - encadeie suas finalizacoes!'}
    ]),
    pontos: 15, ordem: 44
  },
  {
    id: uuidv4(), titulo: 'Shin Slice – Passagem pela Canela', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Shin slice uses shin bone to slice across opponent's thigh passing guard. Used when knee slide is blocked.",
    traducao: 'O shin slice usa a canela para fatiar pela coxa passando a guarda. Usado quando o knee slide esta bloqueado.',
    video_link: 'https://www.youtube.com/embed/example_shin_slice',
    vocabulario: JSON.stringify(['shin slice','shin','thigh','slice','blocked','pass']),
    frases: JSON.stringify(['Shin slice when knee slide blocked','Slice through with shin','Shin slice bypasses guard','Connect shin slice to pass']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "shin slice"?',alternativas:['Passagem usando a canela pela coxa','Raspagem','Chave de perna'],resposta:'Passagem usando a canela pela coxa',explicacao:'Shin slice usa a canela para fatiar pela guarda - alternativa ao knee slide.'},
      {pergunta:'Quando usar o shin slice?',alternativas:['Quando o knee slide esta bloqueado','Sempre que possivel','Apenas do back mount'],resposta:'Quando o knee slide esta bloqueado',explicacao:'O shin slice e ideal quando o oponente bloqueia o knee slide.'},
      {pergunta:'Complete: "Shin slice when knee slide is ___"',alternativas:['blocked','open','available'],resposta:'blocked',explicacao:'"Shin slice when knee slide is blocked" - use o shin slice quando o knee slide for bloqueado!'}
    ]),
    pontos: 15, ordem: 45
  }
];

async function seed() {
  console.log('Iniciando seed do Roll & English...');
  await getDb();
  run('DELETE FROM content');
  for (const aula of microAulas) {
    run(
      'INSERT INTO content (id,titulo,tipo,categoria,transcricao,traducao,video_link,vocabulario,frases,quiz,pontos,ordem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
      [aula.id,aula.titulo,aula.tipo,aula.categoria,aula.transcricao,aula.traducao,aula.video_link,aula.vocabulario,aula.frases,aula.quiz,aula.pontos,aula.ordem]
    );
  }
  console.log('45 micro-aulas com 3 perguntas cada inseridas!');
  microAulas.forEach((a,i) => console.log((i+1)+'. '+a.titulo));
  process.exit(0);
}

seed().catch(console.error);
