//设置宽度高度大小的rem值
//var docEl = document.documentElement,
//  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//  recalc = function() {
//      //设置根字体大小
//      docEl.style.fontSize = 20 * (docEl.clientWidth / 320) + 'px';
////      console.log(docEl.style.fontSize);
//  };
//
////绑定浏览器缩放与加载时间
//window.addEventListener(resizeEvt, recalc, false);
//document.addEventListener('DOMContentLoaded', recalc, false);
//  
//  
    
    
    
    
    
     var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: false,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	}, 
  	onSlideChangeEnd: function(swiper){ 
    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  	}
    // 如果需要分页器
//  pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar'
  })    
  
  
//自适应高度
//var now = { row:1, col:1 }, last = { row:0, col:0};
//const towards = { up:1, right:2, down:3, left:4};
//var isAnimating = false;
//
//s=window.innerHeight/500;
//ss=250*(1-s);
//
//$('.swiper-slide').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');
//



//音乐播放
var music_note=document.getElementsByClassName("music_note")[0];
var video=document.getElementsByTagName("audio")[0];
var flag=true;
	music_note.onclick=function(){
		if(flag){
			video.pause();
			flag=false;
		}else{
			video.play();
			flag=true;
		}
	}




