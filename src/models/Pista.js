class Pista {
    constructor() {
        this.walls = [];
        this.showWalls = true;
        this.ranhuras = [];
        this.selectedPista = 3;
        this.spritesheet = null;
        this.monsters = [];
        this.localNascimento = createVector(0,0);
        this.anguloNascimento = radians(180);

        this.make();
        this.getSpriteFundo();
    }

    make() {

        let wallsPista
        this.ranhuras = [];
        this.monsters = [];

        this.monsters.push(new Monster(1600, 130, -0.7,0,300,50, true));
        this.monsters[0].ativo = false;
  
        if (this.selectedPista == 1) {
            wallsPista = getPista1();
            this.monsters.push(new Monster(1600, 130, -0.7,0,300,150));
            this.monsters.push(new Monster(1300, -200, 0 ,1  ,600, 150));
            this.localNascimento = createVector(1500, 120);
            this.anguloNascimento = radians(180);
        } else if (this.selectedPista == 2) {
            wallsPista = getPista2();
            this.ranhuras = getRanhuras2()
            this.monsters.push(new Monster(1561, 120, -0.7,0,260));
            this.monsters.push(new Monster(1080, 18, 0.2, 0.1,2700));
            this.localNascimento = createVector(1500, 120);
            this.anguloNascimento = radians(180);
        } else if (this.selectedPista == 3) {
            wallsPista = getPista3();
            this.localNascimento = createVector(400,720);
            this.anguloNascimento = radians(0);
            this.monsters.push(new Monster(250, 720, 1.5,0,500,260));
        }

        this.walls = [];

        for (const w of wallsPista) {
            const wall = new Wall(createVector(w.a, w.b), createVector(w.c, w.d));            
            this.walls.push(wall);
        }

    }

    getSpriteFundo() {
        if (this.selectedPista == 1) {
            this.spritesheet = getSpriteFundo1();
        } else if (this.selectedPista == 2) {        
            this.spritesheet = getSpriteFundo2();
        } else if (this.selectedPista == 3) {        
            this.spritesheet = getSpriteFundo3();
        }
    }
    togglePista() {
        if (this.selectedPista == 1) {
            this.selectedPista = 2;
        } else if (this.selectedPista == 2) {
            this.selectedPista = 3;    
        } else {
            this.selectedPista = 1;
        }
        this.make();
        this.getSpriteFundo()
    }

    monstersResetPos() {
        for (const monster of this.monsters) {  
            monster.resetPos();
        }
    }

    monstersCollide(car) {
        for (const monster of this.monsters) {     
            monster.collide(car);
        }

    }
    monstersUpdate() {
        for (const monster of this.monsters) {            
            monster.update();
        }
    }
    monstersShow() {
        for (const monster of this.monsters) {            
            monster.show();
        }
    }

    

    makeRandom() {

        for (let i = 0; i < 10; i++) {
            const wall = new Wall(createVector(random(width), random(height)), createVector(random(width), random(height)))
            this.walls.push(wall);
        }

    }
    show() {
        if (this.showWalls) {
            for (const wall of this.walls) {
                wall.update()
                if (showWalls) {
                    wall.show();
                }
            }
        }
        for (let i = 0; i< this.ranhuras.length;i++) {

            const r = this.ranhuras[i];

            if (r.m == 0) {
                if (r.t == 0)
                    stroke(255);
                else
                    stroke(0, 255, 255);
            } else {
                if (r.t == 0)
                    stroke(80, 80, 255);
                else
                    stroke(255, 80, 80);
            }

            if (r.m == 0) {
                strokeWeight(1);
            } else {
                strokeWeight(4);
            }
            
            line(r.a, r.b, r.c, r.d);
            noStroke();
            fill(0,0,255);
            textSize(9);
            text(i,r.a,r.b);
        }
    }
}
function getPista1() {
    const points = [];

    // Parece externa da pista.
    points.push({ a: 1821, b: 362, c: 1821, d: 146 });
    points.push({ a: 1821, b: 146, c: 1809, d: 107 });
    points.push({ a: 1809, b: 107, c: 1788, d: 86 });
    points.push({ a: 1788, b: 86, c: 1762, d: 74 });
    points.push({ a: 1762, b: 74, c: 1239, d: 74 });
    points.push({ a: 1239, b: 74, c: 1216, d: 92 });
    points.push({ a: 1216, b: 92, c: 1216, d: 350 });
    points.push({ a: 1216, b: 350, c: 1208, d: 365 });
    points.push({ a: 1208, b: 365, c: 870, d: 368 });
    points.push({ a: 870, b: 368, c: 730, d: 224 });
    points.push({ a: 730, b: 224, c: 521, d: 220 });
    points.push({ a: 521, b: 220, c: 521, d: 99 });
    points.push({ a: 521, b: 99, c: 484, d: 34 });
    points.push({ a: 484, b: 34, c: 81, d: 36 });
    points.push({ a: 81, b: 36, c: 31, d: 87 });
    points.push({ a: 31, b: 87, c: 29, d: 394 });
    points.push({ a: 29, b: 394, c: 55, d: 438 });
    points.push({ a: 55, b: 438, c: 190, d: 440 });
    points.push({ a: 190, b: 440, c: 209, d: 472 });
    points.push({ a: 209, b: 472, c: 207, d: 650 });
    points.push({ a: 207, b: 650, c: 169, d: 686 });
    points.push({ a: 169, b: 686, c: 119, d: 698 });
    points.push({ a: 119, b: 698, c: 96, d: 717 });
    points.push({ a: 96, b: 717, c: 85, d: 770 });
    points.push({ a: 85, b: 770, c: 92, d: 846 });
    points.push({ a: 92, b: 846, c: 112, d: 881 });
    points.push({ a: 112, b: 881, c: 168, d: 903 });
    points.push({ a: 168, b: 903, c: 677, d: 903 });
    points.push({ a: 677, b: 903, c: 704, d: 891 });
    points.push({ a: 704, b: 891, c: 705, d: 672 });
    points.push({ a: 705, b: 672, c: 1115, d: 655 });
    points.push({ a: 1115, b: 655, c: 1127, d: 683 });
    points.push({ a: 1127, b: 683, c: 971, d: 834 });
    points.push({ a: 971, b: 834, c: 964, d: 903 });
    points.push({ a: 964, b: 903, c: 1808, d: 903 });
    points.push({ a: 1808, b: 903, c: 1849, d: 863 });
    points.push({ a: 1849, b: 863, c: 1844, d: 709 });
    points.push({ a: 1844, b: 709, c: 1723, d: 599 });
    points.push({ a: 1723, b: 599, c: 1723, d: 559 });
    points.push({ a: 1723, b: 559, c: 1822, d: 379 });
    points.push({ a: 1822, b: 379, c: 1822, d: 364 });

    // Parede interna da pista.
    points.push({ a: 1692, b: 360, c: 1690, d: 201 });
    points.push({ a: 1690, b: 201, c: 1401, d: 201 });
    points.push({ a: 1401, b: 201, c: 1377, d: 222 });
    points.push({ a: 1377, b: 222, c: 1375, d: 477 });
    points.push({ a: 1375, b: 477, c: 1366, d: 501 });
    points.push({ a: 1366, b: 501, c: 1343, d: 512 });
    points.push({ a: 1343, b: 512, c: 769, d: 512 });
    points.push({ a: 769, b: 512, c: 655, d: 390 });
    points.push({ a: 655, b: 390, c: 621, d: 376 });
    points.push({ a: 621, b: 376, c: 514, d: 379 });
    points.push({ a: 514, b: 379, c: 431, d: 358 });
    points.push({ a: 431, b: 358, c: 365, d: 294 });
    points.push({ a: 365, b: 294, c: 365, d: 207 });
    points.push({ a: 365, b: 207, c: 338, d: 171 });
    points.push({ a: 338, b: 171, c: 238, d: 163 });
    points.push({ a: 238, b: 163, c: 195, d: 174 });
    points.push({ a: 195, b: 174, c: 171, d: 202 });
    points.push({ a: 171, b: 202, c: 168, d: 284 });
    points.push({ a: 168, b: 284, c: 281, d: 291 });
    points.push({ a: 281, b: 291, c: 347, d: 353 });
    points.push({ a: 347, b: 353, c: 377, d: 438 });
    points.push({ a: 377, b: 438, c: 383, d: 725 });
    points.push({ a: 383, b: 725, c: 329, d: 771 });
    points.push({ a: 329, b: 771, c: 332, d: 787 });
    points.push({ a: 332, b: 787, c: 522, d: 786 });
    points.push({ a: 522, b: 786, c: 543, d: 756 });
    points.push({ a: 543, b: 756, c: 535, d: 602 });
    points.push({ a: 535, b: 602, c: 601, d: 545 });
    points.push({ a: 601, b: 545, c: 1209, d: 548 });
    points.push({ a: 1209, b: 548, c: 1233, d: 572 });
    points.push({ a: 1233, b: 572, c: 1315, d: 695 });
    points.push({ a: 1315, b: 695, c: 1238, d: 763 });
    points.push({ a: 1238, b: 763, c: 1230, d: 775 });
    points.push({ a: 1230, b: 775, c: 1239, d: 791 });
    points.push({ a: 1239, b: 791, c: 1627, d: 785 });
    points.push({ a: 1627, b: 785, c: 1658, d: 761 });
    points.push({ a: 1658, b: 761, c: 1451, d: 582 });
    points.push({ a: 1451, b: 582, c: 1451, d: 525 });
    points.push({ a: 1451, b: 525, c: 1691, d: 357 });

    return points;

}

