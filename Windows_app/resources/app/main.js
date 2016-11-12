const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;

app.on('ready', () => {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    var icon = __dirname + 'icon100x.ico';
    var window = new BrowserWindow({width, height, icon: `${__dirname}/logo100x.ico`, webPreferences: {backgroundThrottling: false}});
    // window.webContents.openDevTools();
    window.loadURL(`https://stuyguide.github.io`)
});

Menu.setApplicationMenu(Menu.buildFromTemplate([]));