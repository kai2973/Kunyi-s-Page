window.onload=function(){
	var container=document.getElementById('aboutmelayout') //获取容器
	var info=document.getElementById('info'); //获取图片列表的div
	var pot=document.getElementById('pot').getElementsByTagName('span'); //获取5个小按钮
	var index=1;

	function showbutton(){//该函数为实现下方小圆点功能所立，用于34行
	     
	    for(var i=0; i<pot.length; i++){ //遍历小圆点buttons
	        if(pot[i].className=='on'){//如果有小圆点css为on，则其他小圆点都为空
	            pot[i].className='';
	            break;//退出（貌似没意义？）
	        }
	    }

		pot[index-1].className='on';    //随着每次点击，小圆点亮起

	}
     
 
	for(var i=0; i<pot.length; i++){ //该处为实现点击小圆点切换到相应图片代码
	    pot[i].onclick=function (){
	        var myindex=parseInt(this.getAttribute('index'));//获取<HTML>中的index属性，并转换为纯数字，这里不能用this.index，因为index是自定义属性。而getAttribute()即可以获取自带属性和自定义属性
	        info.style.left=info.offsetLeft-400*(myindex-index)+'px';//算出每次点击小圆点的偏移量，（目标值-原始值）*-600
	        //  animate(offset);   //JQERY在此无效，就用你之前的写法就好了
	        index=myindex;//切换完了更新当前index值
	        showbutton()   //调用showbutton
	    }
	}
}