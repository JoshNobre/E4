Template.Recettes.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recettes');
  });
});

Template.Recettes.helpers({
  recettes: () => {
    return Recettes.find({});
  }
});

Template.Recettes.events({
  'click .nouvelle-recette' : () => {
    Session.set('nouvelleRecette', true);
  }
})
