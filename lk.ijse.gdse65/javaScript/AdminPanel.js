
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8a06f4dc660ba18f71e14f9f327bd561'; // Replace with your OpenWeatherMap API key
    const city = 'Panadura'; // You can replace this with any city you want
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').textContent = `Location: ${location}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('weatherDesc').textContent = `WeatherDesc: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('location').textContent = 'Error fetching weather data';
        });
});

$(document).ready(function() {
    function updateCustomerCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/customer/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalCustomersLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch customer count:", error);
            }
        });
    }

    updateCustomerCount();
});

$(document).ready(function() {
    function updateEmployeeCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/employee/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalEmployeesLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch employee count:", error);
            }
        });
    }

    updateEmployeeCount();
});

$(document).ready(function() {
    function updateSupplierCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/suppliers/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalSuppliersLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch employee count:", error);
            }
        });
    }

    updateSupplierCount();
});

$(document).ready(function() {
    function updateInventorysCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalInventorysLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    updateInventorysCount();
});

$(document).ready(function() {
    function updateInventoryProfit() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/totalProfit",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalProfitLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    updateInventoryProfit()
});

$(document).ready(function() {
    function updateInventorySales() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/total-sales",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalSalesLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    updateInventorySales();
});

$(document).ready(function() {
    function mostPopularItem() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/most-sold-item-name",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#mostPopularItem').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    mostPopularItem();
});

$(document).ready(function() {
    function mostPopularItemQty() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/most-sold-item-qty",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#mostPopularItemQty').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    mostPopularItemQty();
});