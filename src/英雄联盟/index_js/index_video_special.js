var videoDetails=document.querySelectorAll(".video-plate>div:nth-child(3)>ol");
var videoTypes=document.getElementsByClassName("video-types");
for(var i=0;i<videoTypes.length;i++){
  videoTypes[i].onmouseover=function(){
    for(var i=0;i<videoTypes.length;i++){
      videoTypes[i].index=i;
      videoTypes[i].className="video-types";
      videoDetails[i].style.display="none";
    }
    this.className="video-types"+" "+"n";
    videoDetails[this.index].style.display="block";
  }
}
var specialDetails=document.querySelectorAll(".special-plate>div:nth-child(3)>ol");
var specialDays=document.getElementsByClassName("special-days");
var daysArrows=document.querySelectorAll(".special-plate>div:nth-child(4)>div");
for(var i=0;i<specialDays.length;i++){
  specialDays[i].onmouseover=function(){
    for(var i=0;i<specialDays.length;i++){
      specialDays[i].index=i;
      specialDays[i].className="special-days";
      specialDetails[i].style.display="none";
      daysArrows[i].style.display="none";
    }
    this.className="special-days"+" "+"n";
    specialDetails[this.index].style.display="block";
    daysArrows[this.index].style.display="block";
  }
}
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT01=2;
  var DURATION01=500;
  var specialDetailsDay01=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(2)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay01.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay01.style.transition=0+"s";
        specialDetailsDay01.style.marginLeft=-LIWIDTH*LICOUNT01+"px";
        setTimeout(function(){
          moveTo(LICOUNT01-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay01.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT01){
      i=0;
      setTimeout(function(){
        specialDetailsDay01.style.transition=0+"s";
        specialDetailsDay01.style.marginLeft=0+"px";
      },DURATION01)
    }
  }
  var imgsLeftDay01=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(1)>div:nth-child(1)");
  var imgsRightDay01=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay01.onclick=function(){
    move(1)
  }
  
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION01+100);
    }
  }
  imgsRightDay01.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay01.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay01.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay01.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay01.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay01.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay01.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT02=3;
  var DURATION02=500;
  var specialDetailsDay02=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(3)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay02.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay02.style.transition=0+"s";
        specialDetailsDay02.style.marginLeft=-LIWIDTH*LICOUNT02+"px";
        setTimeout(function(){
          moveTo(LICOUNT02-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay02.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT02){
      i=0;
      setTimeout(function(){
        specialDetailsDay02.style.transition=0+"s";
        specialDetailsDay02.style.marginLeft=0+"px";
      },DURATION02)
    }
  }
  var imgsLeftDay02=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(2)>div:nth-child(1)");
  var imgsRightDay02=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay02.onclick=function(){
    move(1)
    console.log(5555);
  }
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION02+100);
    }
  }
  imgsRightDay02.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay02.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay02.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay02.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay02.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay02.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay02.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT03=2;
  var DURATION03=500;
  var specialDetailsDay03=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(4)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay03.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay03.style.transition=0+"s";
        specialDetailsDay03.style.marginLeft=-LIWIDTH*LICOUNT03+"px";
        setTimeout(function(){
          moveTo(LICOUNT03-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay03.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT03){
      i=0;
      setTimeout(function(){
        specialDetailsDay03.style.transition=0+"s";
        specialDetailsDay03.style.marginLeft=0+"px";
      },DURATION03)
    }
  }
  var imgsLeftDay03=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(3)>div:nth-child(1)");
  var imgsRightDay03=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay03.onclick=function(){
    move(1)
  }
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION03+100);
    }
  }
  imgsRightDay03.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay03.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay03.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay03.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay03.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay03.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay03.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT04=3;
  var DURATION04=500;
  var specialDetailsDay04=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(5)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay04.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay04.style.transition=0+"s";
        specialDetailsDay04.style.marginLeft=-LIWIDTH*LICOUNT04+"px";
        setTimeout(function(){
          moveTo(LICOUNT04-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay04.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT04){
      i=0;
      setTimeout(function(){
        specialDetailsDay04.style.transition=0+"s";
        specialDetailsDay04.style.marginLeft=0+"px";
      },DURATION04)
    }
  }
  var imgsLeftDay04=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(4)>div:nth-child(1)");
  var imgsRightDay04=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay04.onclick=function(){
    move(1)
  }
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION04+100);
    }
  }
  imgsRightDay04.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay04.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay04.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay04.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay04.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay04.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay04.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT05=3;
  var DURATION05=500;
  var specialDetailsDay05=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(6)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay05.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay05.style.transition=0+"s";
        specialDetailsDay05.style.marginLeft=-LIWIDTH*LICOUNT05+"px";
        setTimeout(function(){
          moveTo(LICOUNT05-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay05.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT05){
      i=0;
      setTimeout(function(){
        specialDetailsDay05.style.transition=0+"s";
        specialDetailsDay05.style.marginLeft=0+"px";
      },DURATION05)
    }
  }
  var imgsLeftDay05=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(5)>div:nth-child(1)");
  var imgsRightDay05=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(5)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay05.onclick=function(){
    move(1)
  }
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION05+100);
    }
  }
  imgsRightDay05.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay05.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay05.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay05.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay05.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay05.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay05.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT06=2;
  var DURATION06=500;
  var specialDetailsDay06=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(7)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay06.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay06.style.transition=0+"s";
        specialDetailsDay06.style.marginLeft=-LIWIDTH*LICOUNT06+"px";
        setTimeout(function(){
          moveTo(LICOUNT06-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay06.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT06){
      i=0;
      setTimeout(function(){
        specialDetailsDay06.style.transition=0+"s";
        specialDetailsDay06.style.marginLeft=0+"px";
      },DURATION06)
    }
  }
  var imgsLeftDay06=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(6)>div:nth-child(1)");
  var imgsRightDay06=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(6)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay06.onclick=function(){
    move(1)
  }
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION06+100);
    }
  }
  imgsRightDay06.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay06.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay06.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay06.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay06.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay06.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay06.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();
