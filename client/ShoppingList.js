Template.ShoppingList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recettes');
  });
});

Template.ShoppingList.helpers({
  shoppingList: () => {
    return Recettes.find({inMenu: true});
  }
});
