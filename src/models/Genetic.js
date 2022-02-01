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
    const melhor = colocacao[0]; // getQuemMaisDeuReh(3);

    console.log('Nova geração com ',melhor.km, ' Marca: ',melhor.marca);

    // evolucao.push(colocacao[0]);
    evolucao.push(melhor);

    showStatistics();

    console.log('Próxima geração!');

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



function showStatistics() {
    // for (let i = 0; i < evolucao.length;i++) {
    //     console.log(`Geração ${i} km (max): ${evolucao[i].km}`);        
    // }
    const i = evolucao.length -1;
    console.log(`Geração ${i} km (max): ${evolucao[i].km}`);        
}

// function getMelhores(qtd = 4) {

//     calcColocacao()
//     let melhores = [];

//     for (let i = 0; i < colocacao.length; i++) {
        
//         if (i < qtd) {
//             melhores.push(colocacao[i]);
//         } 
        
//     }

//     return melhores;

// }

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