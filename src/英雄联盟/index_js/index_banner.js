(function(){
  var i=0;
  var LIWIDTH=820;
  var DURATION=500;
  var LICOUNT=5;
  var ulImgs=document.getElementById("ul-imgs");
  var ulIdxs=document.getElementById("ul-idxs");
  var lis=ulIdxs.children;
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        ulImgs.className="transition";
      }else{
        ulImgs.className="";
        ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
        setTimeout(function(){
          moveTo(LICOUNT-1);
        },100);
        return;
      }
    }
    i=to;
    ulImgs.style.marginLeft=-i*LIWIDTH+"px";
    for(var li of lis){
      li.className=""
    }
  
    if(i==LICOUNT){
      i=0;
      setTimeout(function(){
        ulImgs.className="";
        ulImgs.style.marginLeft=0;
      },DURATION)
    }
    lis[i].className="active";
  }
  var btnLeft=document.getElementById("btn-left");
  var btnRight=document.getElementById("btn-right");
  var canClick=true;
  function move(n){
    if(canClick){
      console.log(i+n);
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION+100);
    }
  }
  var timer=setInterval(function(){
    moveTo()
  },2000);
  var banner=document.getElementById("banner");
  banner.onmouseover=function(){
    clearInterval(timer);
  }
  banner.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },2000);
  }
  //找到触发事件的元素
  var ulIdxs=document.getElementById("ul-idxs");
  //设置开关
  var canClick=true;
  //绑定事件，处理函数(鼠标移入时)
  ulIdxs.onmouseover=function(e){
    if(canClick){
      //定义li指向目标元素(实际触发事件的元素)
      var li=e.target;
      //判断触发事件是不是目标li
      if(li.nodeName=="LI"){
        //如果目标li的样式没有active
        if(li.className!=="active01"){
          //遍历li
          for(var i=0;i<lis.length;i++){
            //如果li的下标与li的值相等
            if(lis[i]==li){
              //循环终止
              break;
            }
          }
          //调用函数，传入i的值
          moveTo(i);
          //一次性定时器
          setTimeout(function(){
            //事件触发成功
            canClick=true;
            //500毫秒
          },DURATION+500);
        }
      }
    }
  }
})();