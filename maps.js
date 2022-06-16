// ---------	INITIAL SETUP	---------
let historicalOverlay;

// The coordinates for Berlin city centre
const berlin = { lat: 52.518, lng: 13.408 };

// Coordinates for map markers
const reichstag = { lat: 52.518623, lng: 13.376198 }; // Reichstag building
const pergamonmuseum = {lat: 52.521183, log: 13.3969}; // Pergamon Museum Building
const brandenburg = {lat: 52.516266, log:13.377775}; // Brandenburg Gate

//Arrays for holding marker objects
var preWarMarkers = [];
var duringWarMarkers = [];
var postWarMarkers = [];


const BERLIN_BOUNDS = {			// Map boundaires
				north: 52.900,
				south: 52.100,
				east: 13.800,
				west: 13.000,
			};

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

		//show pre war markers
		preWarMarkers.forEach(element => {
			element.setMap(map);
		});
		//hide during war markers
		duringWarMarkers.forEach(element => {
			element.setMap(null);
		});
		//Hide post war markers
		postWarMarkers.forEach(element => {
			element.setMap(null);
		});
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

		//hide pre war markers
		preWarMarkers.forEach(element => {
			element.setMap(null);
		});
		//hide during war markers
		duringWarMarkers.forEach(element => {
			element.setMap(null);
		});
		//show post war markers
		postWarMarkers.forEach(element => {
			element.setMap(map);
		});
	});
	
}

function ClearControl(controlDiv, map) {
	
	// BUTTON CLEAR
	// Set CSS for the control border.
	const clearButton = document.createElement("div");

	clearButton.style.backgroundColor = "#fff";
	clearButton.style.border = "2px solid #fff";
	clearButton.style.borderRadius = "10px";
	clearButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
	clearButton.style.cursor = "pointer";
	clearButton.style.marginTop = "8px";
	clearButton.style.marginBottom = "22px";
	clearButton.style.textAlign = "center";
	clearButton.title = "Click to clear the map";
	controlDiv.appendChild(clearButton);

	// Set CSS for the control interior.
	const controlText2 = document.createElement("div");

	controlText2.style.color = "rgb(25,25,25)";
	controlText2.style.fontFamily = "Roboto,Arial,sans-serif";
	controlText2.style.fontSize = "16px";
	controlText2.style.lineHeight = "38px";
	controlText2.style.paddingLeft = "5px";
	controlText2.style.paddingRight = "5px";
	controlText2.innerHTML = "Clear Map";
	clearButton.appendChild(controlText2);


	// ---------	Switching the overlay image for this Button		---------
	// Setup the click event listeners: simply set the map to berlin.
	clearButton.addEventListener("click", () => {
		duringWar.setMap(null);
		preWar.setMap(null);
		postWar.setMap(null);

		//hide all markers
		preWarMarkers.forEach(element => {
			element.setMap(null);
		});
		duringWarMarkers.forEach(element => {
			element.setMap(null);
		});
		postWarMarkers.forEach(element => {
			element.setMap(null);
		});
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

		//hide pre war markers
		preWarMarkers.forEach(element => {
			element.setMap(null);
		});
		//Show during war markers
		duringWarMarkers.forEach(element => {
			element.setMap(map);
		});
		//hide post war markers
		postWarMarkers.forEach(element => {
			element.setMap(null);
		});
	});
}


