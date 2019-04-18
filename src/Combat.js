class Combat {

    perso;
    boss;

    constructor(perso, boss) {
        this.perso = perso;
        this.boss = boss;
        this.perso.tour = 0;
        this.boss.tour = 0;
    }

    dodgeDefense(attacker, defender) {
        attacker.lastAction = 'defense-dodge';

        log('Tour ' + attacker.tour + ' de ' + attacker.name + ': Défense (dodge)', 'success');

        if (!attacker.isBoss) {
            this.iaPlay(attacker, defender);
        }
    }

    healDefense(attacker, defender) {
        attacker.lastAction = 'defense-heal';

        let heal = attacker.getDefenseHealValue();
        let manaConsumption = attacker.defenses.heal.mana;

        let type = 'heal';

        return this.defense(attacker, defender, heal, manaConsumption, type);
    }

    defense(attacker, defender, heal, manaConsumption, type) {

        attacker.tour++;
        if (attacker.mana >= manaConsumption) {
            attacker.health += heal;
            attacker.mana -= manaConsumption;
            log('Tour ' + attacker.tour + ' de ' + attacker.name + ': Défense (' + type + ') de ' + heal + ' (coût: ' + manaConsumption + ')', 'success');

        }
        else {
            log(attacker.name + ' n\'a pas assez de mana pour défendre !');
        }

        refreshData();

    }

    baseAttack(attacker, defender) {

        attacker.lastAction = 'attack-base';

        let strengh = attacker.getAttackBaseValue();
        let manaConsumption = attacker.attacks.base.mana;

        let type = 'base';

        return this.attack(attacker, defender, strengh, manaConsumption, type);
    }

    specialAttack(attacker, defender) {

        attacker.lastAction = 'attack-special';

        let strengh = attacker.getAttackSpecialValue();
        let manaConsumption = attacker.attacks.special.mana;

        let type = 'special';

        return this.attack(attacker, defender, strengh, manaConsumption, type);
    }

    attack(attacker, defender, strength, manaConsumption, type) {

        attacker.tour++;

        // 0. Tester si on a assez de Mana pour combattre
        if (attacker.mana >= manaConsumption) {

            // 1. Attacker attaque Defender
            log('Tour ' + attacker.tour + ' de ' + attacker.name + ': Attaque ('+ type +') de ' + strength + ' (coût: ' + manaConsumption + ')');
            defender.health -= strength;
            attacker.mana -= manaConsumption;

            if (defender.health <= 0) {
                log(defender.name + ' est mort !', 'danger');
                // Gestion du Defender mort
                defender.health = 0;

                $('button').attr('disabled', true);
            }

            else {
                if (!attacker.isBoss) {
                    if (type !== 'dodge') {
                        this.iaPlay(attacker, defender);
                    }
                }
            }
        }
        else {
            log(attacker.name + ' n\'a pas assez de mana pour attaquer !');
        }

        // 3. Mettre à jour l'affichage
        refreshData();

    }

    /**
     * Gestion de l'IA du boss
     * @param {Personnage} attacker Héros attaquant
     * @param {Personnage} defender Boss qui va contre-attaquer
     */
    iaPlay(attacker, defender) {

        let rand = Math.floor(Math.random() * 4); // Random number [0, 1]

        switch(rand) {
            case 0:
                if (attacker.lastAction == 'defense-dodge') {
                    attack(attacker, defender, defender.health * 0.1, 0, 'dodge');
                }
                else {
                    this.baseAttack(defender, attacker);
                }
                break;
            case 1:
                if (attacker.lastAction == 'defense-dodge') {
                    attack(attacker, defender, defender.health * 0.1, 0, 'dodge');
                }
                else {
                    this.specialAttack(defender, attacker);
                }
                break;
            case 2:
                if (attacker.lastAction == 'defense-dodge') {
                    attack(defender, attacker, attacker.health * 0.1, 0, 'dodge');
                }
                else {
                    this.healDefense(defender, attacker);
                }
                break;
            case 3:

                switch (attacker.lastAction) {
                    case 'defense-dodge':
                        break;
                    case 'attack-base':
                        attack(defender, attacker, attacker.health * 0.1, 0, 'dodge');
                        break;
                    case 'attack-special':
                        attack(defender, attacker, attacker.health * 0.1, 0, 'dodge');
                        break;
                    case 'defense-heal':
                        attack(defender, attacker, defender.health * 0.1, 0, 'dodge');
                        break;
                    default:
                }
                this.dodgeDefense(defender, attacker);
                break;
            default:
                this.baseAttack(defender, attacker);
        }
    }
}