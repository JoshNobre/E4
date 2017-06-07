Template.NouvelleRecette.events({
  'click .fa-close' : function() {
    Session.set('nouvelleRecette', false);
  }
});

// (Pop-up)
// une fois l'autoform d'insertion ouvert si c'est un succès la pop up sera verte avec le message nouvelle recette ajoutée
//si il y a une erreur la pop up sera rouge avec le message Une erreur est survenue lors de l'ajout de la recette,le type et nom d'erreur
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
