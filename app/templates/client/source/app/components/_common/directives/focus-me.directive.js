FocusMeDirective.$inject = ['$timeout'];
function FocusMeDirective ($timeout) {
    return {
        restrict: 'A',
        link
    };

    function link (scope, element, attrs) {
        scope.$watch(attrs.aioFocusMe, (val) => {
            if (val) {
                $timeout(() => {
                    element[0].focus();
                });
            }
        });
    }
}

export default FocusMeDirective;