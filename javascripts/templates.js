define(["hbs",
        "hbs!../templates/playerSetup",
        "hbs!../templates/chooseClass",
        "hbs!../templates/chooseWeapon",
        "hbs!../templates/choosePath",
        "hbs!../templates/battleground"],


function(handlebars, setup, chooseClass, weapon, path, battle) {

  var templates = {};
  templates.setup = setup;
  templates.class = chooseClass;
  templates.weapon = weapon;
  templates.path = path;
  templates.battle = battle;

  return templates;

});
