const FastSpeedtest = require("fast-speedtest-api");
const fs = require('fs');
const interval = 1800000;

let speedtest = new FastSpeedtest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps, // default: Bps
    proxy: undefined // default: undefined
});

function run(){ speedtest.getSpeed().then(s => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let hour = date.getHours();
    let minute = date.getMinutes();
    console.log(`Speed: ${s} Mbps`);
    fs.appendFile('log.txt', `${day}/${month} ${hour}:${minute} - Speed: ${s} Mbps\n`, (err)=>{
        if(err){
            console.log(err);
        }
    })
}).catch(e => {
    console.error(e.message);
});
}


setInterval(run,interval);

