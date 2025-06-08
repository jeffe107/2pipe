document.addEventListener('DOMContentLoaded', function() {
    const workflowBtn = document.getElementById('general-workflow-btn');
    const workflowSection = document.getElementById('workflow-info-section');
    const closeWorkflowBtn = document.getElementById('close-workflow-info-btn');

    if (!workflowBtn || !workflowSection || !closeWorkflowBtn) {
        console.error('Required elements not found');
        return;
    }

    // Workflow content template
    const workflowContent = `
        <div class="workflow-page">
            <div class="workflow-header">
                <h1>General Metagenomics Workflow</h1>
                <p>Understanding the fundamental steps in metagenomic analysis and how they contribute to microbial community characterization</p>
            </div>

            <img src="images/workflow_2Pipe.png" alt="General Metagenomics Workflow" class="workflow-image">

            <div class="workflow-steps">
                <div class="workflow-step">
                    <h3><i class="fas fa-vial"></i> Sample Collection & Preparation</h3>
                    <p>Collection of environmental or clinical samples, followed by DNA extraction and library preparation for sequencing.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-dna"></i> Sequencing</h3>
                    <p>Generation of raw sequencing data using high-throughput sequencing technologies (e.g., Illumina, Nanopore).</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-filter"></i> Quality Control & Preprocessing</h3>
                    <p>Filtering of low-quality reads, removal of adapters, and trimming to ensure high-quality input data.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-puzzle-piece"></i> Assembly</h3>
                    <p>De novo assembly of sequencing reads into contigs or reconstruction of individual genomes.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-search"></i> Binning & Classification</h3>
                    <p>Grouping of contigs into genome bins and taxonomic classification of the assembled sequences.</p>
                </div>

                <div class="workflow-step">
                    <h3><i class="fas fa-chart-bar"></i> Functional Analysis</h3>
                    <p>Annotation of genes, prediction of metabolic pathways, and analysis of functional potential.</p>
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