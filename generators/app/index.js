'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.green('generator-dev')} generator!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'env',
        message: '选择项目类型',
        choices: ['nodejs', 'mina']
      }
    ];

    this.props = await this.prompt(prompts);
  }

  writing() {
    switch (this.props.env) {
      case 'nodejs':
        this._writingNodeJS();
        break;
      case 'mina':
        this._writingMina();
        break;
      default:
        break;
    }
  }

  _writingNodeJS() {
    this.fs.copy(this.templatePath('nodejs/.*'), this.destinationPath());
  }

  _writingMina() {
    this.fs.copy(this.templatePath('mina/.*'), this.destinationPath());
  }

  install() {
    let dependencies = [];

    switch (this.props.env) {
      case 'nodejs':
        dependencies = [
          'eslint',
          'eslint-config-prettier',
          'eslint-config-google'
        ];
        break;
      case 'mina':
        dependencies = [
          'eslint',
          'eslint-config-prettier',
          'eslint-config-airbnb-base',
          'eslint-plugin-import'
        ];
        break;
      default:
        break;
    }

    this.yarnInstall(dependencies, { dev: true });
  }

  end() {
    this.log('bye');
  }
};
