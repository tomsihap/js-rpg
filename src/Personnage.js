class Personnage {

    isBoss;
    level;

    health;
    healthMax;
    healthRegenerate;

    mana;
    manaMax;
    manaRegenerate;

    attackMax;      // (int)    Attaque max
    heal;           // (float)  % de vie manquante


    constructor(isBoss) {

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

    }

    /**
     * Returns Base Attack value
     */
    getAttackBaseValue = function() {
        // Chances de critique (entre 0.00 et 0.99)
        let critical = Math.random();

        // On teste si on a passé le seuil de critique
        let isCritical = (critical <= attacksPersonnageDefaultValues.base.criticalChance) ? true : false;

        // On récupère l'attackValue selon si on a fait un coup critique
        let attackValue = (isCritical) ? attacksPersonnageDefaultValues.base.criticalValue : attacksPersonnageDefaultValues.base.attackValue;

        // On calcule la puissance par rapport à l'attaque max
        let puissance = this.attackMax * attackValue;

        return puissance;
    }

    /**
     * Returns Special Attack value
     */
    getAttackSpecialValue = function() {
        let critical    = Math.random();
        let isCritical  = (critical <= attacksPersonnageDefaultValues.special.criticalChance) ? true : false;
        let attackValue = (isCritical) ? attacksPersonnageDefaultValues.special.criticalValue : attacksPersonnageDefaultValues.special.attackValue;
        let puissance   = this.attackMax * attackValue;

        return puissance;

    }


    defenseDodge = function(ennemy) {

    }

    defenseHeal = function() {

    }
}