import requests
import time
import csv

# Dictionary of DOIs: "custom_name": "doi"
papers = {
    "aDNA":"10.1101/2024.09.18.613623",
    "Anvio": "10.1038/s41564-020-00834-3",
    "BV-BRC": "10.1093/nar/gkac1003",
    "DATMA": "10.7717/peerj.9762",
    "EasyMetagenome": "10.1002/imt2.70001",
    "EasyNanoMeta": "10.1016/j.scib.2025.03.044",
    "Eukafinder": "10.1128/mbio.00699-25",
    "Galaxy": "10.1093/nar/gkac247",
    "GEN-ERA": "10.1093/gigascience/giad022",
    "HiFi-MAG-Pipeline": "10.1101/2024.05.10.593587",
    "IDseq": "10.1093/gigascience/giaa111",
    "KBase": "10.1038/s41596-022-00747-x",
    "MAGNETO": "10.1128/msystems.00432-22",
    "metaGEM": "10.1093/nar/gkab815",
    "MetaGenePipe": "10.21105/joss.04851",
    "Metagenome-Atlas": "10.1186/s12859-020-03585-4",
    "Metagenomics-Toolkit": "10.1093/nargab/lqaf093",
    "Metaphor": "10.1093/gigascience/giad055",
    "metagWGS": "10.1101/2024.09.13.612854",
    "MetaWRAP": "10.1186/s40168-018-0541-1",
    "MGnify": "10.1093/nar/gkac1080",
    "MOSHPIT": "10.1101/2025.01.27.635007",
    "MUFFIN": "10.1371/journal.pcbi.1008716",
    "NanoPhase": "10.1186/s40168-022-01415-8",
    "nf-core/mag": "10.1093/nargab/lqac007",
    "Bacannot": "10.12688/f1000research.139488.1",
    "SnakeMAGs": "10.12688/f1000research.128091.2",
    "SqueezeMeta": "10.3389/fmicb.2018.03349",
    "Sunbeam": "10.1186/s40168-019-0658-x",
    "VEBA2": "10.1093/nar/gkae528",
    "VEBA1": "10.1186/s12859-022-04973-8",
    "BugBuster": "10.1093/bioadv/vbaf152",
    "MG-TK": "10.1016/j.chom.2021.05.008",
    "MAGO": "10.1093/molbev/msz237",
    "IMG/M": "10.1093/nar/gkac976",
    "WGSA2+/LoRA": "10.1093/bioinformatics/btx617",
    "JAMS": "10.1101/2023.03.03.531026",
    "SPIRE": "10.1093/nar/gkad943",
    "EURYALE": "10.1109/CIBCB58642.2024.10702116",
    "MEDUSA": "10.3389/fgene.2022.814437",
    "nIMP3": "10.1186/s13059-016-1116-8",
    "Mapler": "10.1093/bioinformatics/btaf334"
}

def get_citations_from_doi(doi):
    """
    Retrieve citation count for a given DOI using OpenAlex API.
    """
    base_url = "https://api.openalex.org/works/https://doi.org/"
    url = base_url + doi

    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return data.get("cited_by_count", None)
    except requests.exceptions.RequestException as e:
        print(f"⚠️ Error retrieving data for DOI {doi}: {e}")
        return None

def main():
    output_file = "/Users/yepesgar/Downloads/2Pipe/github/2Pipe/citations_summary.csv"
    results = []

    for name, doi in papers.items():
        print(f"Fetching citation count for {name}...")
        citations = get_citations_from_doi(doi)
        results.append({"name": name, "citations": citations})
        time.sleep(1)  # polite delay to avoid rate limits

    # Save results to CSV
    with open(output_file, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=["name", "citations"])
        writer.writeheader()
        writer.writerows(results)

    print(f"\n✅ Citation data saved to '{output_file}'")

if __name__ == "__main__":
    main()