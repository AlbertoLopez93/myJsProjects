//initialization
$(".ratings p:nth-child(2)").addClass("notSelected");
$(".glyphicon").addClass("glyphicon-star-empty");
$(".glyphicon").removeClass("glyphicon-star");

//click in first product
$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon").click(function() {
  $(".col-lg-4:nth-of-type(1) .ratings p:nth-child(2)").addClass("selected");
  $(".col-lg-4:nth-of-type(1) .ratings p:nth-child(2)").removeClass("notSelected");
});

//first star
$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").mouseover(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").mouseout(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
});

//second star
$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").mouseover(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").mouseout(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
});

//third star
$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").mouseover(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").mouseout(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
});

//fourth star
$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").mouseover(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").mouseout(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
});

//fiveth star
$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(5)").mouseover(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(5)").mouseout(function() {
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(1) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star");
});


//click in second product
$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon").click(function() {
  $(".col-lg-4:nth-of-type(2) .ratings p:nth-child(2)").addClass("selected");
  $(".col-lg-4:nth-of-type(2) .ratings p:nth-child(2)").removeClass("notSelected");
});

//first star
$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").mouseover(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").mouseout(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
});

//second star
$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").mouseover(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").mouseout(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
});

//third star
$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").mouseover(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").mouseout(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
});

//fourth star
$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").mouseover(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").mouseout(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
});

//fiveth star
$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(5)").mouseover(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(5)").mouseout(function() {
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(2) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star");
});


//click in third product
$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon").click(function() {
  $(".col-lg-4:nth-of-type(3) .ratings p:nth-child(2)").addClass("selected");
  $(".col-lg-4:nth-of-type(3) .ratings p:nth-child(2)").removeClass("notSelected");
});

//first star
$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").mouseover(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").mouseout(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
});

//second star
$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").mouseover(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").mouseout(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
});

//third star
$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").mouseover(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").mouseout(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
});

//fourth star
$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").mouseover(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").mouseout(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
});

//fiveth star
$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(5)").mouseover(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(5)").mouseout(function() {
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(3) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star");
});


//click in fourth product
$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon").click(function() {
  $(".col-lg-4:nth-of-type(4) .ratings p:nth-child(2)").addClass("selected");
  $(".col-lg-4:nth-of-type(4) .ratings p:nth-child(2)").removeClass("notSelected");
});

//first star
$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").mouseover(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").mouseout(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
});

//second star
$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").mouseover(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").mouseout(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
});

//third star
$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").mouseover(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").mouseout(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
});

//fourth star
$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").mouseover(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").mouseout(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
});

//fiveth star
$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(5)").mouseover(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(5)").mouseout(function() {
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(4) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star");
});


//click in fiveth product
$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon").click(function() {
  $(".col-lg-4:nth-of-type(5) .ratings p:nth-child(2)").addClass("selected");
  $(".col-lg-4:nth-of-type(5) .ratings p:nth-child(2)").removeClass("notSelected");
});

//first star
$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").mouseover(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").mouseout(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
});

//second star
$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").mouseover(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").mouseout(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
});

//third star
$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").mouseover(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").mouseout(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
});

//fourth star
$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").mouseover(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").mouseout(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
});

//fiveth star
$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(5)").mouseover(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star-empty");
});

$(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(5)").mouseout(function() {
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(1)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(2)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(3)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(4)").removeClass("glyphicon-star");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(5)").addClass("glyphicon-star-empty");
  $(".col-lg-4:nth-of-type(5) .notSelected .glyphicon:nth-child(5)").removeClass("glyphicon-star");
});
