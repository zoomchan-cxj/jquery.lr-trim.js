;(function($){
    $.extend({
        ltrim: function(text){
            return (text||"").replace(/^\s+/g,"");
        },
        rtrim: function(text){
            return (text||"").replace(/\s+$/g,"");
        }
    })
})(window.jQuery);
