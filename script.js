// Questions data
const questions = [
    {
        text: "1. Do you want to assemble only short reads?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "2. Do you want to assemble only Hi-Fi (PacBio) reads?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "3. Do you want to assemble only Oxford Nanopore (ONT) reads?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "4. Do you want to perform hybrid assembly?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "5. Do you want to handle multi-sample?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "6. Do you need a pipeline with the ability to perform co-assembly/co-binning?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "7. Are you looking for a pipeline with Graphical User Interface (GUI)?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "8. Do you need a pipeline with native Cloud computing features?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "9. Which workflow manager do you prefer?",
        options: [
            "Nextflow",
            "Snakemake",
            "COMP Superscalar",
            "Workflow Definition Language (WDL)",
            "None"
        ]
    },
    {
        text: "10. Do you need a pipeline with bin refinement?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "11. Do you want to run the pipeline with Conda?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "12. Do you want to run the pipeline with Docker?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "13. Do you want to run the pipeline with Singularity?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "14. Do you want to use external computational resources?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "15. Do you want to perform read-based taxonomic profiling?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "16. Do you want to obtain genome-scale metabolic models?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "17. Are you working with ancient DNA?",
        options: [
            "Yes",
            "No"
        ]
    },
    {
        text: "18. Do you need eukaryotic/viral MAGs?",
        options: [
            "Yes",
            "No"
        ]
    }
];

// Weight configuration for attributes
const attributeWeights = {
    shortReads: 1,
    PacBio: 5,           // High importance
    OxfordNanopore: 5,   // High importance
    hybridAssembly: 1,
    multiSample: 1,
    coAssemblyCoBinning: 1,
    GUI: 5,              // High importance
    Cloud: 1,
    workflowManager: 2,
    binRefinement: 1,
    Conda: 1,
    Docker: 1,
    Singularity: 1,
    externalComputationalResources: 5,
    taxonomicProfiling: 1,
    metabolicModeling: 1,
    ancientDNA: 1,
    eukaryoticViralMAGs: 1
};

// State management
let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill(null);

// DOM elements
const introSection = document.getElementById('intro-section');
const questionSection = document.getElementById('question-section');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backToIntroBtn = document.getElementById('back-to-intro-btn');
const progressBar = document.querySelector('.progress-bar');
const questionContainer = document.querySelector('.question-container');

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon
function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Functions
function startQuestionnaire() {
    introSection.style.display = 'none';
    questionSection.style.display = 'block';
    displayQuestion(currentQuestionIndex);
    updateProgressBar();
}

function displayQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.text;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create new options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (answers[index] === i) optionElement.classList.add('selected');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? 'Finish' : 'Next';
    nextBtn.disabled = answers[index] === null;
    
    // Show/hide back button based on question index
    backToIntroBtn.style.display = index === 0 ? 'block' : 'none';
}

function selectOption(optionIndex) {
    // Remove previous selection
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add new selection
    options[optionIndex].classList.add('selected');
    answers[currentQuestionIndex] = optionIndex;
    
    // Enable next button if an option is selected
    nextBtn.disabled = false;
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        fadeTransition(() => {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
        });
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        fadeTransition(() => {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
        });
    } else {
        // Handle form completion
        handleCompletion();
    }
}

