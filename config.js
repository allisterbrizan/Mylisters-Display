DEVICEID = 'JustAnotherDevice';   //Device name for logs
PLAYLISTFILE ='media/1playlist.json'; //Which playlist file to load. (Requires a web server like apache, iis, bottle, node http-server...)

//TIMEON='7:00';  // Show nothing until this time in the format HH:MM 
//TIMEOFF='20:00';  // Show nothing after this time in the format HH:MM 
WIDTH = 0; //Set to zero to autodetect
HEIGHT= 0; //Set to zero to autodetect
TOP= 0; 
LEFT = 0;
VOLUME = 1; //Default volume of media.

DEBUGMODE = true;  //Show debug text on screen

TVSUPPORT = true;   //Works if capture card or webcam is installed
TVOPTIONS = {  video: { width: {ideal:1280}, height: {ideal:720} },  audio:true };  //Capture card options
IMAGEWAIT = 100; //Default wait for images in control loop ticks. 10 Ticks = 1 Second.
TVWAIT = 100; //Default wait for TV in control loop ticks. 10 Ticks = 1 Second.
SHOWALERTS = true; //Announce Stuff on screen. Just Playlist Updates for now
ALERTWAIT = 50; //How long to Announce Stuff on screen in tics.
MAXWAIT = 20; //Wait in control loop ticks. 10 Ticks = 1 Second.
CACHEMEDIA =true; //Allow the browser to cache images and video
LOGALL = false;  //Log TV, Images and Videos even if log isn't set in the properties
INFO = ' INFO:' + INFO + " SCREEN: " + window.innerWidth + "x" + window.innerHeight +" DEVICEID: " + DEVICEID;  //Quick prepend to the Message at the top of the debug. 


//This (the options array) would be the playlist used if you are loading the display serverless.  
//The first and last items of the playlist array just clear the debug error log from the screen. I leave them in so the playlist never has 0 items. 
//The "tv" fileType is your video capture device which in most cases would be your webcam
options = [
{"fileType":"cls"},

{"fileType":"image", "fileName":"../image.jpg"},

{"fileType":"video", "fileName":"myVideo.mp4"},

{"fileType":"tv"},

{"fileType":"image", "fileName":"plant.jpg", "wait":3},
{"fileType":"tv", "wait":20},
{"fileType":"image", "fileName":"beach.jpg", "waitMinutes":0.2},
{"fileType":"tv", "waitMinutes":0.1},

{"fileType":"video", "fileName":"bigbuckbunny.mp4"},
{"fileType":"video", "fileName":"bigbuckbunny.mp4", "volume":0},

{"fileType":"image", "fileName":"myImagev.jpg", "stretch":""},
{"fileType":"image", "fileName":"myImagev.jpg", "stretch":"stretch"},
{"fileType":"image", "fileName":"myImagev.jpg", "stretch":"cover"},

{"fileType":"image", "fileName":"freepik.com-morning.jpg", "endTime":"12:00"},
{"fileType":"image", "fileName":"freepik.com-afternoon.jpg", "startTime":"12:00", "endTime":"18:00" },
{"fileType":"image", "fileName":"freepik.com-night.jpg", "startTime":"18:00"},

{"fileType":"video", "fileName":"myVideov.mp4", "startDate":"1970-01-01", "endDate":"2030-12-31"},

{"fileType":"image", "fileName":"myImagev.jpg", "random":["plant.jpg","stream.jpg","beach.jpg","camille.jpg"]},
{"fileType":"image", "fileName":"myImagev.jpg", "loop":["plant.jpg","stream.jpg","beach.jpg","camille.jpg"]},

{"fileType":"cls"}
];