(function(){
  var i=0;
  var LIWIDTH=516;
  var LICOUNT07=3;
  var DURATION07=500;
  var specialDetailsDay07=document.querySelector(".special-plate>div:nth-child(3)>ol:nth-child(8)");
  function moveTo(to){
    if(to==undefined){
      to=i+1;
    }
    if(i==0){
      if(to>i){
        specialDetailsDay07.style.transition=0.5+"s"+" "+"linear";
      }else{
        specialDetailsDay07.style.transition=0+"s";
        specialDetailsDay07.style.marginLeft=-LIWIDTH*LICOUNT07+"px";
        setTimeout(function(){
          moveTo(LICOUNT07-1);
        },100);
        return;
      }
    }
    i=to;
    specialDetailsDay07.style.marginLeft=-i*LIWIDTH+"PX";
    if(i==LICOUNT07){
      i=0;
      setTimeout(function(){
        specialDetailsDay07.style.transition=0+"s";
        specialDetailsDay07.style.marginLeft=0+"px";
      },DURATION07)
    }
  }
  var imgsLeftDay07=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(7)>div:nth-child(1)");
  var imgsRightDay07=document.querySelector(".special-plate>div:nth-child(4)>div:nth-child(7)>div:nth-child(2)");
  var canClick=true;
  imgsLeftDay07.onclick=function(){
    move(1)
  }
  function move(n){
    if(canClick){
      moveTo(i+n);
      canClick=false;
      setTimeout(function(){
        canClick=true;
      },DURATION07+100);
    }
  }
  imgsRightDay07.onclick=function(){
    move(-1);
  }
  var timer=setInterval(function(){
    moveTo()
  },1500);
  specialDetailsDay07.onmouseover=function(){
    clearInterval(timer);
  }
  specialDetailsDay07.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsLeftDay07.onmouseover=function(){
    clearInterval(timer);
  }
  imgsLeftDay07.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
  imgsRightDay07.onmouseover=function(){
    clearInterval(timer);
  }
  imgsRightDay07.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },1500);
  }
})();