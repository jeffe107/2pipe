// Papers Gallery functionality (similar to pipeline gallery)
document.addEventListener('DOMContentLoaded', function() {
    const papersSection = document.getElementById('papers-section');
    const papersContainer = document.getElementById('papers-container');
    const papersBtn = document.getElementById('papers-btn');
    const closePapersBtn = document.getElementById('close-papers-btn');

    if (!papersSection || !papersContainer || !papersBtn || !closePapersBtn || typeof window.PAPERS_REVIEW === 'undefined') {
        return;
    }

    // Create category navigation menu (reuse styles)
    const categoryNav = document.createElement('div');
    categoryNav.className = 'category-nav';
    const categoryMenu = document.createElement('div');
    categoryMenu.className = 'category-menu';
    categoryNav.appendChild(categoryMenu);
    papersSection.insertBefore(categoryNav, papersContainer);

    // Ensure a brief description card exists inside the container
    function ensureDescription() {
        let desc = document.getElementById('papers-description');
        if (!desc) {
            desc = document.createElement('div');
            desc.id = 'papers-description';
            desc.className = 'workflow-info-content';
            desc.innerHTML = `
                <h3 style="color: var(--accent-color); margin-top: 0;">Important information</h3>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    This page lists benchmark studies and key literature relevant to MAG reconstruction.
                    When clicking on any paper, a view of its summary or an excerpt that describes the study, plus a key-figure, will be displayed.
                    Please keep in mind that this is not a comprehensive list, and you are invited to check the suggested papers completely to have a better overview of the work.
                </p>
            `;
            // Insert inside the container so it shares the same width as sections
            desc.style.gridColumn = '1 / -1';
            desc.style.width = '100%';
        }
        // Attach to top of container
        if (papersContainer.firstChild !== desc) {
            papersContainer.insertBefore(desc, papersContainer.firstChild);
        }
        return desc;
    }

    // Back to top button
    const backToTopBtn = initializeBackToTopButton(papersSection);

    function handleScroll() {
        const nav = papersSection.querySelector('.category-nav');
        const scrollPosition = papersSection.scrollTop;
        if (scrollPosition > 300) nav.classList.add('hidden'); else nav.classList.remove('hidden');
        updateActiveCategory();
    }
    papersSection.addEventListener('scroll', handleScroll);

    // Build categories from data
    const categories = Array.from(new Set(PAPERS_REVIEW.map(p => p.category))).sort((a, b) => a.localeCompare(b));

    let currentDetailCategory = null;

    function createCategoryNav() {
        categoryMenu.innerHTML = '';
        categories.forEach(category => {
            const menuItem = document.createElement('a');
            menuItem.href = `#${category.toLowerCase().replace(/\s+/g, '-')}`;
            menuItem.textContent = category;
            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                // If in detail view, rebuild list and expand the chosen category
                if (currentDetailCategory !== null) {
                    createPapersItems(category);
                    currentDetailCategory = null;
                }
                // Scroll to the category header
                setTimeout(() => {
                    const targetCategory = papersContainer.querySelector(`.gallery-category-header[data-category="${category}"]`);
                    if (targetCategory) {
                        targetCategory.scrollIntoView({ behavior: 'smooth' });
                        categoryMenu.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                        menuItem.classList.add('active');
                    }
                }, 0);
            });
            categoryMenu.appendChild(menuItem);
        });
    }

    function updateActiveCategory() {
        const headers = papersContainer.querySelectorAll('.gallery-category-header');
        const scrollPosition = papersSection.scrollTop;
        headers.forEach(header => {
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

    function createPapersItems(expandCategoryName) {
        papersContainer.innerHTML = '';
        ensureDescription();
        // Group by category and sort by name
        const byCategory = {};
        const sorted = [...PAPERS_REVIEW].sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }));
        sorted.forEach(paper => {
            const category = paper.category || 'Other';
            if (!byCategory[category]) byCategory[category] = [];
            byCategory[category].push(paper);
        });

        categories.forEach(category => {
            if (byCategory[category] && byCategory[category].length > 0) {
                // Category header with collapse/expand
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'gallery-category-header';
                categoryHeader.dataset.category = category;
                categoryHeader.innerHTML = `<h3>${category} <span class="category-hint" style="font-weight:400; opacity:0.8; font-size:0.9rem;">(click to expand)</span></h3>`;
                papersContainer.appendChild(categoryHeader);

                const listContainer = document.createElement('div');
                listContainer.className = 'papers-list-container';
                listContainer.style.display = 'none';
                // Make the list span the full gallery width
                listContainer.style.gridColumn = '1 / -1';
                listContainer.style.width = '100%';
                papersContainer.appendChild(listContainer);

                // Toggle category visibility when header clicked
                categoryHeader.style.cursor = 'pointer';
                categoryHeader.addEventListener('click', () => {
                    const isHidden = listContainer.style.display === 'none';
                    listContainer.style.display = isHidden ? 'block' : 'none';
                });

                // Build a simple list of paper titles
                const ul = document.createElement('ul');
                ul.style.listStyle = 'none';
                ul.style.padding = '0';
                ul.style.margin = '0';
                ul.style.width = '100%';
                byCategory[category].forEach(paper => {
                    const li = document.createElement('li');
                    li.style.margin = '0.25rem 0';
                    li.style.width = '100%';
                    const btn = document.createElement('button');
                    btn.textContent = paper.name;
                    btn.style.width = '100%';
                    btn.style.textAlign = 'left';
                    btn.style.padding = '0.75rem 1rem';
                    btn.style.border = '1px solid var(--border-color)';
                    btn.style.background = 'var(--container-bg)';
                    btn.style.color = 'var(--text-color)';
                    btn.style.borderRadius = '8px';
                    btn.style.cursor = 'pointer';
                    btn.style.fontSize = '1.1rem';
                    btn.addEventListener('mouseover', () => { btn.style.borderColor = 'var(--accent-color)'; });
                    btn.addEventListener('mouseout', () => { btn.style.borderColor = 'var(--border-color)'; });
                    btn.addEventListener('click', () => {
                        showPaperDetail(paper, category);
                    });
                    li.appendChild(btn);
                    ul.appendChild(li);
                });
                listContainer.appendChild(ul);

                if (expandCategoryName && expandCategoryName === category) {
                    listContainer.style.display = 'block';
                }
            }
        });
    }

    function showPaperDetail(paper, categoryToExpand) {
        currentDetailCategory = categoryToExpand;
        papersContainer.innerHTML = '';
        const detailWrapper = document.createElement('div');
        detailWrapper.className = 'gallery-item';
        const card = document.createElement('div');
        card.className = 'gallery-card';
        const content = document.createElement('div');
        content.className = 'gallery-content';
        content.innerHTML = `
            <h3>${paper.name}</h3>
            <p style="margin:0 0 1rem 0;">${paper.abstract}</p>
            <a href="${paper.link}" target="_blank" class="workflow-link"><i class="fas fa-external-link-alt"></i> Read paper</a>
        `;
        const img = document.createElement('img');
        img.src = `papers/${paper.id}.png`;
        img.alt = paper.name;
        img.className = 'paper-detail-image';
        img.onerror = function() { this.src = 'images/default-pipeline.png'; };

        const backBtn = document.createElement('a');
        backBtn.href = '#';
        backBtn.className = 'workflow-link';
        backBtn.style.marginTop = '1rem';
        backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to list';
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            createPapersItems(categoryToExpand);
            const header = papersContainer.querySelector(`.gallery-category-header[data-category="${categoryToExpand}"]`);
            if (header) header.scrollIntoView({ behavior: 'smooth' });
        });

        card.appendChild(content);
        card.appendChild(img);
        card.appendChild(backBtn);
        detailWrapper.appendChild(card);
        papersContainer.appendChild(detailWrapper);
    }

    function showPapers() {
        papersSection.style.display = 'block';
        document.body.style.overflow = 'hidden';
        createPapersItems();
    }

    function hidePapers() {
        papersSection.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    papersBtn.addEventListener('click', showPapers);
    closePapersBtn.addEventListener('click', hidePapers);

    // Initialize
    createCategoryNav();
    createPapersItems();
});