function getPista2() {
    const points = [];

    // Parede exerta da pista.
    points.push({ a: 1854, b: 63, c: 1498, d: 61 }); // x
    points.push({ a: 1498, b: 61, c: 1466, d: 97 }); // x
    points.push({ a: 1466, b: 97, c: 1304, d: 100 }); // x
    points.push({ a: 1304, b: 100, c: 1284, d: 112 }); // x
    points.push({ a: 1284, b: 112, c: 1263, d: 101 }); // x
    points.push({ a: 1263, b: 101, c: 1153, d: 102 }); // x
    points.push({ a: 1153, b: 102, c: 1214, d: 157 }); // x
    points.push({ a: 1214, b: 157, c: 1268, d: 160 }); // x
    points.push({ a: 1268, b: 160, c: 1424, d: 251 }); // x
    points.push({ a: 1424, b: 251, c: 1306, d: 246 }); // x
    points.push({ a: 1306, b: 246, c: 993, d: 26 }); // x
    points.push({ a: 993, b: 26, c: 892, d: 29 }); // x
    points.push({ a: 892, b: 29, c: 893, d: 340 }); // x
    points.push({ a: 893, b: 340, c: 821, d: 370 }); // x
    points.push({ a: 821, b: 370, c: 710, d: 373 }); // x
    points.push({ a: 710, b: 373, c: 641, d: 333 }); // x
    points.push({ a: 641, b: 333, c: 632, d: 224 });
    points.push({ a: 632, b: 224, c: 412, d: 218 });
    points.push({ a: 412, b: 218, c: 421, d: 450 });
    points.push({ a: 421, b: 450, c: 473, d: 514 });
    points.push({ a: 473, b: 514, c: 728, d: 509 });
    points.push({ a: 728, b: 509, c: 815, d: 593 });
    points.push({ a: 815, b: 593, c: 856, d: 555 });
    points.push({ a: 856, b: 555, c: 806, d: 504 });
    points.push({ a: 806, b: 504, c: 1112, d: 507 });
    points.push({ a: 1112, b: 507, c: 1181, d: 441 });
    points.push({ a: 1181, b: 441, c: 1606, d: 436 });
    points.push({ a: 1606, b: 436, c: 1607, d: 506 });
    points.push({ a: 1607, b: 506, c: 1212, d: 498 });
    points.push({ a: 1212, b: 498, c: 1154, d: 557 });
    points.push({ a: 1154, b: 557, c: 914, d: 556 });
    points.push({ a: 914, b: 556, c: 915, d: 655 });
    points.push({ a: 915, b: 655, c: 730, d: 652 });
    points.push({ a: 730, b: 652, c: 724, d: 559 });
    points.push({ a: 724, b: 559, c: 417, d: 558 });
    points.push({ a: 417, b: 558, c: 361, d: 473 });
    points.push({ a: 361, b: 473, c: 349, d: 242 });
    points.push({ a: 349, b: 242, c: 416, d: 169 });
    points.push({ a: 416, b: 169, c: 854, d: 163 });
    points.push({ a: 854, b: 163, c: 795, d: 119 });
    points.push({ a: 795, b: 119, c: 794, d: 75 });
    points.push({ a: 794, b: 75, c: 857, d: 27 });
    points.push({ a: 857, b: 27, c: 20, d: 28 });
    points.push({ a: 20, b: 28, c: 106, d: 242 });
    points.push({ a: 106, b: 242, c: 25, d: 597 });
    points.push({ a: 25, b: 597, c: 27, d: 920 });
    points.push({ a: 27, b: 920, c: 1308, d: 924 });
    points.push({ a: 1308, b: 924, c: 1373, d: 782 });
    points.push({ a: 1373, b: 782, c: 1339, d: 713 });
    points.push({ a: 1339, b: 713, c: 1513, d: 710 });
    points.push({ a: 1513, b: 710, c: 1485, d: 771 });
    points.push({ a: 1485, b: 771, c: 1551, d: 866 });
    points.push({ a: 1551, b: 866, c: 1854, d: 862 });
    points.push({ a: 1854, b: 862, c: 1862, d: 590 });
    points.push({ a: 1862, b: 590, c: 1826, d: 542 });
    points.push({ a: 1826, b: 542, c: 1830, d: 437 });
    points.push({ a: 1830, b: 437, c: 1858, d: 418 }); // x
    points.push({ a: 1858, b: 418, c: 1855, d: 64 }); // x

    // Parece interna da pista.
    points.push({ a: 1756, b: 221, c: 1514, d: 219 }); // x
    points.push({ a: 1514, b: 219, c: 1461, d: 149 }); // x
    points.push({ a: 1461, b: 149, c: 1354, d: 147 }); // x
    points.push({ a: 1354, b: 147, c: 1516, d: 241 }); // x
    points.push({ a: 1516, b: 241, c: 1610, d: 245 }); // x
    points.push({ a: 1610, b: 245, c: 1615, d: 315 }); // x
    points.push({ a: 1615, b: 315, c: 1245, d: 312 }); // x
    points.push({ a: 1245, b: 312, c: 1072, d: 183 }); // x
    points.push({ a: 1072, b: 183, c: 1005, d: 181 }); // x
    points.push({ a: 1005, b: 181, c: 1004, d: 371 }); // x
    points.push({ a: 1004, b: 371, c: 832, d: 428 }); // x
    points.push({ a: 832, b: 428, c: 654, d: 424 }); // x
    points.push({ a: 654, b: 424, c: 517, d: 314 }); // x
    points.push({ a: 517, b: 314, c: 500, d: 320 });
    points.push({ a: 500, b: 320, c: 499, d: 371 });
    points.push({ a: 499, b: 371, c: 653, d: 438 });
    points.push({ a: 653, b: 438, c: 1006, d: 439 });
    points.push({ a: 1006, b: 439, c: 1111, d: 351 });
    points.push({ a: 1111, b: 351, c: 1692, d: 344 });
    points.push({ a: 1692, b: 344, c: 1714, d: 475 });
    points.push({ a: 1714, b: 475, c: 1680, d: 577 });
    points.push({ a: 1680, b: 577, c: 1263, d: 570 });
    points.push({ a: 1263, b: 570, c: 1182, d: 639 });
    points.push({ a: 1182, b: 639, c: 1017, d: 640 });
    points.push({ a: 1017, b: 640, c: 1011, d: 712 });
    points.push({ a: 1011, b: 712, c: 628, d: 705 });
    points.push({ a: 628, b: 705, c: 628, d: 649 });
    points.push({ a: 628, b: 649, c: 335, d: 629 });
    points.push({ a: 335, b: 629, c: 271, d: 513 });
    points.push({ a: 271, b: 513, c: 258, d: 237 });
    points.push({ a: 258, b: 237, c: 373, d: 108 });
    points.push({ a: 373, b: 108, c: 684, d: 103 });
    points.push({ a: 684, b: 103, c: 681, d: 95 });
    points.push({ a: 681, b: 95, c: 217, d: 97 });
    points.push({ a: 217, b: 97, c: 158, d: 564 });
    points.push({ a: 158, b: 564, c: 171, d: 773 });
    points.push({ a: 171, b: 773, c: 206, d: 809 });
    points.push({ a: 206, b: 809, c: 1117, d: 817 });
    points.push({ a: 1117, b: 817, c: 1037, d: 656 });
    points.push({ a: 1037, b: 656, c: 1198, d: 652 });
    points.push({ a: 1198, b: 652, c: 1278, d: 587 });
    points.push({ a: 1278, b: 587, c: 1674, d: 594 });
    points.push({ a: 1674, b: 594, c: 1669, d: 734 });
    points.push({ a: 1669, b: 734, c: 1717, d: 736 });
    points.push({ a: 1717, b: 736, c: 1711, d: 556 });
    points.push({ a: 1711, b: 556, c: 1733, d: 399 });
    points.push({ a: 1733, b: 399, c: 1753, d: 380 }); // x
    points.push({ a: 1753, b: 380, c: 1756, d: 221 }); // x

    return points;

}

