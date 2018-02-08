require(['config'],function(){
    require(['jquery','zoom','common',],function(){
          $('header').load('../html/header.html',function(){

               $('header img')[0].src='../img/qrcode-app-80.png';
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
                        left:'896px',
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
                 $('header .h_nav').find('#h1_nav2').hide();
                $(window).on('scroll',function(){
                    if($(window).scrollTop()<802){
                        $('header .h_nav').css({
                            position:'',
                            top:'',
                        }).find('#h1_nav2').hide();
                       
                    }
                    else if($(window).scrollTop()>802){
                        $('header .h_nav').css({
                             position:'fixed',
                             top:'0',
                            zIndex:1000
                        }).find('#h1_nav2').hide();
                        }
                })
                $('header .h_nav').on('mouseenter','h1',function(){
                    $(this).find('#h1_nav2').stop(true,true).slideDown(500);
                    }).on('mouseleave','h1',function(){
                    $(this).find('#h1_nav2').stop(true,true).slideUp(500);
                })
        });
        //load 尾部
        $('footer').load('../html/footer.html',function(){
            $('footer img')[0].src='../img/fo3.png';
        });

      
       
        //小图
         
          //    $('.bigpic').gdsZoom({
          //       position:'right',
          //   });
     
      
        //详情页传输数据
         var $part1=$('#detail .part1');
         var dataId=location.search.slice(4)
        $.ajax({

            url: '../api/detail.php',
            dataType: 'json',
            data: {
                data_id:dataId,
            },
            success:function(single){
                var gooddetail=`
                <h4><a href="../index.html">首页</a>><a href="#">男士专区</a>><a href="goodlist.html">Kiehl’s 科颜氏</a>><span>${single.name}</span></h4>
                <div class="parL fl cf">
                <ul class="fl">
                    <li> <img src="${single.img}"/></li>
                    <li> <img src="../img/detail2.jpg"/></li>
                    <li> <img src="../img/detail3.jpg"/></li>
                    <li> <img src="../img/detail4.jpg"/></li>
                    <li> <img src="../img/detail5.jpg"/></li>
                </ul>
                <div class="bigpic">
                    <img src="${single.img}" data-big="../img/listbig1.png"/>
                    </div>
                </div>
                <h2>${single.name}</h2>
                <p class="chuan">
                <span>英文名称: Kiehl’s“ultimate” man body scrub soap</span>
                <span>商品创建时间：${single.creatime}</span>
                <span>折 扣： (不返积分)<strong>${single.count}</strong></span>
                <span>抢 购 价：<strong>￥${single.price}</strong></span>
                </p>
                <p class="buchuan">
                <span>所属品牌： Kiehl’s &nbsp;<a href="#">科颜氏</a>→ <a href="#">男士护理系列</a></span> 
                <span>所属分类： <a href="#">男士专区</a> → <a href="#">身体护理</a> → <a href="#">沐浴</a></span>
                <span>用户评分：&nbsp;<a href="#">已有2条评论.</a></span>
                <span>运费说明： <strong>购物满80元免费快递</strong></span>
                <span class="cf">消费保障： <img src="../img/buxiang.png"/></span>
                </p>
                <div class="addbtn">
                <p><span>我要买：</span><img src="../img/jian.jpg" class="jia"/><input type="text"/><img src="../img/jia.jpg" class="jian"/></p>
                <a id="${single.id}"><img src="../img/addcar.gif" /></a>
                `   
                $part1.html(gooddetail);
                 $('.bigpic').gdsZoom({
                            position:'right',
                        });
                  var $uli=$('#detail .parL ul li');
                  var $bigimg=$('#detail .parL .bigpic');
                  $uli.on('mouseenter',function(){

                     $bigimg.children('img').remove()
                     $(this).children('img').clone().appendTo($bigimg).css({
                        width:'350px',
                        height:'350px',
                     }).attr({
                        'data-big':'../img/listbig1.png',
                     })
                     $(this).css({
                        border:'1px solid blue',
                     }).siblings().css({
                        border:'1px solid #ccc',
                     }) 
                      //放大镜
                      $('.bigpic').gdsZoom({
                            position:'right',
                        });
                 })
                //加减数量
                   var $jianbtn= $('#detail .part1 .addbtn .jia');
                   var $jiabtn=$('#detail .part1 .addbtn .jian');
                   var $calinput=$('#detail .part1 .addbtn input');
                   var $addcar=$('#detail .part1 .addbtn a');
                   $calinput.val(1);
                   //加
                    var goodnum=$calinput[0]
                   $jiabtn.on('click',function(){
                       goodnum.value++;
                   })
                   //减
                    $jianbtn.on('click',function(){
                        if(goodnum.value<2){
                           return;
                       }
                       goodnum.value--;
                   })
                  //添加到购物车
                  var $addcar=$('#detail .part1 .addbtn a');
                  $addcar.on('click',function(){
                      //飞入购物车
                       var $img=$(this).closest('.addbtn').siblings('.parL').find('.bigpic').children('img');
                       var $copyImg=$img.clone();
                       var $car=$('header .h_box i');
                       $copyImg.appendTo('body').css({
                        position:'absolute',
                        top:$img.offset().top+220+'px',
                        left:$img.offset().left+'px',
                       }).animate({
                        top:$car.offset().top+10+'px',
                        left:$car.offset().left+10+'px',
                        width:'10px',
                        height:'10px',
                        opacity:0.2,
                       },2000,function(){
                        $copyImg.remove();
                       });



                    //存储数据库
                        var dlId=$(this).closest('a').attr('id');
                        var dlName=$(this).parents('.part1').find('h2').eq(0).text();
                        var dlPrice=$(this).closest('.addbtn').siblings('.chuan').find('strong').eq(1).text().slice(1);
                        var dlCount=$(this).closest('.addbtn').siblings('.chuan').find('strong').eq(0).text();
                        var dlQty=$calinput.val();
                        $.ajax({
                          url: '../api/carlist.php',
                          data: {
                            dl_id:dlId,
                            dl_name:dlName,
                            dl_price:dlPrice,
                            dl_count:dlCount,
                            dl_qty:dlQty,
                          },
                          success:function(car){
                            console.log(car)
                          }
                      })
                  })  

            }
        })

         





    })
})