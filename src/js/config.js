require.config({

    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
        'slider':'../lib/unslider.min',
        'zoomy':'../lib/zoomy/jquery.zoomy0.5'
    },

    shim:{
        // 设置依赖
        'zoom':['jquery'],
        // 'common':['jquery']
        'slider':['jquery'],
        'zoomy':['jquery'],
    }
});