App.DocumentsRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('http://localhost:5000/documents/').then(function(data){
            return data.documents;
        });
    }
});
