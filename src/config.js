/**
 * Paramètres du jeu
 */

const attacksPersonnageDefaultValues = {
    "base" : {
        'delay' : 0,
        'mana': 0,
        'attackValue': 0.3,         // % de attackMax
        'criticalChance' : 0.05,    // % de chances de critique
        'criticalValue' : 0.6,      // % de attackMax
    },

    "special" : {
        'delay': 3,                 // Tours d'attente
        'mana': 40,                 // Consommation de mana
        'attackValue': 0.7,         // % de attackMax
        'criticalChance': 0.10,     // % de chances de critique
        'criticalValue': 1.0,       // % de attackMax
    },
};

const attacksBossDefaultValues = {
    "base" : {
        'delay':            0,
        'mana':             0,
        'attackValue':      0.10, // % de attackMax
        'criticalChance':   0.15, // % de chances de critique
        'criticalValue':    0.5, // % de attackMax
    },

    "special" : {
        'delay':            3, // Tours d'attente
        'mana':             20, // Consommation de
        'attackValue':      0.20, // % de attackMax
        'criticalChance':   0.15, // % de chances de critique
        'criticalValue':    0.8, // % de attackMax
    },
};

const defenses = {
    "dodge": {
        'delay' : 0,
        'mana': 0,
        'healValue': 0,
        'criticalChance' : 0.8,     // % de chances de critique
        'criticalValue' : 1,        // % d'évitement
    },

    "heal": {
        'delay': 5,                 // Tours d'attente
        'mana': 40,                 // Consommation de mana
        'healValue': 0.2,           // % des PV manquants
        'criticalChance': 0.10,     // % de chances de critique
        'criticalValue': 0.4,       // % de de PV manquants
    },
};

const personnageDefaultValues = {
    "level":                1,

    "health":               100,
    "healthMax":            100,
    "healthRegenerate":     1, // (float) % de healthMax/tour

    "mana":                 120,
    "manaMax":              120,
    "manaRegenerate":       1, // (float) % de manaMax/tour

    "attackMax":            100, // (int)    Attaque max
    "heal":                 0, // (float)  % de vie manquante

}

const bossDefaultValues = {
    "health":               250,
    "healthMax":            250,
    "healthRegenerate":     5, // (float) % de healthMax/tour

    "mana":                 150,
    "manaMax":              150,
    "manaRegenerate":       5, // (float) % de manaMax/tour

    "attackMax":            100, // (int)    Attaque max
    "heal":                 0, // (float)  % de vie manquante
}