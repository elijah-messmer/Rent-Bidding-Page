document.getElementById('scrollButton').addEventListener('click', function() {
  var targetSection = document.getElementById('dashboard');

  // Scroll smoothly to the target section
  targetSection.scrollIntoView({ behavior: 'smooth' });
});




// Load and parse bedroom_avg_ci.csv
d3.csv('./graph_data/bedroom_avg_ci.csv').then(function(data1) {
  // console.log('Parsed CSV data for bedroom_avg_ci.csv:', data1);

  var yValues = data1.map(row => row.mean);
  var lowCI = data1.map(row => row.mean - row.lower_CI);
  var upperCI = data1.map(row => row.upper_CI - row.mean);

  // Load and parse bedroom_percent_ci.csv
  d3.csv('./graph_data/bedroom_percent_ci.csv').then(function(data2) {
    // console.log('Parsed CSV data for bedroom_percent_ci.csv:', data2);

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
      opacity: 0.9,
      marker: {
        color: '#EDA229',
      },
      visible: false,
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
      opacity: 0.9,
      marker: {
        color: '#EDA229',
      },
    };
    
    var data = [dataRaw, dataPercent];

    var layout = {
      updatemenus: [
        {
          buttons: [
            {
              args: [{'visible': [false, true]},],
              label: 'Percent',
              method: 'update'
            },
            {
              args: [{'visible': [true, false]},],
              label: 'Average',
              method: 'update'
            }
          ],
          bgcolor: '#FBFBFB',
          bordercolor: '#EDA229',
          direction: 'left',
          font: {'size': 12,},
          pad: {'r': 10, 't': 10},
          showactive: false,
          type: 'buttons',
          x: .85,
          xref: 'paper',
          xanchor: 'left',
          y: 1.15,  // Adjusted y value
          yanchor: ''
        }
      ],
      title: {
        text:'2- and 4-bedroom apartments receive the higest percent bids on average',
        font: {
          family: 'georgia, serif',
          size: 22,
          color: '#262626'
        },
        xref: 'paper',
        xanchor: 'left',
        x: 0.0,
        y: 0.96,
      },
      showlegend: false,
      paper_bgcolor: '#FBFBFB',
      plot_bgcolor: '#FBFBFB',
      annotations: [
        {
          text: 'Calculated as the percent increase from the list to sale price, to normalize across apartments.',
          xref: 'paper',
          yref: 'paper',
          xanchor: 'left',
          x: 0.0,
          y: 1.06,
          showarrow: false,
          font: {
            size: 14,
            color: 'grey'
          }
        },
        {
          text: 'Source: Multiple Listing Service, 2023',
          xref: 'paper',
          yref: 'paper',
          xanchor: 'left',
          x: 0,
          y: -0.13,
          showarrow: false,
          font: {
            size: 14,
            color: 'grey'
          }
        }
      ],
      margin: {
        l: 40,
        r: 40,
        b: 45,
        t: 40,
        pad: 0
      },
      xaxis: {
        type: 'category'
      },
      yaxis: {
        color: 'grey',
        },
      };

    Plotly.newPlot('barPlot', data, layout, {displayModeBar: false}, {responsive: true});
  });
});




















