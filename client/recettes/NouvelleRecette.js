Template.NouvelleRecette.events({
  'click .fa-close' : function() {
    Session.set('nouvelleRecette', false);
  }
});

AutoForm.hooks({
  insertRecetteForm: {
    onSuccess: function () {
      sAlert.success('Nouvelle recette ajoutée!');
    },
    onError: function (formType, error){
      if (error) {
        sAlert.error("Une erreur est survenue lors de l'ajout de la recette:" + formType + error);
      };
    }
  }
});
