// Questions data
const questions = [
    {
        text: "1. Which types of reads do you want to assemble? (Select all that apply)",
        options: [
            "Short reads",
            "Hi-Fi (PacBio) reads",
            "Oxford Nanopore (ONT) reads",
            "Hybrid",
            "I don't know/It doesn't matter"
        ],
        multiSelect: true
    },
    {
        text: "2. Do you want to handle multi-sample?",
        options: [
            "Yes",
            "No",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "3. Do you need a pipeline with the ability to perform co-assembly/co-binning?",
        options: [
            "Yes",
            "No",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "4. Are you looking for a pipeline with Graphical User Interface (GUI)?",
        options: [
            "Yes",
            "No",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "5. Do you need a pipeline with native Cloud computing features (i.e. AWS, Azure)?",
        options: [
            "Yes",
            "No",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "6. Which workflow manager do you prefer?",
        options: [
            "Nextflow",
            "Snakemake",
            "COMP Superscalar",
            "Workflow Definition Language (WDL)",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "7. Do you need a pipeline with bin refinement?",
        options: [
            "Yes",
            "No",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "8. Which execution options do you need? (Select all that apply)",
        options: [
            "Conda",
            "Docker",
            "Singularity",
            "Other",
            "I don't know/It doesn't matter"
        ],
        multiSelect: true
    },
    {
        text: "9. Do you want to use external computational resources?",
        options: [
            "Yes",
            "No",
            "I don't know/It doesn't matter"
        ]
    },
    {
        text: "10. Which special options do you need? (Select all that apply)",
        options: [
            "Taxonomic profiling",
            "Metabolic modeling",
            "Ancient DNA",
            "Eukaryotic MAGs",
            "Viral MAGs",
            "Inverted assembly/binning",
            "Adaptable resource allocation",
            "RNA-seq transcriptome analysis",
            "Plasmid assembly",
            "Genotype recovery",
            "I don't know/It doesn't matter"
        ],
        multiSelect: true
    }
];

// Weight configuration for attributes
const attributeWeights = {
    readTypes: 2,           // High importance for read type matches
    multiSample: 1,
    coAssemblyCoBinning: 1,
    GUI: 3,                 // High importance
    Cloud: 1,
    workflowManager: 1,
    binRefinement: 1,
    executionOptions: 1,    // Each matching option will add 1 point
    externalComputationalResources: 3,
    specialOptions: 1      // Each matching option will add 1 point
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
        
        // Handle both single and multi-select cases
        if (question.multiSelect) {
            if (answers[index] && answers[index].includes(i)) {
                optionElement.classList.add('selected');
            }
        } else {
            if (answers[index] === i) {
                optionElement.classList.add('selected');
            }
        }
        
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? 'Finish' : 'Next';
    
    // For multi-select, next button is always enabled
    if (!question.multiSelect) {
        nextBtn.disabled = answers[index] === null;
    }
    
    // Show/hide back button based on question index
    backToIntroBtn.style.display = index === 0 ? 'block' : 'none';
}

function selectOption(optionIndex) {
    const question = questions[currentQuestionIndex];
    
    if (question.multiSelect) {
        // For multi-select questions, toggle the selection
        const options = optionsContainer.querySelectorAll('.option');
        const isSelected = options[optionIndex].classList.contains('selected');
        
        if (isSelected) {
            options[optionIndex].classList.remove('selected');
            // Remove from answers array if it exists
            if (answers[currentQuestionIndex]) {
                answers[currentQuestionIndex] = answers[currentQuestionIndex].filter(i => i !== optionIndex);
            }
        } else {
            options[optionIndex].classList.add('selected');
            // Initialize array if it doesn't exist
            if (!answers[currentQuestionIndex]) {
                answers[currentQuestionIndex] = [];
            }
            answers[currentQuestionIndex].push(optionIndex);
        }
        
        // For multi-select, next button is always enabled
        nextBtn.disabled = false;
    } else {
        // Original single-select logic
        const options = optionsContainer.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[optionIndex].classList.add('selected');
        answers[currentQuestionIndex] = optionIndex;
        nextBtn.disabled = false;
    }
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
    const readTypeAnswers = answers[0] ? answers[0].map(index => questions[0].options[index]) : [];
    return {
        readTypes: readTypeAnswers,
        multiSample: questions[1].options[answers[1]],
        coAssemblyCoBinning: questions[2].options[answers[2]],
        GUI: questions[3].options[answers[3]],
        Cloud: questions[4].options[answers[4]],
        workflowManager: questions[5].options[answers[5]],
        binRefinement: questions[6].options[answers[6]],
        executionOptions: answers[7] ? answers[7].map(index => questions[7].options[index]) : [],
        externalComputationalResources: questions[8].options[answers[8]],
        specialOptions: answers[9] ? answers[9].map(index => questions[9].options[index]) : []
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
            
            // Special handling for multi-select options (readTypes, executionOptions, and specialOptions)
            if (attr === 'readTypes' || attr === 'executionOptions' || attr === 'specialOptions') {
                if (userValue && objValues) {
                    // Skip "Don't know/Doesn't matter" option in scoring
                    const validUserValues = userValue.filter(v => v !== "Don't know/Doesn't matter");
                    if (validUserValues.length === 0) return true;

                    // Count how many user selections match the pipeline's options
                    const matchingOptions = validUserValues.filter(option => objValues.includes(option));

                    if (matchingOptions.length > 0) {
                        // Add 1 point for each matching option
                        score += matchingOptions.length * weight;
                        matchDetails.push(`${attr}: ${matchingOptions.join(', ')}`);
                    }
                }
                return true;
            }
            
            // For Yes/No/Don't know questions
            if (userValue === "Yes" || userValue === "No" || userValue === "Don't know/Doesn't matter") {
                if (userValue === "Don't know/Doesn't matter") {
                    // Don't add or subtract points for "Don't know/Doesn't matter"
                    return true;
                }
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
        checkAttribute('readTypes', attributeWeights.readTypes);
        checkAttribute('multiSample', attributeWeights.multiSample);
        checkAttribute('coAssemblyCoBinning', attributeWeights.coAssemblyCoBinning);
        checkAttribute('GUI', attributeWeights.GUI);
        checkAttribute('Cloud', attributeWeights.Cloud);
        checkAttribute('workflowManager', attributeWeights.workflowManager);
        checkAttribute('binRefinement', attributeWeights.binRefinement);
        checkAttribute('executionOptions', attributeWeights.executionOptions);
        checkAttribute('externalComputationalResources', attributeWeights.externalComputationalResources);
        checkAttribute('specialOptions', attributeWeights.specialOptions);

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
    readTypes: "Read Types",
    multiSample: "Multi-Sample Support",
    coAssemblyCoBinning: "Co-Assembly/Co-Binning",
    GUI: "Graphical User Interface (GUI)",
    Cloud: "Cloud Computing Support",
    workflowManager: "Workflow Manager",
    binRefinement: "Bin Refinement",
    executionOptions: "Execution Options",
    externalComputationalResources: "External Computational Resources",
    specialOptions: "Special Options"
};

function handleCompletion() {
    const userAnswers = getUserAnswers();
    const matchResult = findBestMatch(userAnswers);
    
    // Helper function to format match details
    const formatMatchDetails = (details) => {
        return details.map(detail => {
            if (detail.startsWith('specialOptions:')) {
                // Extract just the matching options from the specialOptions string
                const options = detail.replace('specialOptions: ', '');
                return `Special Options: ${options}`;
            }
            if (detail.startsWith('executionOptions:')) {
                // Extract just the matching options from the executionOptions string
                const options = detail.replace('executionOptions: ', '');
                return `Execution Options: ${options}`;
            }
            if (detail.startsWith('readTypes:')) {
                // Extract just the matching options from the readTypes string
                const options = detail.replace('readTypes: ', '');
                return `Read Types: ${options}`;
            }
            return featureLabels[detail] || detail;
        });
    };
    
    // Clear the container and show results
    questionContainer.innerHTML = `
        <div class="question-content">
            <h2>Recommended pipelines for MAG reconstruction</h2>
            <div class="recommendation-card">
                <h3>${matchResult.bestMatch.object.name}</h3>
                <p>${matchResult.bestMatch.object.description}</p>
                <div class="match-details">
                    <p>Match Score: ${matchResult.bestMatch.score}</p>
                    <p>Matching Features:</p>
                    <ul>
                        ${formatMatchDetails(matchResult.bestMatch.matchDetails).map(detail => `<li>${detail}</li>`).join('')}
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
                        ${formatMatchDetails(matchResult.secondBest.matchDetails).map(detail => `<li>${detail}</li>`).join('')}
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