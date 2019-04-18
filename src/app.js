/**
 *
 */




var log = function(message, level = 'primary') {

    $('#combatLogs').prepend('<div></div>');

    let log = $('#combatLogs').find('div:first-child').first();

    log.addClass('alert')
        .addClass('alert-' + level)
        .text(message)

}

let generator = new NameGenerator;

let hero = new Personnage(generator.getRandomName(), false);
let boss = new Personnage(generator.getRandomName(), true);

$('#heroImage').attr('src', 'https://robohash.org/' + hero.name + '?set=set4');
$('#bossImage').attr('src', 'https://robohash.org/' + boss.name + '?set=set2');

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

    /**
     * Health and Mana bars
     */

    $('#healthBarHero').css('width', (hero.health/hero.healthMax)*100 + "%")
                    .attr('aria-value-now', hero.health)
                    .text(hero.health + '/' + hero.healthMax)

    $('#healthBarBoss').css('width', (boss.health/boss.healthMax)*100 + "%")
                    .attr('aria-value-now', boss.health)
                    .text(boss.health + '/' + boss.healthMax)

    $('#manaBarHero').css('width', (hero.mana/hero.manaMax)*100 + "%")
                    .attr('aria-value-now', hero.mana)
                    .text(hero.mana + '/' + hero.manaMax)

    $('#manaBarBoss').css('width', (boss.mana/boss.manaMax)*100 + "%")
                    .attr('aria-value-now', boss.mana)
                    .text(boss.mana + '/' + boss.manaMax)

    $('#heroLastAction').attr('src', 'assets/img/'+hero.lastAction + '.png')
    $('#bossLastAction').attr('src', 'assets/img/'+boss.lastAction + '.png')
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
        combat.dodgeDefense(hero, boss);
    });

    $('#heroHeal').on('click', function() {
        combat.healDefense(hero, boss);
    });


})