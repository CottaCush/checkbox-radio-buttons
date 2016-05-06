(function($){
    var defaults = {
        action: 'disable',
        formAttribute: 'data-keyboard-submit',
        eventNamespace: '.Terra.form.keyboard-submit',
        inputSelector: 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):not([type="range"])'
    };

    var keyboardSubmit = function(form, action) {
        var eventName = 'keypress' + defaults.eventNamespace;

        // Ensure that the form is always a jquery object
        if (typeof form.jquery === 'undefined')
            form = $(form);

        action = (typeof action !== 'undefined') ? action : defaults.action;

        var input = form.find(defaults.inputSelector);

        switch (action) {
            case false:
            case 'false':
            case 'disable':
            case '': // mostly found with empty form data- attribute values
                disable();
                break;

            case true:
            case 'true':
            case 'enable':
                enable();
                break;
        }

        function disable() {
            $(input).off(eventName).on(eventName, function(e) {
                if(e.which === 13) { // enter or return key
                    e.preventDefault();
                    return false;
                }
            });
        }
        function enable() {
            $(input).off(eventName);
        }
    };

    // Register as a jQuery function
    $.fn.keyboardSubmit = function(action) {
        return this.each(function(){
            keyboardSubmit(this, action);
        });
    };

    // Automatically activate using the form's data- attribute.
    var attr = defaults.formAttribute;
    $('[' + attr + ']').each(function () {
        keyboardSubmit(this, $(this).attr(attr));
    });

})(jQuery);