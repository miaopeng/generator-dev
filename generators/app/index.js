"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the flawless ${chalk.green(
          "generator-dotfiles"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "list",
        name: "env",
        message: "选择项目类型",
        choices: ["nodejs", "mina"]
      }
    ];

    this.props = await this.prompt(prompts);
  }

  writing() {
    switch (this.props.env) {
      case "nodejs":
        this._writingNodeJS();
        break;
      case "mina":
        this._writingMina();
        break;
      default:
        break;
    }
  }

  _writingNodeJS() {
    this.fs.copy(this.templatePath("nodejs/.*"), this.destinationPath());
  }

  _writingMina() {
    this.fs.copy(this.templatePath("mina/.*"), this.destinationPath());
  }

  install() {
    this.yarnInstall(
      [
        "eslint",
        "eslint-config-prettier",
        "eslint-config-airbnb-base",
        "eslint-plugin-import"
      ],
      { dev: true }
    );
  }

  end() {
    this.log("bye");
  }
};
