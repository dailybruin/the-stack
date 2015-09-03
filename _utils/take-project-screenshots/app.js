var YAML = require('yamljs');
var webshot = require('webshot');

// settings
var PROJECT_ROOT = '../../';
var SCREENSHOT_DIR = PROJECT_ROOT + 'img/projects/';
var PROJECTS_FILE = PROJECT_ROOT + '_data/projects.yml';
var SCREENSHOT_OPTIONS = {
  phantomPath: require('phantomjs2').path,
  screenSize: {
    width: 800,
    height: 500
  },
  renderDelay: 2000, // wait two seconds after page load to take screenshot
  defaultWhiteBackground: true,
  quality: 90
};
var FILE_EXTENSION = '.jpg';

var projects = YAML.load(PROJECTS_FILE);

console.log('Saving screenshots of projects from ' + PROJECTS_FILE + ' to ' + SCREENSHOT_DIR);

for (var key in projects) {
  if (projects.hasOwnProperty(key)) {
    var project = projects[key];
    if (!project.hasOwnProperty('link')) {
      continue; // skip this project if it doesn't have a link
    }
    console.log('saving screenshot for ' + project.name + '...');
    webshot(project.link,
            SCREENSHOT_DIR + key + FILE_EXTENSION, SCREENSHOT_OPTIONS, function(err) {
      if (err)
        console.log('ERROR saving screenshot for ' + this.name + ': ' + err);
      else
        console.log('saved screenshot for ' + this.name);
    }.bind(project));
  }
}
