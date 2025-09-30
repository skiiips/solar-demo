// Usage vs Solar Chart
const ctx1 = document.getElementById('usageChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [
      {
        label: 'Solar (kWh)',
        data: [12,15,10,18,20,25,22],
        borderColor: '#0077cc',
        backgroundColor: 'rgba(0,119,204,0.2)',
        fill: true
      },
      {
        label: 'Usage (kWh)',
        data: [14,18,13,22,24,20,19],
        borderColor: '#ff6600',
        backgroundColor: 'rgba(255,102,0,0.2)',
        fill: true
      }
    ]
  },
  options: { responsive: true }
});

// Monthly Savings Chart
const ctx2 = document.getElementById('savingsChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
      {
        label: 'Monthly Savings (R)',
        data: [1200,1500,1700,1600,2000,2200],
        backgroundColor: '#28a745'
      }
    ]
  },
  options: { responsive: true }
});

// CO2 Saved Chart
const ctx3 = document.getElementById('co2Chart').getContext('2d');
new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['CO₂ Saved (kg)', 'Remaining'],
    datasets: [
      {
        data: [120, 30],
        backgroundColor: ['#17a2b8','#e9ecef']
      }
    ]
  },
  options: {
    responsive: true,
    cutout: '70%'
  }
});