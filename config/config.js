/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		// {
		// 	module: "alert",
		// },
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		// {
		// 	module: "helloworld",
		// 	position: "top_left"
    // },
    {
      module: "MMM-AssistantMk2",
      position: "top_right",
      config: {

        // --- ESSENTIALS / modifying for your environment might be needed.
        deviceLocation: {
          coordinates: { // set the latitude and longitude of the device to get localized information like weather or time. (ref. mygeoposition.com)
            latitude: 51.5033640, // -90.0 - +90.0
            longitude: -0.1276250, // -180.0 - +180.0
          },
        },
    
        defaultProfile: "default", // If you have several profiles and want to set one of them as default profile, describe here.
    
        profiles: {
          "default" : { // profile name.
            profileFile: "default.json", // profile file name.
            lang: "en-US"
          },
        },
        record: { // Full values are in `FOR EXPERTS` section.
          recordProgram: "arecord",  // Defaults to "arecord" - also supports "rec" and "sox"
          device: null        // recording device (e.g.: "plughw:1")
        },
        play: { // Full values are in `FOR EXPERTS` section.
          playProgram: "mpg321", // recommended.
        },
      }
    },
		{
			module: "helloworld",
			position: "middle_center"
		},
    {
      module: "MMM-EasyPix",
    position: "top_left",
    config: {
      picName: "18.jpg", // Enter the picture file name.
      maxWidth: "100px",        // Size picture precisely. Retains aspect ratio.
      // sounds: ["1.mp3", "me2.mp3"],  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
      // updateInterval:  60 * 1000,     // updates display
      // animationSpeed: 3000,
      }
    },
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check",
		// 				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
		// 		]
		// 	}
    // },
    
    // {
    //   module: 'MMM-ELMPrayerTime',
    //   position: 'bottom_bar',	// This can be any of the regions. Best result is in the top_left/top_right.
    //   config: {
    //     apiVersion: '1.0', // please, leave unchanged. reserved for future use.
    //     timeFormat: 24,
    //     notDisplayed: ['midnight', 'sunset'],
    //     useUpdateInterval: true,
    //     updateInterval: 86400 * 1000, // How often do you want to fetch new praying time? (milliseconds)
    //     animationSpeed: 2.5 * 1000, // Speed of the update animation. (milliseconds)
    //     alertTimer: 15000
    //   }
    // },

		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		// {
		// 	module: "currentweather",
		// 	position: "top_right",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		appid: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		// {
		// 	module: "weatherforecast",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		appid: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
