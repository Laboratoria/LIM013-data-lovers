var ctx = document.getElementById('Grafica').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Planta', 'Veneno', 'Fuego', 'Tierra', 'Normal', 'Volador', 'Lucha'],
        datasets: [{
            label: 'Cantidad de pokemones por tipo',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});