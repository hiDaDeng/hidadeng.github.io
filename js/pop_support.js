function pop() {
  $('body').append('<div id="t-bei" ></div>'); 
        $('body').append('<div id="t-opo"><a href="javascript:void(0)" id="tca" ><i class="fa fa-times"></i></a><div id="t-opo-title"><i class="fa fa-credit-card"></i>  打赏本站</div><div id="t-opo-content"><img src="images/bg/pay_qr_wechat.png"><img src="images/bg/pay_qr_ali.png"><p>微信打赏</p><p>支付宝打赏</p></div></div>');
        $('#tca').click(function() {
        $('#t-opo,#t-bei').remove();
  });
};