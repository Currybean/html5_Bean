require(['config'],function(){
    require(['jquery','slider'],function(){
    //轮播图
        var unslider1 = $('#b1').unslider({
            dots: true,
            delay:1000,
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
            if($(window).scrollTop()>802){
                $('header .h_nav').css({
                    position:'fixed',
                    top:'0',
                    zIndex:1000
                }).find('#h1_nav2').hide();
                $('header .h_nav').on('mouseenter',function(){
                    $(this).find('#h1_nav2').show();
                }).on('mouseleave',function(){
                    $(this).find('#h1_nav2').hide();
                })
            }

            else if($(window).scrollTop()<=802){
                $('header .h_nav').css({
                     position:'',
                     top:'',
                }).find('#h1_nav2').show();
                 $('header .h_nav').on('mouseenter',function(){
                    $(this).find('#h1_nav2').show();
                }).on('mouseleave',function(){
                    $(this).find('#h1_nav2').show();
                })

            }
    }) 
  
    //load Article
    $('article').load('../html/article.html');

    //load Main
    $('main').load('../html/main.html',function(){
      //tap标签切换
        var $tap=$('.container #tap')
       var $tapbox=$('.container #tap_box')
       console.log( $tap.children().eq(0))
       $tap.children().eq(0).addClass('lgg').children('i').show();
       $tapbox.children().eq(0).siblings().hide();
       $tap.on('mouseenter','h4',function(){
            var idx=$(this).index();
        $tapbox.children().eq(idx).show().siblings().hide();
         $tap.children().eq(idx).addClass('lgg').children('i').show();
          $tap.children().eq(idx).siblings().removeClass('lgg').children('i').hide();

       })
       //类手风琴0 
          var $shoua=$('main #main_box2 .mbo_22 .mbo2b a')
           var $shouli=$('main #main_box2 .mbo_22 .mbo2b li')
           $shoua.css({
            position:'absolute',
            top:0,
            left:0,
           })
           $shouli.eq(0).children('a').show()
           $shouli.eq(0).css({
              height:'259px'
             })
           $shouli.eq(0).siblings().children('a').hide()
           $shouli.eq(0).siblings().css({
              height:'44px'
             })
           $shouli.on('mouseenter',function(){
              var sidx=$(this).index();
              $shouli.eq(sidx).children('a').show()
              $shouli.eq(sidx).css({
              height:'259px'
             })
              $shouli.eq(sidx).siblings().children('a').hide()
              $shouli.eq(sidx).siblings().css({
              height:'44px'
             })
            })

          //类手风琴1
           var $shoua1=$('main #main_box3 .mbo_22 .mbo2b a')
           var $shouli1=$('main #main_box3 .mbo_22 .mbo2b li')
           $shoua1.css({
            position:'absolute',
            top:0,
            left:0,
           })
           $shouli1.eq(0).children('a').show()
           $shouli1.eq(0).css({
              height:'259px'
             })
           $shouli1.eq(0).siblings().children('a').hide()
           $shouli1.eq(0).siblings().css({
              height:'44px'
             })
           $shouli1.on('mouseenter',function(){
              var sidx=$(this).index();
              $shouli1.eq(sidx).children('a').show()
              $shouli1.eq(sidx).css({
              height:'259px'
             })
              $shouli1.eq(sidx).siblings().children('a').hide()
              $shouli1.eq(sidx).siblings().css({
              height:'44px'
             })
            })
           //类手风琴2
             var $shoua2=$('main #main_box4 .mbo_22 .mbo2b a')
             var $shouli2=$('main #main_box4 .mbo_22 .mbo2b li')
             $shoua2.css({
              position:'absolute',
              top:0,
              left:0,
             })
             $shouli2.eq(0).children('a').show()
             $shouli2.eq(0).css({
                height:'259px'
               })
             $shouli2.eq(0).siblings().children('a').hide()
             $shouli2.eq(0).siblings().css({
                height:'44px'
               })
             $shouli2.on('mouseenter',function(){
                var sidx=$(this).index();
                $shouli2.eq(sidx).children('a').show()
                $shouli2.eq(sidx).css({
                height:'259px'
               })
                $shouli2.eq(sidx).siblings().children('a').hide()
                $shouli2.eq(sidx).siblings().css({
                height:'44px'
               })
             })
    })



  })

})
    
       
