class Genetic {

    constructor() {

        this.quantidade = 4;
        this.pesos = '';
        this.shapes = '';
        this.melhor = null;
        this.pesos = [];
        this.shapes = '21,5;5;5,5;5';

        // Sem pista.
        this.pesos.push('');        

        // Pista 1
        this.pesos.push('0.769700825214386,-1.1933929920196533,-1.8640072345733643,-0.2220396101474762,0.07639502733945847,-0.8554493188858032,0.2897159159183502,1.1764191389083862,-0.300270140171051,3.1496336460113525,1.1893705129623413,2.004457950592041,-1.2567265033721924,-0.39525169134140015,-3.6882247924804688,1.8795390129089355,2.6218817234039307,1.0809175968170166,-2.12441086769104,1.5064462423324585,1.230794072151184,0.5174073576927185,-0.1967829465866089,-0.3007297217845917,-0.08115335553884506,1.4056907892227173,-2.2271296977996826,0.1022658422589302,-0.45740941166877747,-0.013829916715621948,-3.0304737091064453,0.007818142883479595,0.10610891133546829,0.9339322447776794,-0.5755031704902649,0.11971653997898102,0.5080858469009399,1.2535487413406372,-0.4752855896949768,1.3049415349960327,-0.044345445930957794,0.9413713216781616,-0.3297930061817169,0.8935238718986511,1.0727399587631226,-0.1505608856678009,-0.6185682415962219,-2.2685256004333496,-0.2466742992401123,-3.530035972595215,-0.6293038725852966,1.3281092643737793,-0.07673425227403641,-1.1211791038513184,-0.06239140033721924,-0.6815218925476074,-0.4080577492713928,0.5073993802070618,-0.25915655493736267,2.439919948577881,-0.21023499965667725,-0.3702410161495209,0.1647794395685196,-0.5001086592674255,1.5600439310073853,-0.10572362691164017,-1.3512115478515625,-0.03154465928673744,-1.9278541803359985,1.2017812728881836,0.5560547113418579,2.428511142730713,-0.4159676730632782,-0.05660265311598778,0.2718372344970703,-0.301101952791214,1.9507966041564941,1.7895530462265015,-0.457741916179657,-0.6444631218910217,-2.020035743713379,-0.5222450494766235,0.8510800004005432,-2.116837739944458,0.10999874025583267,-0.9372764825820923,-0.6290475726127625,-0.4956585168838501,1.2960964441299438,4.6063032150268555,-2.535640001296997,-2.9720335006713867,-0.5219357013702393,-0.31688687205314636,-1.0870580673217773,0.05673167482018471,0.11444053798913956,0.007381133735179901,0.7506209015846252,0.07590888440608978,0.4412088394165039,1.5626481771469116,3.7716259956359863,0.3973858058452606,-2.7903785705566406;0.17180350422859192,-1.8262252807617188,0,-1.2934552431106567,0;-1.5839707851409912,0.003983586560934782,0.24351942539215088,1.2116832733154297,-1.405351996421814,-0.2480630874633789,0.6452611684799194,0.4362279772758484,-1.549105167388916,-0.261005699634552,2.8053154945373535,2.7954704761505127,1.1084492206573486,1.1284866333007812,1.3383210897445679,-2.492015838623047,1.5859603881835938,0.0641026422381401,0.6597355008125305,-0.04509037360548973,-0.3873373568058014,0.024919215589761734,0.7531193494796753,0.4491197466850281,0.00053051469149068;-1.9088958501815796,-0.8953312635421753,0.33369261026382446,0.5107758641242981,0');
        
        // Pista 2
        // this.pesos.push('3.415391683578491,-0.686739444732666,0.09322783350944519,5.386732578277588,5.289329528808594,-2.217707872390747,-0.8299389481544495,-1.5915958881378174,-0.8093996047973633,-0.2726070284843445,2.4996299743652344,1.8344941139221191,1.6821452379226685,-4.098731994628906,2.7189362049102783,-2.062281370162964,-0.9072502255439758,3.7453341484069824,-3.154892683029175,1.8135625123977661,3.5388240814208984,-2.6225249767303467,0.21307791769504547,-5.580642223358154,-6.106901168823242,-6.4523138999938965,-0.5390759706497192,-1.8831853866577148,0.015384153462946415,1.5173288583755493,-4.908717155456543,0.09138955920934677,1.0112284421920776,5.071910858154297,2.6189730167388916,-2.8244924545288086,-4.209908485412598,-2.567826747894287,0.03970436751842499,-0.8813346028327942,0.5474444627761841,0.9639690518379211,-1.3844598531723022,0.6652510762214661,-2.167022943496704,1.3795263767242432,0.7918617129325867,-2.813356637954712,-2.4544625282287598,-2.05082106590271,1.3111568689346313,0.044629111886024475,-1.7376325130462646,-2.220529556274414,-0.9866335391998291,-0.6716799736022949,0.2256627231836319,0.5503556728363037,-2.406550645828247,0.15885856747627258,0.8183572292327881,1.0059683322906494,0.23580829799175262,-0.41668015718460083,0.9015790820121765,0.9690729379653931,-0.24822662770748138,-0.3836447298526764,-0.5242043137550354,0.5052632093429565,-1.2008908987045288,-0.5172123908996582,2.8420979976654053,0.35362303256988525,-0.1708027571439743,2.6110734939575195,3.8878228664398193,-0.4298625886440277,-0.9824869632720947,-2.2761528491973877,-1.91452157497406,-1.211883306503296,0.3505735397338867,-2.302583932876587,-1.841640591621399,-0.24157455563545227,2.9917309284210205,-4.878338813781738,0.6763380169868469,2.4286766052246094,5.394768714904785,-2.27032208442688,-0.5670810341835022,0.9795357584953308,0.18959201872348785,3.391216278076172,-3.1264920234680176,-0.016636807471513748,3.7874743938446045,-1.4081852436065674,2.7015602588653564,0.8887429237365723,1.1381837129592896,5.349506378173828,-1.024242639541626;9.398077964782715,0.23583854734897614,-5.713012218475342,-6.875295639038086,3.716749668121338;-3.487318277359009,0.8255128264427185,0.1973084658384323,1.5362868309020996,-0.06925320625305176,-0.1578349620103836,3.607083559036255,-1.7674741744995117,-1.3269553184509277,-0.1561417579650879,-3.2973906993865967,-2.577039957046509,0.2882997691631317,0.5713896155357361,-4.98481559753418,-4.936481475830078,-1.7494192123413086,2.5035839080810547,0.41602832078933716,0.4192313253879547,3.931006908416748,1.1882976293563843,-3.0793328285217285,-1.8852218389511108,1.7419021129608154;-3.079155445098877,5.798526763916016,0.6640163660049438,6.376275062561035,1.4591519832611084');
        // this.pesos.push('-2.060595750808716,-2.5080533027648926,2.516190767288208,0.5119011402130127,2.674410343170166,-2.217707872390747,-0.6123802661895752,-1.5915958881378174,-1.030004858970642,-0.26699724793434143,2.461902379989624,1.8650109767913818,1.6050552129745483,-4.0814056396484375,2.7189362049102783,-2.1430561542510986,-0.9340773820877075,3.7453341484069824,-3.154892683029175,1.8135625123977661,3.7095580101013184,-2.7875001430511475,0.21307791769504547,-6.174224853515625,-6.090697765350342,-6.2468156814575195,-0.3498877286911011,-1.8831853866577148,1.6027555465698242,1.5173288583755493,-5.1500701904296875,0.006464995909482241,1.0112284421920776,5.071910858154297,2.6573731899261475,-3.0187621116638184,-4.130316257476807,-2.567826747894287,0.19903062283992767,-0.8277977108955383,0.7536001205444336,1.0008716583251953,-1.3844598531723022,0.5609443187713623,-2.3122012615203857,1.3795263767242432,0.5841593742370605,-2.813356637954712,-2.222806453704834,-1.999324083328247,1.3185796737670898,-0.115392304956913,-1.7214937210083008,-2.220529556274414,-1.089999794960022,-0.6716799736022949,0.2256627231836319,0.5503556728363037,-2.406550645828247,0.14743511378765106,0.6166219711303711,1.0059683322906494,0.23580829799175262,-0.41668015718460083,0.8984890580177307,0.9690729379653931,-0.24822662770748138,-0.3836447298526764,-0.6846880316734314,0.3708195388317108,-1.523783564567566,-0.6587299108505249,2.8420979976654053,0.5584341287612915,-0.1708027571439743,2.6110734939575195,3.8878228664398193,-0.3406917154788971,0.22066593170166016,-2.2761528491973877,-1.925630807876587,-0.9027014374732971,0.3505735397338867,-2.562044382095337,-1.941942572593689,-0.24157455563545227,3.022636651992798,-4.878338813781738,0.6042569875717163,2.4286766052246094,5.394768714904785,-2.1689932346343994,-0.6126418709754944,0.3801705837249756,-0.15750417113304138,3.9033620357513428,-2.891672372817993,-0.016636807471513748,3.7874743938446045,-1.4081852436065674,2.721099853515625,0.7412477135658264,1.0751945972442627,5.3511271476745605,-1.024242639541626;8.05767822265625,2.5640501976013184,-5.6183929443359375,-2.6938273906707764,2.153909683227539;-3.64458966255188,0.7093291878700256,-0.3640763461589813,1.5362868309020996,-0.08894103020429611,-0.3371759057044983,3.983489513397217,-0.8436160683631897,-1.3269553184509277,-0.1561417579650879,-3.275477886199951,-2.656003475189209,0.2882997691631317,0.5713896155357361,-5.060672283172607,-4.997892379760742,-1.7494192123413086,2.5035839080810547,0.41602832078933716,0.4192313253879547,3.882617950439453,1.6588681936264038,-3.2115368843078613,-1.8852218389511108,1.8460705280303955;1.541764497756958,6.879356384277344,-1.5282154083251953,3.736560106277466,-3.0307774543762207');
        this.pesos.push('-2.4321670532226562,-5.435121059417725,2.0850377082824707,5.761279106140137,7.273603916168213,-2.0831379890441895,-0.60988849401474,-1.5915958881378174,-1.030004858970642,-0.26699724793434143,2.350644111633301,1.8650109767913818,1.6821452379226685,-4.0814056396484375,3.1694841384887695,-2.165302038192749,-0.8928591012954712,3.7453341484069824,-3.4238126277923584,1.8135625123977661,3.5521225929260254,-2.7357332706451416,0.21307791769504547,-6.174224853515625,-6.090697765350342,-6.069803237915039,-1.2802740335464478,-1.9426605701446533,1.9638358354568481,1.4708815813064575,-5.1500701904296875,0.006464995909482241,1.0112284421920776,5.071910858154297,2.668281316757202,-2.8244924545288086,-4.130316257476807,-2.6585752964019775,0.19903062283992767,-1.3112244606018066,0.5517042279243469,1.021318793296814,-1.3844598531723022,0.5609443187713623,-2.247709274291992,1.3795263767242432,0.4664108455181122,-2.813356637954712,-2.7455246448516846,-2.3554036617279053,1.3185796737670898,-0.115392304956913,-1.7376325130462646,-2.220529556274414,-0.9866335391998291,-0.6716799736022949,0.2256627231836319,0.5503556728363037,-2.406550645828247,0.14743511378765106,0.8391382694244385,1.0059683322906494,0.23580829799175262,-0.41668015718460083,0.8984890580177307,0.9690729379653931,-0.24822662770748138,-0.3836447298526764,-0.6846880316734314,0.3410784900188446,-1.4508004188537598,-1.3501267433166504,2.8420979976654053,0.5584341287612915,-0.1708027571439743,2.606079578399658,4.171821117401123,-0.14393901824951172,0.01896066591143608,-2.2961559295654297,-1.590595006942749,-2.2374863624572754,0.06351428478956223,-2.715991973876953,-1.6908115148544312,-0.24157455563545227,3.022636651992798,-4.920430660247803,0.37752169370651245,2.4286766052246094,5.384079456329346,-2.136444568634033,-0.6014646291732788,0.4040602445602417,-0.13269548118114471,3.391216278076172,-2.891672372817993,0.31255921721458435,3.7497663497924805,-1.5183532238006592,2.7224152088165283,0.9457412362098694,1.115344524383545,5.13960599899292,-1.024242639541626;2.615274429321289,5.344895839691162,-8.400151252746582,-1.206397533416748,2.7270267009735107;-3.64458966255188,0.7627134323120117,-0.3640763461589813,1.5362868309020996,-0.08894103020429611,-0.3371759057044983,3.561138391494751,-0.931702733039856,-1.3269553184509277,-0.14696365594863892,-3.275477886199951,-2.656003475189209,0.4180265963077545,0.5713896155357361,-5.091358184814453,-4.992486000061035,-1.7804661989212036,2.463562488555908,0.41602832078933716,0.4192313253879547,4.6780595779418945,1.6588681936264038,-3.2115368843078613,-1.8852218389511108,1.8540763854980469;6.846667766571045,8.835287094116211,-0.7442833781242371,-1.3707107305526733,-3.131310224533081');
        
        // Pista 3
        this.pesos.push('0.769700825214386,-1.1933929920196533,-2.6871509552001953,-0.2220396101474762,0.07639502733945847,0.41877490282058716,-0.14786186814308167,-0.24485944211483002,-0.300270140171051,1.9515949487686157,1.1893705129623413,2.004457950592041,-1.2567265033721924,-1.5799851417541504,-3.6882247924804688,1.0563502311706543,0.9734697341918945,1.0809175968170166,-2.12441086769104,1.5064462423324585,1.230794072151184,0.5462201237678528,-0.1967829465866089,-0.18404655158519745,-0.08115335553884506,1.4056907892227173,-1.2170088291168213,0.1022658422589302,-0.3197665810585022,-0.013829916715621948,-2.4834961891174316,0.007818142883479595,0.10610891133546829,1.144051432609558,-0.5755031704902649,0.11971653997898102,0.5080858469009399,1.2535487413406372,-0.4752855896949768,0.279511034488678,-0.044345445930957794,1.1797829866409302,-0.3297930061817169,0.5165562033653259,1.0727399587631226,-0.1505608856678009,-0.10483204573392868,-2.2685256004333496,-0.35106807947158813,-3.0061163902282715,0.1563299298286438,1.3281092643737793,1.0545885562896729,-1.1211791038513184,-0.26310935616493225,-0.4276387095451355,1.1081700325012207,0.5073993802070618,-0.25915655493736267,2.2536885738372803,0.3869430422782898,-0.3702410161495209,0.1647794395685196,-0.5001086592674255,1.5600439310073853,-0.10572362691164017,-0.29734116792678833,-0.03154465928673744,-1.9278541803359985,1.2017812728881836,-0.13719528913497925,3.2144112586975098,-0.4159676730632782,-0.05660265311598778,0.2718372344970703,-0.301101952791214,-0.06932353228330612,1.1450799703598022,-0.2645275592803955,0.10604371130466461,-2.020035743713379,-0.5222450494766235,1.0210555791854858,-2.116837739944458,0.10999874025583267,-0.9372764825820923,-0.6290475726127625,-0.4956585168838501,0.6119580268859863,2.6770267486572266,-2.202857255935669,-2.9720335006713867,0.6053897142410278,-0.356556236743927,-1.0870580673217773,-0.7153761982917786,0.11444053798913956,-0.06372953951358795,0.7506209015846252,1.7711762189865112,0.4412088394165039,1.5626481771469116,3.7716259956359863,0.3973858058452606,-2.7903785705566406;0.17180350422859192,-1.8262252807617188,0,-1.7390403747558594,0;-1.5839707851409912,-0.33976513147354126,0.24351942539215088,1.2116832733154297,-1.405351996421814,-0.2480630874633789,0.6452611684799194,0.4362279772758484,-0.2043762058019638,0.2588764727115631,2.8053154945373535,2.7954704761505127,0.8572863340377808,1.1284866333007812,0.9913507699966431,-2.492015838623047,1.5859603881835938,0.0641026422381401,0.6597355008125305,-0.04509037360548973,-0.3873373568058014,0.024919215589761734,0.11222165822982788,0.4491197466850281,0.00053051469149068;-1.5678949356079102,-0.8953312635421753,0.33369261026382446,0.0661039650440216,0');
        
        // Pista 4 (9157)
        this.pesos.push('7.463067054748535,-0.33220207691192627,8.585097312927246,0.5735147595405579,-1.7502623796463013,-1.1290000677108765,0.029302561655640602,0.02016361989080906,-2.937736749649048,1.1096802949905396,-3.1935393810272217,-1.9175974130630493,-0.7987815737724304,0.052653562277555466,-2.311521291732788,0.194278284907341,1.4538064002990723,5.554224014282227,-0.7231345772743225,-1.0840872526168823,-1.184435486793518,-0.5203235149383545,-0.13762721419334412,-0.456050306558609,-5.66416597366333,-2.223320722579956,0.28665927052497864,0.7397871613502502,-1.3848259449005127,-3.9377782344818115,1.8280296325683594,4.121726036071777,-0.019996443763375282,-2.253506898880005,-2.5236704349517822,-0.5692811608314514,-2.0719313621520996,-0.9230520129203796,3.1579082012176514,1.2925513982772827,2.2918083667755127,6.905762195587158,0.13898591697216034,-5.446803569793701,-1.1211647987365723,-0.3102148473262787,-0.6139565706253052,-0.3120829463005066,1.0245543718338013,-0.05737072601914406,-0.471625953912735,-1.6970391273498535,-0.039222292602062225,-2.6535184383392334,0.4496825635433197,-0.08165007829666138,0.548805832862854,-0.25740352272987366,0.11398671567440033,0.028397848829627037,1.1439683437347412,0.7558513283729553,0.38700011372566223,-0.056313708424568176,-0.16713784635066986,0.3765966296195984,-0.4081965684890747,0.474181592464447,0.7192040681838989,0.16306698322296143,0.023273449391126633,1.2076224088668823,-0.1234382763504982,0.9576429724693298,-0.11348371207714081,0.1096385195851326,-0.684735119342804,0.2844250500202179,-2.771695137023926,-0.04178375378251076,0.570785641670227,0.31947410106658936,-0.4129962921142578,1.55512535572052,0.3300309479236603,0.023722471669316292,-0.4147970974445343,0.598634660243988,-0.9899240136146545,1.5720469951629639,0.3216216266155243,-3.24833345413208,-0.6411581635475159,1.598935604095459,0.1868932545185089,0.4236977994441986,-0.5461940765380859,0.29157552123069763,-3.750688314437866,-2.666999340057373,0.5438478589057922,-2.9257493019104004,0.006505321711301804,-1.7854818105697632,-1.208603024482727;-3.045020341873169,2.389073133468628,6.670149326324463,-1.604212999343872,-4.905663013458252;0.4373171925544739,-2.3339242935180664,-2.7321925163269043,2.231315851211548,1.329388976097107,0.896090030670166,0.5683348178863525,-0.843359112739563,0.911915123462677,-0.675763726234436,1.3556082248687744,-2.5376205444335938,-1.0818918943405151,-3.760045051574707,-1.9321180582046509,-1.2078989744186401,0.5262314677238464,3.881455659866333,-0.8894925117492676,-0.25748252868652344,-3.5648622512817383,1.623633861541748,-0.10556617379188538,2.376666307449341,-0.10895535349845886;2.354954481124878,7.921115875244141,-1.6175732612609863,1.2871724367141724,1.1374719142913818');
        
        // Pista 5 (23 km8114)
        this.pesos.push('0.769700825214386,-1.1933929920196533,-1.0471739768981934,-1.134197473526001,-1.4628580808639526,1.764269232749939,0.2897159159183502,-0.24485944211483002,-1.026023507118225,2.2981836795806885,1.1893705129623413,0.4453039765357971,-1.2567265033721924,-0.39525169134140015,-2.8084676265716553,1.0395673513412476,2.6218817234039307,-0.27781254053115845,-2.7787442207336426,1.5064462423324585,0.9356465339660645,0.5174073576927185,0.13056190311908722,-0.3007297217845917,-0.08115335553884506,3.0716545581817627,-1.633656620979309,0.1022658422589302,-0.45740941166877747,-0.013829916715621948,-3.607083797454834,0.7301722764968872,0.10610891133546829,0.4782099425792694,-0.5755031704902649,2.456852436065674,-0.4909324645996094,0.9803643822669983,-2.280858039855957,0.43964913487434387,-1.0514824390411377,0.6711493730545044,0.06953796744346619,0.5165562033653259,1.2700597047805786,-0.1505608856678009,-0.10483204573392868,0.23215824365615845,-0.9168612360954285,-1.4618587493896484,0.1563299298286438,4.8116912841796875,0.2074321210384369,-2.6115658283233643,-1.223725438117981,-0.6815218925476074,-1.1435580253601074,0.5073993802070618,-0.25915655493736267,4.101285934448242,-0.6248189806938171,-1.2127102613449097,-0.6976537704467773,-2.006479501724243,2.050577402114868,0.16001714766025543,-1.3512115478515625,2.4228885173797607,-0.7137246131896973,1.2017812728881836,-0.7570230960845947,1.2838410139083862,-0.4159676730632782,0.25778457522392273,0.7275928258895874,-0.8806254863739014,1.9507966041564941,1.3349298238754272,0.9478519558906555,-1.7389920949935913,-0.38974153995513916,-0.5222450494766235,-0.012124057859182358,-4.3783040046691895,1.8550323247909546,-0.5456640124320984,-0.6290475726127625,0.7047102451324463,-0.2807150185108185,2.6770267486572266,-3.3063268661499023,-2.9720335006713867,-0.5583033561706543,0.8958241939544678,-1.3017007112503052,-0.7153761982917786,0.11444053798913956,-0.7015762329101562,0.24445435404777527,0.7863998413085938,-1.3857265710830688,0.4615705609321594,4.7224955558776855,0.589144229888916,-1.6066325902938843;2.630990743637085,-3.479884386062622,-2.930471658706665,-1.2514352798461914,0;-2.367764711380005,-1.93388831615448,0.4193926453590393,1.2116832733154297,-1.8359079360961914,-0.20949611067771912,0.9041275382041931,0.4362279772758484,0.24301709234714508,0.2588764727115631,3.958120107650757,2.5624120235443115,1.1084492206573486,1.4425113201141357,1.4873279333114624,-3.2475762367248535,-0.16458939015865326,0.0641026422381401,0.6597355008125305,-0.04509037360548973,1.6857082843780518,0.024919215589761734,0.11222165822982788,0.4491197466850281,-0.4027988016605377;-3.374561071395874,-0.8953312635421753,-0.3366066515445709,0.03826747089624405,-1.0110721588134766');      
        
        // Pista 6 (27 km4362)
        this.pesos.push('0.22579482197761536,-0.24375474452972412,-2.505171537399292,-1.1198577880859375,-0.08776937425136566,0.48438760638237,-1.1001836061477661,-0.8134410381317139,-0.3738898038864136,0.3546193540096283,-0.5362777709960938,0.12528593838214874,-0.46660786867141724,0.12255679070949554,-0.026912856847047806,-0.16618642210960388,-0.8660149574279785,0.413588285446167,-0.8418537974357605,-0.17704208195209503,-0.3766932189464569,0.10284166783094406,-0.23947690427303314,-0.011467061005532742,0.9997807145118713,-0.21581514179706573,0.2963007688522339,-0.9939358830451965,1.41841459274292,-0.15811236202716827,1.1292425394058228,0.0246659554541111,0.450051873922348,0.26545819640159607,-0.15929144620895386,0.9946354031562805,-0.2427094280719757,1.5840567350387573,0.015296286903321743,0.19840064644813538,-0.13549871742725372,-0.021130433306097984,-0.07099767029285431,0.14522014558315277,-0.011203112080693245,-0.1244516670703888,0.2766442596912384,-0.37747716903686523,1.0668678283691406,0.049553219228982925,0.14088812470436096,0.05417969822883606,0.39995333552360535,0.08674276620149612,0.23435501754283905,0.1265493929386139,-0.28524357080459595,0.06116481125354767,0.22021235525608063,-0.2180088758468628,-0.01806447096168995,0.20332074165344238,-0.08747211843729019,0.35676708817481995,-0.123109832406044,-0.16970796883106232,0.45355021953582764,-0.9126094579696655,-0.2738540768623352,2.021867036819458,-0.07575295120477676,-0.9194695353507996,-0.0974876880645752,-0.08841540664434433,0.0019428186351433396,-1.635830044746399,-0.15932011604309082,-0.15982477366924286,-0.05010127276182175,0.1419236660003662,-0.024221772328019142,-0.04156821221113205,0.018961919471621513,0.11728136241436005,0.17373867332935333,2.8583099842071533,-0.23377300798892975,-0.46382495760917664,0.23597674071788788,0.1530681699514389,-0.1122414618730545,0.3522680997848511,-0.06313570588827133,0.12987171113491058,0.07151423394680023,-0.2915247976779938,-2.01900053024292,0.8997318744659424,-0.1650036871433258,1.6403053998947144,0.26637202501296997,-0.17476694285869598,-0.20394179224967957,-1.1313551664352417,0.17446695268154144;0,0,0.014368447475135326,1.8835688829421997,0.5451481342315674;0.5104765892028809,0.29029005765914917,-0.3331893980503082,0.1967020332813263,-0.11475078761577606,-0.2986792325973511,0.39374467730522156,0.6214479804039001,-1.584901213645935,-0.6366600394248962,-0.06280103325843811,0.33884361386299133,-0.4690481722354889,0.14819425344467163,-0.6491835713386536,0.37018218636512756,0.5181108117103577,0.3079286813735962,-0.9878040552139282,-1.0849772691726685,0.6506883502006531,0.37975239753723145,-0.03966916352510452,-2.37101149559021,0.2681862413883209;0,0.5844011306762695,0,0,0.8135773539543152');
    }

