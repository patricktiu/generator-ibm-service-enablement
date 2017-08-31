const IBMCloudEnv = require('ibm-cloud-env');
const PushNotifications = require('bluemix-push-notifications').PushNotifications;
const Notification = require('bluemix-push-notifications').Notification;

module.exports = function(app, serviceManager){
	let push_url = IBMCloudEnv.getString("push_url");
	const regionRegex = /\/\/imfpush(.+)\/imfpush\//;
	const region = regionRegex.exec(push_url)[1];
	if(!region || region.indexOf('.bluemix.net') < 0) {
		throw "Invalid Push Service Region: " + region;
	}

	const appGuid = IBMCloudEnv.getString("push_app_guid");
	const appSecret = IBMCloudEnv.getString("push_app_secret");

	let PushNotificationInstance = new PushNotifications(region, appGuid, appSecret);

	serviceManager.set("push-notifications", PushNotificationInstance);
	serviceManager.set("notifications-module", Notification);
};
