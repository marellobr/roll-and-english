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
    dialogo: JSON.stringify({
      contexto: 'Primeiro dia de aula — professor ensinando a guard',
      linhas: [
        {papel:'professor',fala:'Get into guard position!',traducao:'Entre na posicao de guarda!'},
        {papel:'aluno',fala:'Like this?',traducao:'Assim?'},
        {papel:'professor',fala:'Yes! Use your legs to control distance.',traducao:'Sim! Use as pernas para controlar a distancia.'},
        {papel:'aluno',fala:"Got it. Don't let them pass my guard!",traducao:'Entendi. Nao deixar eles passarem minha guarda!'},
        {papel:'professor',fala:'Exactly! Now sweep when you see the opportunity.',traducao:'Exatamente! Agora raspe quando ver a oportunidade.'}
      ]
    }),
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
      {pergunta:'O que significa "side control"?',alternativas:['Controle lateral','Montada','Pegada nas costas'],resposta:'Controle lateral',explicacao:'Side control e a posicao ao lado do oponente.'},
      {pergunta:'O que bloqueia o quadril no side control?',alternativas:['O cotovelo','O joelho','A cabeca'],resposta:'O cotovelo',explicacao:'No side control, o cotovelo bloqueia o quadril.'},
      {pergunta:'Complete: "Stabilize the ___ first"',alternativas:['position','guard','choke'],resposta:'position',explicacao:'"Stabilize the position first" - estabilize a posicao primeiro.'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Treinando passagem de guarda — chegando ao side control',
      linhas: [
        {papel:'professor',fala:'Good pass! Now stabilize the side control.',traducao:'Boa passagem! Agora estabilize o controle lateral.'},
        {papel:'aluno',fala:'Where do I put my elbow?',traducao:'Onde coloco o cotovelo?'},
        {papel:'professor',fala:'Block the hip with your elbow. Keep pressure!',traducao:'Bloqueie o quadril com o cotovelo. Mantenha pressao!'},
        {papel:'aluno',fala:'He keeps trying to escape.',traducao:'Ele continua tentando escapar.'},
        {papel:'professor',fala:'Control the near side arm. Use your weight.',traducao:'Controle o braco do lado proximo. Use seu peso.'}
      ]
    }),
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
      {pergunta:'O que significa "mount"?',alternativas:['Montada','Guarda','Controle lateral'],resposta:'Montada',explicacao:'Mount e quando voce esta sentado sobre o peito do oponente.'},
      {pergunta:'O que voce deve manter na montada?',alternativas:['Pressao no peito','Distancia','A guarda fechada'],resposta:'Pressao no peito',explicacao:'Manter pressao no peito e fundamental para controlar o oponente da montada.'},
      {pergunta:'Complete: "Don\'t let them ___ and roll"',alternativas:['bridge','sweep','escape'],resposta:'bridge',explicacao:'"Dont let them bridge and roll" - nao deixe o oponente fazer a ponte e rolar.'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Sparring — chegando a montada pela primeira vez',
      linhas: [
        {papel:'professor',fala:'You got the mount! Keep your balance.',traducao:'Voce pegou a montada! Mantenha o equilibrio.'},
        {papel:'aluno',fala:'He is trying to push me off!',traducao:'Ele esta tentando me jogar fora!'},
        {papel:'professor',fala:"Squeeze your knees. Don't let them bridge and roll.",traducao:'Aperte os joelhos. Nao deixe ele fazer a ponte e rolar.'},
        {papel:'aluno',fala:'My hips keep going too high.',traducao:'Meus quadris ficam subindo demais.'},
        {papel:'professor',fala:'Stay low. Keep pressure on their chest.',traducao:'Fique baixo. Mantenha pressao no peito dele.'}
      ]
    }),
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
      {pergunta:'Qual e a chave para controlar a meia guarda?',alternativas:['O underhook','O collar grip','O joelho'],resposta:'O underhook',explicacao:'O underhook e fundamental na meia guarda.'},
      {pergunta:'Complete: "Fight for the ___"',alternativas:['underhook','guard','choke'],resposta:'underhook',explicacao:'"Fight for the underhook" - lute pelo underhook!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Treinando defesa — preso na meia guarda',
      linhas: [
        {papel:'professor',fala:"You're in half guard. Fight for the underhook!",traducao:'Voce esta na meia guarda. Lute pelo underhook!'},
        {papel:'aluno',fala:'He has the underhook, what do I do?',traducao:'Ele tem o underhook, o que faco?'},
        {papel:'professor',fala:'Use your knee as a frame. Create space.',traducao:'Use o joelho como frame. Crie espaco.'},
        {papel:'aluno',fala:'Like this? Using my knee to push?',traducao:'Assim? Usando o joelho para empurrar?'},
        {papel:'professor',fala:'Yes! Now recover your guard from here.',traducao:'Sim! Agora recupere sua guarda daqui.'}
      ]
    }),
    pontos: 15, ordem: 4
  },
  {
    id: uuidv4(), titulo: 'Off Balance – Desequilibrio', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'The off balance creates momentum. Before you sweep, off balance your opponent first.',
    traducao: 'O desequilibrio cria momentum. Antes de raspar, desequilibre o oponente primeiro.',
    video_link: 'https://www.youtube.com/embed/example_offbalance',
    vocabulario: JSON.stringify(['off balance','momentum','sweep','pull','push','initiate']),
    frases: JSON.stringify(['Off balance them before the sweep','Create momentum first','Pull and push to initiate',"Without momentum it's hard to finish"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "off balance"?',alternativas:['Desequilibrio','Raspagem','Postura'],resposta:'Desequilibrio',explicacao:'Off balance e o desequilibrio - fundamental para iniciar raspagens.'},
      {pergunta:'O que o off balance cria?',alternativas:['Momentum','Finalizacao','Guarda'],resposta:'Momentum',explicacao:'O off balance cria momentum - o movimento inicial que facilita a raspagem.'},
      {pergunta:'Complete: "Off balance them ___ the sweep"',alternativas:['before','after','during'],resposta:'before',explicacao:'"Off balance them before the sweep" - desequilibre antes de raspar!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a raspar da guard fechada',
      linhas: [
        {papel:'professor',fala:"Why didn't your sweep work?",traducao:'Por que sua raspagem nao funcionou?'},
        {papel:'aluno',fala:'I tried to sweep but he was too heavy.',traducao:'Tentei raspar mas ele estava pesado demais.'},
        {papel:'professor',fala:'You need to off balance him first! Pull and push.',traducao:'Voce precisa desequilibra-lo primeiro! Puxe e empurre.'},
        {papel:'aluno',fala:'Create momentum before the sweep?',traducao:'Criar momentum antes da raspagem?'},
        {papel:'professor',fala:'Exactly. Without momentum it is hard to finish.',traducao:'Exatamente. Sem momentum e dificil finalizar.'}
      ]
    }),
    pontos: 15, ordem: 5
  },
  {
    id: uuidv4(), titulo: 'Grips – Pegadas', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Be consistent with your grips. Stay on one set of grips and combine your techniques.',
    traducao: 'Seja consistente com suas pegadas. Fique em um conjunto de pegadas e combine suas tecnicas.',
    video_link: 'https://www.youtube.com/embed/example_grips',
    vocabulario: JSON.stringify(['grips','collar grip','elbow grip','wrist','consistent','switch']),
    frases: JSON.stringify(['Stay consistent on your grips',"Don't switch grips too early",'Use collar grip to control distance','Fight to maintain your grips']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "grips"?',alternativas:['Pegadas','Raspagens','Finalizacoes'],resposta:'Pegadas',explicacao:'Grips sao as pegadas - fundamentais para controlar o oponente no kimono.'},
      {pergunta:'O que acontece se voce troca as pegadas cedo demais?',alternativas:['Perde a posicao','Finaliza mais rapido','Raspa o oponente'],resposta:'Perde a posicao',explicacao:'Trocar de pegada cedo demais leva a posicoes inconclusas.'},
      {pergunta:'Complete: "Don\'t switch grips too ___"',alternativas:['early','late','fast'],resposta:'early',explicacao:'"Dont switch grips too early" - nao troque de pegada cedo demais!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Treinando grips no kimono',
      linhas: [
        {papel:'professor',fala:'What grips are you using?',traducao:'Que pegadas voce esta usando?'},
        {papel:'aluno',fala:'Collar and sleeve grip.',traducao:'Pegada na gola e na manga.'},
        {papel:'professor',fala:'Good! Stay consistent. Do not switch too early.',traducao:'Bom! Seja consistente. Nao troque cedo demais.'},
        {papel:'aluno',fala:'When should I switch grips?',traducao:'Quando devo trocar as pegadas?'},
        {papel:'professor',fala:'Only when you have a clear reason. Fight to maintain them.',traducao:'So quando tiver uma razao clara. Lute para mantelas.'}
      ]
    }),
    pontos: 15, ordem: 6
  },
  {
    id: uuidv4(), titulo: 'Chaining Techniques – Encadeamento', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Chain your techniques. If the first sweep doesn't work, connect to the next.",
    traducao: 'Encadeie suas tecnicas. Se a primeira raspagem nao funcionar, conecte a proxima.',
    video_link: 'https://www.youtube.com/embed/example_chaining',
    vocabulario: JSON.stringify(['chain','connect','flow','reaction','combination','sequence']),
    frases: JSON.stringify(['Chain your techniques together',"React to your partner's defense",'Connect sweep to sweep','Keep flowing without stopping']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "chain your techniques"?',alternativas:['Encadear as tecnicas','Parar apos cada tecnica','Mudar de guarda'],resposta:'Encadear as tecnicas',explicacao:'Chaining e conectar uma tecnica a outra em sequencia sem parar.'},
      {pergunta:'O que deve guiar a proxima tecnica?',alternativas:['A reacao do oponente','Seu plano original','A posicao inicial'],resposta:'A reacao do oponente',explicacao:'Voce usa a defesa e reacao do oponente para decidir qual tecnica encadear.'},
      {pergunta:'Complete: "Keep ___ without stopping"',alternativas:['flowing','pushing','pulling'],resposta:'flowing',explicacao:'"Keep flowing without stopping" - continue fluindo sem parar!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Praticando sequencias de raspagem',
      linhas: [
        {papel:'professor',fala:'Your sweep failed. What do you do next?',traducao:'Sua raspagem falhou. O que voce faz agora?'},
        {papel:'aluno',fala:'I stopped and reset.',traducao:'Parei e resetei.'},
        {papel:'professor',fala:'No! Chain your techniques. React to his defense.',traducao:'Nao! Encadeie suas tecnicas. Reaja a defesa dele.'},
        {papel:'aluno',fala:'Connect sweep to sweep?',traducao:'Conectar raspagem com raspagem?'},
        {papel:'professor',fala:'Yes! Keep flowing. His defense becomes your next attack.',traducao:'Sim! Continue fluindo. A defesa dele vira seu proximo ataque.'}
      ]
    }),
    pontos: 15, ordem: 7
  },
  {
    id: uuidv4(), titulo: 'Base – Base', tipo: 'microlesson', categoria: 'technique',
    transcricao: "A strong base is fundamental. Use a spread base to keep hips low. When hips are high, it's easy to be swept.",
    traducao: 'Uma base forte e fundamental. Use base aberta para manter quadris baixos.',
    video_link: 'https://www.youtube.com/embed/example_base',
    vocabulario: JSON.stringify(['base','spread base','hips','weight','low','strong']),
    frases: JSON.stringify(['Keep a strong base','Spread your base to stay low','Your hips should be low',"Don't let them off balance you"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "base" no jiu-jitsu?',alternativas:['Equilibrio e estrutura corporal','Finalizacao','Pegada'],resposta:'Equilibrio e estrutura corporal',explicacao:'Base e a estrutura de equilibrio - boa base significa ser dificil de desequilibrar.'},
      {pergunta:'Como manter boa base quando por cima?',alternativas:['Quadris baixos e base aberta','Quadris altos e joelhos juntos','Peso para frente'],resposta:'Quadris baixos e base aberta',explicacao:'Spread base com quadris baixos e a chave para nao ser raspado.'},
      {pergunta:'Complete: "Keep a ___ base"',alternativas:['strong','open','closed'],resposta:'strong',explicacao:'"Keep a strong base" - mantenha uma base forte!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Trabalhando a postura por cima',
      linhas: [
        {papel:'professor',fala:'You keep getting swept. Why?',traducao:'Voce continua sendo raspado. Por que?'},
        {papel:'aluno',fala:'I do not know. My balance is bad.',traducao:'Nao sei. Meu equilibrio esta ruim.'},
        {papel:'professor',fala:'Your hips are too high! Spread your base.',traducao:'Seus quadris estao altos demais! Abra a base.'},
        {papel:'aluno',fala:'Like this? Wider stance?',traducao:'Assim? Base mais larga?'},
        {papel:'professor',fala:'Yes! Keep a strong base. Hips low, weight distributed.',traducao:'Sim! Mantenha uma base forte. Quadris baixos, peso distribuido.'}
      ]
    }),
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
      {pergunta:'O que a raspagem faz com a posicao?',alternativas:['Reverte - voce vai de baixo para cima','Mantem a posicao','Finaliza o oponente'],resposta:'Reverte - voce vai de baixo para cima',explicacao:'A raspagem inverte a posicao.'},
      {pergunta:'Complete: "Come on ___ after the sweep"',alternativas:['top','guard','back'],resposta:'top',explicacao:'"Come on top after the sweep" - venha por cima depois da raspagem!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a primeiro raspagem',
      linhas: [
        {papel:'professor',fala:'Now try to sweep me from guard.',traducao:'Agora tente me raspar da guard.'},
        {papel:'aluno',fala:'I pull and push like this?',traducao:'Eu puxo e empurro assim?'},
        {papel:'professor',fala:'Good! Use that momentum to sweep.',traducao:'Bom! Use esse momentum para raspar.'},
        {papel:'aluno',fala:'I swept! Now I come on top?',traducao:'Raspei! Agora venho por cima?'},
        {papel:'professor',fala:'Yes! Maintain your grips and come on top fast.',traducao:'Sim! Mantenha as pegadas e venha por cima rapido.'}
      ]
    }),
    pontos: 15, ordem: 9
  },
  {
    id: uuidv4(), titulo: 'Hip Escape – Fuga de Quadril', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'The hip escape is fundamental. Move hips away from opponent to create space and recover guard.',
    traducao: 'A fuga de quadril e fundamental. Mova os quadris para longe do oponente para criar espaco.',
    video_link: 'https://www.youtube.com/embed/example_hip_escape',
    vocabulario: JSON.stringify(['hip escape','shrimp','space','recover','movement','fundamental']),
    frases: JSON.stringify(['Hip escape to create space','Shrimp to recover guard','Move your hips away','Use hip escape to reset position']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "hip escape"?',alternativas:['Fuga de quadril','Raspagem','Passagem'],resposta:'Fuga de quadril',explicacao:'Hip escape e o movimento de fuga com os quadris.'},
      {pergunta:'Qual e o objetivo do hip escape?',alternativas:['Criar espaco e recuperar a guarda','Finalizar o oponente','Passar a guarda'],resposta:'Criar espaco e recuperar a guarda',explicacao:'O hip escape cria espaco para recuperar a guarda.'},
      {pergunta:'Complete: "___ to recover your guard"',alternativas:['Shrimp','Bridge','Roll'],resposta:'Shrimp',explicacao:'"Shrimp to recover your guard" - faca o shrimp para recuperar sua guarda!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Escapando do side control',
      linhas: [
        {papel:'professor',fala:'You are stuck in side control. Use the hip escape!',traducao:'Voce esta preso no controle lateral. Use a fuga de quadril!'},
        {papel:'aluno',fala:'I tried but I cannot create space.',traducao:'Tentei mas nao consigo criar espaco.'},
        {papel:'professor',fala:'Shrimp! Move your hips away from him.',traducao:'Faca o shrimp! Mova os quadris para longe dele.'},
        {papel:'aluno',fala:'Like a shrimp movement?',traducao:'Como um movimento de camarao?'},
        {papel:'professor',fala:'Exactly! Create space and recover your guard.',traducao:'Exatamente! Crie espaco e recupere sua guarda.'}
      ]
    }),
    pontos: 15, ordem: 10
  },
  {
    id: uuidv4(), titulo: 'Pass the Guard – Passagem de Guarda', tipo: 'microlesson', categoria: 'technique',
    transcricao: "To pass the guard, control grips, break structure and cross the hip line.",
    traducao: 'Para passar a guarda, controle as pegadas, quebre a estrutura e cruze a linha do quadril.',
    video_link: 'https://www.youtube.com/embed/example_pass',
    vocabulario: JSON.stringify(['pass','hip line','stabilize','cross','dominant','structure']),
    frases: JSON.stringify(['Cross the hip line to pass','Stabilize after you pass','Control grips before passing','Break their structure first']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "pass the guard"?',alternativas:['Passar a guarda','Raspar','Finalizar'],resposta:'Passar a guarda',explicacao:'Passing the guard e superar a guarda do oponente.'},
      {pergunta:'O que voce precisa cruzar para passar a guarda?',alternativas:['A linha do quadril','A linha do joelho','A linha dos ombros'],resposta:'A linha do quadril',explicacao:'Cruzar a hip line e o momento em que a passagem se completa.'},
      {pergunta:'Complete: "Stabilize ___ you pass"',alternativas:['after','before','while'],resposta:'after',explicacao:'"Stabilize after you pass" - estabilize depois de passar a guarda!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Tentando passar a guard do parceiro',
      linhas: [
        {papel:'professor',fala:'Break his grips first before you pass.',traducao:'Quebre as pegadas dele primeiro antes de passar.'},
        {papel:'aluno',fala:'He keeps putting his legs in the way.',traducao:'Ele fica colocando as pernas na frente.'},
        {papel:'professor',fala:'Cross the hip line! That is when the pass is complete.',traducao:'Cruze a linha do quadril! E quando a passagem esta completa.'},
        {papel:'aluno',fala:'I crossed it! Now stabilize?',traducao:'Cruzei! Agora estabilizo?'},
        {papel:'professor',fala:'Yes! Stabilize and control. Good pass!',traducao:'Sim! Estabilize e controle. Boa passagem!'}
      ]
    }),
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
      {pergunta:'O que significa "underhook"?',alternativas:['Braco por baixo do braco do oponente','Braco por cima','Pegada na gola'],resposta:'Braco por baixo do braco do oponente',explicacao:'Underhook e o braco passado por baixo do braco do oponente.'},
      {pergunta:'O que o underhook controla?',alternativas:['O tronco do oponente','As pernas','A cabeca'],resposta:'O tronco do oponente',explicacao:'Com o underhook voce controla o tronco e pode ditar o movimento.'},
      {pergunta:'Complete: "Fight for the ___"',alternativas:['underhook','collar','wrist'],resposta:'underhook',explicacao:'"Fight for the underhook" - lute pelo underhook sempre!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Batalha pelo underhook no clinch',
      linhas: [
        {papel:'professor',fala:'Who has the underhook right now?',traducao:'Quem tem o underhook agora?'},
        {papel:'aluno',fala:'He has it. What do I do?',traducao:'Ele tem. O que faco?'},
        {papel:'professor',fala:'Fight for it! The underhook gives you control.',traducao:'Lute por ele! O underhook da controle.'},
        {papel:'aluno',fala:'I got it! Now I can pass?',traducao:'Peguei! Agora posso passar?'},
        {papel:'professor',fala:"Yes! Don't give it up. Use it to initiate the pass.",traducao:'Sim! Nao abra mao dele. Use para iniciar a passagem.'}
      ]
    }),
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
      {pergunta:'O que voce levanta para aplicar pressao no armbar?',alternativas:['Os quadris','Os joelhos','Os ombros'],resposta:'Os quadris',explicacao:'Levantar os quadris e o movimento principal do armbar.'},
      {pergunta:'Complete: "Extend the arm ___"',alternativas:['fully','halfway','slowly'],resposta:'fully',explicacao:'"Extend the arm fully" - estenda o braco completamente!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aplicando o armbar pela primeira vez',
      linhas: [
        {papel:'professor',fala:'You have the armbar setup. Control the wrist!',traducao:'Voce tem o setup do armbar. Controle o pulso!'},
        {papel:'aluno',fala:'Like this? Both hands on the wrist?',traducao:'Assim? Ambas as maos no pulso?'},
        {papel:'professor',fala:'Yes! Now extend the arm fully and lift your hips.',traducao:'Sim! Agora estenda o braco completamente e levante os quadris.'},
        {papel:'aluno',fala:'He tapped! Did I do it right?',traducao:'Ele bateu! Fiz certo?'},
        {papel:'professor',fala:'Perfect armbar! Always tap out to avoid injury.',traducao:'Armbar perfeito! Sempre bata para evitar lesoes.'}
      ]
    }),
    pontos: 15, ordem: 13
  },
  {
    id: uuidv4(), titulo: 'Triangle – Triangulo', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Lock triangle by placing leg across neck trapping one arm. Adjust angle and squeeze to finish.",
    traducao: 'Trave o triangulo colocando a perna no pescoco e prendendo um braco. Ajuste o angulo e aperte.',
    video_link: 'https://www.youtube.com/embed/example_triangle',
    vocabulario: JSON.stringify(['triangle','lock','neck','angle','squeeze','trap']),
    frases: JSON.stringify(['Lock the triangle tight','Adjust the angle first','Trap one arm inside','Squeeze your legs to finish']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "triangle"?',alternativas:['Triangulo','Chave de braco','Raspagem'],resposta:'Triangulo',explicacao:'Triangle e o triangulo - estrangulamento com as pernas em formato triangular.'},
      {pergunta:'O que voce precisa ajustar para finalizar o triangulo?',alternativas:['O angulo','A pegada','Os quadris'],resposta:'O angulo',explicacao:'Ajustar o angulo e fundamental para apertar o triangulo.'},
      {pergunta:'Complete: "___ your legs to finish"',alternativas:['Squeeze','Open','Extend'],resposta:'Squeeze',explicacao:'"Squeeze your legs to finish" - aperte as pernas para finalizar!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo o triangulo da guard',
      linhas: [
        {papel:'professor',fala:'Trap one arm inside and lock the triangle.',traducao:'Prenda um braco por dentro e trave o triangulo.'},
        {papel:'aluno',fala:'I locked it but he is not tapping.',traducao:'Travei mas ele nao esta batendo.'},
        {papel:'professor',fala:'Adjust the angle first! Cut the angle.',traducao:'Ajuste o angulo primeiro! Corte o angulo.'},
        {papel:'aluno',fala:'Now squeeze my legs?',traducao:'Agora aperto as pernas?'},
        {papel:'professor',fala:'Yes! Squeeze to finish. Feel the choke?',traducao:'Sim! Aperte para finalizar. Sente o estrangulamento?'}
      ]
    }),
    pontos: 15, ordem: 14
  },
  {
    id: uuidv4(), titulo: 'Choke – Estrangulamento', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'A choke cuts off blood or air to make opponent tap. Rear naked choke and collar chokes are most common.',
    traducao: 'O estrangulamento corta sangue ou ar para fazer o oponente bater.',
    video_link: 'https://www.youtube.com/embed/example_choke',
    vocabulario: JSON.stringify(['choke','blood flow','air','squeeze','rear naked','collar']),
    frases: JSON.stringify(['Apply the choke tight','Cut off the blood supply','Rear naked choke from the back','Use collar for the choke']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "choke"?',alternativas:['Estrangulamento','Chave de braco','Passagem'],resposta:'Estrangulamento',explicacao:'Choke e o estrangulamento - corta sangue ou ar para forcar o oponente a desistir.'},
      {pergunta:'O que o choke corta para funcionar?',alternativas:['Fluxo de sangue ou ar','Movimento das pernas','Pegadas do oponente'],resposta:'Fluxo de sangue ou ar',explicacao:'Chokes funcionam cortando o fluxo de sangue ou ar.'},
      {pergunta:'Complete: "Apply the choke ___"',alternativas:['tight','loose','slow'],resposta:'tight',explicacao:'"Apply the choke tight" - aplique o estrangulamento bem firme!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo sobre finalizacoes por estrangulamento',
      linhas: [
        {papel:'professor',fala:'There are two types of chokes. Do you know them?',traducao:'Ha dois tipos de estrangulamento. Voce os conhece?'},
        {papel:'aluno',fala:'Blood choke and air choke?',traducao:'Estrangulamento sanguineo e respiratorio?'},
        {papel:'professor',fala:'Exactly! Blood chokes are faster. Apply tight.',traducao:'Exatamente! Estrangulamentos sanguineos sao mais rapidos. Aplique firme.'},
        {papel:'aluno',fala:'Like the rear naked choke from the back?',traducao:'Como o mata-leao pelas costas?'},
        {papel:'professor',fala:'Yes! Cut off the blood supply. They tap fast.',traducao:'Sim! Corte o fluxo de sangue. Eles batem rapido.'}
      ]
    }),
    pontos: 15, ordem: 15
  },
  {
    id: uuidv4(), titulo: 'De La Riva – Guarda De La Riva', tipo: 'microlesson', categoria: 'technique',
    transcricao: "De La Riva uses outside hook on opponent's leg with collar grip to control posture and set up sweeps.",
    traducao: 'De La Riva usa ganchos externos na perna com pegada na gola para controlar a postura.',
    video_link: 'https://www.youtube.com/embed/example_dlr',
    vocabulario: JSON.stringify(['De La Riva','outside hook','collar','posture','control','sweep']),
    frases: JSON.stringify(['Set the DLR hook first','Control posture with collar','Hook to off balance','Connect to sweep from DLR']),
    quiz: JSON.stringify([
      {pergunta:'O que e a guarda De La Riva?',alternativas:['Guarda com gancho externo na perna','Guarda fechada','Meia guarda'],resposta:'Guarda com gancho externo na perna',explicacao:'De La Riva usa um gancho externo na perna.'},
      {pergunta:'Qual pegada controla a postura na De La Riva?',alternativas:['Collar grip','Elbow grip','Wrist grip'],resposta:'Collar grip',explicacao:'O collar grip controla a postura do oponente na De La Riva.'},
      {pergunta:'Complete: "Set the ___ hook first"',alternativas:['DLR','inside','back'],resposta:'DLR',explicacao:'"Set the DLR hook first" - coloque o gancho da De La Riva primeiro!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Primeiro contato com a guarda De La Riva',
      linhas: [
        {papel:'professor',fala:'This is the De La Riva guard. Set your outside hook.',traducao:'Esta e a guarda De La Riva. Coloque o gancho externo.'},
        {papel:'aluno',fala:'My hook goes around his leg like this?',traducao:'Meu gancho vai ao redor da perna dele assim?'},
        {papel:'professor',fala:'Yes! Now control his posture with the collar grip.',traducao:'Sim! Agora controle a postura dele com a pegada na gola.'},
        {papel:'aluno',fala:'I have the hook and collar. Now sweep?',traducao:'Tenho o gancho e a gola. Agora raspo?'},
        {papel:'professor',fala:'Off balance him first, then connect to the sweep.',traducao:'Desequilibre-o primeiro, depois conecte a raspagem.'}
      ]
    }),
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
      {pergunta:'O que e a lasso guard?',alternativas:['Perna enrolada no braco do oponente','Guarda fechada','De La Riva'],resposta:'Perna enrolada no braco do oponente',explicacao:'Lasso guard envolve a perna no braco do oponente.'},
      {pergunta:'O que a lasso guard limita?',alternativas:['A capacidade de passar a guarda','A raspagem','O estrangulamento'],resposta:'A capacidade de passar a guarda',explicacao:'O lasso limita e dificulta a passagem de guarda.'},
      {pergunta:'Complete: "Wrap lasso around their ___"',alternativas:['arm','leg','neck'],resposta:'arm',explicacao:'"Wrap lasso around their arm" - envolva o lasso ao redor do braco!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a guarda lasso',
      linhas: [
        {papel:'professor',fala:'Wrap your leg around his arm. That is the lasso.',traducao:'Envolva sua perna ao redor do braco dele. Esse e o lasso.'},
        {papel:'aluno',fala:'Like wrapping a rope around his arm?',traducao:'Como enrolar uma corda no braco dele?'},
        {papel:'professor',fala:'Exactly! Now his posture is controlled.',traducao:'Exatamente! Agora a postura dele esta controlada.'},
        {papel:'aluno',fala:'He cannot pass my guard now?',traducao:'Ele nao consegue passar minha guarda agora?'},
        {papel:'professor',fala:'The lasso limits the pass. Now set up your sweep.',traducao:'O lasso limita a passagem. Agora prepare sua raspagem.'}
      ]
    }),
    pontos: 15, ordem: 17
  },
  {
    id: uuidv4(), titulo: 'Tap Out – Bater', tipo: 'microlesson', categoria: 'command',
    transcricao: "Tap out to indicate submission. Tap clearly on mat or opponent. Tap early - no shame.",
    traducao: 'Bata para indicar desistencia. Bata claramente no tatame ou no oponente. Bata cedo - sem vergonha.',
    video_link: 'https://www.youtube.com/embed/example_tap',
    vocabulario: JSON.stringify(['tap out','submission','signal','mat','early','respect']),
    frases: JSON.stringify(['Tap early to prevent injury','Respect your training partner',"There's no shame in tapping",'Tap clearly']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "tap out"?',alternativas:['Bater para desistir','Raspar','Finalizar'],resposta:'Bater para desistir',explicacao:'Tap out e bater no tatame para indicar desistencia.'},
      {pergunta:'Quando voce deve bater?',alternativas:['Cedo, antes de se machucar','Apenas quando nao consegue mais resistir','Nunca'],resposta:'Cedo, antes de se machucar',explicacao:'Bater cedo previne lesoes.'},
      {pergunta:'Complete: "There\'s no ___ in tapping"',alternativas:['shame','point','reason'],resposta:'shame',explicacao:'"Theres no shame in tapping" - nao ha vergonha em bater!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Primeiro dia — aprendendo sobre seguranca',
      linhas: [
        {papel:'professor',fala:'The most important rule: tap out when you need to.',traducao:'A regra mais importante: bata quando precisar.'},
        {papel:'aluno',fala:'Is it okay to tap out? I feel like I am giving up.',traducao:'Esta bom bater? Sinto que estou desistindo.'},
        {papel:'professor',fala:"There's no shame in tapping. It prevents injury.",traducao:'Nao ha vergonha em bater. Previne lesoes.'},
        {papel:'aluno',fala:'How do I tap? On the mat or on my partner?',traducao:'Como bato? No tatame ou no parceiro?'},
        {papel:'professor',fala:'Tap clearly on the mat or on him. Tap early, train tomorrow.',traducao:'Bata claramente no tatame ou nele. Bata cedo, treine amanha.'}
      ]
    }),
    pontos: 15, ordem: 18
  },
  {
    id: uuidv4(), titulo: 'Drilling – Pratica Repetitiva', tipo: 'microlesson', categoria: 'expression',
    transcricao: 'Drilling builds muscle memory through repetition. Find comfortable pace. Visualize opponent.',
    traducao: 'O drilling constroi memoria muscular pela repeticao. Encontre ritmo confortavel.',
    video_link: 'https://www.youtube.com/embed/example_drilling',
    vocabulario: JSON.stringify(['drilling','repetition','muscle memory','pace','comfortable','visualize']),
    frases: JSON.stringify(['Find your pace when drilling','Drill to build muscle memory','Stay comfortable during drill','Visualize opponent while drilling']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "drilling"?',alternativas:['Praticar tecnicas repetidamente','Fazer sparring','Competir'],resposta:'Praticar tecnicas repetidamente',explicacao:'Drilling e pratica repetitiva sem resistencia.'},
      {pergunta:'O que o drilling constroi?',alternativas:['Memoria muscular','Forca fisica','Velocidade'],resposta:'Memoria muscular',explicacao:'O drilling constroi muscle memory - a execucao automatica das tecnicas.'},
      {pergunta:'Complete: "Find your ___ when drilling"',alternativas:['pace','partner','guard'],resposta:'pace',explicacao:'"Find your pace when drilling" - encontre seu ritmo no drilling!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Comecando a sessao de drilling',
      linhas: [
        {papel:'professor',fala:'Today we drill for 20 minutes. Find your pace.',traducao:'Hoje fazemos drilling por 20 minutos. Encontre seu ritmo.'},
        {papel:'aluno',fala:'Should I go fast or slow?',traducao:'Devo ir rapido ou devagar?'},
        {papel:'professor',fala:'Stay comfortable. Speed comes later. Build muscle memory first.',traducao:'Fique confortavel. A velocidade vem depois. Construa memoria muscular primeiro.'},
        {papel:'aluno',fala:'Should I visualize a real opponent?',traducao:'Devo visualizar um oponente real?'},
        {papel:'professor',fala:'Yes! Visualize while drilling. It makes it real.',traducao:'Sim! Visualize enquanto faz o drilling. Torna mais real.'}
      ]
    }),
    pontos: 15, ordem: 19
  },
  {
    id: uuidv4(), titulo: 'Sparring – Treino Vivo', tipo: 'microlesson', categoria: 'expression',
    transcricao: 'Sparring is live training with resistance. Partner defends and attacks. Test techniques.',
    traducao: 'Sparring e treino vivo com resistencia. O parceiro defende e ataca. Teste tecnicas.',
    video_link: 'https://www.youtube.com/embed/example_sparring',
    vocabulario: JSON.stringify(['sparring','live','resistance','realistic','pressure','test']),
    frases: JSON.stringify(['Test techniques in sparring','Sparring has real resistance',"React to partner's defense",'Use sparring to find what works']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "sparring"?',alternativas:['Treino vivo com resistencia','Pratica sem resistencia','Competicao'],resposta:'Treino vivo com resistencia',explicacao:'Sparring e treino vivo - ambos aplicam tecnicas com resistencia real.'},
      {pergunta:'Qual e a diferenca entre drilling e sparring?',alternativas:['No sparring o parceiro resiste ativamente','No sparring voce nao usa tecnicas','No drilling voce usa mais forca'],resposta:'No sparring o parceiro resiste ativamente',explicacao:'No sparring o parceiro defende e ataca.'},
      {pergunta:'Complete: "Test your techniques in ___"',alternativas:['sparring','drilling','class'],resposta:'sparring',explicacao:'"Test your techniques in sparring" - teste suas tecnicas no sparring!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Primeiro sparring do aluno',
      linhas: [
        {papel:'professor',fala:'Ready for your first sparring session?',traducao:'Pronto para sua primeira sessao de sparring?'},
        {papel:'aluno',fala:'A little nervous. What should I focus on?',traducao:'Um pouco nervoso. Em que devo focar?'},
        {papel:'professor',fala:'Just react. Test what you learned in drilling.',traducao:'So reaja. Teste o que aprendeu no drilling.'},
        {papel:'aluno',fala:'He is resisting everything I try.',traducao:'Ele esta resistindo tudo que tento.'},
        {papel:'professor',fala:'That is sparring! Real resistance. React to his defense.',traducao:'Esse e o sparring! Resistencia real. Reaja a defesa dele.'}
      ]
    }),
    pontos: 15, ordem: 20
  },
  {
    id: uuidv4(), titulo: 'Back Mount – Pegada nas Costas', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Back mount is the most dominant position. Use hooks and seatbelt grip. Set up rear naked choke.',
    traducao: 'A pegada nas costas e a mais dominante. Use ganchos e a pegada de cinto.',
    video_link: 'https://www.youtube.com/embed/example_back',
    vocabulario: JSON.stringify(['back mount','hooks','seatbelt','rear naked choke','dominant','control']),
    frases: JSON.stringify(['Take back and set hooks','Use seatbelt grip','Back is most dominant position','Set up rear naked choke']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "back mount"?',alternativas:['Pegada nas costas','Montada','Controle lateral'],resposta:'Pegada nas costas',explicacao:'Back mount e estar atras do oponente com ganchos.'},
      {pergunta:'Qual e a finalizacao mais comum do back mount?',alternativas:['Rear naked choke','Armbar','Triangle'],resposta:'Rear naked choke',explicacao:'O rear naked choke e a finalizacao mais direta do back mount.'},
      {pergunta:'Complete: "Take the back and set your ___"',alternativas:['hooks','grips','collar'],resposta:'hooks',explicacao:'"Take the back and set your hooks" - pegue as costas e coloque os ganchos!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Conseguindo a pegada nas costas pela primeira vez',
      linhas: [
        {papel:'professor',fala:'You took the back! Now set your hooks.',traducao:'Voce pegou as costas! Agora coloque os ganchos.'},
        {papel:'aluno',fala:'Both hooks? Inside his legs?',traducao:'Ambos os ganchos? Por dentro das pernas?'},
        {papel:'professor',fala:'Yes! And use the seatbelt grip on top.',traducao:'Sim! E use a pegada de cinto por cima.'},
        {papel:'aluno',fala:'Now go for the rear naked choke?',traducao:'Agora vou para o mata-leao?'},
        {papel:'professor',fala:'This is the most dominant position. Take your time.',traducao:'Esta e a posicao mais dominante. Nao tenha pressa.'}
      ]
    }),
    pontos: 15, ordem: 21
  },
  {
    id: uuidv4(), titulo: 'X-Guard – Guarda X', tipo: 'microlesson', categoria: 'technique',
    transcricao: "X-guard uses both legs to control one of opponent's legs, lifting them off balance.",
    traducao: 'A guarda X usa as duas pernas para controlar uma perna do oponente, levantando-o.',
    video_link: 'https://www.youtube.com/embed/example_xguard',
    vocabulario: JSON.stringify(['X-guard','lift','elevate','off balance','leg lock','sweep']),
    frases: JSON.stringify(['Enter X-guard to lift them','X-guard to off balance','Sweep from X-guard','Connect to leg locks from X']),
    quiz: JSON.stringify([
      {pergunta:'O que e a X-guard?',alternativas:['Guarda com duas pernas em uma perna do oponente','Guarda fechada','Meia guarda'],resposta:'Guarda com duas pernas em uma perna do oponente',explicacao:'X-guard controla e eleva uma perna do oponente.'},
      {pergunta:'O que a X-guard faz com o oponente?',alternativas:['Eleva e desequilibra','Estrangula','Passa a guarda'],resposta:'Eleva e desequilibra',explicacao:'A X-guard eleva o oponente e o desequilibra.'},
      {pergunta:'Complete: "Enter X-guard to ___ them"',alternativas:['lift','choke','pass'],resposta:'lift',explicacao:'"Enter X-guard to lift them" - entre na X-guard para elevar o oponente!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a X-guard',
      linhas: [
        {papel:'professor',fala:'Enter the X-guard here. Use both legs on his one leg.',traducao:'Entre na X-guard aqui. Use ambas as pernas na perna dele.'},
        {papel:'aluno',fala:'Both my legs on his one leg?',traducao:'Ambas as minhas pernas na perna dele?'},
        {papel:'professor',fala:'Yes! Now lift him. See how he loses his balance?',traducao:'Sim! Agora levante-o. Ve como ele perde o equilibrio?'},
        {papel:'aluno',fala:'He is off balance! Now sweep?',traducao:'Ele esta desequilibrado! Agora raspo?'},
        {papel:'professor',fala:'Sweep or connect to leg locks. Both work from X.',traducao:'Raspe ou conecte para chaves de perna. Ambos funcionam da X.'}
      ]
    }),
    pontos: 15, ordem: 22
  },
  {
    id: uuidv4(), titulo: 'Reverse De La Riva – Guarda Reversa', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Reverse De La Riva uses inside hook on opponent's leg. Sets up back takes or leg attacks.",
    traducao: 'A Reversa usa gancho interno na perna. Prepara a pegada nas costas ou ataques as pernas.',
    video_link: 'https://www.youtube.com/embed/example_rdlr',
    vocabulario: JSON.stringify(['reverse De La Riva','inside hook','back take','leg attack','base','control']),
    frases: JSON.stringify(['Set inside hook first','RDLR to take the back','Control base from RDLR','Connect to leg attacks']),
    quiz: JSON.stringify([
      {pergunta:'O que e a Reverse De La Riva?',alternativas:['Guarda com gancho interno na perna','Guarda De La Riva normal','Guarda fechada'],resposta:'Guarda com gancho interno na perna',explicacao:'Reverse DLR usa gancho interno - muito usada para pegada nas costas.'},
      {pergunta:'O que a Reverse DLR prepara principalmente?',alternativas:['Pegada nas costas ou ataques as pernas','Estrangulamentos','Passagens de guarda'],resposta:'Pegada nas costas ou ataques as pernas',explicacao:'A RDLR e uma plataforma para pegar as costas ou atacar as pernas.'},
      {pergunta:'Complete: "Set the ___ hook first"',alternativas:['inside','outside','back'],resposta:'inside',explicacao:'"Set the inside hook first" - coloque o gancho interno primeiro!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Explorando a Reverse De La Riva',
      linhas: [
        {papel:'professor',fala:'This is the Reverse De La Riva. Inside hook here.',traducao:'Esta e a Reverse De La Riva. Gancho interno aqui.'},
        {papel:'aluno',fala:'Different from regular De La Riva?',traducao:'Diferente da De La Riva normal?'},
        {papel:'professor',fala:'Yes! Inside hook instead of outside. More back take options.',traducao:'Sim! Gancho interno em vez de externo. Mais opcoes para pegar as costas.'},
        {papel:'aluno',fala:'Can I attack leg locks too?',traducao:'Posso atacar chaves de perna tambem?'},
        {papel:'professor',fala:'Absolutely! RDLR connects to both. Very versatile.',traducao:'Absolutamente! A RDLR conecta com ambos. Muito versatil.'}
      ]
    }),
    pontos: 15, ordem: 23
  },
  {
    id: uuidv4(), titulo: 'Knee Slide – Passagem pelo Joelho', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Knee slide uses knee sliding across thigh to pass guard. Combine with collar grip.',
    traducao: 'O knee slide usa o joelho deslizando pela coxa para passar a guarda.',
    video_link: 'https://www.youtube.com/embed/example_knee_slide',
    vocabulario: JSON.stringify(['knee slide','thigh','collar grip','distance','stabilize','slide']),
    frases: JSON.stringify(['Use knee slide to pass','Control collar as you pass','Slide knee across thigh','Stabilize after knee slide']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "knee slide"?',alternativas:['Passagem com joelho deslizando pela coxa','Raspagem','Guarda De La Riva'],resposta:'Passagem com joelho deslizando pela coxa',explicacao:'Knee slide e a passagem onde o joelho desliza pela coxa.'},
      {pergunta:'Qual pegada controla a distancia no knee slide?',alternativas:['Collar grip','Elbow grip','Wrist grip'],resposta:'Collar grip',explicacao:'O collar grip controla a distancia durante o knee slide.'},
      {pergunta:'Complete: "Slide your ___ across the thigh"',alternativas:['knee','foot','hip'],resposta:'knee',explicacao:'"Slide your knee across the thigh" - deslize o joelho pela coxa!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a passagem pelo joelho',
      linhas: [
        {papel:'professor',fala:'Use the knee slide here. Slide across his thigh.',traducao:'Use o knee slide aqui. Deslize pela coxa dele.'},
        {papel:'aluno',fala:'My knee slides but he keeps blocking.',traducao:'Meu joelho desliza mas ele continua bloqueando.'},
        {papel:'professor',fala:'Control the collar grip. Use it to control distance.',traducao:'Controle a pegada na gola. Use para controlar a distancia.'},
        {papel:'aluno',fala:'I passed! How do I stabilize?',traducao:'Passei! Como estabilizo?'},
        {papel:'professor',fala:'Stabilize after the knee slide. Block the hip with your elbow.',traducao:'Estabilize apos o knee slide. Bloqueie o quadril com o cotovelo.'}
      ]
    }),
    pontos: 15, ordem: 24
  },
  {
    id: uuidv4(), titulo: 'Leg Drag – Arrastar a Perna', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Leg drag uses arms to drag opponent's leg across body, removing guard.",
    traducao: 'O leg drag usa os bracos para arrastar a perna pelo corpo, removendo a guarda.',
    video_link: 'https://www.youtube.com/embed/example_leg_drag',
    vocabulario: JSON.stringify(['leg drag','drag','across','remove','side control','back']),
    frases: JSON.stringify(['Drag leg across body','Leg drag removes guard','Connect to side control after drag','Use leg drag to take back']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "leg drag"?',alternativas:['Arrastar a perna do oponente','Finalizacao de perna','Raspagem'],resposta:'Arrastar a perna do oponente',explicacao:'Leg drag arrasta a perna do oponente pelo corpo.'},
      {pergunta:'O que o leg drag remove?',alternativas:['A guarda do oponente','Os ganchos','As pegadas'],resposta:'A guarda do oponente',explicacao:'O leg drag remove a guarda arrastando a perna para o lado.'},
      {pergunta:'Complete: "Drag the leg ___ their body"',alternativas:['across','under','over'],resposta:'across',explicacao:'"Drag the leg across their body" - arraste a perna pelo corpo!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo o leg drag',
      linhas: [
        {papel:'professor',fala:'Grab his leg and drag it across his body.',traducao:'Segure a perna dele e arraste pelo corpo.'},
        {papel:'aluno',fala:'Like this? Pulling his leg to the side?',traducao:'Assim? Puxando a perna dele para o lado?'},
        {papel:'professor',fala:'Yes! The leg drag removes his guard completely.',traducao:'Sim! O leg drag remove a guarda completamente.'},
        {papel:'aluno',fala:'Now I connect to side control?',traducao:'Agora conecto para o controle lateral?'},
        {papel:'professor',fala:'Or take the back! Both work after the leg drag.',traducao:'Ou pegue as costas! Ambos funcionam apos o leg drag.'}
      ]
    }),
    pontos: 15, ordem: 25
  },
  {
    id: uuidv4(), titulo: 'Sprawl – Sprawl', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Sprawl defends against takedowns. Shoot hips back and down, driving weight into opponent.',
    traducao: 'O sprawl defende contra derrubadas. Jogue o quadril para tras e baixo.',
    video_link: 'https://www.youtube.com/embed/example_sprawl',
    vocabulario: JSON.stringify(['sprawl','hips back','defend','takedown','weight','stop']),
    frases: JSON.stringify(['Sprawl to defend takedown','Drive hips back and down','Use weight to stop them','Sprawl and break the grip']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "sprawl"?',alternativas:['Jogar o quadril para tras para defender','Raspar','Passar a guarda'],resposta:'Jogar o quadril para tras para defender',explicacao:'Sprawl e jogar o quadril para tras e baixo - defesa contra derrubadas.'},
      {pergunta:'O sprawl defende contra o que?',alternativas:['Derrubadas e ataques as pernas','Estrangulamentos','Chaves de braco'],resposta:'Derrubadas e ataques as pernas',explicacao:'O sprawl e a defesa principal contra takedowns.'},
      {pergunta:'Complete: "Sprawl to ___ the takedown"',alternativas:['defend','finish','initiate'],resposta:'defend',explicacao:'"Sprawl to defend the takedown" - faca o sprawl para defender!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Defendendo a primeira derrubada',
      linhas: [
        {papel:'professor',fala:'He is going for a takedown. Sprawl!',traducao:'Ele esta indo para uma derrubada. Faca o sprawl!'},
        {papel:'aluno',fala:'What do I do? He grabbed my legs!',traducao:'O que faco? Ele agarrou minhas pernas!'},
        {papel:'professor',fala:'Drive your hips back and down. Use your weight!',traducao:'Jogue os quadris para tras e baixo. Use seu peso!'},
        {papel:'aluno',fala:'Like this? Hips down and back?',traducao:'Assim? Quadris baixo e para tras?'},
        {papel:'professor',fala:'Yes! Sprawl and break his grip. Good defense!',traducao:'Sim! Faca o sprawl e quebre a pegada dele. Boa defesa!'}
      ]
    }),
    pontos: 15, ordem: 26
  },
  {
    id: uuidv4(), titulo: 'Bridge – Ponte', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Bridge is explosive hip movement to escape bottom positions. Plant feet, drive hips up.',
    traducao: 'A ponte e movimento explosivo do quadril para escapar. Plante os pes, empurre o quadril para cima.',
    video_link: 'https://www.youtube.com/embed/example_bridge',
    vocabulario: JSON.stringify(['bridge','explosive','hips up','plant','escape','roll']),
    frases: JSON.stringify(['Bridge to escape mount','Plant feet and drive hips','Explosive bridge','Bridge and roll to reverse']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "bridge" no jiu-jitsu?',alternativas:['Movimento de ponte com o quadril','Passagem de guarda','Finalizacao'],resposta:'Movimento de ponte com o quadril',explicacao:'Bridge e elevar explosivamente o quadril.'},
      {pergunta:'Qual e o objetivo do bridge?',alternativas:['Escapar de posicoes inferiores','Finalizar o oponente','Passar a guarda'],resposta:'Escapar de posicoes inferiores',explicacao:'O bridge e usado para escapar da montada e outras posicoes.'},
      {pergunta:'Complete: "___ and roll to reverse"',alternativas:['Bridge','Sweep','Shrimp'],resposta:'Bridge',explicacao:'"Bridge and roll to reverse" - faca a ponte e role para reverter!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Escapando da montada com a ponte',
      linhas: [
        {papel:'professor',fala:'He is in mount. Use the bridge to escape!',traducao:'Ele esta na montada. Use a ponte para escapar!'},
        {papel:'aluno',fala:'I tried but I cannot move him.',traducao:'Tentei mas nao consigo mover ele.'},
        {papel:'professor',fala:'Plant your feet and drive your hips up explosively!',traducao:'Plante os pes e empurre os quadris para cima explosivamente!'},
        {papel:'aluno',fala:'Like this? Maximum power?',traducao:'Assim? Maxima forca?'},
        {papel:'professor',fala:'Yes! Bridge and roll to reverse the position.',traducao:'Sim! Faca a ponte e role para reverter a posicao.'}
      ]
    }),
    pontos: 15, ordem: 27
  },
  {
    id: uuidv4(), titulo: 'Longstep – Passo Longo', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Longstep uses a long step around opponent's leg to bypass guard. Get to tripod and drive weight.",
    traducao: 'O longstep usa passo longo ao redor da perna para contornar a guarda.',
    video_link: 'https://www.youtube.com/embed/example_longstep',
    vocabulario: JSON.stringify(['longstep','tripod','bypass','flatten','step','pass']),
    frases: JSON.stringify(['Longstep to bypass guard','Get to tripod position','Drive weight to flatten','Finish longstep pass']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "longstep"?',alternativas:['Passagem com passo longo ao redor da perna','Raspagem','Guarda lasso'],resposta:'Passagem com passo longo ao redor da perna',explicacao:'Longstep e uma passagem onde voce da um passo longo para contornar a guarda.'},
      {pergunta:'Qual posicao voce busca no longstep?',alternativas:['Tripod (tripe)','Side control direto','Mount direto'],resposta:'Tripod (tripe)',explicacao:'O tripod e a posicao intermediaria do longstep.'},
      {pergunta:'Complete: "Longstep to ___ the guard"',alternativas:['bypass','pass','sweep'],resposta:'bypass',explicacao:'"Longstep to bypass the guard" - use o longstep para contornar a guarda!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Usando o longstep contra o lasso',
      linhas: [
        {papel:'professor',fala:'He has the lasso guard. Use the longstep.',traducao:'Ele tem a guarda lasso. Use o longstep.'},
        {papel:'aluno',fala:'How do I start the longstep?',traducao:'Como inicio o longstep?'},
        {papel:'professor',fala:'Long step around his leg. Get to the tripod position.',traducao:'Passo longo ao redor da perna dele. Chegue a posicao de tripe.'},
        {papel:'aluno',fala:'I am in the tripod. Now drive weight?',traducao:'Estou no tripe. Agora coloco o peso?'},
        {papel:'professor',fala:'Yes! Drive weight to flatten him. Finish the pass.',traducao:'Sim! Coloque o peso para achata-lo. Finalize a passagem.'}
      ]
    }),
    pontos: 15, ordem: 28
  },
  {
    id: uuidv4(), titulo: 'Framing – Criar Frames', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Framing uses arms and legs as frames to create distance and prevent opponent advancing.',
    traducao: 'Framing usa bracos e pernas como estruturas para criar distancia e impedir o avanco.',
    video_link: 'https://www.youtube.com/embed/example_framing',
    vocabulario: JSON.stringify(['frame','framing','distance','prevent','recover','structure']),
    frases: JSON.stringify(['Use arms as frames','Create distance with frame','Frame buys you time','Frame to prevent advancing']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "framing"?',alternativas:['Usar bracos e pernas para criar distancia','Raspar o oponente','Finalizar'],resposta:'Usar bracos e pernas para criar distancia',explicacao:'Framing e usar bracos e pernas como estruturas para criar distancia.'},
      {pergunta:'O que o frame te da?',alternativas:['Tempo para recuperar a guarda','Forca para raspar','Velocidade para finalizar'],resposta:'Tempo para recuperar a guarda',explicacao:'Um bom frame compra tempo para recuperar a guarda.'},
      {pergunta:'Complete: "Use your arms as ___"',alternativas:['frames','hooks','grips'],resposta:'frames',explicacao:'"Use your arms as frames" - use os bracos como frames!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a se defender com frames',
      linhas: [
        {papel:'professor',fala:'He is trying to pass. Use your frames!',traducao:'Ele esta tentando passar. Use seus frames!'},
        {papel:'aluno',fala:'What do I frame against?',traducao:'Contra o que eu frame?'},
        {papel:'professor',fala:'Use your arms and legs as frames. Create distance.',traducao:'Use seus bracos e pernas como frames. Crie distancia.'},
        {papel:'aluno',fala:'The frame is buying me time?',traducao:'O frame esta me comprando tempo?'},
        {papel:'professor',fala:'Yes! Frame to prevent him advancing. Recover your guard.',traducao:'Sim! Frame para impedir o avanco. Recupere sua guarda.'}
      ]
    }),
    pontos: 15, ordem: 29
  },
  {
    id: uuidv4(), titulo: 'Posture – Postura', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Good posture on top means staying upright. From guard, breaking opponent's posture is key.",
    traducao: 'Boa postura por cima significa ficar ereto. Da guarda, quebrar a postura do oponente e fundamental.',
    video_link: 'https://www.youtube.com/embed/example_posture',
    vocabulario: JSON.stringify(['posture','upright','break posture','control','spine','structure']),
    frases: JSON.stringify(['Maintain good posture on top','Break posture from guard','Control posture with collar','Bad posture = easy to sweep']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "break posture"?',alternativas:['Quebrar a postura do oponente','Raspar','Finalizar'],resposta:'Quebrar a postura do oponente',explicacao:'Break posture significa puxar o oponente para frente, quebrando sua estrutura.'},
      {pergunta:'Por que a postura e importante por cima?',alternativas:['Evita ser raspado','Para finalizar mais rapido','Para passar a guarda'],resposta:'Evita ser raspado',explicacao:'Boa postura por cima dificulta raspagens.'},
      {pergunta:'Complete: "Bad posture = easy to ___"',alternativas:['sweep','choke','pass'],resposta:'sweep',explicacao:'Ma postura te torna facil de ser raspado!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Trabalhando postura na guard',
      linhas: [
        {papel:'professor',fala:'Maintain good posture when you are on top.',traducao:'Mantenha boa postura quando estiver por cima.'},
        {papel:'aluno',fala:'He keeps pulling me down to break my posture.',traducao:'Ele continua me puxando para baixo para quebrar minha postura.'},
        {papel:'professor',fala:'Sit up straight! Bad posture means easy to sweep.',traducao:'Sente-se ereto! Ma postura significa facil de raspar.'},
        {papel:'aluno',fala:'From the guard I should break his posture?',traducao:'Da guard devo quebrar a postura dele?'},
        {papel:'professor',fala:'Yes! Break posture from guard. Control with the collar.',traducao:'Sim! Quebre a postura da guard. Controle com a gola.'}
      ]
    }),
    pontos: 15, ordem: 30
  },
  {
    id: uuidv4(), titulo: 'Pressure – Pressao', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Pressure exhausts opponent, limits movement and creates submissions. Use weight intelligently.',
    traducao: 'A pressao cansa o oponente, limita o movimento e cria finalizacoes.',
    video_link: 'https://www.youtube.com/embed/example_pressure',
    vocabulario: JSON.stringify(['pressure','weight','exhaust','limit','apply','intelligent']),
    frases: JSON.stringify(['Apply pressure to exhaust','Use weight intelligently','Pressure limits movement','More pressure = harder to escape']),
    quiz: JSON.stringify([
      {pergunta:'Por que aplicar "pressure" e importante?',alternativas:['Cansa e limita o movimento','Para raspar mais rapido','Para passar a guarda'],resposta:'Cansa e limita o movimento',explicacao:'Pressure cansa o oponente e limita seus movimentos.'},
      {pergunta:'O que voce usa para aplicar pressure?',alternativas:['O peso do corpo de forma inteligente','Apenas forca muscular','Velocidade'],resposta:'O peso do corpo de forma inteligente',explicacao:'Pressure usa o peso corporal de forma inteligente.'},
      {pergunta:'Complete: "Apply ___ to exhaust them"',alternativas:['pressure','speed','grips'],resposta:'pressure',explicacao:'"Apply pressure to exhaust them" - aplique pressao para cansa-los!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a usar pressao no side control',
      linhas: [
        {papel:'professor',fala:'You have side control. Apply pressure now.',traducao:'Voce tem o controle lateral. Aplique pressao agora.'},
        {papel:'aluno',fala:'Just lay on him?',traducao:'So deito nele?'},
        {papel:'professor',fala:'Use your weight intelligently. Pressure exhausts him.',traducao:'Use seu peso de forma inteligente. A pressao o cansa.'},
        {papel:'aluno',fala:'He is getting tired under my pressure.',traducao:'Ele esta cansando sob minha pressao.'},
        {papel:'professor',fala:'More pressure equals harder to escape. Now attack.',traducao:'Mais pressao significa mais dificil de escapar. Agora ataque.'}
      ]
    }),
    pontos: 15, ordem: 31
  },
  {
    id: uuidv4(), titulo: 'Inside Position – Posicao Interna', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Inside position controls inside of arms or legs. Having inside position gives control.',
    traducao: 'A posicao interna controla a parte interna dos bracos ou pernas. Ter a posicao interna da controle.',
    video_link: 'https://www.youtube.com/embed/example_inside',
    vocabulario: JSON.stringify(['inside position','inside','control','limit','offense','fight for']),
    frases: JSON.stringify(['Fight for inside position','Inside position = control','Control inside of arms','Never give up inside position']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "inside position"?',alternativas:['Controlar a parte interna dos membros','Posicao de guarda fechada','Montada'],resposta:'Controlar a parte interna dos membros',explicacao:'Inside position e controlar o interior dos bracos ou pernas.'},
      {pergunta:'Por que a inside position e vantajosa?',alternativas:['Da controle e limita o ataque','E mais facil de manter','Facilita raspagens'],resposta:'Da controle e limita o ataque',explicacao:'Com inside position voce controla e limita o que o oponente pode fazer.'},
      {pergunta:'Complete: "Fight for the ___ position"',alternativas:['inside','outside','back'],resposta:'inside',explicacao:'"Fight for the inside position" - lute pela posicao interna!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Batalha pela posicao interna',
      linhas: [
        {papel:'professor',fala:'Who has the inside position right now?',traducao:'Quem tem a posicao interna agora?'},
        {papel:'aluno',fala:'He does. His arms are inside mine.',traducao:'Ele tem. Os bracos dele estao por dentro dos meus.'},
        {papel:'professor',fala:'Fight for it! Inside position means control.',traducao:'Lute por ela! Posicao interna significa controle.'},
        {papel:'aluno',fala:'I got the inside position! Now what?',traducao:'Peguei a posicao interna! E agora?'},
        {papel:'professor',fala:'Never give it up. Use it to attack or pass.',traducao:'Nunca abra mao dela. Use para atacar ou passar.'}
      ]
    }),
    pontos: 15, ordem: 32
  },
  {
    id: uuidv4(), titulo: 'Grip Break – Quebrar Pegada', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Breaking grips is essential before passing or attacking. Use leverage and movement.',
    traducao: 'Quebrar pegadas e essencial antes de passar ou atacar. Use alavanca e movimento.',
    video_link: 'https://www.youtube.com/embed/example_grip_break',
    vocabulario: JSON.stringify(['grip break','leverage','movement','strength','efficient','release']),
    frases: JSON.stringify(['Break grip before passing','Use leverage to break grips',"Don't just use strength","Break grip then attack"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "grip break"?',alternativas:['Quebrar a pegada do oponente','Fazer uma pegada','Raspar'],resposta:'Quebrar a pegada do oponente',explicacao:'Grip break e quebrar a pegada do oponente.'},
      {pergunta:'O que usar para quebrar pegadas eficientemente?',alternativas:['Alavanca e movimento','Apenas forca','Velocidade'],resposta:'Alavanca e movimento',explicacao:'Alavanca e movimento sao mais eficientes que forca bruta.'},
      {pergunta:'Complete: "Break the grip ___ you pass"',alternativas:['before','after','while'],resposta:'before',explicacao:'"Break the grip before you pass" - quebre a pegada antes de passar!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Tentando passar com grips sendo controlado',
      linhas: [
        {papel:'professor',fala:'Break his grips before you try to pass!',traducao:'Quebre as pegadas dele antes de tentar passar!'},
        {papel:'aluno',fala:'I keep trying but he holds on tight.',traducao:'Continuo tentando mas ele segura firme.'},
        {papel:'professor',fala:'Use leverage! Do not just use strength.',traducao:'Use alavanca! Nao use apenas forca.'},
        {papel:'aluno',fala:'Leverage and movement to break the grip?',traducao:'Alavanca e movimento para quebrar a pegada?'},
        {papel:'professor',fala:'Yes! Break the grip then attack immediately.',traducao:'Sim! Quebre a pegada e ataque imediatamente.'}
      ]
    }),
    pontos: 15, ordem: 33
  },
  {
    id: uuidv4(), titulo: 'Weight Distribution – Distribuicao de Peso', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Weight distribution is where you place weight during fight. Shift to hips when on top.',
    traducao: 'Distribuicao de peso e onde voce coloca o peso. Coloque nos quadris quando por cima.',
    video_link: 'https://www.youtube.com/embed/example_weight',
    vocabulario: JSON.stringify(['weight distribution','shift','hips','elevate','heavy','low']),
    frases: JSON.stringify(['Shift weight to your hips','Keep weight low','Make yourself heavy on top','Control where weight goes']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "weight distribution"?',alternativas:['Distribuicao do peso corporal','Raspagem','Finalizacao'],resposta:'Distribuicao do peso corporal',explicacao:'Weight distribution e controlar onde seu peso cai.'},
      {pergunta:'Onde colocar o peso quando por cima?',alternativas:['Nos quadris','Nos ombros','Nos joelhos'],resposta:'Nos quadris',explicacao:'Peso nos quadris dificulta a elevacao e raspagem.'},
      {pergunta:'Complete: "Shift your weight to your ___"',alternativas:['hips','shoulders','knees'],resposta:'hips',explicacao:'"Shift your weight to your hips" - coloque o peso nos quadris!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Corrigindo distribuicao de peso no top game',
      linhas: [
        {papel:'professor',fala:'Where is your weight right now?',traducao:'Onde esta seu peso agora?'},
        {papel:'aluno',fala:'On my chest? On his chest?',traducao:'No meu peito? No peito dele?'},
        {papel:'professor',fala:'Shift it to your hips! Make yourself heavy.',traducao:'Transfira para os quadris! Fique pesado.'},
        {papel:'aluno',fala:'Like this? Weight in my hips, low?',traducao:'Assim? Peso nos quadris, baixo?'},
        {papel:'professor',fala:'Yes! Control where your weight goes. He cannot elevate you now.',traducao:'Sim! Controle onde seu peso vai. Ele nao consegue te elevar agora.'}
      ]
    }),
    pontos: 15, ordem: 34
  },
  {
    id: uuidv4(), titulo: 'Reaction – Reacao', tipo: 'microlesson', categoria: 'technique',
    transcricao: "In jiu-jitsu you react to opponent's movement. Use their defense as signal for next technique.",
    traducao: 'No jiu-jitsu voce reage ao movimento do oponente. Use a defesa como sinal para a proxima tecnica.',
    video_link: 'https://www.youtube.com/embed/example_reaction',
    vocabulario: JSON.stringify(['reaction','action','signal','respond','flow','chain']),
    frases: JSON.stringify(['Use reaction to chain techniques','Action and reaction - jiu-jitsu','React to their defense','If they push, you pull']),
    quiz: JSON.stringify([
      {pergunta:'Por que "action and reaction" e importante?',alternativas:['Para encadear tecnicas usando a defesa do oponente','Para ser mais forte','Para ser mais rapido'],resposta:'Para encadear tecnicas usando a defesa do oponente',explicacao:'Acao e reacao e usar o movimento do oponente a seu favor.'},
      {pergunta:'Se o oponente empurra, voce deve...?',alternativas:['Puxar','Empurrar de volta','Parar'],resposta:'Puxar',explicacao:'"If they push, you pull" - se empurram, voce puxa!'},
      {pergunta:'Complete: "React to their ___"',alternativas:['defense','attack','guard'],resposta:'defense',explicacao:'"React to their defense" - reaja a defesa deles!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Entendendo o conceito de acao e reacao',
      linhas: [
        {papel:'professor',fala:'What is the core of jiu-jitsu? Action and reaction.',traducao:'Qual e o nucleo do jiu-jitsu? Acao e reacao.'},
        {papel:'aluno',fala:'I do not understand. Can you show me?',traducao:'Nao entendo. Pode me mostrar?'},
        {papel:'professor',fala:'I push. You pull. See? React to my defense.',traducao:'Eu empurro. Voce puxa. Ve? Reaja a minha defesa.'},
        {papel:'aluno',fala:'So I use what he gives me?',traducao:'Entao uso o que ele me da?'},
        {papel:'professor',fala:'Exactly! His reaction becomes your next attack.',traducao:'Exatamente! A reacao dele se torna seu proximo ataque.'}
      ]
    }),
    pontos: 15, ordem: 35
  },
  {
    id: uuidv4(), titulo: 'Rear Naked Choke – Mata-Leao', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Rear naked choke from the back. Arm around neck, squeeze with bicep and forearm.",
    traducao: 'Mata-leao pelas costas. Braco ao redor do pescoco, aperte com biceps e antebraco.',
    video_link: 'https://www.youtube.com/embed/example_rnc',
    vocabulario: JSON.stringify(['rear naked choke','mata-leao','bicep','forearm','neck','squeeze']),
    frases: JSON.stringify(['RNC from the back','Squeeze bicep and forearm','Set hooks before choke','Most effective choke']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "rear naked choke"?',alternativas:['Mata-leao pelas costas','Triangulo','Chave de braco'],resposta:'Mata-leao pelas costas',explicacao:'Rear naked choke e o mata-leao - estrangulamento pelas costas.'},
      {pergunta:'O que voce aperta para finalizar o RNC?',alternativas:['Biceps e antebraco','Maos','Pernas'],resposta:'Biceps e antebraco',explicacao:'A pressao do biceps e antebraco cria o estrangulamento no mata-leao.'},
      {pergunta:'Complete: "Set your ___ before the choke"',alternativas:['hooks','grips','collar'],resposta:'hooks',explicacao:'"Set your hooks before the choke" - coloque os ganchos antes!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aplicando o mata-leao pelas costas',
      linhas: [
        {papel:'professor',fala:'You have the back. Now set up the rear naked choke.',traducao:'Voce tem as costas. Agora prepare o mata-leao.'},
        {papel:'aluno',fala:'Arm around his neck like this?',traducao:'Braco ao redor do pescoco dele assim?'},
        {papel:'professor',fala:'Yes! Now squeeze your bicep and forearm together.',traducao:'Sim! Agora aperte o biceps e antebraco juntos.'},
        {papel:'aluno',fala:'He is defending with his chin.',traducao:'Ele esta defendendo com o queixo.'},
        {papel:'professor',fala:'Be patient. Wait for the angle. This is the most effective choke.',traducao:'Seja paciente. Espere o angulo. Este e o estrangulamento mais eficaz.'}
      ]
    }),
    pontos: 15, ordem: 36
  },
  {
    id: uuidv4(), titulo: 'Ezekiel Choke – Estrangulamento Ezequiel', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Ezekiel uses sleeve grip to choke. Insert four fingers in sleeve, slide hand across neck.',
    traducao: 'O Ezequiel usa a manga para estrangular. Insira quatro dedos na manga, deslize pelo pescoco.',
    video_link: 'https://www.youtube.com/embed/example_ezekiel',
    vocabulario: JSON.stringify(['Ezekiel','sleeve','four fingers','neck','slide','finish']),
    frases: JSON.stringify(['Four fingers inside sleeve','Slide hand across neck','Ezekiel works from mount','Finish the Ezekiel']),
    quiz: JSON.stringify([
      {pergunta:'O que e o "Ezekiel choke"?',alternativas:['Estrangulamento com a manga','Triangulo','Mata-leao'],resposta:'Estrangulamento com a manga',explicacao:'O Ezekiel usa a manga do kimono para criar o estrangulamento.'},
      {pergunta:'Quantos dedos voce insere na manga no Ezekiel?',alternativas:['Quatro','Dois','Tres'],resposta:'Quatro',explicacao:'Quatro dedos dentro da manga e o detalhe fundamental para o Ezekiel.'},
      {pergunta:'Complete: "___ fingers inside the sleeve"',alternativas:['Four','Two','Three'],resposta:'Four',explicacao:'"Four fingers inside the sleeve" - quatro dedos dentro da manga!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo o Ezekiel da montada',
      linhas: [
        {papel:'professor',fala:'You have mount. Try the Ezekiel choke.',traducao:'Voce tem a montada. Tente o Ezequiel.'},
        {papel:'aluno',fala:'How do I do the Ezekiel?',traducao:'Como faco o Ezequiel?'},
        {papel:'professor',fala:'Four fingers inside your sleeve. Now slide across his neck.',traducao:'Quatro dedos dentro da sua manga. Agora deslize pelo pescoco dele.'},
        {papel:'aluno',fala:'He does not know what I am setting up.',traducao:'Ele nao sabe o que estou preparando.'},
        {papel:'professor',fala:'The Ezekiel surprises people. Finish it from mount.',traducao:'O Ezequiel surpreende as pessoas. Finalize da montada.'}
      ]
    }),
    pontos: 15, ordem: 37
  },
  {
    id: uuidv4(), titulo: 'Shoulder Lock – Chave de Ombro', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Shoulder lock attacks shoulder joint by rotating or extending arm beyond range.',
    traducao: 'A chave de ombro ataca a articulacao do ombro girando ou estendendo alem da amplitude.',
    video_link: 'https://www.youtube.com/embed/example_shoulder_lock',
    vocabulario: JSON.stringify(['shoulder lock','shoulder','joint','rotate','extend','range']),
    frases: JSON.stringify(['Attack the shoulder joint','Rotate arm for shoulder lock','Shoulder lock from side control','Connect from triangle']),
    quiz: JSON.stringify([
      {pergunta:'O que e um "shoulder lock"?',alternativas:['Chave que ataca o ombro','Estrangulamento','Chave de braco'],resposta:'Chave que ataca o ombro',explicacao:'Shoulder lock ataca a articulacao do ombro.'},
      {pergunta:'De onde o shoulder lock e comum?',alternativas:['Side control e triangle','Guard e mount','Back mount'],resposta:'Side control e triangle',explicacao:'O shoulder lock e frequentemente aplicado do side control e triangulo.'},
      {pergunta:'Complete: "Attack the ___ joint"',alternativas:['shoulder','elbow','wrist'],resposta:'shoulder',explicacao:'"Attack the shoulder joint" - ataque a articulacao do ombro!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Descobrindo o shoulder lock do side control',
      linhas: [
        {papel:'professor',fala:'From side control you can attack the shoulder.',traducao:'Do controle lateral voce pode atacar o ombro.'},
        {papel:'aluno',fala:'Attack the shoulder joint? How?',traducao:'Atacar a articulacao do ombro? Como?'},
        {papel:'professor',fala:'Rotate his arm here. Feel how it stresses the shoulder?',traducao:'Gire o braco dele aqui. Sente como estresa o ombro?'},
        {papel:'aluno',fala:'Yes! Should I connect it from the triangle too?',traducao:'Sim! Devo conectar do triangulo tambem?'},
        {papel:'professor',fala:'Perfect! Shoulder lock connects from many positions.',traducao:'Perfeito! A chave de ombro conecta de muitas posicoes.'}
      ]
    }),
    pontos: 15, ordem: 38
  },
  {
    id: uuidv4(), titulo: 'Wrist Lock – Chave de Pulso', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'Wrist lock bends or rotates wrist past range of motion. Often catches by surprise.',
    traducao: 'A chave de pulso dobra ou gira o pulso alem da amplitude. Frequentemente pega de surpresa.',
    video_link: 'https://www.youtube.com/embed/example_wrist_lock',
    vocabulario: JSON.stringify(['wrist lock','wrist','bend','rotate','surprise','range']),
    frases: JSON.stringify(['Attack the wrist','Wrist lock surprises people','Bend wrist past range','Apply from many positions']),
    quiz: JSON.stringify([
      {pergunta:'O que e um "wrist lock"?',alternativas:['Chave que ataca o pulso','Estrangulamento','Chave de ombro'],resposta:'Chave que ataca o pulso',explicacao:'Wrist lock ataca a articulacao do pulso.'},
      {pergunta:'Por que o wrist lock e eficaz?',alternativas:['Pega o oponente de surpresa','E facil de defender','Requer muita forca'],resposta:'Pega o oponente de surpresa',explicacao:'O wrist lock frequentemente pega o oponente de surpresa.'},
      {pergunta:'Complete: "Wrist lock catches people by ___"',alternativas:['surprise','force','speed'],resposta:'surprise',explicacao:'"Wrist lock catches people by surprise" - chave de pulso pega de surpresa!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Usando o wrist lock como finalizacao surpresa',
      linhas: [
        {papel:'professor',fala:'See how his wrist is exposed here?',traducao:'Ve como o pulso dele esta exposto aqui?'},
        {papel:'aluno',fala:'I never noticed the wrist lock before.',traducao:'Nunca percebi a chave de pulso antes.'},
        {papel:'professor',fala:'Bend it past its range. It catches people by surprise.',traducao:'Dobre alem da amplitude. Pega as pessoas de surpresa.'},
        {papel:'aluno',fala:'He tapped so fast! Did not expect it.',traducao:'Ele bateu tao rapido! Nao esperava.'},
        {papel:'professor',fala:'Wrist locks work from many positions. Add it to your game.',traducao:'Chaves de pulso funcionam de muitas posicoes. Adicione ao seu jogo.'}
      ]
    }),
    pontos: 15, ordem: 39
  },
  {
    id: uuidv4(), titulo: 'Roll – Rolar / Treinar', tipo: 'microlesson', categoria: 'expression',
    transcricao: "To roll means to spar in jiu-jitsu. 'Let's roll' invites someone to spar.",
    traducao: 'Rolar significa fazer sparring. "Lets roll" convida para treinar ao vivo.',
    video_link: 'https://www.youtube.com/embed/example_roll',
    vocabulario: JSON.stringify(['roll','rolling','spar','game','test','invite']),
    frases: JSON.stringify(["Let's roll!","Want to roll after class?","Rolling tests your game","I rolled with a black belt"]),
    quiz: JSON.stringify([
      {pergunta:'O que significa "lets roll"?',alternativas:['Vamos fazer sparring','Vamos fazer drilling','Vamos para academia'],resposta:'Vamos fazer sparring',explicacao:'"Lets roll" e o convite para fazer sparring.'},
      {pergunta:'O que o rolling testa?',alternativas:['Seu jogo / suas tecnicas','Sua forca','Sua velocidade'],resposta:'Seu jogo / suas tecnicas',explicacao:'Rolling testa "your game" - suas tecnicas e estrategias.'},
      {pergunta:'Complete: "Lets ___ after class"',alternativas:['roll','drill','train'],resposta:'roll',explicacao:'"Lets roll after class" - vamos rolar depois da aula!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Convidando para o primeiro sparring',
      linhas: [
        {papel:'professor',fala:"Let's roll! Are you ready?",traducao:'Vamos rolar! Esta pronto?'},
        {papel:'aluno',fala:'Ready! Let us roll.',traducao:'Pronto! Vamos rolar.'},
        {papel:'professor',fala:'Remember: rolling tests your game. Stay relaxed.',traducao:'Lembre-se: rolar testa seu jogo. Fique relaxado.'},
        {papel:'aluno',fala:'I want to roll with the black belt later.',traducao:'Quero rolar com o faixa preta depois.'},
        {papel:'professor',fala:'Rolling with better people makes you better. Good attitude.',traducao:'Rolar com pessoas melhores te melhora. Boa atitude.'}
      ]
    }),
    pontos: 15, ordem: 40
  },
  {
    id: uuidv4(), titulo: 'Back Take – Pegar as Costas', tipo: 'microlesson', categoria: 'technique',
    transcricao: "Taking the back means getting behind opponent and setting hooks. Leads to rear naked choke.",
    traducao: 'Pegar as costas significa ir atras e colocar os ganchos. Leva ao mata-leao.',
    video_link: 'https://www.youtube.com/embed/example_back_take',
    vocabulario: JSON.stringify(['back take','behind','hooks','establish','direct','dominant']),
    frases: JSON.stringify(['Take back and set hooks','Back take leads to choke','Get behind your opponent','Establish both hooks']),
    quiz: JSON.stringify([
      {pergunta:'O que significa "back take"?',alternativas:['Pegar as costas do oponente','Raspagem','Passagem de guarda'],resposta:'Pegar as costas do oponente',explicacao:'Back take e posicionar-se atras do oponente com ganchos.'},
      {pergunta:'O que o back take leva diretamente?',alternativas:['Ao rear naked choke','Ao armbar','Ao triangle'],resposta:'Ao rear naked choke',explicacao:'Do back take voce busca diretamente o rear naked choke.'},
      {pergunta:'Complete: "Establish both ___"',alternativas:['hooks','grips','collars'],resposta:'hooks',explicacao:'"Establish both hooks" - coloque os dois ganchos!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a pegar as costas',
      linhas: [
        {papel:'professor',fala:'When he turns, take the back immediately.',traducao:'Quando ele virar, pegue as costas imediatamente.'},
        {papel:'aluno',fala:'Get behind him and then what?',traducao:'Ir atras dele e depois o que?'},
        {papel:'professor',fala:'Establish both hooks. Control his upper body.',traducao:'Coloque ambos os ganchos. Controle o tronco dele.'},
        {papel:'aluno',fala:'I have the back! Both hooks in.',traducao:'Tenho as costas! Ambos os ganchos colocados.'},
        {papel:'professor',fala:'Now the back take leads directly to the rear naked choke.',traducao:'Agora a pegada nas costas leva diretamente ao mata-leao.'}
      ]
    }),
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
      {pergunta:'Por que o "head control" e importante?',alternativas:['Limita movimento e estabiliza posicao','E a melhor finalizacao','Para raspar'],resposta:'Limita movimento e estabiliza posicao',explicacao:'Head control limita o movimento do oponente.'},
      {pergunta:'Quando usar head control?',alternativas:['Apos passar a guarda','Para raspar','Para finalizar do guard'],resposta:'Apos passar a guarda',explicacao:'Head control e especialmente importante apos passar a guarda.'},
      {pergunta:'Complete: "Never lose ___ control"',alternativas:['head','hip','arm'],resposta:'head',explicacao:'"Never lose head control" - nunca perca o controle da cabeca!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Trabalhando head control apos a passagem',
      linhas: [
        {papel:'professor',fala:'You passed! Now control his head.',traducao:'Voce passou! Agora controle a cabeca dele.'},
        {papel:'aluno',fala:'Why the head? I have side control already.',traducao:'Por que a cabeca? Ja tenho o controle lateral.'},
        {papel:'professor',fala:'Head control limits his movement. He cannot escape.',traducao:'Controle da cabeca limita o movimento. Ele nao consegue escapar.'},
        {papel:'aluno',fala:'I see! Head control stabilizes the position.',traducao:'Entendo! Controle da cabeca estabiliza a posicao.'},
        {papel:'professor',fala:'Never lose head control after the pass. Essential.',traducao:'Nunca perca o controle da cabeca apos a passagem. Essencial.'}
      ]
    }),
    pontos: 15, ordem: 42
  },
  {
    id: uuidv4(), titulo: 'Hook – Gancho', tipo: 'microlesson', categoria: 'technique',
    transcricao: 'A hook uses foot or leg to hook around opponent for control. Essential in guard and back mount.',
    traducao: 'O gancho usa o pe ou perna para enganchar no oponente. Essencial nas guardas e nas costas.',
    video_link: 'https://www.youtube.com/embed/example_hook',
    vocabulario: JSON.stringify(['hook','foot hook','inside hook','outside hook','engage','control']),
    frases: JSON.stringify(['Set your hooks','Inside hook is key','Use heel to set hook','Hooks control from the back']),
    quiz: JSON.stringify([
      {pergunta:'O que e um "hook" no jiu-jitsu?',alternativas:['Gancho com pe ou perna para controle','Finalizacao de braco','Passagem'],resposta:'Gancho com pe ou perna para controle',explicacao:'Hook e o gancho com pe ou perna.'},
      {pergunta:'Onde os hooks sao essenciais?',alternativas:['Nas guardas e no back mount','Apenas na guard fechada','Apenas no mount'],resposta:'Nas guardas e no back mount',explicacao:'Hooks sao fundamentais nas guardas abertas e no back mount.'},
      {pergunta:'Complete: "Set your ___"',alternativas:['hooks','grips','frames'],resposta:'hooks',explicacao:'"Set your hooks" - coloque seus ganchos!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Aprendendo a usar os ganchos',
      linhas: [
        {papel:'professor',fala:'Your hooks are not deep enough. Set them properly.',traducao:'Seus ganchos nao estao profundos o suficiente. Coloque-os corretamente.'},
        {papel:'aluno',fala:'Where exactly should my hooks go?',traducao:'Onde exatamente devem ir meus ganchos?'},
        {papel:'professor',fala:'Inside his thighs. Use your heel to set the hook.',traducao:'Por dentro das coxas dele. Use o calcanhar para colocar o gancho.'},
        {papel:'aluno',fala:'I set both hooks. Much better control now.',traducao:'Coloquei ambos os ganchos. Muito melhor controle agora.'},
        {papel:'professor',fala:'Hooks control from the back. Never give them up.',traducao:'Ganchos controlam das costas. Nunca os abra.'}
      ]
    }),
    pontos: 15, ordem: 43
  },
  {
    id: uuidv4(), titulo: 'Submission – Finalizacao', tipo: 'microlesson', categoria: 'expression',
    transcricao: 'A submission forces opponent to tap. Can be chokes or joint locks stressing joints.',
    traducao: 'Uma finalizacao forca o oponente a bater. Pode ser estrangulamentos ou chaves articulares.',
    video_link: 'https://www.youtube.com/embed/example_submission',
    vocabulario: JSON.stringify(['submission','tap','choke','joint lock','force','finish']),
    frases: JSON.stringify(['Go for the submission','Chain submissions together','Submission forces the tap','Chokes and locks are submissions']),
    quiz: JSON.stringify([
      {pergunta:'O que e uma "submission"?',alternativas:['Tecnica que forca o oponente a desistir','Posicao dominante','Passagem de guarda'],resposta:'Tecnica que forca o oponente a desistir',explicacao:'Submission e qualquer finalizacao que forca o tap.'},
      {pergunta:'Quais sao os dois tipos de submission?',alternativas:['Chokes e joint locks','Sweeps e passes','Guards e positions'],resposta:'Chokes e joint locks',explicacao:'Submissions sao chokes ou joint locks.'},
      {pergunta:'Complete: "Chain your ___ together"',alternativas:['submissions','grips','guards'],resposta:'submissions',explicacao:'"Chain your submissions together" - encadeie suas finalizacoes!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Entendendo os tipos de finalizacao',
      linhas: [
        {papel:'professor',fala:'What is a submission? Can you tell me?',traducao:'O que e uma finalizacao? Pode me dizer?'},
        {papel:'aluno',fala:'A technique that forces the opponent to tap?',traducao:'Uma tecnica que forca o oponente a bater?'},
        {papel:'professor',fala:'Correct! Two types: chokes and joint locks.',traducao:'Correto! Dois tipos: estrangulamentos e chaves articulares.'},
        {papel:'aluno',fala:'Should I chain my submissions together?',traducao:'Devo encadear minhas finalizacoes?'},
        {papel:'professor',fala:'Yes! Chain submissions. If armbar fails, go triangle.',traducao:'Sim! Encadeie finalizacoes. Se o armbar falhar, va para o triangulo.'}
      ]
    }),
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
      {pergunta:'O que e o "shin slice"?',alternativas:['Passagem usando a canela pela coxa','Raspagem','Chave de perna'],resposta:'Passagem usando a canela pela coxa',explicacao:'Shin slice usa a canela para fatiar pela guarda.'},
      {pergunta:'Quando usar o shin slice?',alternativas:['Quando o knee slide esta bloqueado','Sempre que possivel','Apenas do back mount'],resposta:'Quando o knee slide esta bloqueado',explicacao:'O shin slice e ideal quando o knee slide e bloqueado.'},
      {pergunta:'Complete: "Shin slice when knee slide is ___"',alternativas:['blocked','open','available'],resposta:'blocked',explicacao:'"Shin slice when knee slide is blocked" - use o shin slice quando bloqueado!'}
    ]),
    dialogo: JSON.stringify({
      contexto: 'Usando o shin slice como alternativa',
      linhas: [
        {papel:'professor',fala:'He is blocking your knee slide. Switch to shin slice.',traducao:'Ele esta bloqueando seu knee slide. Troque para o shin slice.'},
        {papel:'aluno',fala:'The shin slice? How is it different?',traducao:'O shin slice? Como e diferente?'},
        {papel:'professor',fala:'Slice through with your shin bone. Different angle.',traducao:'Fatia com o osso da canela. Angulo diferente.'},
        {papel:'aluno',fala:'I sliced through! He could not block it.',traducao:'Fatiou! Ele nao conseguiu bloquear.'},
        {papel:'professor',fala:'Chain the shin slice to the pass. Connect the techniques.',traducao:'Encadeie o shin slice a passagem. Conecte as tecnicas.'}
      ]
    }),
    pontos: 15, ordem: 45
  }
];

async function seed() {
  console.log('Iniciando seed do Roll & English...');
  await getDb();
  await run('DELETE FROM content', []);
  for (const aula of microAulas) {
    await run(
      'INSERT INTO content (id,titulo,tipo,categoria,transcricao,traducao,video_link,vocabulario,frases,quiz,dialogo,pontos,ordem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [aula.id,aula.titulo,aula.tipo,aula.categoria,aula.transcricao,aula.traducao,aula.video_link,aula.vocabulario,aula.frases,aula.quiz,aula.dialogo,aula.pontos,aula.ordem]
    );
  }
  console.log(`\n45 micro-aulas com dialogos inseridas!`);
  microAulas.forEach((a,i) => console.log((i+1)+'. '+a.titulo));
}

seed().catch(console.error);
