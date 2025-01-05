// const percentage = require('./app');

// const graphicLine = document.getElementById("graphicLine");

// new Chart(graphicLine, {
//     type: "line",
//     data: {
//         datasets: [
//             {
//                 label: "Ingreso",
//                 data: [
//                     { x: "2023-01-01", y: 12 },
//                     { x: "2023-02-01", y: 19 },
//                     { x: "2023-03-01", y: 3 },
//                     { x: "2023-03-01", y: 3 },
//                     { x: "2023-04-01", y: 5 },
//                     { x: "2023-05-01", y: 5 },
//                     { x: "2023-06-01", y: 2 },
//                 ],
//                 borderWidth: 1,
//                 borderColor: "#64ae5f",
//                 backgroundColor: "#64ae5f",
//                 tension: 0.2,
//             },
//             {
//                 label: "Egreso",
//                 data: [
//                     { x: "2023-01-01", y: 1 },
//                     { x: "2023-02-01", y: 1 },
//                     { x: "2023-03-01", y: 5 },
//                     { x: "2023-04-01", y: 10 },
//                     { x: "2023-05-01", y: 20},
//                     { x: "2023-06-01", y: 30 },
//                 ],
//                 borderWidth: 1,
//                 borderColor: "#f9d829",
//                 backgroundColor: "#f9d829",
//                 tension: 0.2,
//             },
//         ],
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//             x: {
//                 type: 'time',
//                 time: {
//                     unit: 'day',
//                     displayFormats: {
//                         quarter: 'DD MMM YYYY'
//                     }
//                 },
//                 title: {
//                     display: true,
//                     text: 'Fechas'
//                 }
//             },
//         },
//     },
// });

// const graphicCircle = document.getElementById('graphicCircle');

// new Chart(graphicCircle, {
//     type: "doughnut",
//     data: {
//         labels: [
//           'Avance',
//           'Presupuesto'
//         ],
//         datasets: [{
//           label: 'My First Dataset',
//           data: [percentage,20],
//           backgroundColor: [
//             'green',
//             '#8a8485',
//           ],
//           hoverOffset: 4,
//           rotation: 180,
//         }]
//       },
//     options: {
//         scales: {
//             y: {
//                 display: false
//             },
//         },
//     },
// });