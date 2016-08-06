define(['jquery'], function( $ ){

    var jsGoTop = (function(){

        //接口配置和其他配置信息
        var config = {
            id: 'go-top',
            right: 10,
            bottom: 10,
        };

        //局部变量,局部方法,一般是一些小工具方法,不归属于模块本身的方法
        var wrap = null,
            el = null;

        return {
            //总入口,在页面底部调用
            init:function( _config ){
                //混合配置
                $.extend(config, _config);
                this._create();
                this._bind();
            },
            _create:function(){
                //创建html结构的功能
                wrap = $('body');

                var htmlStr = '';

                htmlStr += '<div id="' + config.id + '" class="js-go-top" style="position: fixed; right: ' + config.right + 'px; bottom: ' + config.bottom + 'px; ">';
                htmlStr += '<i class="iconfont icon-gotop icon-size-32"></i>';
                htmlStr += '</div>';

                wrap.append($(htmlStr));
                el = $('#' + config.id);

            },
            _bind:function(){
                //绑定事件的功能
                el.on('click', this._goTop);
                $(document).on('scroll', this._scroll);
            },
            _goTop: function(){
                wrap.animate({ scrollTop: 0 }, 300 );
            },
            _scroll: function(e) {
    			wrap.scrollTop() > 0 ? el.fadeIn() : el.fadeOut();
    		}
        }
    })();

    return jsGoTop;

});
