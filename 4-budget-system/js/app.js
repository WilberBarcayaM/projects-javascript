const incomes = [
    new Income('Salario', 200.00, '2024-05-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-06-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-07-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-08-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-09-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-10-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-11-28T08:00:00Z'),
    new Income('Salario', 200.00, '2024-12-28T08:00:00Z'),
    new Income('Venta Coche', 300, '2025-01-02T10:30:00Z'),
    new Income('Venta Computadora', 500, '2025-01-03T10:30:00Z'),
    new Income('Venta Ropa', 1000, '2025-01-04T10:30:00Z'),
];

const egress = [
    new Egress('Renta Departamento', 100, '2024-12-25T12:00:00Z'),
    new Egress('Ropa', 500, '2025-01-01T14:45:00Z'),
    new Egress('Pago Wifi', 100, '2025-01-02T14:45:00Z'),
    new Egress('Pago Agua', 20, '2025-01-03T14:45:00Z'),
];

let loadApp = () => {
    loadHeader();
    loadIncome();
    loadEgress();
    loadGraphicLineData();
    loadGraphicCircle();
}

let totalIncome = () => {
    let totalEntered = 0;
    for(let income of incomes){
        totalEntered += income.value;
    }
    return totalEntered;
}

let totalEgress = () => {
    let totalExpenses =  0;
    for(let expenses of egress){
        totalExpenses += expenses.value;
    }
    return totalExpenses;
}

let loadHeader = () => {
    let budget = totalIncome() - totalEgress();
    let differenceMoney = totalIncome() - totalEgress();

    document.getElementById('budget').innerHTML = formatCurrency(budget);

    document.getElementById('income').innerHTML = formatCurrency(totalIncome());

    document.getElementById('expenseMoney').innerHTML = formatCurrency(totalEgress());

    document.getElementById('differenceMoney').innerHTML = formatCurrency(differenceMoney);

    document.getElementById('advance').innerHTML = formatCurrency(totalEgress());
    document.getElementById('budgetCircle'). innerHTML = formatCurrency(budget);

}

let percentageEgress = (totalEgress() / totalIncome()) * 100;

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style:'currency', currency: 'USD', minimunFractionDigits:2})
}

const formatPercentage = (value) => {
    return value.toLocaleString('en-US', {style:'percent', minimunFractionDigits:2})
}

const loadIncome = () => {
    let incomeHTML = '';
    for(let income of incomes){
        incomeHTML += createIncomeHTML(income);
    }
    document.getElementById('incomeList').innerHTML = incomeHTML;
}

const createIncomeHTML = (income) => {
    let incomeHTML = `
                    <div class="element cleanStyles">
                        <div class="element-description">${income.description}</div>
                        <div class="rigth cleanStyles">
                            <div class="element-value">+ ${formatCurrency(income.value)}</div>
                            <div class="element-delete">
                                <button class="element-delete-btn">
                                    <i class="fa-regular fa-circle-xmark" onclick="deleteIncome(${income.id})"></i>
                                </button>
                            </div>
                        </div>
                    </div>
    `;
    return incomeHTML;
}

const deleteIncome = (id) => {
    let indexDelete = incomes.findIndex(income => income.id === id);
    incomes.splice(indexDelete, 1);
    loadHeader();
    loadIncome();
    loadGraphicLineData();
    loadGraphicCircle();
}

const loadEgress = () => {
    let egressHTML = '';
    for(let expense of egress){
        egressHTML += createEgressHTML(expense);
    }
    document.getElementById('egressList').innerHTML = egressHTML;
}

const createEgressHTML = (expense) => {
    let egressHTML = `
                    <div class="element cleanStyles">
                        <div class="element-description">${expense.description}</div>
                        <div class="rigth cleanStyles">
                            <div class="element-value">- ${formatCurrency(expense.value)}</div>
                            <div class="element-percentage">${formatPercentage(expense.value / totalIncome())}</div>
                            <div class="element-delete">
                                <button class="element-delete-btn">
                                    <i class="fa-regular fa-circle-xmark" onclick="deleteEgress(${expense.id})"></i>
                                </button>
                            </div>
                        </div>
                    </div>
    `;
    return egressHTML;
}

const deleteEgress = (id) => {
    let indexEgress = egress.findIndex(expense => expense.id === id);
    egress.splice(indexEgress, 1);
    loadHeader();
    loadEgress();
    loadGraphicLineData();
    loadGraphicCircle();
}

let addData = () => {
    let forma = document.forms['forma'];
    let type = forma['type'];
    let description = forma['description'];
    let value = forma['value'];
    let currentDataTime = new Date().toISOString();

    if(description.value !== '' && value.value !== ''){
        if(type.value === 'income'){
            let income = new Income(description.value, +value.value, currentDataTime);
            incomes.push(income);
            graphicLine.data.datasets[0].data.push({x: income.date, y: income.value, label: income.description})
            loadHeader();
            loadIncome();
        }
        else if(type.value === 'egress'){
            let expense = new Egress(description.value, +value.value, currentDataTime); 
            egress.push(expense);
            graphicLine.data.datasets[1].data.push({ x: expense.date, y: expense.value, labe: expense.description });
            loadHeader();
            loadEgress();
        }
        graphicLine.update();
        loadGraphicCircle();
    }
}


// Load initial data into the graphic
const loadGraphicLineData = () => {
    graphicLine.data.datasets[0].data = incomes.map(income => ({ x: income.date, y: income.value, label: income.description }));
    graphicLine.data.datasets[1].data = egress.map(expense => ({ x: expense.date, y: expense.value, label: expense.description }));
    graphicLine.update();
}

const loadGraphicCircle = () => {
    let percentageEgress = (totalEgress() / totalIncome()) * 100;
    graphicCircle.data.datasets[0].data = [percentageEgress, 100 - percentageEgress];
    graphicCircle.update();
}

// Graphics

Chart.defaults.locale = 'es-ES';

// moment.locale('es');

const graphicLineElement = document.getElementById("graphicLine");

const graphicLine = new Chart(graphicLineElement, {
    type: "line",
    data: {
        datasets: [
            {
                label: "Ingreso",
                data: [
                    // { x: "2023-01-01", y: 12 },
                    // { x: "2023-02-01", y: 19 },
                    // { x: "2023-03-01", y: 3 },
                ],
                borderWidth: 1,
                borderColor: "#64ae5f",
                backgroundColor: "#64ae5f",
                tension: 0.2,
            },
            {
                label: "Egreso",
                data: [
                    // { x: "2023-04-01", y: 10 },
                    // { x: "2023-05-01", y: 20},
                    // { x: "2023-06-01", y: 30 },
                ],
                borderWidth: 1,
                borderColor: "#f9d829",
                backgroundColor: "#f9d829",
                tension: 0.2,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                },
                title: {
                    display: true,
                    text: 'Fechas'
                }
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (context.raw.label) {
                            label += ': ' + context.raw.label + ' - ' + context.raw.y;
                        } else {
                            label += ': ' + context.raw.y;
                        }
                        return label;
                    }
                }
            }
        }
    },
});

const graphicCircleElement = document.getElementById('graphicCircle');

const graphicCircle = new Chart(graphicCircleElement, {
    type: "doughnut",
    data: {
        labels: [
          'Egreso',
          'Presupuesto'
        ],
        datasets: [{
          data: [percentageEgress, 100-percentageEgress],
          backgroundColor: [
            '#f9d829',
            'green',
          ],
          hoverOffset: 4,
          rotation: 180,
        }]
      },
    options: {
        scales: {
            y: {
                display: false
            },
        },
    },
});

// loadApp();