class Combat {

    perso;
    boss;

    constructor(perso, boss) {
        this.perso = perso;
        this.boss = boss;
    }

    baseAttack(attacker, defender) {

        defender.health -= attacker.getAttackBaseValue();
    }
}