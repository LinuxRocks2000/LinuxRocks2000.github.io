const UserTracking = Parse.Object.extend("UserTracking");

function addFingerprint(){
	var fingerObj = new UserTracking()
	fingerObj.set("Visits", 1);
	fingerObj.save().then(() => {
		console.log(fingerObj);
		console.log(fingerObj.id);
		localStorage.fingerprint = fingerObj.id;
	});
}

if (localStorage.fingerprint){
	var query = new Parse.Query(UserTracking);
	query.equalTo("objectId", localStorage.fingerprint);
	query.find().then((results) => {
		if (results.length == 0){
			addFingerprint();
		}
		else{
			console.log(results[0].get("Visits"));
			results[0].set("Visits", results[0].get("Visits") + 1);
			results[0].save();
		}
	});
}
else{
	addFingerprint();
}
