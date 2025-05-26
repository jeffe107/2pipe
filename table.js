// Table functionality
const tableSection = document.getElementById('table-section');
const tableContainer = document.getElementById('table-container');
const tableBtn = document.getElementById('table-btn');
const closeTableBtn = document.getElementById('close-table-btn');

// Configuration
const COLUMNS_PER_PAGE = 7; // Number of columns to show per page (including pipeline name)
let currentPage = 0;

// Function to create table
function createTable() {
    // Create table header
    const table = document.createElement('table');
    table.className = 'pipeline-table';
    
    // Create header row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Define headers and their corresponding attributes
    const columnDefinitions = [
        { header: 'Pipeline Name', attribute: null },
        { header: 'Short Reads', attribute: 'shortReads' },
        { header: 'PacBio', attribute: 'PacBio' },
        { header: 'Oxford Nanopore', attribute: 'OxfordNanopore' },
        { header: 'Hybrid Assembly', attribute: 'hybridAssembly' },
        { header: 'Multi Sample', attribute: 'multiSample' },
        { header: 'Co-assembly/Co-binning', attribute: 'coAssemblyCoBinning' },
        { header: 'GUI', attribute: 'GUI' },
        { header: 'Cloud', attribute: 'Cloud' },
        { header: 'Workflow Manager', attribute: 'workflowManager' },
        { header: 'Bin Refinement', attribute: 'binRefinement' },
        { header: 'Conda', attribute: 'Conda' },
        { header: 'Docker', attribute: 'Docker' },
        { header: 'Singularity', attribute: 'Singularity' },
        { header: 'External Resources', attribute: 'externalComputationalResources' },
        { header: 'Taxonomic Profiling', attribute: 'taxonomicProfiling' },
        { header: 'Metabolic Modeling', attribute: 'metabolicModeling' },
        { header: 'Ancient DNA', attribute: 'ancientDNA' },
        { header: 'Eukaryotic/Viral MAGs', attribute: 'eukaryoticViralMAGs' }
    ];
    
    // Create navigation controls
    const navigationControls = document.createElement('div');
    navigationControls.className = 'table-navigation';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-control-btn';
    prevButton.textContent = '← Previous Columns';
    prevButton.addEventListener('click', () => changePage(-1));
    
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-control-btn';
    nextButton.textContent = 'Next Columns →';
    nextButton.addEventListener('click', () => changePage(1));
    
    const pageInfo = document.createElement('span');
    pageInfo.className = 'page-info';
    
    navigationControls.appendChild(prevButton);
    navigationControls.appendChild(pageInfo);
    navigationControls.appendChild(nextButton);
    
    tableContainer.appendChild(navigationControls);
    
    // Add headers with filter inputs
    columnDefinitions.forEach((col, index) => {
        const th = document.createElement('th');
        th.textContent = col.header;
        th.dataset.columnIndex = index;
        
        // Add filter input for each column
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.placeholder = 'Filter...';
        filterInput.className = 'filter-input';
        filterInput.addEventListener('input', () => filterTable());
        
        th.appendChild(filterInput);
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    // Add rows for each pipeline
    preLoadedObjects.forEach(pipeline => {
        const row = document.createElement('tr');
        
        // Add cells for each column
        columnDefinitions.forEach((col, index) => {
            const cell = document.createElement('td');
            cell.dataset.columnIndex = index;
            
            if (col.attribute === null) {
                // Pipeline name column
                const nameLink = document.createElement('a');
                nameLink.href = pipeline.url;
                nameLink.target = '_blank';
                nameLink.textContent = pipeline.name;
                cell.appendChild(nameLink);
            } else {
                // Attribute columns
                const value = pipeline.attributes[col.attribute] ? pipeline.attributes[col.attribute][0] : 'No';
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
    const totalColumns = document.querySelectorAll('.pipeline-table th').length;
    const totalPages = Math.ceil(totalColumns / COLUMNS_PER_PAGE);
    
    currentPage = (currentPage + delta + totalPages) % totalPages;
    updatePageDisplay();
}

// Function to update page display
function updatePageDisplay() {
    const totalColumns = document.querySelectorAll('.pipeline-table th').length;
    const totalPages = Math.ceil(totalColumns / COLUMNS_PER_PAGE);
    
    // Update page info
    const pageInfo = document.querySelector('.page-info');
    pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages}`;
    
    // Show/hide columns based on current page
    const startCol = currentPage * COLUMNS_PER_PAGE;
    const endCol = Math.min(startCol + COLUMNS_PER_PAGE, totalColumns);
    
    // Always show first column (pipeline name)
    document.querySelectorAll('.pipeline-table th, .pipeline-table td').forEach(element => {
        const colIndex = parseInt(element.dataset.columnIndex);
        if (colIndex === 0) {
            element.style.display = '';
        } else if (colIndex > startCol && colIndex <= endCol) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
    
    // Update navigation buttons
    const prevButton = document.querySelector('.nav-control-btn:first-child');
    const nextButton = document.querySelector('.nav-control-btn:last-child');
    
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
}

// Function to filter table
function filterTable() {
    const filters = Array.from(document.querySelectorAll('.filter-input')).map(input => input.value.toLowerCase());
    const rows = document.querySelectorAll('.pipeline-table tbody tr');
    
    rows.forEach(row => {
        const cells = Array.from(row.cells);
        let show = true;
        
        cells.forEach((cell, index) => {
            const cellText = cell.textContent.toLowerCase();
            const filterText = filters[index];
            
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
}

// Function to hide table
function hideTable() {
    tableSection.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
tableBtn.addEventListener('click', showTable);
closeTableBtn.addEventListener('click', hideTable);

// Initialize table
createTable(); 