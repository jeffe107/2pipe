// DOM elements
const workflowBtn = document.getElementById('workflow-btn');
const workflowSection = document.getElementById('workflow-section');
const closeWorkflowBtn = document.getElementById('close-workflow-btn');
const backToGalleryBtn = document.getElementById('back-to-gallery-btn');
const backToComparisonBtn = document.getElementById('back-to-comparison-btn')
const pipelineSelect = document.getElementById('pipeline-select');
const workflowDisplay = document.getElementById('workflow-display');

// Initialize the workflow section
function initWorkflowSection() {
    // Populate the pipeline select dropdown
    preLoadedObjects.forEach(pipeline => {
        const option = document.createElement('option');
        option.value = pipeline.id;
        option.textContent = pipeline.name;
        pipelineSelect.appendChild(option);
    });

    // Add event listeners
    workflowBtn.addEventListener('click', showWorkflowSection);
    closeWorkflowBtn.addEventListener('click', hideWorkflowSection);
    pipelineSelect.addEventListener('change', handlePipelineSelection);
    backToGalleryBtn.addEventListener('click', () => {
        hideWorkflowSection();
        showGallery();
    });
    backToComparisonBtn.addEventListener('click', () => {
        hideWorkflowSection();
        showTable();
    });

    // Prevent event propagation to avoid triggering other sections
    workflowSection.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Show workflow section
function showWorkflowSection(e) {
    e.preventDefault();
    e.stopPropagation();
    workflowSection.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Hide other sections if they're visible
    document.getElementById('gallery-section').style.display = 'none';
    document.getElementById('table-section').style.display = 'none';
    document.getElementById('workflow-info-section').style.display = 'none';
}

// Hide workflow section
function hideWorkflowSection(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    workflowSection.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Clear the workflow display
    workflowDisplay.innerHTML = '';
    // Reset the select dropdown
    pipelineSelect.value = '';
}

// Handle pipeline selection
function handlePipelineSelection(event) {
    const selectedPipelineId = event.target.value;
    if (!selectedPipelineId) {
        workflowDisplay.innerHTML = '';
        return;
    }

    // Find the selected pipeline object using ID
    const pipeline = preLoadedObjects.find(p => p.id === selectedPipelineId);
    if (!pipeline) return;

    // Display the workflow
    displayWorkflow(pipeline);
}

// Display the workflow for a pipeline
function displayWorkflow(pipeline) {
    // Create the workflow content
    const workflowContent = document.createElement('div');
    workflowContent.className = 'workflow-content';

    // Construct the workflow image path using pipeline ID
    const workflowImagePath = `assets/${pipeline.id}.png`;

    // Add pipeline name and description
    workflowContent.innerHTML = `
        <div class="workflow-header-content">
            <h3>${pipeline.name}</h3>
            <a href="${pipeline.url}" target="_blank" class="workflow-link">
                <i class="fas fa-external-link-alt"></i>
                Match me with ${pipeline.name}
            </a>
        </div>
        <p class="pipeline-description">${pipeline.details}</p>
        <div class="workflow-diagram">
            <img src="${workflowImagePath}" 
                 alt="${pipeline.name} workflow diagram" 
                 class="workflow-image"
                 onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'no-workflow-message\'><p>No workflow diagram available for this pipeline.</p><p>Please check the pipeline\'s documentation for workflow information.</p></div>';">
        </div>
    `;

    // Clear and update the workflow display
    workflowDisplay.innerHTML = '';
    workflowDisplay.appendChild(workflowContent);
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initWorkflowSection); 