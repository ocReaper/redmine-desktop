// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow;

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 640,

    center: true,
    frame: true,
    resizable: true
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.maximize();
});

app.on('window-all-closed', function () {
  app.quit();
});
