
console.log("chartjs loaded");

// cannot use jQuery object for getting 2D context.
var boxframe = $('#barchart');
console.log(boxframe.height());
console.log(boxframe.width());
var c = document.getElementById("barchart");
var ctx = c.getContext("2d");

// canvas is showing
// ctx.beginPath();
// ctx.rect(0, 0, 500, 500);
// ctx.fillStyle = "green";
// ctx.fill();

var data = {
    labels: ["CSS+SASS", "React.js", "iOS (Swift)", "Java", "Python 3"],
    datasets: [{
            backgroundColor: "white",
            hoverBackgroundColor: "rgba(255,255,255,0.7)",
            data: [80, 80, 85, 85, 85]
        }]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    display: false,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                barPercentage: 0.4,
                gridLines: {
                    display:false
                },
                ticks: {
                    fontColor: "white",
                    fontFamily: 'Roboto Mono',
                    fontSize: 11,
                    beginAtZero: true
                }
            }]
        }
    }
})