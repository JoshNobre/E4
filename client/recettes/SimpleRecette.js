Template.SimpleRecette.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var name = FlowRouter.getParam('name');
    self.subscribe('simpleRecette', name);
  });
});
Template.SimpleRecette.helpers({
  recette: () => {
    var name = FlowRouter.getParam('name');
    return Recettes.findOne({name: name});
  }
})
