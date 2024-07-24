

document.addEventListener('DOMContentLoaded', function () {

    new Chart(document.getElementById('revenueChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Total Revenue',
                data: [5000, 7000, 8000, 12000, 14000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
    });

  
    new Chart(document.getElementById('affiliateChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Affiliate Revenue',
                data: [4000, 6000, 7000, 10000, 13000],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
    });

    // Refunds Chart
    new Chart(document.getElementById('refundChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Refunds',
                data: [100, 200, 150, 300, 250],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
    });

  
    new Chart(document.getElementById('totalRevenueChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Total Revenue',
                data: [6000, 8000, 9000, 13000, 16000],
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
    });

   
    new Chart(document.getElementById('customerAcquisitionChart'), {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Acquisition',
                data: [5, 8, 9, 6, 7],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    
    new Chart(document.getElementById('productCategoryChart'), {
        type: 'pie',
        data: {
            labels: ['Electronics', 'Clothing', 'Furniture', 'Toys'],
            datasets: [{
                data: [30, 20, 25, 25],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
            }]
        }
    });

    new Chart(document.getElementById('productSalesChart'), {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Product Sales',
                data: [500000, 700000, 800000, 1200000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 250000
                    }
                }
            }
        }
    });

   
    new Chart(document.getElementById('topCampaignsChart'), {
        type: 'bar',
        data: {
            labels: ['Campaign #1', 'Campaign #2', 'Campaign #3', 'Campaign #4', 'Campaign #5'],
            datasets: [
                {
                    label: 'Visits',
                    data: [500, 450, 400, 350, 300],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Revenue',
                    data: [1000, 900, 800, 700, 600],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
