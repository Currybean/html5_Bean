require(['config'],function(){
    require(['jquery','common'],function(){
        //load头部
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
                        left:'904px',
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

        //重数据库读取商品信息
        $.ajax({
            url: '../api/ouputcar.php',
            dataType: 'json',
            // data: {},
            success:function(data){
                console.log(data);
                var total=0;
            function show(kobe,total){
                var car=`
                    <table>
                     <tr>
                       <th>序号</th>
                       <th>商品名称</th>
                       <th>折扣</th>
                       <th>价格</th>
                       <th>数量</th>
                       <th>付款小计</th>
                       <th>创建时间</th>
                       <th>删除</th>  
                   </tr> 
                `
              car+=kobe.map(function(item,idx){
                    total+=item.price*item.qty;
                    return `
                                <tr>
                                    <td>${idx+1}</td>
                                    <td> <a href="../html/detail.html?id=${item.id}">${item.name}</a></td>
                                    <td class="redcolor">${item.count}</td>
                                    <td class="redcolor">${item.price}</td>
                                    <td> <span>${item.qty}</span></td>
                                    <td>${item.price*item.qty}</td>
                                    <td>${item.creatime}</td>
                                    <td><i data-id="${item.id}">删除</i></td>
                                </tr>

                    `
                }).join('');
                car+= `
                    </table>
                    <h4>应付商品金额：<span>￥${total}</span> 元</h4>
                `
                $('#carlist .carbox').html('');
                $('#carlist .carbox').html(car);

                var $del=$('#carlist table td i');
                $del.on('click',function(){
                    console.log($(this).attr('data-id'));
                    var delid=$(this).attr('data-id');
                    $.ajax({
                        url: '../api/ouputcar.php',
                        dataType: 'json',
                        data: {
                            del_id:delid,
                        },
                        success:function(dat){
                          var total=0;
                            show(dat,total*-1);
                        }
                    })
                     //请求购物车数据库，把数量到如显示出来
                    // $.ajax({
                    //   url:'../api/ouputcar.php',
                    //   dataType:'json',
                    //   success:function(num){
                    //       var number=0;
                    //       num.forEach(function(item){
                    //          number+=item.qty*1;
                    //     })
                    //         var $nb=$('header .h_box i strong');
                    //        $nb.text(number);
                    //   }
                    // })  
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
                }
                show(data,total);
            }
        })
        
       
        













    })
})