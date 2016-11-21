"use strict";

$(".glyphicon").addClass("glyphicon-star-empty");
$(".glyphicon").removeClass("glyphicon-star");

function select() {
  $(this).prevAll().andSelf().removeClass("glyphicon-star-empty");
  $(this).prevAll().andSelf().addClass("glyphicon-star");
}
function disselect() {
  $(this).prevAll().andSelf().removeClass("glyphicon-star");
  $(this).prevAll().andSelf().addClass("glyphicon-star-empty");
}

$(".ratings p:nth-of-type(2) .glyphicon").hover(select, disselect);

$(".ratings p:nth-of-type(2) .glyphicon").click( function() {
  $(this).siblings().andSelf().off();
});

var index = 5;
function addProduct() {
  let product = $(".col-md-4").eq(0).clone();
  let button = $(".btn").detach();
  $(".products").append(product);
  $(".ratings p:nth-of-type(2)").eq(index).children().hover(select, disselect);
  $(".ratings p:nth-of-type(2)").eq(index).children().click(function() {
    $(this).siblings().andSelf().off();
  });
  $(".products").append(button);
}

function changeContent() {
  index++;
  let x = $(".col-md-4 h4:last-of-type()").eq(index-1).text("Product #" + index);
  averPrice();
  averReviews();
}

function averPrice() {
  let avgPrice, prices = [];
  for(let i=0; i<index-1; i++) {
    prices.push($(".col-md-4 h4:first-of-type()").eq(i).text());
    prices[i] += " ";
    prices[i] = prices[i].slice(1, -1);
    prices[i] = parseFloat(prices[i]);
  }
  avgPrice = prices.reduce(function(j,k) {
    return j+k;
  });
  avgPrice /= index-1;
  $(".col-md-4 h4:first-of-type()").eq(index-1).text("$" + avgPrice);
}

function averReviews() {
  let str, total = 0;
  for(let i=0; i<index-1; i++) {
    str = $(".ratings p:nth-of-type(1)").eq(i).text();
    str = str.slice(0, -8);
    total = total + parseInt(str);
  }
  total /= index-1;
  total = Math.round(total);
  $(".ratings p:nth-of-type(1)").eq(index-1).text(total + " reviews");
}

$(".btn").click(function() {
  addProduct();
  changeContent();

});
