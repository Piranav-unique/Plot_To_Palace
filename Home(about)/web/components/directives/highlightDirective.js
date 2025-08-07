app.directive('highlight', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('mouseenter', function() {
                element.css('background-color', attrs.highlightColor || 'yellow');
            });
            element.on('mouseleave', function() {
                element.css('background-color', '');
            });
        }
    };
});