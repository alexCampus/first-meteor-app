Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', function(){
    this.render('accueil');
});

Router.route('/register', function(){
    this.render('register');
});
Router.route('/login', function(){
    this.render('login');
});

Router.route('/posts', {
    name: "posts",
    data: function(){
        var posts = Posts.find();
        
        return {
            posts: posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.onBeforeAction(function() {

    if (!Meteor.userId()) { // Si l'utilisateur n'est pas connecté, on lui affiche le formulaire de login
        this.render("login");
    } else {
        this.next(); // Sinon, la requête continue normalement
    }
}, {
    except: [
        "login" // Dans tous les cas, la page de login doit être accessible
    ]
});