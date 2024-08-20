
var score_list={};
score_list.list=[
  {category:"Reaction", score: 80},
  {category:"Memory", score: 92},
  {category:"Verbal", score: 61},
  {category:"Visual", score: 72}
];

var item_html="<div id={{id}} class='result_item'><span></span><span></span><span></span><span></span><div id={{category_id}} class='category'>{{category}}</div><div class='score'>{{score}}</div></div>";

var total_html="<div id='result_board' class='result_item total'><div class='total_score'>{{score}}</div><div class='comment_title'></div><div class='comment_text'></div></div>";

function showlist(){
  $("#summary_list").html("");
  var total_score=0;
  // item_html+="<ul>";
  for(var i=0;i<score_list.list.length;i++){
    var item=score_list.list[i];
    var item_id="scoreitem_"+i;
    var category_id="categoryitem_"+i;
    total_score+=parseInt((item.score)/4);
    
    var current_item_html=
        item_html.replace("{{id}}",item_id)
                 .replace("{{category_id}}",category_id)
                 .replace("{{category}}",item.category)
                 .replace("{{score}}",item.score);
    $("#summary_list").append(current_item_html);
  }
  // item_html+="</ul>";
  var current_total_score=total_html.replace("{{score}}",total_score);
  $("#result_total").append(current_total_score);
  
  $(".comment_title").text("Great!");
  $(".comment_text").text("You scored higher than 65% of the people who have taken these tests.");
};
showlist();