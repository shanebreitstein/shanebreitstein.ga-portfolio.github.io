// Array of headshot image paths
const headshots = [
    "../assets/imgs/headshot1.jpeg",
    "../assets/imgs/headshot2.jpeg"
];

let currentIndex = 0; // Start with the first image

// Function to change the headshot
function cycleHeadshot() {
    const headshotImg = document.getElementById("headshot");
    currentIndex = (currentIndex + 1) % headshots.length; // Increment index and loop back to 0
    headshotImg.src = headshots[currentIndex];
}

// Change the headshot every 5 seconds
setInterval(cycleHeadshot, 5000);