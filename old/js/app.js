App = Ember.Application.create();

var myDataRef = new Firebase('https://glaring-heat-4616.firebaseio.com/');

function displayRecipes(name, text) {
    $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#recipes'));
    $('#recipes')[0].scrollTop = $('#recipes')[0].scrollHeight;

};
App.Router.map(function() {
    this.resource('why');
    this.route('Potatoes');
    this.route('Potatoe');
    this.resource('create', function(){

    })
});

App.Store = DS.Store.extend();
App.ApplicationAdapter = DS.RESTAdapter.extend({
    headers: {

    }
});
DS.RESTAdapter.reopen({
    host: 'https://glaring-heat-4616.firebaseio.com/'
});
var attr = DS.attr;

App.Potatoes = DS.Model.extend({
    MealType: attr('string'),
    RecipeTitle: attr('string'),
    PrepTime: attr('string'),
    CookTime: attr('string'),
    ServingYield: attr('string'),
    SourceFormat: attr('string'),
    SourceInformation: attr('string'),
    Ingredients: attr('string'),
    Instructions: attr('string'),
    CookingMethod: attr('string')
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        var myDataRef = new Firebase('https://glaring-heat-4616.firebaseio.com/');
        var message = {name: '', description: ''};
        myDataRef.on("value", function(snapshot) {
            message = snapshot.val();
            console.log(snapshot.val());
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        displayRecipes(message.name, message.text);
        return ['red', 'yellow', 'blue'];
    }
});
App.PotatoesRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('Potatoes');
    }
});
App.PotatoesController = Ember.ObjectController.extend({
    testProperty: "test"
});


App.PotatoeRoute = Ember.Route.extend({
    model: function(params) {
        return Potatoes.findBy('id', params.id);
    }
});
App.CreateRoute = Ember.Route.extend({
   model: function(){}
});

App.CreateController = Ember.ObjectController.extend({
    actions: {
        submitRecipe: function(){
            //do stuff like submit ember-data POST
        }
    }
});




