document.addEventListener('DOMContentLoaded', function() {
    const contentElement = document.querySelector('.section-contant'); // Corrected querySelector selector
    const colors = ['#FF5733', '#07AE98', '#3d85C6', '#F33FF']; // Removed an empty string from the array

    function changeBackgroundColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        contentElement.style.backgroundColor = randomColor;
    }

    // Change the background color every 2 seconds (2000 milliseconds)
    setInterval(changeBackgroundColor, 2000); // Changed the interval to 2000 milliseconds
});
