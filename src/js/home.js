require(['config'],function(){
    require(['jquery','slider'],function(){
    //轮播图
            var unslider1 = $('#b1').unslider({
                dots: true,
                delay:1000,
                speed:1000
               }),
            data1 = unslider1.data('unslider');

    //hover出现二维码
        $('header .h_box .container img').on('mouseenter',function(){
                 var $qrbox=$('<div class="qrbox"></div>')
                  .css({
                    position:'absolute',
                    width:'192px',
                    height:'198px',
                    background:'#fff',
                    left:844,
                    top:40,
                    border:'1px solid #ccc',
                    padding:'8px 5px 0 11px' 
                  })
                    var html=`<p>
                    <img src="../img/qrcode-app-80.png"/>
                    <span style="font-size:14px; position:absolute;left:90px; top:11;">app下载</span><hr/>
                    </p>
                    <p>
                    <img src="../img/qrcode-gzh-80.jpg" /><span style="font-size:14px; position:absolute; left:88px; top:111px; ">关注微信公众号</span>
                    </p>`;
                      $qrbox.appendTo('body').html(html).on('mouseleave',function(){
                          $qrbox.remove();
                      })  
        })  

    //我的账户二级导航
    $('.hp1 .container .fr li:first').on('mouseenter',function(){
           $(this).css({
            background:'#fff',
            borderLeft:'1px solid #ccc',
            borderRight:'1px solid #ccc',
           })
           var uli=`
                <li><a href="#" style=" font-size:12px;color:#000;">我的账户<a/></li>
                <li><a href="#" style=" font-size:12px;color:#000;">我的订单<a/></li>
                 <li><a href="#" style=" font-size:12px;color:#000;">我的积分<a/></li>
                  <li><a href="#" style=" font-size:12px;color:#000;">我的优惠券<a/></li>
                    <li><a href="#" style=" font-size:12px;color:#000;">我的收藏<a/></li>
           `
           $('<ul id="hul"/>')
           .css({
            padding:'0px',
            height:'0px',
            width:'81px',
            background:'#fff',
            position:'absolute',
            border:'1px solid #ccc',
            borderTop:'0 none',
            left:'875px',
            top:'0px',
            zIndex:1000,
            paddingLeft:'13px',
            paddingTop:'4px',
           })
           .html(uli)
           .animate({
            height:'112px',
           },200)
           .appendTo( $('body'))
           .on('mouseleave',function(){
            $('#hul').remove();
            })
    }).on('mouseleave',function(){
                $(this).css({
                background:'',
                borderLeft:'',
                borderRight:'',
                })
    })

    //吸顶菜单
    $(window).on('scroll',function(){
           
            if($(window).scrollTop()>100){
                 console.log($(window).scrollTop())
                $('header .h_nav').css({
                    position:'fixed',
                    top:'0',
                    zIndex:1000
                }).find('#h1_nav2').hide();
                $('header .h_nav').on('mouseenter',function(){
                    $(this).find('#h1_nav2').show();
                })
            }
            else if($(window).scrollTop()<=100){
                $('header .h_nav').css({
                     position:'',
                    top:'',
                }).find('#h1_nav2').show();
            }
    }) 

    //
    })
})
    
       
