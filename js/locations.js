const fetchLocations =
  /* fetch call to get locations data from api */
  fetch("https://my-json-server.typicode.com/TomSearle/cb-devtest-api/locations").then((response) => response.json()).then((data) => data);


const getLocations = async () => {
  const locationData = await fetchLocations;

  /* parent container element */
  const container = document.getElementById('section');

  /* looping through locations to dynamically add cards */
  locationData[0].forEach((location, index) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
  const content = `
                  
              <div class="location-cards col-md-6">
              <div style="align-self: center; z-index: 1; ">
                        <img src=${location.image} class="locationImage" />
                 </div>
                          <div class="card">
                              <ul style="list-style-type: none; padding-top: 10px;">
                                  <li class="list-text">${location.location_name}</li>
                                  <li class="list-text"> <img src="assets/Shape.svg" />${location.address_line}</li>
                                  <li class="list-text"> <img src="assets/Shape (1).svg" />${location.pin}</li>
                                  <li class="list-text"> <img src="assets/Shape (2).svg" />${location.share}</li>
                              </ul>
                          </div>
                
             
            </div>`;
   

    container.innerHTML += content;
  })
}

// function googleMaps() {
//   let mapProp = {
//     center: new google.maps.LatLng(51.508742, -0.120850),
//     zoom: 5,
//   };
//   let googleMap = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

getLocations();
