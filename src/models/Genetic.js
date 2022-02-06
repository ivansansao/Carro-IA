function firstGeneration() {
    quantidade = 1200;
    console.log('Primeira geração...');
    cars = [];
    
    // // Pesos salvo.
    // const pesos = `0.16179022192955017,-0.09492907673120499,0.0494239404797554,0.3751857280731201,-0.08487028628587723,0.07068651169538498,-0.4002669155597687,0.3076614737510681,0.1258854866027832,0.14785222709178925,-0.1778709441423416,0.07866448163986206,-0.06632833182811737,-0.04188256338238716,-0.2556619942188263,0.350772500038147,-0.35378357768058777,0.2410563826560974,-0.2999075949192047,-0.006191052030771971,0.20668154954910278,0.5396386981010437,0.09726709872484207,-0.5035268068313599,-0.23872816562652588,0.12622420489788055,0.25029516220092773,-0.1672547608613968,0.46327340602874756,0.08441987633705139,0.10639552772045135,-0.19854356348514557,0.039585478603839874,0.10355493426322937,0.24106164276599884,0.2829420864582062,-0.0045753223821520805,0.14516033232212067,-0.2082592248916626,-0.03285706043243408,0.21175070106983185,-0.06638498604297638,-0.03985465317964554,-0.36374518275260925,-0.10099994391202927,0.2539326846599579,-0.21141178905963898,0.23289203643798828,0.07306600362062454,-0.12424224615097046,0.06598929315805435,-0.03618287295103073,-0.01586759462952614,-0.14310218393802643,0.28345635533332825,0.40630996227264404,0.4915231168270111,0.2506929039955139,0.14517195522785187,0.07558166980743408,-0.2754092216491699,0.15799780189990997,-0.1461322009563446,0.5175153017044067,0.1722085028886795,-0.06431060284376144,-0.2605973780155182,0.043944742530584335,0.4341508150100708,-0.03598116710782051,-0.3354533016681671,-0.4225016236305237,-0.0592924989759922,0.22762897610664368,-0.049952492117881775,-0.08748849481344223,0.336159884929657,-0.23328018188476562,-0.4088571071624756,-0.3664373457431793,-0.02946631982922554,-0.1875988394021988,0.07940037548542023,-0.1335054188966751,-0.27441033720970154,0.20417138934135437,-0.05642473325133324,-0.06723858416080475,-0.24035687744617462,-0.04374201223254204,-0.27809515595436096,-0.09644825756549835,0.1262666881084442,-0.31158602237701416,0.07289333641529083,-0.23165637254714966,-0.0810333788394928,-0.3819378912448883,0.05968794226646423,-0.20534999668598175,0.03166339918971062,0.1332988739013672,0.09284000843763351,0.17331045866012573,-0.10495663434267044;0,0,0,0,0;0.8597783446311951,-0.1845906525850296,-0.15289293229579926,-0.3342300355434418,-0.4658011794090271,0.16876937448978424,-0.19750218093395233,0.5408975481987,-0.79364413022995,0.25964903831481934,-0.6275004744529724,0.3376392126083374,-0.29060161113739014,0.0721098855137825,-0.7125831246376038,0.2267727106809616,0.050125058740377426,0.12668664753437042,0.4961320757865906,0.6356830596923828,0.2611665725708008,-0.277302086353302,0.03404073789715767,0.3084433674812317,-0.48246923089027405;0,0,0,0,0`;    
    // const shapes = '21,5;5;5,5;5';
    // let child = new Car('c');
    // child.ia.setWeightsFromString(pesos,shapes);
    // // cars.push(child);

    // Novos
    
    for (let i = 0; i < quantidade; i++) {
        cars.push(new Car());
    }
    // cars.push(new Car('y',false));
    
    
    vivos = cars.length;

}

