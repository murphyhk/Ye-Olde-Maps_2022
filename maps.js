

let historicalOverlay;
            const berlin = { lat: 52.518, lng: 13.408 };

            function CenterControl(controlDiv, map) {
                // Set CSS for the control border.
                const controlUI = document.createElement("div");

                controlUI.style.backgroundColor = "#fff";
                controlUI.style.border = "2px solid #fff";
                controlUI.style.borderRadius = "3px";
                controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
                controlUI.style.cursor = "pointer";
                controlUI.style.marginTop = "8px";
                controlUI.style.marginBottom = "22px";
                controlUI.style.textAlign = "center";
                controlUI.title = "Click to change the map";
                controlDiv.appendChild(controlUI);

                // Set CSS for the control interior.
                const controlText = document.createElement("div");

                controlText.style.color = "rgb(25,25,25)";
                controlText.style.fontFamily = "Roboto,Arial,sans-serif";
                controlText.style.fontSize = "16px";
                controlText.style.lineHeight = "38px";
                controlText.style.paddingLeft = "5px";
                controlText.style.paddingRight = "5px";
                controlText.innerHTML = "Change Map";
                controlUI.appendChild(controlText);

                // Setup the click event listeners: simply set the map to berlin.
                controlUI.addEventListener("click", () => {
                    historicalOverlay1.setMap(map)
                });
            }

            function initMap() {

                let map = new google.maps.Map(
                    document.getElementById('map'), { zoom: 12, center: berlin }
                );

                let imageBounds = {
                    north: 52.560,
                    south: 52.500,
                    east: 13.528,
                    west: 13.408,
                };

                let imageBounds1 = {
                    north: 52.600,
                    south: 52.400,
                    east: 13.588,
                    west: 13.228,
                };

                historicalOverlay1 = new google.maps.GroundOverlay(
                    "https://i.pinimg.com/564x/52/2e/13/522e1301861a009124eb2694c461181d.jpg", imageBounds1
                );
                historicalOverlay = new google.maps.GroundOverlay(
                    "berlinTestMap.jpg", imageBounds
                );
                historicalOverlay.setMap(map);

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

                // Create the DIV to hold the control and call the CenterControl()
                // constructor passing in this DIV.
                const centerControlDiv = document.createElement("div");
                CenterControl(centerControlDiv, map);
                map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
            }
