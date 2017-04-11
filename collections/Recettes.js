Recettes = new Mongo.Collection('recettes');

Recettes.allow({
  insert: function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
})

Ingredient = new SimpleSchema({
  name: {
    type: String,
    label:"Nom de l'ingrédient"
  },
  quantité: {
    type: String,
    label:"Quantité"
  }
});

RecetteSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Nom de la recette"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [Ingredient]
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  auteur: {
    type: String,
    label: "Auteur",
    autoValue: function() {
      return this.userId
    },
    autoform:{
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Crée",
    autoValue: function() {
      return new Date()
    },
    autoform:{
      type: "hidden"
    }
  }
});

Meteor.methods({
  toggleMenuItem: function(id, currentState){
    Recettes.update(id, {
      $set: {
        inMenu: !currentState
      }
    });
  }
})

Recettes.attachSchema( RecetteSchema );
