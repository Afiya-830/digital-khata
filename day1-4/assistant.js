const environmentInfo = {
    platform: process.platform,
    nodeversion:process.version,
    currentTime:new Date().toLocaleTimeString()
};
console.log("i am running on:"+environmentInfo.platform);
console.log("my node js version is:"+environmentInfo.nodeversion);
console.log("the time is:"+environmentInfo.currentTime);
