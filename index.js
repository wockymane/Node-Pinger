const { Group } = require('@hystleria/pinger');
let groupPinger = new Group(); //You can pass a string to name the group if you have multiple groups

['incognitoupdates.pxzlz.repl.co/uptime.html', 'taco.pxzlz.repl.co', 'https://tldownload.pxzlz.repl.co'].forEach(u => groupPinger.add(u, 60000));
groupPinger.startAll();