function getPista3() {
    const points = [];

    // Parte externa!
    points.push({ a: 151, b: 757, c: 782, d: 758, m: 0, t: 0 });
    points.push({ a: 782, b: 759, c: 943, d: 636, m: 0, t: 0 });
    points.push({ a: 943, b: 636, c: 982, d: 704, m: 0, t: 0 });
    points.push({ a: 982, b: 704, c: 1025, d: 745, m: 0, t: 0 });
    points.push({ a: 1025, b: 745, c: 1085, d: 772, m: 0, t: 0 });
    points.push({ a: 1085, b: 772, c: 1180, d: 776, m: 0, t: 0 });
    points.push({ a: 1180, b: 776, c: 1260, d: 736, m: 0, t: 0 });
    points.push({ a: 1260, b: 736, c: 1307, d: 684, m: 0, t: 0 });
    points.push({ a: 1307, b: 684, c: 1332, d: 620, m: 0, t: 0 });
    points.push({ a: 1332, b: 620, c: 1339, d: 589, m: 0, t: 0 });
    points.push({ a: 1339, b: 589, c: 1338, d: 161, m: 0, t: 0 });
    points.push({ a: 1338, b: 161, c: 1322, d: 110, m: 0, t: 0 });
    points.push({ a: 1322, b: 110, c: 1291, d: 72, m: 0, t: 0 });
    points.push({ a: 1291, b: 72, c: 1249, d: 46, m: 0, t: 0 });
    points.push({ a: 1249, b: 46, c: 1212, d: 36, m: 0, t: 0 });
    points.push({ a: 1212, b: 36, c: 555, d: 35, m: 0, t: 0 });
    points.push({ a: 555, b: 35, c: 390, d: 178, m: 0, t: 0 });
    points.push({ a: 390, b: 178, c: 371, d: 119, m: 0, t: 0 });
    points.push({ a: 371, b: 119, c: 332, d: 66, m: 0, t: 0 });
    points.push({ a: 332, b: 66, c: 272, d: 29, m: 0, t: 0 });
    points.push({ a: 272, b: 29, c: 178, d: 22, m: 0, t: 0 });
    points.push({ a: 178, b: 22, c: 109, d: 48, m: 0, t: 0 });
    points.push({ a: 109, b: 48, c: 59, d: 89, m: 0, t: 0 });
    points.push({ a: 59, b: 89, c: 31, d: 131, m: 0, t: 0 });
    points.push({ a: 31, b: 131, c: 19, d: 165, m: 0, t: 0 });
    points.push({ a: 19, b: 165, c: 13, d: 193, m: 0, t: 0 });
    points.push({ a: 13, b: 193, c: 15, d: 630, m: 0, t: 0 });
    points.push({ a: 15, b: 630, c: 28, d: 677, m: 0, t: 0 });
    points.push({ a: 28, b: 677, c: 53, d: 711, m: 0, t: 0 });
    points.push({ a: 53, b: 711, c: 79, d: 734, m: 0, t: 0 });
    points.push({ a: 79, b: 734, c: 119, d: 752, m: 0, t: 0 });
    points.push({ a: 119, b: 752, c: 162, d: 759, m: 0, t: 0 });

    // Parte interna superior.
    points.push({ a: 591, b: 124, c: 1203, d: 126, m: 0, t: 0 });
    points.push({ a: 1203, b: 126, c: 1224, d: 136, m: 0, t: 0 });
    points.push({ a: 1224, b: 136, c: 1234, d: 145, m: 0, t: 0 });
    points.push({ a: 1234, b: 145, c: 1245, d: 167, m: 0, t: 0 });
    points.push({ a: 1245, b: 167, c: 1245, d: 576, m: 0, t: 0 });
    points.push({ a: 1245, b: 576, c: 1236, d: 619, m: 0, t: 0 });
    points.push({ a: 1236, b: 619, c: 1223, d: 643, m: 0, t: 0 });
    points.push({ a: 1223, b: 643, c: 1197, d: 672, m: 0, t: 0 });
    points.push({ a: 1197, b: 672, c: 1168, d: 687, m: 0, t: 0 });
    points.push({ a: 1168, b: 687, c: 1141, d: 691, m: 0, t: 0 });
    points.push({ a: 1141, b: 691, c: 1113, d: 687, m: 0, t: 0 });
    points.push({ a: 1113, b: 687, c: 1085, d: 675, m: 0, t: 0 });
    points.push({ a: 1085, b: 675, c: 1064, d: 658, m: 0, t: 0 });
    points.push({ a: 1064, b: 658, c: 1041, d: 628, m: 0, t: 0 });
    points.push({ a: 1041, b: 628, c: 1028, d: 591, m: 0, t: 0 });
    points.push({ a: 1028, b: 591, c: 1024, d: 567, m: 0, t: 0 });
    points.push({ a: 1024, b: 567, c: 1021, d: 508, m: 0, t: 0 });
    points.push({ a: 1021, b: 508, c: 1052, d: 499, m: 0, t: 0 });
    points.push({ a: 1052, b: 499, c: 1096, d: 493, m: 0, t: 0 });
    points.push({ a: 1096, b: 493, c: 1135, d: 478, m: 0, t: 0 });
    points.push({ a: 1135, b: 478, c: 1167, d: 455, m: 0, t: 0 });
    points.push({ a: 1167, b: 455, c: 1186, d: 428, m: 0, t: 0 });
    points.push({ a: 1186, b: 428, c: 1196, d: 395, m: 0, t: 0 });
    points.push({ a: 1196, b: 395, c: 1200, d: 356, m: 0, t: 0 });
    points.push({ a: 1200, b: 356, c: 1189, d: 310, m: 0, t: 0 });
    points.push({ a: 1189, b: 310, c: 1166, d: 273, m: 0, t: 0 });
    points.push({ a: 1166, b: 273, c: 1132, d: 243, m: 0, t: 0 });
    points.push({ a: 1132, b: 243, c: 1092, d: 226, m: 0, t: 0 });
    points.push({ a: 1092, b: 226, c: 1038, d: 222, m: 0, t: 0 });
    points.push({ a: 1038, b: 222, c: 988, d: 235, m: 0, t: 0 });
    points.push({ a: 988, b: 235, c: 957, d: 253, m: 0, t: 0 });
    points.push({ a: 957, b: 253, c: 936, d: 274, m: 0, t: 0 });
    points.push({ a: 936, b: 274, c: 921, d: 295, m: 0, t: 0 });
    points.push({ a: 921, b: 295, c: 916, d: 307, m: 0, t: 0 });
    points.push({ a: 916, b: 307, c: 910, d: 323, m: 0, t: 0 });
    points.push({ a: 910, b: 323, c: 897, d: 331, m: 0, t: 0 });
    points.push({ a: 897, b: 331, c: 875, d: 331, m: 0, t: 0 });
    points.push({ a: 875, b: 331, c: 857, d: 292, m: 0, t: 0 });
    points.push({ a: 857, b: 292, c: 834, d: 264, m: 0, t: 0 });
    points.push({ a: 834, b: 264, c: 807, d: 241, m: 0, t: 0 });
    points.push({ a: 807, b: 241, c: 773, d: 220, m: 0, t: 0 });
    points.push({ a: 773, b: 220, c: 725, d: 203, m: 0, t: 0 });
    points.push({ a: 725, b: 203, c: 673, d: 197, m: 0, t: 0 });
    points.push({ a: 673, b: 197, c: 619, d: 204, m: 0, t: 0 });
    points.push({ a: 619, b: 204, c: 575, d: 221, m: 0, t: 0 });
    points.push({ a: 575, b: 221, c: 551, d: 237, m: 0, t: 0 });
    points.push({ a: 551, b: 237, c: 508, d: 276, m: 0, t: 0 });
    points.push({ a: 508, b: 276, c: 486, d: 310, m: 0, t: 0 });
    points.push({ a: 486, b: 310, c: 475, d: 336, m: 0, t: 0 });
    points.push({ a: 475, b: 336, c: 467, d: 371, m: 0, t: 0 });
    points.push({ a: 467, b: 371, c: 424, d: 375, m: 0, t: 0 });
    points.push({ a: 424, b: 375, c: 403, d: 382, m: 0, t: 0 });
    points.push({ a: 403, b: 382, c: 377, d: 400, m: 0, t: 0 });
    points.push({ a: 377, b: 400, c: 352, d: 435, m: 0, t: 0 });
    points.push({ a: 352, b: 435, c: 341, d: 459, m: 0, t: 0 });
    points.push({ a: 341, b: 459, c: 331, d: 470, m: 0, t: 0 });
    points.push({ a: 331, b: 470, c: 312, d: 480, m: 0, t: 0 });
    points.push({ a: 312, b: 480, c: 285, d: 480, m: 0, t: 0 });
    points.push({ a: 285, b: 480, c: 267, d: 474, m: 0, t: 0 });
    points.push({ a: 267, b: 474, c: 254, d: 462, m: 0, t: 0 });
    points.push({ a: 254, b: 462, c: 246, d: 445, m: 0, t: 0 });
    points.push({ a: 246, b: 445, c: 244, d: 429, m: 0, t: 0 });
    points.push({ a: 244, b: 429, c: 245, d: 418, m: 0, t: 0 });
    points.push({ a: 245, b: 418, c: 251, d: 402, m: 0, t: 0 });
    points.push({ a: 251, b: 402, c: 263, d: 392, m: 0, t: 0 });
    points.push({ a: 263, b: 392, c: 286, d: 387, m: 0, t: 0 });
    points.push({ a: 286, b: 387, c: 318, d: 383, m: 0, t: 0 });
    points.push({ a: 318, b: 383, c: 342, d: 379, m: 0, t: 0 });
    points.push({ a: 342, b: 379, c: 364, d: 371, m: 0, t: 0 });
    points.push({ a: 364, b: 371, c: 384, d: 354, m: 0, t: 0 });
    points.push({ a: 384, b: 354, c: 395, d: 339, m: 0, t: 0 });
    points.push({ a: 395, b: 339, c: 401, d: 320, m: 0, t: 0 });
    points.push({ a: 401, b: 320, c: 402, d: 290, m: 0, t: 0 });
    points.push({ a: 402, b: 290, c: 592, d: 126, m: 0, t: 0 });
    
    // Parte interna inferior.
    points.push({ a: 156, b: 668, c: 750, d: 669, m: 0, t: 0 });
    points.push({ a: 750, b: 669, c: 921, d: 539, m: 0, t: 0 });
    points.push({ a: 921, b: 539, c: 922, d: 512, m: 0, t: 0 });
    points.push({ a: 922, b: 512, c: 928, d: 485, m: 0, t: 0 });
    points.push({ a: 928, b: 485, c: 949, d: 450, m: 0, t: 0 });
    points.push({ a: 949, b: 450, c: 989, d: 422, m: 0, t: 0 });
    points.push({ a: 989, b: 422, c: 1031, d: 411, m: 0, t: 0 });
    points.push({ a: 1031, b: 411, c: 1069, d: 407, m: 0, t: 0 });
    points.push({ a: 1069, b: 407, c: 1087, d: 402, m: 0, t: 0 });
    points.push({ a: 1087, b: 402, c: 1101, d: 388, m: 0, t: 0 });
    points.push({ a: 1101, b: 388, c: 1106, d: 369, m: 0, t: 0 });
    points.push({ a: 1106, b: 369, c: 1103, d: 348, m: 0, t: 0 });
    points.push({ a: 1103, b: 348, c: 1095, d: 332, m: 0, t: 0 });
    points.push({ a: 1095, b: 332, c: 1084, d: 321, m: 0, t: 0 });
    points.push({ a: 1084, b: 321, c: 1062, d: 313, m: 0, t: 0 });
    points.push({ a: 1062, b: 313, c: 1037, d: 315, m: 0, t: 0 });
    points.push({ a: 1037, b: 315, c: 1022, d: 321, m: 0, t: 0 });
    points.push({ a: 1022, b: 321, c: 1009, d: 333, m: 0, t: 0 });
    points.push({ a: 1009, b: 333, c: 999, d: 354, m: 0, t: 0 });
    points.push({ a: 999, b: 354, c: 983, d: 379, m: 0, t: 0 });
    points.push({ a: 983, b: 379, c: 965, d: 400, m: 0, t: 0 });
    points.push({ a: 965, b: 400, c: 947, d: 411, m: 0, t: 0 });
    points.push({ a: 947, b: 411, c: 925, d: 419, m: 0, t: 0 });
    points.push({ a: 925, b: 419, c: 908, d: 423, m: 0, t: 0 });
    points.push({ a: 908, b: 423, c: 886, d: 424, m: 0, t: 0 });
    points.push({ a: 886, b: 424, c: 886, d: 424, m: 0, t: 0 });
    points.push({ a: 886, b: 424, c: 879, d: 455, m: 0, t: 0 });
    points.push({ a: 879, b: 455, c: 867, d: 484, m: 0, t: 0 });
    points.push({ a: 867, b: 484, c: 850, d: 509, m: 0, t: 0 });
    points.push({ a: 850, b: 509, c: 831, d: 532, m: 0, t: 0 });
    points.push({ a: 831, b: 532, c: 803, d: 557, m: 0, t: 0 });
    points.push({ a: 803, b: 557, c: 772, d: 574, m: 0, t: 0 });
    points.push({ a: 772, b: 574, c: 739, d: 588, m: 0, t: 0 });
    points.push({ a: 739, b: 588, c: 693, d: 595, m: 0, t: 0 });
    points.push({ a: 693, b: 595, c: 645, d: 595, m: 0, t: 0 });
    points.push({ a: 645, b: 595, c: 601, d: 583, m: 0, t: 0 });
    points.push({ a: 601, b: 583, c: 562, d: 565, m: 0, t: 0 });
    points.push({ a: 562, b: 565, c: 532, d: 542, m: 0, t: 0 });
    points.push({ a: 532, b: 542, c: 504, d: 512, m: 0, t: 0 });
    points.push({ a: 504, b: 512, c: 489, d: 489, m: 0, t: 0 });
    points.push({ a: 489, b: 489, c: 477, d: 464, m: 0, t: 0 });
    points.push({ a: 477, b: 464, c: 456, d: 464, m: 0, t: 0 });
    points.push({ a: 456, b: 464, c: 443, d: 469, m: 0, t: 0 });
    points.push({ a: 443, b: 469, c: 434, d: 485, m: 0, t: 0 });
    points.push({ a: 434, b: 485, c: 412, d: 521, m: 0, t: 0 });
    points.push({ a: 412, b: 521, c: 385, d: 545, m: 0, t: 0 });
    points.push({ a: 385, b: 545, c: 351, d: 563, m: 0, t: 0 });
    points.push({ a: 351, b: 563, c: 307, d: 573, m: 0, t: 0 });
    points.push({ a: 307, b: 573, c: 262, d: 568, m: 0, t: 0 });
    points.push({ a: 262, b: 568, c: 219, d: 552, m: 0, t: 0 });
    points.push({ a: 219, b: 552, c: 186, d: 525, m: 0, t: 0 });
    points.push({ a: 186, b: 525, c: 167, d: 499, m: 0, t: 0 });
    points.push({ a: 167, b: 499, c: 153, d: 458, m: 0, t: 0 });
    points.push({ a: 153, b: 458, c: 150, d: 413, m: 0, t: 0 });
    points.push({ a: 150, b: 413, c: 162, d: 369, m: 0, t: 0 });
    points.push({ a: 162, b: 369, c: 185, d: 336, m: 0, t: 0 });
    points.push({ a: 185, b: 336, c: 220, d: 313, m: 0, t: 0 });
    points.push({ a: 220, b: 313, c: 260, d: 300, m: 0, t: 0 });
    points.push({ a: 260, b: 300, c: 302, d: 294, m: 0, t: 0 });
    points.push({ a: 302, b: 294, c: 305, d: 248, m: 0, t: 0 });
    points.push({ a: 305, b: 248, c: 299, d: 198, m: 0, t: 0 });
    points.push({ a: 299, b: 198, c: 290, d: 167, m: 0, t: 0 });
    points.push({ a: 290, b: 167, c: 276, d: 141, m: 0, t: 0 });
    points.push({ a: 276, b: 141, c: 254, d: 121, m: 0, t: 0 });
    points.push({ a: 254, b: 121, c: 231, d: 112, m: 0, t: 0 });
    points.push({ a: 231, b: 112, c: 199, d: 110, m: 0, t: 0 });
    points.push({ a: 199, b: 110, c: 170, d: 119, m: 0, t: 0 });
    points.push({ a: 170, b: 119, c: 141, d: 138, m: 0, t: 0 });
    points.push({ a: 141, b: 138, c: 122, d: 162, m: 0, t: 0 });
    points.push({ a: 122, b: 162, c: 110, d: 187, m: 0, t: 0 });
    points.push({ a: 110, b: 187, c: 106, d: 207, m: 0, t: 0 });
    points.push({ a: 106, b: 207, c: 108, d: 620, m: 0, t: 0 });
    points.push({ a: 108, b: 620, c: 112, d: 635, m: 0, t: 0 });
    points.push({ a: 112, b: 635, c: 120, d: 649, m: 0, t: 0 });
    points.push({ a: 120, b: 649, c: 136, d: 663, m: 0, t: 0 });
    points.push({ a: 136, b: 663, c: 159, d: 668, m: 0, t: 0 });    


    // Canteiro central

    points.push({ a: 676, b: 288, c: 640, d: 293, m: 0, t: 0 });
    points.push({ a: 640, b: 293, c: 614, d: 306, m: 0, t: 0 });
    points.push({ a: 614, b: 306, c: 591, d: 324, m: 0, t: 0 });
    points.push({ a: 591, b: 324, c: 573, d: 345, m: 0, t: 0 });
    points.push({ a: 573, b: 345, c: 562, d: 373, m: 0, t: 0 });
    points.push({ a: 562, b: 373, c: 560, d: 409, m: 0, t: 0 });
    points.push({ a: 560, b: 409, c: 567, d: 437, m: 0, t: 0 });
    points.push({ a: 567, b: 437, c: 588, d: 469, m: 0, t: 0 });
    points.push({ a: 588, b: 469, c: 618, d: 491, m: 0, t: 0 });
    points.push({ a: 618, b: 491, c: 654, d: 504, m: 0, t: 0 });
    points.push({ a: 654, b: 504, c: 678, d: 507, m: 0, t: 0 });
    points.push({ a: 678, b: 507, c: 716, d: 500, m: 0, t: 0 });
    points.push({ a: 716, b: 500, c: 741, d: 488, m: 0, t: 0 });
    points.push({ a: 741, b: 488, c: 765, d: 468, m: 0, t: 0 });
    points.push({ a: 765, b: 468, c: 783, d: 442, m: 0, t: 0 });
    points.push({ a: 783, b: 442, c: 792, d: 412, m: 0, t: 0 });
    points.push({ a: 792, b: 412, c: 794, d: 397, m: 0, t: 0 });
    points.push({ a: 794, b: 397, c: 791, d: 375, m: 0, t: 0 });
    points.push({ a: 791, b: 375, c: 781, d: 348, m: 0, t: 0 });
    points.push({ a: 781, b: 348, c: 764, d: 325, m: 0, t: 0 });
    points.push({ a: 764, b: 325, c: 746, d: 309, m: 0, t: 0 });
    points.push({ a: 746, b: 309, c: 724, d: 298, m: 0, t: 0 });
    points.push({ a: 724, b: 298, c: 701, d: 290, m: 0, t: 0 });
    points.push({ a: 701, b: 290, c: 674, d: 288, m: 0, t: 0 });
    
    // // Primeira rotatória
    // points.push({ a: 975, b: 501, c: 966, d: 507, m: 0, t: 0 });
    // points.push({ a: 966, b: 507, c: 963, d: 517, m: 0, t: 0 });
    // points.push({ a: 963, b: 517, c: 973, d: 525, m: 0, t: 0 });
    // points.push({ a: 973, b: 525, c: 986, d: 520, m: 0, t: 0 });
    // points.push({ a: 986, b: 520, c: 988, d: 507, m: 0, t: 0 });
    // points.push({ a: 988, b: 507, c: 975, d: 501, m: 0, t: 0 });
    
    // // Segunda rotarória
    // points.push({ a: 361, b: 235, c: 351, d: 241, m: 0, t: 0 });
    // points.push({ a: 351, b: 241, c: 351, d: 250, m: 0, t: 0 });
    // points.push({ a: 351, b: 250, c: 360, d: 258, m: 0, t: 0 });
    // points.push({ a: 360, b: 258, c: 371, d: 250, m: 0, t: 0 });
    // points.push({ a: 371, b: 250, c: 369, d: 240, m: 0, t: 0 });
    // points.push({ a: 369, b: 240, c: 362, d: 234, m: 0, t: 0 });


    return points;
}
function getRanhuras2() {

    const points = [];

 
    points.push({ a: 1497, b: 101, c: 1498, d: 148, m: 0, t: 0 });
    points.push({ a: 1462, b: 110, c: 1463, d: 136, m: 0, t: 0 });
    points.push({ a: 1417, b: 113, c: 1417, d: 135, m: 0, t: 0 });
    points.push({ a: 1375, b: 113, c: 1376, d: 133, m: 0, t: 0 });
    points.push({ a: 1334, b: 113, c: 1334, d: 134, m: 0, t: 0 });
    // points.push({ a: 1240, b: 109, c: 1260, d: 109, m: 0, t: 0 });
    points.push({ a: 1359, b: 165, c: 1348, d: 180, m: 0, t: 0 });
    points.push({ a: 1368, b: 172, c: 1358, d: 184, m: 0, t: 0 });
    points.push({ a: 1378, b: 177, c: 1366, d: 192, m: 0, t: 0 });
    points.push({ a: 1387, b: 181, c: 1374, d: 198, m: 0, t: 0 });
    points.push({ a: 1402, b: 187, c: 1383, d: 205, m: 0, t: 0 });
    points.push({ a: 1410, b: 193, c: 1394, d: 212, m: 0, t: 0 });
    points.push({ a: 1424, b: 201, c: 1408, d: 220, m: 0, t: 0 });
    points.push({ a: 1436, b: 209, c: 1420, d: 228, m: 0, t: 0 });
    points.push({ a: 1450, b: 218, c: 1430, d: 235, m: 0, t: 0 });

    points.push({ a: 1458, b: 219, c: 1432, d: 242, m: 0, t: 0 });
    points.push({ a: 1468, b: 223, c: 1447, d: 245, m: 0, t: 0 });
    points.push({ a: 1478, b: 231, c: 1463, d: 250, m: 0, t: 0 });
    points.push({ a: 1489, b: 238, c: 1476, d: 255, m: 0, t: 0 });
    points.push({ a: 1503, b: 247, c: 1503, d: 274, m: 0, t: 0 });
    points.push({ a: 1518, b: 250, c: 1519, d: 284, m: 0, t: 0 });
    points.push({ a: 1536, b: 252, c: 1537, d: 293, m: 0, t: 0 });
    points.push({ a: 1554, b: 249, c: 1555, d: 300, m: 0, t: 0 });
    points.push({ a: 1352, b: 265, c: 1352, d: 294, m: 0, t: 0 });
    points.push({ a: 1328, b: 266, c: 1325, d: 292, m: 0, t: 0 });
    points.push({ a: 1298, b: 260, c: 1270, d: 289, m: 0, t: 0 });
        
    // points.push({ a: 1441, b: 244, c: 1463, d: 230, m: 0, t: 0 });
    // points.push({ a: 1447, b: 254, c: 1470, d: 254, m: 0, t: 0 });
    // points.push({ a: 1446, b: 265, c: 1456, d: 279, m: 0, t: 0 });
    // points.push({ a: 1428, b: 268, c: 1428, d: 286, m: 0, t: 0 });
    // points.push({ a: 1405, b: 267, c: 1402, d: 287, m: 0, t: 0 });
    // points.push({ a: 1365, b: 264, c: 1365, d: 286, m: 0, t: 0 });
    
    // points.push({ a: 1258, b: 131, c: 1309, d: 131, m: 0, t: -1 });
    // points.push({ a: 1281, b: 145, c: 1325, d: 143, m: 0, t: -1 });
    points.push({ a: 1304, b: 160, c: 1335, d: 153, m: 0, t: -1 });
    points.push({ a: 1345, b: 161, c: 1335, d: 174, m: 0, t: -1 });

    return points;
}