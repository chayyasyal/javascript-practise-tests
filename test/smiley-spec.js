describe("smiley face", function() {
  it("should return a smiley  face and a piece of text", function() {
    expect(smiley("hello")).toEqual("hello :)");
  });
});
