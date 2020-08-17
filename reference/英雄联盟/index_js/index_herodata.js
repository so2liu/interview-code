//找到触发事件的元素
var heroType=document.getElementById("hero-type");
var heroType=heroType.getElementsByTagName("ul");
var heroCharactor=heroData.getElementsByClassName("hero-charactor");
//遍历i
for(var i=0;i<heroCharactor.length;i++){
  //绑定单机事件，处理函数
  heroCharactor[i].onclick=function(){
    //遍历i
    for(var i=0;i<heroCharactor.length;i++){
      //hero-charactor的下标对应i的值
      heroCharactor[i].index=i;
      //设置每个位置的类选择器为hero-charactor
      heroCharactor[i].className="hero-charactor";
      //每个ul隐藏
      heroType[i].style.display="none";
    }
    //当触发事件时，对应的的类选择器变为hero-charactor n
    this.className="hero-charactor"+" "+"n";
    //显示触发事件对应的隐藏ul
    heroType[this.index].style.display="block";
  }
}