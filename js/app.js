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
App.Store = Ember.Object.extend({
    read: function(id){
        var message = null;
        var xhr = $.ajax({
            url: 'http://stopsendingmepotatoes.com:9001/potatos',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ 'id': id }),
            type: 'POST',
            async: false,
            success: function(data){
                message = data;
            }
        });
        if(xhr.status != 200){
            message = { errorCode: xhr.status, errorMessage: xhr.statusText};
        }

        return message;
    }
})





