import { Meteor } from 'meteor/meteor';

Meteor.methods({
  deleteRecette: function(id) {
    Recettes.remove(id);
  }
});
