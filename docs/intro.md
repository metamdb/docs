---
sidebar_position: 1
slug: /
---

# About the Documentation
Welcome to the MetAMDB Documentation!

## Navigation
You can find different topics in the table of contents. On desktop, you should see it in the left sidebar. On mobile, you should see it after pressing an icon with arrows in the top left corner.

## Feedback
We are always open to [:link: your feedback](https://github.com/CollinStark/metamdb/issues/new/choose).

## Data Sources
Reaction/Metabolite data as well as Mol Files were collected from the three big reaction databases [:link: BRENDA](https://www.brenda-enzymes.org/), [:link: KEGG](https://www.genome.jp/kegg/), or [:link: MetaCyc](https://metacyc.org/).

## Atom Mapping Generation
Atom mappings were generated with the Reaction Decoder Tool ([:link: RDT](https://github.com/asad/ReactionDecoder)), due to the large quantity of reactions available. RDT is open-source, which makes it easy to modify and integrate in existing pipelines. RDT generates atom mappings in the form of [RXN Files](/rxn-file) from unmapped MOL files. A disadvantage of RDT is that only about 90% of atom mappings are correct (with some enzyme categories being better than others).