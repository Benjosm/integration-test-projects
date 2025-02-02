import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      // if you have preload, you can specify it here
      preload: path.join(__dirname, 'preload.ts')
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../src/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // On macOS it is common for apps to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create a window when the dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
