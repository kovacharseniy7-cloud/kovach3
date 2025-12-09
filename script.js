// Спливаюче вікно при натисканні “Order”
document.getElementById("orderBtn").addEventListener("click", function () {
    alert("Thank you! Our manager will contact you soon.");
});

document.getElementById("heroOrderBtn").addEventListener("click", function () {
    alert("Order placed successfully!");
});

// Валідація форми
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return;
    }

    alert("Form submitted successfully!");
});
