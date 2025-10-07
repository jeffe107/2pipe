// Tools Selector: build dropdowns from MAG_PIPELINES and suggest matching pipelines
(function() {
    if (typeof MAG_PIPELINES === 'undefined') return;

    // Steps and fields mapping to MAG_PIPELINES keys
    // Use the keys present in MAG_pipelines_from_xlsx.js attributes
    const stepDefinitions = [
        { key: 'qc', label: 'Quality Control' },
        { key: 'assembly', label: 'Assembly' },
        { key: 'binning', label: 'Binning' },
        { key: 'qualityAssessment', label: 'Quality Assessment' },
        { key: 'refinement', label: 'Refinement' },
        { key: 'taxonomy', label: 'Taxonomy' },
        { key: 'functionalAnnotation', label: 'Functional Annotation' },
        { key: 'other', label: 'Other' }
    ];

    // Build unique option sets per step by parsing MAG_PIPELINES text values
    function extractOptionsForKey(key) {
        const tokens = new Set();
        MAG_PIPELINES.forEach(p => {
            const arr = p.attributes && Array.isArray(p.attributes[key]) ? p.attributes[key] : [];
            arr.forEach(t => {
                const s = (t || '').toString().trim();
                if (s) tokens.add(s);
            });
        });
        return Array.from(tokens).sort((a, b) => a.localeCompare(b));
    }
    function buildUI(container) {
        container.innerHTML = '';

        const header = document.createElement('div');
        header.className = 'tools-header';
        header.innerHTML = '<h2>Select tools by workflow step</h2>';

        const form = document.createElement('div');
        form.className = 'tools-form';

        const selects = {};
        stepDefinitions.forEach(step => {
            const group = document.createElement('div');
            group.className = 'tools-group';

            const label = document.createElement('label');
            label.textContent = step.label;
            label.setAttribute('for', `tool-${step.key}`);

            const select = document.createElement('select');
            select.id = `tool-${step.key}`;
            select.className = 'tools-select';
            select.multiple = true;
            select.size = 6;

            // Note: multi-select has no explicit placeholder; leaving empty means 'Any'

            extractOptionsForKey(step.key).forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                // Enable multi-select via simple clicks (no Ctrl/Cmd needed)
                option.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    // Preserve scroll position to prevent jump
                    const prevScrollTop = select.scrollTop;
                    option.selected = !option.selected;
                    // Trigger change to recompute matches
                    const evt = new Event('change', { bubbles: true });
                    select.dispatchEvent(evt);
                    // Restore scroll position
                    select.scrollTop = prevScrollTop;
                });
                select.appendChild(option);
            });

            select.addEventListener('change', updateSuggestions);

            group.appendChild(label);
            group.appendChild(select);
            form.appendChild(group);
            selects[step.key] = select;
        });

        const results = document.createElement('div');
        results.id = 'tools-results';
        results.className = 'tools-results';

        container.appendChild(header);
        container.appendChild(form);
        const resultsTitle = document.createElement('h3');
        resultsTitle.className = 'tools-results-title';
        resultsTitle.textContent = 'Matching pipelines for your selection';
        container.appendChild(resultsTitle);
        container.appendChild(results);

        function updateSuggestions() {
            const selections = {};
            stepDefinitions.forEach(step => {
                const sel = selects[step.key];
                const chosen = Array.from(sel.selectedOptions).map(o => o.value).filter(Boolean);
                if (chosen.length > 0) selections[step.key] = chosen.map(v => v.toLowerCase());
            });

            const strictKeys = ['assembly', 'binning'];
            const matches = MAG_PIPELINES.map(p => {
                let score = 0;
                const matchedByStep = {};
                // Build original-casing lookup per step for this pipeline
                const originalByKey = {};
                stepDefinitions.forEach(step => {
                    const arr = (p.attributes && Array.isArray(p.attributes[step.key]) ? p.attributes[step.key] : []);
                    const map = {};
                    arr.forEach(x => {
                        const orig = (x || '').toString();
                        map[orig.toLowerCase()] = orig;
                    });
                    originalByKey[step.key] = map;
                });
                Object.entries(selections).forEach(([key, arr]) => {
                    const fieldArr = (p.attributes && Array.isArray(p.attributes[key]) ? p.attributes[key] : []).map(x => (x || '').toString().toLowerCase());
                    if (strictKeys.includes(key)) {
                        // Require ALL selected tools to be present for these steps
                        const allPresent = arr.every(val => fieldArr.includes(val));
                        if (allPresent) {
                            score += arr.length; // reward matching all selected tools
                            // Map back to original casing
                            const origMatched = arr.map(v => originalByKey[key][v] || v);
                            matchedByStep[key] = origMatched;
                        }
                    } else {
                        // OR logic: count how many selected tokens are present
                        const matched = arr.filter(val => fieldArr.includes(val));
                        if (matched.length > 0) {
                            score += matched.length;
                            const origMatched = matched.map(v => originalByKey[key][v] || v);
                            matchedByStep[key] = origMatched;
                        }
                    }
                });
                return { pipeline: p, score, matchedByStep };
            }).filter(m => m.score > 0);

            matches.sort((a, b) => b.score - a.score);

            // total selected tools across all steps
            const totalSelected = Object.values(selections).reduce((acc, arr) => acc + arr.length, 0);
            renderResults(matches, totalSelected);
        }

        function renderResults(matches, totalCriteria) {
            results.innerHTML = '';

            if (totalCriteria === 0) {
                const info = document.createElement('p');
                info.textContent = 'Select one or more tools per step (Cmd/Ctrl-click) to get matches.';
                results.appendChild(info);
                return;
            }

            if (matches.length === 0) {
                const none = document.createElement('p');
                none.textContent = 'No pipelines match the current selection.';
                results.appendChild(none);
                return;
            }

            const labelByKey = stepDefinitions.reduce((acc, s) => { acc[s.key] = s.label; return acc; }, {});
            matches.slice(0, 5).forEach(m => {
                const card = document.createElement('div');
                card.className = 'tools-recommendation-card';
                const matchedList = Object.entries(m.matchedByStep)
                    .map(([key, arr]) => `<li><strong>${labelByKey[key]}:</strong> ${arr.map(x => x).join(', ')}</li>`)
                    .join('');
                card.innerHTML = `
                    <h3>${m.pipeline.name}</h3>
                    <p>Match Score: ${m.score} / ${totalCriteria}</p>
                    <div class="match-details">
                        <p>Matching tools:</p>
                        <ul>${matchedList}</ul>
                    </div>
                    <a href="#" class="pipeline-link" data-name="${m.pipeline.name}">Match me with ${m.pipeline.name}</a>
                `;
                const link = card.querySelector('.pipeline-link');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const workflowSection = document.getElementById('workflow-section');
                    const pipelineSelect = document.getElementById('pipeline-select');
                    if (workflowSection && pipelineSelect) {
                        document.getElementById('workflow-info-section').style.display = 'none';
                        workflowSection.style.display = 'block';
                        pipelineSelect.value = findPipelineIdByName(m.pipeline.name) || '';
                        const event = new Event('change');
                        pipelineSelect.dispatchEvent(event);
                    }
                });
                results.appendChild(card);
            });
        }

        renderResults([], 0);
    }

    function findPipelineIdByName(name) {
        // Try to map by name from preLoadedObjects when possible
        if (typeof preLoadedObjects !== 'undefined') {
            const p = preLoadedObjects.find(x => x.name.toLowerCase() === name.toLowerCase());
            return p ? p.id : null;
        }
        return null;
    }

    // Expose embed function
    window.renderToolsSelectorInto = function(container) {
        if (!container) return;
        buildUI(container);
    };
})();



