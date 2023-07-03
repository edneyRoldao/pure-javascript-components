const context = document.querySelector('#myChart')

const data = {
    labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [
      {
        label: "Investido",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        backgroundColor: "rgba(107, 190, 198, 0.2)",
        borderColor: "rgba(107, 190, 198, 1)",
        borderWidth: 1,
        fill: false
      },
      {
        label: "Juros",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 140, 150, 160],
        backgroundColor: "rgba(85, 209, 93, 0.2)",
        borderColor: "rgba(85, 209, 93, 1)",
        borderWidth: 1,
        fill: false
      }
    ]
  };

  // Chart configuration
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Line Chart Example'
        }
      }
    }
  };

new Chart(context, config)
