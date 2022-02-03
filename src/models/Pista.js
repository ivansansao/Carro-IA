class Pista {
    constructor() {
        this.walls = [];
        this.make();
        this.showWalls = true;
        this.ranhuras = getRanhuras2();
    }

    make() {

        let pista

        if (selectedPista == 1) {
            pista = getPista1();
        } else if (selectedPista == 2) {
            pista = getPista2();
        }

        for (const w of pista) {
            const wall = new Wall(createVector(w.a, w.b), createVector(w.c, w.d));
            this.walls.push(wall);
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
                wall.show()
            }
        }
        for (const r of this.ranhuras) {

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
    points.push({ a: 1854, b: 63, c: 1498, d: 61 });
    points.push({ a: 1498, b: 61, c: 1466, d: 97 });
    points.push({ a: 1466, b: 97, c: 1304, d: 100 });
    points.push({ a: 1304, b: 100, c: 1284, d: 112 });
    points.push({ a: 1284, b: 112, c: 1263, d: 101 });
    points.push({ a: 1263, b: 101, c: 1153, d: 102 });
    points.push({ a: 1153, b: 102, c: 1214, d: 157 });
    points.push({ a: 1214, b: 157, c: 1268, d: 160 });
    points.push({ a: 1268, b: 160, c: 1424, d: 251 });
    points.push({ a: 1424, b: 251, c: 1306, d: 246 });
    // points.push({ a: 1306, b: 246, c: 993, d: 26 });
    // points.push({ a: 993, b: 26, c: 892, d: 29 });
    // points.push({ a: 892, b: 29, c: 893, d: 340 });
    // points.push({ a: 893, b: 340, c: 821, d: 370 });
    // points.push({ a: 821, b: 370, c: 710, d: 373 });
    // points.push({ a: 710, b: 373, c: 641, d: 333 });
    // points.push({ a: 641, b: 333, c: 632, d: 224 });
    // points.push({ a: 632, b: 224, c: 412, d: 218 });
    // points.push({ a: 412, b: 218, c: 421, d: 450 });
    // points.push({ a: 421, b: 450, c: 473, d: 514 });
    // points.push({ a: 473, b: 514, c: 728, d: 509 });
    // points.push({ a: 728, b: 509, c: 815, d: 593 });
    // points.push({ a: 815, b: 593, c: 856, d: 555 });
    // points.push({ a: 856, b: 555, c: 806, d: 504 });
    // points.push({ a: 806, b: 504, c: 1112, d: 507 });
    // points.push({ a: 1112, b: 507, c: 1181, d: 441 });
    // points.push({ a: 1181, b: 441, c: 1606, d: 436 });
    // points.push({ a: 1606, b: 436, c: 1607, d: 506 });
    // points.push({ a: 1607, b: 506, c: 1212, d: 498 });
    // points.push({ a: 1212, b: 498, c: 1154, d: 557 });
    // points.push({ a: 1154, b: 557, c: 914, d: 556 });
    // points.push({ a: 914, b: 556, c: 915, d: 655 });
    // points.push({ a: 915, b: 655, c: 730, d: 652 });
    // points.push({ a: 730, b: 652, c: 724, d: 559 });
    // points.push({ a: 724, b: 559, c: 417, d: 558 });
    // points.push({ a: 417, b: 558, c: 361, d: 473 });
    // points.push({ a: 361, b: 473, c: 349, d: 242 });
    // points.push({ a: 349, b: 242, c: 416, d: 169 });
    // points.push({ a: 416, b: 169, c: 854, d: 163 });
    // points.push({ a: 854, b: 163, c: 795, d: 119 });
    // points.push({ a: 795, b: 119, c: 794, d: 75 });
    // points.push({ a: 794, b: 75, c: 857, d: 27 });
    // points.push({ a: 857, b: 27, c: 20, d: 28 });
    // points.push({ a: 20, b: 28, c: 106, d: 242 });
    // points.push({ a: 106, b: 242, c: 25, d: 597 });
    // points.push({ a: 25, b: 597, c: 27, d: 920 });
    // points.push({ a: 27, b: 920, c: 1308, d: 924 });
    // points.push({ a: 1308, b: 924, c: 1373, d: 782 });
    // points.push({ a: 1373, b: 782, c: 1339, d: 713 });
    // points.push({ a: 1339, b: 713, c: 1513, d: 710 });
    // points.push({ a: 1513, b: 710, c: 1485, d: 771 });
    // points.push({ a: 1485, b: 771, c: 1551, d: 866 });
    // points.push({ a: 1551, b: 866, c: 1854, d: 862 });
    // points.push({ a: 1854, b: 862, c: 1862, d: 590 });
    // points.push({ a: 1862, b: 590, c: 1826, d: 542 });
    // points.push({ a: 1826, b: 542, c: 1830, d: 437 });
    points.push({ a: 1830, b: 437, c: 1858, d: 418 });
    points.push({ a: 1858, b: 418, c: 1855, d: 64 });

    // Parece interna da pista.
    points.push({ a: 1756, b: 221, c: 1514, d: 219 });
    points.push({ a: 1514, b: 219, c: 1461, d: 149 });
    points.push({ a: 1461, b: 149, c: 1354, d: 147 });
    points.push({ a: 1354, b: 147, c: 1516, d: 241 });
    points.push({ a: 1516, b: 241, c: 1610, d: 245 });
    points.push({ a: 1610, b: 245, c: 1615, d: 315 });
    points.push({ a: 1615, b: 315, c: 1245, d: 312 });
    // points.push({ a: 1245, b: 312, c: 1072, d: 183 });
    // points.push({ a: 1072, b: 183, c: 1005, d: 181 });
    // points.push({ a: 1005, b: 181, c: 1004, d: 371 });
    // points.push({ a: 1004, b: 371, c: 832, d: 428 });
    // points.push({ a: 832, b: 428, c: 654, d: 424 });
    // points.push({ a: 654, b: 424, c: 517, d: 314 });
    // points.push({ a: 517, b: 314, c: 500, d: 320 });
    // points.push({ a: 500, b: 320, c: 499, d: 371 });
    // points.push({ a: 499, b: 371, c: 653, d: 438 });
    // points.push({ a: 653, b: 438, c: 1006, d: 439 });
    // points.push({ a: 1006, b: 439, c: 1111, d: 351 });
    // points.push({ a: 1111, b: 351, c: 1692, d: 344 });
    // points.push({ a: 1692, b: 344, c: 1714, d: 475 });
    // points.push({ a: 1714, b: 475, c: 1680, d: 577 });
    // points.push({ a: 1680, b: 577, c: 1263, d: 570 });
    // points.push({ a: 1263, b: 570, c: 1182, d: 639 });
    // points.push({ a: 1182, b: 639, c: 1017, d: 640 });
    // points.push({ a: 1017, b: 640, c: 1011, d: 712 });
    // points.push({ a: 1011, b: 712, c: 628, d: 705 });
    // points.push({ a: 628, b: 705, c: 628, d: 649 });
    // points.push({ a: 628, b: 649, c: 335, d: 629 });
    // points.push({ a: 335, b: 629, c: 271, d: 513 });
    // points.push({ a: 271, b: 513, c: 258, d: 237 });
    // points.push({ a: 258, b: 237, c: 373, d: 108 });
    // points.push({ a: 373, b: 108, c: 684, d: 103 });
    // points.push({ a: 684, b: 103, c: 681, d: 95 });
    // points.push({ a: 681, b: 95, c: 217, d: 97 });
    // points.push({ a: 217, b: 97, c: 158, d: 564 });
    // points.push({ a: 158, b: 564, c: 171, d: 773 });
    // points.push({ a: 171, b: 773, c: 206, d: 809 });
    // points.push({ a: 206, b: 809, c: 1117, d: 817 });
    // points.push({ a: 1117, b: 817, c: 1037, d: 656 });
    // points.push({ a: 1037, b: 656, c: 1198, d: 652 });
    // points.push({ a: 1198, b: 652, c: 1278, d: 587 });
    // points.push({ a: 1278, b: 587, c: 1674, d: 594 });
    // points.push({ a: 1674, b: 594, c: 1669, d: 734 });
    // points.push({ a: 1669, b: 734, c: 1717, d: 736 });
    // points.push({ a: 1717, b: 736, c: 1711, d: 556 });
    // points.push({ a: 1711, b: 556, c: 1733, d: 399 });
    points.push({ a: 1733, b: 399, c: 1753, d: 380 });
    points.push({ a: 1753, b: 380, c: 1756, d: 221 });

    return points;

}
function getRanhuras2() {

    const points = [];

    points.push({ a: 1568, b: 72, c: 1569, d: 202, m: 0, t: 0 });
    points.push({ a: 1530, b: 79, c: 1531, d: 196, m: 0, t: 0 });
    points.push({ a: 1497, b: 101, c: 1498, d: 148, m: 0, t: 0 });
    points.push({ a: 1462, b: 110, c: 1463, d: 136, m: 0, t: 0 });
    points.push({ a: 1417, b: 113, c: 1417, d: 135, m: 0, t: 0 });
    points.push({ a: 1375, b: 113, c: 1376, d: 133, m: 0, t: 0 });
    points.push({ a: 1334, b: 113, c: 1334, d: 134, m: 0, t: 0 });
    points.push({ a: 1240, b: 109, c: 1260, d: 109, m: 0, t: 0 });
    points.push({ a: 1345, b: 161, c: 1335, d: 174, m: 0, t: 0 });
    points.push({ a: 1359, b: 165, c: 1348, d: 180, m: 0, t: 0 });
    points.push({ a: 1368, b: 172, c: 1358, d: 184, m: 0, t: 0 });
    points.push({ a: 1378, b: 177, c: 1366, d: 192, m: 0, t: 0 });
    points.push({ a: 1387, b: 181, c: 1374, d: 198, m: 0, t: 0 });
    points.push({ a: 1402, b: 187, c: 1383, d: 205, m: 0, t: 0 });
    points.push({ a: 1410, b: 193, c: 1394, d: 212, m: 0, t: 0 });
    points.push({ a: 1424, b: 201, c: 1408, d: 220, m: 0, t: 0 });
    points.push({ a: 1436, b: 209, c: 1420, d: 228, m: 0, t: 0 });
    points.push({ a: 1450, b: 218, c: 1430, d: 235, m: 0, t: 0 });
    points.push({ a: 1441, b: 244, c: 1463, d: 230, m: 0, t: 0 });
    points.push({ a: 1447, b: 254, c: 1470, d: 254, m: 0, t: 0 });
    points.push({ a: 1446, b: 265, c: 1456, d: 279, m: 0, t: 0 });
    points.push({ a: 1428, b: 268, c: 1428, d: 286, m: 0, t: 0 });
    points.push({ a: 1405, b: 267, c: 1402, d: 287, m: 0, t: 0 });
    points.push({ a: 1365, b: 264, c: 1365, d: 286, m: 0, t: 0 });

    points.push({ a: 1266, b: 112, c: 1233, d: 128, m: 0, t: -1 });
    points.push({ a: 1282, b: 119, c: 1268, d: 156, m: 0, t: -1 });
    points.push({ a: 1304, b: 126, c: 1289, d: 158, m: 0, t: -1 });
    points.push({ a: 1325, b: 136, c: 1308, d: 164, m: 0, t: -1 });

    return points;
}