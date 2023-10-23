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
        `<h6>Price Difference:</h6><p>${feature.properties.PRICE_DIFFERENCE
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
        description: 'In the months leading up to Sept 1, when the <a href="https://www.boston.gov/news/tips-residents-advance-september-1-move" target="_blank" style="color: inherit;"><span style="transition: color 0.3s;">the majority of Boston leases start</span></a>, 15% of all apartments were bid up from their list price across Boston, Brookline, Somerville and Cambridge, according to Multiple Listing Service records.',
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
        // title: 'Display Title',
        // image: './path/to/image/source.png',
        description: 'For that 15% of apartments, renters bid $177 over the asking price on average — over $2,000 in additional rent over a 12-month lease.',
        location: {
            center: [-71.13983, 42.33769],
            zoom: 11.00,
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
        id: 'third-identifier',
        alignment: 'left',
        hidden: false,
        // title: 'Display Title',
        // image: './path/to/image/source.png',
        description: 'On the line between Somerville and Cambridge, Stephanou was far from the only renter who bid above the asking price to secure their apartment.',
        location: {
            center: [-71.13609, 42.39992],
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
        id: 'fourth-identifier',
        alignment: 'left',
        hidden: false,
        // title: 'Second Title',
        // image: './path/to/image/source.png',
        description: 'In Stephanou&rsquo;s 02144 ZIP Code, 20% of apartments rented for above the asking price.',
        location: {
            center: [-71.13609, 42.39992],
            zoom: 13.37,
            pitch: 0.00,
            bearing: 0.00
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'popup',
        onChapterEnter: [
            {
                layer: '02144-highlight',
                opacity: .7,
                duration: 2000  
            }
        ],
        onChapterExit: [
            {
                layer: '02144-highlight',
                opacity: .0,
                duration: 2000  
            }
        ]
    },
    {
        id: 'fifth-identifier',
        alignment: 'left',
        hidden: false,
        // title: 'Third Title',
        // image: './path/to/image/source.png',
        description: 'Tom McCauley, a 27-year-old tech worker, found his current apartment on that <span style="border-bottom: 1px dashed #fd1212; border-width: 3px">same line</span>. Before finding their current apartment, McCauley and his roommate inquired about 30+ apartments across Fenway, East Somerville and Watertown, toured six to seven apartments, and lost three bidding wars at apartments they applied for, often with $25 to $50 application fees. <br><br>At their new two-bedroom apartment, the two pay $3,000 a month plus utilities, after bidding up from the initial $2,875 list price.',
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
        id: 'sixth-identifier',
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
        id: 'seventh-identifier',
        alignment: 'left',
        hidden: false,
        // title: 'Third Title',
        // image: './path/to/image/source.png',
        description: 'Across Somerville, the <a href="https://www.boston.com/real-estate/renting/2023/05/04/along-green-line-extension-bidding-wars-over-rentals-pick-up-speed/" target="_blank" style="text-decoration: none; color: inherit;"><span style="transition: color 0.3s; border-bottom: 1px dashed #00d62e; border-width: 3px">opening of the Green Line Extension</span></a> has driven up housing demand and costs, driving above average rates of rent bidding compared to nearby Cambridge and Boston.',
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
        id: 'eighth-identifier',
        alignment: 'left',
        hidden: false,
        description: 'Although Somerville has a relatively high rate of rent bidding compared to other areas, it does not see as many high bids as some nearby ZIP Codes.',
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
                layer: 'percent-positive-price-difference',
                opacity: .8,
                duration: 2000
            },
            {
                layer: 'percent-increase-by-zipcode',
                opacity: .0,
                duration: 1000
            }
        ],
        onChapterExit: []
    },
    {
        id: 'ninth-identifier',
        alignment: 'left',
        hidden: false,
        description: 'Neighborhoods like Chinatown, Roslindale, Dorchester and Roxbury saw some of the highest bidding. On average, apartments that were bid on in these neighborhoods went for 7% to 8% above the list price.',
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
                layer: 'high-percent-increase',
                opacity: .7,
                duration: 2000  
            },
            {
                layer: 'percent-increase-by-zipcode',
                opacity: .8,
                duration: 2000
            },
            {
                layer: 'percent-positive-price-difference',
                opacity: .0,
                duration: 2000
            },
        ],
        onChapterExit: [
            {
                layer: 'high-percent-increase',
                opacity: .0,
                duration: 1000  
            },
        ]
    },
    {
        id: 'tenth-identifier',
        alignment: 'left',
        hidden: false,
        description: 'Boston&rsquo;s rental housing supply has lagged demand for years, but brokers say the phenomenon of rent bidding only emerged at this scale after the city began its recovery from the pandemic.',
        location: {
            center: [-71.13983, 42.33769],
            zoom: 11.00,
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