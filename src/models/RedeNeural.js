/*
    await cars[0].ia.model.save('localstorage://carro-ivan')
    await cars[0].ia.model.save('indexeddb://caria-melhor')

    cars[10].ia.model = await tf.loadLayersModel('indexeddb://caria-melhor')

 */

class RedeNeural {

    constructor() {

        const input_nodes = 21; // 20 sensores + 1 marcha.
        const hidden_nodes = 5;
        const output_nodes = 5;
        this.f1 = "relu"; // this.getAnyActivation();
        this.f2 = "relu"; // this.getAnyActivation();

        const input = tf.input({ shape: [input_nodes] });
        const denseLayer1 = tf.layers.dense({ units: hidden_nodes, activation: this.f1 }); // def. sigmoid
        const denseLayer2 = tf.layers.dense({ units: output_nodes, activation: this.f2 }); // def. softmax
        const output1 = denseLayer1.apply(input);
        const output2 = denseLayer2.apply(output1);
        this.model = tf.model({ inputs: input, outputs: [output1, output2] });

        this.firstLayer = [];
        this.secondLayer = [];
        this.savedInputs = [];
        this.savedOutputs = [];
        this.selectedOutput = -1;
        this.maiorValueHidden = -1;

    }

    getAnyActivation(choice) {

        const functions = ['elu', 'linear', 'relu', 'selu', 'sigmoid', 'softmax', 'softplus', 'softsign', 'tanh'];
        choice = choice || Number(random(0, functions.length - 1).toFixed(0));
        return functions[choice];
    }
    pensar(inputs = [1, 2, 3, 4, 5]) {

        return tf.tidy(() => {

            const xs = tf.tensor2d([inputs]);
            const [firstLayer, secondLayer] = this.model.predict(xs);
            const outputs = secondLayer.dataSync();

            this.firstLayer = firstLayer.flatten().arraySync();
            this.secondLayer = secondLayer.flatten().arraySync();
            this.savedInputs = inputs;
            this.savedOutputs = outputs;

            this.saveMaiorHidput(this.firstLayer);

            return outputs
        });
    }

    saveMaiorHidput(layer) {
        this.maiorValueHidden = -1;

        for (let i = 0; i < layer.length; i++) {
            if (layer[i] > this.maiorValueHidden) {
                this.maiorValueHidden = layer[i];
            }
        }

    }

    mutate(rate) {

        tf.tidy(() => {
            const weights = this.model.getWeights();
            const mutatedWeights = [];
            for (let i = 0; i < weights.length; i++) {
                let tensor = weights[i];
                let shape = weights[i].shape;
                let values = tensor.dataSync().slice();
                for (let j = 0; j < values.length; j++) {
                    if (random(1) < rate) { // random(1)
                        let w = values[j];
                        values[j] = w + randomGaussian();
                    }
                }
                
                let newTensor = tf.tensor(values, shape);
                mutatedWeights[i] = newTensor;
            }
            this.model.setWeights(mutatedWeights);
        });

    }
    showWeights() {

        tf.tidy(() => {

            const weights = this.model.getWeights();
            let pesos = '';
            let shapes = '';

            for (let i = 0; i < weights.length; i++) {

                let tensor = weights[i];
                let shape = weights[i].shape;
                let values = tensor.dataSync().slice();

                if (pesos) pesos += ';';
                if (shapes) shapes += ';';
                           
                pesos += values;
                shapes += shape;

            }

            console.log(pesos);
            console.log(shapes);
            
        });

    }

    setWeightsFromString(stringPesos,stringShapes) {   
        
        tf.tidy(() => {

            const pesosCamadas = stringPesos.split(';');
            const shapesCamadas = stringShapes.split(';');
            const loadedWeights = [];
            let numPesos = [];
            let numShapes = [];

            for (let i = 0 ; i < pesosCamadas.length ; i++) {
                let pesos = pesosCamadas[i].split(',');
                for (let j = 0 ; j < pesos.length ; j++) {
                    numPesos.push(Number(pesos[j]));
                }
            }

            console.log(numPesos);

            for (let i = 0 ; i < shapesCamadas.length ; i++) {                            
                    numShapes.push(shapesCamadas[i]);
            }

            console.log(numShapes);


            for (let i = 0 ; i < numPesos.length ; i++) {
                
                try {

                    const newTensor = tf.tensor(numPesos[i], numShapes[i]);
                    loadedWeights[i] = newTensor;

                } catch (err) {
                    console.log(err);
                }
            }


            console.log('loadedWeights');
            console.log(loadedWeights);

            this.model.setWeights(loadedWeights);
        });

    }
}
