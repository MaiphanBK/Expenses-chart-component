fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const canvas = document.getElementById("myChart");
    const ctx = canvas.getContext("2d");

    function getHoverColor(context, data) {
      if (data.dataset.data[data.dataIndex] > 30) {
        return "rgba(255, 99, 132, 0.4)";
      } else {
        return "rgba(54, 162, 235, 0.4)";
      }
    }

    new Chart(document.getElementById("myChart"), {
      type: "bar",
      data: {
        labels: data.map((row) => row.day),
        datasets: [
          {
            label: "",
            data: data.map((row) => row.amount),
            backgroundColor: "rgba(231, 90, 121, 0.2)",
            hoverBackgroundColor: getHoverColor,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              beginAtZero: false,
              display: false,
            },
            gridLines: {
              display: false,
            },
          },
          x: {
            ticks: {
              display: true,
            },
            gridLines: {
              display: false,
            },
          },
        },
      },
    });
  });
