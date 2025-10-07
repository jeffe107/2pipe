// Table functionality
document.addEventListener('DOMContentLoaded', function() {
    const tableSection = document.getElementById('table-section');
    const tableContainer = document.getElementById('table-container');
    const tableBtn = document.getElementById('table-btn');
    const closeTableBtn = document.getElementById('close-table-btn');

    if (!tableSection || !tableContainer || !tableBtn || !closeTableBtn) {
        console.error('Required table elements not found');
        return;
    }

    // Configuration
    const COLUMNS_PER_PAGE = 7; // Number of columns to show per page (including pipeline name)
    let currentPage = 0;
    const filterValues = {}; // Store filter values for each column
    let currentTableEl = null; // reference to the currently rendered table element

    // Function to reset all filters
    function resetFilters() {
        if (!currentTableEl) return;
        // Clear all filter inputs
        const filterInputs = currentTableEl.querySelectorAll('.filter-input');
        filterInputs.forEach(input => {
            input.value = '';
            const th = input.closest('th');
            if (th && th.dataset.columnIndex) {
                filterValues[th.dataset.columnIndex] = '';
            }
        });

        // Show all rows
        const rows = currentTableEl.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.style.display = '';
        });

        // Reset current page to first page
        currentPage = 0;
        updatePageDisplay();
    }

    // Initialize back to top button
    const backToTopBtn = initializeBackToTopButton(tableSection);

    // Function to create table
    function createTable() {
        // Clear existing content
        tableContainer.innerHTML = '';
        
        // Create table header
        const table = document.createElement('table');
        table.className = 'pipeline-table';
        currentTableEl = table;
        
        // Create header row
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        // Define headers and their corresponding attributes
        const columnDefinitions = [
            { header: 'Number', attribute: 'index', noFilter: true },
            { header: 'Pipeline Name', attribute: null },
            { header: 'Category', attribute: 'category' },
            { header: 'Read Types', attribute: 'readTypes' },
            { header: 'Multiple Samples', attribute: 'multiSample' },
            { header: 'Co-assembly and/or \nCo-binning', attribute: 'coAssemblyCoBinning' },
            { header: 'GUI', attribute: 'GUI' },
            { header: 'Adapted to cloud\nenviroments', attribute: 'Cloud' },
            { header: 'Workflow Manager', attribute: 'workflowManager' },
            { header: 'Bin Refinement', attribute: 'binRefinement' },
            { header: 'External Resources', attribute: 'externalComputationalResources' },
            { header: 'Execution Options', attribute: 'executionOptions' },
            { header: 'Special Features', attribute: 'specialOptions' },
            { header: 'Last update', attribute: 'update' },
            { header: 'License', attribute: 'license' }
            //{ header: 'Last Commit (GitHub)', attribute: 'lastCommit', custom: true },
            //{ header: 'Clones (GitHub)', attribute: 'clones', custom: true }
        ];
        
        // Create navigation controls
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
        
        tableContainer.appendChild(navigationControls);
        
        // Create header cells with filter inputs
        columnDefinitions.forEach((col, index) => {
            const th = document.createElement('th');
            th.dataset.columnIndex = index;
            
            // Create header text
            const headerText = document.createElement('div');
            headerText.textContent = col.header;
            th.appendChild(headerText);
            
            // Add filter input for all columns except pipeline name and index
            if (col.attribute !== null && !col.noFilter) {
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
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Add rows for each pipeline (sorted alphabetically by name)
        const sortedPipelines = [...preLoadedObjects].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
        sortedPipelines.forEach((pipeline, index) => {
            const row = document.createElement('tr');
            
            // Add cells for each column
            columnDefinitions.forEach((col, colIndex) => {
                const cell = document.createElement('td');
                cell.dataset.columnIndex = colIndex;
                
                if (col.attribute === 'index') {
                    // Index column
                    cell.textContent = index + 1;
                } else if (col.attribute === null) {
                    // Pipeline name column
                    const nameLink = document.createElement('a');
                    nameLink.href = '#';
                    nameLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        // Hide table section
                        hideTable();
                        
                        // Show workflow section
                        const workflowSection = document.getElementById('workflow-section');
                        workflowSection.style.display = 'block';
                        
                        // Select the pipeline in the dropdown
                        const pipelineSelect = document.getElementById('pipeline-select');
                        pipelineSelect.value = pipeline.id;
                        
                        // Trigger the change event to display the workflow
                        const event = new Event('change');
                        pipelineSelect.dispatchEvent(event);
                    });
                    nameLink.textContent = pipeline.name;
                    cell.appendChild(nameLink);
                } else if (col.custom) {
                    // GitHub metrics columns
                    const metrics = (window.PIPELINE_GITHUB_METRICS || {})[pipeline.name];
                    if (col.attribute === 'lastCommit') {
                        cell.textContent = metrics && metrics.lastCommit ? metrics.lastCommit : '-';
                    } else if (col.attribute === 'clones') {
                        cell.textContent = metrics && typeof metrics.clones !== 'undefined' ? metrics.clones : '-';
                    }
                } else if (col.attribute === 'specialOptions' || col.attribute === 'executionOptions' || col.attribute === 'readTypes') {
                    // Special handling for multi-select options
                    const value = pipeline.attributes[col.attribute] && pipeline.attributes[col.attribute].length > 0 ? 
                        pipeline.attributes[col.attribute].join(', ') : '';
                    cell.textContent = value;
                } else if (col.attribute === 'workflowManager') {
                    // Special handling for workflow manager
                    const value = pipeline.attributes[col.attribute] && pipeline.attributes[col.attribute].length > 0 ? 
                        pipeline.attributes[col.attribute].join(', ') : '';
                    cell.textContent = value;
                } else {
                    // Regular attribute columns (binary options)
                    const value = pipeline.attributes[col.attribute] && pipeline.attributes[col.attribute].length > 0 ? 
                        pipeline.attributes[col.attribute][0] : '';
                    cell.textContent = value;
                }
                
                row.appendChild(cell);
            });
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        
        // Initialize page display
        updatePageDisplay();
    }

    // Function to change page
    function changePage(delta) {
        const totalColumns = currentTableEl ? currentTableEl.querySelectorAll('th').length : 0;
        const totalPages = Math.ceil((totalColumns - 2) / (COLUMNS_PER_PAGE - 2)); // Subtract 2 for pipeline name and index columns
        
        currentPage = Math.max(0, Math.min(currentPage + delta, totalPages - 1));
        updatePageDisplay();
    }

    // Function to update page display
    function updatePageDisplay() {
        const totalColumns = currentTableEl ? currentTableEl.querySelectorAll('th').length : 0;
        const totalPages = Math.ceil((totalColumns - 2) / (COLUMNS_PER_PAGE - 2)); // Subtract 2 for pipeline name and index columns
        
        // Update page info
        const pageInfo = document.querySelector('.page-info');
        pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages}`;
        
        // Show/hide columns based on current page
        const startCol = currentPage * (COLUMNS_PER_PAGE - 2); // Subtract 2 for pipeline name and index columns
        const endCol = Math.min(startCol + (COLUMNS_PER_PAGE - 2), totalColumns - 1); // Subtract 2 for pipeline name and index columns
        
        // Always show first two columns (index and pipeline name)
        if (!currentTableEl) return;
        currentTableEl.querySelectorAll('th, td').forEach(element => {
            const colIndex = parseInt(element.dataset.columnIndex);
            if (colIndex <= 1) {
                element.style.display = '';
            } else if (colIndex > startCol + 1 && colIndex <= endCol + 1) {
                element.style.display = '';
                // Restore filter value if it exists
                if (element.classList.contains('filter-input')) {
                    element.value = filterValues[colIndex] || '';
                }
            } else {
                // Save filter value before hiding
                if (element.classList.contains('filter-input')) {
                    filterValues[colIndex] = element.value;
                }
                element.style.display = 'none';
            }
        });
        
        // Update navigation buttons
        const prevButton = tableContainer.querySelector('.nav-control-btn:first-child');
        const nextButton = tableContainer.querySelector('.nav-control-btn:last-child');
        
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === totalPages - 1;
    }

    // Function to filter table
    function filterTable() {
        if (!currentTableEl) return;
        const rows = currentTableEl.querySelectorAll('tbody tr');
        const allColumns = Array.from(currentTableEl.querySelectorAll('th'))
            .map(th => parseInt(th.dataset.columnIndex));
        
        // Get filter values for all columns, not just visible ones
        const filters = allColumns.map(colIndex => {
            const filterInput = currentTableEl.querySelector(`th[data-column-index="${colIndex}"] .filter-input`);
            if (filterInput) {
                filterValues[colIndex] = filterInput.value; // Store the filter value
                return filterInput.value.toLowerCase();
            }
            return filterValues[colIndex] ? filterValues[colIndex].toLowerCase() : '';
        });
        
        rows.forEach(row => {
            const cells = Array.from(row.cells);
            let show = true;
            
            // Check all columns, not just visible ones
            allColumns.forEach((colIndex, filterIndex) => {
                const cell = cells[colIndex];
                const cellText = cell.textContent.toLowerCase();
                const filterText = filters[filterIndex];
                
                if (filterText && !cellText.includes(filterText)) {
                    show = false;
                }
            });
            
            row.style.display = show ? '' : 'none';
        });
    }

    // Function to show table
    function showTable() {
        tableSection.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Reset filters when showing the table
        resetFilters();
    }

    // Function to hide table
    function hideTable() {
        tableSection.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Reset filters when hiding the table
        resetFilters();
    }

    // Event listeners
    tableBtn.addEventListener('click', showTable);
    closeTableBtn.addEventListener('click', hideTable);

    // Make functions globally available
    window.showTable = showTable;
    window.hideTable = hideTable;

    // Initialize table
    createTable();
}); 