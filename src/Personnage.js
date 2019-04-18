class Personnage {

    isBoss;
    name;
    level;
    xp;

    tour;
    lastAction;

    health;
    healthMax;
    healthRegenerate;

    mana;
    manaMax;
    manaRegenerate;

    attackMax;      // (int)    Attaque max
    heal;           // (float)  % de vie manquante

    attacks;
    defenses;

    constructor(name, isBoss) {

        this.name       = name;
        this.isBoss     = isBoss;
        this.level      = 1;
        this.health     = isBoss ? bossDefaultValues.health : personnageDefaultValues.health;
        this.healthMax  = isBoss ? bossDefaultValues.healthMax : personnageDefaultValues.healthMax;
        this.healthRegenerate = isBoss ? bossDefaultValues.healthRegenerate : personnageDefaultValues.healthRegenerate;
        this.mana       = isBoss ? bossDefaultValues.mana : personnageDefaultValues.mana;
        this.manaMax    = isBoss ? bossDefaultValues.manaMax : personnageDefaultValues.manaMax;
        this.manaRegenerate   = isBoss ? bossDefaultValues.manaRegenerate : personnageDefaultValues.manaRegenerate;
        this.attackMax  = isBoss ? bossDefaultValues.attackMax : personnageDefaultValues.attackMax;
        this.heal       = isBoss ? bossDefaultValues.heal : personnageDefaultValues.heal;

        this.attacks = isBoss ? attacksBossDefaultValues : attacksPersonnageDefaultValues;
        this.defenses = defenses;

    }

    /**
     * Returns Heal value
     */
    getDefenseHealValue = function() {

        // Chances de critique (entre 0.00 et 0.99)
        let critical = Math.random();

        // On teste si on a passé le seuil de critique
        let isCritical = (critical <= this.defenses.heal.criticalChance) ? true : false;

        // On récupère l'attackValue selon si on a fait un coup critique
        let healValue = (isCritical) ? this.defenses.heal.criticalValue : this.defenses.heal.healValue;

        let healthLeft = this.healthMax - this.health;

        let heal = healValue * healthLeft;

        return heal;

    }
    /**
     * Returns Base Attack value
     */
    getAttackBaseValue = function() {
        // Chances de critique (entre 0.00 et 0.99)
        let critical = Math.random();

        // On teste si on a passé le seuil de critique
        let isCritical = (critical <= this.attacks.base.criticalChance) ? true : false;

        // On récupère l'attackValue selon si on a fait un coup critique
        let attackValue = (isCritical) ? this.attacks.base.criticalValue : this.attacks.base.attackValue;

        // On calcule la puissance par rapport à l'attaque max
        let puissance = this.attackMax * attackValue;

        return puissance;
    }

    /**
     * Returns Special Attack value
     */
    getAttackSpecialValue = function() {
        let critical    = Math.random();
        let isCritical  = (critical <= this.attacks.special.criticalChance) ? true : false;
        let attackValue = (isCritical) ? this.attacks.special.criticalValue : this.attacks.special.attackValue;
        let puissance   = this.attackMax * attackValue;

        return puissance;
    }


    defenseDodge = function(ennemy) {

    }

    defenseHeal = function() {

    }
}