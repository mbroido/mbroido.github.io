// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Tasks done well: Incoporation setup, federal tax fillings, ...", "Urgent to do: Update compliance laws for new CA state law", "Should do for effienciency: R&D Tax Credit, change ommissions insurance plan, ...", "Could do: File an HR audit, streamline healthcare plan, ..."],
    datasets: [{
      data: [58, 3.5, 30, 8.5],
      backgroundColor: ['rgba(88, 219, 151, 0.9)', 'rgba(222, 81, 71, 0.9)', 'rgba(250, 193, 70, 0.9)', 'rgba(30, 184, 250, 0.9)'],
      hoverBackgroundColor: ['rgba(28, 179, 99, 0.9)', 'rgba(182, 41, 21, 0.9)', 'rgba(210, 143, 20, 0.9)', 'rgba(00, 154, 220, 0.9)'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
// billingbreakdown
