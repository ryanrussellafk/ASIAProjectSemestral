// Chart colors
const chartColors = {
    blue: 'rgb(54, 162, 235)',
    green: 'rgb(75, 192, 192)',
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

// Mock data directly used for GitHub Pages (no backend/API)
function getMockData(endpoint) {
    switch (endpoint) {
        case 'monthlyAppointments':
            return [
                { month: 'Jan', count: 30 },
                { month: 'Feb', count: 45 },
                { month: 'Mar', count: 40 },
                { month: 'Apr', count: 50 },
                { month: 'May', count: 60 }
            ];
        case 'treatmentTypes':
            return [
                { type: 'Cleaning', count: 25 },
                { type: 'Filling', count: 15 },
                { type: 'Extraction', count: 10 },
                { type: 'Braces', count: 5 }
            ];
        case 'paymentStatus':
            return [
                { status: 'Paid', count: 40 },
                { status: 'Pending', count: 10 },
                { status: 'Unpaid', count: 5 }
            ];
        case 'ageDistribution':
            return [
                { age_group: '0-17', count: 10 },
                { age_group: '18-35', count: 25 },
                { age_group: '36-60', count: 15 },
                { age_group: '61+', count: 5 }
            ];
        case 'recentAppointments':
            return [
                {
                    formatted_date: '2024-05-10 09:00:00',
                    patient_name: 'John Doe',
                    status: 'Completed'
                },
                {
                    formatted_date: '2024-05-11 10:30:00',
                    patient_name: 'Jane Smith',
                    status: 'Scheduled'
                },
                {
                    formatted_date: '2024-05-12 13:00:00',
                    patient_name: 'Tom Lee',
                    status: 'Cancelled'
                }
            ];
        default:
            return [];
    }
}

// Chart: Monthly Appointments
function initMonthlyAppointmentsChart() {
    const data = getMockData('monthlyAppointments');
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

// Chart: Treatment Types
function initTreatmentTypesChart() {
    const data = getMockData('treatmentTypes');
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

// Chart: Payment Status
function initPaymentStatusChart() {
    const data = getMockData('paymentStatus');
    new Chart(document.getElementById('paymentStatusChart'), {
        type: 'doughnut',
        data: {
            labels: data.map(item => item.status),
            datasets: [{
                data: data.map(item => item.count),
                backgroundColor: [
                    chartColors.green,
                    chartColors.orange,
                    chartColors.red
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

// Chart: Age Distribution
function initAgeDistributionChart() {
    const data = getMockData('ageDistribution');
    new Chart(document.getElementById('ageDistributionChart'), {
        type: 'pie',
        data: {
            labels: data.map(item => item.age_group),
            datasets: [{
                data: data.map(item => item.count),
                backgroundColor: [
                    chartColors.blue,
                    chartColors.green,
                    chartColors.orange,
                    chartColors.purple
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

// Table: Recent Appointments
function initRecentAppointmentsTable() {
    const data = getMockData('recentAppointments');
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

// Initialize dashboard
function initializeDashboard() {
    initMonthlyAppointmentsChart();
    initTreatmentTypesChart();
    initPaymentStatusChart();
    initAgeDistributionChart();
    initRecentAppointmentsTable();
}

// Trigger on DOM ready
document.addEventListener('DOMContentLoaded', initializeDashboard);
