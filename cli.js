#!/usr/bin/env node

'use strict';

const dns = require('dns');
const got = require('got');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

const url = 'http://whatthecommit.com/index.txt';
const arg = process.argv[2];

if (arg === '-h' || arg === '--help') {
	console.log("Usage: wtf-am-i-doing\nYour commit is writing checks your merge can't cash.");
	process.exit(1);
}

dns.lookup('whatthecommit.com', err => {
	if (err) {
		console.error("No fucking internet connection!");
		process.exit(1);
	}
});

got(url).then(res => {
	console.log(res.body.trim());
}).catch(err => {
	if (err) {
		console.error("Motherfuck!");
		process.exit(1);
	}
});
