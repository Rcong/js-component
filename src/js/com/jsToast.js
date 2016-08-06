define(['jquery'],function ($) {

    var jsToast = (function() {

        var instance;

        function jsToast( _config ){
            this.config = {
                wrap: 'body',
                message: 'jsToast Test',
                time: 3000
            };
            this.wrap = null;
            this.self = null;
            this.init( _config );
        }

        jsToast.prototype.init = function( _config ){
            $.extend(this.config, _config);
            this.wrap = $(this.config.wrap);
            this.create();
        }

        jsToast.prototype.create = function(){

            var htmlStr = '';

            htmlStr += '<div class="js-toast-message">';
            htmlStr += '<span>' + this.config.message + '</span>';
            htmlStr += '</div>';

            this.wrap.append($(htmlStr));
            this.self = $('.js-toast-message');

        }

        jsToast.prototype.show = function(){
            this.self.fadeIn();
            var _this = this;
            setTimeout(function(){
                _this.self.fadeOut();
            }, this.config.time);
        }

        return {
            getIntance: function( _config ){
                if (!instance) {
                    instance = new jsToast( _config );
                }
                return instance;
            }
        };

    })();

    return jsToast;

});