    firstGeneration() {

        console.log('Primeira geração...');

        cars = [];      

        // Novos
        for (let i = 0; i < quantidade; i++) {
            cars.push(new Car());
        }

        let child = new Car('X');
        const pesos = this.pesos[pista.selectedPista];
        if (pesos) {
            child.ia.setWeightsFromString(pesos, this.shapes);
        }
        cars.push(child);
        this.melhor = child;

        vivos = cars.length;

    }

    nextGeneration() {

        pista.reset();

        this.calcColocacao();

        if (colocacao.length == 0) {
            this.firstGeneration();
            return

        }
        this.melhor = this.getMelhorCarro();

        if (!this.melhor) {
            return
        }
        this.saveWeights(this.melhor);

        console.log(`**** G: ${nGeracao + 1}. MELHOR FOI: ${this.melhor.ranhurasColetadas.length} ran. Marca: ${this.melhor.marca}. KM: ${this.melhor.km} f1: ${this.melhor.ia.f1} f2: ${this.melhor.ia.f2} `);

        if (this.melhor.ranhurasColetadas.length > record) {
            foo.speak(`Atingiu ${this.melhor.ranhurasColetadas.length}!`);
            record = this.melhor.ranhurasColetadas.length;
        }
        
        if (this.melhor.km > pista.recordKm > 0) {
            
            pista.recordKm = this.melhor.km;
            foo.speak(`quilômetro ${pista.recordKm}!`);
            this.melhor.ia.showWeights();
        }

        // pista.pistaTimeOut = ceil(this.melhor.aliveTime *1.1);

        evolucao.push(this.melhor);

        nGeracao++;
        hue = 0;

        cars = [];

        const weights = this.melhor.ia.model.getWeights();

        const weightCopies = [];
        for (let i = 0; i < weights.length; i++) {
            weightCopies[i] = weights[i].clone();
        }

        // Clonado e mutado.
        for (let i = 1; i < (quantidade / 3) * 0; i++) {

            let child = new Car('m');
            child.ia.model.setWeights(weightCopies);
            child.ia.mutate(0.1); // 0.1
            cars.push(child);

        }

        // Clonado e mutado.
        for (let i = 1; i < (quantidade / 3) * 3; i++) {

            let child = new Car('T');
            child.ia.model.setWeights(weightCopies);
            child.ia.mutate(0.05); // 0.1
            cars.push(child);

        }

        // Clonado (elitismo)
        if (elitism) {
            let child = new Car('c');
            child.ia.model.setWeights(weightCopies);
            cars.push(child);
        }

        vivos = cars.length;

    }