function nextGeneration() {
    
    monster.resetPos();
    monster2.resetPos();

    calcColocacao();
    
    if (colocacao.length == 0) {
        firstGeneration();
        return
    
    }
    const melhor = getMelhorCarro(); // getQuemMaisDeuReh(3);
    
    if (!melhor) {
        return
    }

    if (!melhor.ranhurasColetadas.includes(25)) {
        firstGeneration();
        return
    }

    quantidade = 600;

    console.log(`**** G: ${nGeracao+1}. MELHOR FOI: ${melhor.ranhurasColetadas.length} ran. Marca: ${melhor.marca}. KM: ${melhor.km} f1: ${melhor.ia.f1} f2: ${melhor.ia.f2} `);

    if (melhor.ranhurasColetadas.length > record) {
        foo.speak(`Atingiu ${melhor.ranhurasColetadas.length}!`); 
        record = melhor.ranhurasColetadas.length;
    }

    
    // evolucao.push(colocacao[0]);
    evolucao.push(melhor);


    nGeracao++;
    hue = 0;
    
    cars = [];
    
    const weights = melhor.ia.model.getWeights();

    const weightCopies = [];
    for (let i = 0; i < weights.length; i++) {
        weightCopies[i] = weights[i].clone();
    }


  
    // Clonado (elitismo) clonar 3 pra garantir.
    for (let i = 0; i < 3; i++) {
        let child = new Car('c');
        child.ia.model.setWeights(weightCopies);
        cars.push(child);
    }

    // Clonado e mutado.
    for (let i = cars.length; i < quantidade; i++) {

        let child = new Car('m');
        child.ia.model.setWeights(weightCopies);
        child.ia.mutate(0.1); // 0.1
        cars.push(child);

    }
    
    vivos = cars.length;
    
}

function getQuemMaisDeuReh(qtd) {

    console.log(`Primeiro: ${colocacao[0].km}`);

    let maiorReh = 0;
    let maiorI = 0;

    for (let i = 0; i < min(qtd, colocacao.length); i++) {

        car = colocacao[i];

        console.log(`${i}:  ${colocacao[i].km} -> ${colocacao[i].qtdReh}`);

        if (car.km > 0) {            
            if (myRelu(colocacao[i].qtdReh) > maiorReh) {
                
                maiorReh = myRelu(colocacao[i].qtdReh);
                maiorI = i;
            }
        }
    }
    
    console.log('******* Maior ré é ->',colocacao[maiorI].qtdReh, ' km ',colocacao[maiorI].km, ' i: ',maiorI );
    return colocacao[maiorI];

}

function myRelu(v) {
    if (v > 0) {
        return 1
    }
    return 0;
}

function getMelhorCarro() {

    // Captura quem tem mais ranhuras.

    let maisRanhuras = 0;
    let melhor = null;

    for (const car of cars) {
        
        if (car.ranhurasColetadas.length > maisRanhuras) {
            maisRanhuras = car.ranhurasColetadas.length;
            melhor = car;
        } 
    }

    // console.log('getMelhorCarro() -> ', melhor.km, ' maisRanhuras: ', maisRanhuras);
    // fill(0,255,0);
    // circle(melhor.pos.x,melhor.pos.y,8);
    // noLoop();

    // Se empate, verifica desses qual tem mais km.

    let maisKm = 0;

    for (const car of cars) {
        if (car.ranhurasColetadas.length == maisRanhuras) {
            if (car.km > maisKm) {
                maisKm = car.km;
                melhor = car;
            }
        }
    }

    //  // Se empate, soteia um.
    //  for (const car of cars) {
    //      if (car.ranhurasColetadas.length == maisRanhuras) {
    //          if (random(1) > 0.5) {
    //              melhor = car;
    //              break;
    //          }
    //      }
    //  }

    // console.log('Mais KM() -> ', melhor.km, ' maisRanhuras: ', maisRanhuras, ' maisKm: ', maisKm);
    // fill(0,0,255);
    // circle(melhor.pos.x,melhor.pos.y,8);
    // noLoop();


    return melhor;
}

function funcSalvarMelhorCarro(melhor) {
    if (salvarMelhorCarro) {
        // localStorage.setItem('meuGato', 'Tom');

        // document.cookie = "username=ivan; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

        // try {
        //     console.log('Salvando carro... ', melhor.marca);
        //     await melhor.ia.model.save('indexeddb://caria-melhor');
        //     console.log('Salvo');
        //     // await melhor.ia.model.save('localstorage://caria-melhor');
        // } catch (err) {
        //     console.error(err);
        // }
    }
}

function funcCarregarCarroSalvo() {
    if (carregarCarroSalvo) {
        // console.log(' leitura: ',localStorage.getItem('meuGato'));
        // console.log('cookie => ',document.cookie);
        // try {

        //     console.log('Carregando carro salvo...');
        //     const melhorSalvo = await tf.loadLayersModel('indexeddb://caria-melhor');

        //     let child = new Car('X');
        //     child.ia.model = null;
        //     child.ia.model = melhorSalvo
        //     cars.push(child);

        // } catch (err) {
        //     console.error(err);
        // }
        // melhorCarregado = true;
        // console.log('Carregado!')
    }
    
}