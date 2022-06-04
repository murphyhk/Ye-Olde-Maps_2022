// ---------	INITIAL SETUP	---------
let historicalOverlay;

// The coordinates for Berlin city centre
const berlin = { lat: 52.518, lng: 13.408 };

// Coordinates for map markers
const reichstag = { lat: 52.518623, lng: 13.376198 }; // Reichstag building

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
	// The loading code for the post war map image
	postWar = new google.maps.GroundOverlay(
		"berlinTestMap2.jpg", imageBounds2
	);
	
	// Set the map overlay to start on during war image
	duringWar.setMap(map);

	// ---------	CONTENTS MARKERS	---------

	// // The name, latitude and longitude of the three chosen locations 
	// var markers = [
	// 	['Reichstag', 52.518623, 13.376198],
	// 	['Pergamonmuseum', 52.521183, 13.3969],
	// 	['Brandenburg', 52.516266, 13.377775]
	//   ];

	// // InfoWindow content for the pre war markers
	// var infoWindowPreWar = [
    // 	['<div class="info_content">' +
    // 	'<h3>Reichstag</h3>' +
    // 	'<p>The <b>Reichstag Building</b> was built in 1894 to house the Imperial Diet of the German Empire after the unification of the German Empire in 1871</p>' +
	// 	'<img src="https://images.adsttc.com/media/images/5624/75e8/e58e/cec3/c400/0353/newsletter/Bundesarchiv_Bild_102-13744__Berlin__Reichstag__Verfassungsfeier.jpg?1445230051" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'<img src="https://i0.wp.com/rylandscollections.com/wp-content/uploads/2015/04/reichstag_thumb.jpg?ssl=1" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'<img src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/08/1024px-1895_reichstagsgebaeude.jpg" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'</div>'
	// 	],
	// 	['<div class="info_content">' +
  	//   	'<h3>Mumbai</h3>' +
   	// 	'<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
	// 	['<div class="info_content">' +
   	// 	'<h3>Mumbai</h3>' +
   	// 	'<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
	// ];

	//   // InfoWindow content for the during war markers
	//   var infoWindowWar = [
    // 	['<div class="info_content">' +
    // 	'<h3>Reichstag</h3>' +
    // 	'<p>The <b>Reichstag Building</b> was burned down on Feburary 27th 1933, exactly four weeks after the swearing in of Adolf Hitler as Chancellor of Germany </p>' +
	// 	'<img src="https://th-thumbnailer.cdn-si-edu.com/xlo7wE5K64ZZmTytx87JpjnMnT8=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/5a/cf/5acf1c49-c598-40f7-8f35-8d282a43536e/reichstagsbrand-web.jpg" width="200" height="200" alt="Reichstag Building - 1933">' +
	// 	'<img src="https://www.facinghistory.org/sites/default/files/Ch05_Image07.JPG?timestamp=1645757978" width="200" height="200" alt="Reichstag Building - 1933">' +
	// 	'<img src="https://qph.cf2.quoracdn.net/main-qimg-3ca083a30ba9db67b2c5f19d716b0936.webp " width="200" height="200" alt="Reichstag Building - 1933">' +
	// 	'</div>'
	// 	],
	// 	['<div class="info_content">' +
	// 	'<h3>Mumbai</h3>' +
	//    	'<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
	// 	['<div class="info_content">' +
	//    	'<h3>Mumbai</h3>' +
	//    	'<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
	// ];

	//   // InfoWindow content for the post war markers
	//   var infoWindowPostWar = [
    // 	['<div class="info_content">' +
    // 	'<h3>Reichstag</h3>' +
    // 	'<p>The <b>Reichstag Building</b> was built in 1894 to house the Imperial Diet of the German Empire after the unification of the German Empire in 1871</p>' +
	// 	'<img src="" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'<img src="" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'<img src="" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'</div>'
	// 	],
	// 	['<div class="info_content">' +
    // 	'<h3>Reichstag</h3>' +
    // 	'<p>The <b>Reichstag Building</b> was built in 1894 to house the Imperial Diet of the German Empire after the unification of the German Empire in 1871</p>' +
	// 	'<img src="" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'<img src="" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'<img src="" width="200" height="200" alt="Reichstag Building - Pre 1933">' +
	// 	'</div>'
	// 	],
	// 	['<div class="info_content">' +
	// 	'<h3>Mumbai</h3>' +
	//    	'<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
	// ];

	// // Loop through our array of markers & place each one on the map  
	// for( i = 0; i < markers.length; i++ ) {
		
	// 	var position = new google.maps.LatLng(markers[i][1], markers[i][2]);

    // 	marker = new google.maps.Marker({
    //     	position: position,
    //     	map: map,
    //     	title: markers[i][0]
    // 	});

	// 	// Each marker to have an info window    
	// 	google.maps.event.addListener(marker, 'click', (function(marker, i) {
	// 		return function() {
	// 			infoWindow.setContent(infoWindowPreWar[i]);
	// 			infoWindow.open(map, marker);
	// 		}
	// 	})(marker, i));

	// }

	// Content inside the marker infowindow
	const contentString =
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
		"</div>";
	const infowindow = new google.maps.InfoWindow({
		content: contentString

	});
	const marker = new google.maps.Marker({
		position: reichstag,
		map,
		title: "Reichstag Bulding",
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


