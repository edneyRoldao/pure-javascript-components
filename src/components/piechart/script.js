const context = document.querySelector('#myChart')


const data = {
    labels: [
        'Red',
        'Blue',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [50, 100],
        backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
}

new Chart(context, {
    type: 'pie',
    data
})
