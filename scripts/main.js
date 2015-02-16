
(function(){
  var Cat_Names = ["Persian Cat","Egyptian Cat"];
  //  Setup the cat names
  var catOneName = document.getElementById('cat_one');
  var catTwoName = document.getElementById('cat_two');
  catOneName.innerText = Cat_Names[0];
  catTwoName.innerText = Cat_Names[1];
  //  Setup Handler to handle click event on cats
  $('.catPicture').on('click',function(){
    var $counterSpan = $(this).find("span");
    var counterValue = parseInt($counterSpan.text());
    $counterSpan.text(++counterValue);
  });
})();