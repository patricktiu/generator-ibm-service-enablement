'use strict'
const BaseGenerator = require('../lib/generatorbase');

const SCAFFOLDER_PROJECT_PROPERTY_NAME = "naturalLanguageUnderstanding";
const SERVICE_NAME = "service-watson-natural-language-understanding";
const localDevConfig = ['url', 'username', 'password'];

module.exports = class extends BaseGenerator {
	constructor(args, opts) {
		super(args, opts, SERVICE_NAME, SCAFFOLDER_PROJECT_PROPERTY_NAME, localDevConfig);
	}

	initializing(){
		return super.initializing();
	}

	configuring(){
		return super.configuring();
	}
	
	writing(){
		return super.writing();
	}
}
