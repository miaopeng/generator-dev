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
        choices: ['react', 'nodejs', 'mina']
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
      case 'react':
        this._writingReact();
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

  _writingReact() {
    this.fs.copy(this.templatePath('react/.*'), this.destinationPath());
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
      case 'react':
        dependencies = [
          'eslint@6.8.0',
          'eslint-config-airbnb@18.1.0',
          'eslint-config-prettier@^6.11.0',
          'eslint-plugin-compat@^3.6.0',
          'eslint-plugin-import@^2.20.1',
          'eslint-plugin-jsx-a11y@^6.2.3',
          'eslint-plugin-react@^7.19.0',
          'eslint-plugin-react-hooks@2.5.0'
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
