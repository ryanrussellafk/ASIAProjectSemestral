// API base URL
const API_BASE_URL = 'http://localhost:3000/api';

// Chart colors
const chartColors = {
    blue: 'rgb(54, 162, 235)',
    green: 'rgb(75, 192, 192)',
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

// Fetch data from API
async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Initialize Monthly Appointments Chart
async function initMonthlyAppointmentsChart() {
    const data = await fetchData('/appointments/monthly');
    if (!data) return;

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
async function initTreatmentTypesChart() {
    const data = await fetchData('/treatments/type');
    if (!data) return;

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
async function initPaymentStatusChart() {
    const data = await fetchData('/payments/status');
    if (!data) return;

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

// Initialize Age Distribution Chart
async function initAgeDistributionChart() {
    const data = await fetchData('/patients/age-distribution');
    if (!data) return;

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

// Initialize Recent Appointments Table
async function initRecentAppointmentsTable() {
    const data = await fetchData('/appointments/recent');
    if (!data) return;

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
async function initializeDashboard() {
    await Promise.all([
        initMonthlyAppointmentsChart(),
        initTreatmentTypesChart(),
        initPaymentStatusChart(),
        initAgeDistributionChart(),
        initRecentAppointmentsTable()
    ]);
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', initializeDashboard); 