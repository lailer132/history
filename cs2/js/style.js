$(function(){
	/*==========================header================*/
	var htop=0;
	$(".csnav>li").hover(function(){
		 var listmax=($(".list1 li",this).length);
		 $("list1 li",this).css("opacity","0");
		 $(".list1",this).css("width",'100%');
		 if(htop==1){
		 	$(">span",this).css({'border-right':'#7693d2 solid 3px','color':'#999'}); 
			}else{
		 		$(">span",this).css({'border-left':'#7693d2 solid 3px','color':'#999'});
		 		}
		 $(".list1",this).stop(true,true).fadeIn(500);
		 $(".list1",this).stop(true,true).animate({height:listmax*32+10+"px"},150);
		 $(".list1 li",this).stop(true,true).animate({height:"22px"},250);
		},function(){
			if(htop==1){
		 	$(">span",this).css({'border-right':'none','color':'#FFF'}); 
			}else{
		 		$(">span",this).css({'border-left':'none','color':'#FFF'});
		 		}
			$(".list1 li",this).stop(true,true).animate({height:"0px"},500);
		 	$(".list1",this).stop(true,true).animate({height:"0px"},500);
			$(".list1",this).stop(true,true).hide();
			});
	$(".csnav").hover(function(){
		if(htop==1){
			$(".csnav").css({'border-right':'none'});
			$('.csnav').stop(true).animate({left:'-10px'},500,'backinout');
			}
		},function(){
			if(htop==1){
			$(".csnav").css({'border-right':'#7693d2 solid 3px'});
			$('.csnav').stop(true,true).animate({left:'-90px'},800,'backinout');
			}
			});
	
	$(".list1 li a").hover(function(){
		if(htop==1){
			$("label",this).css({"opacity":"0.2","background":"#999",left:"30px"});
			$("label",this).stop(true,true).animate({left:"0px",opacity:"0.6"},100);
			}else{
		$("label",this).css({"opacity":"0.2","background":"#999",left:"-100px"});
		$("label",this).stop(true,true).animate({left:"0px",opacity:"0.6"},300,"backout");//rollback
				}
		},function(){
			if(htop==1){
			$("label",this).stop(true,true).animate({left:"100px",opacity:"0"},300,"backout");
			$("label",this).css("background","none");
			}else{
			$("label",this).stop(true,true).animate({left:"-100px",opacity:"0"},300,"backout");
			$("label",this).css("background","none");
				}
			});
	/*==========================header end================*/
	
	/*==========================content================*/
	$('.contents1 .bth').hover(function(){$(this).css({'background':'url(images/bth-hover.gif)'});},function(){
		$(this).css({'background':'url(images/bth.gif)'});});//contents1
	
	var bwidth=($(".bpiclist li").length)*660;//初始化banner 轮播
	var blicount=100/($(".bpiclist li").length)+'%';
	var blistmax=($(".bpiclist li").length)-1;
	var page=1;
	$(".bpiclist").css({width:bwidth});
	$(".bpiclist li").css({width:blicount});
	$(".biconlist li:eq(0)").addClass('icur');
	function banner(){
		pagecount=page*(-660);
		$('.bpiclist').stop(true,true).animate({left:pagecount},500);
		$('.biconlist .icur').removeClass('icur');
		$('.biconlist li').eq(page).addClass('icur');
		page=page<blistmax?page+1:0;//.biconbox .icur
		}
	$('.biconlist li').click(function(){
		pagecount=($(this).index())*(-660);
		page=($(this).index());
		$('.bpiclist').stop(true,true).animate({left:pagecount},500);
		$('.biconlist .icur').removeClass('icur');
		$('.biconlist li').eq(page).addClass('icur');
		page=page<blistmax?($(this).index())+1:0;
		});
	var time=setInterval(banner,2000);
	$('.contents2').hover(function(){
		clearInterval(time);
		},function(){
			time=setInterval(banner,2000);
			});/*var timet=setTimeout(showa,500);*/
			
	
	$('.newtop span').hover(function(){
		$(this).css({'border-radius':'100%','background':'#CCC'});
		$(this).stop(true,true).animate({'border-radius':'0'},50);
		$(this).click(function(){
			var newul=$(this).index();
			$('.newtop .on').removeClass('on');
			$(this).addClass('on');
			$('.ncontent .nelist').removeClass('nelist');
			$('.ncontent ul').eq(newul).addClass('nelist');
			});
		},function(){
			$(this).css({'background':'0'});
			});
	var moli=0;		
	$('li .moleft').eq(0).css({'left':'0'});//contents7初始化
	$('li .moright').eq(0).css({'left':'325px'});
		
	$('.motop span').click(function(){
		var moul=$(this).index();
		if(moli!=moul){
			$('.motop .on').removeClass('on');
			$(this).addClass('on');
			$('li .moleft').stop(true).animate({'left':'-280px'},500,'backinout');
			$('li .moright').stop(true).animate({'left':'700px'},500,'backinout');
			$('li .moleft').eq(moul).stop(true).animate({'left':'0px'},800,'backinout');
			$('li .moright').eq(moul).stop(true).animate({'left':'325px'},800,'backinout');
			moli=moul;
			}
		});
		
	var roli=0;		
	$('li .roleft').eq(0).css({'left':'20px'});//contents8初始化
	$('li .roright').eq(0).css({'left':'0'});
		
	$('.rotop span').click(function(){
		var roul=$(this).index();
		if(roli!=roul){
			$('.rotop .on').removeClass('on');
			$(this).addClass('on');
			$('li .roleft').stop(true).animate({'left':'-250px'},500,'backinout');
			$('li .roright').stop(true).animate({'left':'350px'},500,'backinout');
			$('li .roleft').eq(roul).stop(true).animate({'left':'20px'},800,'backinout');
			$('li .roright').eq(roul).stop(true).animate({'left':'0px'},800,'backinout');
			roli=roul;
			}
		});
		
	var weli=0;		
	$('li .weleft').eq(0).show();//contents9初始化
	$('li .weright').eq(0).show();
		
	$('.wetop span').click(function(){
		var weul=$(this).index();
		if(weli!=weul){
			$('.wetop .on').removeClass('on');
			$(this).addClass('on');
			$('li .weleft').fadeOut();
			$('li .weright').fadeOut();
			$('li .weleft').eq(weul).fadeIn();
			$('li .weright').eq(weul).fadeIn();
			weli=weul;
			}
		});
	/*==========================content end================*/
	var fpic=0;
	var fpicover=0;
	$('.fpiclist li').eq(0).css({'left':'0'});
	$('.cols4 .pre').hover(function(){
		$(this).css({'background-position':'0 -48px'});
		$(this).click(function(){
			if(fpicover==0){
				fpicover=1;
				$(".fpiclist li").eq(fpic).stop(true,true).animate({left:'100%'},300);
				fpic=fpic==0?fpic=3:fpic-1;
				$(".fpiclist li").eq(fpic).css({left:'-100%'});
				$(".fpiclist li").eq(fpic).stop(true,true).animate({left:'0'},300);
				var a=setTimeout(function(){fpicover=0},300);
				}
			});
		},function(){
			$(this).css({'background-position':'0 -36px'});
			});
	
	$('.cols4 .next').hover(function(){
		$(this).css({'background-position':'-18px -48px'});
		$(this).click(function(){
			if(fpicover==0){
				fpicover=1;
				$(".fpiclist li").eq(fpic).stop(true,true).animate({left:'-100%'},300);
				fpic=fpic==3?fpic=0:fpic+1;
				$(".fpiclist li").eq(fpic).css({left:'100%'});
				$(".fpiclist li").eq(fpic).stop(true,true).animate({left:'0'},300);
				var a=setTimeout(function(){fpicover=0},300);
				}
			});
		},function(){
			$(this).css({'background-position':'-18px -36px'});
			});
	
	/*==========================window resize================*/
		
	
	function shows(){
		//content
			$(".header-content").stop(true,true).animate({width:'80%'},500);
			$(".content").css({'width':'990px','margin-top':'300px'});
			$(".contents3").css({'left':'990px','top':'-260px'});
			$(".contents3").stop(true,true).animate({left:'0px',top:'0px'},500);
			$(".contents4").css({'left':'-330px'});
			$(".contents4").stop(true,true).animate({left:'0px'},500);
			$(".contents5").css({'left':'660px','top':'-260px'});
			$(".contents5").stop(true,true).animate({left:'0px',top:'0px'},500);
			$(".contents7").css({'left':'-330px'});
			$(".contents7").stop(true,true).animate({left:'0px',width:'330px'},500);
			$('.moright').hide();
			$(".contents8").css({'position':'absolute','top':'570px','left':'660px'});
			$(".contents6").css({'width':'0px'});
			$(".contents9").css({'position':'absolute','top':'570px','left':'990px','display':'none'});
		//footer
			$(".col-info").stop(true,true).animate({width:'990px'},400);
			$(".col-info-footer").stop(true,true).animate({width:'990px'},400);
			$(".col1").stop(true,true).animate({width:'247.5px'},500);//
			$(".fpiclist img").css({'left':'-20px'});
			}
	function hides(){
		//content
			$(".header-content").stop(true,true).animate({width:'70%'},500);
			$(".content").css({'width':'1320px','margin-top':'500px'});
			$(".contents3").css({'left':'-990px','top':'260px'});
			$(".contents3").stop(true,true).animate({left:'0px',top:'0px'},500);
			$(".contents4").css({'left':'330px'});
			$(".contents4").stop(true,true).animate({left:'0px'},500);
			$(".contents5").css({'left':'-660px','top':'260px'});
			$(".contents5").stop(true,true).animate({left:'0px',top:'0px'},500);
			$(".contents7").css({'left':'330px'});
			$('.moright').stop(true,true).show();
			$(".contents7").stop(true,true).animate({left:'0px',width:'660px'},500);
			$(".contents8").css({'position':'absolute','top':'570px','left':'660px'});
			$(".contents6").css({'width':'330px'});
			$(".contents9").css({'position':'absolute','top':'570px','left':'990px','display':'block'});
		//footer
			$(".col-info").css({'width':'1320px'});
			$(".col1").stop(true,true).animate({width:'330px'},500);
			$(".col-info-footer").stop(true,true).animate({width:'1320px'},400);
			$(".fpiclist img").css({'left':'0'});
			}
	
	
	//var timer;//延时 方法1
	var ctake=0;//方法2
	window.onorientationchange = function(){ 
		if (window.orientation === 180 || window.orientation === 0) { 
			shows();
			$('body').css({'width':'auto'});
		} 
		if (window.orientation === 90 || window.orientation === -90 ){ 
			hides();
			$('body').css({'width':'1600px'});
		}
	}
	$(window).resize(function(){
		winre();
		});	
	function winre(){
		var widthwin=$(window).width();
		if(widthwin<1350&&ctake==0){
			/*clearTimeout(timer);
			timer=setTimeout(function(){
				shows();
				},10);*/
				shows();
				if (window.orientation === 90 || window.orientation === -90 ){ 
					hides();
					$('body').css({'width':'1600px'});
				}
				ctake=1;
			}else if(widthwin>1350&&ctake==1){
			/*clearTimeout(timer);
			timer=setTimeout(function(){
				hides();
				},10);*/
				hides();
				ctake=0;
			}
		}
	winre();
	
	var htake=0
	$(window).scroll(function(){
		winh();
		});
	function winh(){
		var hightwin=document.documentElement.scrollTop;
		if(hightwin>85&&htake==0){
			htake=1;
			htop=1;
			$(".list1").stop(true,true).hide();
			$(".csnav>li>span").css({'border-left':'none'});
			$('.csnav').css({'border-radius':'6px','top':'100px','left':'50px','position':'fixed','width':'100px','z-index':'100','background':'#181e30','border-right':'#7693d2 solid 3px'});
			$('.csnav>li').css({'float':'none','height':'30px','width':'100px'});
			$('.csnav>li>span').css({'margin':'10px auto','background':'#181e30','font-size':'14px'});
			$('.list1').css({'left':'100px','top':'0px'});
			$('.csnav').stop(true,true).animate({left:'-90px'},800,'backinout');
			}else if(hightwin<85&&htake==1){
				htake=0;
				htop=0;
				$(".csnav>li>span").css({'border-right':'none'});
				$('.csnav').css({'border-radius':'none','top':'0','left':'0','position':'relative','width':'100%','z-index':'auto','background':'none','border-right':'none'});
				$('.csnav>li').css({'float':'left','height':'90px','width':'16%'});
				$('.csnav>li>span').css({'margin':'34px auto','background':'none','font-size':'18px'});
				$('.list1').css({'left':'3px','top':'80px'});
				$('.csnav').stop(true,true).animate({left:'0'},800,'backinout');
			}
		}
	/*==========================window resize end================*/
	});