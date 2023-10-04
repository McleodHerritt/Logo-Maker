// Importing required modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// Importing shape classes from the shapes module
const { Triangle, Circle, Square } = require("./shapes");

// CLI class to handle user interactions and logo generation
class CLI {
  constructor() {
    // Initializing properties for the logo text, text color, shape type, and shape color
    this.logoText = "";
    this.textColor = "";
    this.shapeType = "";
    this.shapeColor = "";
  }

  // Method to run the CLI
  run() {
    // Prompting the user for input using inquirer
    return inquirer
      .prompt([
        {
          type: "input",
          name: "logoText",
          message: "Enter the text for the logo (up to 3 characters):",
          // Validation to ensure the logo text is up to 3 characters
          validate: (input) => {
            return input.length <= 3
              ? true
              : "Please enter up to 3 characters only.";
          },
        },
        {
          type: "input",
          name: "textColor",
          message:
            "Enter the color for the text (color keyword or hexadecimal):",
          // Validation to ensure the color is a valid keyword or hexadecimal
          validate: (input) => {
            const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
            return isValidHex || input.length > 0
              ? true
              : "Please enter a valid color keyword or hexadecimal.";
          },
        },
        {
          type: "list",
          name: "shapeType",
          message: "Choose a shape for the logo:",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message:
            "Enter the color for the shape (color keyword or hexadecimal):",
          // Validation to ensure the color is a valid keyword or hexadecimal
          validate: (input) => {
            const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
            return isValidHex || input.length > 0
              ? true
              : "Please enter a valid color keyword or hexadecimal.";
          },
        },
      ])
      .then((answers) => {
        // Storing user's answers into the class properties
        this.logoText = answers.logoText;
        this.textColor = answers.textColor;
        this.shapeType = answers.shapeType;
        this.shapeColor = answers.shapeColor;

        let shape;
        // Determining the shape object based on user's choice
        switch (this.shapeType) {
          case "circle":
            shape = new Circle(this.shapeColor);
            break;
          case "triangle":
            shape = new Triangle(this.shapeColor);
            break;
          case "square":
            shape = new Square(this.shapeColor);
            break;
        }

        // Generating SVG content for the logo
        const svgContent = `
                    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        ${shape.render()}
                        <text x="150" y="110" font-family="Arial" font-size="24" fill="${
                          this.textColor
                        }" text-anchor="middle">${this.logoText}</text>
                    </svg>
                `;
        // Writing the SVG content to a file named logo.svg
        return fs.promises.writeFile(
          path.join(__dirname, "logo.svg"),
          svgContent
        );
      })
      .then(() => {
        // Notifying the user that the logo has been generated
        console.log("Generated logo.svg");
      })
      .catch((err) => {
        // Handling any errors that might occur
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }
}

// Exporting the CLI class for external use
module.exports = CLI;
