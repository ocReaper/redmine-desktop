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
    width: 640,
    height: 768,
    maxWidth: 640,
    maxHeight: 768,
    icon: __dirname + '/images/favicon.ico',
    title: 'Redmine Desktop',

    frame: true,
    kiosk: false,
    center: false,
    resizable: false,
    maximizable: false,
    fullscreen: false,
    fullscreenable: false,
    autoHideMenuBar: true
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.maximize();
});

app.on('window-all-closed', function () {
  app.quit();
});
