require.config({
    // baseUrl: "src/js/com",
    paths: {
        "jquery": "libs/jquery",
        "jsEventCenter": "com/jsEventCenter",
        "jsGoTop": "com/jsGoTop",
        "jsLoading": "com/jsLoading",
        "jsToast": "com/jsToast"
    }
});

require(['jquery', 'jsEventCenter', 'jsGoTop', 'jsLoading', 'jsToast'], function ($, jsEventCenter, jsGoTop, jsLoading, jsToast){

    jsGoTop.init({
        id: 'go-top',
        right: 20,
        bottom: 20
    });

    var jsToast = jsToast.getIntance({
        message: '没有查询到符合条件的数据 ！！！',
        time: 2000
    });

    jsToast.show();

    // jsLoading.init();
    //
    // setTimeout(function(){
    //     jsLoading.show();
    // }, 1000);
    //
    // setTimeout(function(){
    //     jsLoading.hide();
    // }, 3000);

    // function Logger(topics, data) {
    //     console.log("Logging: " + topics);
    //     console.log(data);
    // }
    //
    // //订阅者监听订阅的topic，一旦该topic广播一个通知，订阅者就调用回调
    // var subscription = jsEventCenter.subscribe("newMessage", Logger);
    // // pubsub.unsubscribe(subscription);
    // //发布者发布topic
    // jsEventCenter.publish("newMessage", "Hello Man!!!");
    //
    // jsEventCenter.publish("newMessage", ["Hello", "World", "!!!"]);
    //
    // jsEventCenter.publish("newMessage", {
    //     target: "咸鱼君",
    //     message: "Hello Man!!!"
    // });
    //
    // //取消订阅

});
