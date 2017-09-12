/*
天气情况的弹出框
 */
$(document).ready(function(){
	var t;
	$('.weather').hover(function(){

		t = setTimeout(function(){
			$('.future_temper_wrap').show();
		},1000);
		
	},function(){
		clearTimeout(t);
		$('.future_temper_wrap').hide();

	});
});
/*
侧边栏的弹出框
 */
// $(document).ready(function(){
// 	$('aside').hover(function(){
// 		$('body').css({'overflow':'hidden'});
// 	},function(){
// 		$('body').css({'overflow':'scroll'});
// 	});
// });
/*
浮动搜索框出现，236px
 */
$(document).ready(function(){
	var showHight = 236;
	$(window).scroll(function(){
		if($(window).scrollTop() > showHight){
			$('.search_float_wrap').slideDown();
		}else if($(window).scrollTop() < showHight){
			$('.search_float_wrap').slideUp(100);
		}
	});
});
/*
标签页切换
 */
$(document).ready(function(){
	$('.card_selector li').each(function(index){
		$(this).click(function(){
			$(this).addClass('cur_focus').siblings().removeClass('cur_focus');
			$('.main_card>li').eq(index).show().siblings().hide();
		});
	});
});
/*
换肤器
 */
$(document).ready(function(){
	var cur_skin=parseInt(localStorage.skin);
	if(!cur_skin){
		$("#background_img").removeClass().addClass("background_"+1);
	}else{
		$("#background_img").removeClass().addClass("background_"+(cur_skin+1));
	}
	$('#change_skin').click(function(e){
		e.preventDefault();
		$('.skin_panel').slideDown();
		$(document).click(function(){
			
			$('.skin_panel').slideUp();
		});
		e.stopPropagation();
	});
	$('.skin_panel').click(function(e){
		e.stopPropagation();
	});


	$(".skin_panel li").each(function(index){
		$(this).click(function(){
			$("#background_img").removeClass().addClass("background_"+(index+1));
			localStorage.skin=index;
		});
	});
});




