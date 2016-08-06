define(['jquery'], function( $ ){

    var jsLoading = (function() {

        var instance;

        function jsLoading ( _config ){
            this.config = {
                wrap: 'body'
            };
            this.wrap = null;
            this.self = null;
            this.init( _config );
        }

        jsLoading.prototype.init = function( _config ){
          $.extend(this.config, _config);
          this.wrap = $(this.config.wrap);
          this.create();
        }

        jsLoading.prototype.create = function(){
            var htmlStr = '';

            htmlStr += '<div class="js-loading-wrap">';
            htmlStr += '<div class="ball-spin-fade-loading">';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '<div></div>';
            htmlStr += '</div>';
            htmlStr += '</div>';

            this.wrap.append($(htmlStr));
            this.self = $('.js-loading-wrap');
        }

        jsLoading.prototype.hide = function(){
            this.self.fadeOut();
        }

        jsLoading.prototype.show = function(){
            this.self.fadeIn();
        }

        return {
            getIntance: function( _config ){
                if (!instance) {
                    instance = new jsLoading( _config );
                }
                return instance;
            }
        };

    })();


    return jsLoading;

});
