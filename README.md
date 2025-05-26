# 🧬 2Pipe: It starts with a question

Welcome to the 2Pipe! This application helps researchers find the perfect metagenomic pipeline for their needs through an interactive questionnaire, pipeline gallery, and comparison table.

## 🤝 Contributing a New Pipeline

### 🔄 Contribution Workflow

1. **Fork the Repository**:
   - Click the "Fork" button in the top-right corner of the repository
   - This creates your own copy of the repository under your GitHub account

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/metagenomic-pipeline-recommender.git
   cd metagenomic-pipeline-recommender
   ```

3. **Create a New Branch**:
   ```bash
   git checkout -b add-pipeline-YOUR-PIPELINE-NAME
   ```

4. **Make Your Changes** (see details below)

5. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Add new pipeline: YOUR-PIPELINE-NAME"
   git push origin add-pipeline-YOUR-PIPELINE-NAME
   ```

6. **Create Pull Request**:
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill in the pull request template
   - Submit the pull request

### 🖼️ Required Files

1. **Pipeline Object**: Add your pipeline details to `pipelineObjects.js`
2. **Workflow Image**: Add your pipeline's workflow diagram to the `assets/` directory
   - Image format: PNG or JPG
   - Recommended size: 800x600 pixels
   - Naming convention: `pipelineN.png` (use lowercase)
   - Example: `pipeline31.png`

### 📋 Pipeline Object Template

```javascript
{
    id: "pipelineN"
    name: "Your Pipeline Name",
    attributes: {
        shortReads: ["Yes/No"],
        PacBio: ["Yes/No"],
        OxfordNanopore: ["Yes/No"],
        hybridAssembly: ["Yes/No"],
        multiSample: ["Yes/No"],
        coAssemblyCoBinning: ["Yes/No"],
        GUI: ["Yes/No"],
        Cloud: ["Yes/No"],
        workflowManager: ["Yes/No"],
        binRefinement: ["Yes/No"],
        Conda: ["Yes/No"],
        Docker: ["Yes/No"],
        Singularity: ["Yes/No"],
        externalComputationalResources: ["Yes/No"],
        taxonomicProfiling: ["Yes/No"],
        metabolicModeling: ["Yes/No"],
        ancientDNA: ["Yes/No"],
        eukaryoticViralMAGs: ["Yes/No"]
    },
    url: "https://github.com/your-pipeline-repo",
    description: "A clear, concise description of your pipeline..."
}
```

### 📝 Step-by-Step Guide

1. **Set Up Your Development Environment**:
   - Fork and clone the repository (see Contribution Workflow above)
   - Create a new branch for your pipeline
   - Make sure you can run the application locally

2. **Prepare Your Files**:
   - Create your pipeline workflow diagram
   - Save it in the `assets/` directory
   - Follow the naming convention: `pipelineN.png`

3. **Add Pipeline Object**:
   - Open `pipelineObjects.js`
   - Add your pipeline object to the `preLoadedObjects` array
   - Include the `workflowImage` property pointing to your image
   - Ensure all attributes are properly set

4. **Test Locally**:
   - Run the application on your machine
   - Complete all testing steps (see Testing Your Addition below)
   - Fix any issues you find

5. **Submit Your Changes**:
   - Commit your changes with a clear message
   - Push to your fork
   - Create a pull request
   - Wait for review and feedback

6. **Verify Integration**:
   Your pipeline will automatically appear in:
   - 📊 **Questionnaire Results**: When users answer questions matching your pipeline's attributes
   - 🖼️ **Pipeline Gallery**: With your workflow diagram and description
   - 📋 **Comparison Table**: In the interactive comparison table

### ⚠️ Important Notes

- All attributes must be arrays containing exactly one value
- Valid values for Yes/No questions: `["Yes"]` or `["No"]`
- The `workflowImage` path must be relative to the root directory
- Keep descriptions clear and concise (2-3 sentences recommended)
- Ensure your workflow diagram is clear and readable at the recommended size

### ✅ Example Pipeline Object

```javascript
{
    id: "pipeline31"
    name: "Metagenome-Atlas",
    attributes: {
        shortReads: ["Yes"],
        PacBio: ["No"],
        OxfordNanopore: ["No"],
        hybridAssembly: ["No"],
        multiSample: ["Yes"],
        coAssemblyCoBinning: ["Yes"],
        GUI: ["No"],
        Cloud: ["Yes"],
        workflowManager: ["Yes"],
        binRefinement: ["Yes"],
        Conda: ["Yes"],
        Docker: ["Yes"],
        Singularity: ["Yes"],
        externalComputationalResources: ["No"],
        taxonomicProfiling: ["Yes"],
        metabolicModeling: ["No"],
        ancientDNA: ["No"],
        eukaryoticViralMAGs: ["Yes"]
    },
    url: "https://github.com/metagenome-atlas/metagenome-atlas",
    description: "A Snakemake-based pipeline for metagenomic analysis. It performs assembly, binning, and annotation of metagenomic data, with a focus on reproducibility and ease of use."
}
```

### 🧪 Testing Your Addition

1. **Image Testing**:
   - Verify the workflow image appears in the pipeline gallery
   - Check that the image is clear and properly sized
   - Ensure the image loads correctly in different browsers

2. **Pipeline Object Testing**:
   - Complete the questionnaire with answers matching your pipeline
   - Verify your pipeline appears in the results
   - Check the comparison table for your pipeline
   - Verify all attributes display correctly
   - Test the pipeline gallery entry

3. **Integration Testing**:
   - Test the questionnaire with various answer combinations
   - Verify your pipeline's score calculation
   - Check the comparison table filtering
   - Test the pipeline gallery navigation

### 🆘 Need Help?

If you need assistance or have questions about:
- Setting up your development environment
- Forking and creating pull requests
- Creating workflow diagrams
- Adding pipeline objects
- Testing your addition
- Understanding the scoring system
- Troubleshooting integration issues

Please:
1. Check the existing documentation
2. Look at previous pull requests for examples
3. Open an issue in the repository
4. Contact the maintainers

### 🎯 Best Practices

1. **Workflow Diagrams**:
   - Use clear, professional diagrams
   - Include key steps and data flow
   - Use consistent colors and symbols
   - Keep text readable at the recommended size
   - Use standard bioinformatics workflow symbols

2. **Pipeline Descriptions**:
   - Start with the main purpose
   - Highlight key features
   - Mention target users
   - Keep it concise but informative
   - Use clear, technical language

3. **Attribute Selection**:
   - Be accurate and honest
   - Consider edge cases
   - Document any assumptions
   - Keep up to date with pipeline changes
   - Test all features before marking as "Yes"

Remember: Your pipeline's information helps researchers make informed decisions. Accuracy and clarity are crucial! 🎯 