var divs = ["box1", "box2", "box3", "box4", "box5", "box6"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
}

var autoExpandingTextArea = (function(){
  var tag = document.querySelectorAll('textarea');
 
  for (var i=0; i<tag.length; i++){
    tag[i].addEventListener('paste',autoExpand);
    tag[i].addEventListener('input',autoExpand);
    tag[i].addEventListener('keyup',autoExpand);
  }
  
  function autoExpand(e, el){
    var el = el || e.target;
    var paddingTop = parseInt(window.getComputedStyle(el, null).getPropertyValue('padding-top'));
    var paddingBottom = parseInt(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
    el.style.height = 'auto';
    console.log(el.scrollHeight);
    el.style.height = (el.scrollHeight - (paddingTop + paddingBottom)) + 'px';
  }
  
  window.addEventListener('load',expandAll);
  window.addEventListener('resize',expandAll);
  
  function expandAll(e){
    var tag = document.querySelectorAll('textarea');
    
    for (var i=0; i<tag.length; i++){
      autoExpand(e,tag[i]);
    }
  }
})();

//Show more option [Posts, About.....]
const toggleBox = document.getElementById('toggleBox');
const moreBx = document.getElementById('moreBx');

toggleBox.addEventListener('click', () => {
  moreBx.classList.toggle('container___784hyr78r');
})
