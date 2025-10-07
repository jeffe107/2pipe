// Standalone Tools Selector page overlay
document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('selector-page-section');
    const mount = document.getElementById('selector-page-mount');
    const openBtn = document.getElementById('selector-page-btn');
    const closeBtn = document.getElementById('close-selector-page-btn');

    if (!section || !mount || !openBtn || !closeBtn) return;

    function showSelectorPage() {
        section.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Add brief instructions (placed above the selector), avoid duplicates
        const existingDesc = document.getElementById('selector-page-description');
        if (!existingDesc) {
            const desc = document.createElement('div');
            desc.id = 'selector-page-description';
            desc.className = 'workflow-info-content';
            desc.innerHTML = `
                <h3 style="color: var(--accent-color);">What to do here</h3>
                <p style="font-size: 1.1rem; line-height: 1.6;">
                    Select one or more tools in each step to match pipelines that use them.
                    Click items to toggle multiple selections; matched pipelines will appear below with the specific tools that contributed to the score. 
                    To check the tool and software references, please read the documentation.
                </p>
                <a href="https://www.preprints.org/manuscript/202506.0703/v1" target="_blank" class="workflow-link" style="display:inline-flex; gap:0.5rem; align-items:center; margin-top: 0.5rem;">
                    <i class="fas fa-book"></i> Read documentation
                </a>
            `;
            mount.parentElement.insertBefore(desc, mount);
        }
        // Prefer XLSX dataset if available
        const original = window.MAG_PIPELINES;
        if (typeof window.MAG_PIPELINES_XLSX !== 'undefined') {
            window.MAG_PIPELINES = window.MAG_PIPELINES_XLSX;
        }
        if (typeof window.renderToolsSelectorInto === 'function') {
            mount.innerHTML = '';
            window.renderToolsSelectorInto(mount);
        }
        window.MAG_PIPELINES = original;
    }

    function hideSelectorPage() {
        section.style.display = 'none';
        document.body.style.overflow = 'auto';
        mount.innerHTML = '';
    }

    openBtn.addEventListener('click', showSelectorPage);
    closeBtn.addEventListener('click', hideSelectorPage);
});


