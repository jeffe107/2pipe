// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const gallerySection = document.getElementById('gallery-section');
    const galleryContainer = document.getElementById('gallery-container');
    const galleryBtn = document.getElementById('gallery-btn');
    const closeGalleryBtn = document.getElementById('close-gallery-btn');

    if (!gallerySection || !galleryContainer || !galleryBtn || !closeGalleryBtn) {
        console.error('Required gallery elements not found');
        return;
    }

    // Create category navigation menu
    const categoryNav = document.createElement('div');
    categoryNav.className = 'category-nav';
    const categoryMenu = document.createElement('div');
    categoryMenu.className = 'category-menu';
    categoryNav.appendChild(categoryMenu);
    gallerySection.insertBefore(categoryNav, galleryContainer);

    // Initialize back to top button
    const backToTopBtn = initializeBackToTopButton(gallerySection);

    // Function to handle scroll event
    function handleScroll() {
        const categoryNav = document.querySelector('.category-nav');
        const scrollPosition = gallerySection.scrollTop;

        // Show/hide category nav
        if (scrollPosition > 300) {
            categoryNav.classList.add('hidden');
        } else {
            categoryNav.classList.remove('hidden');
        }

        // Update active category
        updateActiveCategory();
    }

    // Add scroll event listener to gallery section
    gallerySection.addEventListener('scroll', handleScroll);

    // Define the order of categories
    const categoryOrder = [
        "Short-read centered pipelines",
        "Long-read focused pipelines",
        "Hybrid pipelines",
        "Web-based pipelines",
        "Special pipelines"
    ];

    // Function to map pipeline categories to display categories
    function mapCategoryToDisplay(category) {
        // Since we're using the exact categories from pipelineObjects.js, no mapping is needed
        return category;
    }

    // Function to create category navigation
    function createCategoryNav() {
        categoryMenu.innerHTML = ''; // Clear existing content
        
        // Create menu items for each category
        categoryOrder.forEach(category => {
            const menuItem = document.createElement('a');
            menuItem.href = `#${category.toLowerCase().replace(/\s+/g, '-')}`;
            menuItem.textContent = category;
            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                const targetCategory = document.querySelector(`.gallery-category-header[data-category="${category}"]`);
                if (targetCategory) {
                    targetCategory.scrollIntoView({ behavior: 'smooth' });
                    // Update active state
                    categoryMenu.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                    menuItem.classList.add('active');
                }
            });
            categoryMenu.appendChild(menuItem);
        });
    }

    // Function to update active category based on scroll position
    function updateActiveCategory() {
        const categoryHeaders = document.querySelectorAll('.gallery-category-header');
        const scrollPosition = gallerySection.scrollTop;

        categoryHeaders.forEach(header => {
            const category = header.dataset.category;
            const headerTop = header.offsetTop - categoryNav.offsetHeight;
            const headerBottom = headerTop + header.offsetHeight;

            if (scrollPosition >= headerTop && scrollPosition < headerBottom) {
                const menuItem = categoryMenu.querySelector(`a[href="#${category.toLowerCase().replace(/\s+/g, '-')}"]`);
                if (menuItem) {
                    categoryMenu.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                    menuItem.classList.add('active');
                }
            }
        });
    }

    // Add scroll event listener for active category
    gallerySection.addEventListener('scroll', updateActiveCategory);

    // Function to create gallery items
    function createGalleryItems() {
        const galleryContainer = document.getElementById('gallery-container');
        galleryContainer.innerHTML = ''; // Clear existing content

        // Group pipelines by category
        const pipelinesByCategory = {};
        preLoadedObjects.forEach(pipeline => {
            const category = pipeline.category || 'Uncategorized';
            if (!pipelinesByCategory[category]) {
                pipelinesByCategory[category] = [];
            }
            pipelinesByCategory[category].push(pipeline);
        });

        // Create gallery items based on category order
        categoryOrder.forEach(category => {
            if (pipelinesByCategory[category] && pipelinesByCategory[category].length > 0) {
                // Create category header
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'gallery-category-header';
                categoryHeader.dataset.category = category;
                categoryHeader.innerHTML = `<h3>${category}</h3>`;
                galleryContainer.appendChild(categoryHeader);

                // Create gallery items for this category
                pipelinesByCategory[category].forEach(pipeline => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.innerHTML = `
                        <div class="gallery-card" data-pipeline-id="${pipeline.id}" data-pipeline-name="I want to know more about ${pipeline.name}" style="cursor: pointer;">
                            <img src="assets/${pipeline.id}.png" alt="${pipeline.name}" class="gallery-image" onerror="this.src='images/default-pipeline.png'">
                            <div class="gallery-content">
                                <h3>${pipeline.name}</h3>
                                <p>${pipeline.description}</p>
                            </div>
                        </div>
                    `;
                    galleryContainer.appendChild(galleryItem);

                    // Add click event listener to the entire card
                    const card = galleryItem.querySelector('.gallery-card');
                    card.addEventListener('click', () => {
                        showWorkflowForPipeline(pipeline.id);
                    });
                });
            }
        });

        // Handle uncategorized pipelines if any
        if (pipelinesByCategory['Uncategorized'] && pipelinesByCategory['Uncategorized'].length > 0) {
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'gallery-category-header';
            categoryHeader.innerHTML = '<h3>Uncategorized Pipelines</h3>';
            galleryContainer.appendChild(categoryHeader);

            pipelinesByCategory['Uncategorized'].forEach(pipeline => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `
                    <div class="gallery-card" data-pipeline-id="${pipeline.id}" data-pipeline-name="I want to know more about '${pipeline.name}'" style="cursor: pointer;">
                        <img src="images/${pipeline.id}.png" alt="${pipeline.name}" class="gallery-image" onerror="this.src='images/default-pipeline.png'">
                        <div class="gallery-content">
                            <h3>${pipeline.name}</h3>
                            <p>${pipeline.description}</p>
                        </div>
                    </div>
                `;
                galleryContainer.appendChild(galleryItem);

                // Add click event listener to the entire card
                const card = galleryItem.querySelector('.gallery-card');
                card.addEventListener('click', () => {
                    showWorkflowForPipeline(pipeline.id);
                });
            });
        }
    }

    // Function to show workflow for a specific pipeline
    function showWorkflowForPipeline(pipelineId) {
        // Hide gallery
        hideGallery();
        
        // Show workflow section
        const workflowSection = document.getElementById('workflow-section');
        workflowSection.style.display = 'block';
        
        // Select the pipeline in the dropdown
        const pipelineSelect = document.getElementById('pipeline-select');
        pipelineSelect.value = pipelineId;
        
        // Trigger the change event to display the workflow
        const event = new Event('change');
        pipelineSelect.dispatchEvent(event);
    }

    // Function to show gallery
    function showGallery() {
        gallerySection.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
        createGalleryItems(); // Refresh gallery items when showing
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
    createCategoryNav();
    createGalleryItems();

    // Make functions globally available
    window.showGallery = showGallery;
    window.hideGallery = hideGallery;
}); 