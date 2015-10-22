describe('triangle', function() {
  it("is not a triangle when sum of two sides is less than third side", function() {
    expect(triangle(2,2,7)).to.equal("not a triangle");
  });
});