function fadeTransition(callback) {
    questionContainer.classList.add('fade-out');
    setTimeout(() => {
        callback();
        questionContainer.classList.remove('fade-out');
    }, 300);
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function getUserAnswers() {
    return {
        shortReads: questions[0].options[answers[0]],
        PacBio: questions[1].options[answers[1]],
        OxfordNanopore: questions[2].options[answers[2]],
        hybridAssembly: questions[3].options[answers[3]],
        multiSample: questions[4].options[answers[4]],
        coAssemblyCoBinning: questions[5].options[answers[5]],
        GUI: questions[6].options[answers[6]],
        Cloud: questions[7].options[answers[7]],
        workflowManager: questions[8].options[answers[8]],
        binRefinement: questions[9].options[answers[9]],
        Conda: questions[10].options[answers[10]],
        Docker: questions[11].options[answers[11]],
        Singularity: questions[12].options[answers[12]],
        externalComputationalResources: questions[13].options[answers[13]],
        taxonomicProfiling: questions[14].options[answers[14]],
        metabolicModeling: questions[15].options[answers[15]],
        ancientDNA: questions[16].options[answers[16]],
        eukaryoticViralMAGs: questions[17].options[answers[17]]
    };
}

function findBestMatch(userAnswers) {
    let matches = [];

    preLoadedObjects.forEach(obj => {
        let score = 0;
        let matchDetails = [];

        // Helper function to check attribute match
        const checkAttribute = (attr, weight) => {
            const userValue = userAnswers[attr];
            const objValues = obj.attributes[attr];
            
            // For Yes/No questions
            if (userValue === "Yes" || userValue === "No") {
                if (objValues && objValues.includes(userValue)) {
                    if (userValue === "Yes") {
                        score += weight;
                        matchDetails.push(attr);
                    }
                    return true;
                }
            } 
            // For other types of questions (like workflow manager)
            else {
                if (objValues && objValues.includes(userValue)) {
                    score += weight;
                    matchDetails.push(attr);
                    return true;
                }
            }
            return false;
        };

        // Check each attribute with its weight
        checkAttribute('shortReads', attributeWeights.shortReads);
        checkAttribute('PacBio', attributeWeights.PacBio);
        checkAttribute('OxfordNanopore', attributeWeights.OxfordNanopore);
        checkAttribute('hybridAssembly', attributeWeights.hybridAssembly);
        checkAttribute('multiSample', attributeWeights.multiSample);
        checkAttribute('coAssemblyCoBinning', attributeWeights.coAssemblyCoBinning);
        checkAttribute('GUI', attributeWeights.GUI);
        checkAttribute('Cloud', attributeWeights.Cloud);
        checkAttribute('workflowManager', attributeWeights.workflowManager);
        checkAttribute('binRefinement', attributeWeights.binRefinement);
        checkAttribute('Conda', attributeWeights.Conda);
        checkAttribute('Docker', attributeWeights.Docker);
        checkAttribute('Singularity', attributeWeights.Singularity);
        checkAttribute('externalComputationalResources', attributeWeights.externalComputationalResources);
        checkAttribute('taxonomicProfiling', attributeWeights.taxonomicProfiling);
        checkAttribute('metabolicModeling', attributeWeights.metabolicModeling);
        checkAttribute('ancientDNA', attributeWeights.ancientDNA);
        checkAttribute('eukaryoticViralMAGs', attributeWeights.eukaryoticViralMAGs);

        matches.push({
            object: obj,
            score: score,
            matchDetails: matchDetails
        });
    });

    // Sort matches by score in descending order
    matches.sort((a, b) => b.score - a.score);

    // Log all matches for debugging
    console.log('All matches before sorting:', matches.map(m => ({
        name: m.object.name,
        score: m.score,
        matches: m.matchDetails.length
    })));

    // Ensure we have at least two matches
    if (matches.length < 2) {
        return {
            bestMatch: matches[0],
            secondBest: matches[0]
        };
    }

    // Log the top two matches for debugging
    console.log('Top two matches:', {
        first: {
            name: matches[0].object.name,
            score: matches[0].score,
            matches: matches[0].matchDetails.length
        },
        second: {
            name: matches[1].object.name,
            score: matches[1].score,
            matches: matches[1].matchDetails.length
        }
    });

    return {
        bestMatch: matches[0],
        secondBest: matches[1]
    };
}

// Feature labels mapping
const featureLabels = {
    shortReads: "Short Reads Assembly",
    PacBio: "Hi-Fi (PacBio) Reads Assembly",
    OxfordNanopore: "Oxford Nanopore Reads Assembly",
    hybridAssembly: "Hybrid Assembly",
    multiSample: "Multi-Sample Support",
    coAssemblyCoBinning: "Co-Assembly/Co-Binning",
    GUI: "Graphical User Interface (GUI)",
    Cloud: "Cloud Computing Support",
    workflowManager: "Workflow Manager",
    binRefinement: "Bin Refinement",
    Conda: "Conda Support",
    Docker: "Docker Support",
    Singularity: "Singularity Support",
    externalComputationalResources: "External Computational Resources",
    taxonomicProfiling: "Taxonomic Profiling",
    metabolicModeling: "Metabolic Modeling",
    ancientDNA: "Ancient DNA Support",
    eukaryoticViralMAGs: "Eukaryotic/Viral MAGs"
};

function handleCompletion() {
    const userAnswers = getUserAnswers();
    const matchResult = findBestMatch(userAnswers);
    
    // Clear the container and show results
    questionContainer.innerHTML = `
        <div class="question-content">
            <h2>Recommended Metagenomic Pipelines</h2>
            <div class="recommendation-card">
                <h3>${matchResult.bestMatch.object.name}</h3>
                <p>${matchResult.bestMatch.object.description}</p>
                <div class="match-details">
                    <p>Match Score: ${matchResult.bestMatch.score}</p>
                    <p>Matching Features:</p>
                    <ul>
                        ${matchResult.bestMatch.matchDetails.map(detail => `<li>${featureLabels[detail]}</li>`).join('')}
                    </ul>
                </div>
                <a href="${matchResult.bestMatch.object.url}" target="_blank" class="pipeline-link">Match me with ${matchResult.bestMatch.object.name}</a>
            </div>
            <div class="recommendation-card secondary">
                <h3>${matchResult.secondBest.object.name}</h3>
                <p>${matchResult.secondBest.object.description}</p>
                <div class="match-details">
                    <p>Match Score: ${matchResult.secondBest.score}</p>
                    <p>Matching Features:</p>
                    <ul>
                        ${matchResult.secondBest.matchDetails.map(detail => `<li>${featureLabels[detail]}</li>`).join('')}
                    </ul>
                </div>
                <a href="${matchResult.secondBest.object.url}" target="_blank" class="pipeline-link">Match me with ${matchResult.secondBest.object.name}</a>
            </div>
            <div class="restart-container">
                <button id="restart-btn" class="restart-btn">Start Over</button>
            </div>
        </div>
    `;

    // Add event listener for restart button
    document.getElementById('restart-btn').addEventListener('click', restartQuestionnaire);
    
    // Log the results for debugging
    console.log('User Answers:', userAnswers);
    console.log('Best Matches:', matchResult);
    console.log('Best Match Score:', matchResult.bestMatch.score);
    console.log('Second Best Score:', matchResult.secondBest.score);
    console.log('Best Match Details:', matchResult.bestMatch.matchDetails);
    console.log('Second Best Details:', matchResult.secondBest.matchDetails);
}

function restartQuestionnaire() {
    // Simply reload the page to start fresh
    window.location.reload();
}

function backToIntroduction() {
    // Reset the questionnaire state
    currentQuestionIndex = 0;
    answers.fill(null);
    
    // Hide question section and show intro section
    questionSection.style.display = 'none';
    introSection.style.display = 'block';
    
    // Reset progress bar
    progressBar.style.width = '0%';
}

// Event listeners
startBtn.addEventListener('click', startQuestionnaire);
prevBtn.addEventListener('click', showPreviousQuestion);
nextBtn.addEventListener('click', showNextQuestion);
backToIntroBtn.addEventListener('click', backToIntroduction); 