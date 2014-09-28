['application', 'menu', 'documents', 'document'].forEach(function(template){
    $.ajax({
        url: '/hbs/'+template+'.hbs',
        dataType: 'text',
        async: false,
        success: function (response) {
            Ember.TEMPLATES[template] = Ember.Handlebars.compile(response);
        }
    });
});

var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

App.Router.map(function () {
    this.resource('documents', { path: '/' });
    this.resource('document', { path: '/:id' });
});
