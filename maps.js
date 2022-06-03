// ---------	INITIAL SETUP	---------
let historicalOverlay;
// The coordinates for Berlin city centre
const berlin = { lat: 52.518, lng: 13.408 };

// ---------	BUTTONS		---------
function CenterLeftControl(controlDiv, map) {
	
	// BUTTON PRE WORLD WAR 2	
	// Set CSS for the control border.
	const preWWIIButton = document.createElement("div");

	preWWIIButton.style.backgroundColor = "#fff";
	preWWIIButton.style.border = "2px solid #fff";
	preWWIIButton.style.borderRadius = "10px";
	preWWIIButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
	preWWIIButton.style.cursor = "pointer";
	preWWIIButton.style.marginTop = "8px";
	preWWIIButton.style.marginBottom = "22px";
	preWWIIButton.style.textAlign = "center";
	preWWIIButton.title = "Click to change the map";
	controlDiv.appendChild(preWWIIButton);

	// Set CSS for the control interior.
	const controlText = document.createElement("div");

	controlText.style.color = "rgb(25,25,25)";
	controlText.style.fontFamily = "Roboto,Arial,sans-serif";
	controlText.style.fontSize = "16px";
	controlText.style.lineHeight = "38px";
	controlText.style.paddingLeft = "5px";
	controlText.style.paddingRight = "5px";
	controlText.innerHTML = "Pre WWII";
	preWWIIButton.appendChild(controlText);


	// ---------	Switching the overlay image for this Button		---------
	// Setup the click event listeners: simply set the map to berlin.
	preWWIIButton.addEventListener("click", () => {
		duringWar.setMap(null);
		postWar.setMap(null);
		preWar.setMap(map);
	});
	
}

// ---------	BUTTONS		---------
function CenterRightControl(controlDiv, map) {
	
	// BUTTON POST WORLD WAR 2	
	// Set CSS for the control border.
	const PostWarButton = document.createElement("div");

	PostWarButton.style.backgroundColor = "#fff";
	PostWarButton.style.border = "2px solid #fff";
	PostWarButton.style.borderRadius = "10px";
	PostWarButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
	PostWarButton.style.cursor = "pointer";
	PostWarButton.style.marginTop = "8px";
	PostWarButton.style.marginBottom = "22px";
	PostWarButton.style.textAlign = "center";
	PostWarButton.title = "Click to change the map";
	controlDiv.appendChild(PostWarButton);

	// Set CSS for the control interior.
	const controlText2 = document.createElement("div");

	controlText2.style.color = "rgb(25,25,25)";
	controlText2.style.fontFamily = "Roboto,Arial,sans-serif";
	controlText2.style.fontSize = "16px";
	controlText2.style.lineHeight = "38px";
	controlText2.style.paddingLeft = "5px";
	controlText2.style.paddingRight = "5px";
	controlText2.innerHTML = "Post WWII";
	PostWarButton.appendChild(controlText2);


	// ---------	Switching the overlay image for this Button		---------
	// Setup the click event listeners: simply set the map to berlin.
	PostWarButton.addEventListener("click", () => {
		duringWar.setMap(null);
		preWar.setMap(null);
		postWar.setMap(map);
	});
	
}

function CenterControl(controlDiv, map) {
	// BUTTON DURING WORLD WAR 2	
	// Set CSS for the control border.
	const duringWarButton = document.createElement("div");

	duringWarButton.style.backgroundColor = "#fff";
	duringWarButton.style.border = "2px solid #fff";
	duringWarButton.style.borderRadius = "10px";
	duringWarButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
	duringWarButton.style.cursor = "pointer";
	duringWarButton.style.marginTop = "8px";
	duringWarButton.style.marginBottom = "22px";
	duringWarButton.style.textAlign = "center";
	duringWarButton.title = "Click to change the map";
	controlDiv.appendChild(duringWarButton);
	// Set CSS for the control interior.
	const controlText1 = document.createElement("div");

	controlText1.style.color = "rgb(25,25,25)";
	controlText1.style.fontFamily = "Roboto,Arial,sans-serif";
	controlText1.style.fontSize = "16px";
	controlText1.style.lineHeight = "38px";
	controlText1.style.paddingLeft = "5px";
	controlText1.style.paddingRight = "5px";
	controlText1.innerHTML = "During WWII";
	duringWarButton.appendChild(controlText1);
	
	// ---------	Switching the overlay image for this Button		---------
	// Setup the click event listeners: simply set the map to berlin.
	duringWarButton.addEventListener("click", () => {
		preWar.setMap(null);
		postWar.setMap(null);
		duringWar.setMap(map);
	});
}
// ---------	MAPS	---------
function initMap() {

	let map = new google.maps.Map(
		document.getElementById('map'), { zoom: 12, center: berlin }
	);

	// The coordinates for the top-right, bottom-left for map = historicalOverlay
	let imageBounds = {
		north: 52.560,
		south: 52.500,
		east: 13.528,
		west: 13.408,
	};
	// The coordinates for the top-right, bottom-left for map = historicalOverlay1
	let imageBounds1 = {
		north: 52.600,
		south: 52.400,
		east: 13.588,
		west: 13.228,
	};
	// The coordinates for the top-right, bottom-left for map = historicalOverlay1
	let imageBounds2 = {
		north: 52.560,
		south: 52.500,
		east: 13.528,
		west: 13.408,
	};

	// The loading code for the pre war map image
	preWar = new google.maps.GroundOverlay(
		"https://i.pinimg.com/564x/52/2e/13/522e1301861a009124eb2694c461181d.jpg", imageBounds1
	);
	// The loding code for the during war map image
	duringWar = new google.maps.GroundOverlay(
		"berlinTestMap.jpg", imageBounds
	);
	// The loding code for the post war map image
	postWar = new google.maps.GroundOverlay(
		"berlinTestMap2.jpg", imageBounds2
	);
	
	// Set the map overlay to start on during war image
	duringWar.setMap(map);

	// ---------	CONTENTS MARKERS	---------
	const contentString =
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">Berlin</h1>' +
		'<div id="BodyContent">' +
		"<p><b>Berlin</b>, the capital of Germany</p>" +
		"</div>" +
		"</div>";
	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});
	const marker = new google.maps.Marker({
		position: berlin,
		map,
		title: "Berlin City",
	});
	marker.addListener("click", () => {
		infowindow.open({
			anchor: marker,
			map,
			shouldFocus: false,
		});
	});

	// ---------	BUTTON IMPLEMENTATIONS ---------
	// Create the DIV to hold the control and call the CenterControl()
	// constructor passing in this DIV.
	
	const centerLeftControlDiv = document.createElement("div");
	CenterLeftControl(centerLeftControlDiv, map);
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerLeftControlDiv);
	
	const centerControlDiv = document.createElement("div");
	CenterControl(centerControlDiv, map);
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
	const centerRightControlDiv = document.createElement("div");
	CenterRightControl(centerRightControlDiv, map);
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerRightControlDiv);
}


// // References

// Google Maps Platform Documentation | Maps JavaScript API. (n.d.). Retrieved from Google Developers website: https://developers.google.com/maps/documentation/javascript

// Google Maps Javascript API Copyright:
// Portions of this page are modifications based on work created and shared by Google and used according to terms described in the Creative Commons 4.0 Attribution License.


