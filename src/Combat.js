class Combat {

    perso;
    boss;

    constructor(perso, boss) {
        this.perso = perso;
        this.boss = boss;
    }

    baseAttack(attacker, defender) {
        let strengh = attacker.getAttackBaseValue();
        let manaConsumption = attacker.attacks.base.mana;

        return this.attack(attacker, defender, strengh, manaConsumption);
    }

    specialAttack(attacker, defender) {
        let strengh = attacker.getAttackSpecialValue();
        let manaConsumption = attacker.attacks.special.mana;

        return this.attack(attacker, defender, strengh, manaConsumption);
    }

    attack(attacker, defender, strength, manaConsumption) {

        // 0. Tester si on a assez de Mana pour combattre
        if (attacker.mana >= manaConsumption) {

            // 1. Attacker attaque Defender
            log(attacker.name + ' attaque de ' + strength + ' (coût: ' + manaConsumption + ')');
            defender.health -= strength;
            attacker.mana -= manaConsumption;

            if (defender.health <= 0) {
                log(defender.name + ' est mort !', 'danger');
                // Gestion du Defender mort
                defender.health = 0;
            }
        }
        else {
            log(attacker.name + ' n\'a pas assez de mana pour attaquer !');
        }

        // 3. Mettre à jour l'affichage
        refreshData();

    }
}