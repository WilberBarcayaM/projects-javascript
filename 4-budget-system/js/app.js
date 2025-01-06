const incomes = [
    new Income('Salario', 2000.00),
    new Income('Venta Coche', 1000),
    new Income('Cumpleaño', 1000),
];

const egress = [
    new Egress('Rena Departamento', 1000),
    new Egress('Ropa', 500),
    new Egress('Pago de Wifi', 180),
];

let loadApp = () => {
    loadHeader();
    loadIncome();
    loadEgress();
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
    let indexEgress = egress.findIndex(expense => egress.id === id);
    egress.splice(indexEgress, 1);
    loadHeader();
    loadEgress();
} 


// Graphics

const graphicLine = document.getElementById("graphicLine");

new Chart(graphicLine, {
    type: "line",
    data: {
        datasets: [
            {
                label: "Ingreso",
                data: [
                    { x: "2023-01-01", y: 12 },
                    { x: "2023-02-01", y: 19 },
                    { x: "2023-03-01", y: 3 },
                    { x: "2023-03-01", y: 3 },
                    { x: "2023-04-01", y: 5 },
                    { x: "2023-05-01", y: 5 },
                    { x: "2023-06-01", y: 2 },
                ],
                borderWidth: 1,
                borderColor: "#64ae5f",
                backgroundColor: "#64ae5f",
                tension: 0.2,
            },
            {
                label: "Egreso",
                data: [
                    { x: "2023-01-01", y: 1 },
                    { x: "2023-02-01", y: 1 },
                    { x: "2023-03-01", y: 5 },
                    { x: "2023-04-01", y: 10 },
                    { x: "2023-05-01", y: 20},
                    { x: "2023-06-01", y: 30 },
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
                    unit: 'day',
                    displayFormats: {
                        quarter: 'DD MMM YYYY'
                    }
                },
                title: {
                    display: true,
                    text: 'Fechas'
                }
            },
        },
    },
});

const graphicCircle = document.getElementById('graphicCircle');

new Chart(graphicCircle, {
    type: "doughnut",
    data: {
        labels: [
          'Avance',
          'Presupuesto'
        ],
        datasets: [{
          data: [percentageEgress, 100-percentageEgress],
          backgroundColor: [
            'green',
            '#8a8485',
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