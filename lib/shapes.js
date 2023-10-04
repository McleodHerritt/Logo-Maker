// Base class for all shapes
class Shape {
  // Constructor to initialize the shape with a color
  constructor(color) {
    this.color = color;
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }

  // Abstract method to render the shape. This should be implemented by all child classes.
  render() {
    throw new Error("Method 'render()' must be implemented in child classes.");
  }
}

// Triangle class that extends the Shape class
class Triangle extends Shape {
  // Method to render the triangle shape in SVG format
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Circle class that extends the Shape class
class Circle extends Shape {
  // Method to render the circle shape in SVG format
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}

// Square class that extends the Shape class
class Square extends Shape {
  // Method to render the square shape in SVG format
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// Exporting the Triangle, Circle, and Square classes for external use
module.exports = { Triangle, Circle, Square };
