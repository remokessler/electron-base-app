const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#000000'
    });

    win.loadURL(`file://${__dirname}/dist/index.html`);

    // win.webContents.openDevTools();

    win.on('closed', function() {
        win = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {

    // mac OS
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function(){
    if(win === null) {
        createWindow();
    }
})
