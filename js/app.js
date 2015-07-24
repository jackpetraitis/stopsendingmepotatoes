App = Ember.Application.create();

App.Router.map(function() {
    this.resource('why');
    this.resource('Potatoes');
    this.resource('Potato',  {path:'/potato/:potato_id'});
});

DS.RESTAdapter.reopen({
    host: 'http://stopsendingmepotatoes.com:9001'
});
var attr = DS.attr;
App.Potato = DS.Model.extend({
    MealType: DS.attr('string'),
    RecipeTitle: DS.attr('string'),
    PrepTime: DS.attr('string'),
    CookTime: DS.attr('string'),
    ServingYield: DS.attr('string'),
    SourceFormat: DS.attr('string'),
    SourceInformation: DS.attr('string'),
    Ingredients: DS.attr('string'),
    CookingMethod: DS.attr('string')
});

App.PotatoesRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('potato');
    }
});
App.PotatoRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('potatos', params.id);
    }
});
App.PotatoesController = Ember.Controller.extend({
    
});





