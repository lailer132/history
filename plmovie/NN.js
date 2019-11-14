// JavaScript Document
//下拉

/*function changenav(myid,mode){
			document.getElementById(myid).style.display=mode;	
		}*/
//轮播
	var pic=new Array();//存储图片路径
	picnum=1;
	bgani="topbg 1s";
	pic[0]="url(01.jpg)";//"url(1.jpg)";
	pic[1]="url(02.jpg)";//"url(2.jpg)";
	pic[2]="url(03.jpg)";//"url(3.jpg)";
	pic[3]="url(04.jpg)";//"url(4.jpg)";
	pic[4]="url(05.jpg)";
	pic[5]="url(06.jpg)";//"url(5.jpg)";
	var time=setInterval(change,2500);
	function change(){
			picnum=picnum+1;
			if(picnum>6){
					picnum=1;
				}
				changego(picnum);
				
		}
		function changego(x){
			var obj1=document.getElementById("topbg");
			obj1.style.backgroundImage=pic[x-1];
			//var timechange=setTimeout(topbgani(),1000); //单位毫秒
			
			
			for(var i=1;i<=6; i++){
					var obj2=document.getElementById("li"+i);
					obj2.style.border="none";
					obj2.style.boxShadow="0 0 6px #000";
				}
				document.getElementById("li"+x).style.border="#ccc solid 2px";
				document.getElementById("li"+x).style.boxShadow="0 0 12px #000";
		}
		
		
		//清除定时器
	function stops(){
			clearInterval(time);
		}
		//重新启动定时器
	function start(){
			time=setInterval(change,2500);
		}
			
		///点击箭头有反应
	function per(){
		picnum=picnum-1;
			if(picnum<1){
					picnum=6;
				}
				changego(picnum);
		}
		
	function per1(){
		picnum=picnum+1;
			if(picnum>6){
					picnum=1;
				}
				changego(picnum);
		}
	
	function select(y){
			switch(y.id){
					case "li1":
						picnum=1;
						changego(picnum);
						break;
					case "li2":
						picnum=2;
						changego(picnum);
						break;	
					case "li3":
						picnum=3;
						changego(picnum);
						break;
					case "li4":
						picnum=4;
						changego(picnum);
						break;
					case "li5":
						picnum=5;
						changego(picnum);
						break;
					case "li6":
						picnum=6;
						changego(picnum);
						break;		
				}
		}
//动态时间
	var timed=setTimeout(showtime,100);
	function showtime(){
		var datatime=new Date();
			(new Date()).toLocaleString();//toLocaleString()是把获取的时间转变成字符串
			obj=document.getElementById("time");
			obj.innerHTML=datatime;
			setTimeout(showtime,1000);
		}