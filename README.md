# Mylisters Display
 Mylisters HTML5 only display

This simple HTML page turns your browser into an unattended media display. 

Serverless (basic) usage, 
1. Copy the images and mp4s into the media folder
2. Edit the playlist (the options array) at the end of the config.js file and change settings as desired
3. Launch fullscreen.html and click "Click to Load index.html in a fullscreen iFrame" to begin playback fullscreen

Server (unattended) usage, 
1. Copy the files into the shared folder of the webserver of your choice (apache, iis, bottle, node http-server...)
2. Launch google chrome in kiosk mode to load index.html with a command similar to "chrome.exe --password-store=basic --autoplay-policy=no-user-gesture-required --allow-file-access-from-files --allow-external-pages --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-restore-session-state --kiosk https://127.0.0.1/index.html
3. Because the active playlist is constantly being refreshed, changes to the playlist's json file via a network share or a script would be shown on the display without the need for any interaction with the browser

