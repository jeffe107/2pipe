// Lightweight metrics registry. Update this file monthly via a small script hitting GitHub APIs.
// Map pipeline 'name' (as in preLoadedObjects) to { repo: 'owner/name', lastCommit: 'YYYY-MM-DD', clones: number }
// If a pipeline lacks GitHub repo or metrics, omit it.

    // Example entries (fill with real data later):
    // "nf-core/mag": { repo: "nf-core/mag", lastCommit: "2025-09-01", clones: 12345 },
    // "MUFFIN": { repo: "BigDataBiology/MUFFIN", lastCommit: "2025-08-22", clones: 987 },

window.PIPELINE_GITHUB_METRICS = {
    // Example entries (fill with real data later):
    // "nf-core/mag": { repo: "nf-core/mag", lastCommit: "2025-09-01", clones: 12345 },
    // "MUFFIN": { repo: "BigDataBiology/MUFFIN", lastCommit: "2025-08-22", clones: 987 },
};


// --- GitHub Metrics Fetcher ---
// Usage: Call fetchGithubMetricsForPipelines(pipelineList) with an array of pipeline objects
// Each pipeline object should have a 'name' and 'repo' property
//
// To use a GitHub token securely:
// 1. Create a file named 'config.js' in this directory with the following content:
//    window.GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE';
// 2. Add 'config.js' to your .gitignore so it is never pushed to GitHub.
// 3. The app will use window.GITHUB_TOKEN if present.

// Try to load token from config.js (should be loaded before this script)
const GITHUB_TOKEN = window.GITHUB_TOKEN || '';

async function fetchGithubMetrics(repo) {
    const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${GITHUB_TOKEN}`
    };
    // Get last commit date
    const commitsUrl = `https://api.github.com/repos/${repo}/commits?per_page=1`;
    // Get clone count (traffic/clones)
    const clonesUrl = `https://api.github.com/repos/${repo}/traffic/clones`;
    let lastCommit = null;
    let clones = null;
    try {
        const commitsResp = await fetch(commitsUrl, { headers });
        if (commitsResp.ok) {
            const commitsData = await commitsResp.json();
            if (commitsData.length > 0) {
                lastCommit = commitsData[0].commit.committer.date.split('T')[0];
            }
        }
        const clonesResp = await fetch(clonesUrl, { headers });
        if (clonesResp.ok) {
            const clonesData = await clonesResp.json();
            clones = clonesData.count;
        }
    } catch (err) {
        console.error('Error fetching metrics for', repo, err);
    }
    return { lastCommit, clones };
}

// Example usage: update metrics for all pipelines
async function fetchGithubMetricsForPipelines(pipelineList) {
    for (const pipeline of pipelineList) {
        if (!pipeline.repo) continue;
        const metrics = await fetchGithubMetrics(pipeline.repo);
        window.PIPELINE_GITHUB_METRICS[pipeline.name] = {
            repo: pipeline.repo,
            lastCommit: metrics.lastCommit,
            clones: metrics.clones
        };
    }
    // Optionally, trigger UI update here
}

// To use:
// fetchGithubMetricsForPipelines([
//   { name: 'nf-core/mag', repo: 'nf-core/mag' },
//   { name: 'MUFFIN', repo: 'BigDataBiology/MUFFIN' }
// ]);


