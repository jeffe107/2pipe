// Pre-loaded objects with their attributes
const preLoadedObjects = [
    {
        id: "pipeline1",
        name: "ancient DNA",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: [],
            specialOptions: ["Ancient DNA"]
        },
        description: "Pipeline tailored for reconstructing MAGs from ancient metagenomic DNA. It accounts for DNA damage, fragmentation, and contamination, enabling reliable recovery and authentication of ancient microbial genomes. Optimized for degraded samples, it supports damage profiling and taxonomic validation, making it ideal for paleogenomic microbiome studies.",
        url: "https://www.biorxiv.org/content/10.1101/2024.09.18.613623v2.full"
    },
    {
        id: "pipeline2",
        name: "Anvi'o",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["Yes"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Eukaryotic MAGs", "Viral MAGs"]
        },
        description: "Anvi'o is an advanced platform for metagenomic data analysis and MAG refinement, offering interactive tools for the manual curation, visualization, and annotation of genome bins. While it relies on external tools for initial processing, anvi'o excels at refining MAGs, exploring coverage and composition, and generating rich, interactive visualizations. It is ideal for users seeking high-resolution insights and customizable analysis beyond automated pipelines.",
        url: "https://anvio.org/help/main/workflows/metagenomics/"
    },
    {
        id: "pipeline3",
        name: "Aviary",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Genotype recovery"]
        },
        description: "Aviary is an end to end genome-centric metagenomics workflow. Novel and established methods are used assemble long read, short read or hybrid sequence datasets. Resulting contigs are binned using a large suite of primary metagenomic binners (including Rosella) and ensemble binning. Finalized bins are also assessed for quality using CheckM, and assigned taxonomic ranks using GTDB-tk.",
        url: "https://rhysnewell.github.io/aviary/installation"
    },
    {
        id: "pipeline4",
        name: "BV-BRC",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["Yes"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["No"],
            externalComputationalResources: ["Yes"],
            executionOptions: [],
            specialOptions: ["Taxonomic profiling", "Viral MAGs"]
        },
        description: "BV-BRC offers a user-friendly, web-based service for metagenomic binning and MAG reconstruction, enabling researchers to process raw reads through quality control, assembly, binning, and annotation. Designed for accessibility, it supports multiple binning tools and provides taxonomic and functional insights via an intuitive interface, without requiring advanced computational infrastructure.",
        url: "https://www.bv-brc.org/docs/tutorial/metagenomic_binning/metagenomic_binning.html"
    },
    {
        id: "pipeline5",
        name: "DATMA",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: ["COMP Superscalar"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: [],
            specialOptions: ["Inverted assembly/binning"]
        },
        description: "DATMA (Distributed AuTomatic Metagenomic Assembly and annotation framework) is an automated and comprehensive bioinformatics pipeline designed for rapid analysis of metagenomic data, leveraging distributed computing for efficiency. It processes raw sequencing reads through quality control, 16S rRNA removal and classification, read binning using CLAME, de novo assembly with MEGAHIT.",
        url: "https://peerj.com/articles/9762/"
    },
    {
        id: "pipeline6",
        name: "EasyMetagenome",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "EasyMetagenome is a web-based pipeline for automated metagenomic analysis and MAG reconstruction, designed for ease of use without requiring coding skills. It performs quality control, assembly, binning, and annotation through an intuitive interface, making it accessible to non-specialists while supporting high-throughput, reproducible workflows for microbial community analysis.",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/imt2.70001"
    },
    {
        id: "pipeline7",
        name: "EasyNanoMeta",
        attributes: {
            readTypes: ["Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda", "Singularity"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "EasyNanoMeta is a pipeline designed for Nanopore long-read metagenomic analysis, facilitating both assembly-based and assembly-free strategies. It encompasses steps from quality control and host sequence removal to assembly, polishing, binning, and annotation, supporting hybrid assemblies with short reads. EasyNanoMeta is containerized via Singularity, ensuring reproducibility and ease of deployment across diverse computing environments.",
        url: "https://github.com/P-kai/EasyNanoMeta"
    },
    {
        id: "pipeline8",
        name: "Eukfinder",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Eukaryotic MAGs"]
        },
        description: "Eukfinder is a specialized bioinformatics pipeline designed to recover microbial eukaryotic genomes, including both nuclear and mitochondrial DNA, from whole-genome shotgun (WGS) metagenomic datasets. Recognizing the complexity and underrepresentation of eukaryotic genomes in metagenomics, Eukfinder offers two tailored workflows: one for Illumina short reads (Eukfinder_short) and another for assembled contigs or long-read data (Eukfinder_long).",
        url: "https://github.com/RogerLab/Eukfinder"
    },
    {
        id: "pipeline9",
        name: "Galaxy",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["No"],
            GUI: ["Yes"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["Yes"],
            executionOptions: [],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "Galaxy offers a flexible, web-based environment for running customizable metagenomics workflows, including pipelines for MAG reconstruction. Users can perform quality control, assembly, binning, and annotation using integrated tools such as MEGAHIT, MetaBAT2, and Prokka. With a graphical interface and built-in resource management, Galaxy enables accessible, reproducible analyses without coding.",
        url: "https://usegalaxy.org/published/workflow?id=33d90e718ce500ef"
    },
    {
        id: "pipeline10",
        name: "GEN-ERA",
        attributes: {
            readTypes: ["Short reads", "Oxford Nanopore (ONT) reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Nextflow"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Singularity"],
            specialOptions: ["Metabolic modeling"]
        },
        description: "GEN-ERA Toolbox is a comprehensive suite of reproducible workflows tailored for microbial genomics and metagenomics. It encompasses pipelines for genome assembly, binning, quality assessment, and taxonomic annotation.",
        url: "https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad022/7111624"
    },
    {
        id: "pipeline11",
        name: "HiFi-MAG",
        attributes: {
            readTypes: ["Hi-Fi (PacBio) reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: []
        },
        description: "HiFi-MAG-Pipeline is a Snakemake-based workflow developed by PacBio for reconstructing high-quality MAGs from HiFi long-read metagenomic assemblies. It employs a completeness-aware strategy to prioritize long, near-complete contigs, integrates binning tools like MetaBAT2 and SemiBin2, and performs quality assessment with CheckM2, facilitating the recovery of complete, circular MAGs.",
        url: "https://github.com/PacificBiosciences/pb-metagenomics-tools/blob/master/docs/Tutorial-HiFi-MAG-Pipeline.md"
    },
    {
        id: "pipeline12",
        name: "IDseq",
        attributes: {
            readTypes: ["Short reads", "Oxford Nanopore (ONT) reads"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["No"],
            GUI: ["Yes"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["No"],
            externalComputationalResources: ["Yes"],
            executionOptions: [],
            specialOptions: ["Viral MAGs"]
        },
        description: "IDseq is an open-source platform developed for metagenomic next-generation sequencing (mNGS) analysis. IDseq has a specific scope focused on pathogen detection, antibiotic resistance detection and infection control.",
        url: "https://czid.org/"
    },
    {
        id: "pipeline13",
        name: "KBase",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["Yes"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["Yes"],
            executionOptions: [],
            specialOptions: ["Taxonomic profiling", "Metabolic modeling"]
        },
        description: "KBase (The Department of Energy Systems Biology Knowledgebase) is a collaborative, web-based platform that enables researchers to perform comprehensive metagenomics analyses through its interactive Narrative Interface. Users can build reproducible workflows for quality control, assembly (e.g., metaSPAdes, MEGAHIT), binning (e.g., MetaBAT2), annotation (e.g., RASTtk, DRAM), and metabolic modeling using ModelSEED.",
        url: "https://www.kbase.us/"
    },
    {
        id: "pipeline14",
        name: "MAGNETO",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "MAGNETO is an automated workflow dedicated to MAG reconstruction, which includes a fully-automated coassembly step informed by optimal clustering of metagenomic distances, and implements complementary genome binning strategies, for improving MAG recovery.",
        url: "https://journals.asm.org/doi/10.1128/msystems.00432-22"
    },
    {
        id: "pipeline15",
        name: "metaGEM",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Metabolic modeling", "Eukaryotic MAGs"]
        },
        description: "metaGEM pipeline takes metagenome-assembled genomes (MAGs) as input and aims to generate genome-scale metabolic models (GEMs) for each reconstructed genome. It typically involves steps such as gene prediction on the MAGs, followed by functional annotation of the predicted genes using databases like KEGG, MetaCyc, and EggNOG.",
        url: "https://academic.oup.com/nar/article/49/21/e126/6382386"
    },
    {
        id: "pipeline16",
        name: "MetaGenePipe",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Workflow Definition Language (WDL)"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Singularity"],
            specialOptions: []
        },
        description: "MetaGenePipe is a portable, scalable pipeline for functional and taxonomic analysis of metagenomic contigs. Written in WDL and containerized with Singularity, it supports both co-assembly and single-sample workflows. The pipeline integrates tools for assembly, gene prediction, and annotation, facilitating reproducible characterization of prokaryotic communities from shotgun metagenomic data.",
        url: "https://joss.theoj.org/papers/10.21105/joss.04851"
    },
    {
        id: "pipeline17",
        name: "Metagenome-Atlas",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: []
        },
        description: "Metagenome-Atlas is an end-to-end, Snakemake-based pipeline designed for the reconstruction and annotation of MAGs from metagenomic data. It supports Illumina short reads and provides modular workflows covering all major steps.",
        url: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03585-4"
    },
    {
        id: "pipeline18",
        name: "Metagenomics-Toolkit",
        attributes: {
            readTypes: ["Short reads", "Oxford Nanopore (ONT) reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Nextflow"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Plasmid assembly", "Metabolic modeling", "Adaptable resource allocation"]
        },
        description: "Metagenome-Atlas is an end-to-end, Snakemake-based pipeline designed for the reconstruction and annotation of MAGs from metagenomic data. It supports Illumina short reads and provides modular workflows covering all major steps.",
        url: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03585-4"
    },
    {
        id: "pipeline19",
        name: "Metaphor",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: []
        },
        description: "Metaphor is a bioinformatics pipeline designed for the comprehensive analysis of metagenomic data, emphasizing functional annotation and metabolic pathway reconstruction. It processes raw sequencing reads through quality control, assembly, and gene prediction.",
        url: "https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad055/7233990"
    },
    {
        id: "pipeline20",
        name: "metaWGS",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Nextflow"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Singularity"],
            specialOptions: []
        },
        description: "metaWGS is a bioinformatics pipeline designed for the analysis of whole-genome shotgun (WGS) metagenomic data, focusing on microbial community profiling and functional analysis. It typically encompasses steps for quality control of raw reads, assembly of metagenomic sequences, gene prediction on the assembled contigs, taxonomic classification of both reads and contigs, and functional annotation of the predicted genes.",
        url: "https://www.biorxiv.org/content/10.1101/2024.09.13.612854v1"
    },
    {
        id: "pipeline21",
        name: "MetaWRAP",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda", "Docker"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "MetaWRAP is a versatile and modular pipeline tailored for metagenomic data analysis and MAG recovery, with strong support for Illumina short-read data. Built primarily as a command-line framework with a focus on flexibility and user control, MetaWRAP consists of individual modules that can be run independently or combined into custom workflows.",
        url: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-018-0541-1"
    },
    {
        id: "pipeline22",
        name: "MGnify",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["Yes"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["No"],
            externalComputationalResources: ["Yes"],
            executionOptions: [],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "MGnify provides a web-based pipeline for metagenomic assembly and binning, enabling users to analyze raw sequencing reads through quality control, assembly, binning, and annotation. The platform supports user-submitted data and offers an intuitive interface, making it accessible for researchers without extensive computational resources.",
        url: "https://docs.mgnify.org/src/docs/analysis.html"
    },
    {
        id: "pipeline23",
        name: "MOSHPIT",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "MOSHPIT (MOdular SHotgun metagenome Pipelines with Integrated provenance Tracking) is a toolkit of plugins for whole metagenome assembly, annotation, and analysis built on the microbiome multi-omics data science framework QIIME 2. MOSHPIT enables flexible, modular, fully reproducible workflows for read-based or assembly-based analysis of metagenome data.",
        url: "https://bokulich-lab.github.io/moshpit-docs/intro.html"
    },
    {
        id: "pipeline24",
        name: "MUFFIN",
        attributes: {
            readTypes: ["Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Nextflow"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda", "Docker", "Singularity"],
            specialOptions: ["RNA-seq transcriptome analysis"]
        },
        description: "MUFFIN is a reproducible and user-friendly metagenomic pipeline, built with Nextflow, that excels in hybrid assembly by integrating both short-read (Illumina) and long-read (nanopore) sequencing data. The pipeline progresses through assembly and binning, employing differential coverage binning to improve the quality and completeness of metagenome-assembled genomes (MAGs).",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008716"
    },
    {
        id: "pipeline25",
        name: "NanoPhase",
        attributes: {
            readTypes: ["Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["No"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: []
        },
        description: "NanoPhase is a pipeline designed for reconstructing high-quality MAGs from complex metagenomes using Nanopore long reads or hybrid sequencing strategies. It integrates assembly, binning, polishing, and annotation steps, facilitating the recovery of complete genomes and mobile genetic elements from diverse microbial communities.",
        url: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-022-01415-8"
    },
    {
        id: "pipeline26",
        name: "nf-core/mag",
        attributes: {
            readTypes: ["Short reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Nextflow"],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda", "Docker", "Singularity", "Other"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "nf-core/mag is a robust and reproducible pipeline developed within the nf-core framework for the assembly and binning of metagenomes, supporting both short-read and hybrid data. Built using Nextflow, it leverages modular design and containerization (Docker/Singularity), ensuring portability across different computing environments, including HPC and cloud systems.",
        url: "https://nf-co.re/mag"
    },
    {
        id: "pipeline27",
        name: "ngs-preprocess-MpGAp-Bacannot",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Nextflow"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: []
        },
        description: "These pipelines consist of three parts: quality control, de novo genome assembly, and bacterial genome annotation. In particular, the genome annotation pipeline provides a comprehensive overview of the genome, including standard gene prediction and functional inference, as well as predictions relevant to clinical applications.",
        url: "https://f1000research.com/articles/12-1205/v1"
    },
    {
        id: "pipeline28",
        name: "SnakeMAGs",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["Yes"],
            workflowManager: ["Snakemake"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: []
        },
        description: "SnakeMAGs is a Snakemake-powered, fully automated pipeline designed for the end-to-end reconstruction and annotation of MAGs from metagenomic datasets, with native support for short-read Illumina data. SnakeMAGs emphasizes reproducibility, scalability, and transparency, offering out-of-the-box compatibility with HPC systems and Conda environments.",
        url: "https://f1000research.com/articles/11-1522"
    },
    {
        id: "pipeline29",
        name: "SqueezeMeta",
        attributes: {
            readTypes: ["Short reads", "Hi-Fi (PacBio) reads", "Oxford Nanopore (ONT) reads", "Hybrid"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["Yes"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Taxonomic profiling", "RNA-seq transcriptome analysis"]
        },
        description: "SqueezeMeta is a comprehensive and user-friendly bioinformatics pipeline designed for the assembly, annotation, and analysis of metagenomic and metatranscriptomic datasets. It streamlines the entire process, starting from raw reads and progressing through quality control, assembly (using multiple assemblers), gene prediction, taxonomic and functional annotation.",
        url: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2018.03349/full"
    },
    {
        id: "pipeline30",
        name: "Sunbeam",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["No"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: ["Snakemake"],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda", "Docker"],
            specialOptions: ["Taxonomic profiling"]
        },
        description: "Sunbeam is a modular and extensible bioinformatics pipeline built using Snakemake for the analysis of metagenomic sequencing experiments. It automates various steps, starting from raw reads and including quality control (adapter trimming, host read removal, quality filtering), taxonomic assignment of reads (using Kraken), de novo assembly of reads into contigs (using Megahit), and contig annotation (using BLAST and Diamond).",
        url: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-019-0658-x"
    },
    {
        id: "pipeline31",
        name: "VEBA",
        attributes: {
            readTypes: ["Short reads"],
            multiSample: ["Yes"],
            coAssemblyCoBinning: ["Yes"],
            GUI: ["No"],
            Cloud: ["No"],
            workflowManager: [],
            binRefinement: ["No"],
            externalComputationalResources: ["No"],
            executionOptions: ["Conda"],
            specialOptions: ["Eukaryotic MAGs", "Viral MAGs"]
        },
        description: "VEBA is a modular, end-to-end metagenomics pipeline designed to recover and analyze genomes from prokaryotic, microeukaryotic, and viral organisms. It employs an iterative binning strategy and supports both single- and multi-sample workflows, facilitating comprehensive genome recovery across diverse microbial communities. VEBA integrates quality assessment, taxonomic classification, and dereplication, providing a unified framework for genome-resolved metagenomic analyses.",
        url: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-022-04973-8"
    }

]; 