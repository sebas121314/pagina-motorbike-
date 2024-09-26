// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Yamaha", "Ducati", "Ktm", "Kawasaki",],
    datasets: [{
      data: [18.21, 12.58, 16.25, 8.32],
      backgroundColor: ['#007bff', '#CB1517', '#FF6600', '#28a745'],
    }],
  },
});
