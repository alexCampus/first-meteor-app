Posts = new Mongo.Collection("posts");

Posts.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

Posts.attachSchema(new SimpleSchema({
    title: { // Définition du champs "title"
        type  : String,
        label : 'Titre',
        max   : 200
    },
    author: { // Définition du champs "author"
        type  : String,
        label : "Auteur",
        max   : 200
    },
    content: { // Définition du champs "content"
        type     : String,
        label    : "Contenu",
        max      : 2000,
        autoform : {
            afFieldInput : { // Modification du Champs dans le form
                type : 'textarea',
                rows : 3
            }
        }
    },
    createdAt: { // Définition du champs "createdAt"
        type       : Date,
        denyUpdate : true, // On refuse de mettre ce champs à jour (pas de "update")
        autoValue  : function(){ // Particularité ici, la valeur est attribuée automatiquement
            if(this.isInsert){ // Uniquement sur les "inserts"...
                return new Date;
            }
            else if(this.isUpsert){ // ... ou sur les "upserts"
                return {$setOnInsert: new Date};
            }
            else{
                this.unset(); // Sinon on ne touche pas au champs
            }
        },
        autoform : {
            omit : true
        }
    }
}));