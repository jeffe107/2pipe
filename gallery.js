// Gallery functionality
const gallerySection = document.getElementById('gallery-section');
const galleryContainer = document.getElementById('gallery-container');
const galleryBtn = document.getElementById('gallery-btn');
const closeGalleryBtn = document.getElementById('close-gallery-btn');

// Function to create gallery items
function createGalleryItems() {
    preLoadedObjects.forEach(pipeline => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <div class="gallery-card">
                <img src="assets/${pipeline.id}.png" alt="${pipeline.name}" class="gallery-image">
                <div class="gallery-content">
                    <h3>${pipeline.name}</h3>
                    <p>${pipeline.description}</p>
                    <a href="${pipeline.url}" target="_blank" class="pipeline-link">Check Pipeline</a>
                </div>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Function to show gallery
function showGallery() {
    gallerySection.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
}

// Function to hide gallery
function hideGallery() {
    gallerySection.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event listeners
galleryBtn.addEventListener('click', showGallery);
closeGalleryBtn.addEventListener('click', hideGallery);

// Initialize gallery
createGalleryItems(); 