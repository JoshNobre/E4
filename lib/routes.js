if(Meteor.isClient) {
Accounts.onLogin(function(){
    FlowRouter.go('recette-livre');
});

Accounts.onLogout(function(){
    FlowRouter.go('home');
});
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
    name: 'home',
    action() {
      if(Meteor.userId()){
          FlowRouter.go('recette-livre');
      }
      BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recette-livre',{
    name: 'recette-livre',
    action() {
      BlazeLayout.render('MainLayout', {main: 'Recettes'});
    }
});

FlowRouter.route('/recette/:name',{
    name: 'recette',
    action() {
      BlazeLayout.render('MainLayout', {main: 'SimpleRecette'});
    }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action(){
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});
