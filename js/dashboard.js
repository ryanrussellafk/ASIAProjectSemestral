// Chart colors
const chartColors = {
    blue: 'rgb(54, 162, 235)',
    green: 'rgb(75, 192, 192)',
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

// Initialize Monthly Appointments Chart
function initMonthlyAppointmentsChart() {
    const data = [
        { month: '2024-03', count: 15 },
        { month: '2024-04', count: 10 },
        { month: '2024-05', count: 5 }
    ];

    new Chart(document.getElementById('monthlyAppointmentsChart'), {
        type: 'line',
        data: {
            labels: data.map(item => item.month),
            datasets: [{
                label: 'Number of Appointments',
                data: data.map(item => item.count),
                borderColor: chartColors.blue,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Appointment Trends'
                }
            }
        }
    });
}

// Initialize Treatment Types Chart
function initTreatmentTypesChart() {
    const data = [
        { type: 'Cleaning', count: 5 },
        { type: 'Extraction', count: 3 },
        { type: 'Filling', count: 5 },
        { type: 'Root Canal', count: 2 }
    ];

    new Chart(document.getElementById('treatmentTypesChart'), {
        type: 'bar',
        data: {
            labels: data.map(item => item.type),
            datasets: [{
                label: 'Number of Treatments',
                data: data.map(item => item.count),
                backgroundColor: [
                    chartColors.blue,
                    chartColors.green,
                    chartColors.red,
                    chartColors.orange
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Treatment Types Distribution'
                }
            }
        }
    });
}

// Initialize Payment Status Chart
function initPaymentStatusChart() {
    const data = [
        { status: 'Paid', count: 7 },
        { status: 'Unpaid', count: 3 }
    ];

    new Chart(document.getElementById('paymentStatusChart'), {
        type: 'doughnut',
        data: {
            labels: data.map(item => item.status),
            datasets: [{
                data: data.map(item => item.count),
                backgroundColor: [
                    chartColors.green,
                    chartColors.orange
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Payment Status Breakdown'
                }
            }
        }
    });
}

// Initialize Age Distribution Chart
function initAgeDistributionChart() {
    const data = [
        { age_group: '18-30', count: 5 },
        { age_group: '31-50', count: 5 }
    ];

    new Chart(document.getElementById('ageDistributionChart'), {
        type: 'pie',
        data: {
            labels: data.map(item => item.age_group),
            datasets: [{
                data: data.map(item => item.count),
                backgroundColor: [
                    chartColors.blue,
                    chartColors.green
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Patient Age Distribution'
                }
            }
        }
    });
}

// Initialize Recent Appointments Table
function initRecentAppointmentsTable() {
    const data = [
        {
            formatted_date: '2024-05-01 10:00',
            patient_name: 'Jane Doe',
            status: 'Completed'
        },
        {
            formatted_date: '2024-05-02 14:30',
            patient_name: 'John Smith',
            status: 'Scheduled'
        }
    ];

    const tbody = document.querySelector('#recentAppointmentsTable');
    tbody.innerHTML = '';

    data.forEach(appointment => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${appointment.formatted_date.split(' ')[0]}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${appointment.patient_name}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                }">
                    ${appointment.status}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize all charts and tables
function initializeDashboard() {
    initMonthlyAppointmentsChart();
    initTreatmentTypesChart();
    initPaymentStatusChart();
    initAgeDistributionChart();
    initRecentAppointmentsTable();
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', initializeDashboard);
