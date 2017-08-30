$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});
//登录
$("#loginBtn").click(function(){
	$.ajax({
		type:'post',
		url:'/api/login',
		data:$('#loginForm').serialize(),
		dataType:'json',
		success:function(data){
			if(data.code==200){
				//登录成功
				location.href='/main/index';
			}else{
				alert('用户名或者密码错误');
			}
		}
	});
	return false;
})
//退出
$('#logoutBtn').click(function () {
	$.ajax({
		type:'post',
		url:'/api/logout',
		dataType:'json',
		success: function (data) {
			if(data.code==200){
				location.href='/main/login';
				console.log(123);
			}
		}
	})
})




//define(['jquery','cookie'],function($){
//	//控制左侧导航栏菜单折叠展开
//	$('.navs ul').prev('a').on('click', function () {
//		$(this).next().slideToggle();
//	});
//	//实现退出功能
//	$('#logoutBtn').click(function(){
//		$.ajax({
//			type:'post',
//			url:'/api/logout',
//			dataType:'json',
//			success:function(data){
//				if(data.code==200){
//					location.href='/main/login';
//				}
//			}
//		});
//		return false;
//	});
//	//验证是否登录
//	var seesionId= $.cookie("PHPSESSID");
//	if(!seesionId && location.pathname !='/main/login'){
//		location.href='/main/login';
//	}
//// 获取用户登录信息，并填充页面
//	var loginInfo=JSON.parse($.cookie('loginInfo'));
//	$('.profile img').attr('src',loginInfo.tc_avatar);
//	$('.profile h4').html(loginInfo.tc_name);
//});
	//NProgress.start();
	//NProgress.done();

