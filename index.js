const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
	console.log("App is now ready");
	const mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});
