$( document ).ready(function() {
  var s = $(".glyphicon-star").removeClass("glyphicon-star");
  s.addClass("glyphicon-star-empty");

  $("p").on("mouseover", function(ev) {
    console.log($(ev.target));
  });

  var w = $(".glyphicon-star-empty");
  for (var i = 0; i < w.length; i++) {
    $(w[i]).attr("id", ""+ (i +1));
  }

  w.on("mouseenter", function (ev) {
    var min = minimo(this.id);

    full(this.id, min);
  });

  w.on("mouseout", function (id) {
    var min = minimo(this.id);

    for (var i = this.id; i >= min; i--) {
      $("#"+i+"").removeClass("glyphicon-star");
      $("#"+i+"").addClass("glyphicon-star-empty");
    }
  });

  w.on("click", function () {
    var min = minimo(this.id);

    full(this.id, min);

    for (var j = min; j < min + 5 ; j++) {
      $("#"+j).off();
      $("#"+j).removeAttr("id");
    }
  });

});

function full(id,min) {
  for (var i = id; i >= min; i--) {
    $("#"+i).removeClass("glyphicon-star-empty");
    $("#"+i).addClass("glyphicon-star");
  }
}

function minimo(id) {
  var result;
  if ((id > 0) && (id <= 5)) {
    result = 1;
  }

  if ((id > 5) && (id <= 10)) {
    result = 6;
  }

  if ((id > 10) && (id <= 15)) {
    result = 11;
  }

  if ((id > 15) && (id <= 20)) {
    result = 16;
  }

  if ((id > 20) && (id <= 25)) {
    result = 21;
  }

  return result;

}
