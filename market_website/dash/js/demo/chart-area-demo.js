// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontColor = '#858796';



function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: 'line',
        label: "Total",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.00)",
        borderColor: "rgba(134, 136, 143, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(86, 88, 92, 1)",
        pointBorderColor: "rgba(86, 88, 92, 1)",
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(86, 88, 92, 1)",
        pointHoverBorderColor: "rgba(86, 88, 92, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        // the 1st and last value are placeholders and never get displayed on the chart
        // to get a straight line, the 1st and last values must match the same value as
        // the next/prev respectively
        data: [5000000, 4648248, 3928428, 3029428, 2428428, 1828428, 1428428, 1228428, 1328428, 1928428, 2828428, 6828428]
        // fill: false,
        // borderWidth: 1,
        // borderColor: '#f00',
        // borderDash: [5,4],
        // lineTension: 0,
        // steppedLine: true
      },
      {
        type: 'bar',
        label: 'In',
        backgroundColor: "#a5fabe",
        hoverBackgroundColor: "#4f9c66",
        borderColor: "#bce6c9",
        // the 1st and last value are placeholders and never get displayed on the chart
        data: [0, 168777, 60422, 4522, 299242, 384201, 552942, 702942, 1330929, 2130929, 2730929, 6430929],
      },
      {
        type: 'bar',
        label: 'Out',
        backgroundColor: "#ff5757",
        hoverBackgroundColor: "#c24242",
        borderColor: "#fabebe",
        // the 1st and last value are placeholders and never get displayed on the chart
        data: [-242422, -520529, -780242, -903522, -900242, -984201, -952942, -902942, -1230929, -1530929, -1830929, -2430929],
      }

    ]
  },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          stacked: true,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return '$' + number_format(value);
            }
          },
          stacked: true,
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
          }
        }
      }

}});

// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     datasets: [{
//       label: "Cash",
//       lineTension: 0.3,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(134, 136, 143, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(86, 88, 92, 1)",
//       pointBorderColor: "rgba(86, 88, 92, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(186, 188, 192, 0.8)",
//       pointHoverBorderColor: "rgba(86, 88, 92, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [5000000, 4600000, 4100000, 3800000, 3400000, 3200000, 3050000, 3000000, 2900000, 2970000, 3200000, 3800000]
//     },{
//       label: "Revenue",
//       // lineTension: 0.3,
//       // backgroundColor: "rgba(78, 115, 223, 0.05)",
//       // borderColor: "rgba(134, 136, 143, 1)",
//       // pointRadius: 3,
//       // pointBackgroundColor: "rgba(86, 88, 92, 1)",
//       // pointBorderColor: "rgba(86, 88, 92, 1)",
//       // pointHoverRadius: 3,
//       // pointHoverBackgroundColor: "rgba(186, 188, 192, 0.8)",
//       // pointHoverBorderColor: "rgba(86, 88, 92, 1)",
//       // pointHitRadius: 10,
//       // pointBorderWidth: 2,
//       backgroundColor: "#4e73df",
//       hoverBackgroundColor: "#2e59d9",
//       borderColor: "#4e73df",
//       data: [500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000],
//       type: 'bar';
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '$' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: false
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });
