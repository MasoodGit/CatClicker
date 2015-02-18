$(function(){
var model = {
  currentCat : 1,
  cats  : [
  {
    "id" : 1,
    "name"  : "Persian Cat",
    "img"   : "./images/cat.jpg",
    "count" : 0
  },
  {
    "id" : 2,
    "name" : "Egyptian Cat",
    "img" :"./images/cat_two.jpg",
    "count" : 0
  },
  {
    "id" : 3,
   "name" : "Jerry Cat",
   "img" :"./images/cat_three.jpg",
   "count" : 0
  },
  {
    "id" : 4,
   "name" : "Blue Cat",
   "img" :"./images/cat.jpg",
   "count" : 0
  },
  {
    "id" : 5,
   "name" : "Furry Cat",
   "img" :"./images/cat_three.jpg",
   "count" : 0
  }]
};

//view to display list of cat names on left side
var listView = {
  init : function(){
    this.$catList = $('#catNamesList');
    this.catTemplate = $('script[data-template="catTemplate"]').html();
    // this.$catList.on('click','.cat',function(e){
    //   var catId = $(this).parents('.cat').data().id;
    //   octopus.setCurrentCat(catId);
    //   return false;
    // });
    this.render();
  },
  render : function(){
    var $catList = this.$catList,
        catTemplate = this.catTemplate;

    $catList.html('');
    octopus.getCats().forEach(function(cat){
      var thisTemplate = catTemplate
                         .replace(/{{id}}/g,cat.id)
                         .replace(/{{name}}/g,cat.name);
      $thisTemplate = $($.parseHTML(thisTemplate));
      $thisTemplate.on('click','.cat',(function(catCopy){
        return function(){
          octopus.setCurrentCat(catCopy);
          detailView.render();
        };
      })(cat));
      $catList.append($thisTemplate);
    });
  }

};

//view to display the cat image / name / and count
var detailView = {
  init : function(){
    $("#cat_image").on('click',function(){
      var cat = octopus.getCurrentCat();
      if(cat !== undefined) {
        $("#cat_counter").text(++cat.count);
      }
    });
    this.render();
  },
  render : function(){
    var cat = octopus.getCurrentCat();
      if(cat !== undefined) {
        $("#cat_counter").text(cat.count);
        $("#cat_name").text(cat.name);
        $("#cat_image").attr("src",cat.img);
      }
  }
};

//viewmodel / controller for this app
var octopus = {
  getCats : function(){
    return model.cats;
  },
  setCurrentCat : function(cat){
    model.currentCat = cat;
  },
  getCurrentCat : function() {
    return model.currentCat;
  },
  init : function(){
    model.currentCat = model.cats[0];
    listView.init();
    detailView.init();
  }
};

octopus.init();

}());
