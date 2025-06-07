# 2Pipe: It starts with a question

<p align="center">
    <img src="images/2Pipe.png" alt="2Pipe" width="25%">
</p>

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15608773.svg)](https://doi.org/10.5281/zenodo.15608773)

Welcome to the 2Pipe! This application helps researchers find the most suitable pipeline for MAG reconstruction according to their needs through an interactive questionnaire. The application also includes a page with detailed descriptions for each workflow, a pipeline gallery and a comparison table.

## 🤝 Adding a New Pipeline

🗃️ You can request to add your pipeline through this [form](https://form.jotform.com/jeffe10789/2pipe-form) or follow the instructions below to do it with a pull request. 

### 🔄 Contribution Workflow

1. **Fork the Repository**:
   - Click the "Fork" button in the top-right corner of the repository
   - This creates your own copy of the repository under your GitHub account

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/2Pipe.git
   cd 2Pipe
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
   - Image format: PNG
   - Recommended size: 800x600 pixels
   - Naming convention: `pipelineN.png` (use lowercase)
   - Example: `pipeline32.png`

### 📋 Pipeline Object Template

```javascript
{
        id: "pipeline32",
        name: "my-pipeline",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes/No"],
            coAssemblyCoBinning: ["Yes/No"],
            GUI: ["Yes/No"],
            Cloud: ["Yes/No"],
            workflowManager: ["Nextflow/Snakemake..."],
            binRefinement: ["Yes/No"],
            externalComputationalResources: ["Yes/No"],
            executionOptions: ["Docker/Singularity/Conda..."],
            specialOptions: []
        },
        description: "This brief description...",
        url: "https://mypipeline.com",
        details: "This detail description of the workflow...",
        category: "Select the appropiate category..."
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

#### Numbering your pipeline

Before submitting your work, please check the current number of pipelines in the "Pipeline Gallery" or "Compare Pipelines" section. This number should be included in your submission to ensure you're referencing the correct pipeline version. The pipeline numbers are displayed in the format "PipelineX" where X is the current pipeline number.

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

## Citation

If you find 2Pipe useful, please cite our paper (Upcoming 🚀) or share this tool through platforms such as X and LinkedIn.