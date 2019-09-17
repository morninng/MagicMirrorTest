/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Hello World! !!!!!v"
	},

  init: function(){
    console.log("Hello World! init !!!!!!!!! ")
  },

	getTemplate: function () {
    console.log("helloworld getTemplate !!!!!!!!!!!!!")
		return "helloworld.njk";
	},

	getTemplateData: function () {
    console.log("helloworld getTemplateData !!!!!!!!!")
		return this.config;
	}
});