    setFlag() {

        if (pista) {
            const tmpMelhor = genetic.getMelhorCarro();
            if (tmpMelhor) {
               pista.setFlag(tmpMelhor.pos.x, tmpMelhor.pos.y, tmpMelhor.km);
            }
        }

    }

    getQuemMaisDeuReh(qtd) {

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

        console.log('******* Maior ré é ->', colocacao[maiorI].qtdReh, ' km ', colocacao[maiorI].km, ' i: ', maiorI);
        return colocacao[maiorI];

    }

    getMelhorCarro() {

        // Captura quem tem mais ranhuras.

        let maisRanhuras = 0;
        let melhor = null;

        for (const car of cars) {

            if (car.ranhurasColetadas.length > maisRanhuras) {
                maisRanhuras = car.ranhurasColetadas.length;
                melhor = car;
            }
        }

        // console.log('getMelhorCarro() -> ', this.melhor.km, ' maisRanhuras: ', maisRanhuras);
        // fill(0,255,0);
        // circle(this.melhor.pos.x,this.melhor.pos.y,8);
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

        // console.log('Mais KM() -> ', this.melhor.km, ' maisRanhuras: ', maisRanhuras, ' maisKm: ', maisKm);
        // fill(0,0,255);
        // circle(this.melhor.pos.x,this.melhor.pos.y,8);
        // noLoop();


        return melhor;
    }

    funcSalvarMelhorCarro(melhor) {
        if (salvarMelhorCarro) {
            // localStorage.setItem('meuGato', 'Tom');

            // document.cookie = "username=ivan; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

            // try {
            //     console.log('Salvando carro... ', this.melhor.marca);
            //     await this.melhor.ia.model.save('indexeddb://caria-melhor');
            //     console.log('Salvo');
            //     // await this.melhor.ia.model.save('localstorage://caria-melhor');
            // } catch (err) {
            //     console.error(err);
            // }
        }
    }

    funcCarregarCarroSalvo() {
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
    saveWeights(car) {
        const w = car.ia.showWeights(true);
        localStorage.setItem('melhor', w);
    }

    calcColocacao() {
        colocacao = [];
        for (let car of cars) {
            colocacao.push(car);
        }
        if (colocacao.length > 0) {
            colocacao.sort(function (a, b) { return b.km - a.km });
        }
    
    }
    

}