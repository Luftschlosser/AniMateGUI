// electron/main.mjs
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to deal with __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.mjs'),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Load the Vite dev server in development or the production file in production
    if (process.env.NODE_ENV === 'development') {
        console.log('Loading from localhost:5173...');
        mainWindow.loadURL('http://localhost:5173');
    } else {
        console.log('PROD');
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    }

    mainWindow.webContents.openDevTools();
    console.log('HERE');

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
