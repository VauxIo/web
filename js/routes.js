App.DocumentsRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('http://localhost:5000/documents/').then(function(data){
            return data.documents;
        });
    }
});

App.DocumentRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.$.getJSON('http://localhost:5000/documents/'+params.id+'/').then(function(data){
            data.path = 'http://localhost:5000/download/'+data.id;
            return data;
        });
    }
})

App.UploadRoute = Ember.Route.extend({

});
