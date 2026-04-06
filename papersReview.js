const PAPERS_REVIEW = [
{
id: "paper1",
name: "Tutorial: assessing metagenomics software with the CAMI benchmarking toolkit",
abstract: "Computational methods are key in microbiome research, and obtaining a quantitative and unbiased performance estimate is important for method developers and applied researchers. For meaningful comparisons between methods, to identify best practices and common use cases, and to reduce overhead in benchmarking, it is necessary to have standardized datasets, procedures and metrics for evaluation. In this tutorial, we describe emerging standards in computational meta-omics benchmarking derived and agreed upon by a larger community of researchers. Specifically, we outline recent efforts by the Critical Assessment of Metagenome Interpretation (CAMI) initiative, which supplies method developers and applied researchers with exhaustive quantitative data about software performance in realistic scenarios and organizes community-driven benchmarking challenges. We explain the most relevant evaluation metrics for assessing metagenome assembly, binning and profiling results, and provide step-by-step instructions on how to generate them. The instructions use simulated mouse gut metagenome data released in preparation for the second round of CAMI challenges and showcase the use of a repository of tool results for CAMI datasets. This tutorial will serve as a reference for the community and facilitate informative and reproducible benchmarking in microbiome research.",
link: "https://www.nature.com/articles/s41596-020-00480-3",
category: "Assembler benchmarks"
},
{
id: "paper2",
name: "Benchmarking short-, long- and hybrid-read assemblers for metagenome sequencing of complex microbial communities",
abstract: "Metagenome community analyses, driven by the continued development in sequencing technology, is rapidly providing insights in many aspects of microbiology and becoming a cornerstone tool. Illumina, Oxford Nanopore Technologies (ONT) and Pacific Biosciences (PacBio) are the leading technologies, each with their own advantages and drawbacks. Illumina provides accurate reads at a low cost, but their length is too short to close bacterial genomes. Long reads overcome this limitation, but these technologies produce reads with lower accuracy (ONT) or with lower throughput (PacBio high-fidelity reads). In a critical first analysis step, reads are assembled to reconstruct genomes or individual genes within the community. However, to date, the performance of existing assemblers has never been challenged with a complex mock metagenome. Here, we evaluate the performance of current assemblers that use short, long or both read types on a complex mock metagenome consisting of 227 bacterial strains with varying degrees of relatedness. We show that many of the current assemblers are not suited to handle such a complex metagenome. In addition, hybrid assemblies do not fulfil their potential. We conclude that ONT reads assembled with CANU and Illumina reads assembled with SPAdes offer the best value for reconstructing genomes and individual genes of complex metagenomes, respectively.",
link: "https://www.microbiologyresearch.org/content/journal/micro/10.1099/mic.0.001469",
category: "Assembler benchmarks"
},
{
id: "paper3",
name: "Evaluating de Novo Assembly and Binning Strategies for Time Series Drinking Water Metagenomes",
abstract: "Reconstructing microbial genomes from metagenomic short-read data can be challenging due to the unknown and uneven complexity of microbial communities. This complexity encompasses highly diverse populations, which often includes strain variants. Reconstructing high-quality genomes is a crucial part of the metagenomic workflow, as subsequent ecological and metabolic inferences depend on their accuracy, quality, and completeness. In contrast to microbial communities in other ecosystems, there has been no systematic assessment of genome-centric metagenomic workflows for drinking water microbiomes. In this study, we assessed the performance of a combination of assembly and binning strategies for time series drinking water metagenomes that were collected over 6 months. The goal of this study was to identify the combination of assembly and binning approaches that result in high-quality and -quantity metagenome-assembled genomes (MAGs), representing most of the sequenced metagenome. Our findings suggest that the metaSPAdes coassembly strategies had the best performance, as they resulted in larger and less fragmented assemblies, with at least 85% of the sequence data mapping to contigs greater than 1 kbp. Furthermore, a combination of metaSPAdes coassembly strategies and MetaBAT2 produced the highest number of medium-quality MAGs while capturing at least 70% of the metagenomes based on read recruitment. Utilizing different assembly/binning approaches also assists in the reconstruction of unique MAGs from closely related species that would have otherwise collapsed into a single MAG using a single workflow. Overall, our study suggests that leveraging multiple binning approaches with different metaSPAdes coassembly strategies may be required to maximize the recovery of good-quality MAGs.",
link: "https://journals.asm.org/doi/10.1128/spectrum.01434-21",
category: "Assembler benchmarks"
},
{
id: "paper4",
name: "MAGqual: a stand-alone pipeline to assess the quality of metagenome-assembled genomes",
abstract: "To demonstrate the use of MAGqual as a bin comparison tool, a simple gut microbiome metagenome [27] was re-binned using three different metagenomic binning tools, CONCOCT, MetaBAT2 and BinSanity [28,29,30], and then refined using the pipeline from MetaWRAP and DAS Tool [32, 33]. MAGqual was used to analyse the bins generated using these five different tools. Table 5 shows that CONCOCT and MetaBAT2 both generated a similar number of bins (91 and 92, respectively); however, CONCOCT generated more high-quality bins (8) than MetaBAT2, as did BinSanity. DAS Tool and MetaWRAP both improved the overall quality of bins, indicating the benefits of a combined binning approach. However, DAS Tool produced a much lower number of bins overall, and DAS Tool binned substantially fewer contigs and bases overall (Fig. 3A) but produced higher-quality MAGs (more complete with low contamination, Fig. 3B), illustrating a potential trade-off between assigning more of the sequence data and improved bin quality that likely depends on different algorithmic approaches to binning philosophies.",
link: "https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-024-01949-z",
category: "Binner benchmarks"
},
{
id: "paper5",
name: "Benchmarking metagenomic binning tools on real datasets across sequencing platforms and binning modes",
abstract: "Metagenomic binning is a culture-free approach that facilitates the recovery of metagenome-assembled genomes by grouping genomic fragments. However, there remains a lack of a comprehensive benchmark to evaluate the performance of metagenomic binning tools across various combinations of data types and binning modes. In this study, we benchmark 13 metagenomic binning tools using short-read, long-read, and hybrid data under co-assembly, single-sample, and multi-sample binning, respectively. The benchmark results demonstrate that multi-sample binning exhibits optimal performance across short-read, long-read, and hybrid data. Moreover, multi-sample binning outperforms other binning modes in identifying potential antibiotic resistance gene hosts and near-complete strains containing potential biosynthetic gene clusters across diverse data types. This study also recommends three efficient binners across all data-binning combinations, as well as high-performance binners for each combination.",
link: "https://www.nature.com/articles/s41467-025-57957-6",
category: "Binner benchmarks"
},
{
id: "paper6",
name: "MAGNETO: An Automated Workflow for Genome-Resolved Metagenomics",
abstract: "Finally, we compared the performances of MAGNETO to metagenomic workflows dedicated to MAG reconstruction, namely, METAWRAP (22), ATLAS (24) and nf-core/mag (25). We chose these three tools as they use similar software to perform assembly and binning, namely, MEGAHIT (41) and MetaBAT2 (9). The comparison of the workflows was performed using the HMP data set. ATLAS is a workflow only permitting single assembly of metagenomes, but integrates a binning refinement module using DAStool (42), which constitutes a good opportunity to evaluate whether single assembly could perform better after binning refinement. METAWRAP also contains a binning refinement module, albeit less complex than the DAStool methodology. This refinement module performs pairwise alignment of MAGs to detect redundant genomes, to then only conserve MAGs showing the best quality among detected duplicated MAGs. nf-core/mag uses the exact same tools as our workflow to perform assembly and binning. As compared to ATLAS, we observed that MAGNETO systematically reconstructed more MAGs using any of the four assembly-binning strategies (Table 1). However, it reconstructed less MAGs than METAWRAP. The higher number of MAGs produced by METAWRAP may be explained by its refinement module coupling several binners, as these binners may reconstruct more nonredundant MAGs, thus increasing their numbers. However, MAGNETO and nf/core-mag reconstructed the same number of MAGs for both CASB or CACB strategies. These similar results are most likely explained by the absence of a bin refinement module and by the fact that in both workflows, the binning step used the exact same parameters.",
link: "https://journals.asm.org/doi/10.1128/msystems.00432-22#tab1",
category: "Pipeline benchmarks"
},
{
id: "paper7",
name: "MAGScoT: a fast, lightweight and accurate bin-refinement tool",
abstract: "We evaluated the binning performance and computational demand of MAGScoT, DASTool and metaWRAP on two datasets. The first dataset was the simulated ‘marine’ dataset of the CAMI2 challenge (see Section 2) (Meyer et al., 2022). This complex dataset with known ground truth offered a comparison to a perfect binning outcome. The second dataset consisted of 50 gut metagenome samples from the integrative Human Microbiome Project (iHMP/HMP2, see Section 2 for selection criteria), which allowed us to compare performance in a real-world setting (Lloyd-Price et al., 2019). The computation time was longest for metaWRAP in both datasets due to the iterative usage of the CheckM software to score the individual bins. Of note, RAM usage was also highest for metaWRAP, as CheckM relies on large reference trees for scoring based on clade-specific marker genes. MAGScoT showed the fastest performance of all tools in both datasets. Especially in the highly complex and fragmented synthetic ‘marine’ dataset, HMM-based annotation and the main MAGScoT algorithm were approx. 15-fold faster than DASTool for the equivalent steps, with both programs using the same predicted amino acid sequences as input (Table 1). The run time for gene/protein prediction from contigs and HMM-based annotation for marker genes scales linearly with metagenome complexity; however, additional compute resources can speed-up these steps almost linearly.",
link: "https://academic.oup.com/bioinformatics/article/38/24/5430/6764585",
category: "Bin-refinement benchmarks"
},
{
id: "paper8",
name: "Metagenome-assembled genomes: concepts, analogies, and challenges",
abstract: "Metagenome-assembled genomes (MAGs) are microbial genomes reconstructed from metagenome data. In the last few years, many thousands of MAGs have been reported in the literature, for a variety of environments and host-associated microbiota, including humans. MAGs have helped us better understand microbial populations and their interactions with the environment where they live; moreover most MAGs belong to novel species, therefore helping to decrease the so-called microbial dark matter. However, questions about the biological reality of MAGs have not, in general, been properly addressed. In this review, I define the notions of hypothetical MAGs and conserved hypothetical MAGs. These notions should help with the understanding of the biological reality of MAGs, their worldwide occurrence, and the efforts to improve MAG recovery processes.",
link: "https://link.springer.com/article/10.1007/s12551-021-00865-y",
category: "Key-concepts"
},
{
id: "paper9",
name: "To Dereplicate or Not To Dereplicate?",
abstract: "Metagenome-assembled genomes (MAGs) expand our understanding of microbial diversity, evolution, and ecology. Concerns have been raised on how sequencing, assembly, binning, and quality assessment tools may result in MAGs that do not reflect single populations in nature. Here, we reflect on another issue, i.e., how to handle highly similar MAGs assembled from independent data sets. Obtaining multiple genomic representatives for a species is highly valuable, as it allows for population genomic analyses; however, when retaining genomes of closely related populations, it complicates MAG quality assessment and abundance inferences. We show that (i) published data sets contain a large fraction of MAGs sharing >99% average nucleotide identity, (ii) different software packages and parameters used to resolve this redundancy remove very different numbers of MAGs, and (iii) the removal of closely related genomes leads to losses of population-specific auxiliary genes. Finally, we highlight some approaches that can infer strain-specific dynamics across a sample series without dereplication.",
link: "https://journals.asm.org/doi/10.1128/msphere.00971-19",
category: "Key-concepts"
},
{
id: "paper10",
name: "Music of metagenomics—a review of its applications, analysis pipeline, and associated tools",
abstract: "This humble effort highlights the intricate details of metagenomics in a simple, poetic, and rhythmic way. The paper enforces the significance of the research area, provides details about major analytical methods, examines the taxonomy and assembly of genomes, emphasizes some tools, and concludes by celebrating the richness of the ecosystem populated by the “metagenome.",
link: "https://link.springer.com/article/10.1007/s10142-021-00810-y#change-history",
category: "Reviews"
},
{
id: "paper11",
name: "A review of computational tools for generating metagenome-assembled genomes from metagenomic sequencing data",
abstract: "Metagenomic sequencing provides a culture-independent avenue to investigate the complex microbial communities by constructing metagenome-assembled genomes (MAGs). A MAG represents a microbial genome by a group of sequences from genome assembly with similar characteristics. It enables us to identify novel species and understand their potential functions in a dynamic ecosystem. Many computational tools have been developed to construct and annotate MAGs from metagenomic sequencing, however, there is a prominent gap to comprehensively introduce their background and practical performance. In this paper, we have thoroughly investigated the computational tools designed for both upstream and downstream analyses, including metagenome assembly, metagenome binning, gene prediction, functional annotation, taxonomic classification, and profiling. We have categorized the commonly used tools into unique groups based on their functional background and introduced the underlying core algorithms and associated information to demonstrate a comparative outlook. Furthermore, we have emphasized the computational requisition and offered guidance to the users to select the most efficient tools. Finally, we have indicated current limitations, potential solutions, and future perspectives for further improving the tools of MAG construction and annotation. We believe that our work provides a consolidated resource for the current stage of MAG studies and shed light on the future development of more effective MAG analysis tools on metagenomic sequencing.",
link: "https://www.sciencedirect.com/science/article/pii/S2001037021004931",
category: "Reviews"
},
{
id: "paper12",
name: "A review of neural networks for metagenomic binning",
abstract: "One of the main goals of metagenomic studies is to describe the taxonomic diversity of microbial communities. A crucial step in metagenomic analysis is metagenomic binning, which involves the (supervised) classification or (unsupervised) clustering of metagenomic sequences. Various machine learning models have been applied to address this task. In this review, the contributions of artificial neural networks (ANN) in the context of metagenomic binning are detailed, addressing both supervised, unsupervised, and semi-supervised approaches. 34 ANN-based binning tools are systematically compared, detailing their architectures, input features, datasets, advantages, disadvantages, and other relevant aspects. The findings reveal that deep learning approaches, such as convolutional neural networks and autoencoders, achieve higher accuracy and scalability than traditional methods. Gaps in benchmarking practices are highlighted, and future directions are proposed, including standardized datasets and optimization of architectures, for third-generation sequencing. This review provides support to researchers in identifying trends and selecting suitable tools for the metagenomic binning problem.",
link: "https://academic.oup.com/bib/article/26/2/bbaf065/8093116",
category: "Reviews"
},
{
id: "paper13",
name: "Analysis and Interpretation of metagenomics data: an approach",
abstract: "Advances in next-generation sequencing technologies have accelerated the momentum of metagenomic studies, which is increasing yearly. The metagenomics field is one of the versatile applications in microbiology, where any interaction in the environment involving microorganisms can be the topic of study. Due to this versatility, the number of applications of this omics technology reached its horizons. Agriculture is a crucial sector involving crop plants and microorganisms interacting together. Hence, studying these interactions through the lenses of metagenomics would completely disclose a new meaning to crop health and development. The rhizosphere is an essential reservoir of the microbial community for agricultural soil. Hence, we focus on the R&D of metagenomic studies on the rhizosphere of crops such as rice, wheat, legumes, chickpea, and sorghum. These recent developments are impossible without the continuous advancement seen in the next-generation sequencing platforms; thus, a brief introduction and analysis of the available sequencing platforms are presented here to have a clear picture of the workflow. Concluding the topic is the discussion about different pipelines applied to analyze data produced by sequencing techniques and have a significant role in interpreting the outcome of a particular experiment. A plethora of different software and tools are incorporated in the automated pipelines or individually available to perform manual metagenomic analysis. Here we describe 8–10 advanced, efficient pipelines used for analysis that explain their respective workflows to simplify the whole analysis process.",
link: "https://biologicalproceduresonline.biomedcentral.com/articles/10.1186/s12575-022-00179-7",
category: "Reviews"
},
{
id: "paper14",
name: "Metagenome quality metrics and taxonomical annotation visualization through the integration of MAGFlow and BIgMAG",
abstract: "With the aim of demonstrating the usability of MAGFlow/BIgMAG ( v1.0.0), we used it to benchmark the MAG features recovered from a mock community (ATCC MSA-1003TM, Table 2) by 5 different pipelines using only short reads (Illumina), namely Metagenome-ATLAS (ATLAS), DATMA, MetaWRAP, nf–core/mag (nf_core_mag_short) and SnakeMAGs (Kieser et al., 2020; Benavides et al., 2020; Uritskiy et al., 2018; van Damme et al., 2021; Krakau et al., 2022; Tadrent et al., 2023). Also, the impacts of performing hybrid assembly (Illumina and PacBio) were evaluated by building MAGs from the same mock community with MUFFIN and nf–core/mag (nf_core_mag_hybrid) (van Damme et al., 2021; Krakau et al., 2022). Additionally, in order to establish the same starting point for all the pipelines processing only short reads, Megahit (Li et al., 2016) was set as assembly software. In the case of hybrid assembly pipelines, SPAdes (Nurk et al., 2017) executed the assembly step for both workflows since Megahit does not account with such feature. Further, MetaBAT2 (Kang et al., 2019) was selected as the binning tool for all the pipelines studied in this section, excluding DATMA since this workflow follows a different strategy to recover the MAGs that groups first the reads using a specific approach called CLAME (Benavides et al., 2018), to assemble them in batches afterwards.",
link: "https://f1000research.com/articles/13-640",
category: "Pipeline benchmarks"
},
{
id: "paper15",
name: "Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea",
abstract: "We present two standards developed by the Genomic Standards Consortium (GSC) for reporting bacterial and archaeal genome sequences. Both are extensions of the Minimum Information about Any (x) Sequence (MIxS). The standards are the Minimum Information about a Single Amplified Genome (MISAG) and the Minimum Information about a Metagenome-Assembled Genome (MIMAG), including, but not limited to, assembly quality, and estimates of genome completeness and contamination. These standards can be used in combination with other GSC checklists, including the Minimum Information about a Genome Sequence (MIGS), Minimum Information about a Metagenomic Sequence (MIMS), and Minimum Information about a Marker Gene Sequence (MIMARKS). Community-wide adoption of MISAG and MIMAG will facilitate more robust comparative genomic analyses of bacterial and archaeal diversity.",
link: "https://www.nature.com/articles/nbt.3893",
category: "Key-concepts"
},
{
id: "paper16",
name: "Contamination detection in genomic data: more is not enough",
abstract: "The decreasing cost of sequencing and concomitant augmentation of publicly available genomes have created an acute need for automated software to assess genomic contamination. During the last 6 years, 18 programs have been published, each with its own strengths and weaknesses. Deciding which tools to use becomes more and more difficult without an understanding of the underlying algorithms. We review these programs, benchmarking six of them, and present their main operating principles. This article is intended to guide researchers in the selection of appropriate tools for specific applications. Finally, we present future challenges in the developing field of contamination detection.",
link: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02619-9",
category: "Contamination benchmarks"
},
{
id: "paper17",
name: "A Data Carpentry- Style Metagenomics Workshop",
abstract: "Metagenomic analyses aim to explore the genomic diversity of communities in specific habitats by processing their DNA sequencing data. This analysis is achieved with specialized bioinformatics tools, which often require previous coding experience. Furthermore, beginners can struggle to build a pipeline from raw data to valuable biological insights. The Carpentries hosts open lessons used worldwide to analyze specialized datasets for beginners, including a Data Carpentry curriculum for individuals working with genomics sequencing data. However, a lesson addressing the specific challenges associated with metagenomics data and analyses was missing. We created a complete Metagenomics curriculum in The Carpentries Incubator, adapting and expanding on the Data Carpentry genomics curriculum. The curriculum provides an introduction to programming, teaching learners to access and handle metagenomics data, and to run commands with the software needed for completing metagenomics analyses. Content and exercises have been improved based on experience gathered in teaching the curriculum in three 16-hour online workshops. We expect to continue to enhance this lesson, which we hope is helpful as a teaching resource for new instructors in the field, and as a guide for newcomers wishing to perform metagenomic analyses from scratch.",
link: "https://jose.theoj.org/papers/10.21105/jose.00209",
category: "Tutorials"
},
{
id: "paper18",
name: "Protocol for the construction and functional profiling of metagenome-assembled genomes for microbiome analyses",
abstract: "Constructing metagenome-assembled genomes (MAGs) from complex metagenomic samples involves a series of bioinformatics operations, each requiring deep bioinformatics knowledge. Here, we present a protocol for constructing MAGs and conducting functional profiling to address biological questions. We describe steps for system configuration, data downloads, read processing, removal of human DNA contamination, metagenomic assembly, and statistical quality assessment of the final assembly. Additionally, we detail procedures for the construction and refinement of MAGs, as well as the functional profiling of MAGs.",
link: "https://www.sciencedirect.com/science/article/pii/S2666166724003320",
category: "Tutorials"
},
{
id: "paper19",
name: "Protocol for refining metagenomic binning with BinSPreader",
abstract: "The analysis of metagenomic data obtained via high-throughput DNA sequencing is primarily carried out by a dedicated binning process involving clustering contigs, presumably belonging to the same species. Here, we present a protocol for improving the quality of binning using BinSPreader. We describe steps for typical metagenome assembly and binning workflow. We then detail binning refining, its variants, output, and possible caveats. This protocol optimizes the process of reconstructing more complete genomes of microorganisms that make up the metagenome.",
link: "https://www.sciencedirect.com/science/article/pii/S2666166723003842",
category: "Tutorials"
},
{
id: "paper20",
name: "Genome-resolved metagenomics: a game changer for microbiome medicine",
abstract: "Recent substantial evidence implicating commensal bacteria in human diseases has given rise to a new domain in biomedical research: microbiome medicine. This emerging field aims to understand and leverage the human microbiota and derivative molecules for disease prevention and treatment. Despite the complex and hierarchical organization of this ecosystem, most research over the years has relied on 16S amplicon sequencing, a legacy of bacterial phylogeny and taxonomy. Although advanced sequencing technologies have enabled cost-effective analysis of entire microbiota, translating the relatively short nucleotide information into the functional and taxonomic organization of the microbiome has posed challenges until recently. In the last decade, genome-resolved metagenomics, which aims to reconstruct microbial genomes directly from whole-metagenome sequencing data, has made significant strides and continues to unveil the mysteries of various human-associated microbial communities. There has been a rapid increase in the volume of whole metagenome sequencing data and in the compilation of novel metagenome-assembled genomes and protein sequences in public depositories. This review provides an overview of the capabilities and methods of genome-resolved metagenomics for studying the human microbiome, with a focus on investigating the prokaryotic microbiota of the human gut. Just as decoding the human genome and its variations marked the beginning of the genomic medicine era, unraveling the genomes of commensal microbes and their sequence variations is ushering us into the era of microbiome medicine. Genome-resolved metagenomics stands as a pivotal tool in this transition and can accelerate our journey toward achieving these scientific and medical milestones.",
link: "https://www.nature.com/articles/s12276-024-01262-7",
category: "Reviews"
},
{
id: "paper21",
name: "Reproducible, scalable, and shareable analysis pipelines with bioinformatics workflow managers",
abstract: "The rapid growth of high-throughput technologies has transformed biomedical research. With the increasing amount and complexity of data, scalability and reproducibility have become essential not just for experiments, but also for computational analysis. However, transforming data into information involves running a large number of tools, optimizing parameters, and integrating dynamically changing reference data. Workflow managers were developed in response to such challenges. They simplify pipeline development, optimize resource usage, handle software installation and versions, and run on different compute platforms, enabling workflow portability and sharing. In this Perspective, we highlight key features of workflow managers, compare commonly used approaches for bioinformatics workflows, and provide a guide for computational and noncomputational users. We outline community-curated pipeline initiatives that enable novice and experienced users to perform complex, best-practice analyses without having to manually assemble workflows. In sum, we illustrate how workflow managers contribute to making computational analysis in biomedical research shareable, scalable, and reproducible.",
link: "https://www.nature.com/articles/s41592-021-01254-9",
category: "Workflow-managers"
},
{
id: "paper22",
name: "Benchmarking of analysis tools and pipeline development for nanopore long-read metagenomics",
abstract: "We have conducted a benchmarking analysis of the current state-of-the-art tools and developed a comprehensive pipeline for nanopore metagenomic analysis, providing practical recommendations for implementing these strategies. Additionally, we have proposed suggestions for analysis approaches and tool selection based on performance and efficiency considerations. However, it is important to acknowledge that nanopore sequencing technology is rapidly evolving, particularly with improvements in accuracy. As sequencing technology continues to advance, existing analysis tools and pipelines for nanopore metagenomics will inevitably be updated or replaced. In light of this, it is critical to evaluate not only the performance of current bioinformatics tools but also their computational resource requirements to effectively manage the analysis of large-scale nanopore metagenomic datasets. Consequently, the development of efficient bioinformatics tools with advanced algorithms will be essential for addressing the increasing demand for large-scale nanopore metagenomic data processing.",
link: "https://www.sciencedirect.com/science/article/pii/S209592732500310X",
category: "Assembler benchmarks"
},
{
id: "paper23",
name: "An in-depth evaluation of metagenomic classifiers for soil microbiomes",
abstract: "In this study, we generated a custom in-silico mock community containing microbial genomes commonly observed in the soil microbiome. Using this mock community, we simulated shotgun sequencing data to evaluate the performance of three leading metagenomic classifiers: Kraken2 (supplemented with Bracken, using a custom database derived from GTDB-TK genomes along with its own default database), Kaiju, and MetaPhlAn, utilizing their respective default databases for a robust analysis. Our results highlight the importance of optimizing taxonomic classification parameters, database selection, as well as analysing trimmed reads and contigs. Our study showed that classifiers tailored to the specific taxa present in our samples led to fewer errors compared to broader databases including microbial eukaryotes, protozoa, or human genomes, highlighting the effectiveness of targeted taxonomic classification. Notably, an optimal classifier performance was achieved when applying a relative abundance threshold of 0.001% or 0.005%. The Kraken2 supplemented with bracken, with a custom database demonstrated superior precision, sensitivity, F1 score, and overall sequence classification. Using a custom database, this classifier classified 99% of in-silico reads and 58% of real-world soil shotgun reads, with the latter identifying previously overlooked phyla using a custom database.",
link: "https://environmentalmicrobiome.biomedcentral.com/articles/10.1186/s40793-024-00561-w",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper24",
name: "Analyzing the performance of short-read classification tools on metagenomic samples toward proper diagnosis of diseases",
abstract: "Accurate knowledge of the genome, virus and bacteria that have invaded our bodies is crucial for diagnosing many human diseases. The field of bioinformatics encompasses the complex computational methods required for this purpose. Metagenomics employs next-generation sequencing (NGS) technology to study and identify microbial communities in environmental samples. This technique allows for the measurement of the relative abundance of different microbes. Various tools are available for detecting bacterial species in sequenced metagenomic samples. In this study, we focus on well-known taxonomic classification tools such as MetaPhlAn4, Centrifuge, Kraken2, and Bracken, and evaluate their performance at the species level using synthetic and real datasets. The results indicate that MetaPhlAn4 exhibited high precision in identifying species in the simulated dataset, while Kraken2 had the best area under the precision-recall curve (AUPR) performance. Centrifuge, Kraken2, and Bracken showed accurate estimation of species abundances, unlike MetaPhlAn4, which had a higher L2 distance. In the real dataset analysis with samples from an inflammatory bowel disease (IBD) research, MetaPhlAn4, and Kraken2 had faster execution times, with differences in performance at family and species levels among the tools. Enterobacteriaceae and Pasteurellaceae were highlighted as the most abundant families by Centrifuge, Kraken2, and MetaPhlAn4, with variations in abundance among ulcerative colitis (UC), Crohn’s disease (CD), and control non-IBD (CN) groups. Escherichia coli (E. coli) has the highest abundance among Enterobacteriaceae species in the CD and UC groups in comparison with the CN group. Bracken overestimated E. coli abundance, emphasizing result interpretation caution. The findings of this research can assist in selecting the appropriate short-read classifier, thereby aiding in the diagnosis of target diseases.",
link: "https://www.worldscientific.com/doi/full/10.1142/S0219720024500124?srsltid=AfmBOoqsag0QCpMjVjYKDG_V1MwEfvUbczBrkX2N05z3wFk1etU-1BmS",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper25",
name: "Benchmarking Metagenomic Classifiers on Simulated Ancient and Modern Metagenomic Data",
abstract: "Taxonomic profiling of ancient metagenomic samples is challenging due to the accumulation of specific damage patterns on DNA over time. Although a number of methods for metagenome profiling have been developed, most of them have been assessed on modern metagenomes or simulated metagenomes mimicking modern metagenomes. Further, a comparative assessment of metagenome profilers on simulated metagenomes representing a spectrum of degradation depth, from the extremity of ancient (most degraded) to current or modern (not degraded) metagenomes, has not yet been performed. To understand the strengths and weaknesses of different metagenome profilers, we performed their comprehensive evaluation on simulated metagenomes representing human dental calculus microbiome, with the level of DNA damage successively raised to mimic modern to ancient metagenomes. All classes of profilers, namely, DNA-to-DNA, DNA-to-protein, and DNA-to-marker comparison-based profilers were evaluated on metagenomes with varying levels of damage simulating deamination, fragmentation, and contamination. Our results revealed that, compared to deamination and fragmentation, human and environmental contamination of ancient DNA (with modern DNA) has the most pronounced effect on the performance of each profiler. Further, the DNA-to-DNA (e.g., Kraken2, Bracken) and DNA-to-marker (e.g., MetaPhlAn4) based profiling approaches showed complementary strengths, which can be leveraged to elevate the state-of-the-art of ancient metagenome profiling.",
link: "https://www.mdpi.com/2076-2607/11/10/2478",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper26",
name: "Benchmarking bacterial taxonomic classification using nanopore metagenomics data of several mock communities",
abstract: "Taxonomic classification is crucial in identifying organisms within diverse microbial communities when using metagenomics shotgun sequencing. While second-generation Illumina sequencing still dominates, third-generation nanopore sequencing promises improved classification through longer reads. However, extensive benchmarking studies on nanopore data are lacking. We systematically evaluated performance of bacterial taxonomic classification for metagenomics nanopore sequencing data for several commonly used classifiers, using standardized reference sequence databases, on the largest collection of publicly available data for defined mock communities thus far (nine samples), representing different research domains and application scopes. Our results categorize classifiers into three categories: low precision/high recall; medium precision/medium recall, and high precision/medium recall. Most fall into the first group, although precision can be improved without excessively penalizing recall with suitable abundance filtering. No definitive ‘best’ classifier emerges, and classifier selection depends on application scope and practical requirements. Although few classifiers designed for long reads exist, they generally exhibit better performance. Our comprehensive benchmarking provides concrete recommendations, supported by publicly available code for reassessment and fine-tuning by other scientists.",
link: "https://www.nature.com/articles/s41597-024-03672-8",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper27",
name: "DeepMicrobes: taxonomic classification for metagenomics with deep learning",
abstract: "We next evaluate whether the DeepMicrobes, which is trained on a bacterial repertoire of the human gut microbiota, has an advantage over state-of-the-art metagenomics tools for taxonomic classification of gut metagenome sequences. Although it is the most ideal choice to benchmark on genuine metagenomic reads, such data would not provide us with read-level and community-level ground truth for taxon identification and abundance estimation. We classified each mock sample using DeepMicrobes and other taxonomic classification tools, including Kraken, Kraken 2, Centrifuge, CLARK, CLARK-S, Kaiju, DIAMOND-MEGAN and BLAST-MEGAN. The confidence threshold for the genus model is determined according to read-level classification accuracy measured on these real reads (Supplementary Table S13). We observed that the genus model achieves a read-level precision of 0.969 and a recall of 0.866 on average using threshold 0.50, which is the default setting for DeepMicrobes.",
link: "https://academic.oup.com/nargab/article/2/1/lqaa009/5740226",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper28",
name: "CheckM2: a rapid, scalable and accurate tool for assessing microbial genome quality using machine learning",
abstract: "When predicting the completeness of 712,880 simulated RefSeq 202-based genomes, CheckM2 was substantially more accurate than CheckM1 with a lower MAE across all genomes (Fig. 3a and Supplementary Note 2). Overall, there was similar performance between CheckM2 and CheckM1 on high-quality genomes (CheckM2 MAE 2.1±2.9%, CheckM1 MAE 2.0±3.2%) with BUSCO being less accurate (BUSCO MAE 4.4±6.8%). CheckM2 was far more accurate for medium, low-quality and highly contaminated genomes then both other tools (Fig. 3a; CheckM2 MAE 2.9±2.9%, CheckM1 MAE 4.7±5.4%, BUSCO MAE 6.4±7.0%). However, as some phyla within RefSeq 202 are highly oversampled, bulk genome MAE underestimates performance across broad taxonomic ranks. When using a phylum-weighted MAE (PW-MAE), CheckM2 outperformed CheckM1 and BUSCO with both substantially higher accuracy and much lower error variance for high-quality genomes (CheckM2 PW-MAE 2.5±2.2%, CheckM1 PW-MAE 5.7±2.9%, BUSCO PW-MAE 10.2±4.5%) as well as medium and low-quality genomes (CheckM2 PW-MAE 3.7±3.2%, CheckM1 PW-MAE 7.1±5.7%, BUSCO PW-MAE 10.2±7.3%).",
link: "https://www.nature.com/articles/s41592-023-01940-w",
category: "Contamination benchmarks"
},
{
id: "paper29",
name: "Streamlining data-intensive biology with workflow systems",
abstract: "As the scale of biological data generation has increased, the bottleneck of research has shifted from data generation to analysis. Researchers commonly need to build computational workflows that include multiple analytic tools and require incremental development as experimental insights demand tool and parameter modifications. These workflows can produce hundreds to thousands of intermediate files and results that must be integrated for biological insight. Data-centric workflow systems that internally manage computational resources, software, and conditional execution of analysis steps are reshaping the landscape of biological data analysis and empowering researchers to conduct reproducible analyses at scale. Adoption of these tools can facilitate and expedite robust data analysis, but knowledge of these techniques is still lacking. Here, we provide a series of strategies for leveraging workflow systems with structured project, data, and resource management to streamline large-scale biological analysis. We present these practices in the context of high-throughput sequencing data analysis, but the principles are broadly applicable to biologists working beyond this field.",
link: "https://academic.oup.com/gigascience/article/10/1/giaa140/6092773",
category: "Workflow-managers"
},
{
id: "paper30",
name: "Ten simple rules and a template for creating workflows-as-applications",
abstract: "Writing bioinformatics software using a workflow manager is a very good idea. However, shipping the software as the native workflow script is probably a very bad idea. Workflow managers have a large, and often bewildering, number of command line arguments for controlling many aspects of how a workflow runs. Furthermore, setting up a run is usually a multistep process often requiring some or all of the following: copying the workflow repository, creating a configuration file, installing the workflow manager and dependencies, coming up with a suitable run command and scheduler interaction for your system, and executing the analysis. This can be overwhelming for users, especially those who may have no experience with the workflow manager. It is best to make using the bioinformatics tool as easy as possible in order to improve the user experience. As an added bonus, this will help maximise the user base and subsequent citations. In all of the above examples, the bioinformatics tools hide the workflow manager backend behind a simple and focused interface that is much more appealing for the end user. ",
link: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010705",
category: "Workflow-managers"
},
{
id: "paper31",
name: "Design considerations for workflow management systems use in production genomics research and the clinic",
abstract: "The changing landscape of genomics research and clinical practice has created a need for computational pipelines capable of efficiently orchestrating complex analysis stages while handling large volumes of data across heterogeneous computational environments. Workflow Management Systems (WfMSs) are the software components employed to fill this gap. This work provides an approach and systematic evaluation of key features of popular bioinformatics WfMSs in use today: Nextflow, CWL, and WDL and some of their executors, along with Swift/T, a workflow manager commonly used in high-scale physics applications. We employed two use cases: a variant-calling genomic pipeline and a scalability-testing framework, where both were run locally, on an HPC cluster, and in the cloud. This allowed for evaluation of those four WfMSs in terms of language expressiveness, modularity, scalability, robustness, reproducibility, interoperability, ease of development, along with adoption and usage in research labs and healthcare settings. This article is trying to answer, which WfMS should be chosen for a given bioinformatics application regardless of analysis type?. The choice of a given WfMS is a function of both its intrinsic language and engine features. Within bioinformatics, where analysts are a mix of dry and wet lab scientists, the choice is also governed by collaborations and adoption within large consortia and technical support provided by the WfMS team/community. As the community and its needs continue to evolve along with computational infrastructure, WfMSs will also evolve, especially those with permissive licenses that allow commercial use. In much the same way as the dataflow paradigm and containerization are now well understood to be very useful in bioinformatics applications, we will continue to see innovations of tools and utilities for other purposes, like big data technologies, interoperability, and provenance. ",
link: "https://www.nature.com/articles/s41598-021-99288-8",
category: "Workflow-managers"
},
{
id: "paper32",
name: "Benchmarking short-read metagenomics tools for removing host contamination",
abstract: "In this study, we assessed the impact of computational host DNA decontamination on downstream analyses, highlighting its importance in producing accurate results efficiently. We also evaluated the performance of conventional tools like KneadData, Bowtie2, BWA, KMCP, Kraken2, and KrakenUniq, each offering unique advantages for different applications. Furthermore, we highlighted the importance of an accurate host reference genome, noting that its absence negatively affected the decontamination performance across all tools. Our findings underscore the need for careful selection of decontamination tools and reference genomes to enhance the accuracy of metagenomic analyses. These insights provide valuable guidance for improving the reliability and reproducibility of microbiome research.",
link: "https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giaf004/8045180",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper33",
name: "Comparative analysis of metagenomic classifiers for long-read sequencing datasets",
abstract: "Long reads have gained popularity in the analysis of metagenomics data. Therefore, we comprehensively assessed metagenomics classification tools on the species taxonomic level. We analysed kmer-based tools, mapping-based tools and two general-purpose long reads mappers. We evaluated more than 20 pipelines which use either nucleotide or protein databases and selected 13 for an extensive benchmark. We prepared seven synthetic datasets to test various scenarios, including the presence of a host, unknown species and related species. Moreover, we used available sequencing data from three well-defined mock communities, including a dataset with abundance varying from 0.0001 to 20% and six real gut microbiomes.",
link: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05634-8",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper34",
name: "Benchmarking Metagenomic Pipelines for the Detection of Foodborne Pathogens in Simulated Microbial Communities",
abstract: "Foodborne pathogens pose a significant public health threat worldwide, despite modern advances in food safety. While molecular detection of pathogens in complex food matrices has gained attention to support tracking and preventing outbreaks, thorough benchmarking is needed to optimize workflows for specific scenarios. This study evaluated the performance of four metagenomic classification tools: Kraken2, Kraken2/Bracken, MetaPhlAn4, and Centrifuge, for estimating pathogen presence and abundance in simulated microbial communities representing three food products. Specifically, we evaluated workflow performance in predicting varying levels of Campylobacter jejuni, Cronobacter sakazakii, and Listeria monocytogenes in metagenomes of chicken meat, dried food, and milk products. Metagenomes were simulated to include the respective pathogen at defined relative abundance levels (0%-control, 0.01%, 0.1%, 1%, and 30%) within the respective food microbiome. Performance evaluations demonstrated that Kraken2/Bracken achieved the highest classification accuracy, with consistently higher F1-scores across all food metagenomes, whereas Centrifuge exhibited the weakest performance. MetaPhlAn4 also performed well, particularly in predicting C. sakazakii in dried food metagenomes, but was limited in detecting pathogens at the lowest abundance level (0.01%). Overall, Kraken2/Bracken and Kraken2 exhibited the broadest detection range, correctly identifying pathogen sequence reads down to the 0.01% level, whereas MetaPhlAn4 and Centrifuge had higher limits of detection. Our results highlight Kraken2/Bracken as an effective tool for pathogen detection, with MetaPhlAn4 serving as a valuable alternative depending on pathogen prevalence. These findings provide crucial insights for selecting metagenomic tools for applications in food safety and pathogen surveillance applications.",
link: "https://www.sciencedirect.com/science/article/pii/S0362028X25001358",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper35",
name: "A practical guide to amplicon and metagenomic analysis of microbiome data",
abstract: "Advances in high-throughput sequencing (HTS) have fostered rapid developments in the field of microbiome research, and massive microbiome datasets are now being generated. However, the diversity of software tools and the complexity of analysis pipelines make it difficult to access this field. Here, we systematically summarize the advantages and limitations of microbiome methods. Then, we recommend specific pipelines for amplicon and metagenomic analyses, and describe commonly-used software and databases, to help researchers select the appropriate tools. Furthermore, we introduce statistical and visualization methods suitable for microbiome analysis, including alpha- and beta-diversity, taxonomic composition, difference comparisons, correlation, networks, machine learning, evolution, source tracing, and common visualization styles to help researchers make informed choices. Finally, a step-by-step reproducible analysis guide is introduced. We hope this review will allow researchers to carry out data analysis more effectively and to quickly select the appropriate tools in order to efficiently mine the biological significance behind the data.",
link: "https://academic.oup.com/proteincell/article/12/5/315/6724529",
category: "Reviews"
},
{
id: "paper36",
name: "Assessment of metagenomic assemblers based on hybrid reads of real and simulated metagenomic sequences",
abstract: "In metagenomic studies of microbial communities, the short reads come from mixtures of genomes. Read assembly is usually an essential first step for the follow-up studies in metagenomic research. Understanding the power and limitations of various read assembly programs in practice is important for researchers to choose which programs to use in their investigations. Many studies evaluating different assembly programs used either simulated metagenomes or real metagenomes with unknown genome compositions. However, the simulated datasets may not reflect the real complexities of metagenomic samples and the estimated assembly accuracy could be misleading due to the unknown genomes in real metagenomes. Therefore, hybrid strategies are required to evaluate the various read assemblers for metagenomic studies. In this paper, we benchmark the metagenomic read assemblers by mixing reads from real metagenomic datasets with reads from known genomes and evaluating the integrity, contiguity and accuracy of the assembly using the reads from the known genomes. We selected four advanced metagenome assemblers, MEGAHIT, MetaSPAdes, IDBA-UD and Faucet, for evaluation. We showed the strengths and weaknesses of these assemblers in terms of integrity, contiguity and accuracy for different variables, including the genetic difference of the real genomes with the genome sequences in the real metagenomic datasets and the sequencing depth of the simulated datasets. Overall, MetaSPAdes performs best in terms of integrity and continuity at the species-level, followed by MEGAHIT. Faucet performs best in terms of accuracy at the cost of worst integrity and continuity, especially at low sequencing depth. MEGAHIT has the highest genome fractions at the strain-level and MetaSPAdes has the overall best performance at the strain-level. MEGAHIT is the most efficient in our experiments. Availability: The source code is available at https://github.com/ziyewang/MetaAssemblyEval.",
link: "https://academic.oup.com/bib/article/21/3/777/5371422",
category: "Assembler benchmarks"
},
{
id: "paper37",
name: "Critical evaluation of short, long, and hybrid assembly for contextual analysis of antibiotic resistance genes in complex environmental metagenomes",
abstract: "In the fight to limit the global spread of antibiotic resistance, the assembly of environmental metagenomes has the potential to provide rich contextual information (e.g., taxonomic hosts, carriage on mobile genetic elements) about antibiotic resistance genes (ARG) in the environment. However, computational challenges associated with assembly can impact the accuracy of downstream analyses. This work critically evaluates the impact of assembly leveraging short reads, nanopore MinION long-reads, and a combination of the two (hybrid) on ARG contextualization for ten environmental metagenomes using seven prominent assemblers (IDBA-UD, MEGAHIT, Canu, Flye, Opera-MS, metaSpades and HybridSpades). While short-read and hybrid assemblies produced similar patterns of ARG contextualization, raw or assembled long nanopore reads produced distinct patterns. Based on an in-silico spike-in experiment using real and simulated reads, we show that low to intermediate coverage species are more likely to be incorporated into chimeric contigs across all assemblers and sequencing technologies, while more abundant species produce assemblies with a greater frequency of inversions and insertion/deletions (indels). In sum, our analyses support hybrid assembly as a valuable technique for boosting the reliability and accuracy of assembly-based analyses of ARGs and neighboring genes at environmentally-relevant coverages, provided that sufficient short-read sequencing depth is achieved.",
link: "https://www.nature.com/articles/s41598-021-83081-8",
category: "Assembler benchmarks"
},
{
id: "paper38",
name: "Mock community taxonomic classification performance of publicly available shotgun metagenomics pipelines",
abstract: "Shotgun metagenomic sequencing comprehensively samples the DNA of a microbial sample. Choosing the best bioinformatics processing package can be daunting due to the wide variety of tools available. Here, we assessed publicly available shotgun metagenomics processing packages/pipelines including bioBakery, Just a Microbiology System (JAMS), Whole metaGenome Sequence Assembly V2 (WGSA2), and Woltka using 19 publicly available mock community samples and a set of five constructed pathogenic gut microbiome samples. Also included is a workflow for labelling bacterial scientific names with NCBI taxonomy identifiers for better resolution in assessing results. The Aitchison distance, a sensitivity metric, and total False Positive Relative Abundance were used for accuracy assessments for all pipelines and mock samples. Overall, bioBakery4 performed the best with most of the accuracy metrics, while JAMS and WGSA2, had the highest sensitivities. Furthermore, bioBakery is commonly used and only requires a basic knowledge of command line usage. This work provides an unbiased assessment of shotgun metagenomics packages and presents results assessing the performance of the packages using mock community sequence data.",
link: "https://www.nature.com/articles/s41597-023-02877-7",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper39",
name: "Unraveling metagenomics through long-read sequencing: a comprehensive review",
abstract: "The study of microbial communities has undergone significant advancements, starting from the initial use of 16S rRNA sequencing to the adoption of shotgun metagenomics. However, a new era has emerged with the advent of long-read sequencing (LRS), which offers substantial improvements over its predecessor, short-read sequencing (SRS). LRS produces reads that are several kilobases long, enabling researchers to obtain more complete and contiguous genomic information, characterize structural variations, and study epigenetic modifications. The current leaders in LRS technologies are Pacific Biotechnologies (PacBio) and Oxford Nanopore Technologies (ONT), each offering a distinct set of advantages. This review covers the workflow of long-read metagenomics sequencing, including sample preparation (sample collection, sample extraction, and library preparation), sequencing, processing (quality control, assembly, and binning), and analysis (taxonomic annotation and functional annotation). Each section provides a concise outline of the key concept of the methodology, presenting the original concept as well as how it is challenged or modified in the context of LRS. Additionally, the section introduces a range of tools that are compatible with LRS and can be utilized to execute the LRS process. This review aims to present the workflow of metagenomics, highlight the transformative impact of LRS, and provide researchers with a selection of tools suitable for this task.",
link: "https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-024-04917-1",
category: "Reviews"
},
{
id: "paper40",
name: "Evaluating metagenomics tools for genome binning with real metagenomic datasets and CAMI datasets",
abstract: "In this study, we evaluate 15 genome binning tools containing 12 original binning tools and 3 refining binning tools by comparing the performance of these tools on chicken gut metagenomic datasets and the first CAMI challenge datasets. For chicken gut metagenomic datasets, original genome binner MetaBat, Groopm2 and Autometa performed better than other original binner, and MetaWrap combined the binning results of them generated the most high-quality genome bins. For CAMI datasets, Groopm2 achieved the highest purity (> 0.9) with good completeness (> 0.8), and reconstructed the most high-quality genome bins among original genome binners. Compared with Groopm2, MetaBat2 had similar performance with higher completeness and lower purity. Genome refining binners DASTool predicated the most high-quality genome bins among all genomes binners. Most genome binner performed well for unique strains. Nonetheless, reconstructing common strains still is a substantial challenge for all genome binner.",
link: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03667-3",
category: "Binner benchmarks"
},
{
id: "paper41",
name: "Creating reproducible workflows for complex computational pipelines",
abstract: "A workflow orchestration framework can streamline repeatable tasks and make workflows broadly usable. From several options, we chose Nextflow due to the ease of deploying across platforms, vibrant nfcore community, and ability to manage and monitor workflows with Nextflow Tower.",
link: "https://research.arcadiascience.com/pub/perspective-reproducible-workflows/release/5/",
category: "Workflow-managers"
},
{
id: "paper42",
name: "Automatic Reproduction of Workflows in the Snakemake Workflow Catalog and nf-core Registries",
abstract: "Workflows make it easier for scientists to assemble computational experiments consisting of many disparate components. However, those disparate components also increase the probability that the computational experiment fails to be reproducible. Even if software is reproducible today, it may become irreproducible tomorrow without the software itself changing at all, because of the constantly changing software environment in which the software is run. To alleviate irreproducibility, workflow engines integrate with container engines. Additionally, communities that sprung up around workflow engines started to host registries for workflows that follow standards. These standards reduce the effort needed to make workflows automatically reproducible. In this paper, we study automatic reproduction of workflows from two registries, focusing on non-crashing executions. The experimental data lets us analyze the upper bound to which workflow engines could achieve reproducibility. We identify lessons learned in achieving reproducibility in practice.",
link: "https://dl.acm.org/doi/10.1145/3589806.3600037",
category: "Workflow-managers"
},
{
id: "paper43",
name: "Using prototyping to choose a bioinformatics workflow management system",
abstract: "RiboViz is a package to extract biological insight from ribosome profiling data to help advance understanding of protein synthesis. At the heart of RiboViz is an analysis workflow, implemented in a Python script. To conform to best practices for scientific computing which recommend the use of build tools to automate workflows and to reuse code instead of rewriting it, the authors reimplemented this workflow within a workflow management system. To select a workflow management system, a rapid survey of available systems was undertaken, and candidates were shortlisted: Snakemake, cwltool, Toil, and Nextflow. Each candidate was evaluated by quickly prototyping a subset of the RiboViz workflow, and Nextflow was chosen. The selection process took 10 person-days, a small cost for the assurance that Nextflow satisfied the authors’ requirements. The use of prototyping can offer a low-cost way of making a more informed selection of software to use within projects, rather than relying solely upon reviews and recommendations by others.",
link: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008622",
category: "Workflow-managers"
},
{
id: "paper44",
name: "Empowering bioinformatics communities with Nextflow and nf-core",
abstract: "Standardized analysis pipelines contribute to making data bioinformatics research compliant with the paradigm of Findability, Accessibility, Interoperability, and Reusability (FAIR), and facilitate collaboration. Nextflow and Snakemake, two popular command-line solutions, are increasingly adopted by users, complementing GUI-based platforms such as Galaxy. We report recent developments of the nf-core framework with the new Nextflow Domain-Specific Language (DSL2). An extensive library of modules and subworkflows enables research communities to adopt common standards progressively, as resources and needs allow. We present an overview of some of the research communities built around nf-core and showcase its adoption by six EuroFAANG farmed animal research consortia.",
link: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03673-9",
category: "Workflow-managers"
},
{
id: "paper45",
name: "Sustainable data analysis with Snakemake",
abstract: "Data analysis often entails a multitude of heterogeneous steps, from the application of various command line tools to the usage of scripting languages like R or Python for the generation of plots and tables. It is widely recognized that data analyses should ideally be conducted in a reproducible way. Reproducibility enables technical validation and regeneration of results on the original or even new data. However, reproducibility alone is by no means sufficient to deliver an analysis that is of lasting impact (i.e., sustainable) for the field, or even just one research group. We postulate that it is equally important to ensure adaptability and transparency. The former describes the ability to modify the analysis to answer extended or slightly different research questions. The latter describes the ability to understand the analysis in order to judge whether it is not only technically, but methodologically valid. Here, we analyze the properties needed for data analysis to become reproducible, adaptable, and transparent. We show how the popular workflow management system Snakemake can be used to guarantee this, and how it enables an ergonomic, combined, unified representation of all steps involved in data analysis, ranging from raw data processing, to quality control and fine-grained, interactive exploration and plotting of final results.",
link: "https://f1000research.com/articles/10-33/v3",
category: "Workflow-managers"
},
{
id: "paper46",
name: "Comparison of Metagenomics and Metatranscriptomics Tools: A Guide to Making the Right Choice",
abstract: "The study of microorganisms is a field of great interest due to their environmental (e.g., soil contamination) and biomedical (e.g., parasitic diseases, autism) importance. The advent of revolutionary next-generation sequencing techniques, and their application to the hypervariable regions of the 16S, 18S or 23S ribosomal subunits, have allowed the research of a large variety of organisms more in-depth, including bacteria, archaea, eukaryotes and fungi. Additionally, together with the development of analysis software, the creation of specific databases (e.g., SILVA or RDP) has boosted the enormous growth of these studies. As the cost of sequencing per sample has continuously decreased, new protocols have also emerged, such as shotgun sequencing, which allows the profiling of all taxonomic domains in a sample. The sequencing of hypervariable regions and shotgun sequencing are technologies that enable the taxonomic classification of microorganisms from the DNA present in microbial communities. However, they are not capable of measuring what is actively expressed. Conversely, we advocate that metatranscriptomics is a “new” technology that makes the identification of the mRNAs of a microbial community possible, quantifying gene expression levels and active biological pathways. Furthermore, it can be also used to characterise symbiotic interactions between the host and its microbiome. In this manuscript, we examine the three technologies above, and discuss the implementation of different software and databases, which greatly impact the obtaining of reliable results. Finally, we have developed two easy-to-use pipelines leveraging Nextflow technology. These aim to provide everything required for an average user to perform a metagenomic analysis of marker genes with QIMME2 and a metatranscriptomic study using Kraken2/Bracken.",
link: "https://www.mdpi.com/2073-4425/13/12/2280",
category: "Taxonomic classifier benchmarks"
},
{
id: "paper47",
name: "Ten simple rules for defining a computational biology project",
abstract: "If you are working in the field of computational biology, then hopefully you are familiar with the excitement associated with coming up with a new idea and thinking about how to follow up on it. Maybe the idea came from a talk you heard at a conference, a paper you read, or a conversation with a colleague. Regardless, your brain is now abuzz with how this idea will be implemented and what data you’ll need to validate it. Ultimately, if your idea pans out, perhaps it will lead to profound scientific insights, a high-impact paper, and a widely used software tool. But for now, it’s just an idea in your head. How do you begin to bring your new idea to fruition? This is, of course, the core of the scientific method–transforming an idea (or hypothesis) into discoveries. Hence, your success as a scientist depends strongly on your ability to efficiently and effectively carry out such transformations.",
link: "https://doi.org/10.1371/journal.pcbi.1010786",
category: "Key-concepts"
},
{
id: "paper48",
name: "A Quick Guide to Organizing Computational Biology Projects",
abstract: "The purpose of this article is to describe one good strategy for carrying out computational experiments. I will not describe profound issues such as how to formulate hypotheses, design experiments, or draw conclusions. Rather, I will focus on relatively mundane issues such as organizing files and directories and documenting progress. These issues are important because poor organizational choices can lead to significantly slower research progress. I do not claim that the strategies I outline here are optimal. These are simply the principles and practices that I have developed over 12 years of bioinformatics research, augmented with various suggestions from other researchers with whom I have discussed these issues.",
link: "https://doi.org/10.1371/journal.pcbi.1000424",
category: "Key-concepts"
},
{
id: "paper49",
name: "Introducing the FAIR Principles for research software",
abstract: "Research software is a fundamental and vital part of research, yet significant challenges to discoverability, productivity, quality, reproducibility, and sustainability exist. Improving the practice of scholarship is a common goal of the open science, open source, and FAIR (Findable, Accessible, Interoperable and Reusable) communities and research software is now being understood as a type of digital object to which FAIR should be applied. This emergence reflects a maturation of the research community to better understand the crucial role of FAIR research software in maximising research value. The FAIR for Research Software (FAIR4RS) Working Group has adapted the FAIR Guiding Principles to create the FAIR Principles for Research Software (FAIR4RS Principles). The contents and context of the FAIR4RS Principles are summarised here to provide the basis for discussion of their adoption. Examples of implementation by organisations are provided to share information on how to maximise the value of research outputs, and to encourage others to amplify the importance and impact of this work.",
link: "https://doi.org/10.1038/s41597-022-01710-x",
category: "Key-concepts"
},
{
id: "paper50",
name: "The nf-core framework for community-curated bioinformatics pipelines",
abstract: "To the Editor — The standardization, portability and reproducibility of analysis pipelines are key issues within the bioinformatics community. Most bioinformatics pipelines are designed for use on-premises; as a result, the associated software dependencies and execution logic are likely to be tightly coupled with proprietary computing environments. This can make it difficult or even impossible for others to reproduce the ensuing results, which is a fundamental requirement for the validation of scientific findings. Here, we introduce the nf-core framework as a means for the development of collaborative, peer-reviewed, best-practice analysis pipelines (Fig. 1). All nf-core pipelines are written in Nextflow and so inherit the ability to be executed on most computational infrastructures, as well as having native support for container technologies such as Docker and Singularity. The nf-core community (Supplementary Fig. 1) has developed a suite of tools that automate pipeline creation, testing, deployment and synchronization. Our goal is to provide a framework for high-quality bioinformatics pipelines that can be used across all institutions and research facilities.",
link: "https://doi.org/10.1038/s41587-020-0439-x",
category: "Workflow-managers"
},
{
id: "paper51",
name: "Enhancing genome recovery across metagenomic samples using MAGmax",
abstract: "The number of metagenome-assembled genomes (MAGs) is rapidly increasing with the growing scale of metagenomic studies, driving fast progress in microbiome research. Sample-wise assembly has become the standard due to its computational efficiency and strain-level resolution. It requires dereplication, the removal of near-identical genomes assembled in different metagenomic samples. We present MAGmax, an efficient dereplication tool that enhances both the quantity and quality of MAGs through a strategy of bin merging and reassembly. Unlike dRep, which selects a single representative bin per genome cluster, MAGmax merges multiple bins within a cluster and reassembles them to increase coverage. MAGmax produces more dereplicated, higher-quality MAGs than dRep at 1.6x its speed and using three times less memory.",
link: "https://doi.org/10.1093/bioinformatics/btaf538",
category: "Bin-refinement benchmarks"
},
  {
id: "paper52",
name: "Nextflow enables reproducible computational workflows",
abstract: "The increasing complexity of readouts for omics analyses goes hand-in-hand with concerns about the reproducibility of experiments that analyze 'big data'. When analyzing very large data sets, the main source of computational irreproducibility arises from a lack of good practice pertaining to software and database usage. Small variations across computational platforms also contribute to computational irreproducibility by producing numerical instability, which is especially relevant to high-performance computational (HPC) environments that are routinely used for omics analyses. We present a solution to this instability named Nextflow, a workflow management system that uses Docker technology for the multi-scale handling of containerized computation.",
link: "https://doi.org/10.1038/nbt.3820",
category: "Workflow-managers"
},
{
id: "paper53",
name: "Identifying and Overcoming Threats to Reproducibility, Replicability, Robustness, and Generalizability in Microbiome Research",
abstract: "The “reproducibility crisis” in science affects microbiology as much as any other area of inquiry, and microbiologists have long struggled to make their research reproducible. We need to respect that ensuring that our methods and results are sufficiently transparent is difficult. This difficulty is compounded in interdisciplinary fields such as microbiome research. There are many reasons why a researcher is unable to reproduce a previous result, and even if a result is reproducible, it may not be correct. Furthermore, failures to reproduce previous results have much to teach us about the scientific process and microbial life itself. This Perspective delineates a framework for identifying and overcoming threats to reproducibility, replicability, robustness, and generalizability of microbiome research. Instead of seeing signs of a crisis in others’ work, we need to appreciate the technical and social difficulties that limit reproducibility in the work of others as well as our own.",
link: "https://doi.org/10.1128/mbio.00525-18",
category: "Reproducibility"
},
{
id: "paper54",
name: "Introducing the FAIR Principles for research software",
abstract: "Research software is a fundamental and vital part of research, yet significant challenges to discoverability, productivity, quality, reproducibility, and sustainability exist. Improving the practice of scholarship is a common goal of the open science, open source, and FAIR (Findable, Accessible, Interoperable and Reusable) communities and research software is now being understood as a type of digital object to which FAIR should be applied. This emergence reflects a maturation of the research community to better understand the crucial role of FAIR research software in maximising research value. The FAIR for Research Software (FAIR4RS) Working Group has adapted the FAIR Guiding Principles to create the FAIR Principles for Research Software (FAIR4RS Principles). The contents and context of the FAIR4RS Principles are summarised here to provide the basis for discussion of their adoption. Examples of implementation by organisations are provided to share information on how to maximise the value of research outputs, and to encourage others to amplify the importance and impact of this work.",
link: "https://doi.org/10.1038/s41597-022-01710-x",
category: "Reproducibility"
},
{
id: "paper55",
name: "The FAIR Guiding Principles for scientific data management and stewardship",
abstract: "There is an urgent need to improve the infrastructure supporting the reuse of scholarly data. A diverse set of stakeholders—representing academia, industry, funding agencies, and scholarly publishers—have come together to design and jointly endorse a concise and measureable set of principles that we refer to as the FAIR Data Principles. The intent is that these may act as a guideline for those wishing to enhance the reusability of their data holdings. Distinct from peer initiatives that focus on the human scholar, the FAIR Principles put specific emphasis on enhancing the ability of machines to automatically find and use the data, in addition to supporting its reuse by individuals. This Comment is the first formal publication of the FAIR Principles, and includes the rationale behind them, and some exemplar implementations in the community.",
link: "https://doi.org/10.1038/sdata.2016.18",
category: "Reproducibility"
},
{
id: "paper56",
name: "The five pillars of computational reproducibility: bioinformatics and beyond",
abstract: "Computational reproducibility is a simple premise in theory, but is difficult to achieve in practice. Building upon past efforts and proposals to maximize reproducibility and rigor in bioinformatics, we present a framework called the five pillars of reproducible computational research. These include (1) literate programming, (2) code version control and sharing, (3) compute environment control, (4) persistent data sharing and (5) documentation. These practices will ensure that computational research work can be reproduced quickly and easily, long into the future. This guide is designed for bioinformatics data analysts and bioinformaticians in training, but should be relevant to other domains of study.",
link: "https://doi.org/10.1093/bib/bbad375",
category: "Reproducibility"
},
{
id: "paper57",
name: "Reproducible Research in Computational Science",
abstract: "Computational science has led to exciting new developments, but the nature of the work has exposed limitations in our ability to evaluate published findings. Reproducibility has the potential to serve as a minimum standard for judging scientific claims when full independent replication of a study is not possible.",
link: "https://doi.org/10.1126/science.1213847",
category: "Reproducibility"
},
{
id: "paper58",
name: "Good enough practices in scientific computing",
abstract: "Computers are now essential in all branches of science, but most researchers are never taught the equivalent of basic lab skills for research computing. As a result, data can get lost, analyses can take much longer than necessary, and researchers are limited in how effectively they can work with software and data. Computing workflows need to follow the same practices as lab projects and notebooks, with organized data, documented steps, and the project structured for reproducibility, but researchers new to computing often don't know where to start. This paper presents a set of good computing practices that every researcher can adopt, regardless of their current level of computational skill. These practices, which encompass data management, programming, collaborating with colleagues, organizing projects, tracking work, and writing manuscripts, are drawn from a wide variety of published sources from our daily lives and from our work with volunteer organizations that have delivered workshops to over 11,000 people since 2010.",
link: "https://doi.org/10.1371/journal.pcbi.1005510",
category: "Reproducibility"
},
{
id: "paper59",
name: "Ten Simple Rules for Reproducible Computational Research",
abstract: "Replication is the cornerstone of a cumulative science. However, new tools and technologies, massive amounts of data, interdisciplinary approaches, and the complexity of the questions being asked are complicating replication efforts, as are increased pressures on scientists to advance their research. As full replication of studies on independently collected data is often not feasible, there has recently been a call for reproducible research as an attainable minimum standard for assessing the value of scientific claims. This requires that papers in experimental science describe the results and provide a sufficiently clear protocol to allow successful repetition and extension of analyses based on original data.",
link: "https://doi.org/10.1371/journal.pcbi.1003285",
category: "Reproducibility"
},
{
id: "paper60",
name: "Analysis of metagenomic data",
abstract: "Metagenomics has revolutionized our understanding of microbial communities, offering unprecedented insights into their genetic and functional diversity across Earth’s diverse ecosystems. Beyond their roles as environmental constituents, microbiomes act as symbionts, profoundly influencing the health and function of their host organisms. Given the inherent complexity of these communities and the diverse environments where they reside, the components of a metagenomics study must be carefully tailored to yield accurate results that are representative of the populations of interest. This Primer examines the methodological advancements and current practices that have shaped the field, from initial stages of sample collection and DNA extraction to the advanced bioinformatics tools employed for data analysis, with a particular focus on the profound impact of next-generation sequencing on the scale and accuracy of metagenomics studies. We critically assess the challenges and limitations inherent in metagenomics experimentation, available technologies and computational analysis methods. Beyond technical methodologies, we explore the application of metagenomics across various domains, including human health, agriculture and environmental monitoring. Looking ahead, we advocate for the development of more robust computational frameworks and enhanced interdisciplinary collaborations. This Primer serves as a comprehensive guide for advancing the precision and applicability of metagenomic studies, positioning them to address the complexities of microbial ecology and their broader implications for human health and environmental sustainability.",
link: "https://doi.org/10.1038/s43586-024-00376-6",
category: "Reproducibility"
},
{
id: "paper61",
name: "Investigating reproducibility and tracking provenance – A genomic workflow case study",
abstract: "Computational bioinformatics workflows are extensively used to analyse genomics data, with different approaches available to support implementation and execution of these workflows. Reproducibility is one of the core principles for any scientific workflow and remains a challenge, which is not fully addressed. This is due to incomplete understanding of reproducibility requirements and assumptions of workflow definition approaches. Provenance information should be tracked and used to capture all these requirements supporting reusability of existing workflows. We have implemented a complex but widely deployed bioinformatics workflow using three representative approaches to workflow definition and execution. Through implementation, we identified assumptions implicit in these approaches that ultimately produce insufficient documentation of workflow requirements resulting in failed execution of the workflow. This study proposes a set of recommendations that aims to mitigate these assumptions and guides the scientific community to accomplish reproducible science, hence addressing reproducibility crisis.",
link: "https://doi.org/10.1186/s12859-017-1747-0",
category: "Reproducibility"
},
{
id: "paper62",
name: "Critical Assessment of Metagenome Interpretation—a benchmark of metagenomics software",
abstract: "Methods for assembly, taxonomic profiling and binning are key to interpreting metagenome data, but a lack of consensus about benchmarking complicates performance assessment. The Critical Assessment of Metagenome Interpretation (CAMI) challenge has engaged the global developer community to benchmark their programs on highly complex and realistic data sets, generated from ∼700 newly sequenced microorganisms and ∼600 novel viruses and plasmids and representing common experimental setups. Assembly and genome binning programs performed well for species represented by individual genomes but were substantially affected by the presence of related strains. Taxonomic profiling and binning programs were proficient at high taxonomic ranks, with a notable performance decrease below family level. Parameter settings markedly affected performance, underscoring their importance for program reproducibility. The CAMI results highlight current challenges but also provide a roadmap for software selection to answer specific research questions.",
link: "https://doi.org/10.1038/nmeth.4458",
category: "Binner benchmarks"
},
{
id: "paper63",
name: "Critical Assessment of Metagenome Interpretation: the second round of challenges",
abstract: "Evaluating metagenomic software is key for optimizing metagenome interpretation and focus of the Initiative for the Critical Assessment of Metagenome Interpretation (CAMI). The CAMI II challenge engaged the community to assess methods on realistic and complex datasets with long- and short-read sequences, created computationally from around 1,700 new and known genomes, as well as 600 new plasmids and viruses. Here we analyze 5,002 results by 76 program versions. Substantial improvements were seen in assembly, some due to long-read data. Related strains still were challenging for assembly and genome recovery through binning, as was assembly quality for the latter. Profilers markedly matured, with taxon profilers and binners excelling at higher bacterial ranks, but underperforming for viruses and Archaea. Clinical pathogen detection results revealed a need to improve reproducibility. Runtime and memory usage analyses identified efficient programs, including top performers with other metrics. The results identify challenges and guide researchers in selecting methods for analyses.",
link: "https://doi.org/10.1038/s41592-022-01431-4",
category: "Binner benchmarks"
},
{
id: "paper64",
name: "CAMI Benchmarking Portal: online evaluation and ranking of metagenomic software",
abstract: "Finding appropriate software and parameter settings to process shotgun metagenome data is essential for meaningful metagenomic analyses. To enable objective and comprehensive benchmarking of metagenomic software, the community-led initiative for the Critical Assessment of Metagenome Interpretation (CAMI) promotes standards and best practices. Since 2015, CAMI has provided comprehensive datasets, benchmarking guidelines, and challenges. However, benchmarking had to be conducted offline, requiring substantial time and technical expertise and leading to gaps in results between challenges. We introduce the CAMI Benchmarking Portal—a central repository of CAMI resources and web server for the evaluation and ranking of metagenome assembly, binning, and taxonomic profiling software. The portal simplifies evaluation, enabling users to easily compare their results with previous and other users’ submissions through a variety of metrics and visualizations. As a demonstration, we benchmark software performance on the marine dataset of the CAMI II challenge. The portal currently hosts 28 675 results and is freely available at https://cami-challenge.org/.",
link: "https://doi.org/10.1093/nar/gkaf369",
category: "Binner benchmarks"
},
{
id: "paper65",
name: "Developing and reusing bioinformatics data analysis pipelines using scientific workflow systems",
abstract: "Data analysis pipelines are now established as an effective means for specifying and executing bioinformatics data analysis and experiments. While scripting languages, particularly Python, R and notebooks, are popular and sufficient for developing small-scale pipelines that are often intended for a single user, it is now widely recognized that they are by no means enough to support the development of large-scale, shareable, maintainable and reusable pipelines capable of handling large volumes of data and running on high performance computing clusters. This review outlines the key requirements for building large-scale data pipelines and provides a mapping of existing solutions that fulfill them. We then highlight the benefits of using scientific workflow systems to get modular, reproducible and reusable bioinformatics data analysis pipelines. We finally discuss current workflow reuse practices based on an empirical study we performed on a large collection of workflows.",
link: "https://doi.org/10.1016/j.csbj.2023.03.003",
category: "Workflow managers"
},
{
id: "paper66",
name: "Recent Microbial Evolutionary Insights From Metagenomics",
abstract: "Microorganisms have profoundly shaped Earth's biological and geological history, from the origins of oxygenic photosynthesis to present-day global biogeochemical cycles. Metagenomics—through its ability to recover genomic information directly from environmental samples—has revolutionized our understanding of microbial evolution by uncovering unbeknownst lineages, revealing functional adaptations, and reshaping our view of the Tree of Life. By bypassing the need for cultivation, shotgun metagenomics and metabarcoding approaches have enabled researchers to investigate microbial diversity, ecology, and evolutionary processes across aquatic, terrestrial, extreme, and host-associated environments. This review highlights recent advances in evolutionary biology driven by metagenomics, including studies on deep evolutionary branching events, microbial adaptation to extreme environments, the evolution of host-associated microbiomes, and the emergence and spread of pathogens and antimicrobial resistance. The integration of ancient DNA has expanded our ability to reconstruct past ecosystems and disease dynamics, offering insights into long-term microbial evolution. In parallel, studies of microbial domestication and urban settings reveal how human practices have shaped microbial genomes over millennia. Despite significant progress, key challenges remain—including improving bioinformatic tools for degraded ancient DNA, resolving deep phylogenetic relationships, identifying adaptive variants, and linking genomic shifts to ecosystem-level processes. The future of microbial evolutionary research will depend on combining longitudinal metagenomic data, experimental evolution, functional assays, and predictive modeling to better understand microbial responses to climate change and anthropogenic pressures. Together, these approaches will deepen our understanding of microbial evolution and its consequences for life on Earth—past, present, and future.",
link: "https://doi.org/10.1093/gbe/evag029",
category: "Reviews"
},
{
id: "paper67",
name: "Discovery and cultivation of prokaryotic taxa in the age of metagenomics and artificial intelligence",
abstract: "Despite advances in sequencing, microbial genomics, and cultivation techniques, the vast majority of prokaryotic species remain uncultured, which is a persistent bottleneck in microbiology and microbial ecology. This perspective outlines a conceptual framework to improve the transition from genome-resolved metagenomics to the targeted isolation of yet-uncultured prokaryotic taxa. The proposed framework integrates the induced reshaping of microbiomes, genome-based inferences of physiological and phenotypic traits, culture media design, and targeted culturomics, enabling hypothesis-driven cultivation. In addition, this manuscript addresses the critical limitations in the field, including the sequence-to-function gap, and emphasizes the synergistic potential of experimental microbiology, microbial ecology, metagenomics, and artificial intelligence–based predictions to enhance rational and actionable roadmaps for discovering and cultivating novel prokaryotic lineages.",
link: "https://doi.org/10.1093/ismejo/wrag012",
category: "Reviews"
},
{
id: "paper68",
name: "Computational Metagenomics: State of the Art",
abstract: "Computational metagenomics has revolutionized our understanding of the human microbiome, enabling the characterization of microbial diversity, the prediction of functional capabilities, and the identification of associations with human health outcomes. This review provides a concise yet comprehensive overview of state-of-the-art computational approaches in metagenomics, alongside widely used methods and tools employed in amplicon-based metagenomics. It is intended as an introductory resource for new researchers, outlining key methodologies, challenges, and future directions in the field. We discuss recent advances in bioinformatics pipelines, machine learning (ML) models, and integrative frameworks that are transforming our understanding of the microbiome’s role in health and disease. By addressing current limitations and proposing innovative solutions, this review aims to outline a roadmap for future research and clinical translation in computational metagenomics.",
link: "https://doi.org/10.3390/ijms26189206",
category: "Reviews"
},
{
id: "paper69",
name: "MAGdb: a comprehensive high quality MAGs repository for exploring microbial metagenome-assemble genomes",
abstract: "Metagenomic analyses of microbial communities have unveiled a substantial level of interspecies and intraspecies genetic diversity by reconstructing metagenome-assembled genomes (MAGs). The MAG database (MAGdb) boasts an impressive collection of 74 representative research papers, spanning clinical, environmental, and animal categories and comprising 13,702 paired-end run accessions of metagenomic sequencing and 99,672 high quality MAGs with manually curated metadata. MAGdb provides a user-friendly interface that users can browse, search, and download MAGs and their corresponding metadata information. It represents a valuable resource for researchers in discovering potential novel microbial lineages and understanding their ecological roles. MAGdb is publicly available at https://magdb.nanhulab.ac.cn/.",
link: "https://doi.org/10.1186/s13059-025-03711-6",
category: "Databases"
},
{
id: "paper70",
name: "gcMeta 2025: a global repository of metagenome-assembled genomes enabling cross-ecosystem microbial discovery and function research",
abstract: "The rapid growth of metagenomic sequencing has generated an unprecedented wealth of metagenome-assembled genomes (MAGs), transforming opportunities for microbial discovery and functional characterization. Yet, full utilization of these resources has been constrained by heterogeneous data generation practices and inconsistent analytical pipelines. The gcMeta database addresses this gap by compiling MAGs through both public acquisition and de novo assembly. This release integrates over 2.7 million MAGs from 104 266 samples spanning various biomes, covering human, animal, plant, marine, freshwater, and extreme environments. It establishes 50 biome-specific MAG catalogues comprising 109 586 species-level clusters, of which 63% (69 248) represents previously uncharacterized taxa, and annotates >74.9 million novel genes. By linking functional traits with microbial co-occurrence networks, gcMeta identifies keystone taxa central to biogeochemical cycling and environmental adaptation. The platform further supports cross-ecosystem functional comparisons, revealing niche-specific metabolic pathways and stress-response genes. Moreover, gcMeta provides standardized, AI-ready datasets encompassing microbial enzymes, anti-phage defense systems, and other functional modules, enabling advanced machine learning applications. By bridging microbial “sequence discovery” with “functional utilization,” gcMeta establishes a foundation for ecological research, industrial biotechnology, and novel gene mining. The platform is freely accessible at https://gcmeta.wdcm.org/.",
link: "https://doi.org/10.1093/nar/gkaf1115",
category: "Databases"
},
{
id: "paper71",
name: "SPIRE: a Searchable, Planetary-scale mIcrobiome REsource",
abstract: "Meta'omic data on microbial diversity and function accrue exponentially in public repositories, but derived information is often siloed according to data type, study or sampled microbial environment. Here we present SPIRE, a Searchable Planetary-scale mIcrobiome REsource that integrates various consistently processed metagenome-derived microbial data modalities across habitats, geography and phylogeny. SPIRE encompasses 99 146 metagenomic samples from 739 studies covering a wide array of microbial environments and augmented with manually-curated contextual data. Across a total metagenomic assembly of 16 Tbp, SPIRE comprises 35 billion predicted protein sequences and 1.16 million newly constructed metagenome-assembled genomes (MAGs) of medium or high quality. Beyond mapping to the high-quality genome reference provided by proGenomes3 (http://progenomes.embl.de), these novel MAGs form 92 134 novel species-level clusters, the majority of which are unclassified at species level using current tools. SPIRE enables taxonomic profiling of these species clusters via an updated, custom mOTUs database (https://motu-tool.org/) and includes several layers of functional annotation, as well as crosslinks to several (micro-)biological databases. The resource is accessible, searchable and browsable via http://spire.embl.de.",
link: "https://doi.org/10.1093/nar/gkad943",
category: "Databases"
},
{
id: "paper72",
name: "MGnify Genomes: A Resource for Biome-specific Microbial Genome Catalogues",
abstract: "An increasingly common output arising from the analysis of shotgun metagenomic datasets is the generation of metagenome-assembled genomes (MAGs), with tens of thousands of MAGs now described in the literature. However, the discovery and comparison of these MAG collections is hampered by the lack of uniformity in their generation, annotation and storage. To address this, we have developed MGnify Genomes, a growing collection of biome-specific non-redundant microbial genome catalogues generated using MAGs and publicly available isolate genomes. Genomes within a biome-specific catalogue are organised into species clusters. For species that contain multiple conspecific genomes, the highest quality genome is selected as the representative, always prioritising an isolate genome over a MAG. The species representative sequences and annotations can be visualised on the MGnify website and the full catalogue and associated analysis outputs can be downloaded from MGnify servers. A suite of online search tools is provided allowing users to compare their own sequences, ranging from a gene to sets of genomes, against the catalogues. Seven biomes are available currently, comprising over 300,000 genomes that represent 11,048 non-redundant species, and include 36 taxonomic classes not currently represented by cultured genomes. MGnify Genomes is available at https://www.ebi.ac.uk/metagenomics/browse/genomes/.",
link: "https://doi.org/10.1016/j.jmb.2023.168016",
category: "Databases"
},
{
id: "paper73",
name: "The mOTUs online database provides web-accessible genomic context to taxonomic profiling of microbial communities",
abstract: "Determining the taxonomic composition (taxonomic profiling) is a fundamental task in studying environmental and host-associated microbial communities. However, genome-resolved microbial diversity on Earth remains undersampled, and accessing the genomic context of taxa detected during taxonomic profiling remains a challenging task. Here, we present the mOTUs online database (mOTUs-db), which is consistent with and interfaces with the mOTUs taxonomic profiling tool. It comprises 2.83 million metagenome-assembled genomes (MAGs) and 919 090 single-cell and isolate genomes from 124 295 species-level taxonomic units. In addition to being one of the largest prokaryotic genome resources to date, all MAGs in the mOTUs-db were reconstructed de novo in 117 902 individual samples by abundance correlation of scaffolds across multiple samples for improved quality metrics. The database complements the Genome Taxonomy Database, with over 50% of its species-level taxonomic groups being unique. It also offers interactive querying, enabling users to explore and download genomes at various taxonomic levels. The mOTUs-db is accessible at https://motus-db.org.",
link: "https://doi.org/10.1093/nar/gkae1004",
category: "Databases"
},
{
id: "paper74",
name: "GlobDB: a comprehensive species-dereplicated microbial genome resource",
abstract: "Over the past years, substantial numbers of microbial species' genomes have been deposited outside of conventional INSDC databases. The GlobDB aggregates 14 independent genomic catalogues to provide a comprehensive database of species-dereplicated microbial genomes, with consistent taxonomy, annotations, and additional analysis resources. The GlobDB more than doubles the number of microbial species represented by genomes relative to the field standard genome taxonomy database. The GlobDB is available at https://globdb.org/.",
link: "https://doi.org/10.1093/bioadv/vbaf280",
category: "Databases"
},
{
id: "paper75",
name: "The MicrobeAtlas database: Global trends and insights into Earth's microbial ecosystems",
abstract: "Environmental DNA sequencing has revolutionized our understanding of microbial diversity and ecology. Microbiomes have now been sequenced across the entire planet—from the deep subsurface to the mountaintops—covering a myriad of hosts, biomes, and conditions. Yet, the diversity of sequencing and processing strategies hampers universal insights. MicrobeAtlas unifies more than two million microbiome samples in a single resource, harmonized to facilitate discoveries across technologies. Communities are hierarchically quantified at adjustable small subunit rRNA marker gene resolution and feature detailed metadata, including rich geographic information. Connections to the genome, phenotype, and ecological resources enable multimodal insights. Microbial lineages can be reliably tracked across environments, including a “long tail” of rare, uncharacterized species. Recurring community structures and geographic preferences become apparent, and global, taxonomy-specific generalism trends emerge. With MicrobeAtlas (www.microbeatlas.org), known and newly described species and communities can readily be placed into their ecological context, taking full advantage of earlier work.",
link: "https://doi.org/10.1016/j.cell.2026.01.021",
category: "Databases"
},
{
id: "paper76",
name: "A genomic catalog of Earth's microbiomes",
abstract: "The reconstruction of bacterial and archaeal genomes from shotgun metagenomes has enabled insights into the ecology and evolution of environmental and host-associated microbiomes. Here we applied this approach to >10,000 metagenomes collected from diverse habitats covering all of Earth’s continents and oceans, including metagenomes from human and animal hosts, engineered environments, and natural and agricultural soils, to capture extant microbial, metabolic and functional potential. This comprehensive catalog includes 52,515 metagenome-assembled genomes representing 12,556 novel candidate species-level operational taxonomic units spanning 135 phyla. The catalog expands the known phylogenetic diversity of bacteria and archaea by 44% and is broadly available for streamlined comparative analyses, interactive exploration, metabolic modeling and bulk download. We demonstrate the utility of this collection for understanding secondary-metabolite biosynthetic potential and for resolving thousands of new host linkages to uncultivated viruses. This resource underscores the value of genome-centric approaches for revealing genomic properties of uncultivated microorganisms that affect ecosystem processes.",
link: "https://doi.org/10.1038/s41587-020-0718-6",
category: "Databases"
},
];

// Expose globally for non-module usage
window.PAPERS_REVIEW = PAPERS_REVIEW;
