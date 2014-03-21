TypeScript AMD (Require.js) Boilerplate
======================
Here is the [TypeScript AMD with RequireJS Tutorial](http://www.codebelt.com/typescript/typescript-amd-with-requirejs-tutorial/) for these files.

Also check out my preferred way of starting a TypeScript project which uses Internal Modules and not AMD: [TypeScript Boilerplate](https://github.com/codeBelt/TypeScript-Boilerplate)


Be sure to check out all my [TypeScript tutorials and examples](http://www.codebelt.com/category/typescript/).


###GruntJS - Getting Started
----------
Have you ever used different tools to minify CSS and JavaScript? Wouldn't it be great if you could automatically do this without needing to install special OS applications or backend-specific tools? Wouldn't it be great if there was just one easy workflow and command to do this? The answer is `grunt`!

####What is Grunt

Grunt is a command line task runner that will run tasks/plugins that perform repetitive tasks like minification, compilation, unit testing, linting, etc. Grunt is dependent on having [Node.js](http://nodejs.org) installed, but that is all you need to know about nodejs. You can check out the __Install Grunt__ section below later.

####Grunt Setup

At bare minimum we need have a `package.json` file and a `Gruntfile.js` file.

1. The `package.json` file will list what plugins we want to use.
2. The `Gruntfile.js` file is where we will confingure those plugins that are mentioned in the `package.json` file.

__Empty package.json File__

```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    
    // Add your plugins here
    
  }
}
```

__Empty Gruntfile.js File__

```
module.exports = function(grunt) {

	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),

		// Add configuration options for each of your plugins here
	
	});
	
};
```

####Adding Grunt Tasks
You can find a lot of Grunt plugins at [http://gruntjs.com/plugins](http://gruntjs.com/plugins), but for now let's add a RequireJS plugin which will help us create a minified version of our JavaScript code suitable for production use.

__package.json with RequireJS Plugin__

```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    
    // Added plugin name with current plugin version.
    "grunt-contrib-requirejs": "~0.4.0",
    
  }
}
```
Before you can start using the plugins, we need to download them to our project folder. 

First, with Terminal or the Command Line, navigate to the directory that has the `package.json` and `Gruntfile.js` files.

Next, type `npm install` for Windows or `sudo npm install` for Mac. This command will automatically download each of the plugins specified in your `package.json` file. The plugins will be downloaded into a new `node_modules` folder in the same directory.

__Gruntfile.js with RequireJS Plugin__

```
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Add plugins configuration options.
		requirejs: {
			compile: {
    			options: {
    	  			baseUrl: "path/to/base",
    	  			mainConfigFile: "path/to/config.js",
    	  			out: "path/to/optimized.js"
    			}
    		}
  		}
  	
  		// Loads the RequireJS plugin so we have access to it into this file.
  		grunt.loadNpmTasks('grunt-contrib-requirejs');

  		// Registers the default task to run the RequireJS plugin. 
  		// In Terminal/Command Line you will be able to type 'grunt' and
  		// this will run the 'requirejs' plugin in this file.
  		grunt.registerTask('default', ['requirejs']);
	});
	
};
```

Like I said in the comments you can just type `grunt` and that will run the 'requirejs' plugin.

__Create Other Tasks__

We can do the following to create/register other shortcut command tasks:

```
  grunt.registerTask('default', ['requirejs']);
  
  grunt.registerTask('src', ['pluginName1', 'pluginName2', 'pluginName3']);
  grunt.registerTask('web', ['pluginName1', 'pluginName2', 'pluginName3', 'pluginName4'])

```
Above you would call `grunt src` or `grunt web` depending on what series of plugins you would want to run.

One thing to point out is most plugins allow you to have multiple sub tasks. For example checkout the 'grunt-env' plugin below.

```
env: {
	src: {
		NODE_ENV : '../src/'
	},
	web : {
		NODE_ENV : '../web/'
	}
}
```
You can call `grunt env:src` or `grunt env:web` to run each sub task. If you were to call `grunt env` it would run both sub tasks.


####Installing Grunt

1. Install Node.js (This is required in order to run grunt).
	* Download and install Node.js from http://nodejs.org
       
2. Install grunt command line interface (CLI)
	* On the command line, run the following command: `npm install grunt-cli -g`

3. Install grunt packages
	* Change to the directory(where package.json is located
	* On the command line, run the following command: `npm install`
	* It take several minutes to completely download the dependencies. 
	* If this works successfully, a `node_modules` directory will be created. These files do not need to be redistributed or committed into source control.
	
If you have issues installing, please see the following tutorials:

* [Install Grunt on Mac](http://www.codebelt.com/javascript/install-grunt-js-on-a-mac/)
* [Install Grunt on Windows](http://www.codebelt.com/javascript/install-grunt-js-on-windows/)
