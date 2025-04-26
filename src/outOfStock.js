// Function to show out of stock message when trying to add unavailable items
export function showOutOfStockMessage(productName) {
    const messageContainer = document.getElementById("out-of-stock-message");

    if (messageContainer) {
        messageContainer.textContent = `${productName} is currently out of stock. Please check back later!`;
        messageContainer.style.display = "block";
        messageContainer.style.color = "red";

        setTimeout(() => {
            messageContainer.style.display = "none";
        }, 4000); // Hide message after 4 seconds
    } else {
        alert(`${productName} is out of stock.`);
    }
}
