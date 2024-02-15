document.addEventListener('DOMContentLoaded', function() {
  

    // Populate the photo gallery
    const photoGallery = document.getElementById('photo-gallery');
    // Add your photo gallery content dynamically using JavaScript

    // Populate the videos section
    const videoSection = document.getElementById('video-section');
    // Add your video content dynamically using JavaScript

    // Populate the favorite love quotes
    const quoteList = document.getElementById('quote-list');
    const loveQuotes = [
        // Add more love quotes as needed
    ];

    loveQuotes.forEach(quote => {
        const li = document.createElement('li');
        li.textContent = quote;
        quoteList.appendChild(li);
    });
});