// ---------	MAPS	---------
function initMap() {

	let map = new google.maps.Map(
		document.getElementById('map'), { zoom: 10, center: berlin, restriction: { latLngBounds: BERLIN_BOUNDS, strictBounds: false}});

	// The coordinates for the top-right, bottom-left for map = during war
	let DuringWarBounds = {
		north: 52.850,
		south: 52.150,
		east: 14.000,
		west: 12.800,
	};
	// The coordinates for the top-right, bottom-left for map = prewar
	let PreWarBounds = {
		north: 52.700,
		south: 52.350,
		east: 13.700,
		west: 13.100,
	};
	// The coordinates for the top-right, bottom-left for map = post war
	let PostWarBounds = {
		north: 52.750,
		south: 52.250,
		east: 13.800,
		west: 12.900,
	};

	// The loading code for the pre war map image
	preWar = new google.maps.GroundOverlay(
		"https://upload.wikimedia.org/wikipedia/commons/3/39/Kiessling%27s_Neuer_kleiner_Plan_von_Berlin_1898_B.jpg", PreWarBounds
	);
	// The loading code for the during war map image
	duringWar = new google.maps.GroundOverlay(
		"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/1945_Soviet_map_of_Berlin.jpg/2411px-1945_Soviet_map_of_Berlin.jpg", DuringWarBounds
	);
	// The loading code for the post war map image
	postWar = new google.maps.GroundOverlay(
		"https://upload.wikimedia.org/wikipedia/commons/3/34/The_Berlin_region._LOC_90682667_%28cropped%29.jpg", PostWarBounds
	);
	
	// Set the map overlay to start on during war image
	duringWar.setMap(map);

	// ---------	CONTENTS MARKERS	---------

	var preWarLocations = [
		['Reichstag', 52.518623, 13.376198, 
			'<div id="content">' +
	 		'<div id="siteNotice">' +
			"</div>" +
	 		'<h1 id="firstHeading" class="firstHeading">Reichstag building</h1>' +
	 		'<div id="BodyContent">' +
	 		"<p>The <b>Reichstag Building</b> was built in 1894 to house the Imperial Diet of the German Empire after the unification of the German Empire in 1871</p>" +
	 		"<img src='https://images.adsttc.com/media/images/5624/75e8/e58e/cec3/c400/0353/newsletter/Bundesarchiv_Bild_102-13744__Berlin__Reichstag__Verfassungsfeier.jpg?1445230051' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	 		"<img src='https://i0.wp.com/rylandscollections.com/wp-content/uploads/2015/04/reichstag_thumb.jpg?ssl=1' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	 		"<img src='https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/08/1024px-1895_reichstagsgebaeude.jpg' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	 		"</div>" +
	 		"</div>"
		],
		['Pergamonmuseum', 52.521183, 13.3969,
		 	'<div id="content">' +
		 	'<div id="siteNotice">' +
		 	"</div>" +
		 	'<h1 id="firstHeading" class="firstHeading">Pergamon Museum</h1>' +
		 	'<div id="BodyContent">' +
		 	"<p>The <b>Pergamon Museum</b> was constructed from 1910 - 1930 by order of the then current German Emperor Wilhelm II and was finally opened in 1930</p>" +
		 	"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Berlin_Pergamonmuseum_1905.jpg/791px-Berlin_Pergamonmuseum_1905.jpg?20081213094740' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
		 	"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pergamon_Museum_in_Berlin.jpg/800px-Pergamon_Museum_in_Berlin.jpg?20160720161511' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
		 	"</div>" +
		 	"</div>"
		],
		['Brandenburg', 52.516266, 13.377775, 
			 	'<div id="content">' +
			 	'<div id="siteNotice">' +
			 	"</div>" +
			 	'<h1 id="firstHeading" class="firstHeading">Brandenburg Gate</h1>' +
			 	'<div id="BodyContent">' +
			 	"<p>The <b>Brandenburg Gate</b> was built from 1788 to 1791 by order of the Prussian king Frederick Wilhelm II, and marks the start of the road from Berlin to Brandenburg</p>" +
			 	"</div>" +
			 	"</div>"
		]
	];

	var duringWarLocations = [
		['Reichstag', 52.518623, 13.376198, 
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Reichstag building</h1>' +
			'<div id="BodyContent">' +
			"<p>The <b>Reichstag Building</b> was burnt down in 1933, exactly 4 weeks before the swearing in of Adolf Hitler as Chancellor of Germany. The <b>Reichstag Building</b> wasnt restored until after the war.</p>" +
			"<img src='https://th-thumbnailer.cdn-si-edu.com/xlo7wE5K64ZZmTytx87JpjnMnT8=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/5a/cf/5acf1c49-c598-40f7-8f35-8d282a43536e/reichstagsbrand-web.jpg' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
			"<img src='https://www.facinghistory.org/sites/default/files/Ch05_Image07.JPG?timestamp=1645757978' width='200' height='200' alt='Reichstag Building - During WWII'>" +
			"<img src='https://qph.cf2.quoracdn.net/main-qimg-3ca083a30ba9db67b2c5f19d716b0936.webp' width='200' height='200' alt='Reichstag Building - During WWII'>" +
			"</div>" +
			"</div>"
		],
		['Pergamonmuseum', 52.521183, 13.3969,
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Pergamon Museum</h1>' +
			'<div id="BodyContent">' +
			"<p>The <b>Pergamon Museum</b> was heavily damaged in air raids towards the end of WWII, and was not restored until After WWII had ended.</p>" +
			"<img src='https://davidchipperfield.com/img/N2t1bjlqcmJ3V01DYXNtcnNXdTNaUT09/346_02_smb_zentralarchiv_n3.jpg' width='200' height='200' alt='Pergamon Museum - During WWII'>" +
			"<img src='https://davidchipperfield.com/img/MktxYkgyUUhRT2pBL3VmUkVncHV2dz09/346_02_smb_zentralarchiv_1958_n1.jpg' width='200' height='200' alt='Pergamon Museum - During WWII'>" +
			"</div>" +
			"</div>"
		],
		['Brandenburg', 52.516266, 13.377775, 
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Brandenburg Gate</h1>' +
			'<div id="BodyContent">' +
			"<p>The <b>Brandenburg Gate</b> was on of the few iconic structures still standing after WWII, only sustaining minor damage while the buldings around it stood in ruins</p>" +
			"<img src='https://static.dw.com/image/18295185_403.jpg' width='200' height='200' alt='Brandenburg Gate - During WWII'>" +
			"<img src='https://wartraveller.com/wp-content/uploads/2018/02/brandenbrug-900x654.jpg' width='200' height='200' alt='Brandenburg Gate - During WWII'>" +
			"<img src='https://goeasyberlin.de/wp-content/uploads/2016/11/Brandenburg_Gate-Cold-War.jpg' width='200' height='200' alt='Brandenburg Gate - During WWII'>" +
			"</div>" +
			"</div>"
		]
	];

	var postWarLocations = [
		['Reichstag', 52.518623, 13.376198, 
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Reichstag building</h1>' +
			'<div id="BodyContent">' +
			"<p>The reconstruction of the <b>Reichstag Building</b> began on the 3rd of October 1990, and was finally completed in 1993, where it still stands to this day. The <b>Reichstag</b> is now used to hold the German Parliament</p>" +
			"<img src='https://cdn.theculturetrip.com/wp-content/uploads/2016/08/reichstag_building_berlin_view_from_west_before_sunset.jpg' width='200' height='200' alt='Reichstag Building - Post WWII'>" +
			"<img src='https://cdn.britannica.com/45/101845-004-AB9DCB0D/Reichstag-Norman-Foster-renovations-Berlin.jpg?w=300&h=169&c=crop' width='200' height='200' alt='Reichstag Building - Post WWII'>" +
			"<img src='https://i3.wp.com/rachelsruminations.com/wp-content/uploads/2016/11/PA203956-e1480536318451.jpg' width='200' height='200' alt='Reichstag Building - Post WWII'>" +
			"</div>" +
			"</div>"
		],
		['Pergamonmuseum', 52.521183, 13.3969,
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Pergamon Museum</h1>' +
			'<div id="BodyContent">' +
			"<p>The <b>Pergamon Museum</b> after the war was slowly fixed, and eventually renovated in 1999, where it still stands as a UNESCO World Heritage Site.</p>" +
			"<img src='https://www.inexhibit.com/wp-content/webp-express/webp-images/uploads/2014/07/Pergamon-Museum-Berlin-Ishtar-Gate-870x580.jpg.webp' width='200' height='200' alt='Pergamon Museum - Post WWII'>" +
			"<img src='https://upload.wikimedia.org/wikipedia/commons/4/46/Pergamonmuseum_Front.jpg' width='200' height='200' alt='Pergamon Museum - Post WWII'>" +
			"</div>" +
			"</div>"
		],
		['Brandenburg', 52.516266, 13.377775, 
			'<div id="content">' +
			'<div id="siteNotice">' +
			"</div>" +
			'<h1 id="firstHeading" class="firstHeading">Brandenburg Gate</h1>' +
			'<div id="BodyContent">' +
			"<p>After the minor repairs required for it were completed in 1989, the <b>Brandenburg Gate</b> was reopened and stand as one of Germany's most famous landmarks to this day</p>" +
			"<img src='https://static.dw.com/image/52796179_101.jpg' width='200' height='200' alt='Brandenburg Gate - Post WWII'>" +
			"<img src='https://media.cntraveler.com/photos/5b914e80d5806340ca438db1/16:9/w_2560,c_limit/BrandenburgGate_2018_GettyImages-549093677.jpg' width='200' height='200' alt='Brandenburg Gate - Post WWII'>" +
			"<img src='https://www.erco.com/images/brandenburg-gate-1314/eur-og-1314.jpg' width='200' height='200' alt='Brandenburg Gate - Post WWII'>" +
			"</div>" +
			"</div>"
		]
	];

	var infowindow = new google.maps.InfoWindow();

	var marker, i;
	  
	//loop for creating THe pre war markers
	for (i = 0; i < preWarLocations.length; i++) {
	  
	  preWarMarkers.push(
		  new google.maps.Marker({
			  position: new google.maps.LatLng(preWarLocations[i][1], preWarLocations[i][2]),
			  map: map
			})
	  );

	  marker = preWarMarkers[i];
	  
	  google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
		  infowindow.setContent(preWarLocations[i][3]);
		  infowindow.open(map, marker);
		}
	  })(marker, i));
	}
	//loop for creating during war markers
	for (i = 0; i < duringWarLocations.length; i++) {
	  
		duringWarMarkers.push(
			new google.maps.Marker({
				position: new google.maps.LatLng(duringWarLocations[i][1], duringWarLocations[i][2]),
				map: map
			  })
		);
  
		marker = duringWarMarkers[i];
		
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		  return function() {
			infowindow.setContent(duringWarLocations[i][3]);
			infowindow.open(map, marker);
		  }
		})(marker, i));
	}
	//loop for creating during war markers
	for (i = 0; i < postWarLocations.length; i++) {
	  
		postWarMarkers.push(
			new google.maps.Marker({
				position: new google.maps.LatLng(postWarLocations[i][1], postWarLocations[i][2]),
				map: map
			  })
		);
  
		marker = postWarMarkers[i];
		
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		  return function() {
			infowindow.setContent(postWarLocations[i][3]);
			infowindow.open(map, marker);
		  }
		})(marker, i));
	}

	//hide pre war markers
	preWarMarkers.forEach(element => {
		element.setMap(null);
	});
	//Show during war markers
	duringWarMarkers.forEach(element => {
		element.setMap(map);
	});
	//hide post war markers
	postWarMarkers.forEach(element => {
		element.setMap(null);
	});

	// Initialise page with during world war 2 markers

	// //Array for storing markers
	// var markers = [];
	// //Array storing all the info windows for the markers
	// var infoWindows = [];	



	// //function that removes the current markers from the map
	// function removeMarkers() {
	// 	for (var i in markers) {
	// 		markers[i].setMap(null);
	// 		infoWindows[i].close(); // close the info window
	// 	}
	// 	markers = []; // reset markers array
	// 	infoWindows = []; // reset infowindow array
	// }

	// function PreWarMarkers(){

	// 	//Remove current markers
	// 	removeMarkers();

	// 	//Create info windows and markers
	// 	//Marker and window 1
	// 	const contentString1 =
	// 		'<div id="content">' +
	// 		'<div id="siteNotice">' +
	// 		"</div>" +
	// 		'<h1 id="firstHeading" class="firstHeading">Reichstag building</h1>' +
	// 		'<div id="BodyContent">' +
	// 		"<p>The <b>Reichstag Building</b> was built in 1894 to house the Imperial Diet of the German Empire after the unification of the German Empire in 1871</p>" +
	// 		"<img src='https://images.adsttc.com/media/images/5624/75e8/e58e/cec3/c400/0353/newsletter/Bundesarchiv_Bild_102-13744__Berlin__Reichstag__Verfassungsfeier.jpg?1445230051' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	// 		"<img src='https://i0.wp.com/rylandscollections.com/wp-content/uploads/2015/04/reichstag_thumb.jpg?ssl=1' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	// 		"<img src='https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/08/1024px-1895_reichstagsgebaeude.jpg' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	// 		"</div>" +
	// 		"</div>";
	// 	const infowindow1 = new google.maps.InfoWindow({
	// 		content: contentString1
	// 	});
	// 	const marker1 = new google.maps.Marker({
	// 		position: reichstag,
	// 		map,
	// 		title: "Reichstag Bulding",
	// 	});
	// 	marker1.addListener("click", () => {
	// 		infowindow1.open({
	// 			anchor: marker1,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	const contentString2 =
	// 	'<div id="content">' +
	// 	'<div id="siteNotice">' +
	// 	"</div>" +
	// 	'<h1 id="firstHeading" class="firstHeading">Pergamon Museum</h1>' +
	// 	'<div id="BodyContent">' +
	// 	"<p>The <b>Pergamon Museum</b> was constructed from 1910 - 1930 by order of the then current German Emperor Wilhelm II and was finally opened in 1930</p>" +
	// 	"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Berlin_Pergamonmuseum_1905.jpg/791px-Berlin_Pergamonmuseum_1905.jpg?20081213094740' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	// 	"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pergamon_Museum_in_Berlin.jpg/800px-Pergamon_Museum_in_Berlin.jpg?20160720161511' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
	// 	"</div>" +
	// 	"</div>";
	// 	const infowindow2 = new google.maps.InfoWindow({
	// 		content: contentString2
	// 	});
	// 	const marker2 = new google.maps.Marker({
	// 		position: pergamonmuseum,
	// 		map,
	// 		title: "Pergamon Museum",
	// 	});
	// 	marker2.addListener("click", () => {
	// 		infowindow2.open({
	// 			anchor: marker2,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	const contentString3 =
	// 	'<div id="content">' +
	// 	'<div id="siteNotice">' +
	// 	"</div>" +
	// 	'<h1 id="firstHeading" class="firstHeading">Brandenburg Gate</h1>' +
	// 	'<div id="BodyContent">' +
	// 	"<p>The <b>Brandenburg Gate</b> was built from 1788 to 1791 by order of the Prussian king Frederick Wilhelm II, and marks the start of the road from Berlin to Brandenburg</p>" +
	// 	"</div>" +
	// 	"</div>";
	// 	const infowindow3 = new google.maps.InfoWindow({
	// 		content: contentString3
	// 	});
	// 	const marker3 = new google.maps.Marker({
	// 		position: brandenburg,
	// 		map,
	// 		title: "Brandenburg Gate",
	// 	});
	// 	marker3.addListener("click", () => {
	// 		infowindow3.open({
	// 			anchor: marker3,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	//Add all the info windows to the array
	// 	infoWindows.push(infowindow1, infowindow2, infowindow3);

	// 	//Add all markers to the array
	// 	markers.push(marker1, marker2, marker3);
	// }

	// function DuringWarMarkers(){

	// 	//Remove current markers
	// 	removeMarkers();

	// 	//Create info windows and markers
	// 	//Marker and window 1
	// 	const contentString1 =
			// '<div id="content">' +
			// '<div id="siteNotice">' +
			// "</div>" +
			// '<h1 id="firstHeading" class="firstHeading">Reichstag building</h1>' +
			// '<div id="BodyContent">' +
			// "<p>The <b>Reichstag Building</b> was burnt down in 1933, exactly 4 weeks before the swearing in of Adolf Hitler as Chancellor of Germany. The <b>Reichstag Building</b> wasnt restored until after the war.</p>" +
			// "<img src='https://th-thumbnailer.cdn-si-edu.com/xlo7wE5K64ZZmTytx87JpjnMnT8=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/5a/cf/5acf1c49-c598-40f7-8f35-8d282a43536e/reichstagsbrand-web.jpg' width='200' height='200' alt='Reichstag Building - Pre 1933'>" +
			// "<img src='https://www.facinghistory.org/sites/default/files/Ch05_Image07.JPG?timestamp=1645757978' width='200' height='200' alt='Reichstag Building - During WWII'>" +
			// "<img src='https://qph.cf2.quoracdn.net/main-qimg-3ca083a30ba9db67b2c5f19d716b0936.webp' width='200' height='200' alt='Reichstag Building - During WWII'>" +
			// "</div>" +
			// "</div>";
	// 	const infowindow1 = new google.maps.InfoWindow({
	// 		content: contentString1
	// 	});
	// 	const marker1 = new google.maps.Marker({
	// 		position: reichstag,
	// 		map,
	// 		title: "Reichstag Bulding",
	// 	});
	// 	marker1.addListener("click", () => {
	// 		infowindow1.open({
	// 			anchor: marker1,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	const contentString2 =
		// '<div id="content">' +
		// '<div id="siteNotice">' +
		// "</div>" +
		// '<h1 id="firstHeading" class="firstHeading">Pergamon Museum</h1>' +
		// '<div id="BodyContent">' +
		// "<p>The <b>Pergamon Museum</b> was heavily damaged in air raids towards the end of WWII, and was not restored until After WWII had ended.</p>" +
		// "<img src='https://davidchipperfield.com/img/N2t1bjlqcmJ3V01DYXNtcnNXdTNaUT09/346_02_smb_zentralarchiv_n3.jpg' width='200' height='200' alt='Pergamon Museum - During WWII'>" +
		// "<img src='https://davidchipperfield.com/img/MktxYkgyUUhRT2pBL3VmUkVncHV2dz09/346_02_smb_zentralarchiv_1958_n1.jpg' width='200' height='200' alt='Pergamon Museum - During WWII'>" +
		// "</div>" +
		// "</div>";
	// 	const infowindow2 = new google.maps.InfoWindow({
	// 		content: contentString2
	// 	});
	// 	const marker2 = new google.maps.Marker({
	// 		position: pergamonmuseum,
	// 		map,
	// 		title: "Pergamon Museum",
	// 	});
	// 	marker2.addListener("click", () => {
	// 		infowindow2.open({
	// 			anchor: marker2,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	const contentString3 =
		// '<div id="content">' +
		// '<div id="siteNotice">' +
		// "</div>" +
		// '<h1 id="firstHeading" class="firstHeading">Brandenburg Gate</h1>' +
		// '<div id="BodyContent">' +
		// "<p>The <b>Brandenburg Gate</b> was on of the few iconic structures still standing after WWII, only sustaining minor damage while the buldings around it stood in ruins</p>" +
		// "<img src='https://static.dw.com/image/18295185_403.jpg' width='200' height='200' alt='Brandenburg Gate - During WWII'>" +
		// "<img src='https://wartraveller.com/wp-content/uploads/2018/02/brandenbrug-900x654.jpg' width='200' height='200' alt='Brandenburg Gate - During WWII'>" +
		// "<img src='https://goeasyberlin.de/wp-content/uploads/2016/11/Brandenburg_Gate-Cold-War.jpg' width='200' height='200' alt='Brandenburg Gate - During WWII'>" +
		// "</div>" +
		// "</div>";
	// 	const infowindow3 = new google.maps.InfoWindow({
	// 		content: contentString3
	// 	});
	// 	const marker3 = new google.maps.Marker({
	// 		position: brandenburg,
	// 		map,
	// 		title: "Brandenburg Gate",
	// 	});
	// 	marker3.addListener("click", () => {
	// 		infowindow3.open({
	// 			anchor: marker3,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	//Add all the info windows to the array
	// 	infoWindows.push(infowindow1, infowindow2, infowindow3);

	// 	//Add all markers to the array
	// 	markers.push(marker1, marker2, marker3);
	// }

	// function PostWarMarkers(){

	// 	//Remove current markers
	// 	removeMarkers();

	// 	//Create info windows and markers
	// 	//Marker and window 1
	// 	const contentString1 =
			// '<div id="content">' +
			// '<div id="siteNotice">' +
			// "</div>" +
			// '<h1 id="firstHeading" class="firstHeading">Reichstag building</h1>' +
			// '<div id="BodyContent">' +
			// "<p>The reconstruction of the <b>Reichstag Building</b> began on the 3rd of October 1990, and was finally completed in 1993, where it still stands to this day. The <b>Reichstag</b> is now used to hold the German Parliament</p>" +
			// "<img src='https://cdn.theculturetrip.com/wp-content/uploads/2016/08/reichstag_building_berlin_view_from_west_before_sunset.jpg' width='200' height='200' alt='Reichstag Building - Post WWII'>" +
			// "<img src='https://cdn.britannica.com/45/101845-004-AB9DCB0D/Reichstag-Norman-Foster-renovations-Berlin.jpg?w=300&h=169&c=crop' width='200' height='200' alt='Reichstag Building - Post WWII'>" +
			// "<img src='https://i3.wp.com/rachelsruminations.com/wp-content/uploads/2016/11/PA203956-e1480536318451.jpg' width='200' height='200' alt='Reichstag Building - Post WWII'>" +
			// "</div>" +
			// "</div>";
	// 	const infowindow1 = new google.maps.InfoWindow({
	// 		content: contentString1
	// 	});
	// 	const marker1 = new google.maps.Marker({
	// 		position: reichstag,
	// 		map,
	// 		title: "Reichstag Bulding",
	// 	});
	// 	marker1.addListener("click", () => {
	// 		infowindow1.open({
	// 			anchor: marker1,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	const contentString2 =
		// '<div id="content">' +
		// '<div id="siteNotice">' +
		// "</div>" +
		// '<h1 id="firstHeading" class="firstHeading">Pergamon Museum</h1>' +
		// '<div id="BodyContent">' +
		// "<p>The <b>Pergamon Museum</b> after the war was slowly fixed, and eventually renovated in 1999, where it still stands as a UNESCO World Heritage Site.</p>" +
		// "<img src='https://www.inexhibit.com/wp-content/webp-express/webp-images/uploads/2014/07/Pergamon-Museum-Berlin-Ishtar-Gate-870x580.jpg.webp' width='200' height='200' alt='Pergamon Museum - Post WWII'>" +
		// "<img src='https://upload.wikimedia.org/wikipedia/commons/4/46/Pergamonmuseum_Front.jpg' width='200' height='200' alt='Pergamon Museum - Post WWII'>" +
		// "</div>" +
		// "</div>";
	// 	const infowindow2 = new google.maps.InfoWindow({
	// 		content: contentString2
	// 	});
	// 	const marker2 = new google.maps.Marker({
	// 		position: pergamonmuseum,
	// 		map,
	// 		title: "Pergamon Museum",
	// 	});
	// 	marker2.addListener("click", () => {
	// 		infowindow2.open({
	// 			anchor: marker2,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	const contentString3 =
		// '<div id="content">' +
		// '<div id="siteNotice">' +
		// "</div>" +
		// '<h1 id="firstHeading" class="firstHeading">Brandenburg Gate</h1>' +
		// '<div id="BodyContent">' +
		// "<p>After the minor repairs required for it were completed in 1989, the <b>Brandenburg Gate</b> was reopened and stand as one of Germany's most famous landmarks to this day</p>" +
		// "<img src='https://static.dw.com/image/52796179_101.jpg' width='200' height='200' alt='Brandenburg Gate - Post WWII'>" +
		// "<img src='https://media.cntraveler.com/photos/5b914e80d5806340ca438db1/16:9/w_2560,c_limit/BrandenburgGate_2018_GettyImages-549093677.jpg' width='200' height='200' alt='Brandenburg Gate - Post WWII'>" +
		// "<img src='https://www.erco.com/images/brandenburg-gate-1314/eur-og-1314.jpg' width='200' height='200' alt='Brandenburg Gate - Post WWII'>" +
		// "</div>" +
		// "</div>";
	// 	const infowindow3 = new google.maps.InfoWindow({
	// 		content: contentString3
	// 	});
	// 	const marker3 = new google.maps.Marker({
	// 		position: brandenburg,
	// 		map,
	// 		title: "Brandenburg Gate",
	// 	});
	// 	marker3.addListener("click", () => {
	// 		infowindow3.open({
	// 			anchor: marker3,
	// 			map,
	// 			shouldFocus: false,
	// 		});
	// 	});

	// 	//Add all the info windows to the array
	// 	infoWindows.push(infowindow1, infowindow2, infowindow3);

	// 	//Add all markers to the array
	// 	markers.push(marker1, marker2, marker3);
	// }


	// ---------	BUTTON IMPLEMENTATIONS ---------
	// Create the DIV to hold the control and call the CenterControl()
	// constructor passing in this DIV.
	
	const centerLeftControlDiv = document.createElement("div");
	CenterLeftControl(centerLeftControlDiv, map);
	map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerLeftControlDiv);
	
	const centerControlDiv = document.createElement("div");
	CenterControl(centerControlDiv, map);
	map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);
	
	const centerRightControlDiv = document.createElement("div");
	CenterRightControl(centerRightControlDiv, map);
	map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerRightControlDiv);
	
	const ClearControlDiv = document.createElement("div");
	ClearControl(ClearControlDiv, map);
	map.controls[google.maps.ControlPosition.LEFT_CENTER].push(ClearControlDiv);
}


// // References

// Google Maps Platform Documentation | Maps JavaScript API. (n.d.). Retrieved from Google Developers website: https://developers.google.com/maps/documentation/javascript

// Google Maps Javascript API Copyright:
// Portions of this page are modifications based on work created and shared by Google and used according to terms described in the Creative Commons 4.0 Attribution License.


