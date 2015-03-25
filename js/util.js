tools ={};/* 全局对象 */
/**
 *  浏览器 HTML5全屏API (标准浏览器，Chrome,firefos,ie11+)
 *  2015-03-24
 *  author:hzc
 *  参考文档：
 *  1) https://msdn.microsoft.com/zh-cn/library/ie/dn265028(v=vs.85).aspx
 *  2) http://www.sitepoint.com/use-html5-full-screen-api/
 *  
 */
//运行全屏
//return   undefined
tools.runFullScreen = function(target){
     if(target.requestFullscreen) {
        target.requestFullscreen();
	  } else if(target.mozRequestFullScreen) {
	    target.mozRequestFullScreen();
	  } else if(target.msRequestFullscreen){ 
	    target.msRequestFullscreen();  
	  } else if(target.webkitRequestFullscreen) {
	    target.webkitRequestFullScreen();
	  }
}
//退出全屏
//return   undefined
tools.exitFullScreen = function(){

	if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

}

//检查现在是否处于全屏状态
//return  boolean
tools.isFullScreen = function(){
   return document.fullscreenEnabled ||document.mozFullScreenEnabled ||document.webkitFullscreenEnabled ||document.msFullscreenEnabled;
}

//返回处于全屏状态的元素
//return  dom
tools.getFullScreenElement = function(){
	return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
}

/**
 * 
 */
//刷新iframe
tools.refreshIframe = function(iframe){

	//iframe.contentWindow.document.write('');
	//iframe.contentWindow.close();
	iframe.src = iframe.src;

}
