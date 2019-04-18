/**
 *
 */




var log = function(message, level = 'primary') {

    $('#combatLogs').removeClass('alert-primary')
                    .removeClass('alert-secondary')
                    .removeClass('alert-success')
                    .removeClass('alert-danger')
                    .removeClass('alert-warning')
                    .removeClass('alert-info')
                    .removeClass('alert-light')
                    .removeClass('alert-dark')
                    .addClass('alert-' + level)
                    .text(message)

}

let hero = new Personnage("Hermione l'elfe", false);
let boss = new Personnage("Dracula le super Sayen", true);
let combat = new Combat(hero, boss);

// console.log(combat);

var refreshData = function () {
    Object.keys(hero).forEach(k => {
        if (!(hero[k] instanceof Function)) {
            $('#' + k + 'HeroValue').text(hero[k]);
        }
    });

    Object.keys(boss).forEach(k => {
        if (!(boss[k] instanceof Function)) {
            $('#' + k + 'BossValue').text(boss[k]);
        }
    });
}

refreshData();

$(function() {

    $('#heroAttackBase').on('click', function() {
        combat.baseAttack(hero, boss);
    });

    $('#heroAttackSpecial').on('click', function() {
        combat.specialAttack(hero, boss);
    });

    $('#heroDodge').on('click', function() {
        combat.baseAttack(hero, boss);
    });

    $('#heroHeal').on('click', function() {
        combat.baseAttack(hero, boss);
    });

    $('#bossAttackBase').on('click', function() {
        combat.baseAttack(boss, hero);
    });

    $('#bossAttackSpecial').on('click', function() {
        combat.specialAttack(boss, hero);
    });

    $('#bossDodge').on('click', function() {

    });

    $('#bossHeal').on('click', function() {

    });

})