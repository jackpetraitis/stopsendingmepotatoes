App = Ember.Application.create();

App.Router.map(function() {
    this.resource('why');
    this.resource('potatoes');
});

App.Store = DS.Store.extend();
DS.RESTAdapter.reopen({
    host: 'http://stopsendingmepotatoes.com:9001'
});
var attr = DS.attr;
App.RecipeModel = Ember.Object.extend({
    MealType: null,
    RecipeTitle: null,
    PrepTime: null,
    CookTime: null,
    ServingYield: null,
    SourceFormat: null,
    SourceInformation: null,
    Ingredients: null,
    CookingMethod: null
});






