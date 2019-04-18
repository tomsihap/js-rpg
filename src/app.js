/**
 *
 */


let personnage = new Personnage(false);
let boss = new Personnage(true);


let combat = new Combat(personnage, boss);

console.log(combat);