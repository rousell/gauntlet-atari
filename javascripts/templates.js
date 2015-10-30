define(["hbs",
        "hbs!../templates/playerSetup",
        "hbs!../templates/chooseClass",
        "hbs!../templates/chooseWeapon",
        "hbs!../templates/choosePath"],

function(handlebars, setup, chooseClass, weapon, path) {

  var templates = {};
  templates.setup = setup;
  templates.class = chooseClass;
  templates.weapon = weapon;
  templates.path = path;

  return templates;

});
