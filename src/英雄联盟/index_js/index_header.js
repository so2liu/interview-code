(function(){
  var hidSearch=document.getElementsByClassName("hid-search")[0];
  var headerSearchBox=document.getElementsByClassName("header-search-box")[0];
  var hidSearchLeft=document.getElementsByClassName("hid-search-left")[0];
  hidSearch.style.display="none";
  headerSearchBox.onclick=function(){
    hidSearch.style.display="block";
      hidSearchLeft.onclick=function(){
      hidSearch.style.display="none";
    }
  }
})();
(function(){
  var headerItemsShadow=document.getElementsByClassName("header-items-shadow")[0];
  var headerNavigationBar=document.getElementsByClassName("header-navigation-bar")[0];
  headerNavigationBar.onmouseover=function(){
    headerItemsShadow.style.height=345+"px";
    headerItemsShadow.style.opacity=1;
    headerItemsShadow.style.marginTop=0+"px";
  }
  
  headerNavigationBar.onmouseout=function(){
    headerItemsShadow.style.height=0+"px";
    headerItemsShadow.style.opacity=0;
    headerItemsShadow.style.marginTop=-100+"px";
  }
  headerItemsShadow.onmouseover=function(){
    headerItemsShadow.style.height=345+"px";
    headerItemsShadow.style.opacity=1;
    headerItemsShadow.style.marginTop=0+"px";
  }
  headerItemsShadow.onmouseout=function(){
    headerItemsShadow.style.height=0+"px";
    headerItemsShadow.style.opacity=0;
    headerItemsShadow.style.marginTop=-100+"px";
  }
})();