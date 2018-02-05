require.config({

    paths:{
        'jquery':'../lib/jquery-3.2.1.min',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
        'slider':'../lib/unslider.min'
    },

    shim:{
        // 设置依赖
        'zoom':['jquery'],
        // 'common':['jquery']
        'slider':['jquery'],
    }
});