Template.Menu.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recettes');
  });
});

Template.Menu.helpers({
  recettes: () => {
    return Recettes.find({inMenu: true});
  }
});
