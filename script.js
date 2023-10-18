// Load and parse bedroom_avg_ci.csv
d3.csv('./graph_data/bedroom_avg_ci.csv').then(function(data1) {
  console.log('Parsed CSV data for bedroom_avg_ci.csv:', data1);

  var yValues = data1.map(row => row.mean);
  var lowCI = data1.map(row => row.mean - row.lower_CI);
  var upperCI = data1.map(row => row.upper_CI - row.mean);

  // Load and parse bedroom_percent_ci.csv
  d3.csv('./graph_data/bedroom_percent_ci.csv').then(function(data2) {
    console.log('Parsed CSV data for bedroom_percent_ci.csv:', data2);

    var yValues2 = data2.map(row => row.mean);
    var lowCI2 = data2.map(row => row.mean - row.Lower_CI);
    var upperCI2 = data2.map(row => row.Upper_CI - row.mean);
    

    var dataRaw = {
      x: ['Studio', '1', '2', '3', '4', '5+'],
      y: yValues,
      error_y: {
        type: 'data',
        symmetric: false,
        array: upperCI,
        arrayminus: lowCI,
      },
      hovertemplate: 'Average bid: <b>$%{y:.2f}</b><extra></extra>',
      type: 'bar',
      marker: {
        color: '#22699c',
      }
    };

    var dataPercent = {
      x: ['Studio', '1', '2', '3', '4', '5+'],
      y: yValues2,
      error_y: {
        type: 'data',
        symmetric: false,
        array: upperCI2,
        arrayminus: lowCI2,
      },
      hovertemplate: 'Average percent bid: <b>%{y:.2f}%</b><extra></extra>',
      type: 'bar',
      marker: {
        color: '#22699c',
      },
      visible: false,
    };
    
    var data = [dataRaw, dataPercent];

    var layout = {
      updatemenus: [
        {
          buttons: [
            {
              args: [{'visible': [true, false]},],
              label: 'Raw',
              method: 'update'
            },
            {
              args: [{'visible': [false, true]},],
              label: 'Percent',
              method: 'update'
            }
          ],
          bgcolor: '#22699c',
          width: 300, // Set the desired width (in pixels)
          height: 50,
          direction: 'left',
          pad: {'r': 10, 't': 10},
          showactive: true,
          type: 'buttons',
          x: 0.5,
          xanchor: 'center',
          y: 1.1,  // Adjusted y value
          yanchor: ''
        }
      ],
      title: {
        text:'Larger apartments have higher average bids and more<br>variation in bids',
        xref: 'container',
        xanchor: 'left',
        x: 0.05,
        y: 1.05,
      },
      showlegend: false,
      autosize: true,
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 80,
        pad: 0
      },
      xaxis: {
        type: 'category'
      },
    };

    Plotly.newPlot('myDiv', data, layout, {displayModeBar: false}, {responsive: true});
  });
});

// Select the <g> element with class "updatemenu-container"
var updateMenuContainer = d3.select('g.updatemenu-container');

console.log('updateMenuContainer:', updateMenuContainer);

// Now you can work with the updateMenuContainer element
// For example, you can add a class to it:
updateMenuContainer.classed('btn', true);
