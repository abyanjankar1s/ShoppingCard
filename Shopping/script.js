// Define an object with color-to-image mappings
const colorImages = {
    black: 'black_tshirt.jpg',
    white: 'white_tshirt.jpg',
    blue: 'blue_tshirt.jpg',
    yellow: 'yellow_tshirt.jpg',
    grey: 'grey_tshirt.jpg',
};

// Function to update the image source based on the selected color
function updateImage() {
    // Get the selected color from the dropdown
    const color = document.getElementById('color').value;

    // Use the selected color to get the corresponding image URL from the colorImages object
    // If the color is not found, use a default image URL
    const newImageSrc = colorImages[color] || 'default_tshirt.jpg';

    // Update the source of the product image element on the page
    document.getElementById('productImage').src = newImageSrc;
}

// Function to update the price based on the selected size
function updatePrice() {
    // Get the selected size from the dropdown
    const size = document.getElementById('size').value;

    // Use the selected size to get the corresponding base price from the sizePrices object
    // If the size is not found, use a default base price
    const basePrice = sizePrices[size] || 19.99;

    // Get the quantity from the input field and convert it to an integer
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    // Calculate the total price based on the base price, selected size, and quantity
    const totalPrice = basePrice * quantity;

    // Update the displayed price on the page
    document.getElementById('displayPrice').textContent = totalPrice.toFixed(2);
}

// Set base prices for each size
const sizePrices = {
    small: 19.99,
    medium: 29.99,
    large: 39.99,
};

// Add event listeners to the color, size, and quantity dropdowns for change events
document.getElementById('color').addEventListener('change', updateImage);
document.getElementById('size').addEventListener('change', updatePrice);
document.getElementById('quantity').addEventListener('input', updatePrice);

// Trigger the update functions on page load to set default values
window.onload = function () {
    updateImage(); // Set the default image
    updatePrice(); // Set the default price
};

// Event listener for the "Add to Cart" button
document.getElementById('addToCart').addEventListener('click', function () {
    // Get selected options
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    // Use the same logic as updatePrice to calculate the total price
    const basePrice = sizePrices[size] || 19.99;
    const totalPrice = basePrice * quantity;

    // Display a simple alert for demonstration
    alert(`Added to Cart: Stylish Cotton T-shirt\nSize: ${size}\nColor: ${color}\nQuantity: ${quantity}\nTotal Price: $${totalPrice.toFixed(2)}`);

    // Update the displayed price on the page
    document.getElementById('displayPrice').textContent = totalPrice.toFixed(2);
});
