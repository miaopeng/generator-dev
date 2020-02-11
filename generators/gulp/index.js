'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  async prompting() {
    this.log('Add gulp tasks');
  }

  writing() {
    this.fs.copy(this.templatePath(), this.destinationPath());

    const pkgJson = {
      scripts: {
        dev: 'gulp'
      }
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.yarnInstall(['gulp', 'gulp-rename'], { dev: true });
  }

  end() {
    this.log(
      chalk.bgGreen('success. now you can start gulp task with `yarn dev` ')
    );
    this.log('bye');
  }
};
