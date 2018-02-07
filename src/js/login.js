require(['config'],function(){
    require(['jquery','common'],function($,cao){
      //load 头部
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
            //动画导航
            $('header .h_nav').find('#h1_nav2').hide();
            $('header .h_nav').on('mouseenter','h1',function(){
                $(this).find('#h1_nav2').stop(true,true).slideDown(600);
            }).on('mouseleave','h1',function(){
                 $(this).find('#h1_nav2').stop(true,true).slideUp(600);
            })
           
        });
      //load 尾部
        $('footer').load('../html/footer.html',function(){
            $('footer img')[0].src='../img/fo3.png';
        });

        //验证表单
            
            // 登录用户
            
            var vc=cao.vCode();
            var $vospan=$('#zhuche .login .vcode span');
            $vospan.text(vc);
            var $tipvo=$('#zhuche .login .vcode .tip_vo');
            var $logbtn=$('#zhuche .login .logbtn');
            //用户名input
            var $lgusername=$('#zhuche .login .lg_user input');
            var $lgpassword=$('#zhuche .login .lg_paw input');
            var $tipuser=$('#zhuche .login .lg_user .tip_user');

        $logbtn.on('click',function(){
            $.ajax({
                url: '../api/log.php',
                data:{
                        username:$lgusername.val(),
                        password:$lgpassword.val()
                    },
                success:function(data){
                    console.log(data)
                    if(data === 'success'){
                             //验证码错误
                            var $vcode=$('#zhuche .login .vcode input');
                            if($vcode.val()!=vc){
                                $tipvo.text('验证码输入错误！')
                                vc=cao.vCode();
                                $vospan.text(vc);
                                return false;
                            }
                            
                        location.href = '../index.html?username='+$lgusername.val();
                        }else if(data === 'fail'){
                          $tipuser.text('用户名或密码错误!');
                          return false;
                        } 
                }
            })

        })



        //注册用户
            //注册按钮
            var $regbtn=$('#zhuche .reg .regbtn');
            //用户名input
            var $rgusername=$('#zhuche .reg .rg_user input');
            var $tiprguser=$('#zhuche .reg .rg_user .tip_reguser');
            //密码
            var $rgpassword=$('#zhuche .reg .rg_paw input');
            var $tiprgpaw=$('#zhuche .reg .rg_paw .tip_regpaw');
            //重复密码
            var $secpassword=$('#zhuche .reg .rg_rpaw input');
            var $sectiprgpaw=$('#zhuche .reg .rg_rpaw .tip_regrpaw');
            //电子邮件
            var $email=$('#zhuche .reg .rg_email input');
            var $tipemail=$('#zhuche .reg .rg_email .tip_email');
            console.log( $tipemail[0])
            //验证码
            var vc1=cao.vCode();
            var $vcode1=$('#zhuche .reg .regvcode span');
            $vcode1.text(vc1);
            var $regvcode=$('#zhuche .reg .regvcode input');
            var $tipregvo=$('#zhuche .reg .regvcode .tip_regvo');
            //协议
            var $checkbox=$('#zhuche .reg  .xieyi input');
            var $check=$('#zhuche .reg  .xieyi .tip');
        //用户格式
        $rgusername.on('blur',function(){
            var regname= $rgusername.val()
            if(!/^[a-z][a-z0-9\-]{5,19}$/.test(regname)){
            $tiprguser.text('注:*必须以字母开头，由数字字母横杠组成,长度6-20');
             return false;
            }else{
                 $tiprguser.text('');
            }
        })
        //密码格式
        $rgpassword.on('blur',function(){
           var regpassword =$rgpassword.val();
        if(!/^\S{6,20}$/.test(regpassword)){
            $tiprgpaw.text('长度6-20,不能包含空格');
            return false;
        }else{
                 $tiprgpaw.text('');
            }
        })
        //验证密码
       $secpassword.on('blur',function(){
            var _password=$rgpassword.val();
           var comfirm_pwd =$secpassword.val()
        if (comfirm_pwd!=_password) {
             $sectiprgpaw.text('注:*密码不一致');
            return false;
        }else{
             $sectiprgpaw.text('');
        }
        })
       //验证邮箱格式
        $email.on('blur',function(){
            var _mail=$email.val();
        if(!/^[a-z0-9_\.\-]{3,}@[a-z0-9\-]{1,63}\.[a-z\.]{3,5}$/.test(_mail)){
          $tipemail.text('注:*该邮箱格式不正确');
            return false;
        }else{
            $tipemail.text('');
        }
        })



                console.log($checkbox)
            

         $regbtn.on('click',function(){
                if(!$checkbox.prop('checked')){
                   $check.text('请勾选注册协议,不同意协议则不能注册。')
                   return false;
                }
             if($regvcode.val()!=vc1){
                $tipregvo.text('验证码输入错误！')
                vc1=cao.vCode();
                $vcode1.text(vc1);
                return false;
                }
             
            $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$rgusername.val(),
                        password:$rgpassword.val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                           location.href='login.html'
                        }else if(data === 'fail'){
                            $tiprguser.text('注:*用户名已被注册，请换另一个');
                                vc1=cao.vCode();
                                $vcode1.text(vc1);
                                return false;
                        }
                    }
                })
         })




       





     })
}) 