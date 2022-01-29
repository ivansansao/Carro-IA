class Pista {
    constructor() {
        this.walls = [];
        this.make();
        this.showWalls = false;
    }

    make() {

        const pista = getPista1();

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