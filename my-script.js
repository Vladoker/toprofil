document.addEventListener("DOMContentLoaded", function(){
  var section = document.querySelector(".benefits_section");
  var list = section.querySelector(".list");
  for(item of list.children) {
    item.addEventListener("click", function(e) {
      e.target.closest("li").classList.toggle("active");
    })
  }
});