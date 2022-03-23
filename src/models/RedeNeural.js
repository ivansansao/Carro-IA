/*
    await cars[0].ia.model.save('localstorage://carro-ivan')
    await cars[0].ia.model.save('indexeddb://caria-melhor')

    cars[10].ia.model = await tf.loadLayersModel('indexeddb://caria-melhor')

 */

class RedeNeural {

    constructor() {

        this.input_nodes = 21; // 20 sensores + 1 marcha.
        this.hidden_nodes = 5;
        this.output_nodes = 5;
        this.f1 = "linear"; // this.getAnyActivation();
        this.f2 = "selu"; // this.getAnyActivation();
        this.mutated = 0; // Number of genes mutateds, zero is not mutated

        this.model = tf.sequential();
        this.model.add(tf.layers.dense({units: this.hidden_nodes, inputShape: [this.input_nodes], activation: this.f1}));        
        // this.model.add(tf.layers.dense({units: 5, inputShape: [5], activation: 'relu'}));        
        this.model.add(tf.layers.dense({units: this.output_nodes, activation: this.f2}));        

        // const input = tf.input({ shape: [input_nodes] });
        // const denseLayer1 = tf.layers.dense({ units: hidden_nodes, activation: this.f1 }); // def. sigmoid
        // const denseLayer2 = tf.layers.dense({ units: output_nodes, activation: this.f2 }); // def. softmax
        // const output1 = denseLayer1.apply(input);
        // const output2 = denseLayer2.apply(output1);
        // this.model = tf.model({ inputs: input, outputs: [output1, output2] });

        // this.firstLayer = [];
        // this.secondLayer = [];
        // this.savedInputs = [];
        // this.savedOutputs = [];
        // this.selectedOutput = -1;
        // this.maiorValueHidden = -1;

    }

    getAnyActivation(choice) {

        const functions = ['elu', 'linear', 'relu', 'selu', 'sigmoid', 'softmax', 'softplus', 'softsign', 'tanh'];
        choice = choice || Number(random(0, functions.length - 1).toFixed(0));
        return functions[choice];
    }
    pensar(inputs = [1, 2, 3, 4, 5]) {

        return tf.tidy(() => {

            const xs = tf.tensor2d([inputs]);
            const ys = this.model.predict(xs);
            const outputs = ys.dataSync();

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
                        // values[j] = w + random(-1,1);
                        this.mutated++;
                    }
                }
                
                let newTensor = tf.tensor(values, shape);
                mutatedWeights[i] = newTensor;
            }
            this.model.setWeights(mutatedWeights);

        });

    }
    showWeights(toReturn) {

        return tf.tidy(() => {
            
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

            if (toReturn) {
                return pesos;
            } else {                
                console.log(pesos);  // sValues for setWeightsFromString
                console.log(shapes); // sShapes for setWeightsFromString
            }
            
        });

    }

    setWeightsFromString(sValues,sShapes) {   
        
       tf.tidy(() => {

            const aValues = sValues.split(';');
            const aShapes = sShapes.split(';');
            const loadedWeights = [];

            for (let i = 0 ; i < aValues.length ; i++) {
                
                const anValues = aValues[i].split(',').map((e) => {return Number(e)});
                const newValues = new Float32Array(anValues);
                const newShapes = aShapes[i].split(',').map((e) => {return Number(e)});

                loadedWeights[i] = tf.tensor(newValues, newShapes);

            }

            this.model.setWeights(loadedWeights);
            
        });
    }
}
