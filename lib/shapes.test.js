// Importing the entire shapes module
const Shapes = require("./shapes.js");
// Destructuring the Triangle, Circle, and Square classes from the shapes module
const { Triangle, Circle, Square } = require("./shapes.js");

// Describing a test suite for the Shapes module
describe("Shapes", () => {
  // Test case for creating and rendering a blue triangle
  test("creating a blue triangle returns the expected svg", () => {
    // Expected SVG representation for a blue triangle
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    // Creating a new triangle instance with blue color
    const triangle = new Triangle("blue");
    // Asserting that the rendered SVG matches the expected SVG
    expect(triangle.render()).toEqual(expectedSVG);
  });

  // Test case for creating and rendering a red circle
  test("creating a red circle returns the expected svg", () => {
    // Expected SVG representation for a red circle
    const expectedSVG = `<circle cx="150" cy="100" r="90" fill="red" />`;
    // Creating a new circle instance with red color
    const circle = new Circle("red");
    // Asserting that the rendered SVG matches the expected SVG
    expect(circle.render()).toEqual(expectedSVG);
  });

  // Test case for creating and rendering a yellow square
  test("creating a yellow square returns the expected svg", () => {
    // Expected SVG representation for a yellow square
    const expectedSVG = `<rect x="50" y="50" width="200" height="200" fill="yellow" />`;
    // Creating a new square instance with yellow color
    const square = new Square("yellow");
    // Asserting that the rendered SVG matches the expected SVG
    expect(square.render()).toEqual(expectedSVG);
  });
});
