const MAG_PIPELINES = [
    {
        "id": "pipeline1",
        "name": "ancient DNA",
        "attributes": {
            "qc": [
                "FastQC",
                "fastp",
                "BBTools"
            ],
            "assembly": [
                "Bowtie2",
                "MEGAHIT"
            ],
            "binning": [
                "CONCOCT",
                "MaxBin",
                "MetaBAT"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [],
            "other": [
                "mapDamage2"
            ]
        },
        "description": "ancient DNA pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline2",
        "name": "Anvi'o",
        "attributes": {
            "qc": [
                "Illumina-utils"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT",
                "IBDA-UD"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2",
                "BinSanity"
            ],
            "qualityAssessment": [],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "KrakenUniq",
                "Centrifuge"
            ],
            "functionalAnnotation": ["DIAMOND (NCBI COG)", "Pyrodigal", "HMMER"],
            "other": [
                    ""
            ]
        },
        "description": "Anvi'o pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline3",
        "name": "Aviary",
        "attributes": {
            "qc": [
                "FastQC",
                "Filtlong",
                "NanoPack2",
                "SingleM"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT",
                "metaFlye",
                "Unicycler"
            ],
            "binning": [
                "MetaBAT2",
                "MetaBAT",
                "MaxBin2",
                "VAMB",
                "CONCOCT",
                "Rosella"
            ],
            "qualityAssessment": [
                "CheckM",
                "metaQUAST",
                "CoverM"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "DIAMOND (eggNOG)"
            ],
            "other": [
                "Lorikeet"
            ]
        },
        "description": "Aviary pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline4",
        "name": "BV-BRC",
        "attributes": {
            "qc": [
                "TrimGalore",
                "BBTools",
                "BLAST"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT"
            ],
            "binning": [
                "PATRIC metagenome binning service"
            ],
            "qualityAssessment": [
                "EvalG and EvalCon"
            ],
            "refinement": [],
            "taxonomy": [
                "RASTtk"
            ],
            "functionalAnnotation": [],
            "other": [
                "VIGOR4",
                "Mat_Peptide"
            ]
        },
        "description": "BV-BRC pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline5",
        "name": "DATMA",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "FastQC",
                "FLASH2",
                "BWA"
            ],
            "assembly": [
                "metaSPAdes",
                "Velvet",
                "MEGAHIT"
            ],
            "binning": [
                "CLAME"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [],
            "taxonomy": [
                "BLAST",
                "Kaiju"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "GeneMark"
            ],
            "other": [
                "Krona"
            ]
        },
        "description": "DATMA pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline6",
        "name": "EasyMetagenome",
        "attributes": {
            "qc": [
                "KneadData",
                "HostPurge",
                "FastQC"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT"
            ],
            "binning": [
                "MetaWRAP-native module"
            ],
            "qualityAssessment": [
                "CoverM",
                "CheckM2"
            ],
            "refinement": [
                "MetaWRAP-native module"
            ],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "MetaProdigal",
                "eggNOG-mapper"
            ],
            "other": [
                "dRep",
                "Kraken2",
                "Bracken",
                "HUMAnN3"
            ]
        },
        "description": "EasyMetagenome pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline7",
        "name": "EasyNanoMeta",
        "attributes": {
            "qc": [
                "fastp",
                "BEDTools",
                "Porechop",
                "Minimap2",
                "SAMtools"
            ],
            "assembly": [
                "metaFlye",
                "OPERA-MS",
                "metaSPAdes",
                "MetaPlatanus",
                "NextPolish"
            ],
            "binning": [
                "SemiBin2",
                "MetaBAT2",
                "MaxBin2",
                "CONCOCT",
                "VAMB"
            ],
            "qualityAssessment": [
                "CheckM2"
            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk2",
                "PhyloPhlAn"
            ],
            "functionalAnnotation": [
                "Prokka"
            ],
            "other": [
                "Kraken2",
                "Centrifuge"
            ]
        },
        "description": "EasyNanoMeta pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline8",
        "name": "Eukfinder",
        "attributes": {
            "qc": [
                "Bowtie2",
                "Trimmomatic"
            ],
            "assembly": [
                "metaSPAdes"
            ],
            "binning": [
                "MyCC",
                "Metaxa2"
            ],
            "qualityAssessment": [],
            "refinement": [],
            "taxonomy": [
                "Centrifuge",
                "PLAST"
            ],
            "functionalAnnotation": [],
            "other": []
        },
        "description": "Eukfinder pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline9",
        "name": "Galaxy",
        "attributes": {
            "qc": [
                "FastQC",
                "Seqtk",
                "Trimmomatic"
            ],
            "assembly": [
                "metaSPAdes"
            ],
            "binning": [
                "MaxBin2"
            ],
            "qualityAssessment": [],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk2",
                "CAT"
            ],
            "functionalAnnotation": [
                "Prokka"
            ],
            "other": ["Kraken"]
        },
        "description": "Galaxy pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline10",
        "name": "GEN-ERA",
        "attributes": {
            "qc": [
                "fastp",
                "FastQC"
            ],
            "assembly": [
                "SPAdes",
                "metaSPAdes",
                "Canu",
                "metaFlye",
                "Pilon",
                "RagTag"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT"
            ],
            "qualityAssessment": [
                "CheckM",
                "GUNC",
                "CheckM2",
                "EukCC",
                "BUSCO",
                "Physeter",
                "Kraken",
                "QUAST"
            ],
            "refinement": [],
            "taxonomy": [
                "AMAW",
                "BRAKER2",
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "Mantis",
                "Anvi'o scripts (KEGG)"
            ],
            "other": [
                "OrthoFinder"
            ]
        },
        "description": "GEN-ERA pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline11",
        "name": "HiFi-MAG",
        "attributes": {
            "qc": [],
            "assembly": [],
            "binning": [
                "MetaBAT2",
                "SemiBin2"
            ],
            "qualityAssessment": [
                "CheckM2"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [],
            "other": []
        },
        "description": "HiFi-MAG pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline12",
        "name": "IDseq",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "STAR",
                "Bowtie2",
                "CD-HIT"
            ],
            "assembly": [
                "SPAdes",
                "Bowtie2"
            ],
            "binning": [],
            "qualityAssessment": [],
            "refinement": [],
            "taxonomy": [
                "GSNAPL",
                "RAPsearch2"
            ],
            "functionalAnnotation": [],
            "other": []
        },
        "description": "IDseq pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline13",
        "name": "KBase",
        "attributes": {
            "qc": [
                "FastQC",
                "Trimmomatic",
                "Cutadapt"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT",
                "IBDA-UD"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "RASTtk",
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "DRAM"
            ],
            "other": [
                "OMEGGA",
                "ModelSEED2",
                "Kaiju",
                "FastANI",
                "FastTree2",
                "dRep",
                "Muscle5"
            ]
        },
        "description": "KBase pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline14",
        "name": "MAGNETO",
        "attributes": {
            "qc": [
                "fastp",
                "Bowtie2",
                "FastQscreen"
            ],
            "assembly": [
                "MEGAHIT",
                "Simka"
            ],
            "binning": [
                "MetaBAT2"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [
            ],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "Linclust",
                "CD-HIT",
                "eggNOG-mapper"
            ],
            "other": [
                "mOTUs",
                "dRep"
            ]
        },
        "description": "MAGNETO pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline15",
        "name": "metaGEM",
        "attributes": {
            "qc": [
                "fastp"
            ],
            "assembly": [
                "MEGAHIT",
                "BWA"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "MetaWRAP-native module"
            ],
            "refinement": [
                
            ],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prokka"
            ],
            "other": [
                "Roary",
                "CarveMe",
                "SMETANA",
                "MEMOTE",
                "GRiD"
            ]
        },
        "description": "metaGEM pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline16",
        "name": "MetaGenePipe",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "TrimGalore",
                "FastQC"
            ],
            "assembly": [
                "MEGAHIT"
            ],
            "binning": [],
            "qualityAssessment": [],
            "refinement": [],
            "taxonomy": [
                "DIAMOND (SwissProt)"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "HMMER (KOfamKOALA)"
            ],
            "other": ["BLAST"]
        },
        "description": "MetaGenePipe pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline17",
        "name": "Metagenome-Atlas",
        "attributes": {
            "qc": [
                "BBTools"
            ],
            "assembly": [
                "MEGAHIT",
                "metaSPAdes"
            ],
            "binning": [
                "MetaBAT2",
                "MaxBin2",
                "VAMB"
            ],
            "qualityAssessment": [
                "BUSCO",
                "CheckM",
                "CheckM2"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "eggNOG-mapper",
                "DRAM"
            ],
            "other": ["dRep"]
        },
        "description": "Metagenome-Atlas pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline18",
        "name": "Metagenomics-Toolkit",
        "attributes": {
            "qc": [
                "fastp",
                "Porechop",
                "Filtlong",
                "NanoPack2",
                "KMC",
                "Nonpareil"
            ],
            "assembly": [
                "metaFlye",
                "metaSPAdes",
                "MEGAHIT"
            ],
            "binning": [
                "MetaBAT2",
                "MetaCoAG",
                "MetaBinner"
                
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [
                "MAGScoT"
            ],
            "taxonomy": [
                "MMSeqs2 taxonomy",
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "Prokka",
                "RGI"
            ],
            "other": [
                "CarveMe",
                "SMETANA",
                "MEMOTE",
                "gapseq",
                "Pyani",
                "SANS",
            ]
        },
        "description": "Metagenomics-Toolkit pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline19",
        "name": "Metaphor",
        "attributes": {
            "qc": [
                "FastQC",
                "fastp",
                "MultiQC"
            ],
            "assembly": [
                "MEGAHIT"
            ],
            "binning": [
                "VAMB",
                "MetaBAT2",
                "CONCOCT"
            ],
            "qualityAssessment": [
                "metaQUAST"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "DIAMOND (NCBI COG)"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "Prokka"
            ],
            "other": []
        },
        "description": "Metaphor pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline20",
        "name": "metagWGS",
        "attributes": {
            "qc": [
                "FastQC",
                "Cutadapt",
                "Sickle",
                "SAMtools",
                "BWA"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT",
                "hifiasm",
                "metaFlye"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "metaQUAST"
            ],
            "refinement": [
                "Binette",
            ],
            "taxonomy": [
                "GTDB-Tk2"
                
            ],
            "functionalAnnotation": [
                "Prodigal",
                "eggNOG-mapper"
            ],
            "other": ["dRep", "Kaiju"]
        },
        "description": "metagWGS pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline21",
        "name": "MetaWRAP",
        "attributes": {
            "qc": [
                "FastQC",
                "TrimGalore"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [
                "MetaWRAP-native module"
            ],
            "taxonomy": [
                "Kraken",
                "BLAST"
            ],
            "functionalAnnotation": [
                "Prokka"
            ],
            "other": [
                "Blobology",
                "Kraken"
            ]
        },
        "description": "MetaWRAP pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline22",
        "name": "MGnify",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "Biopython"
            ],
            "assembly": [
                "metaSPAdes"
            ],
            "binning": [],
            "qualityAssessment": [],
            "refinement": [
                ""
            ],
            "taxonomy": [
                "DIAMOND (UniRef90)"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "FragGeneScan",
                "InterProScan",
                "eggNOG-mapper",
                "HMMER"
            ],
            "other": [
                "antiSMASH"
            ]
        },
        "description": "MGnify pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline23",
        "name": "MOSHPIT",
        "attributes": {
            "qc": [
                "Cutadapt",
                "Bowtie2"
            ],
            "assembly": [
                "SPAdes",
                "MEGAHIT"
            ],
            "binning": [
                "MetaBAT2"
            ],
            "qualityAssessment": [
                "QUAST",
                "BUSCO"
            ],
            "refinement": [
                "Sourmash"
            ],
            "taxonomy": [
                "Kraken2",
                "Kaiju"
            ],
            "functionalAnnotation": [
                "eggNOG-mapper",
                "DIAMOND (eggNOG, CAZy)"
            ],
            "other": []
        },
        "description": "MOSHPIT pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline24",
        "name": "MUFFIN",
        "attributes": {
            "qc": [
                "fastp",
                "Filtlong"
            ],
            "assembly": [
                "SPAdes",
                "Flye",
                "Unicycler"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [
                "MetaWRAP-native module"
            ],
            "taxonomy": [
                "Sourmash (GTDB)"
            ],
            "functionalAnnotation": [
                "eggNOG-mapper"
            ],
            "other": [
                "Salmon",
                "Trinity"
            ]
        },
        "description": "MUFFIN pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline25",
        "name": "NanoPhase",
        "attributes": {
            "qc": [
                "Filtlong"
            ],
            "assembly": [
                "metaFlye",
                "Racon",
                "medaka"
            ],
            "binning": [
                "MetaBAT2",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "CheckM",
                "QUAST"
            ],
            "refinement": [
                "MetaWRAP-native module"
            ],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "DIAMOND (UniProtKB)"
            ],
            "other": []
        },
        "description": "NanoPhase pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline26",
        "name": "nf-core/mag",
        "attributes": {
            "qc": [
                "fastp",
                "AdapterRemoval",
                "Bowtie2",
                "BBTools",
                "Trimmomatic",
                "FastQC",
                "Porechop",
                "Filtlong",
                "NanoPack2",
            ],
            "assembly": [
                "MEGAHIT",
                "SPAdes",
                "hybridSPAdes",
                "Flye",
                "metaMDBG"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "BUSCO",
                "CheckM",
                "CheckM2",
                "GUNC",
                "QUAST"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "GTDB-Tk2",
                "CAT"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "Prokka",
                "MetaEuk"
            ],
            "other": [
                "Kraken2",
                "Centrifuge",
                "geNomad",
                "Tiara",
                "PyDamage",
                "MultiQC"
            ]
        },
        "description": "nf-core/mag pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline27",
        "name": "ngs-preprocess-MpGAP-Bacannot",
        "attributes": {
            "qc": [
                "Porechop",
                "NanoPack2",
                "pycoQC",
                "fastp"
            ],
            "assembly": [
                "SPAdes",
                "Flye",
                "Canu",
                "Unicycler",
                "Shovill",
                "HASLR",
                "Raven",
                "Shasta",
                "wtdbg2",
                "Pilon"
            ],
            "binning": [],
            "qualityAssessment": [],
            "refinement": [],
            "taxonomy": [],
            "functionalAnnotation": [
                "Prokka",
                "KOfamScan",
                "KEGGDecoder",
                "Bakta",
                "Barrnap",
                "antiSMASH"
            ],
            "other": [
                "AMRFinderPlus",
                "CARD-RGI",
                "BEDTools",
                "Phigaro",
                "VFDB",
                "PlasmidFinder",
                "MLST",
                "Platon",
                "PHASTER",
                "ARGminer",
                "ResFinder"
            ]
        },
        "description": "ngs-preprocess-MpGAP-Bacannot pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline28",
        "name": "SnakeMAGs",
        "attributes": {
            "qc": [
                "Illumina-utils",
                "Trimmomatic",
                "Bowtie2"
            ],
            "assembly": [
                "MEGAHIT"
            ],
            "binning": [
                "MetaBAT2"
            ],
            "qualityAssessment": [
                "CheckM",
                "GUNC",
                "CoverM"
            ],
            "refinement": [
                
            ],
            "taxonomy": ["GTDB-Tk2"],
            "functionalAnnotation": [],
            "other": []
        },
        "description": "SnakeMAGs pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline29",
        "name": "SqueezeMeta",
        "attributes": {
            "qc": [
                "PRINSEQ",
                "Trimmomatic",
                "SAMtools"
            ],
            "assembly": [
                "MEGAHIT",
                "SPAdes",
                "Canu",
                "Flye"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2"
            ],
            "qualityAssessment": [
                "CheckM",
                "CheckM2",
                "CompareM"
            ],
            "refinement": [
                "DASTool"
            ],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "MUMmer",
                "HMMER",
                "Barrnap"
            ],
            "other": [
                "POGENOM",
                "DIAMOND (NCBI COG, KEGG)",
                "SQMtools"
            ]
        },
        "description": "SqueezeMeta pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline30",
        "name": "Sunbeam",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "Cutadapt",
                "Komplexity",
                "BWA"
            ],
            "assembly": [
                "MEGAHIT"
            ],
            "binning": [],
            "qualityAssessment": [],
            "refinement": [],
            "taxonomy": [],
            "functionalAnnotation": [
                "Prodigal",
                "BLAST",
                "DIAMOND"
            ],
            "other": [
                "Kraken"
            ]
        },
        "description": "Sunbeam pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline31",
        "name": "VEBA",
        "attributes": {
            "qc": [
                "KneadData",
                "fastp",
                "BBTools",
                "Bowtie2",
                "NanoPack2",
                "Minimap2"
            ],
            "assembly": [
                "metaSPAdes",
                "SPAdes",
                "rnaSPAdes",
                "MEGAHIT",
                "Flye",
                "metaFlye"
            ],
            "binning": [
                "MetaBAT2",
                "CONCOCT",
                "MaxBin2",
                "SemiBin2"
            ],
            "qualityAssessment": [
                "CheckM2",
                "Tiara",
                "CheckV",
                "BUSCO",
                "CoverM"
            ],
            "refinement": [
                "Binette"
            ],
            "taxonomy": [
                "GTDB-Tk2",
                "MetaEuk",
                "geNomad",
                "VirFinder"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "DIAMOND (UniRef50/90, MIBiG, VFDB, CAZy)",
                "HMMER (Pfam, NCBIfam-AMR, AntiFam, KOfamKOALA)",
                "MicrobeAnnotator"
            ],
            "other": [
                "antiSMASH",
                "Muscle5",
                "FastTree2",
                "FastANI",
                "sylph",
                "HUMAnN3"
            ]
        },
        "description": "VEBA pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline32",
        "name": "BugBuster",
        "attributes": {
            "qc": [
                "fastp",
                "Bowtie2"
            ],
            "assembly": [
                "MEGAHIT"
            ],
            "binning": [
                "MetaBAT2",
                "SemiBin2",
                "COMEBin"
            ],
            "qualityAssessment": [
                "CheckM2"
            ],
            "refinement": [
                "MetaWRAP-native module"
            ],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "MetaCerberus"
            ],
            "other": [
                "deepARG",
                "Kraken2",
                "Sourmash"
            ]
        },
        "description": "BugBuster pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline33",
        "name": "MG-TK",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "Porechop",
                "Kraken",
                "Kraken2",
                "SDM"
            ],
            "assembly": [
                "SPAdes",
                "MEGAHIT",
                "Flye",
                "metaMDBG"
            ],
            "binning": [
                "MetaBAT2",
                "SemiBin2",
                "MetaDecoder"
            ],
            "qualityAssessment": [
                "CheckM",
                "CheckM2"
            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "DIAMOND (KEGG, CAZy, eggNOG)",
                "eggNOG-mapper"
            ],
            "other": [
                "mOTUs2",
                "MetaPhlAn",
                "freebayes",
                "BCFtools"
            ]
        },
        "description": "MG-TK pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline34",
        "name": "MAGO",
        "attributes": {
            "qc": [
                "FastQC",
                "fastp"
            ],
            "assembly": [
                "metaSPAdes",
                "MEGAHIT",
                "IBDA-UD"
            ],
            "binning": [
                "MaxBin2",
                "MetaBAT",
                "CONCOCT",
                "BinSanity"
            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prokka"
            ],
            "other": [
                "Roary",
                "ezTree",
                "FastANI"
            ]
        },
        "description": "MAGO pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline35",
        "name": "IMG/M",
        "attributes": {
            "qc": [

            ],
            "assembly": [

            ],
            "binning": [
                "SemiBin2"

            ],
            "qualityAssessment": [
                "CheckM"
            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "GeneMarkS-2",
                "HMMER (NCBI COG, Pfam, TIGRFAMs)"
            ],
            "other": [
                "EukCC",
                "SignalP",
                "TMHMM"
            ]
        },
        "description": "IMG/M pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline36",
        "name": "WGSA2+/LoRA",
        "attributes": {
            "qc": [
                "KneadData",
                "fastp", 
                "Kraken2"

            ],
            "assembly": [
                "metaSPAdes",
                "metaFlye",
                "Minimap2",
                "Samtools"
            ],
            "binning": [
                "MetaBAT2"

            ],
            "qualityAssessment": [
                "CheckM",
                "CheckM2"
            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "eggNOG-mapper",
                "MinPath"
            ],
            "other": [
                "SortMeRNA",
                "Krona",
                "Trinity"
            ]
        },
        "description": "WGSA2+/LoRA pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline37",
        "name": "JAMS",
        "attributes": {
            "qc": [
                "Trimmomatic",
                "Bowtie2"

            ],
            "assembly": [
                "SPAdes",
                "MEGAHIT"
            ],
            "binning": [

            ],
            "qualityAssessment": [

            ],
            "refinement": [],
            "taxonomy": [
                "Kraken2"
            ],
            "functionalAnnotation": [
                "Prokka",
                "InterProScan"
            ],
            "other": [
                "Samtools",
                "BEDTools",
            ]
        },
        "description": "JAMS pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline38",
        "name": "SPIRE",
        "attributes": {
            "qc": [
                "NGLess"

            ],
            "assembly": [
                "MEGAHIT",
                "BWA",
                "Samtools"
            ],
            "binning": [
                "MetaBAT2"
            ],
            "qualityAssessment": [
                "CheckM2",
                "GUNC"

            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "eggNOG-mapper"
            ],
            "other": [
                "Barrnap",
                "abricate (MEGARes, VFDB)",
                "Seqtk",
                "macrel",
                "Mash"
            ]
        },
        "description": "SPIRE pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline39",
        "name": "EURYALE (MEDUSA)",
        "attributes": {
            "qc": [
                "FastQC",
                "fastp",
                "Bowtie2",
                "MultiQC"

            ],
            "assembly": [
                "MEGAHIT",
            ],
            "binning": [

            ],
            "qualityAssessment": [

            ],
            "refinement": [],
            "taxonomy": [
                "Kaiju",
                "Kraken2"
            ],
            "functionalAnnotation": [
                "DIAMOND (NCBI nr)"
            ],
            "other": [
                "Krona"
            ]
        },
        "description": "EURYALE (MEDUSA) pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline40",
        "name": "nIMP3",
        "attributes": {
            "qc": [
                "BWA",
                "Samtools",
                "BBTools",
                "FastQC",
                "SortMeRNA"
            ],
            "assembly": [
                "MEGAHIT",
            ],
            "binning": [

            ],
            "qualityAssessment": [

            ],
            "refinement": [],
            "taxonomy": [
                "Kraken2"
            ],
            "functionalAnnotation": [
                "gffquant"
            ],
            "other": [
                "mOTUs",
                "MultiQC",
                "MetaPhlAn4",
                "Salmon",
                "kallisto"
            ]
        },
        "description": "nIMP3 pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline41",
        "name": "Mapler",
        "attributes": {
            "qc": [
                "FastQC"
            ],
            "assembly": [
                "metaMDBG",
                "metaFlye",
                "hifiasm",
                "OPERA-MS",
                "Minimap2"
            ],
            "binning": [
                "MetaBAT2"
            ],
            "qualityAssessment": [
                "CheckM2",
                "metaQUAST"
            ],
            "refinement": [],
            "taxonomy": [
                "Kraken2",
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [

            ],
            "other": [
                "KAT"
            ]
        },
        "description": "Mapler pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline42",
        "name": "ont-assembly-snake/score-assemblies",
        "attributes": {
            "qc": [
                "Filtlong",
                "Rasusa"
            ],
            "assembly": [
                "Raven",
                "Flye",
                "Miniasm",
                "Canu",
                "Unicycler",
                "Racon",
                "medaka",
                "Pilon",
                "Polypolish",
                "POLCA"
            ],
            "binning": [

            ],
            "qualityAssessment": [
                "QUAST",
                "BUSCO",
                "DNAdiff (MUMmer)",
                "Pomoxis"
            ],
            "refinement": [],
            "taxonomy": [

            ],
            "functionalAnnotation": [
                "Prodigal",
                "Bakta",
                "DIAMOND (SwissProt)"
            ],
            "other": [
                "Homopolish",
                "Proovframe"
            ]
        },
        "description": "ont-assembly-snake/score-assemblies pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline43",
        "name": "Bactopia",
        "attributes": {
            "qc": [
                "BBTools",
                "fastp",
                "FastQC",
                "NanoPack2",
                "Rasusa",
                "Porechop",
                "fastq-scan"
            ],
            "assembly": [
                "Shovill",
                "Dragonflye",
                "Unicycler"
            ],
            "binning": [

            ],
            "qualityAssessment": [
                "CheckM",
                "QUAST",
                "BUSCO"
            ],
            "refinement": [],
            "taxonomy": [
                "GTDB-Tk2"
            ],
            "functionalAnnotation": [
                "Bakta",
                "Prokka"
            ],
            "other": [
                "Merlin",
                "Sourmash",
                "Mash",
                "MLST",
                "AMRFinderPlus",
                "Kraken2",
                "Bracken",
                "FastANI"
            ]
        },
        "description": "Bactopia pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline44",
        "name": "Arcadia-Science/metagenomics",
        "attributes": {
            "qc": [
                "fastp",
                "NanoPack2",
                "Porechop",
            ],
            "assembly": [
                "metaSPAdes",
                "Flye",
                "medaka"
            ],
            "binning": [

            ],
            "qualityAssessment": [
                "QUAST"
            ],
            "refinement": [],
            "taxonomy": [
                "Sourmash (user-provided database)"
            ],
            "functionalAnnotation": [
                "Prodigal",
                "DIAMOND (user-provided database)"
            ],
            "other": [
                "Bowtie2",
                "Minimap2"
            ]
        },
        "description": "Arcadia-Science/metagenomics pipeline.",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline45",
        "name": "baargin",
        "attributes": {
            "qc": [
                "fastp"
            ],
            "assembly": [
                "SPAdes",
                "Unicycler"
            ],
            "binning": [
            ],
            "qualityAssessment": [
                "QUAST",
                "BUSCO"
            ],
            "refinement": [],
            "taxonomy": [
                "Kraken2"
            ],
            "functionalAnnotation": [
                "Prokka",
                "Bakta"
            ],
            "other": [
                "AMRFinderPlus",
                "CARD-RGI",
                "PlasmidFinder",
                "MLST",
                "Platon",
                "Roary"
            ]
        },
        "description": "baargin",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline46",
        "name": "nf-core/metatdenovo",
        "attributes": {
            "qc": [
                "TrimGalore",
                "BBTools",
                "Seqtk"
            ],
            "assembly": [
                "rnaSPAdes",
                "MEGAHIT"
            ],
            "binning": [
            ],
            "qualityAssessment": [
            ],
            "refinement": [],
            "taxonomy": [
                "EUKulele",
                "DIAMOND (user-provided database)"
            ],
            "functionalAnnotation": [
                "TransDecoder",
                "Prodigal",
                "Prokka",
                "Bakta",
                "eggNOG-mapper",
                "HMMER",
            ],
            "other": [
                "MultiQC",
            ]
        },
        "description": "nf-core/metatdenovo",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
    {
        "id": "pipeline47",
        "name": "mmlong2",
        "attributes": {
            "qc": [

            ],
            "assembly": [
                "metaFlye",
                "medaka",
            ],
            "binning": [
                "VAMB",
                "SemiBin2",
                "MetaBAT2",
                "COMEBin",
            ],
            "qualityAssessment": [
                "CheckM2",
                "CheckM",
                "GUNC",
                "QUAST",
                "CoverM"
            ],
            "refinement": [
                "Binette"
            ],
            "taxonomy": [
                "GTDB-Tk",
                "Metabuli"
            ],
            "functionalAnnotation": [
                "Bakta"
            ],
            "other": [
                "Cramino",
                "Jellyfish",
                "Tiara",
                "Longshot",
                "NanoQ",
                "USEARCH"
            ]
        },
        "description": "mmlong2",
        "url": "",
        "details": "",
        "category": "Metagenomic MAG Reconstruction Pipelines"
    },
];

// Expose globally for non-module usage in index.html
window.MAG_PIPELINES_XLSX = MAG_PIPELINES;
