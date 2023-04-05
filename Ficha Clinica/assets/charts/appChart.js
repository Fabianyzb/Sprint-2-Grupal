const ctx = document.getElementById("myChart");
const names = ["Pepe", "Pepe", "Pepe", "Pepe", "Pepe"];
const ages = [24, 10, 54, 51, 15];

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    label: names,
    datasets: [
      {
        label: "Edad",
        data: ages,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWith: 1.5,
      },
    ],
  },
});