var traces = [
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [4.02, 3.61, 5.17, 13.85],
    type: 'bar',
    orientation: 'h',
    name: 'Not computed',
    hoverinfo: 'x+name',
    marker: { color: '#16457f' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [4.37, 5.74, 4.32, 5.23],
    type: 'bar',
    orientation: 'h',
    name: '< 10.0%',
    hoverinfo: 'x+name',
    marker: { color: '#005c87' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [6.34, 9.51, 6.75, 5.18],
    type: 'bar',
    orientation: 'h',
    name: '10.0% to 14.9%',
    hoverinfo: 'x+name',
    marker: { color: '#007084' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [9.27, 14.33, 9.28, 8.67],
    type: 'bar',
    orientation: 'h',
    name: '15.0% to 19.9%',
    hoverinfo: 'x+name',
    marker: { color: '#3c817f' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [9.71, 14.76, 8.65, 9.46],
    type: 'bar',
    orientation: 'h',
    name: '20.0% to 24.9%',
    hoverinfo: 'x+name',
    marker: { color: '#69907f' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [12.06, 13.72, 10.40, 10.93],
    type: 'bar',
    orientation: 'h',
    name: '25.0% to 29.9%',
    hoverinfo: 'x+name',
    marker: { color: '#aead9e' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [9.92, 8.10, 8.61, 9.33],
    type: 'bar',
    orientation: 'h',
    name: '30.0% to 34.9%',
    hoverinfo: 'x+name',
    marker: { color: '#F0DD07' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [7.34, 5.40, 6.81, 6.81],
    type: 'bar',
    orientation: 'h',
    name: '35.0% to 39.9%',
    hoverinfo: 'x+name',
    marker: { color: '#ffca00' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [8.31, 6.19, 10.09, 5.62],
    type: 'bar',
    orientation: 'h',
    name: '40.0% to 49.9%',
    hoverinfo: 'x+name',
    marker: { color: '#ff9700' }
  },
  {
    y: ['Latino', 'White', 'Black', 'Asian'],
    x: [28.66, 18.65, 29.91, 24.93],
    type: 'bar',
    orientation: 'h',
    name: '50.0% or more',
    hoverinfo: 'x+name',
    marker: { color: '#ff6224' }
  }
];


var layout2 = {
  title: {
    text:'Black and Latino households are disproportionately rent burdened',
    font: {
      family: 'georgia, serif',
      size: 22,
      color: '#262626'
    },
    xref: 'paper',
    xanchor: 'left',
    x: 0.0,
    y: 1,
  },
  barmode: 'relative', // Stacked bars
  showlegend: false, // Show legend
  baroffset: 1,
  paper_bgcolor: '#FBFBFB',
  plot_bgcolor: '#FBFBFB',
  margin: {
    l: 60,
    r: 60,
    b: 10,
    t: 25,
    pad: 0
  },
  xaxis: {
    color: 'grey',
    showticklabels: false,
    visible: false
  },
  yaxis: {
    type: 'category',
    position: 'left',
    ticklen: 5,
    tickmode: 'array',
    tickvals: [0, 1, 2, 3], // This sets the positions of the ticks
    ticktext: ['Latino', 'White', 'Black', 'Asian'], // This sets the labels
    tickfont: {
      size: 14,
    },
    tickcolor: '#FBFBFB',
  },
  annotations: [
    {
      text: 'Rent burdened households spend 30% or more of their income on rent',
      xref: 'paper',
      xanchor: 'left',
      x: 0.0,
      y: 3.7,
      showarrow: false,
      font: {
        size: 14,
        color: 'grey'
      }
    },
    {
      text: 'Source: American Community Survey 2017-2021 5-year estimates',
      xref: 'paper',
      xanchor: 'left',
      x: 0,
      y: -.7,
      showarrow: false,
      font: {
        size: 14,
        color: 'grey'
      }
    }
    // Add more annotations as needed
  ]
};

Plotly.newPlot('barPro', traces, layout2, {displayModeBar: false}, {responsive: true});



























// Start Chart 3
// URL of the CSV file
var csvURL = './graph_data/studentScatter.csv'; // Replace with the actual URL

d3.csv('./graph_data/studentScatter.csv').then(function(data) {

    var traceGraduateStudents = {
        x: data.map(item => parseFloat(item.Percent_Rent_Bidding)),
        y: data.map(item => parseFloat(item.Num_Grad_Students)),
        text: data.map(item => item.ZIP_Code),
        mode: 'markers',
        type: 'scatter',
        marker: { 
            size: 12,
            color: '#ff6224', 
        },
        name: 'Graduate Students',
        hoverinfo: 'none',
        opacity: 1,
    };

    var traceUndergraduateStudents = {
        x: data.map(item => parseFloat(item.Percent_Rent_Bidding)),
        y: data.map(item => parseFloat(item.Num_Under_Students)),
        text: data.map(item => item.ZIP_Code),
        mode: 'markers',
        type: 'scatter',
        marker: { 
            size: 12,
            color: '#16457f', 
        },
        name: 'Undergraduate Students',
        hoverinfo: 'none',
        opacity: 1,
    };

    var traceAllStudents = {
        x: data.map(item => parseFloat(item.Percent_Rent_Bidding)),
        y: data.map(item => parseFloat(item.Total_students)),
        text: data.map(item => item.ZIP_Code),
        mode: 'markers',
        type: 'scatter',
        marker: { 
            size: 12,
            color: '#69907f', 
        },
        name: 'All Students',
        hoverinfo: 'none',
        opacity: 1,
    };

  // Linear regression calculation for Graduate Students
  var gradXValues = data.map(item => parseFloat(item.Percent_Rent_Bidding));
  var gradYValues = data.map(item => parseFloat(item.Num_Grad_Students));

  var gradXMean = gradXValues.reduce((acc, val) => acc + val, 0) / gradXValues.length;
  var gradYMean = gradYValues.reduce((acc, val) => acc + val, 0) / gradYValues.length;

  var gradNumerator = gradXValues.reduce((acc, val, i) => acc + (val - gradXMean) * (gradYValues[i] - gradYMean), 0);
  var gradDenominator = gradXValues.reduce((acc, val) => acc + Math.pow(val - gradXMean, 2), 0);

  var gradSlope = gradNumerator / gradDenominator;
  var gradIntercept = gradYMean - gradSlope * gradXMean;

  var gradRegressionLine = {
      x: gradXValues,
      y: gradXValues.map(x => gradSlope * x + gradIntercept),
      mode: 'lines',
      type: 'scatter',
      name: 'Graduate Students Regression Line',
      line: {
          color: '#ff6224',
          width: 2,
          dash: 'solid',
      },
      hoverinfo: 'none',
      opacity: 0,
  };

  // Linear regression calculation for Undergraduate Students
  var underXValues = data.map(item => parseFloat(item.Percent_Rent_Bidding));
  var underYValues = data.map(item => parseFloat(item.Num_Under_Students));

  var underXMean = underXValues.reduce((acc, val) => acc + val, 0) / underXValues.length;
  var underYMean = underYValues.reduce((acc, val) => acc + val, 0) / underYValues.length;

  var underNumerator = underXValues.reduce((acc, val, i) => acc + (val - underXMean) * (underYValues[i] - underYMean), 0);
  var underDenominator = underXValues.reduce((acc, val) => acc + Math.pow(val - underXMean, 2), 0);

  var underSlope = underNumerator / underDenominator;
  var underIntercept = underYMean - underSlope * underXMean;

  var underRegressionLine = {
      x: underXValues,
      y: underXValues.map(x => underSlope * x + underIntercept),
      mode: 'lines',
      type: 'scatter',
      name: 'Undergraduate Students Regression Line',
      line: {
          color: '#16457f',
          width: 2,
          dash: 'solid',
      },
      hoverinfo: 'none',
      opacity: 0,
  };

  var layout = {
    showlegend: false,
    paper_bgcolor: '#FBFBFB',
    plot_bgcolor: '#FBFBFB',
    margin: {
        l: 70,
        r: 40,
        b: 40,
        t: 40,
        pad: 0
    },
    animate: true,
    yaxis: {
      title: {'text': 'Students by ZIP Code'},
      range: [0, 5500]
    },
    xaxis: {
      title: {'text': 'Percent of rent bidding by ZIP Code'},
    },
};

var traces = [traceGraduateStudents, traceUndergraduateStudents, traceAllStudents, gradRegressionLine, underRegressionLine];

Plotly.newPlot('scatterPlot', traces, layout, { displayModeBar: false }, { responsive: true });


// Start scrolling steps

allStudents = d3.selectAll("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(3) > g.points > path")
allStudentsContainer = d3.selectAll("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(3)")
underStudents = d3.selectAll("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(2) > g.points > path")
underStudentsContainer = d3.selectAll("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(2)")
underStudentsRegression = d3.select("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(5)")
gradStudents = d3.selectAll("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(1)")
gradStudentsRegression = d3.select("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(4)")
allstonZip = d3.select("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace:nth-child(3) > g.points > path:nth-child(2)");

document.querySelector("#scatterPlot > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g.trace.scatter.trace43def6 > g.points > path:nth-child(1)")

allStudents.style('opacity', 0);
underStudents.style('opacity', 0);
gradStudents.style('opacity', 0);


d3.select('#part1').on('stepin', function() {
  allStudents.transition().duration(1000).style('opacity', 0);
  allstonZip.transition().duration(1000).style('opacity', 0);
  underStudents.transition().duration(1000).style('opacity', 0);
  gradStudents.transition().duration(1000).style('opacity', 0);
  });

d3.select('#part2').on('stepout', function(e) {
  if (e.detail.direction === 'up') {
  allStudents.transition().duration(1000).style('opacity', .0);
  allstonZip.transition().duration(1000).style('opacity', 0);
}});

d3.select('#part2').on('stepin', function() {
  allStudents.transition().duration(1000).style('opacity', .2);
  allstonZip.transition().duration(1000).style('opacity', 1);
  });

d3.select('#part3').on('stepin', function() {
  allStudents.transition().duration(1000).style('opacity', 1);
  });


  d3.select('#part4').on('stepin', function(e) {
    if (e.detail.direction === 'down') {
      allStudents.transition().duration(1000).style('opacity', 0);

      setTimeout(function() {
        Plotly.animate('scatterPlot', {
          data: [
            {opacity: 0},
            {opacity: 0},
            {opacity: 0},
            {width: 2},
          ],
          traces: [0, 1, 2, 4],
          layout: {yaxis: {range: [0, 3500]}}
        }, {
          transition: {
            duration: 500,
            easing: 'cubic-in-out'
          },
          frame: {
            duration: 500
          }
        }).then(function() {
          underStudentsContainer.transition().duration(1000).style('opacity', 1);
          underStudentsRegression.transition().duration(1000).style('opacity', 1);
        });
      }, 1000);
    }
  });
  

  d3.select('#part4').on('stepout', function(e) {
    if (e.detail.direction === 'up') {
      underStudents.transition().duration(1000).style('opacity', 0);
      underStudentsRegression.transition().duration(1000).style('opacity', 0);
  
      setTimeout(function() {
        Plotly.animate('scatterPlot', {
          data: [
            {opacity: 0},
            {opacity: 0},
            {opacity: 0},
          ],
          traces: [0, 1, 2],
          layout: {yaxis: {range: [0, 5500]}}
        }, {
          transition: {
            duration: 500,
            easing: 'cubic-in-out'
          },
          frame: {
            duration: 500
          }
        }).then(function() {
          allStudentsContainer.transition().duration(1000).style('opacity', 1);
        });
      }, 1000);
    }
  });

  d3.select('#part5').on('stepout', function(e) {
    if (e.detail.direction === 'up') {
    gradStudents.transition().duration(1000).style('opacity', 0);
    gradStudentsRegression.transition().duration(1000).style('opacity', 0);
    }});

  d3.select('#part5').on('stepin', function() {
    gradStudents.transition().duration(1000).style('opacity', 1);
    gradStudentsRegression.transition().duration(1000).style('opacity', 1);
});

d3.select('#part7').on('stepout', function(e) {
  if (e.detail.direction === 'up') {
  underStudents.transition().duration(1000).style('opacity', 1);
  underStudentsRegression.transition().duration(1000).style('opacity', 1);
  }});

d3.select('#part7').on('stepin', function() {
  underStudents.transition().duration(1000).style('opacity', 0);
  underStudentsRegression.transition().duration(1000).style('opacity', 0);
});

});