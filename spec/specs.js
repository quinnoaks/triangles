describe('triangle', function() {
  it("is not a triangle when sum of two sides is less than third side", function() {
    expect(triangle(2,2,7)).to.equal("not a triangle");
  });

  it("is an equilateral triangle when all sides are equal", function() {
    expect(triangle(2,2,2)).to.equal("equilateral");
  });

  it("is an isosceles triangle when two sides are equal", function() {
    expect(triangle(2,2,3)).to.equal("isosceles");
  });

  it("is a scalene triangle when none of the sides are equal", function() {
    expect(triangle(2,3,4)).to.equal("scalene");
  });
});
