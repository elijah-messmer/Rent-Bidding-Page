// Function for tooltips
function popup() {
    let popup = null; // declare the popup variable
  
    map.on('mouseenter', 'rent-bidding-point-data-jitter', (event) => {
      // If the user hovers over one of your markers, get its information.
      const feature = event.features[0];
  
      // Create a popup only if one doesn't exist
      if (!popup) {
        /* 
        Create a popup, specify its options 
        and properties, and add it to the map.
        */
        popup = new mapboxgl.Popup({ 
          offset: [0, -15],
          closeButton: false // remove the close button (x)
        })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h6><b>${feature.properties.FULL_ADDRESS}</b></h6><p>${feature.properties.PRICE_DIFFERENCE
            }</p>`
          )
          .addTo(map);
      }
    });
  
    map.on('mouseleave', 'rent-bidding-point-data-jitter', () => {
      // Remove the popup when the user stops hovering over the marker.
      if (popup) {
        popup.remove();
        popup = null; // reset the popup variable
      }
    });
  } 

var config = {
    style: 'mapbox://styles/elijah-messmer/cln4vvc0x06wc01ns1l7m0b8m',
    accessToken: 'pk.eyJ1IjoiZWxpamFoLW1lc3NtZXIiLCJhIjoiY2xmYWNkMnFnMDRiZTNwcGJsM2J0ZjRpeCJ9.srDYVTRF4yqQ9QIz5b3EvA',
    showMarkers: false,
    // markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    // inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    
    chapters: [
        {
            id: 'hidden-identifier',
            alignment: 'left',
            hidden: true,
            // title: 'Third Title',
            // image: './path/to/image/source.png',
            // description: '&ldquo;I&rsquo;ve lived in the Boston area for 4 years,&rdquo; McCauley said. &ldquo;This is the first time I&rsquo;ve ever experienced rent bidding. Some of my friends who have been here longer have also never experienced it, at least not at this scale.&rdquo;',
            location: {
                center: [-71.13983, 42.33769],
                zoom: 11.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'percent-positive-price-difference',
                    opacity: .0,
                    duration: 1000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            // title: 'Display Title',
            // image: './path/to/image/source.png',
            description: 'On the line between Somerville and Cambridge, Stephanou is far from the only renter who has bid above the asking price to secure their apartment.',
            location: {
                center: [-71.13983, 42.33769],
                zoom: 11.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'percent-positive-price-difference',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'rent-bidding-point-data-jitter',
                    opacity: .8,
                    duration: 2000
                },
            ],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            // title: 'Second Title',
            // image: './path/to/image/source.png',
            description: 'In the months leading up to September 1st, when the majority of Boston leases start, 20% of apartments in Stephanou&rsquo;s 02144 ZIP Code rented for above the asking price <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#fd5372" stroke="#e00000" stroke-width="1px" /></svg>, according to Multiple Listing Service records',
            location: {
                center: [-71.12609, 42.38692],
                zoom: 13.37,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'popup',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            // title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Tom McCauley, a 27-year-old tech worker, found his current apartment on that <span style="border-bottom: 1px dashed #fd1212; border-width: 3px">same line</span>. Before finding their current apartment, McCauley and his roommate inquired about 30+ apartments across Fenway, East Somerville and Watertown, toured 6 to 7 apartments, and lost 3 bidding wars at apartments they applied for, often with $25 to $50 application fees. <br><br>At their new two-bedroom apartment, the two pay $3,000 a month plus utilities, after bidding up from the initial $2,875 list price.',
            location: {
                center: [-71.12609, 42.38692],
                zoom: 13.37,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-lines',
                    opacity: .8,
                    duration: 2000  
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-lines',
                    opacity: 0,
                    duration: 1000  
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            // title: 'Third Title',
            // image: './path/to/image/source.png',
            description: '&ldquo;I&rsquo;ve lived in the Boston area for 4 years,&rdquo; McCauley said. &ldquo;This is the first time I&rsquo;ve ever experienced rent bidding. Some of my friends who have been here longer have also never experienced it, at least not at this scale.&rdquo;',
            location: {
                center: [-71.12609, 42.38692],
                zoom: 13.37,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            // title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Across Somerville, the <a href="https://www.boston.com/real-estate/renting/2023/05/04/along-green-line-extension-bidding-wars-over-rentals-pick-up-speed/" target="_blank" style="text-decoration: none; color: inherit;"><span style="transition: color 0.3s; border-bottom: 1px dashed #00d62e; border-width: 3px">opening of the Green Line Extension</span></a> has driven up housing demand and costs, driving above average rates of rent bidding compared to nearby Cambridge and Boston. <br><br>Still, other neighborhoods have comparable or even higher rates of rent bidding.',
            location: {
                center: [-71.10449, 42.39043],
                zoom: 13.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'green-line-extension',
                    opacity: .8,
                    duration: 2000  
                }
            ],
            onChapterExit: [
                {
                    layer: 'green-line-extension',
                    opacity: 0,
                    duration: 1000  
                }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'An academic problem',
            // image: './path/to/image/source.png',
            description: 'In Allston, a quarter of all apartments were bid up from their initial list price. Data shows that the neighborhood&rsquo;s popularity among university students may be partially to blame for the high rate of rent bidding.',
            location: {
                center: [-71.12082, 42.35953],
                zoom: 13.50,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            // title: 'An academic problem',
            // image: './path/to/image/source.png',
            description: 'Across Boston ZIP Codes, there is a moderate correlation between the overall student population and the frequency of rent bidding.<br><br>That relationship is particularly strong when it comes to graduate students, who are responsible for 37% of the rent bidding variance in a given ZIP Code. Generally speaking, a ZIP Code&rsquo;s rate of rent bidding increases by one percent for every 275 additional graduate students living there.',
            location: {
                center: [-71.04959, 42.34768],
                zoom: 11.85,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-identifier',
            alignment: 'right',
            hidden: false,
            // title: 'An academic problem',
            // image: './path/to/image/source.png',
            description: 'While undergraduate enrollment has remained relatively flat over the last 10 years, the number of graduate students across Boston has risen 20% just since 2020, according to the <a href="https://www.boston.gov/sites/default/files/file/2023/06/Student%20Housing%20Report%2C%202022.pdf" target="_blank" style="color: inherit;"><span style="transition: color 0.3s;">City of Boston</span></a>.',
            location: {
                center: [-71.04959, 42.34768],
                zoom: 11.85,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'right',
            hidden: false,
            // title: 'An academic problem',
            // image: './path/to/image/source.png',
            description: 'Over 70% of Boston&rsquo;s graduate students are concentrated in just five ZIP Codes. On average, 17% of rentals went for above the asking price in these neighborhoods — 4% higher than the average rate for the rest of Boston.',
            location: {
                center: [-71.04959, 42.34768],
                zoom: 11.85,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'student-zip-codes',
                    opacity: .7,
                    duration: 2000  
                }
            ],
            onChapterExit: [
                {
                    layer: 'student-zip-codes',
                    opacity: 0,
                    duration: 1000  
                }
            ]
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            // title: 'An academic problem',
            // image: './path/to/image/source.png',
            description: 'Sarah Doucette, a real estate agent at Rise Realty, said that all her clients who participated in bidding wars this year were students, usually at the graduate level. “I don&rsquo;t really see bidding wars amongst working people. It&rsquo;s mostly this September 1st student rush,” she said. “It&rsquo;s just very competitive. And it seems like they&rsquo;re willing to pay whatever it takes just to get into the apartment.”',
            location: {
                center: [-71.04959, 42.34768],
                zoom: 11.85,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};