fetch('data.json')
    .then(res => res.json())
    .then(data => {
    //   const data = document.getElementById('score-board');
    console.log( data)

     
    });

         new Chart(
                document.getElementById('myChart')
                {
    type: 'bar',
    data: {
      labels: data.map(row => row.day),
      datasets: [{
        label: 'Spending ',
        data: data.map(row => row.amount),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })();

   