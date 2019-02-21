#!/usr/bin/env node

'use strict';

const Conf = require('conf');
const meow = require('meow');
const chalk = require('chalk');
const cash = require('./cash.js');

const config = new Conf();
const argv = process.argv.slice(2);

const {DEFAULT_TO_CURRENCIES} = require('./constants');//js file where we can find the API adress and the array of currencies we want to use

const cli = meow(`
	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--set -s 			Set default currencies
	Examples
		$ cash 10 usd eur pln
		$ cash --set usd aud
`);

if (argv.indexOf('--save') !== -1 || argv.indexOf('-s') !== -1) {
	config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));//We want to take the US dollar as the original currency to compare to
	config.set('defaultTo', (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', DEFAULT_TO_CURRENCIES));//We take the currencie arrays goal in the constants.js
	console.log(chalk.green('Saved default currencies to ' + config.path));
	process.exit(0); //save tu default setting of the currency goal in base
}

const command = {
	amount: parseFloat(argv[0]) || 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', DEFAULT_TO_CURRENCIES)
};

cash(command);
