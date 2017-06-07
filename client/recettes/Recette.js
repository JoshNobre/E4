Template.Recette.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Recette.helpers({
  updateRecetteId: function () {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});

Template.Recette.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click  .fa-trash' : function() {
    console.log(this);
    Meteor.call('deleteRecette', this._id);
  },
  'click .fa-pencil' : function(event, template) {
    template.editMode.set(!template.editMode.get());
  }
});
// (Pop-up)
//si il y a une erreur lors de la modification de la recette, la pop up sera rouge avec le message
//Une erreur est survenue lors de la modification de la recette,le type et nom d'erreur 
AutoForm.hooks({
  updateRecetteId: {
    onError: function (formType, error){
      if (error) {
        sAlert.error("Une erreur est survenue lors de la modification de la recette:" + formType + error);
      };
    }
  }
});
