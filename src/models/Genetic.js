function firstGeneration() {
    quantidade = 900;
    console.log('Primeira geração...');
    cars = [];

    if (pista.selectedPista == 1) {

        const pesos = '0.769700825214386,-1.1933929920196533,-1.8640072345733643,-0.2220396101474762,0.07639502733945847,0.41877490282058716,0.2897159159183502,-0.24485944211483002,-0.300270140171051,1.2665899991989136,1.1893705129623413,2.004457950592041,-1.2567265033721924,-0.39525169134140015,-3.6882247924804688,1.8795390129089355,2.6218817234039307,1.0809175968170166,-2.12441086769104,1.5064462423324585,1.230794072151184,0.5174073576927185,-0.1967829465866089,-0.3007297217845917,-0.08115335553884506,1.4056907892227173,-2.2271296977996826,0.1022658422589302,-0.45740941166877747,-0.013829916715621948,-3.0304737091064453,0.007818142883479595,0.10610891133546829,1.144051432609558,-0.5755031704902649,0.11971653997898102,0.5080858469009399,1.2535487413406372,-0.4752855896949768,1.3049415349960327,-0.044345445930957794,0.9413713216781616,-0.3297930061817169,0.5165562033653259,1.0727399587631226,-0.1505608856678009,-0.10483204573392868,-2.2685256004333496,-0.20326046645641327,-3.0061163902282715,0.1563299298286438,1.3281092643737793,-0.07673425227403641,-1.1211791038513184,-0.06239140033721924,-0.6815218925476074,-0.4080577492713928,0.5073993802070618,-0.25915655493736267,2.439919948577881,-0.21023499965667725,-0.3702410161495209,0.1647794395685196,-0.5001086592674255,1.5600439310073853,-0.10572362691164017,-1.3512115478515625,-0.03154465928673744,-1.9278541803359985,1.2017812728881836,0.5560547113418579,2.428511142730713,-0.4159676730632782,-0.05660265311598778,0.2718372344970703,-0.301101952791214,1.9507966041564941,1.7895530462265015,-0.457741916179657,-0.6444631218910217,-2.020035743713379,-0.5222450494766235,0.8510800004005432,-2.116837739944458,0.10999874025583267,-0.9372764825820923,-0.6290475726127625,-0.4956585168838501,0.6119580268859863,2.6770267486572266,-2.535640001296997,-2.9720335006713867,1.2082364559173584,0.18902549147605896,-1.0870580673217773,-0.7153761982917786,0.11444053798913956,-0.06372953951358795,0.7506209015846252,0.07590888440608978,0.4412088394165039,1.5626481771469116,3.7716259956359863,0.3973858058452606,-2.7903785705566406;0.17180350422859192,-1.8262252807617188,0,-1.2934552431106567,0;-1.5839707851409912,-0.33415815234184265,0.24351942539215088,1.2116832733154297,-1.405351996421814,-0.2480630874633789,0.6452611684799194,0.4362279772758484,-0.2043762058019638,0.2588764727115631,2.8053154945373535,2.7954704761505127,1.1084492206573486,1.1284866333007812,1.3383210897445679,-2.492015838623047,1.5859603881835938,0.0641026422381401,0.6597355008125305,-0.04509037360548973,-0.3873373568058014,0.024919215589761734,0.11222165822982788,0.4491197466850281,0.00053051469149068;-1.9088958501815796,-0.8953312635421753,0.33369261026382446,0.0661039650440216,0';
        const shapes = '21,5;5;5,5;5';
        let child = new Car('X');
        child.ia.setWeightsFromString(pesos,shapes);
        cars.push(child);

    } else if (pista.selectedPista == 2) {

        // Melhor carro salvo.
        const pesos = '-0.7048818469047546,-1.229691743850708,-0.5328165292739868,-1.1592727899551392,2.73201322555542,-1.2634661197662354,-0.43930667638778687,-1.5915958881378174,-0.5247241258621216,-1.1451458930969238,1.7567824125289917,1.4706405401229858,1.6050552129745483,-3.101789951324463,1.4560444355010986,-3.840822219848633,0.508364200592041,3.1698458194732666,-1.1786723136901855,-0.349592924118042,1.4365891218185425,-1.664920449256897,-0.6356502175331116,-3.8119075298309326,-0.45267170667648315,-5.68483829498291,0.6678773164749146,-2.237823963165283,2.5835390090942383,2.18062686920166,-0.3834821581840515,-0.9094225764274597,1.3134180307388306,3.347736120223999,2.4695675373077393,-0.7777661681175232,1.539932131767273,-1.8026087284088135,-1.7227615118026733,-0.7721207141876221,-0.22691716253757477,-1.1294517517089844,-0.9057062268257141,-0.12282931804656982,1.3675763607025146,2.1687076091766357,1.2150071859359741,-2.0758516788482666,-1.2181645631790161,-0.26067814230918884,1.967840552330017,-0.03861547261476517,-1.4672812223434448,-0.161976620554924,-1.4012306928634644,-0.41057440638542175,-0.06141219660639763,0.4822808802127838,-0.49969348311424255,0.2612111568450928,-0.7540205121040344,0.36449533700942993,0.23580829799175262,0.0596432164311409,0.1991330087184906,-0.0705995187163353,0.1785697489976883,0.017725717276334763,-0.22205029428005219,-0.28587618470191956,-2.2755041122436523,-0.48416656255722046,0.3525457978248596,0.13617178797721863,0.1721341460943222,2.712642192840576,-1.1654058694839478,-0.4761173725128174,-0.032737381756305695,-1.6194185018539429,-1.233190894126892,0.5951157808303833,0.996233344078064,-1.727249264717102,-2.153820276260376,-0.6932277679443359,2.6047396659851074,-0.5863373875617981,1.9638108015060425,0.27953121066093445,3.154505968093872,-3.6215708255767822,0.8784747123718262,0.5704588890075684,-1.2160167694091797,5.1706390380859375,0.03471439331769943,0.3564020097255707,3.779526472091675,-1.1529829502105713,2.1883859634399414,0.8007530570030212,1.0807549953460693,0.3618599474430084,-0.5315787196159363;1.7782690525054932,0.36869823932647705,-0.31654390692710876,-2.162001371383667,1.8077987432479858;-0.4726209044456482,0.9015229940414429,-2.1642885208129883,0.5651458501815796,-0.24521517753601074,-2.109306812286377,1.127959966659546,-0.1533084362745285,-0.6860923171043396,-0.44433262944221497,-1.1430295705795288,-3.020634651184082,-1.5128318071365356,-0.054651569575071335,-3.8415088653564453,-2.6408567428588867,-1.0346564054489136,1.4288214445114136,0.6087084412574768,0.4192313253879547,1.679929256439209,4.389447212219238,-0.1612194925546646,-0.8450781106948853,0.006543504539877176;-0.08722413331270218,6.579657077789307,-0.045544639229774475,1.249724268913269,-0.2922475337982178';
        const shapes = '21,5;5;5,5;5';
        let child = new Car('X');
        child.ia.setWeightsFromString(pesos,shapes);
        cars.push(child);
        // Fim melhor carro salvo.

    } else if (pista.selectedPista == 3) {
        
        const pesos = '0.769700825214386,-1.1933929920196533,-1.4636660814285278,-0.2220396101474762,0.07639502733945847,0.41877490282058716,-0.14786186814308167,-0.24485944211483002,-0.300270140171051,1.9515949487686157,1.1893705129623413,2.004457950592041,-1.2567265033721924,-1.5799851417541504,-3.6882247924804688,1.0563502311706543,0.9734697341918945,1.0809175968170166,-2.12441086769104,1.5064462423324585,1.230794072151184,0.5462201237678528,-0.1967829465866089,-0.18404655158519745,-0.08115335553884506,1.4056907892227173,-2.2271296977996826,0.1022658422589302,-0.3197665810585022,-0.013829916715621948,-2.4834961891174316,0.007818142883479595,0.10610891133546829,1.144051432609558,-0.5755031704902649,0.11971653997898102,0.5080858469009399,1.2535487413406372,-0.4752855896949768,0.279511034488678,-0.044345445930957794,0.7696466445922852,-0.3297930061817169,0.5165562033653259,1.0727399587631226,-0.1505608856678009,-0.10483204573392868,-2.2685256004333496,-0.35106807947158813,-3.0061163902282715,0.1563299298286438,1.3281092643737793,0.2972642481327057,-1.1211791038513184,-0.26310935616493225,-0.4276387095451355,-0.19399678707122803,0.5073993802070618,-0.25915655493736267,2.2536885738372803,0.3869430422782898,-0.3702410161495209,0.1647794395685196,-0.5001086592674255,1.5600439310073853,-0.10572362691164017,-0.29734116792678833,-0.03154465928673744,-1.9278541803359985,1.2017812728881836,-0.13719528913497925,2.428511142730713,-0.4159676730632782,-0.05660265311598778,0.2718372344970703,-0.301101952791214,-0.06932353228330612,1.1450799703598022,-0.2645275592803955,0.10604371130466461,-2.020035743713379,-0.5222450494766235,1.0210555791854858,-2.116837739944458,0.10999874025583267,-0.9372764825820923,-0.6290475726127625,-0.4956585168838501,0.6119580268859863,2.6770267486572266,-2.202857255935669,-2.9720335006713867,0.6053897142410278,-0.356556236743927,-1.0870580673217773,-0.7153761982917786,0.11444053798913956,-0.06372953951358795,0.7506209015846252,1.7711762189865112,0.4412088394165039,1.5626481771469116,3.7716259956359863,0.3973858058452606,-2.7903785705566406;0.17180350422859192,-1.8262252807617188,0,-1.7390403747558594,0;-1.5839707851409912,-0.33976513147354126,0.24351942539215088,1.2116832733154297,-1.405351996421814,-0.2480630874633789,0.6452611684799194,0.4362279772758484,-0.2043762058019638,0.2588764727115631,2.8053154945373535,2.7954704761505127,0.8572863340377808,1.1284866333007812,0.9913507699966431,-2.492015838623047,1.5859603881835938,0.0641026422381401,0.6597355008125305,-0.04509037360548973,-0.3873373568058014,0.024919215589761734,0.11222165822982788,0.4491197466850281,0.00053051469149068;-1.5678949356079102,-0.8953312635421753,0.33369261026382446,0.0661039650440216,0';
        const shapes = '21,5;5;5,5;5';
        let child = new Car('X');
        child.ia.setWeightsFromString(pesos,shapes);
        cars.push(child);

    } else if (pista.selectedPista == 4) {

        // const pesos = '1.739586591720581,-2.0430240631103516,1.7295159101486206,0.7757909893989563,-2.3003013134002686,-1.1290000677108765,0.029302561655640602,0.099129818379879,-2.0329225063323975,-0.11584259569644928,-3.0816197395324707,-1.6051011085510254,0.021728621795773506,-0.9541199207305908,0.7599741220474243,-0.9945374131202698,0.9315795302391052,6.025974750518799,1.8614813089370728,-0.8226327896118164,-1.8054885864257812,-1.0764095783233643,-0.2177106738090515,-1.3846536874771118,-3.1883656978607178,0.4411223232746124,0.4415026605129242,0.39381664991378784,-2.0757555961608887,0.09576693922281265,0.41296571493148804,1.195961594581604,0.5087019205093384,0.028237270191311836,-1.6223971843719482,0.012102209962904453,1.1888071298599243,0.3799390494823456,1.1870653629302979,0.2716684639453888,0.359665185213089,5.206254959106445,0.13898591697216034,-3.861389398574829,2.6279287338256836,0.2737600803375244,-0.6992453336715698,0.2948172092437744,-0.7828624248504639,-2.8728208541870117,-0.24841086566448212,-1.0284340381622314,-0.6929136514663696,-3.1510632038116455,0.6277878880500793,-0.2407219558954239,-0.4564530849456787,-0.25740352272987366,0.3046570420265198,-0.8662183880805969,1.6256208419799805,0.7558513283729553,-0.059786178171634674,1.7761679887771606,0.1558489054441452,0.22714972496032715,-0.4386231303215027,0.19536392390727997,-0.04574379697442055,0.03236214071512222,0.7984118461608887,0.6628254055976868,-0.1234382763504982,-0.3837687075138092,-0.08940611034631729,0.0024622061755508184,-0.6889510750770569,0.2026727795600891,-1.16607666015625,-0.3217857778072357,0.008770412765443325,-0.1207934096455574,-0.21432232856750488,0.30442383885383606,-1.0123995542526245,0.5113281607627869,-0.22005458176136017,0.598634660243988,1.8938556909561157,1.0151832103729248,-0.22749871015548706,-1.4661685228347778,0.09234845638275146,-0.13264912366867065,-0.02848326601088047,1.7685333490371704,-0.889889657497406,0.29157552123069763,-2.1750447750091553,-0.5712159872055054,-0.22358477115631104,-2.557469606399536,-0.43156948685646057,-2.1257734298706055,0.06129193305969238;0.024026643484830856,-2.335092306137085,3.210057258605957,2.027301549911499,-0.36735865473747253;0.5311734676361084,-1.871353268623352,-1.2157573699951172,0.8220031261444092,1.329388976097107,0.08802729845046997,0.41252776980400085,1.8015758991241455,-0.2727549076080322,-0.675763726234436,1.0070604085922241,-1.0522743463516235,-0.6043184399604797,-2.4886667728424072,-1.4020609855651855,-0.4518534243106842,0.5854827165603638,1.5758272409439087,0.013900638557970524,-0.32746878266334534,-3.681063652038574,0.0018688598647713661,0.5633202791213989,0.14888013899326324,0.39920949935913086;-0.36740395426750183,-0.7352983951568604,-1.108643889427185,-1.2629448175430298,0';
        const pesos = '1.739586591720581,-2.0430240631103516,1.7295159101486206,0.41145560145378113,-2.3003013134002686,-1.1290000677108765,0.029302561655640602,0.099129818379879,-2.0329225063323975,-0.11584259569644928,-3.0816197395324707,-1.6051011085510254,0.01370018906891346,-0.9541199207305908,0.7599741220474243,-0.9945374131202698,0.9315795302391052,6.025974750518799,1.8614813089370728,-0.8226327896118164,-1.8054885864257812,-1.0764095783233643,-0.2177106738090515,-1.3846536874771118,-3.1883656978607178,0.4411223232746124,0.4415026605129242,0.39381664991378784,-2.0757555961608887,0.09576693922281265,0.41296571493148804,1.195961594581604,0.5087019205093384,0.028237270191311836,-1.6223971843719482,0.012102209962904453,1.1888071298599243,0.3799390494823456,1.1870653629302979,-0.12601853907108307,0.359665185213089,5.206254959106445,0.13898591697216034,-3.861389398574829,2.6279287338256836,0.2737600803375244,-0.6992453336715698,0.2948172092437744,-0.7828624248504639,-2.8728208541870117,-0.24841086566448212,-1.0284340381622314,-0.6929136514663696,-3.1510632038116455,0.6277878880500793,-0.2407219558954239,-0.4564530849456787,-0.25740352272987366,0.3046570420265198,-0.8662183880805969,1.6256208419799805,0.7558513283729553,-0.059786178171634674,1.7761679887771606,0.1558489054441452,0.22714972496032715,-0.4386231303215027,0.19536392390727997,-0.04574379697442055,0.03236214071512222,0.7984118461608887,0.6628254055976868,-0.1234382763504982,-0.3837687075138092,-0.08940611034631729,0.0024622061755508184,-0.6889510750770569,0.2026727795600891,-1.16607666015625,-0.3217857778072357,0.008770412765443325,-0.1207934096455574,-0.21432232856750488,0.30442383885383606,-1.0123995542526245,0.5113281607627869,-0.22005458176136017,0.598634660243988,1.8938556909561157,1.0151832103729248,-0.22749871015548706,-1.4661685228347778,0.09234845638275146,-0.13264912366867065,-0.02848326601088047,1.7685333490371704,-0.889889657497406,0.29157552123069763,-2.1750447750091553,-0.5712159872055054,-0.22358477115631104,-2.557469606399536,-0.43156948685646057,-2.1257734298706055,0.06129193305969238;0.024026643484830856,-2.335092306137085,3.210057258605957,2.027301549911499,-0.36735865473747253;0.5311734676361084,-1.871353268623352,-1.2157573699951172,0.8220031261444092,1.329388976097107,0.08802729845046997,0.41252776980400085,1.8015758991241455,-0.2727549076080322,-0.675763726234436,1.0070604085922241,-1.024369478225708,-0.6043184399604797,-2.4886667728424072,-1.4020609855651855,-0.4518534243106842,0.5854827165603638,1.5758272409439087,0.013900638557970524,-0.32746878266334534,-3.681063652038574,0.062023282051086426,0.5633202791213989,0.14888013899326324,0.39920949935913086;-0.36740395426750183,-0.7352983951568604,-1.108643889427185,-1.2629448175430298,0';
        const shapes = '21,5;5;5,5;5';
        let child = new Car('X');
        child.ia.setWeightsFromString(pesos,shapes);
        cars.push(child);

    }

    // Novos
    
    for (let i = 0; i < quantidade; i++) {
        cars.push(new Car());
    }
    // cars.push(new Car('y',false));
    
    vivos = cars.length;

}

function nextGeneration() {
    
    pista.monstersResetPos();

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
    for (let i = 1; i < quantidade; i++) {

        let child = new Car('m');
        child.ia.model.setWeights(weightCopies);
        child.ia.mutate(0.02); // 0.1
        cars.push(child);

    }

    // Clonado (elitismo)
    let child = new Car('c');
    child.ia.model.setWeights(weightCopies);
    cars.push(child);
    
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

    
    if (maisRanhuras < 6 && pista.selectedPista == 2) {

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