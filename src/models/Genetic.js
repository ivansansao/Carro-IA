function firstGeneration() {
    for (let i = 0; i < quantidade; i++) {
        cars.push(new Car());
    }
    // cars.push(new Car('y',false));
    
    vivos = cars.length;

}

function nextGeneration() {    

    calcColocacao();
    
    if (colocacao.length == 0) {
        firstGeneration();
        return
    
    }
    const melhor = getMelhorCarro(); // getQuemMaisDeuReh(3);

    if (!melhor) {
        return
    }

    console.log(`**** G: ${nGeracao}. MELHOR FOI: ${melhor.ranhurasColetadas.length} ran. Marca: ${melhor.marca}. KM: ${melhor.km} f1: ${melhor.ia.f1} f2: ${melhor.ia.f2} `);

    if (melhor.ranhurasColetadas.length > 12) {
        foo.speak('Atingiu mais que 12!'); 
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

    // Novo.
    // cars.push(new Car('n'));

    // Clonado (elitismo).
    for (let i = 0; i < 1; i++) {
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

     // Se empate, soteia um.
     for (const car of cars) {
         if (car.ranhurasColetadas.length == maisRanhuras) {
             if (random(1) > 0.5) {
                 melhor = car;
                 break;
             }
         }
     }

    // console.log('Mais KM() -> ', melhor.km, ' maisRanhuras: ', maisRanhuras, ' maisKm: ', maisKm);
    // fill(0,0,255);
    // circle(melhor.pos.x,melhor.pos.y,8);
    // noLoop();


    return melhor;
}