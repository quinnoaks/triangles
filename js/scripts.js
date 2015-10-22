var triangle = function(sideA, sideB, sideC) {
  if ((sideA + sideB < sideC) || (sideA > sideB + sideC) || (sideA + sideC < sideB)) {
    return "not a triangle";
  } else if ((sideA === sideB) && (sideA === sideC)) {
    return "equilateral";
  } else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
    return "isosceles";
  }
};
