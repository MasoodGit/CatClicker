
(function(){
  var Cat_Names = [
  {
   "name"  : "Persian Cat",
   "img"   : "./images/cat.jpg",
   "count" : 0
 },
 {
   "name" : "Egyptian Cat",
   "img" :"./images/cat_two.jpg",
   "count" : 0
 },
 {
   "name" : "Jerry Cat",
   "img" :"./images/cat_three.jpg",
   "count" : 0
 },
 {
   "name" : "Blue Cat",
   "img" :"./images/cat.jpg",
   "count" : 0
 },
 {
   "name" : "Furry Cat",
   "img" :"./images/cat_three.jpg",
   "count" : 0
 }];
  
  //  Create list of cats 
  var $list = $("#catNamesList");
  var $docFragment = $(document.createDocumentFragment());
  for (var i = 0; i < Cat_Names.length; i++) {
    var currentCat = Cat_Names[i];
    var $element = $('<li></li>');
    $element.append("<a href= '#'>" +  currentCat.name + "</a>");
    $element.on('click', (function(cat){
      return function () {
        $("#cat_name").text(cat.name);
        $("#cat_counter").text(++cat.count);
        $("#cat_image").attr("src",cat.img);
      };
    })(currentCat));
    $docFragment.append($element);
  }
  $list.append($docFragment);
})();
