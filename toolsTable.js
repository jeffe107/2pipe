// Tools Table built from MAG_PIPELINES, similar layout/UX to table.js
document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('tools-table-section');
    const container = document.getElementById('tools-table-container');
    const openBtn = document.getElementById('tools-table-btn');
    const closeBtn = document.getElementById('close-tools-table-btn');

    if (!section || !container || !openBtn || !closeBtn) {
        return;
    }

    // Config
    const COLUMNS_PER_PAGE = 5; // show fewer because cells are longer text
    let currentPage = 0;
    const filterValues = {};

    // Back to top
    const backToTopBtn = initializeBackToTopButton(section);

    // Column definitions mapped to MAG_PIPELINES keys
    const columnDefinitions = [
        { header: 'Number', key: 'index', noFilter: true },
        { header: 'Pipeline Name', key: 'name' },
        { header: 'QC', key: 'qc' },
        { header: 'Assembly', key: 'assembly' },
        { header: 'Binning', key: 'binning' },
        { header: 'Quality Assessment', key: 'qualityAssessment' },
        { header: 'Refinement', key: 'refinement' },
        { header: 'Taxonomy', key: 'taxonomy' },
        { header: 'Functional Annotation', key: 'functionalAnnotation' },
        { header: 'Other', key: 'other' }
    ];

    function createTable() {
        container.innerHTML = '';

        const navigationControls = document.createElement('div');
        navigationControls.className = 'table-navigation';

        const prevButton = document.createElement('button');
        prevButton.className = 'nav-control-btn';
        prevButton.textContent = '← Previous Features';
        prevButton.addEventListener('click', () => changePage(-1));

        const nextButton = document.createElement('button');
        nextButton.className = 'nav-control-btn';
        nextButton.textContent = 'More Features →';
        nextButton.addEventListener('click', () => changePage(1));

        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';

        navigationControls.appendChild(prevButton);
        navigationControls.appendChild(pageInfo);
        navigationControls.appendChild(nextButton);
        container.appendChild(navigationControls);

        const table = document.createElement('table');
        table.className = 'pipeline-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        columnDefinitions.forEach((col, index) => {
            const th = document.createElement('th');
            th.dataset.columnIndex = index;

            const headerText = document.createElement('div');
            headerText.textContent = col.header;
            th.appendChild(headerText);

            if (!col.noFilter) {
                const filterInput = document.createElement('input');
                filterInput.type = 'text';
                filterInput.className = 'filter-input';
                filterInput.placeholder = 'Filter...';
                filterInput.addEventListener('input', filterTable);
                th.appendChild(filterInput);
            }

            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        const DATA = (typeof window.MAG_PIPELINES_XLSX !== 'undefined') ? window.MAG_PIPELINES_XLSX : (typeof window.MAG_PIPELINES !== 'undefined' ? window.MAG_PIPELINES : []);
        const sorted = [...DATA].sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }));
        sorted.forEach((p, index) => {
            const row = document.createElement('tr');
            columnDefinitions.forEach((col, colIndex) => {
                const cell = document.createElement('td');
                cell.dataset.columnIndex = colIndex;

                if (col.key === 'index') {
                    cell.textContent = index + 1;
                } else if (col.key === 'name') {
                    const nameLink = document.createElement('a');
                    nameLink.href = '#';
                    nameLink.textContent = p.name || '';
                    nameLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        hideToolsTable();
                        const workflowSection = document.getElementById('workflow-section');
                        const pipelineSelect = document.getElementById('pipeline-select');
                        if (workflowSection && pipelineSelect) {
                            workflowSection.style.display = 'block';
                            const id = mapNameToId(p.name);
                            if (id) {
                                pipelineSelect.value = id;
                                const event = new Event('change');
                                pipelineSelect.dispatchEvent(event);
                            }
                        }
                    });
                    cell.appendChild(nameLink);
                } else {
                    const arr = p.attributes && Array.isArray(p.attributes[col.key]) ? p.attributes[col.key] : [];
                    cell.textContent = arr.length ? arr.join(', ') : '';
                }

                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        container.appendChild(table);

        updatePageDisplay();
    }

    function mapNameToId(name) {
        if (typeof preLoadedObjects !== 'undefined') {
            const match = preLoadedObjects.find(o => o.name.toLowerCase() === name.toLowerCase());
            return match ? match.id : '';
        }
        return '';
    }

    function changePage(delta) {
        const totalColumns = document.querySelectorAll('#tools-table-section .pipeline-table th').length;
        const totalPages = Math.ceil((totalColumns - 2) / (COLUMNS_PER_PAGE - 2));
        currentPage = Math.max(0, Math.min(currentPage + delta, totalPages - 1));
        updatePageDisplay();
    }

    function updatePageDisplay() {
        const tableEl = section.querySelector('.pipeline-table');
        if (!tableEl) return;
        const totalColumns = tableEl.querySelectorAll('th').length;
        const totalPages = Math.ceil((totalColumns - 2) / (COLUMNS_PER_PAGE - 2));

        const pageInfo = section.querySelector('.page-info');
        if (pageInfo) pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages}`;

        const startCol = currentPage * (COLUMNS_PER_PAGE - 2);
        const endCol = Math.min(startCol + (COLUMNS_PER_PAGE - 2), totalColumns - 1);

        section.querySelectorAll('.pipeline-table th, .pipeline-table td').forEach(element => {
            const colIndex = parseInt(element.dataset.columnIndex);
            if (colIndex <= 1) {
                element.style.display = '';
            } else if (colIndex > startCol + 1 && colIndex <= endCol + 1) {
                element.style.display = '';
                if (element.classList && element.classList.contains('filter-input')) {
                    element.value = filterValues[colIndex] || '';
                }
            } else {
                if (element.classList && element.classList.contains('filter-input')) {
                    filterValues[colIndex] = element.value;
                }
                element.style.display = 'none';
            }
        });

        const prevButton = section.querySelector('.nav-control-btn:first-child');
        const nextButton = section.querySelector('.nav-control-btn:last-child');
        if (prevButton) prevButton.disabled = currentPage === 0;
        if (nextButton) nextButton.disabled = currentPage === totalPages - 1;
    }

    function filterTable() {
        const tableEl = section.querySelector('.pipeline-table');
        if (!tableEl) return;
        const rows = tableEl.querySelectorAll('tbody tr');
        const allColumns = Array.from(tableEl.querySelectorAll('th')).map(th => parseInt(th.dataset.columnIndex));

        const filters = allColumns.map(colIndex => {
            const filterInput = tableEl.querySelector(`th[data-column-index="${colIndex}"] .filter-input`);
            if (filterInput) {
                filterValues[colIndex] = filterInput.value;
                return filterInput.value.toLowerCase();
            }
            return filterValues[colIndex] ? filterValues[colIndex].toLowerCase() : '';
        });

        rows.forEach(row => {
            const cells = Array.from(row.cells);
            let show = true;
            allColumns.forEach((colIndex, filterIndex) => {
                const cell = cells[colIndex];
                const cellText = (cell.textContent || '').toLowerCase();
                const filterText = filters[filterIndex];
                if (filterText && !cellText.includes(filterText)) show = false;
            });
            row.style.display = show ? '' : 'none';
        });
    }

    function showToolsTable() {
        section.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Reset state
        currentPage = 0;
        Object.keys(filterValues).forEach(k => delete filterValues[k]);
        createTable();
    }

    function hideToolsTable() {
        section.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    openBtn.addEventListener('click', showToolsTable);
    closeBtn.addEventListener('click', hideToolsTable);

    // Export
    window.showToolsTable = showToolsTable;
    window.hideToolsTable = hideToolsTable;
});


