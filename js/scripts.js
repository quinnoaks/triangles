var triangle = function(sideA, sideB, sideC) {
  if ((sideA + sideB < sideC) || (sideA > sideB + sideC) || (sideA + sideC < sideB)) {
    return "not a triangle";
  } else if ((sideA === sideB) && (sideA === sideC)) {
    return "equilateral";
  } else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangle(sideA, sideB, sideC);

    $(".triangle").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
