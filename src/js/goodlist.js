require(['config'],function(){
    require(['jquery','common'],function($,ka){
        //load 头部
        console.log(666)
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
                //请求购物车数据库，把数量到如显示出来
                    $.ajax({
                      url:'../api/ouputcar.php',
                      dataType:'json',
                      success:function(num){
                          var number=0;
                          num.forEach(function(item){
                             number+=item.qty*1;
                        })
                            var $nb=$('header .h_box i strong');
                           $nb.text(number);
                      }
                    })


        });
        //load 尾部
        $('footer').load('../html/footer.html',function(){
            $('footer img')[0].src='../img/fo3.png';
        });
        //box1数据传送
       $.ajax({
            url: '../api/goodbox1.php',
            dataType:'json',
            success:function(data){
            var box1=data.map(function(item){
            return `
            <dl class="dudl">
             <dt><a href="#"><img src="${item.imgurl}"/></a></dt>
             <dd class="abword">${item.mainword}</dd>
             <dd class="goodname"><a href="#">${item.goodname}</a></dd>
             </dl>
            `
            }).join('');
            $('#goodlist .box1').html(box1);
            }
        })
    
       //goodlist分页
        $.ajax({
               url: '../api/goodlist.php',
               dataType: 'json',
               data:{
                    page_no:1,
                    qty:32,
               },
                        success:function(goods){
                            //封装生成函数
                            function show(gol){
                              var creategood=gol.data.map(function(ite){
                                return `
                                    <dl id="${ite.id}">
                                    <a href="detail.html?id=${ite.id}"><img src="${ite.img}"/></a>
                                    <a href="#">${ite.name}</a>
                                    <dd><span>￥${ite.price}</span><span>${ite.count}</span></dd>
                                    <button>加入购物车</button>
                                </dl>
                                `
                              }).join('');
                            $('#goodlist .bo_good .goods').html('');
                            $('#goodlist .bo_good .goods').html(creategood);
                            }
                            show(goods);
                            //分页跳转
                            var leng=Math.ceil(goods.total/goods.qty);
                              for(var i=leng;i>0;i--){
                            $('<span class="page"></span>').text(i).appendTo('#boxpage');
                            };
                            
                            var $page= $('#goodlist .bo_good  .page');
                            $page.eq(2).addClass('active').siblings().removeClass('active');
                            $page.on('click',function(){
                                        $(this).addClass('active').siblings().removeClass('active');
                                        $.ajax({
                                           url: '../api/goodlist.php',
                                            dataType: 'json',
                                             data:{
                                            page_no:$(this).text()*1,
                                            qty:32,
                                            },
                                    success:function(kobe){
                                          show(kobe);
                                    }
                                })
                             
                            })
                        }
                         //存入数据库
                     
        })
        
        //价格高到底排列
        var $escbtn= $('#goodlist .bo_good .filter').find('a').eq(0);
        $escbtn.on('click',function(){
          $(this).closest('dd').addClass('curr').siblings().removeClass('curr');
            $.ajax({
                url: '../api/goodlist.php',
                dataType: 'json',
                data: {
                    DESC:'desc',
                    page_no:1,
                    qty:32,
                },
              success:function(wade){
                    console.log(wade);
                      function show(gol){
                              var creategood=gol.data.map(function(ite){
                                return `
                                    <dl id="${ite.id}">
                                    <a href="detail.html?id=${ite.id}"><img src="${ite.img}"/></a>
                                    <a href="#">${ite.name}</a>
                                    <dd><span>￥${ite.price}</span><span>${ite.count}</span></dd>
                                    <button>加入购物车</button>
                                </dl>
                                `
                              }).join('');
                            $('#goodlist .bo_good .goods').html('');
                            $('#goodlist .bo_good .goods').html(creategood);
                            }
                            show(wade);
                             //分页跳转
                            $('#boxpage').html('');
                            var leng=Math.ceil(wade.total/wade.qty);
                              for(var i=leng;i>0;i--){
                            $('<span class="page"></span>').text(i).appendTo('#boxpage');
                            };
                            
                            var $page= $('#goodlist .bo_good  .page');
                            $page.on('click',function(){
                                        $(this).addClass('active').siblings().removeClass('active');
                                        $.ajax({
                                           url: '../api/goodlist.php',
                                            dataType: 'json',
                                             data:{
                                              DESC:'desc',
                                            page_no:$(this).text()*1,
                                            qty:32,
                                            },
                                    success:function(kobe){
                                          show(kobe);
                                    }
                                })
                             
                            })
                } 
            })
        })
        //价格低到高排列
        var $descbtn= $('#goodlist .bo_good .filter').find('a').eq(1);
        $descbtn.on('click',function(){
           $(this).closest('dd').addClass('curr').siblings().removeClass('curr');
            $.ajax({
                url: '../api/goodlist.php',
                dataType: 'json',
                data: {
                    ASC:'asc',
                    page_no:1,
                    qty:32,
                },
            success:function(wade){
                    console.log(wade);
                      function show(gol){
                              var creategood=gol.data.map(function(ite){
                                return `
                                    <dl id="${ite.id}">
                                    <a href="detail.html?id=${ite.id}"><img src="${ite.img}"/></a>
                                    <a href="#">${ite.name}</a>
                                    <dd><span>￥${ite.price}</span><span>${ite.count}</span></dd>
                                    <button>加入购物车</button>
                                </dl>
                                `
                              }).join('');
                            $('#goodlist .bo_good .goods').html('');
                            $('#goodlist .bo_good .goods').html(creategood);
                            }
                            show(wade);
                             //分页跳转
                            $('#boxpage').html('');
                            var leng=Math.ceil(wade.total/wade.qty);
                              for(var i=leng;i>0;i--){
                            $('<span class="page"></span>').text(i).appendTo('#boxpage');
                            };
                            
                            var $page= $('#goodlist .bo_good  .page');
                            $page.on('click',function(){
                                        $(this).addClass('active').siblings().removeClass('active');
                                        $.ajax({
                                           url: '../api/goodlist.php',
                                            dataType: 'json',
                                             data:{
                                              ASC:'asc',
                                                page_no:$(this).text()*1,
                                                qty:32,
                                            },
                                    success:function(kobe){
                                          show(kobe);
                                    }
                                })
                             
                            })
                } 
            })
        })
        //时间最早排序
         var $timebtn= $('#goodlist .bo_good .filter').find('a').eq(2);
         $timebtn.on('click',function(){
           $(this).closest('dd').addClass('curr').siblings().removeClass('curr');
                        $.ajax({
                            url: '../api/goodlist.php',
                            dataType: 'json',
                            data: {
                                datatime:'datatime',
                                page_no:1,
                                qty:32,
                            },
                            success:function(wade){
                                console.log(wade);
                                  function show(gol){
                                          var creategood=gol.data.map(function(ite){
                                            return `
                                                <dl id="${ite.id}">
                                                <a href="detail.html?id=${ite.id}"><img src="${ite.img}"/></a>
                                                <a href="#">${ite.name}</a>
                                                <dd><span>￥${ite.price}</span><span>${ite.count}</span></dd>
                                                <button>加入购物车</button>
                                            </dl>
                                            `
                                          }).join('');
                                        $('#goodlist .bo_good .goods').html('');
                                        $('#goodlist .bo_good .goods').html(creategood);
                                        }
                                        show(wade);
                                         //分页跳转
                                        $('#boxpage').html('');
                                        var leng=Math.ceil(wade.total/wade.qty);
                                          for(var i=leng;i>0;i--){
                                        $('<span class="page"></span>').text(i).appendTo('#boxpage');
                                        };
                                        
                                        var $page= $('#goodlist .bo_good  .page');
                                        $page.on('click',function(){
                                                    $(this).addClass('active').siblings().removeClass('active');
                                                    $.ajax({
                                                       url: '../api/goodlist.php',
                                                        dataType: 'json',
                                                         data:{
                                                         datatime:'datatime',
                                                            page_no:$(this).text()*1,
                                                            qty:32,
                                                        },
                                                success:function(kobe){
                                                      show(kobe);
                                                }
                                            })
                                         
                                        })
                            } 
                        })
         })


        //返回顶部
        $('<a href="#" id="curry">点击回到顶部</a>').css({
                height:'92px',
                width:'46px',
                lineHeight:'29px',
                position:'fixed',
                top:'540px',
                right:'0px',
                border:'1px solid #ccc',
                background:'#ccc',
                fontSize:'16px',
                color:'blue',
                paddingLeft:'5px',
        }).appendTo('body').hide();
        var $back=$('body #curry');
        $(window).on('scroll',function(){
                    if($(window).scrollTop()<802){
                       $back.hide();
                    }
                    else{
                      $back.show();
                    }
                })
        
            //加入购物车存入数据库
            var $liebiao=$('#goodlist .bo_good .goods');
          $liebiao.on('click','button',function(){
                //飞入购物车
                 var $img=$(this).closest('dl').find('img');
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
                  //请求购物车数据库，把数量到如显示出来
                     $.ajax({
                       url:'../api/ouputcar.php',
                       dataType:'json',
                       success:function(num){
                           var number=0;
                           num.forEach(function(item){
                              number+=item.qty*1;
                         })
                             var $nb=$('header .h_box i strong');
                            $nb.text(number);
                       }
                     })
                 });
                 



                //添加或
                var dlId=$(this).closest('dl').attr('id');
                var dlName=$(this).closest('dl').children('a').eq(1).text();
                var dlPrice=$(this).closest('dl').find('span').eq(0).text().slice(1);
                var dlCount=$(this).closest('dl').find('span').eq(1).text();
                
                $.ajax({
                  url: '../api/carlist.php',
                  data: {
                    dl_id:dlId,
                    dl_name:dlName,
                    dl_price:dlPrice,
                    dl_count:dlCount,
                    dl_qty:1,
                  },
                  success:function(car){
                    console.log(car)
                  }
                })

          })








    })
})