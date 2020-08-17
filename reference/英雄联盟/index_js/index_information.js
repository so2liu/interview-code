//找到触发事件的元素
var informationContent=document.getElementById("information-content");
var informationContent=document.getElementsByTagName("ol");
var informationCatalogue=document.getElementsByClassName("information-catalogue");
//遍历i
for(var i=0;i<informationCatalogue.length;i++){
  //绑定鼠标滑动事件，处理函数
  informationCatalogue[i].onmouseover=function(){
    //遍历i
    for(var i=0;i<informationCatalogue.length;i++){
      //information-catalogue的下标对应i的值
      informationCatalogue[i].index=i;
      //设置每个位置的类选择器为information-catalogue
      informationCatalogue[i].className="information-catalogue";
      //每个ol隐藏
      informationContent[i].style.display="none";
    }
    //当触发事件时，对应的的类选择器变为information-catalogue n
    this.className="information-catalogue"+" "+"n";
    //显示触发事件对应的隐藏ol
    informationContent[this.index].style.display="block";
  }
}