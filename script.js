mapboxgl.accessToken = 'pk.eyJ1IjoibWVnaGFua29saW4iLCJhIjoiY2xkbTByamQyMDRzajN1bGlxbHJnYm56bSJ9.FAxkUWsOApq-qNHJhlT4xg';
 
const map = new mapboxgl.Map({ 
    container: 'map', 
    style: 'mapbox://styles/meghankolin/cldm18djg001v01nq0ed2vtts',
    center: [-79.399, 43.661], //[longitude, latitude] 
    zoom: 14,
})

//Adding zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

//Adding an option to make the map full-screen
map.addControl(new mapboxgl.FullscreenControl());

//Adding the map to the page
map.on('load', () => {
    //Adding data to the map. I still can't get the data to load without including a GeoJSON file. I'm not entirely sure why but I'll just keep including them.
    map.addSource('food-spots', {
        type: 'geojson', 
        data: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": { 
                  "name": "Mother's Dumplings",
                  "cuisine": "Chinese",
                  "seating type": "Dine-in",
                  "address": "421 Spadina Ave",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 2G6"
                },
                "geometry": {
                  "coordinates": [
                    -79.39953590674644,
                    43.65712052428347
                  ],
                  "type": "Point"
                }
              }, //
              {
                "type": "Feature",
                "properties": {
                  "name": "Kinton Ramen",
                  "cuisine": "Japanese",
                  "seating type": "Dine-in",
                  "address": "51 Baldwin St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 1L1"
                },
                "geometry": {
                  "coordinates": [
                    -79.39405236441846,
                    43.6557939999995
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Sid's Cafe",
                  "cuisine": "American, Japanese, Mexican",
                  "seating type": "Food court",
                  "address": "100 St. George St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 3G3"
                },
                "geometry": {
                  "coordinates": [
                    -79.39850063558303,
                    43.66200823849178
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Seven Lives Tacos y Mariscos",
                  "cuisine": "Mexican",
                  "seating type": "Dine-in",
                  "address": "69 Kensington Avenue",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 2K2"
                },
                "geometry": {
                  "coordinates": [
                    -79.4005396355816,
                    43.654417999999794
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Robarts Cafeteria",
                  "cuisine": "American, Italian, Japanese, Mexican",
                  "seating type": "Food court",
                  "address": "130 St. George St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 2G4"
                },
                "geometry": {
                  "coordinates": [
                    -79.39984010633336,
                    43.6646855328155
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "MedSci Cafeteria",
                  "cuisine": "American, Italian, Japanese, Mediterranean, Vegan",
                  "seating type": "Food court",
                  "address": "1 King's College Cir",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 1A8"
                },
                "geometry": {
                  "coordinates": [
                    -79.39296814930661,
                    43.6602547869723
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Burrito Bandidos",
                  "cuisine": "Mexican",
                  "seating type": "Dine-in",
                  "address": "362 Bloor St West",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5R 2W7"
                },
                "geometry": {
                  "coordinates": [
                    -79.40571411905015,
                    43.66660171725769
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Sizzler Kabab",
                  "cuisine": "Indian",
                  "seating type": "Dine-in",
                  "address": "381 Spadina Ave",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 2G6"
                },
                "geometry": {
                  "coordinates": [
                    -79.3990572711631,
                    43.65631052449453
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "New College Dining Hall",
                  "cuisine": "Varies",
                  "seating type": "Dining hall",
                  "address": "40 Willcocks St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 2Z3"
                },
                "geometry": {
                  "coordinates": [
                    -79.4008117288363,
                    43.66193999999945
                  ],
                  "type": "Point"
                }
              }
            ]
          }
    })

    map.addLayer({
        'id': 'best-food',
        'type': 'circle',
        'source': 'food-spots',
        'paint': { 
            'circle-radius': [
            'interpolate', //INTERPOLATE expression produces continuous results by interplating between value pairs
            ['linear'], //linear interpolation between stops but could be exponential ['exponential', base] where base controls rate at which output increases
            ['zoom'], //ZOOM expression changes appearance with zoom level
            13, 5, // when zoom level is 8 or less, circle radius will be 1px
            18, 15 // when zoom level is 12 or greater, circle radius will be 10px
            ],
            'circle-color': '#4ddbff'
        }

    })
    
    map.addSource('future-transit', {
      'type': 'vector',
      'url': 'mapbox://meghankolin.1gh7cy8m'
      });
      
    map.addLayer({
      'id': 'downtown-transit',
      'type': 'line',
      'source': 'future-transit', 
      'paint': {
          'line-color': [
            //Changing the colour of the line based on what kind of transit it is
            'match', //I initially tried using STEP, but step doesn't work on non-numeric values, so I found 'match' to be a better choice
            ['get', 'type'], // GET expression retrieves property value from 'name' data field
            'Rapid Transit', '#0082C9',
            'Streetcar', '#DA251D',
            '#FFFFFF' //All other values
            ],
          'line-width': 1,
        },
        
      'source-layer': 'futurettc-bzs1bg' 
        },
      //Drawing order
      'best-food',
      'downtown-transit'
    )

    //Adding the names of all the restaurants to the map
    map.addLayer({
        'id': 'best-food-labels',
        'type': 'symbol',
        'source': 'food-spots',
        'layout': {
            'text-field': ['get', 'name'],
            'text-variable-anchor': ['bottom'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto'
        },
        'paint': {
            'text-color': 'white'
        }
    });

    //Adding a click event to show more information about each restaurant
    map.on('click', 'best-food', (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.address;
       
      // Setting the popup to appear over the object being clicked instead of appearing somewhere else.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
       
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
      });
       
      //Make the cursor a pointer over the layer so we know we can click on things.
      map.on('mouseenter', 'places', () => {
      map.getCanvas().style.cursor = 'pointer';
      });
       
      //Change it back to the default when it leaves.
      map.on('mouseleave', 'places', () => {
      map.getCanvas().style.cursor = '';
    });
  
    //Bringing the map back to centre
    document.getElementById('returnbutton').addEventListener('click', () => {
      map.flyTo({
          center: [-79.399, 43.661], //[longitude, latitude] 
          zoom: 14,
          essential: true
      });
  });
  }
)