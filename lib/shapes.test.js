const Shapes = require("./shapes.js");
const { Triangle, Circle, Square } = require("./shapes.js");

describe("Shapes", () => {
  test("creating a blue triangle returns the expected svg", () => {
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual(expectedSVG);
  });

  test("creating a red circle returns the expected svg", () => {
    const expectedSVG = `<circle cx="150" cy="100" r="90" fill="red" />`;
    const circle = new Circle("red");
    expect(circle.render()).toEqual(expectedSVG);
  });

  test("creating a yellow square returns the expected svg", () => {
    const expectedSVG = `<rect x="50" y="50" width="200" height="200" fill="yellow" />`;
    const square = new Square("yellow");
    expect(square.render()).toEqual(expectedSVG);
  });
});
