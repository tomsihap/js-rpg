class NameGenerator {
    names = [   'Eallett',
                'Sunggard',
                'Cynken',
                'Linwil',
                'Leybet',
                'Ferth',
                'Nasceofred',
                'Caread',
                'Barithas',
                'Hes',
                'Laybald',
                'Lettlac',
                'Thasing',
                'Nyafrith',
                'Freacuth',
                'Grim',
                'Burjeff',
                'Berda',
                'Roy-thae',
                'Wilu'
            ];

    adjectifs = [
        'le Grand',
        'la Belle',
        'le Fort',
        'le Julien',
        'le Pourfendeur',
        'l\'Elfe',
        'l\'Empereur',
        'l\'Orc',
    ];

    getRandomName() {
        let name = this.names[Math.floor(Math.random() * this.names.length)];
        let adjectif = this.adjectifs[Math.floor(Math.random() * this.adjectifs.length)];

        return name + ' ' + adjectif;
    }
}