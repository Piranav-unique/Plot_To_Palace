app.factory('plottoFactory', function() {
    var factory = {};

    factory.getPlottoInfo = function() {
        return {
            name: 'PlottoPalace',
            version: '1.0.0',
            author: 'AI Assistant'
        };
    };

    return factory;
});