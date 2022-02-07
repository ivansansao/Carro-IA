function firstGeneration() {
    quantidade = 500;
    console.log('Primeira geração...');
    cars = [];
    
    // Melhor carro salvo.
    const pesos = '-0.7048818469047546,-1.229691743850708,-0.5328165292739868,-1.1592727899551392,2.73201322555542,-1.2634661197662354,-0.43930667638778687,-1.5915958881378174,-0.5247241258621216,-1.1451458930969238,1.7567824125289917,1.4706405401229858,1.6050552129745483,-3.101789951324463,1.4560444355010986,-3.840822219848633,0.508364200592041,3.1698458194732666,-1.1786723136901855,-0.349592924118042,1.4365891218185425,-1.664920449256897,-0.6356502175331116,-3.8119075298309326,-0.45267170667648315,-5.68483829498291,0.6678773164749146,-2.237823963165283,2.5835390090942383,2.18062686920166,-0.3834821581840515,-0.9094225764274597,1.3134180307388306,3.347736120223999,2.4695675373077393,-0.7777661681175232,1.539932131767273,-1.8026087284088135,-1.7227615118026733,-0.7721207141876221,-0.22691716253757477,-1.1294517517089844,-0.9057062268257141,-0.12282931804656982,1.3675763607025146,2.1687076091766357,1.2150071859359741,-2.0758516788482666,-1.2181645631790161,-0.26067814230918884,1.967840552330017,-0.03861547261476517,-1.4672812223434448,-0.161976620554924,-1.4012306928634644,-0.41057440638542175,-0.06141219660639763,0.4822808802127838,-0.49969348311424255,0.2612111568450928,-0.7540205121040344,0.36449533700942993,0.23580829799175262,0.0596432164311409,0.1991330087184906,-0.0705995187163353,0.1785697489976883,0.017725717276334763,-0.22205029428005219,-0.28587618470191956,-2.2755041122436523,-0.48416656255722046,0.3525457978248596,0.13617178797721863,0.1721341460943222,2.712642192840576,-1.1654058694839478,-0.4761173725128174,-0.032737381756305695,-1.6194185018539429,-1.233190894126892,0.5951157808303833,0.996233344078064,-1.727249264717102,-2.153820276260376,-0.6932277679443359,2.6047396659851074,-0.5863373875617981,1.9638108015060425,0.27953121066093445,3.154505968093872,-3.6215708255767822,0.8784747123718262,0.5704588890075684,-1.2160167694091797,5.1706390380859375,0.03471439331769943,0.3564020097255707,3.779526472091675,-1.1529829502105713,2.1883859634399414,0.8007530570030212,1.0807549953460693,0.3618599474430084,-0.5315787196159363;1.7782690525054932,0.36869823932647705,-0.31654390692710876,-2.162001371383667,1.8077987432479858;-0.4726209044456482,0.9015229940414429,-2.1642885208129883,0.5651458501815796,-0.24521517753601074,-2.109306812286377,1.127959966659546,-0.1533084362745285,-0.6860923171043396,-0.44433262944221497,-1.1430295705795288,-3.020634651184082,-1.5128318071365356,-0.054651569575071335,-3.8415088653564453,-2.6408567428588867,-1.0346564054489136,1.4288214445114136,0.6087084412574768,0.4192313253879547,1.679929256439209,4.389447212219238,-0.1612194925546646,-0.8450781106948853,0.006543504539877176;-0.08722413331270218,6.579657077789307,-0.045544639229774475,1.249724268913269,-0.2922475337982178';
    const shapes = '21,5;5;5,5;5';
    let child = new Car('X');
    child.ia.setWeightsFromString(pesos,shapes);
    cars.push(child);
    // Fim melhor carro salvo.

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

    // if (!melhor.ranhurasColetadas.includes(25)) {
    //     firstGeneration();
    //     return
    // }

    // quantidade = 600;

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

    // Clonado e mutado.
    for (let i = 3; i < quantidade; i++) {

        let child = new Car('m');
        child.ia.model.setWeights(weightCopies);
        child.ia.mutate(0.1); // 0.1
        cars.push(child);

    }

    // Clonado (elitismo) clonar 3 pra garantir.
    for (let i = 0; i < 3; i++) {
        let child = new Car('c');
        child.ia.model.setWeights(weightCopies);
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

    
    if (maisRanhuras < 6) {

        // Se empate, verifica desses qual tem melhor ângulo.
        
        let maiorHea = 0;
        
        for (const car of cars) {
            if (car.ranhurasColetadas.length == maisRanhuras) {
                if (car.heading > maiorHea) {
                    maiorHea = car.heading;
                    melhor = car;
                }
            }
        }
        
    } else {
        
        // Se empate, verifica desses qual tem melhor km.
        
        let maisKm = 0;

        for (const car of cars) {
            if (car.ranhurasColetadas.length == maisRanhuras) {
                if (car.km > maisKm) {
                    maisKm = car.km;
                    melhor = car;
                }
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