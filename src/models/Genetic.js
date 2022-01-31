function firstGeneration() {
    for (let i = 0; i < (runDemo == true ? 4 : vivos); i++) {
        cars.push(new Car());
    }
}

function nextGeneration() {

    
    console.clear();
    console.log('aas');
    
    vivos = 12;

    calcColocacao();

    if (colocacao.length == 0) {
        firstGeneration();
        return
    }

    evolucao.push(colocacao[0]);    
    showStatistics();

    console.log('Próxima geração!');

    nGeracao++;
    hue = 0;
    
    cars = [];

    const weights = colocacao[0].ia.model.getWeights();

    const weightCopies = [];
    for (let i = 0; i < weights.length; i++) {
        weightCopies[i] = weights[i].clone();
    }

    // Novo.
    for (let i = 0; i < 1; i++) {
        cars.push(new Car('n'));
    }

    // Clonado (elitismo).
    for (let i = 0; i < 1; i++) {
        let child = new Car('c');
        child.ia.model.setWeights(weightCopies);
        cars.push(child);
    }

    // Clonado e mutado.
    for (let i = cars.length; i < vivos; i++) {

        let child = new Car('m');
        child.ia.model.setWeights(weightCopies);
        child.ia.mutate(0.1);
        cars.push(child);

    }
    

}



function showStatistics() {
    for (let i = 0; i < evolucao.length;i++) {
        console.log(`Geração ${i} km (max): ${evolucao[i].km}`);        
    }
}