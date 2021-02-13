//找到触发事件的元素
var activityDetails=document.getElementsByClassName("activity-details");
var ols=document.querySelectorAll(".activity-plate>div:nth-child(3)>ol");
var activityTypes=document.getElementsByClassName("activity-types");
//遍历i
for(var i=0;i<activityTypes.length;i++){
  //绑定鼠标滑动事件，处理函数
  activityTypes[i].onmouseover=function(){
    //遍历i
    for(var i=0;i<activityTypes.length;i++){
      //information-catalogue的下标对应i的值
      activityTypes[i].index=i;
      //设置每个位置的类选择器为information-catalogue
      activityTypes[i].className="activity-types";
      //每个ol隐藏
      activityDetails[i].style.display="none";
    }
    //当触发事件时，对应的的类选择器变为information-catalogue n
    this.className="activity-types"+" "+"n";
    //显示触发事件对应的隐藏ol
    activityDetails[this.index].style.display="block";
  }
}
//找到触发事件的元素
var videoSpecial=document.getElementById("video-special");
var newSkin=document.getElementsByClassName("new-skin")[0];
var newSkinHid=document.getElementsByClassName("new-skin-hid")[0];
newSkin.onmouseover=function(){
  videoSpecial.style.marginTop=160+"px";
  videoSpecial.style.transition=0.25+"s"+" "+"linear";
    newSkin.onmouseout=function(){
      videoSpecial.style.marginTop=0+"px";
    }
  newSkinHid.onmouseout=function(){
    videoSpecial.style.marginTop=0+"px";
  }
}
var gameDownloadBottomItemsHid=document.getElementsByClassName("game-download-bottom-items-hid")[0];
var Item8=document.querySelector(".game-download-bottom>.game-download-bottom-items>li:nth-child(8)");
var Item8Img=document.querySelector(".game-download-bottom>.game-download-bottom-items>li:nth-child(8)>a>div:nth-child(1)");
Item8.onmouseover=function(){
  var time01=new Date().getTime();
  Item8Img.style.marginLeft=-20+"px";
  Item8Img.style.transition=0.25+"s";
  Item8Img.style.borderRadius=50+"%";
  var t=setTimeout(function(){
    gameDownloadBottomItemsHid.style.display="block";
  },250);
Item8.onmouseout=function(){
  var time02=new Date().getTime();
  var sub=time02-time01;
  Item8Img.style.marginLeft=15+"px";
  Item8Img.style.borderRadius=0+"%";
  gameDownloadBottomItemsHid.style.display="none";
  if(sub>250){
    gameDownloadBottomItemsHid.style.display="blcok";
  }else{
    clearTimeout(t);
    gameDownloadBottomItemsHid.style.display="none";
    }
  }
}
gameDownloadBottomItemsHid.onmouseover=function(){
  gameDownloadBottomItemsHid.style.display="block";
  Item8Img.style.marginLeft=-20+"px";
}
gameDownloadBottomItemsHid.onmouseout=function(){
  Item8Img.style.marginLeft=15+"px";
  Item8Img.style.borderRadius=0+"%";
  gameDownloadBottomItemsHid.style.display="none";
}
