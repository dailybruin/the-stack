var YAML = require('yamljs');
var webshot = require('webshot');

// settings
var PROJECT_ROOT = '../../';
var SCREENSHOT_DIR = PROJECT_ROOT + 'img/projects/';
var PROJECTS_FILE = PROJECT_ROOT + '_data/projects.yml';
var SCREENSHOT_OPTIONS = {
  screenSize: {
    width: 640,
    height: 400
  },
};
var FILE_EXTENSION = '.png';

var projects = YAML.load(PROJECTS_FILE);

console.log('Saving screenshots of projects from ' + PROJECTS_FILE + ' to ' + SCREENSHOT_DIR);

for (var key in projects) {
  if (projects.hasOwnProperty(key)) {
    var project = projects[key];
    webshot(project.link,
            SCREENSHOT_DIR + key + FILE_EXTENSION, SCREENSHOT_OPTIONS, function(err) {
      if (err)
        console.log('ERROR saving screenshot for ' + project.name);
      else
        console.log('saved screenshot for ' + project.name + ' as ' + key + FILE_EXTENSION);
    });
  }
}
