(function(){
  var rightFixedSmall01=document.querySelector(".right-fixed>.right-fixed-gb>li:nth-child(1)");
  var rightFixedSmall02=document.querySelector(".right-fixed>.right-fixed-gb>li:nth-child(2)");
  var rightFixedSmall03=document.querySelector(".right-fixed>.right-fixed-gb>li:nth-child(3)");
  var rightFixedSmall04=document.querySelector(".right-fixed>.right-fixed-gb>li:nth-child(4)");
  var rightFixedSmall05=document.querySelector(".right-fixed>.right-fixed-gb>li:nth-child(5)");
  var rightFixedSmall06=document.querySelector(".right-fixed>.right-fixed-gb>li:nth-child(6)");
  var rightFixed=document.getElementsByClassName("right-fixed")[0];
  var scrollTop=0;
  window.onscroll=function(){
    scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>=350){
      rightFixed.style.top=335+"px";
      rightFixed.style.height=365+"px";
      rightFixed.style.transition="all"+" "+0.5+"s"+" "+"linear";
      rightFixedSmall01.className="right-fixed-small01-jump";
      rightFixedSmall02.className="";
      rightFixedSmall03.className="";
      rightFixedSmall04.className="";
      rightFixedSmall05.className="";
      rightFixedSmall06.className="right-fixed-small06-jump";
    }if(scrollTop>=1050){
      rightFixedSmall01.className="";
      rightFixedSmall02.className="right-fixed-small02-jump";
      rightFixedSmall03.className="";
      rightFixedSmall04.className="";
      rightFixedSmall05.className="";
      rightFixedSmall06.className="";
    }if(scrollTop>=1600){
      rightFixedSmall01.className="";
      rightFixedSmall02.className="";
      rightFixedSmall03.className="right-fixed-small03-jump";
      rightFixedSmall04.className="";
      rightFixedSmall05.className="";
      rightFixedSmall06.className="";
    }if(scrollTop>=2200){
      rightFixedSmall01.className="";
      rightFixedSmall02.className="";
      rightFixedSmall03.className="";
      rightFixedSmall04.className="right-fixed-small04-jump";
      rightFixedSmall05.className="";
      rightFixedSmall06.className="";
    }if(scrollTop>=2800){
      rightFixedSmall01.className="";
      rightFixedSmall02.className="";
      rightFixedSmall03.className="";
      rightFixedSmall04.className="";
      rightFixedSmall05.className="right-fixed-small05-jump";
      rightFixedSmall06.className="";
    }if(scrollTop<350){
      rightFixed.style.top=400+"px";
      rightFixed.style.height=305+"px";
      rightFixed.style.transition="all"+" "+0.5+"s"+" "+"linear";
      rightFixedSmall01.className="";
      rightFixedSmall06.className="";
    }
  }
  rightFixedSmall01.onclick=function(){
    rightFixedSmall01.className="right-fixed-small01";
    rightFixedSmall02.className="";
    rightFixedSmall03.className="";
    rightFixedSmall04.className="";
    rightFixedSmall05.className="";
    rightFixedSmall06.className="";
    window.scrollTo(0,700); 
  }
  rightFixedSmall02.onclick=function(){
    rightFixedSmall01.className="";
    rightFixedSmall02.className="right-fixed-small02";
    rightFixedSmall03.className="";
    rightFixedSmall04.className="";
    rightFixedSmall05.className="";
    rightFixedSmall06.className="";
    window.scrollTo(0,1300);
  }
  rightFixedSmall03.onclick=function(){
    rightFixedSmall01.className="";
    rightFixedSmall02.className="";
    rightFixedSmall03.className="right-fixed-small03";
    rightFixedSmall04.className="";
    rightFixedSmall05.className="";
    rightFixedSmall06.className="";
    window.scrollTo(0,1900);
  }
  rightFixedSmall04.onclick=function(){
    rightFixedSmall01.className="";
    rightFixedSmall02.className="";
    rightFixedSmall03.className="";
    rightFixedSmall04.className="right-fixed-small04";
    rightFixedSmall05.className="";
    rightFixedSmall06.className="";
    window.scrollTo(0,2600);
  }
  rightFixedSmall05.onclick=function(e){
    rightFixedSmall01.className="";
    rightFixedSmall02.className="";
    rightFixedSmall03.className="";
    rightFixedSmall04.className="";
    rightFixedSmall05.className="right-fixed-small05";
    rightFixedSmall06.className="";
    window.scrollTo(0,3200);
    /*e.preventDefault();
    var dist05=scrollTop;
    var steps05=32;
    var dura05=320;
    var step05=dist05/steps05;
    var interval05=dura05/steps05;
    var timer05=setInterval(function(){
      window.scrollBy(0,step05);
      steps05++;
      console.log(steps05);
      if(steps05==640){
        console.log(steps05);
        clearInterval(timer05);
        steps05=320;
      }
    },interval05)*/
  }
  rightFixedSmall06.onclick=function(e){
    rightFixedSmall01.className="";
    rightFixedSmall02.className="";
    rightFixedSmall03.className="";
    rightFixedSmall04.className="";
    rightFixedSmall05.className="";
    rightFixedSmall06.className="right-fixed-small06";
    e.preventDefault();
    //页面滚动的总距离
    var dist06=scrollTop;
    //总步数
    var steps06=50;
    //总时间
    var dura06=500;
    //每步走多长
    var step06=dist06/steps06;
    //每步间隔时间
    var interval06=dura06/steps06;
    var timer06=setInterval(function(){
      window.scrollBy(0,-step06);
      steps06--;
      if(steps06==0){
        clearInterval(timer06);
        steps06=1000;
      }
    },interval06);
  }
})();