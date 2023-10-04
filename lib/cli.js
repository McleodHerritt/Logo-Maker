const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Triangle, Circle, Square } = require("./shapes");

class CLI {
  constructor() {
    this.logoText = "";
    this.textColor = "";
    this.shapeType = "";
    this.shapeColor = "";
  }

  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "logoText",
          message: "Enter the text for the logo (up to 3 characters):",
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
          validate: (input) => {
            const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
            return isValidHex || input.length > 0 // Assuming any non-empty string is a valid color keyword
              ? true
              : "Please enter a valid color keyword or hexadecimal.";
          },
        },
      ])
      .then((answers) => {
        this.logoText = answers.logoText;
        this.textColor = answers.textColor;
        this.shapeType = answers.shapeType;
        this.shapeColor = answers.shapeColor;

        let shape;
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

        const svgContent = `
                    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        ${shape.render()}
                        <text x="150" y="110" font-family="Arial" font-size="24" fill="${
                          this.textColor
                        }" text-anchor="middle">${this.logoText}</text>
                    </svg>
                `;

        return fs.promises.writeFile(
          path.join(__dirname, "logo.svg"),
          svgContent
        );
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }
}

module.exports = CLI;
