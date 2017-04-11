Meteor.publish('recettes', function(){
  return Recettes.find({auteur: this.userId});
});

Meteor.publish('simpleRecette', function(name){
  check(name, String);
  return Recettes.find({name: name});
});
