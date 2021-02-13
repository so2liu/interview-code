(function(){
  var eventDetails=document.getElementsByClassName("event-details");
  var eventTypes=document.getElementsByClassName("event-types");
  for(var i=0;i<eventTypes.length;i++){
    eventTypes[i].onmouseover=function(){
      for(var i=0;i<eventTypes.length;i++){
        eventTypes[i].index=i;
        eventTypes[i].className="event-types";
        eventDetails[i].style.display="none";
      }
      this.className="event-types"+" "+"n";
      eventDetails[this.index].style.display="block";
    }
  }
})();
(function(){
  var summerLeft=document.getElementById("summer-left");
  var summerRight=document.getElementById("summer-right");
  var eventSummerContent=document.querySelectorAll(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(1)>ul>li");
  var eventSummerPlate=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(1)>ul");
  var lisSummer=95;
  summerRight.onclick=function(){
    if(lisSummer<eventSummerContent.length-5){
      lisSummer+=5;
      eventSummerPlate.style.marginLeft=-275.5*lisSummer+"px";
      eventSummerPlate.style.transition=0.5+"s"+" "+"linear";
      console.log(lisSummer);
    }
  }
  summerLeft.onclick=function(){
    if(lisSummer>0){
      lisSummer-=5;
      eventSummerPlate.style.marginLeft=-275.5*lisSummer+"px";
      eventSummerPlate.style.transition=0.5+"s"+" "+"linear";
      console.log(lisSummer);
    }
  }
})();
(function(){
  var springLeft=document.getElementById("spring-left");
  var springRight=document.getElementById("spring-right");
  var eventSpringContent=document.querySelectorAll(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(1)>ul>li");
  var eventSpringPlate=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(1)>ul");
  var lisSpring=115;
  springRight.onclick=function(){
    if(lisSpring<eventSpringContent.length-5){
      lisSpring+=5;
      eventSpringPlate.style.marginLeft=-275.5*lisSpring+"px";
      eventSpringPlate.style.transition=0.5+"s"+" "+"linear";
    }
  }
  springLeft.onclick=function(){
    if(lisSpring>0){
      lisSpring-=5;
      eventSpringPlate.style.marginLeft=-275.5*lisSpring+"px";
      eventSpringPlate.style.transition=0.5+"s"+" "+"linear";
    }
  }
})();
(function(){
  playerSummerTop=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(3)"); 
  var playerSummerDetails=document.querySelectorAll(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)~ol");
  var eventSummerPlaces=document.querySelectorAll(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)>li");
  var summerTop=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(1)");
  var playersSummerTop01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(1)");
  var playersSummerTop02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(2)");
  var playersSummerTop03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(3)");
  var playersSummerTop04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(4)");
  var playersSummerTop05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(5)");
  var summerJunjle=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(2)");
  var playersSummerJunjle01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(1)");
  var playersSummerJunjle02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(2)");
  var playersSummerJunjle03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(3)");
  var playersSummerJunjle04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(4)");
  var playersSummerJunjle05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(5)");
  var summerWay=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(3)");
  var playersSummerWay01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(1)");
  var playersSummerWay02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(2)");
  var playersSummerWay03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(3)");
  var playersSummerWay04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(4)");
  var playersSummerWay05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(5)");
  var summerDown=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(4)");
  var playersSummerDown01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(1)");
  var playersSummerDown02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(2)");
  var playersSummerDown03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(3)");
  var playersSummerDown04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(4)");
  var playersSummerDown05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(5)");
  var summerAssist=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(5)");
  var playersSummerAssist01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(1)");
  var playersSummerAssist02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(2)");
  var playersSummerAssist03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(3)");
  var playersSummerAssist04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(4)");
  var playersSummerAssist05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(4)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(5)");
  playerSummerTop.style.marginLeft=0+"px";
  for(var i=0;i<eventSummerPlaces.length;i++){
    eventSummerPlaces[i].addEventListener("mouseover",function(){
      for(var i=0;i<eventSummerPlaces.length;i++){
        eventSummerPlaces[i].index=i;
        eventSummerPlaces[i].className="event-places";
        playerSummerDetails[i].style.display="none";
        summerTop.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSummerTop01.style.marginLeft=0+"px";
            playersSummerTop01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSummerTop02.style.marginLeft=16+"px";
            playersSummerTop02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSummerTop03.style.marginLeft=16+"px";
            playersSummerTop03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSummerTop04.style.marginLeft=16+"px";
            playersSummerTop04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSummerTop05.style.marginLeft=16+"px";
            playersSummerTop05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSummerJunjle01.style.marginLeft=0+"px";
          playersSummerJunjle02.style.marginLeft=0+"px";
          playersSummerJunjle03.style.marginLeft=0+"px";
          playersSummerJunjle04.style.marginLeft=0+"px";
          playersSummerJunjle05.style.marginLeft=0+"px";
          playersSummerWay01.style.marginLeft=0+"px";
          playersSummerWay02.style.marginLeft=0+"px";
          playersSummerWay03.style.marginLeft=0+"px";
          playersSummerWay04.style.marginLeft=0+"px";
          playersSummerWay05.style.marginLeft=0+"px";
          playersSummerDown01.style.marginLeft=0+"px";
          playersSummerDown02.style.marginLeft=0+"px";
          playersSummerDown03.style.marginLeft=0+"px";
          playersSummerDown04.style.marginLeft=0+"px";
          playersSummerDown05.style.marginLeft=0+"px";
          playersSummerAssist01.style.marginLeft=0+"px";
          playersSummerAssist02.style.marginLeft=0+"px";
          playersSummerAssist03.style.marginLeft=0+"px";
          playersSummerAssist04.style.marginLeft=0+"px";
          playersSummerAssist05.style.marginLeft=0+"px";
        });
        summerJunjle.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSummerJunjle01.style.marginLeft=-820+"px";
            playersSummerJunjle01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSummerJunjle02.style.marginLeft=-653+"px";
            playersSummerJunjle02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSummerJunjle03.style.marginLeft=-486+"px";
            playersSummerJunjle03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSummerJunjle04.style.marginLeft=-319+"px";
            playersSummerJunjle04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSummerJunjle05.style.marginLeft=-152+"px";
            playersSummerJunjle05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSummerTop01.style.marginLeft=820+"px";
          playersSummerTop02.style.marginLeft=653+"px";
          playersSummerTop03.style.marginLeft=486+"px";
          playersSummerTop04.style.marginLeft=319+"px";
          playersSummerTop05.style.marginLeft=152+"px";
          playersSummerWay01.style.marginLeft=0+"px";
          playersSummerWay02.style.marginLeft=0+"px";
          playersSummerWay03.style.marginLeft=0+"px";
          playersSummerWay04.style.marginLeft=0+"px";
          playersSummerWay05.style.marginLeft=0+"px";
          playersSummerDown01.style.marginLeft=0+"px";
          playersSummerDown02.style.marginLeft=0+"px";
          playersSummerDown03.style.marginLeft=0+"px";
          playersSummerDown04.style.marginLeft=0+"px";
          playersSummerDown05.style.marginLeft=0+"px";
          playersSummerAssist01.style.marginLeft=0+"px";
          playersSummerAssist02.style.marginLeft=0+"px";
          playersSummerAssist03.style.marginLeft=0+"px";
          playersSummerAssist04.style.marginLeft=0+"px";
          playersSummerAssist05.style.marginLeft=0+"px";
        });
        summerWay.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSummerWay01.style.marginLeft=-820+"px";
            playersSummerWay01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSummerWay02.style.marginLeft=-653+"px";
            playersSummerWay02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSummerWay03.style.marginLeft=-486+"px";
            playersSummerWay03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSummerWay04.style.marginLeft=-319+"px";
            playersSummerWay04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSummerWay05.style.marginLeft=-152+"px";
            playersSummerWay05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSummerTop01.style.marginLeft=820+"px";
          playersSummerTop02.style.marginLeft=653+"px";
          playersSummerTop03.style.marginLeft=486+"px";
          playersSummerTop04.style.marginLeft=319+"px";
          playersSummerTop05.style.marginLeft=152+"px";
          playersSummerJunjle01.style.marginLeft=0+"px";
          playersSummerJunjle02.style.marginLeft=0+"px";
          playersSummerJunjle03.style.marginLeft=0+"px";
          playersSummerJunjle04.style.marginLeft=0+"px";
          playersSummerJunjle05.style.marginLeft=0+"px";
          playersSummerDown01.style.marginLeft=0+"px";
          playersSummerDown02.style.marginLeft=0+"px";
          playersSummerDown03.style.marginLeft=0+"px";
          playersSummerDown04.style.marginLeft=0+"px";
          playersSummerDown05.style.marginLeft=0+"px";
          playersSummerAssist01.style.marginLeft=0+"px";
          playersSummerAssist02.style.marginLeft=0+"px";
          playersSummerAssist03.style.marginLeft=0+"px";
          playersSummerAssist04.style.marginLeft=0+"px";
          playersSummerAssist05.style.marginLeft=0+"px";
        });
        summerDown.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSummerDown01.style.marginLeft=-820+"px";
            playersSummerDown01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSummerDown02.style.marginLeft=-653+"px";
            playersSummerDown02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSummerDown03.style.marginLeft=-486+"px";
            playersSummerDown03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSummerDown04.style.marginLeft=-319+"px";
            playersSummerDown04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSummerDown05.style.marginLeft=-152+"px";
            playersSummerDown05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSummerTop01.style.marginLeft=820+"px";
          playersSummerTop02.style.marginLeft=653+"px";
          playersSummerTop03.style.marginLeft=486+"px";
          playersSummerTop04.style.marginLeft=319+"px";
          playersSummerTop05.style.marginLeft=152+"px";
          playersSummerJunjle01.style.marginLeft=0+"px";
          playersSummerJunjle02.style.marginLeft=0+"px";
          playersSummerJunjle03.style.marginLeft=0+"px";
          playersSummerJunjle04.style.marginLeft=0+"px";
          playersSummerJunjle05.style.marginLeft=0+"px";
          playersSummerWay01.style.marginLeft=0+"px";
          playersSummerWay02.style.marginLeft=0+"px";
          playersSummerWay03.style.marginLeft=0+"px";
          playersSummerWay04.style.marginLeft=0+"px";
          playersSummerWay05.style.marginLeft=0+"px";
          playersSummerAssist01.style.marginLeft=0+"px";
          playersSummerAssist02.style.marginLeft=0+"px";
          playersSummerAssist03.style.marginLeft=0+"px";
          playersSummerAssist04.style.marginLeft=0+"px";
          playersSummerAssist05.style.marginLeft=0+"px";
        });
        summerAssist.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSummerAssist01.style.marginLeft=-820+"px";
            playersSummerAssist01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSummerAssist02.style.marginLeft=-653+"px";
            playersSummerAssist02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSummerAssist03.style.marginLeft=-486+"px";
            playersSummerAssist03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSummerAssist04.style.marginLeft=-319+"px";
            playersSummerAssist04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSummerAssist05.style.marginLeft=-152+"px";
            playersSummerAssist05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSummerTop01.style.marginLeft=820+"px";
          playersSummerTop02.style.marginLeft=653+"px";
          playersSummerTop03.style.marginLeft=486+"px";
          playersSummerTop04.style.marginLeft=319+"px";
          playersSummerTop05.style.marginLeft=152+"px";
          playersSummerJunjle01.style.marginLeft=0+"px";
          playersSummerJunjle02.style.marginLeft=0+"px";
          playersSummerJunjle03.style.marginLeft=0+"px";
          playersSummerJunjle04.style.marginLeft=0+"px";
          playersSummerJunjle05.style.marginLeft=0+"px";
          playersSummerWay01.style.marginLeft=0+"px";
          playersSummerWay02.style.marginLeft=0+"px";
          playersSummerWay03.style.marginLeft=0+"px";
          playersSummerWay04.style.marginLeft=0+"px";
          playersSummerWay05.style.marginLeft=0+"px";
          playersSummerDown01.style.marginLeft=0+"px";
          playersSummerDown02.style.marginLeft=0+"px";
          playersSummerDown03.style.marginLeft=0+"px";
          playersSummerDown04.style.marginLeft=0+"px";
          playersSummerDown05.style.marginLeft=0+"px";
        });
      }
      this.className="event-places"+" "+"n";
      playerSummerDetails[this.index].style.display="block";
    })
  }
})();
(function(){
  playerSpringTop=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(3)"); 
  var playerSpringDetails=document.querySelectorAll(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)~ol");
  var eventSpringPlaces=document.querySelectorAll(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)>li");
  var springTop=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(1)");
  var playersSpringTop01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(1)");
  var playersSpringTop02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(2)");
  var playersSpringTop03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(3)");
  var playersSpringTop04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(4)");
  var playersSpringTop05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(3)>li:nth-child(5)");
  var springJunjle=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(2)");
  var playersSpringJunjle01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(1)");
  var playersSpringJunjle02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(2)");
  var playersSpringJunjle03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(3)");
  var playersSpringJunjle04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(4)");
  var playersSpringJunjle05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(4)>li:nth-child(5)");
  var springWay=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(3)");
  var playersSpringWay01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(1)");
  var playersSpringWay02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(2)");
  var playersSpringWay03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(3)");
  var playersSpringWay04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(4)");
  var playersSpringWay05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(5)>li:nth-child(5)");
  var springDown=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(4)");
  var playersSpringDown01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(1)");
  var playersSpringDown02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(2)");
  var playersSpringDown03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(3)");
  var playersSpringDown04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(4)");
  var playersSpringDown05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(6)>li:nth-child(5)");
  var springAssist=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ul:nth-child(2)>li:nth-child(5)");
  var playersSpringAssist01=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(1)");
  var playersSpringAssist02=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(2)");
  var playersSpringAssist03=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(3)");
  var playersSpringAssist04=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(4)");
  var playersSpringAssist05=document.querySelector(".event-center>div:nth-child(3)>ol:nth-child(2)>div:nth-child(3)>ol:nth-child(7)>li:nth-child(5)");
  playerSpringTop.style.marginLeft=0+"px";
  for(var i=0;i<eventSpringPlaces.length;i++){
    eventSpringPlaces[i].addEventListener("mouseover",function(){
      for(var i=0;i<eventSpringPlaces.length;i++){
        eventSpringPlaces[i].index=i;
        eventSpringPlaces[i].className="event-places";
        playerSpringDetails[i].style.display="none";
        springTop.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSpringTop01.style.marginLeft=0+"px";
            playersSpringTop01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSpringTop02.style.marginLeft=16+"px";
            playersSpringTop02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSpringTop03.style.marginLeft=16+"px";
            playersSpringTop03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSpringTop04.style.marginLeft=16+"px";
            playersSpringTop04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSpringTop05.style.marginLeft=16+"px";
            playersSpringTop05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSpringJunjle01.style.marginLeft=0+"px";
          playersSpringJunjle02.style.marginLeft=0+"px";
          playersSpringJunjle03.style.marginLeft=0+"px";
          playersSpringJunjle04.style.marginLeft=0+"px";
          playersSpringJunjle05.style.marginLeft=0+"px";
          playersSpringWay01.style.marginLeft=0+"px";
          playersSpringWay02.style.marginLeft=0+"px";
          playersSpringWay03.style.marginLeft=0+"px";
          playersSpringWay04.style.marginLeft=0+"px";
          playersSpringWay05.style.marginLeft=0+"px";
          playersSpringDown01.style.marginLeft=0+"px";
          playersSpringDown02.style.marginLeft=0+"px";
          playersSpringDown03.style.marginLeft=0+"px";
          playersSpringDown04.style.marginLeft=0+"px";
          playersSpringDown05.style.marginLeft=0+"px";
          playersSpringAssist01.style.marginLeft=0+"px";
          playersSpringAssist02.style.marginLeft=0+"px";
          playersSpringAssist03.style.marginLeft=0+"px";
          playersSpringAssist04.style.marginLeft=0+"px";
          playersSpringAssist05.style.marginLeft=0+"px";
        });
        springJunjle.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSpringJunjle01.style.marginLeft=-820+"px";
            playersSpringJunjle01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSpringJunjle02.style.marginLeft=-653+"px";
            playersSpringJunjle02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSpringJunjle03.style.marginLeft=-486+"px";
            playersSpringJunjle03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSpringJunjle04.style.marginLeft=-319+"px";
            playersSpringJunjle04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSpringJunjle05.style.marginLeft=-152+"px";
            playersSpringJunjle05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSpringTop01.style.marginLeft=820+"px";
          playersSpringTop02.style.marginLeft=653+"px";
          playersSpringTop03.style.marginLeft=486+"px";
          playersSpringTop04.style.marginLeft=319+"px";
          playersSpringTop05.style.marginLeft=152+"px";
          playersSpringWay01.style.marginLeft=0+"px";
          playersSpringWay02.style.marginLeft=0+"px";
          playersSpringWay03.style.marginLeft=0+"px";
          playersSpringWay04.style.marginLeft=0+"px";
          playersSpringWay05.style.marginLeft=0+"px";
          playersSpringDown01.style.marginLeft=0+"px";
          playersSpringDown02.style.marginLeft=0+"px";
          playersSpringDown03.style.marginLeft=0+"px";
          playersSpringDown04.style.marginLeft=0+"px";
          playersSpringDown05.style.marginLeft=0+"px";
          playersSpringAssist01.style.marginLeft=0+"px";
          playersSpringAssist02.style.marginLeft=0+"px";
          playersSpringAssist03.style.marginLeft=0+"px";
          playersSpringAssist04.style.marginLeft=0+"px";
          playersSpringAssist05.style.marginLeft=0+"px";
        });
        springWay.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSpringWay01.style.marginLeft=-820+"px";
            playersSpringWay01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSpringWay02.style.marginLeft=-653+"px";
            playersSpringWay02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSpringWay03.style.marginLeft=-486+"px";
            playersSpringWay03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSpringWay04.style.marginLeft=-319+"px";
            playersSpringWay04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSpringWay05.style.marginLeft=-152+"px";
            playersSpringWay05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSpringTop01.style.marginLeft=820+"px";
          playersSpringTop02.style.marginLeft=653+"px";
          playersSpringTop03.style.marginLeft=486+"px";
          playersSpringTop04.style.marginLeft=319+"px";
          playersSpringTop05.style.marginLeft=152+"px";
          playersSpringJunjle01.style.marginLeft=0+"px";
          playersSpringJunjle02.style.marginLeft=0+"px";
          playersSpringJunjle03.style.marginLeft=0+"px";
          playersSpringJunjle04.style.marginLeft=0+"px";
          playersSpringJunjle05.style.marginLeft=0+"px";
          playersSpringDown01.style.marginLeft=0+"px";
          playersSpringDown02.style.marginLeft=0+"px";
          playersSpringDown03.style.marginLeft=0+"px";
          playersSpringDown04.style.marginLeft=0+"px";
          playersSpringDown05.style.marginLeft=0+"px";
          playersSpringAssist01.style.marginLeft=0+"px";
          playersSpringAssist02.style.marginLeft=0+"px";
          playersSpringAssist03.style.marginLeft=0+"px";
          playersSpringAssist04.style.marginLeft=0+"px";
          playersSpringAssist05.style.marginLeft=0+"px";
        });
        springDown.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSpringDown01.style.marginLeft=-820+"px";
            playersSpringDown01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSpringDown02.style.marginLeft=-653+"px";
            playersSpringDown02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSpringDown03.style.marginLeft=-486+"px";
            playersSpringDown03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSpringDown04.style.marginLeft=-319+"px";
            playersSpringDown04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSpringDown05.style.marginLeft=-152+"px";
            playersSpringDown05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSpringTop01.style.marginLeft=820+"px";
          playersSpringTop02.style.marginLeft=653+"px";
          playersSpringTop03.style.marginLeft=486+"px";
          playersSpringTop04.style.marginLeft=319+"px";
          playersSpringTop05.style.marginLeft=152+"px";
          playersSpringJunjle01.style.marginLeft=0+"px";
          playersSpringJunjle02.style.marginLeft=0+"px";
          playersSpringJunjle03.style.marginLeft=0+"px";
          playersSpringJunjle04.style.marginLeft=0+"px";
          playersSpringJunjle05.style.marginLeft=0+"px";
          playersSpringWay01.style.marginLeft=0+"px";
          playersSpringWay02.style.marginLeft=0+"px";
          playersSpringWay03.style.marginLeft=0+"px";
          playersSpringWay04.style.marginLeft=0+"px";
          playersSpringWay05.style.marginLeft=0+"px";
          playersSpringAssist01.style.marginLeft=0+"px";
          playersSpringAssist02.style.marginLeft=0+"px";
          playersSpringAssist03.style.marginLeft=0+"px";
          playersSpringAssist04.style.marginLeft=0+"px";
          playersSpringAssist05.style.marginLeft=0+"px";
        });
        springAssist.addEventListener("mouseover",function(){
          setTimeout(function(){
            playersSpringAssist01.style.marginLeft=-820+"px";
            playersSpringAssist01.style.transition=0.26+"s"+" "+"linear";
          },10);
          setTimeout(function(){
            playersSpringAssist02.style.marginLeft=-653+"px";
            playersSpringAssist02.style.transition=0.23+"s"+" "+"linear";
          },270);
          setTimeout(function(){
            playersSpringAssist03.style.marginLeft=-486+"px";
            playersSpringAssist03.style.transition=0.2+"s"+" "+"linear";
          },500);
          setTimeout(function(){
            playersSpringAssist04.style.marginLeft=-319+"px";
            playersSpringAssist04.style.transition=0.17+"s"+" "+"linear";
          },700);
          setTimeout(function(){
            playersSpringAssist05.style.marginLeft=-152+"px";
            playersSpringAssist05.style.transition=0.14+"s"+" "+"linear";
          },870);
          playersSpringTop01.style.marginLeft=820+"px";
          playersSpringTop02.style.marginLeft=653+"px";
          playersSpringTop03.style.marginLeft=486+"px";
          playersSpringTop04.style.marginLeft=319+"px";
          playersSpringTop05.style.marginLeft=152+"px";
          playersSpringJunjle01.style.marginLeft=0+"px";
          playersSpringJunjle02.style.marginLeft=0+"px";
          playersSpringJunjle03.style.marginLeft=0+"px";
          playersSpringJunjle04.style.marginLeft=0+"px";
          playersSpringJunjle05.style.marginLeft=0+"px";
          playersSpringWay01.style.marginLeft=0+"px";
          playersSpringWay02.style.marginLeft=0+"px";
          playersSpringWay03.style.marginLeft=0+"px";
          playersSpringWay04.style.marginLeft=0+"px";
          playersSpringWay05.style.marginLeft=0+"px";
          playersSpringDown01.style.marginLeft=0+"px";
          playersSpringDown02.style.marginLeft=0+"px";
          playersSpringDown03.style.marginLeft=0+"px";
          playersSpringDown04.style.marginLeft=0+"px";
          playersSpringDown05.style.marginLeft=0+"px";
        });
      }
      this.className="event-places"+" "+"n";
      playerSpringDetails[this.index].style.display="block";
    })
  }
})();