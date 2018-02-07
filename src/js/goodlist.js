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
                      < li><a href="#" style=" font-size:12px;color:#000;">我的优惠券<a/></li>
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
        //box1数据传送
       $.ajax({
            url: '../api/goodbox1.php',
            dataType:'json',
            success:function(data){
                console.log(data);
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
    








    })
})