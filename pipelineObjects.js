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
        url: "https://www.biorxiv.org/content/10.1101/2024.09.18.613623v2.full",
        details: "MAG recovery from ancient DNA can be challenging due to DNA intrinsic properties such as degradation, fragmentation, chemical damage, low-abundance and contamination. Nonetheless, a validated pipeline to manage this type of data is proposed by Standeven et al. (2024), where the MAGs are obtained by following the classic steps involving quality check, decontamination, assembly, binning, bin quality assessment and refinement, and taxonomic annotation. The main advantage of this pipeline is the integration of different bin software, and it can also authenticate the sequence provenance by estimating damage authentication of the host DNA (mainly human) via mapDamage2. Despite its validation to recover high-quality MAGs, this pipeline is only proposed and it has not been properly compiled in a single repository or container, and hence users should run the tools manually or leverage any of the other available pipelines in this suite.",
        category: "Special pipelines"
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
        url: "https://anvio.org/help/main/workflows/metagenomics/",
        details: "Anvi’o is a comprehensive modular platform for the analysis and visualization of microbial omics including, but not restricted to, metagenomics, metatranscriptomics and metapangenomics. Anvi’o is developed to be highly customizable through exchangeable programs (tools) that perform specific tasks, empowering the user with a wide range of tools to explore. Being so, a metagenomics workflow is proposed by the developers of the platforms that begins with short-read quality cleaning, proceeds to read assembly to be used for read recruitment (mapping), and finalizes contig annotation (functions, Hidden Markov Models, and taxonomy). Optionally, the user can achieve read taxonomic profiling with KrakenUniq, and more recently binning tools have been made available such as MetaBAT2, CONCOCT, MaxBin2, BinSanity, as well as DASTool as a refinement alternative. Nonetheless, the user must run the analysis manually, requiring them to account with some experience regarding software installation, execution and debugging. Moreover, although Anvi’o is in principle a command line tool, it incorporates a user-friendly graphical interface for data inspection and visualization that is commonly used for contig visualization.",
        category: "Short-read centered pipelines"
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
        url: "https://rhysnewell.github.io/aviary/installation",
        details: "Aviary is a modular, Snakemake-based pipeline, with Conda as package manager, designed for single or hybrid metagenomic assembly and MAG recovery, supporting both short and long-read input sequences. The workflow is distributed in 8 modules following a traditional workflow starting with quality and diversity assessment of the reads, followed by a discriminated assembly according to the type of input, MEGAHIT or metaSPAdes for short reads only or metaFlye in case of long reads solely. For hybrid assembly the process is divided into four stages: polishing with Racon and Pilon, metrics-based filtering, assembly and discard of low-quality bins and re-assembly with Unicycler. The pipeline proceeds with a subsequent assembly evaluation in terms of fragmentation, misassembly detection and diversity quantification, and a complementary module moves forward with a read mapping of the assembly and abundance statistics calculation. To continue with the workflow, the contigs are binned using up to 6 tools (MetaBAT2, Rosella, MetaBAT1, VAMB, MaxBin2 and CONCOCT) and refined afterwards with 5-time loop that includes CheckM2, Rosella Refine and DASTool. The pipeline ends with MAG recovery assessment via CoverM, CheckM2 and SingleM to proceed with MAG annotation through GTDB-Tk2, Prodigal and EggNOG. Variant calling, ANI analysis and genotype recovery with Lorikeet are interesting attributes offered by Aviary as a complement to the traditional genomic feature detection. Aviary’s design presents a series of advantages that include the possibility of running modules, multi-sample handling and scalability across different computational infrastructures.",
        category: "Hybrid pipelines"
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
        url: "https://www.bv-brc.org/docs/tutorial/metagenomic_binning/metagenomic_binning.html",
        details: "BV-BRC (Bacterial and Viral Bioinformatics Resource Center) is web-based platform that supports a broad spectrum of microbial genomics analyses, including genome-resolved metagenomics. This platform offers an intuitive interface to perform tailored quality control, assembly, binning, annotation, and downstream comparative analyses. For MAG building, BV-BRC has developed a specific metagenomic binning service, which offers genome assembly with metaSPAdes and MEGAHIT and a customized approach for genome binning based on kmer distribution and multi-genome functionality. Moreover, BV-BRC leverages PATRIC genomes to create reference bins as a starting point for annotation with RASTtk and/or VIGOR. Regarding technical features, BV-BRC runs entirely on a remote infrastructure, allowing users to execute workflows without local installations or advanced computational setups. Aside from the features already mentioned, customizable analysis jobs, visualization tools and integrated comparative genomics tools are available, making BV-BRC a valuable resource for users seeking an accessible, reproducible, and data-rich environment for metagenomic studies.",
        category: "Web-based pipelines"
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
        url: "https://peerj.com/articles/9762/",
        details: "DATMA (Distributed AuTomatic Metagenomic Assembly and annotation framework) is a pipeline focused on speed and automation, leveraging distributed computing for efficiency. As a starting point, DATMA applies a quality filter with RAPPIFILT (customized tool developed for this pipeline), Trimmomatic and FastQC, and if the input sequences are paired-end, it merges them using FLASH and ForceMerge. Following this procedure, this pipeline identifies and removes 16S rDNA sequences based on RFAM (RNA sequence families), NCBI, RDP (Ribosomal Database Project) and SILVA to cluster the remaining sequences with CLAME. The clusters (or bins in definition of the traditional workflow) generated then are assembled in batches by metaSPAdes, Velvet, and MEGAHIT for a subsequent taxonomic annotation relying on BLAST and Kaiju, as well as ORF prediction with Prodigal and GeneMark. To conclude with the analysis a detailed HTML report is generated with interactive Krona plots for taxonomic visualization; this report integrates the 16S rDNA annotation (RDP Classified) along with the annotated bins. As inferred from the described workflow, DATMA performs an inverted approach to generate bins by first grouping the reads using CLAME, and attempting to assemble only these groups individually afterwards. Further, this pipeline is wrapped by COMP Superscalar which facilitates the development and execution of parallel applications for distributed infrastructures such as clusters, cloud services and containerized platforms.",
        category: "Short-read centered pipelines"
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
        url: "https://onlinelibrary.wiley.com/doi/10.1002/imt2.70001",
        details: "EasyMetagenome integrates a classical workflow starting with short reads to provide a de-replicated (dRep) set of bins and pangenome analysis that relies on an Anvi’o module. The assembly is performed with MEGAHIT, a MetaWRAP module is in charge of the binning task, CheckM2 controls the quality of the bins, and GTDB-Tk2 finalizes the execution by taxonomically annotating them. Notably, this pipeline performs functional annotation (GhostKOALA, eggNOG, dbCAN3) and taxonomy assignment on the contigs after a pre-filtering step that generates a non-redundant gene set. EasyMetagenome uses Conda environments to assure reproducibility, the user can input multi-sample data, although it is not orchestrated by any workflow manager. As special remarks, it carries out a taxonomic profiling (MetaPhlAn, HUMAnN, Kraken2) of the post-filtered (KneadData) reads, and the functional annotation of the gene set is expanded to identify virulence factors (VFDB) and antibiotic resistant genes (CARD).",
        category: "Short-read centered pipelines"
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
        url: "https://github.com/P-kai/EasyNanoMeta",
        details: "EasyNanoMeta is a specialized pipeline designed to process ONT long reads either solely or in combination with short reads (hybrid assembly). This pipeline relies on a dual approach that uses both assembly-based and assembly-free strategies. Particularly, EasyNanoMeta incorporates four assemblers (MetaFlye, OPERA-MS, MetaSPAdes, MetaPlatanus), five binners (SemiBin2, MetaBAT2, MaxBin2, CONCOCT, VAMB) and a polishing tool (NextPolish) to assure the best possible outcome. Additionally, once the bins are obtained, it performs the common tasks such as functional annotation with Prokka, quality control with CheckM2, phylogeny inference with PhyloPhlan and taxonomic classification with GTDB-Tk2. For the assembly-free methodology, EasyNanoMeta provides a full report containing composition, diversity and correlation among the identified species with Kraken2 and Centrifuge. Regarding operational characteristics, this pipeline can be run automatically on a Singularity/Apptainer image that streamlines the setup process and minimizes dependency issues or experienced users can execute individual modules through shell scripts that rely on Conda environments.",
        category: "Long-read focused pipelines"
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
        url: "https://github.com/RogerLab/Eukfinder",
        details: "Eukfinder is a specialized pipeline designed to recover microbial eukaryotic genomes, including both nuclear and mitochondrial DNA. Considering the inherent complexity and underrepresentation of eukaryotic genomes in metagenomics, this tool is composed by two workflows: the first one for Illumina short reads (Eukfinder_short) and another one for assembled contigs or long-read data (Eukfinder_long). In the workflow for short reads, they are first classified into five major taxonomic groups using Centrifuge and PLAST, and afterwards 'Eukaryotic' and 'Unknown' reads are subsequently assembled and reclassified to refine candidate eukaryotic sequences. On the other hand, the long-read version focuses on classifying pre-assembled contigs before proceeding to genome binning and downstream analysis. The binning procedure is common to both approaches and it relies on MyCC output, Centrifuge, and PLAST results in customized and tailored integration of kmer analysis and contigs mapping to eukaryotic genomes. Given its specificity, Eukfinder represents a flexible solution for studying eukaryotic microbial communities in environmental metagenomics.",
        category: "Special pipelines"
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
        url: "https://usegalaxy.org/published/workflow?id=33d90e718ce500ef",
        details: "Galaxy is a web-based platform and open-source project that empowers scientists all over the world to conduct bioinformatics analysis in a user-friendly and intuitive graphical interface that requires no programming skills. Galaxy offers a broad range of tools covering genomics, transcriptomics, metagenomics, among many others, where the user is free to select the software that best suits their needs. In addition, the users can share their workflows in the platform, and therefore users can just follow pre-established methodologies validated by a world-wide community. As a result, there are multiple pipelines designed for MAG reconstruction that feature common tools like MEGAHIT for assembly, MetaBAT2 or MaxBin2 for binning, and Prokka or GTDB-Tk2 for annotation and classification. Also, given Galaxy’s flexibility the traditional workflow can be expanded to include long reads, accomplish read-based taxonomic profiling or detect and classify viral sequences. Being so, Galaxy ensures reproducibility through automatic tracking of parameters and tool versions, and supports HPC and cloud deployment, making it scalable for projects of various sizes. Notwithstanding, the users may experience limitations in performance for large datasets and/or delays in result processing as Galaxy’s community of users grows every day with the subsequent demand for more computational resources.",
        category: "Web-based pipelines"
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
        url: "https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad022/7111624",
        details: "GEN-ERA suite is a collection of Nextflow pipelines aiming at supporting MAG reconstruction and annotation with as many methodologies as possible starting from either short or long reads. Specifically, this toolbox counts with more than 10 workflows specifically designed for tasks ranging from assembly and binning, quality assessment and decontamination, orthologous inference and maximum likelihood phylogenomic analyses, SSU rRNA phylogeny (constrained by ribosomal phylogenomic), Average Nucleotide Identity (ANI) clustering, taxonomic identification and metabolic modelling. Moreover, GEN-ERA incorporates specific tools designed to handle eukaryotic assembly annotation such as BRAKER2 and AMAW. Thus, GEN-ERA suits almost all requirements any user might demand given the variety of goals that can be achieved within a single software suite. From a technical point of view, operational GEN-ERA features, Nextflow-managed and Singularity-executed, ensures portability and reproducibility across environments.",
        category: "Hybrid pipelines"
    },
    {
        id: "pipeline11",
        name: "HiFi-MAG-Pipeline",
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
        url: "https://github.com/PacificBiosciences/pb-metagenomics-tools/blob/master/docs/Tutorial-HiFi-MAG-Pipeline.md",
        details: "Hi-Fi-MAG-Pipeline is a simple yet time-saving pipeline developed and maintained by Pacific Biosciences specially designed to build MAGs from Hi-Fi reads (long PacBio reads). It encompasses different binning tools (MetaBAT2 and SemiBin2) along with DASTool as refinement software; CheckM2 serves a quality control tool, where contigs above 500 kb are kept as single bins if they show a completeness above 93%, otherwise they are sent back to the binning module. This approach enhances the recovery of high-quality and single-contig MAGs, outperforming traditional binning methods. After MAG de-replication, taxonomic annotation is achieved with GTDB-Tk2, and a complete graphical report is compiled automatically. One important caveat about this workflow is represented by its lack of assembly step, and hence the user must prepare the assembly of the PacBio sequences beforehand using tools such as hifiasm in its meta version, metaFlye, OPERA-MS, among others. Hi-Fi-MAG-Pipeline requires Conda as software manager, and it is orchestrated by Snakemake.",
        category: "Long-read focused pipelines"
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
        url: "https://czid.org/",
        details: "IDseq is an open-source, cloud-based platform developed for metagenomic next-generation sequencing (mNGS) analysis. IDseq has a specific scope focused on pathogen detection, antibiotic resistance detection and infection control. IDseq supports short-reads or long reads (ONT) to provide analyses that encompass host read removal, quality control, alignment, and taxonomic classification using a curated reference database based on NCBI nt and nr databases. Although IDseq is not primarily focused on MAG reconstruction, it is highly valuable in the initial stages of metagenomics data analysis projects. As interesting remarks, IDseq’s results are visualized through interactive dashboards that provide taxonomic trees, abundance plots, and detailed sample metrics thanks to its web-based interface that requires minimal bioinformatics expertise. Also, the users can find alternative pipelines for viral consensus genome recovery and antimicrobial resistance gene detection.",
        category: "Web-based pipelines"
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
        url: "https://www.kbase.us/",
        details: "KBase (the Department of Energy Systems Biology Knowledgebase) is a collaborative, web-based platform that enables researchers to perform comprehensive metagenomics analyses through its customized interactive Narrative Interface. This platform allows users to build and share workflows (narratives) for genome assembly, comparative genomics, metagenomics, among others. Specifically, the metagenomics narrative offers running MAG-centered pipeline steps such as quality control, assembly (e.g., metaSPAdes, MEGAHIT), binning (i.e., MetaBAT2), annotation (e.g., RASTtk, DRAM), and metabolic modeling using ModelSEED. KBase platform offers automated data provenance, seamless integration with public databases, and interactive visualizations to interpret MAG quality, taxonomy, and metabolic pathways. The possibility of running analyses using external resources makes KBase a powerful and accessible environment for genome-resolved metagenomics, particularly valuable for users lacking access to HPC systems.",
        category: "Web-based pipelines"
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
        url: "https://journals.asm.org/doi/10.1128/msystems.00432-22",
        details: "MAGNETO is an automated, modularized and scalable pipeline wrapped with Snakemake and executed with Conda. It is focused on allowing the user the selection of different assembly and/or binning strategies, involving several steps from read pre-processing until MAG annotation and gene catalog generation. The Pre-processing module leverages fastp, Bowtie2 and FastQ Screen, whilst the Assembly mode uses Simka and hierarchical agglomerative clustering to cluster the samples if the users pre-defines a co-assembly strategy; the reads are assembled using MEGAHIT. Furthermore, contig abundances are computed by alignment against the raw reads to be bin by MetaBAT2 afterwards. Quality estimation and dereplication are carried out with CheckM v1.0 and dRep, respectively. To end the workflow, a gene catalog is produced for both the contigs and the MAGs by running Prodigal, Linclust and CD-HIT, and the MAGs are annotated with GTDB-Tk2, Mummer and EggNOGmapper. As a special feature, MAGNETO can provide a read-based taxonomy abundance with mOTU profiler. MAGNETO exhibits all the advantages Snakemake wrapping, and executed with Conda, represents such as multi-sample handling, scalability across different computing infrastructures and checkpoint control for workflow restarting.",
        category: "Short-read centered pipelines"
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
        url: "https://academic.oup.com/nar/article/49/21/e126/6382386",
        details: "metaGEM represents a traditional end-to-end pipeline designed to reconstruct MAGs from metagenomics raw reads; however, its main feature relies on an integrated module that provides genome scale metabolic models (GEMs). The workflow starts with the read quality cleaning using fastp for a subsequent assembly with MEGAHIT and a contig coverage estimation with BWA. The bins are then obtained via three different tools (MetaBAT2, MaxBin2 and CONCOCT) along a posterior refining by the metaWRAP refinement module. As a result, the bins or MAGs are used as input for CarveMe (Genome Scale Metabolic Models), and SMETANA is called for metabolic interaction predictions and MEMOTE is in charge of generating quality reports. The resulting GEMs can then be used for various downstream analyses, such as predicting metabolic interactions within the community, simulating growth under different conditions, and identifying key metabolic pathways. The pipeline ends with MAG characterization through Prokka and Roary (functional annotation and pangenome analysis), GRiD (growth rate estimation), GTDB-Tk2 (taxonomic annotation) and BWA (genome abundance). As additional features, metaGEM identifies eukaryotic MAGs via EukRep and evaluates contamination with EukCC. Also, this pipeline produces taxonomic abundance profiles from the filtered reads using mOTUS2. Naturally, this pipeline exhibits the benefits Snakemake orchestration provides.",
        category: "Short-read centered pipelines"
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
        url: "https://joss.theoj.org/papers/10.21105/joss.04851",
        details: "MetaGenePipe is a pipeline developed with Workflow Definition Language (WDL), self-executed within a Singularity container, whose primary goal is performing a contig-based functional and taxonomic analysis from short read sequences. It is composed of 4 subworkflows, where the operation starts with the quality control workflow, the subsequent one assembles the reads with MEGAHIT to map them back against the short reads within the third subworkflow. Meanwhile, the last subworkflow is in charge of gene prediction and functional annotation based on two main strategies: alignment with the Swiss-Prot database and Hidden Markov Models search in KOfam database. Although MetaGenePipe does not include binning software to provide MAGs as main output, its versatility that allows an analysis adapted for eukaryotic and viral analyses with minimal modifications, and its uncommon workflow manager within the pipelines considered in this review, makes MetaGenePipe an interesting alternative for users with advanced computational infrastructures. Additionally, MetaGenePipe is designed to handle a co-assembly strategy in case the user requires this feature.",
        category: "Short-read centered pipelines"
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
        url: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03585-4",
        details: "Metagenome-Atlas is an end-to-end, Snakemake-based and Conda-executed pipeline supporting Illumina short reads and providing a modular workflow. It is divided into four modules, namely Quality Control, Assembly, Genomic Binning and Annotation. The initial module removes host, common contaminants and PCR duplicates, and if necessary, trims low-quality sequences according to user pre-specified parameters. The Assembly module corrects sequence errors based on kmer coverage, merges paired-end sequences, assembles them using MEGAHIT and/or metaSPAdes along with a contig-length filtering. The following module uses MetaBAT2, MaxBin2, and optionally VAMB and SemiBin2 to bin the contigs; CheckM2, BUSCO and GUNC are run to measure the bin quality, as well as DASTool and dRep for bin refinement and dereplication. For the last module, Metagenome-Atlas taxonomically and functionally annotates the MAGs using GTDB-Tk2 and DRAM, respectively, and it finally produces a gene catalog through mapping the predicted coding sequences using EggNOG mapper. Among the main advantages of Metagenome-Atlas, it is possible to describe the possibility of running individual modules and its energetic supporting community and developers. Moreover, the Snakemake wrapper allows for flexibility, multi-sample handling, and adaptability to medium to large projects running on local servers or High-Performance Cluster (HPC) environments.",
        category: "Short-read centered pipelines"
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
        url: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03585-4",
        details: "Metagenomics-Toolkit is a workflow designed to increase scalability of task execution, enabling optimal resource allocation from its machine learning-optimized assembly step. This optimized assembly tailors the peak RAM value requested by a metagenome assembler to match actual requirements, thereby minimizing the dependency on dedicated high-memory hardware. Metagenomics-Toolkit is wrapped by Nextflow and powered with Docker containerization technology, and it can take either short or Oxford Nanopore (ONT) long reads as input. As a result, this pipeline is highly scalable and adaptable across computational infrastructures with a backbone workflow that relies on the traditional MAG-aimed steps such as quality control, assembly, binning, and annotation, plus an aggregation module that captures the output from each sample to “polish” the final MAGs. Regarding special features offered by Metagenomics-Toolkit, it offers plasmid identification based on various tools, the recovery of unassembled microbial community members, and the discovery of microbial interdependencies through a combination of dereplication, co-occurrence, and genome-scale metabolic modeling.",
        category: "Short-read centered pipelines"
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
        url: "https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad055/7233990",
        details: "Metaphor is a classic metagenomics pipeline aiming at MAG reconstruction and annotation wrapped by Snakemake and leveraging Conda as package manager. The pipeline is triggered by the user with a .csv file pointing to the sequence directories and a .yaml file with the pipeline configuration. A quality control will be carried out then with FastQC and fastp, with a posterior assembly with MEGAHIT, contig evaluation with MetaQUAST and mapping against the input sequences using Minimap2 and Samtools; the contigs are binned (VAMB, MetaBAT2, CONCOCT) and refined (DASTool). Metaphor execution finalizes with bin annotation through Prodigal, Diamond, and the NCBI COG database. Complementary to Snakemake orchestration capabilities, Metaphor provides a series of plots depicting runtime and memory with the goal of identifying computational bottlenecks during the analyses.",
        category: "Short-read centered pipelines"
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
        url: "https://www.biorxiv.org/content/10.1101/2024.09.13.612854v1",
        details: "metaWGS is one of the most recently released pipelines whose main differential is related with the possibility to assemble either short reads or long sequences (PacBio). This Nextflow pipeline is built off Singularity with consequent benefits this kind of setup brings. It incorporates a wide variety of tools as it must ensure a proper workflow for both types of sequencing technologies in a traditional end-to-end framework divided into 8 steps. The first step aims at cleaning and performing quality control with proper tools according to the input, while the second step allows the assembly of the sequences using either metaSPAdes/MEGAHIT for short sequences and hifiasm/metaFlye for PacBio reads. Following with the process, this pipeline filters the contigs and performs structural annotation during steps 3 and 4, respectively; step 5 is designed to estimate contig abundance by mapping them against the reads. Afterwards, a complete subworkflow for functional annotation is undergone with EggNOG mapper at its core (step 6), and contig taxonomic affiliation is achieved through home-made scripts (step 7) to conclude with step 8, where the contigs are binned with MaxBin2, MetaBAT2 and CONCOCT. Remarkably, metaWGS utilizes BINETTE, a state-of-the-art binning refinement tool designed to construct high-quality MAGs from the output of multiple binning tools.",
        category: "Long-read focused pipelines"
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
        url: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-018-0541-1",
        details: "MetaWRAP is a popular and customizable pipeline built primarily as a command-line framework with a focus on flexibility and user control. MetaWRAP consists of individual modules that can be run independently or combined into custom workflows. Its core functionalities encompass read QC and cleaning (FastQC, Trim Galore and BMTagger), assembly (MEGAHIT, metaSPAdes, BWA and MetaQUAST), and a binning suite that incorporates MetaBAT2, MaxBin2, and CONCOCT. MetaWRAP also includes a native refinement module that produces hybrid bin sets to explore over the different variants of each bin (original and hybridized bin sets) to determine the “best bin” according to the user pre-specified quality values based on completeness and contamination (CheckM v1.0). This module is frequently executed in independent metagenomics analysis, and even some pipelines described in this review incorporate it within their workflows. If decided by the user, MetaWRAP offers the possibility of bin re-assembling guided by their previous versions, improving the overall bin quality. For MAG taxonomic and functional analysis, MetaWRAP relies on Prokka and Taxator-tk (combined with NCBI databases), and it provides visualization modules for summarizing results. Analogous to MAGNETO, MetaWRAP can produce read-based taxonomic profiles in parallel. Although MetaWRAP does not integrate full pipeline automation, its high modularity and straightforward design have promoted a wide supporting community. Nonetheless, at the moment of writing this report, MetaWRAP is not maintained by the developers, with the subsequent lack of tool updates.",
        category: "Short-read centered pipelines"
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
        url: "https://docs.mgnify.org/src/docs/analysis.html",
        details: "MGnify is a web-based platform hosted by EMBL-EBI with an automatized service for submitting and annotating microbiome-derived sequence data. It counts with a standardized pipeline that receives raw reads to perform functional and taxonomic annotation with an extensive series of tools encompassing mOTUs2, InterProScan, KEGG annotation (hmmscan), EggNOG mapper and/or antiSMASH. Optionally, MGnify offers the possibility for read assembly through metaSPAdes with a prior contamination removal to continue with the annotation. In the recent years, MGnify has evolved to accept and process long reads from PacBio and ONT with the pipeline MGnify-lr that carries out read pre-filtering, assembly with Flye and re-mapping against the initial sequences. Furthermore, users can contribute to the resource MGnify Genomes which stores a genome catalogues each user can create with their own MAGs. Once the MAGs are submitted to this space, they are automatically analyzed with a pipeline that establishes overall quality and annotates them. Given that MGnify is a service controlled by EMBL-EBI, the user is only requested to submit the data and make it publicly available before the analysis to ENA. As a result, MGnify is a powerful computational resource and user-friendly as the user interacts with the platform to upload the data through its web interface, taking the burden off the user. However, MGnify's reliance on predefined workflows may limit flexibility for users seeking to customize specific steps or parameters in the analysis, while at the same time heavy use by multiple users may delay result delivery.",
        category: "Web-based pipelines"
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
        url: "https://bokulich-lab.github.io/moshpit-docs/intro.html",
        details: "According to its documentation, MOSHPIT (MOdular SHotgun metagenome Pipelines with Integrated provenance Tracking) is a toolkit of plugins for whole metagenome assembly, annotation, and analysis built on the microbiome multi-omics data science framework QIIME2. MOSHPIT enables flexible, modular, fully reproducible workflows for read-based or assembly-based analysis of metagenome data. The core components of MOSHPIT include q2-assembly, which provides functionalities for genome assembly and quality control, and q2-annotate, which supports contig binning, taxonomic classification, and functional annotation. Additional plugins, such as q2-viromics and q2-amrfinderplus, extend capabilities to viral sequence detection and antimicrobial resistance gene annotation, respectively. In technical terms, MOSHPIT must be run locally or on an HPC environment with the possibility to execute the processes in parallel by the explicit declaration of partitions, a native QIIME2 functionality. Further, the entire QIIME2 ecosystem relies on Conda, and hence this a sine-qua-non requisite to perform MAG reconstruction with MOSHPIT.",
        category: "Short-read centered pipelines"
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
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008716",
        details: "MUFFIN is a reproducible pipeline built with Nextflow designed for hybrid assembly by integrating short-read (Illumina) and long-read (nanopore) sequencing data. MUFFIN begins its workflow with a quality control of the reads (fastp and Filtlong) to progress through hybrid assembly (metaSPAdes or metaFlye with polishing) and differential binning (CONCOCT, MetaBAT2, and MaxBin2). After bin refining with the MetaWRAP refinement module, a hybrid reassembly is pursued with Unicycler. The pipeline ends with bin classification through CheckM v1.1 and sourmash (combined with GTDB), and with bin annotation with EggNOG and a KEGG parser, providing high-quality, annotated MAGs and insights into the metabolic potential of the microbial community. Optionally, the user can provide metatranscriptomics data to perform a de novo transcript assembly (Trinity), quantification (Salmon) and annotation (EggNOG). Additionally, given its modularity design, the workflow can start as well with user-provided bins, differential reads or only RNA-seq data. MUFFIN can be executed with either Conda or Docker, and its native Nextflow features confer to it the possibility to restart the pipeline in case of failing, run on different computing infrastructures, multi-sample handling, among others.",
        category: "Hybrid pipelines"
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
        url: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-022-01415-8",
        details: "NanoPhase is a pipeline that enables building high-quality MAGs from ONT long reads, optionally enhanced with short read-based MAG polishing. The backbone of the pipeline is represented by an assembly with metaFlye followed by contig binning with MetaBAT2 and MaxBin2, and bin refinement with a MetaWRAP module. To estimate abundance and coverage, the contigs are mapped against the reads, and several polishing rounds with Racon and medaka, complete the workflow to generate high-accuracy final bins; If the user decides to include short reads in the analysis, these are used for polishing with Pilon. Complementary, MetaQuast and CheckM v1.0 are in charge of MAG quality control, IDEEL evaluates the fraction of predicted full-length proteins in each MAG, full-length proteins are detected via alignment with UniProtKB, and Prokka serves as functional annotation software. Remarkably, NanoPhase allows prophage and active prophage identification within the reconstructed MAGs with VIBRANT and PropagAtE. Among pipeline technical specifications, this pipeline requires Conda as package manager and it offers parallelized execution with GNU Parallel to speed up the analysis.",
        category: "Long-read focused pipelines"
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
        url: "https://nf-co.re/mag",
        details: "nf-core/mag is a Nextflow pipeline developed following the nf-core guidelines that ensures robustness and reproducibility. It supports both short-read and hybrid sequences, and it leverages a modular design, containerization (Docker, Singularity, among others) and package managers (Conda) to confer portability across different computing environments, including HPC and cloud systems. Beyond these important features, as part of the workflow orchestration, nf-core/mag can handle multi-sample input, it can be restarted if it is interrupted at any point thanks to its native checkpoint control and different assembly/binning modes can be selected. This pipeline encompasses tools for quality control of the reads (fastp), host removal (Bowtie2) and adapter trimming (AdapterRemoval), as well as two assemblers (MEGAHIT and metaSPAdes). In addition, it offers three binning software options (MetaBAT2, MaxBin2 and CONCOCT) along with an optional refinement tool (DASTool). nf-core/mag checks assembly and bin quality through several tools that include CheckM2, MetaQUAST, BUSCO and GUNC, and for genome annotation, it uses GTDB-Tk2 or CAT (taxonomic) and Prokka or MetaEuk (functional). As special features, this pipeline can carry out a taxonomic annotation of the sequences (Kraken2 and Centrifuge), validates the presence of typical ancient DNA damages (PyDamage), attempts MAG domain classification with Tiara and identifies viruses after assembly with geNomad. After workflow execution, nf-core/mag generates detailed multi-sample summaries through MultiQC, and it creates HTML reports to track resource usage. Finally, the nf-core framework is actively maintained and updated as it relies on a numerous and enthusiastic developing community.",
        category: "Hybrid pipelines"
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
        url: "https://f1000research.com/articles/12-1205/v1",
        details: "Ngs-preprocess, MpGAP and Bacannot are a series of Nextflow-based and container-powered pipelines designed to achieve a wide variety of specific tasks. ngs-preprocess performs several quality-control steps required for Next-Generation Sequencing (NGS) data assessment, while MPGAP supports de novo genome assembly from Illumina, PacBio, and ONT reads, enabling short-read, long-read, and hybrid assemblies using tools like metaSPAdes, metaFlye, Canu, and Unicycler, followed by polishing and quality assessment. Meanwhile, Bacannot provides an annotation workflow that incorporates gene prediction, rRNA detection, sequence typing, KEGG-based metabolic reconstruction, and secondary metabolite identification, integrating tools such as Prokka, Bakta, Barrnap, MLST, KofamScan, KEGGDecoder, and antiSMASH. As an additional analytical procedure, Bacannot incorporates additional support for methylation analysis via Nanopolish. Noticeably, this set of pipelines do not include at any point neither contig binning nor bin quality assessment; however, the smooth interconnection among the pipelines makes them an interesting option for metagenome assembly and annotation, boosted by the native benefits conferred by Nextflow and container technology.",
        category: "Hybrid pipelines"
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
        url: "https://f1000research.com/articles/11-1522",
        details: "SnakeMAGs is a simple yet useful pipeline that as its name indicates is controlled by a Snakemake wrapper with Conda as software administrator. It integrates basic modules starting with quality control with Illumina-utils and Trimmomatic, and if required, host removal with Bowtie2. Afterwards, the reads are assembled through MEGAHIT, the contigs are binned by MetaBAT2, a quality assessment is carried out with CheckM v1.1 and GUNC, MAG abundances are obtained using CoverM, and finally the taxonomic classification is performed using GTDB-Tk2. Similar to others pipelines governed by Snakemake, SnakeMAGs eases automation, reproducibility, scalability and workflow management.",
        category: "Short-read centered pipelines"
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
        url: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2018.03349/full",
        details: "SqueezeMeta is a fully automatic pipeline written in Perl scripts that relies on Conda for software execution. As special features, this pipeline can handle short and long reads (ONT and Hi-Fi) in both single or hybrid approaches, supports for de-novo metatranscriptome assembly and hybrid metagenomics/metatranscriptomics analysis, carries out taxonomic annotation of unassembled reads, and empowers the user with a GUI application for downstream analysis. Also, SqueezeMeta’s flexibility enables different assembly modes such as sequential (samples assembled individually), co-assembly (samples assembled ensemble), merged (samples assembled individually with a posterior pooling) and seqmerge (similar to merged with a guided pooling based on assembly similarity). This pipeline follows the traditional workflow by applying quality filtering and trimming with Trimmomatic, then the reads are assembled by MEGAHIT and SPAdes (rnaSPAdes, Canu and metaFlye are run if transcriptomics or long read data are provided) to be binned afterwards with MaxBin2, MetaBAT2 and CONCOCT; DASTool is in charge of bin refinement. MAG Quality checks are established through CheckM2, and optionally taxonomic classification is achieved by GTDB-Tk2. To complement MAG annotation with KEGG and MetaCyc, SqueezeMeta analyzes the assembly by performing a homology searching against taxonomic and functional databases, an Hmmer search against Pfam database, and an estimation of taxa and function abundances. An important remark of this pipeline is its numerous and helpful developing and maintaining community.",
        category: "Hybrid pipelines"
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
        url: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-019-0658-x",
        details: "Sunbeam is a modular pipeline orchestrated by Snakemake with Conda as dependency manager; this configuration makes Sunbeam analysis reliable, reproducible and scalable. The main feature Sunbeam depicts is its modularized and extensible design that allows users to build off the core functionality. The execution backbone of Sunbeam is represented by an initial quality control that encloses adapter trimming, host read removal and low-complexity filtering (Trimmomatic, FastQC, BWA and Komplexity), followed the assembly of reads into contigs with MEGAHIT along with their corresponding annotation with Prodigal, BLAST and Diamond (with nucleotide or protein databases). As complementary procedures, Sunbeam maps the reads to reference genomes (user pre-specified) and delivers a taxonomic assignment of the clean reads using Kraken v1.0. Its modularization and ready-to-use templates to create new modules have enabled the development of additional extensions for assigning metagenomic reads to a full bacterial phylogeny, single genome assembly, among others.",
        category: "Short-read centered pipelines"
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
        url: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-022-04973-8",
        details: "VEBA (Viral Eukaryotic Bacterial Archaeal) is a Conda-executed pipeline designed that enables the recovery and classification of genomes from all domains of life including archaeas, prokaryotes, microeukaryotes, and viruses. It starts with a common short read-preprocessing and assembly from which the process is bifurcated for prokaryotic and viral binning; unbinned contigs from the viral module are reincorporated into the prokaryotic contig set. Residual contigs from the prokaryotic module are then considered for eukaryotic MAG generation to proceed with the annotation and classification covering the genomes obtained in each module. Hence, several databases are considered at this step such as KOfam, Pfam and NCBI non-redundant. Also, a joint phylogeny is obtained based on MAG-gene models and lineage marker detection. An interesting approach VEBA follows is represented by the module coverage.py that collects all the unbinned contigs, from viral, eukaryotic and prokaryotic steps, to pursue a pseudo-coassembly, where iteratively the reference fasta (built from the contigs) and the sorted BAM files used as a final pass through prokaryotic and eukaryotic binning modules. Notably, it automates the detection of candidate phyla radiation (CPR) bacteria and integrates a consensus microeukaryotic database to optimize gene modeling and taxonomic classification.",
        category: "Short-read centered pipelines"
    }

]; 