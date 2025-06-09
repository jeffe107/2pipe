document.addEventListener('DOMContentLoaded', function() {
    const workflowBtn = document.getElementById('general-workflow-btn');
    const workflowSection = document.getElementById('workflow-info-section');
    const closeWorkflowBtn = document.getElementById('close-workflow-info-btn');

    if (!workflowBtn || !workflowSection || !closeWorkflowBtn) {
        console.error('Required workflow elements not found');
        return;
    }

    // Initialize back to top button
    const backToTopBtn = initializeBackToTopButton(workflowSection);

    // Function to handle scroll event
    function handleWorkflowScroll() {
        if (workflowSection.scrollTop > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }

    // Function to scroll to top
    function scrollToTop() {
        workflowSection.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add scroll event listener to workflow section
    workflowSection.addEventListener('scroll', handleWorkflowScroll);

    // Add click event listener to back to top button
    backToTopBtn.addEventListener('click', scrollToTop);

    // Workflow content template
    const workflowContent = `
        <div class="workflow-page">
            <div class="workflow-header">
                <h1>General MAG reconstruction process</h1>
                <p>The traditional computational workflow to build and annotate Metagenome-Assembled Genomes involves several steps; the figure below introduces the general scheme to recover High-Quality MAGs.</p>
            </div>

            <img src="images/workflow_2Pipe.png" alt="General Metagenomics Workflow" class="workflow-image">

            <div class="workflow-steps">
                <div class="workflow-step">
                    <h3><i class="fas fa-filter"></i> Quality Control & Preprocessing</h3>
                    <p class= "text-workflow">Filtering of low-quality reads, removal of adapters, and trimming to ensure high-quality input data.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-puzzle-piece"></i> Assembly</h3>
                    <p class= "text-workflow">The cleaned reads are extended (assembled) to create contiguous and longer sequences, also called contigs.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-search"></i> Binning</h3>
                    <p class= "text-workflow">The contigs are then grouped into bins that potentially represent individual genomes based on genomic features.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-search-plus"></i> Quality assessment</h3>
                    <p class= "text-workflow">The bins are evaluated for common metrics such as completeness and contamination to determine if they are MAGs.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-dna"></i> Taxonomic classification</h3>
                    <p class= "text-workflow">The identity of the MAGs is established by their taxonomic classification using reference databases.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-chart-bar"></i> Functional Analysis</h3>
                    <p class= "text-workflow">Annotation of genes, prediction of metabolic pathways, and analysis of functional potential.</p>
                </div>
            </div>
        </div>
    `;

    // Load workflow content when the button is clicked
    workflowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const container = document.querySelector('.workflow-info-container');
        if (container) {
            container.innerHTML = workflowContent;
        }
        workflowSection.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close workflow section
    closeWorkflowBtn.addEventListener('click', function() {
        workflowSection.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}); 