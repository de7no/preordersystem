document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("preOrderForm");
    const staffBtn = document.getElementById("staffBtn");
    const loginModal = document.getElementById("loginModal");
    const closeModal = document.querySelector(".close");
    const loginBtn = document.getElementById("loginBtn");
    const inventorySection = document.getElementById("inventorySection");
    const inventoryList = document.getElementById("inventoryList");

    // Dummy Inventory Data
    let inventory = {
        "Cheese Patty": 10,
        "Chicken Patty": 15,
        "Orange Juice": 8,
        "Flavored Splash": 12
    };

    // Show login modal
    staffBtn.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Staff Login
    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "password123") {
            loginModal.style.display = "none";
            inventorySection.classList.remove("hidden");
            displayInventory();
        } else {
            alert("Invalid login. Try again.");
        }
    });

    // Display inventory
    function displayInventory() {
        inventoryList.innerHTML = "";
        for (let item in inventory) {
            let listItem = document.createElement("li");
            listItem.textContent = `${item}: ${inventory[item]} left`;
            inventoryList.appendChild(listItem);
        }
    }

    // Handle order submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const foodItem = document.getElementById("food").value;
        const drinkItem = document.getElementById("drink").value;

        if (inventory[foodItem] > 0 && inventory[drinkItem] > 0) {
            inventory[foodItem]--;
            inventory[drinkItem]--;

            document.getElementById("message").textContent = "Order submitted! Redirecting...";
            setTimeout(function () {
                window.location.href = "thank.html";
            }, 2000);

            displayInventory();
        } else {
            alert("One or more selected items are out of stock.");
        }
    });
});
