// =========================================================================
// 1. MOCK TEST QUESTION BANK (Full 180-Question CBT Mode Papers)
// =========================================================================
const allNeetTests = {
    "test1": [
        {
            subject: "Physics",
            q: "A proton accelerated through a potential V has de-Broglie wavelength λ. Then the de-Broglie wavelength of an α-particle, when accelerated through the same potential V, is:",
            options: ["λ / 2", "λ / √2", "λ / (2√2)", "λ / 8"],
            correct: 2,
            explanation: "Using formula λ = h / √(2meV). For α-particle, mass is 4m and charge is 2e, giving λ_α = λ / (2√2).",
            pyqYear: "NEET 2024"
        }
    ]
};

// =========================================================================
// 2. CHAPTER-WISE PRACTICE QUESTION BANK (Complete PDF & NTA Formats)
// =========================================================================
const chapterwisePracticeBank = {
    "Physics": {
        "Physics and Measurement": [],
        "Kinematics": [],
        "Laws of Motion": [],
        "Work, Energy and Power": [],
        "Current Electricity": []
    },

    "Chemistry": {
        "Some Basic Concepts of Chemistry": [],
        "Structure of Atom": [],
        "Chemical Bonding and Molecular Structure": [],
        "Biomolecules": []
    },

    "Botany": {
        "The Living World": [],
        "Biological Classification": [],
        "Plant Kingdom": [],
        "Cell - The Unit of Life": [
            { q: "Which of the following is true?<br>1. Most of the organisms have single cell in their bodies<br>2. Robert Hooke was the first person to describe a living cell", options: ["(1) Most organisms have single cell", "(2) Robert Hooke described living cell", "(3) Both", "(4) None"], correct: 3, explanation: "Most of the organisms have a single cell in their bodies, but Robert Hooke described dead cork cells, not living cells[span_0](start_span)[span_0](end_span)." },
            { q: "Who was the first person to see cells under the microscope and give them a name?", options: ["(1) Anton van Leeuwenhoek", "(2) Robert Hooke", "(3) Theodor Schwann", "(4) Matthias Schleiden"], correct: 1, explanation: "Robert Hooke was the first person to see cells under the microscope and give them a name[span_1](start_span)[span_1](end_span)." },
            { q: "Which object is not composed of cells?", options: ["(1) Feather", "(2) Garden soil", "(3) Plank of wood", "(4) Leaf"], correct: 1, explanation: "Garden soil is not composed of cells[span_2](start_span)[span_2](end_span)." },
            { q: "Unicellular organism are", options: ["(1) Not capable of independent existence because they cannot perform all essential functions", "(2) Not capable of independent existence but they can perform all essential vital functions", "(3) Are capable of independent existence and perform all the essential vital functions", "(4) Are capable to lead independent existence but they perform some vital functions"], correct: 2, explanation: "Unicellular organisms are capable of independent existence and perform all the essential vital functions[span_3](start_span)[span_3](end_span)." },
            { 
                q: "Match column I with column II and select the correct option from the codes given below:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Leeuwenhoek<br>B. Rober Brown<br>C. Schleiden<br>D. Schwann</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) First saw and described living cell<br>(ii) The Presence of cell wall is unique to plant cells<br>(iii) Discovered the nucleus<br>(iv) All plants are composed of different kinds of cell</td></tr>" +
                   "</table>", 
                options: ["(1) A-(i), B-(iii), C-(iv), D-(ii)", "(2) A-(i), B-(iii), C-(ii), D-(iv)", "(3) A-(iii), B-(i), C-(iv), D-(ii)", "(4) A-(i), B-(iv), C-(ii), D-(iii)"], 
                correct: 0, 
                explanation: "A-(i), B-(iii), C-(iv), D-(ii)[span_4](start_span)[span_4](end_span)." 
            },
            { q: "Select the incorrect statement.", options: ["(1) Anything less than a complete structure of a cell does not ensure independent living", "(2) Subcellular components can regenerate whole cell", "(3) A cell arises by fusion of two cells", "(4) None of these"], correct: 2, explanation: "A cell arises by fusion of two cells is incorrect[span_5](start_span)[span_5](end_span)." },
            { q: "The cells discovered in thin sections of cork by Robert Hooke were actually", options: ["(1) Cell wall", "(2) Cellulose", "(3) Protoplasm", "(4) Nuclei"], correct: 0, explanation: "Cell wall[span_6](start_span)[span_6](end_span)." },
            { q: "Just like Robert Hooke is related to cork cells, Anton von Leeuwenhoek is related to:", options: ["(1) Nucleus", "(2) Lysosome", "(3) Live cells", "(4) Chromatin"], correct: 2, explanation: "Live cells[span_7](start_span)[span_7](end_span)." },
            { q: "The figures of cork cells as seen by Robert Hooke were published in the book:", options: ["(1) Origin of species", "(2) Species plantarum", "(3) Genera plantarum", "(4) Micrographia"], correct: 3, explanation: "Micrographia[span_8](start_span)[span_8](end_span)." },
            { q: "Matthias Schleiden was:", options: ["(1) British Zoologist", "(2) German Botanist", "(3) British Botanist", "(4) German Zoologist"], correct: 1, explanation: "German Botanist[span_9](start_span)[span_9](end_span)." },
            { q: "Who gave final shape to cell theory?", options: ["(1) Virchow", "(2) Schwann", "(3) Schleiden", "(4) Leeuwenhoek"], correct: 0, explanation: "Virchow[span_10](start_span)[span_10](end_span)." },
            { q: "The new cells originate:", options: ["(1) By bacterial fermentation", "(2) From abiotic material", "(3) From pre-existing cells", "(4) Through regeneration of old cells"], correct: 2, explanation: "From pre-existing cells[span_11](start_span)[span_11](end_span)." },
            { q: "Which one is an exception to cell theory?", options: ["(1) Virus", "(2) Mycoplasma", "(3) Algae", "(4) All the above"], correct: 0, explanation: "Virus[span_12](start_span)[span_12](end_span)." },
            { q: "In which year did Matthias Schleiden observe different types of cells in various plant tissue?", options: ["(1) 1902", "(2) 1855", "(3) 1838", "(4) 1905"], correct: 2, explanation: "1838[span_13](start_span)[span_13](end_span)." },
            { q: "Cell theory was formulated by", options: ["(1) Schleiden and Schwann", "(2) Robert Hooke", "(3) Leeuwenhoek", "(4) Marcello Malpighi"], correct: 0, explanation: "Schleiden and Schwann[span_14](start_span)[span_14](end_span)." },
            { q: "'Omnis cellula-e cellula' i.e., new cells arise from pre-existing cells; this statement is given by:", options: ["(1) Schleiden and Schwann", "(2) Rudolf Virchow", "(3) Robert Brown", "(4) George Palade"], correct: 1, explanation: "Rudolf Virchow[span_15](start_span)[span_15](end_span)." },
            { q: "Select the right option which relates to Schwann regarding the following statement:<br>I. He reported that cell have a thin outer layer which is today known as plasma membrane<br>II. Cell wall is a unique character of the plant cell<br>III. Body of plants and animals are composed of cells and products of cells", options: ["(1) All are correct", "(2) Only III is correct", "(3) II and III are correct", "(4) All are incorrect"], correct: 0, explanation: "All are correct[span_16](start_span)[span_16](end_span)." },
            { q: "<b>Assertion (A):</b> The cell theory given by Schleiden and Schwann was modified by Rudolf Virchow.<br><b>Reason (R):</b> Cell theory says that all cells arise from pre-existing cells.", options: ["(1) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)", "(2) Both Assertion (A) and Reason (R) are true but Reason (R) is not the correct explanation of Assertion (A)", "(3) Assertion (A) is true but Reason (R) is false", "(4) Assertion (A) is false but Reason (R) is true"], correct: 0, explanation: "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A)[span_17](start_span)[span_17](end_span)." },
            { q: "<b>Assertion (A):</b> Rudolf Virchow modified the hypothesis of Schleiden and Schwann to give the cell theory a final shape.<br><b>Reason (R):</b> Cell theory does not explain how new cells were formed.", options: ["(1) Both A and R are true and R is the correct explanation of A", "(2) Both A and R are true, but R is not the correct explanation of A", "(3) A is true, but R is false", "(4) A is false, but R is true"], correct: 0, explanation: "Both A and R are true and R is the correct explanation of A[span_18](start_span)[span_18](end_span)." },
            { q: "Which of the following is not an exception of cell theory?", options: ["(1) Bacteria", "(2) Viruses", "(3) Prions", "(4) Viroids"], correct: 0, explanation: "Bacteria[span_19](start_span)[span_19](end_span)." },
            { q: "Prokaryotic cells are generally ______ than the eukaryotic cells.", options: ["(1) Smaller, slower", "(2) Larger, slower", "(3) Smaller, faster", "(4) Larger, faster"], correct: 2, explanation: "Smaller, faster[span_20](start_span)[span_20](end_span)." },
            { q: "Nuclear membrane is absent in", options: ["(1) Penicillium", "(2) Agaricus", "(3) Volvox", "(4) Nostoc"], correct: 3, explanation: "Nostoc[span_21](start_span)[span_21](end_span)." },
            { q: "Which of the following structures is not found in a prokaryotic cell?", options: ["(1) Nucleoid", "(2) Plasma membrane", "(3) Nuclear envelope", "(4) Ribosome"], correct: 2, explanation: "Nuclear envelope[span_22](start_span)[span_22](end_span)." },
            { q: "Which of the cell is round and biconcave?", options: ["(1) Mesophyll cell", "(2) Tracheid", "(3) RBC", "(4) WBC"], correct: 2, explanation: "RBC[span_23](start_span)[span_23](end_span)." },
            { q: "What is the size of the smallest cells in micrometer?", options: ["(1) 0.3", "(2) 0.4", "(3) 1.0", "(4) 3.0"], correct: 0, explanation: "0.3[span_24](start_span)[span_24](end_span)." },
            { q: "Which of the following is largest isolated cell?", options: ["(1) Neuron", "(2) Ostrich egg", "(3) WBC", "(4) None"], correct: 1, explanation: "Ostrich egg[span_25](start_span)[span_25](end_span)." },
            { q: "Longest cell in our body is nerve fibre. The smallest is of:", options: ["(1) Human sperm", "(2) Eye", "(3) Kidney and Intestine", "(4) Blood"], correct: 0, explanation: "Human sperm[span_26](start_span)[span_26](end_span)." },
            { q: "Piyush observed a slide of white blood cells under microscope. His teacher asked him to draw the diagram. Select the diagram which should be drawn by Piyush.", options: ["(1) 1", "(2) 2", "(3) 3", "(4) 4"], correct: 1, explanation: "Amoeboid WBC representation[span_27](start_span)[span_27](end_span)." },
            { q: "Arrange the following cells in an ascending order of their sizes:<br>I. Mycoplasma<br>II. Ostrich egg<br>III. Human RBC<br>IV. Bacteria", options: ["(1) I, II, III, IV", "(2) I, IV, III, II", "(3) II, IV, I, III", "(4) IV, III, II, I"], correct: 1, explanation: "I, IV, III, II[span_28](start_span)[span_28](end_span)." },
            { 
                q: "Match the column I with column II correctly and choose the correct option.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>I. Typical bacteria<br>II. Viruses<br>III. PPLO<br>IV. A typical Eukaryotic cells</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) 10-20 micrometer<br>(ii) 1-2 micrometer<br>(iii) 0.1 micrometer<br>(iv) 0.02-0.2 micrometer</td></tr>" +
                   "</table>", 
                options: ["(1) I-B, II-D, III-C, IV-A", "(2) I-A, II-B, III-C, IV-D", "(3) I-D, II-C, III-B, IV-A", "(4) I-B, II-D, III-A, IV-C"], 
                correct: 0, 
                explanation: "I-B, II-D, III-C, IV-A[span_29](start_span)[span_29](end_span)." 
            },
            { q: "An example of a prokaryotic cell is:", options: ["(1) Blue-green algae.", "(2) Pleuro Pneumoniae Like Organism(PPLO)", "(3) Mycoplasma", "(4) All of these"], correct: 3, explanation: "All of these[span_30](start_span)[span_30](end_span)." },
            { q: "The main difference between prokaryotic and eukaryotic cell is that in the prokaryotic cell there is no:<br>I. nucleus with a nuclear membrane.<br>II. mitochondria and chloroplasts.<br>III. cell wall.<br>IV. genetic material.", options: ["(1) Only I", "(2) Only II", "(3) I and II", "(4) I and III"], correct: 2, explanation: "I and II[span_31](start_span)[span_31](end_span)." },
            { 
                q: "Match the column I (cell type) with column II (size) and choose the correct option.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Viruses<br>B. PPLO<br>C. Eukaryotic cell<br>D. Bacterium</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) 1-2 micrometer<br>(ii) 10-20 micrometer<br>(iii) About 0.1 micrometer<br>(iv) 0.02-0.2 micrometer</td></tr>" +
                   "</table>", 
                options: ["(1) A-(i), B-(ii), C-(iii), D-(iv)", "(2) A-(iv), B-(iii), C-(ii), D-(i)", "(3) A-(i), B-(iii), C-(ii), D-(iv)", "(4) A-(iv), B-(ii), C-(iii), D-(i)"], 
                correct: 1, 
                explanation: "A-(iv), B-(iii), C-(ii), D-(i)[span_32](start_span)[span_32](end_span)." 
            },
            { 
                q: "Select the incorrect match between columns I, II and III.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:33%; vertical-align: top; padding: 5px;'><b>Column I</b><br>a. RBCs<br>b. WBCs<br>c. Mesophyll cells<br>d. A tracheid</td>" +
                   "<td style='width:33%; vertical-align: top; padding: 5px;'><b>Column II</b><br>Round/biconcave<br>Amoeboid<br>Round and oval<br>Branched and elongated</td>" +
                   "<td style='width:34%; vertical-align: top; padding: 5px;'><b>Column III</b><br>-<br>-<br>-<br>-</td></tr>" +
                   "</table>", 
                options: ["(1) a", "(2) b", "(3) c", "(4) d"], 
                correct: 3, 
                explanation: "d is mismatched[span_33](start_span)[span_33](end_span)." 
            },
            { q: "Select correct set of statements from given below.<br>A. The cytoplasm is the main arena of cellular activities in plants and animals.<br>B. Cell envelope in bacteria is tightly linked 5-layered structure.<br>C. The endomembrane system does not include organelles like mitochondria and peroxisomes.<br>D. Convex face of golgi bodies is maturing face.", options: ["(1) A & D", "(2) A & C", "(3) A, C, D", "(4) All are correct"], correct: 1, explanation: "A & C[span_34](start_span)[span_34](end_span)." },
            { q: "Which of the following statement (s) is/are correct?<br>A. The shape of the cells may vary with the function they perform.<br>B. Cells that have membrane bound nuclei are called eukaryotic.<br>C. Cytoplasm is the main area of cellular activities.<br>D. Various chemical reactions occur in cytoplasm", options: ["(1) A, B, C and D", "(2) A and B only", "(3) B and D only", "(4) C and D only"], correct: 0, explanation: "A, B, C and D[span_35](start_span)[span_35](end_span)." },
            { q: "Most prokaryotic cells, particularly the bacterial cells, have", options: ["(1) A chemically simple cell envelope", "(2) A chemically complex cell envelope", "(3) No cell envelope", "(4) Cell envelope only in the form a cell Membrane"], correct: 1, explanation: "A chemically complex cell envelope[span_36](start_span)[span_36](end_span)." },
            { q: "Which of the following part provides sticky character to the bacterial cell?", options: ["(1) Cell wall", "(2) Mesosome", "(3) Plasma membrane", "(4) Glycocalyx"], correct: 3, explanation: "Glycocalyx[span_37](start_span)[span_37](end_span)." },
            { q: "Bacterial cell wall is made of", options: ["(1) Peptidoglycan", "(2) Murein", "(3) Chitin", "(4) Both (1) and (2)"], correct: 3, explanation: "Both (1) and (2)[span_38](start_span)[span_38](end_span)." },
            { q: "A specialized Structure develop from cell membrane of prokaryotes cell is", options: ["(1) Tubulin", "(2) Mesosome", "(3) Cilia", "(4) Centriole"], correct: 1, explanation: "Mesosome[span_39](start_span)[span_39](end_span)." },
            { q: "In bacterial cells, cell envelope involve all, except:", options: ["(1) cell wall.", "(2) mesosomes.", "(3) glycocalyx.", "(4) plasma membrane."], correct: 1, explanation: "mesosomes[span_40](start_span)[span_40](end_span)." },
            { q: "Bacterial cells have a chemically complex cell envelope. The cell envelope consists of a tightly:", options: ["(1) outermost cell wall followed by the plasma membrane and then the glycocalyx", "(2) outermost glycocalyx followed by plasma membrane and the cell wall.", "(3) outermost cell wall followed by the glycocalyx and then the plasma membrane.", "(4) outermost glycocalyx followed by the cell wall and then the plasma membrane."], correct: 3, explanation: "outermost glycocalyx followed by the cell wall and then the plasma membrane[span_41](start_span)[span_41](end_span)." },
            { q: "The term \"Glycocalyx\" is used for:", options: ["(1) a layer surrounding the cell wall of bacteria.", "(2) a layer present between cell wall and plasma membrane of bacteria.", "(3) cell wall of bacteria.", "(4) plasma membrane of bacteria."], correct: 0, explanation: "a layer surrounding the cell wall of bacteria[span_42](start_span)[span_42](end_span)." },
            { q: "Correct sequence of layers of bacterial cell envelope is:", options: ["(1) Cell membrane -> Glycocalyx -> Cell wall", "(2) Glycocalyx -> Cell wall -> Cell membrane", "(3) Cell wall -> Glycocalyx -> Cell membrane", "(4) Glycocalyx -> Cell membrane -> Cell wall"], correct: 1, explanation: "Glycocalyx -> Cell wall -> Cell membrane[span_43](start_span)[span_43](end_span)." },
            { q: "Given below is a diagram of a bacterial cell. Choose the correct option corresponding to X, Y and Z.", options: ["(1) X is cell envelope", "(2) Y is made of peptidoglycan", "(3) Infolding of Z is polysome", "(4) All of these"], correct: 1, explanation: "Y is made of peptidoglycan[span_44](start_span)[span_44](end_span)." },
            { q: "<b>Assertion:</b> Certain bacteria possess plasmid.<br><b>Reason:</b> Certain bacteria possess resistance to antibiotics.", options: ["(1) Both the assertion and the reason are true, and the reason is a correct explanation of the assertion.", "(2) Both the assertion and reason are true, but the reason is not a correct explanation of the assertion.", "(3) Assertion is true, but the reason is false.", "(4) Both the assertion and reason are false."], correct: 1, explanation: "Both true, but reason is not a correct explanation[span_45](start_span)[span_45](end_span)." },
            { q: "Label the parts of the flagellum in the bacterial cell:", options: ["(1) 1 = Filament, 2 = Hook, 3 = Basal body", "(2) 1 = Basal body, 2 = Hook, 3 = Filament", "(3) 1 = Hook, 2 = Basal Body, 3 = Filament", "(4) 1 = Filament, 2 = Basal body, 3 = Hook"], correct: 0, explanation: "1 = Filament, 2 = Hook, 3 = Basal body[span_46](start_span)[span_46](end_span)." },
            { q: "Longest portion of bacterial flagellum come out from bacterial cell surface is", options: ["(1) Fimbriae", "(2) Basal body", "(3) Filament", "(4) Hook"], correct: 2, explanation: "Filament[span_47](start_span)[span_47](end_span)." },
            { q: "What is the special protein found in pili?", options: ["(1) Flagellin", "(2) Nexin", "(3) Dyenin", "(4) Pilin"], correct: 3, explanation: "Pilin[span_48](start_span)[span_48](end_span)." },
            { q: "Which of the following are small bristle like structures found in bacteria?", options: ["(1) Pili", "(2) Flagella", "(3) Fimbriae", "(4) Cilia"], correct: 2, explanation: "Fimbriae[span_49](start_span)[span_49](end_span)." },
            { 
                q: "Match the structures given in column-I with their functions/explanations given in column-II, and select the most appropriate answer:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>I. Inclusion bodies<br>II. Plasmid DNA<br>III. Polysome<br>IV. Mesosome</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) Increases surface area and enzymatic content<br>(ii) Several ribosomes attach to a single mRNA<br>(iii) Reserve materials in the cytoplasm<br>(iv) Confers certain unique phenotypic characters</td></tr>" +
                   "</table>", 
                options: ["(1) a-(i), b-(ii), c-(iii), d-(iv)", "(2) a-(iv), b-(iii), c-(ii), d-(i)", "(3) a-(iii), b-(iv), c-(ii), d-(i)", "(4) a-(iii), b-(ii), c-(iv), d-(i)"], 
                correct: 2, 
                explanation: "a-(iii), b-(iv), c-(ii), d-(i)[span_50](start_span)[span_50](end_span)." 
            },
            { q: "Refer to the given structure of a prokaryotic cell and select the correct statement regarding it.", options: ["(1) P is a layer of non-cellulosic polysaccharides.", "(2) Q is double layered in Gram +ve bacteria whereas it is single layered in Gram -ve bacteria.", "(3) R is an impermeable covering that restricts entry and exit of molecules into and out of the cell.", "(4) S could be tubular outgrowths that are involved in locomotion only."], correct: 0, explanation: "P is a layer of non-cellulosic polysaccharides[span_51](start_span)[span_51](end_span)." },
            { q: "Which option is correct about prokaryotic ribosomes?<br>I. They measure 15x 20 nm.<br>II. They translate rRNA into proteins.<br>III. They form polysome by attaching with single messenger RNA.<br>IV. The smaller subunit is the 40S.", options: ["(1) Only I and II", "(2) One I", "(3) Only I, III", "(4) Only III"], correct: 3, explanation: "Only III[span_52](start_span)[span_52](end_span)." },
            { q: "Identify the figure given below. Choose the correct option. (Polysome)", options: ["(1) It is present in not only prokaryotes but eukaryotes also", "(2) mRNA is transcribed into proteins", "(3) It is present only in association with cell organelles", "(4) All of these"], correct: 0, explanation: "It is present in not only prokaryotes but eukaryotes also[span_53](start_span)[span_53](end_span)." },
            { q: "Gas vacuole is present in:<br>P. Blue green algae<br>Q. Purple photosynthetic bacteria<br>R. Green photosynthetic bacteria", options: ["(1) P only", "(2) Q only", "(3) R only", "(4) All P, Q and R"], correct: 3, explanation: "All P, Q and R[span_54](start_span)[span_54](end_span)." },
            { q: "Which one of the following is not an inclusion body found in prokaryotes?", options: ["(1) Glycogen granule", "(2) Polysome", "(3) Phosphate granule", "(4) Cyanophycean granule"], correct: 1, explanation: "Polysome[span_55](start_span)[span_55](end_span)." },
            { q: "Select the option accordingly.<br>P. In prokaryotes, ribosomes are associated with the plasma membrane<br>Q. Several ribosomes on a single mRNA form a structure called polysome<br>R. Polysome translates the protein into mRNA", options: ["(1) PQR TFT", "(2) PQR FTT", "(3) PQR TFF", "(4) PQR TTF"], correct: 3, explanation: "PQR TTF[span_56](start_span)[span_56](end_span)." },
            { q: "In a prokaryotic cell, the inclusion bodies:<br>1. are not bounded by any membrane system<br>2. lie freely in the cytoplasm", options: ["(1) Only 1 is correct", "(2) Only 2 is correct", "(3) Both 1 and 2 are correct", "(4) Both 1 and 2 are incorrect"], correct: 2, explanation: "Both 1 and 2 are correct[span_57](start_span)[span_57](end_span)." },
            { q: "When was the most accepted model for plasma membrane organization given?", options: ["(1) 1962", "(2) 1972", "(3) 1984", "(4) 1964"], correct: 1, explanation: "1972[span_58](start_span)[span_58](end_span)." },
            { q: "Which of the following component of Plasma membrane is present in the form of bilayer?", options: ["(1) Lipid", "(2) Protein", "(3) Carbohydrate", "(4) All"], correct: 0, explanation: "Lipid[span_59](start_span)[span_59](end_span)." },
            { q: "Plasma membrane is", options: ["(1) Semi-solid", "(2) Quasifluid", "(3) Non-living", "(4) Both (2) and (3)"], correct: 3, explanation: "Both (2) and (3)[span_60](start_span)[span_60](end_span)." },
            { q: "Choose the incorrect statement regarding cell membrane.", options: ["(1) Generally smaller molecules pass easily and readily than large molecules", "(2) Water soluble substance pass through it less readily than lipid soluble substances", "(3) In addition to phospholipid membrane it also contains cholesterol", "(4) None of these"], correct: 3, explanation: "None of these[span_61](start_span)[span_61](end_span)." },
            { q: "Reason why hydrophobic tail is towards inner side?", options: ["(1) Hydrophobic tail should not come in contact with water.", "(2) Charge hydrocarbon chain is protected from polar head.", "(3) Polar tail should be in contact with each other.", "(4) All of the above."], correct: 0, explanation: "Hydrophobic tail should not come in contact with water[span_62](start_span)[span_62](end_span)." },
            { q: "In human RBC the percentage of lipid in membrane is:", options: ["(1) 52", "(2) 40", "(3) 54", "(4) 60"], correct: 1, explanation: "40[span_63](start_span)[span_63](end_span)." },
            { q: "Danieli and Davson model can be represented as", options: ["(1) P-P-L-L", "(2) P-L-L-P", "(3) L-P-P-L", "(4) P-L-P-L"], correct: 1, explanation: "P-L-L-P[span_64](start_span)[span_64](end_span)." },
            { q: "Which part of phospholipid is protected from aqueous environment?", options: ["(1) Head", "(2) Tail", "(3) Both head and tail", "(4) Phospholipid is not protected from aqueous Environment."], correct: 1, explanation: "Tail[span_65](start_span)[span_65](end_span)." },
            { q: "Tail of phospholipid is made of", options: ["(1) Fatty acids", "(2) Saturated hydrocarbon", "(3) Unsaturated hydrocarbon", "(4) More than one is true"], correct: 3, explanation: "More than one is true[span_66](start_span)[span_66](end_span)." },
            { q: "Which of the following is incorrect with respect to unit membrane as per Robertson?", options: ["(1) Lipid bilayer is sandwiched between protein layers", "(2) Lipid bilayer is surrounded by Globular Proteins", "(3) Average a thickness of unit membrane is about 75 Å", "(4) All of the above"], correct: 1, explanation: "Lipid bilayer is surrounded by Globular Proteins[span_67](start_span)[span_67](end_span)." },
            { q: "Plasma membrane is", options: ["(1) Selectively permeable", "(2) Permeable.", "(3) Impermeable.", "(4) Can be any of the above"], correct: 0, explanation: "Selectively permeable[span_68](start_span)[span_68](end_span)." },
            { q: "Many molecules can move briefly across the membrane without any requirement of energy and special membrane proteins. This is called", options: ["(1) Active transport", "(2) Simple diffusion", "(3) Facilitated diffusion", "(4) All of these"], correct: 1, explanation: "Simple diffusion[span_69](start_span)[span_69](end_span)." },
            { q: "Na+/K+ pump involve in transport", options: ["(1) Downhill", "(2) Passive transport", "(3) Uphill", "(4) Along concentration gradient"], correct: 2, explanation: "Uphill[span_70](start_span)[span_70](end_span)." },
            { q: "Which of the following cell lacks cell wall?", options: ["(1) Animal cell", "(2) Plant cell", "(3) Algal cell", "(4) Bacterial cell"], correct: 0, explanation: "Animal cell[span_71](start_span)[span_71](end_span)." },
            { q: "Fungal cell wall is made of", options: ["(1) Chitin", "(2) Galactan", "(3) Mannan", "(4) All of the above"], correct: 0, explanation: "Chitin[span_72](start_span)[span_72](end_span)." },
            { q: "Cell wall is", options: ["(1) Outer to plasma membrane", "(2) Inner to plasma membrane", "(3) Elastic", "(4) More than one is true"], correct: 0, explanation: "Outer to plasma membrane[span_73](start_span)[span_73](end_span)." },
            { q: "Continuity of cytoplasm from cell to cell is maintained through cytoplasmic connections in plants called", options: ["(1) ER", "(2) tight junction", "(3) gap junction", "(4) plasmodesmata"], correct: 3, explanation: "plasmodesmata[span_74](start_span)[span_74](end_span)." },
            { q: "Plant cell have rigid cell wall promote all function except", options: ["(1) Give protection", "(2) Cell to cell interaction", "(3) Provides a barrier to undesirable macromolecules", "(4) Exocytosis"], correct: 3, explanation: "Exocytosis[span_75](start_span)[span_75](end_span)." },
            { q: "The cell wall and middle lamellae may be traversed by", options: ["(1) Plasmodesmata", "(2) Secondary cell wall", "(3) Neighbouring cell", "(4) Cortex"], correct: 0, explanation: "Plasmodesmata[span_76](start_span)[span_76](end_span)." },
            { q: "Plasmodesmata is connection between young cell which connect two plant cell is in", options: ["(1) Meristematic phase", "(2) Permanent cells", "(3) Dead cell", "(4) All of the above"], correct: 0, explanation: "Meristematic phase[span_77](start_span)[span_77](end_span)." },
            { q: "From the given cells: Diatom, Amoeba, Mycoplasma, Dinoflagellates, Euglena, Mesophyll cell. How many have cell wall?", options: ["(1) Two", "(2) Three", "(3) Four", "(4) Five"], correct: 1, explanation: "Three[span_78](start_span)[span_78](end_span)." },
            { q: "Choose the correct option.<br>Statement P: cell wall gives shape to cell but it does not protect it from infection.<br>Statement Q: cell wall helps in cell to cell interaction.", options: ["(1) Both statements are correct.", "(2) Both statements are incorrect.", "(3) Only statement Q is correct", "(4) Only statement P is correct"], correct: 2, explanation: "Only statement Q is correct[span_79](start_span)[span_79](end_span)." },
            { q: "Primary wall is capable of...... which .... as cell matures", options: ["(1) Growth, increases", "(2) growth, diminishes", "(3) Extension, increases", "(4) Both (1) and (3)"], correct: 1, explanation: "growth, diminishes[span_80](start_span)[span_80](end_span)." },
            { q: "Which one of the following is present in plant cell wall?", options: ["(1) Cellulose", "(2) Hemicellulose", "(3) Pectin", "(4) All of the above"], correct: 3, explanation: "All of the above[span_81](start_span)[span_81](end_span)." },
            { q: "______ and ______ are traversed by plasmodesmata.", options: ["(1) Plasma membrane and cell wall", "(2) Plasma membrane and middle lamella", "(3) Middle lamella and plasma membrane", "(4) Middle lamella and cell wall"], correct: 3, explanation: "Middle lamella and cell wall[span_82](start_span)[span_82](end_span)." },
            { q: "Fill in the blank: The term 'cell membrane' was given by ______ though it was discovered by Schwann (1838).", options: ["(1) Nageli and Cramer", "(2) Robert Brown", "(3) Schwann and Schleiden", "(4) Rudolf Virchow and Robert Brown"], correct: 0, explanation: "Nageli and Cramer[span_83](start_span)[span_83](end_span)." },
            { q: "The fluid nature of the membrane is important from the point of view of functions like:", options: ["(1) cell division and cell growth", "(2) endocytosis and secretion", "(3) formation of intercellular junctions", "(4) All of these"], correct: 3, explanation: "All of these[span_84](start_span)[span_84](end_span)." },
            { q: "<b>Assertion (A):</b> In the membrane, lipid bilayer, lipid are arranged with polar head towards outer side and the hydrophobic tail towards the inner part.<br><b>Reason (R):</b> This ensures that the nonpolar tail of saturated hydrocarbon is protected from aqueous environment.", options: ["(1) Both the Assertion (A) and the Reason (R) are true and the Reason (R) is a correct explanation of the Assertion (A).", "(2) Both the Assertion (A) and Reason (R) are true but the Reason (R) is not a correct explanation of the Assertion (A).", "(3) Both A and R are true and R is the correct explanation of A.", "(4) Both A and R are true but R is NOT the correct explanation of A."], correct: 0, explanation: "Both the Assertion (A) and the Reason (R) are true and the Reason (R) is a correct explanation of the Assertion (A)[span_85](start_span)[span_85](end_span)." },
            { q: "Which of the following macromolecules are found in the plasma membrane?", options: ["(1) Lipids only", "(2) Lipids and proteins", "(3) Lipids, proteins and carbohydrates", "(4) Proteins and carbohydrates"], correct: 2, explanation: "Lipids, proteins and carbohydrates[span_86](start_span)[span_86](end_span)." },
            { q: "<b>Assertion A:</b> The most important functions of the plasma membrane is the transport of the molecules across it.<br><b>Reason R:</b> Many molecules can move briefly across the cell wall without any requirement of energy.", options: ["(1) A is true but R is false.", "(2) A is false but R is true.", "(3) Both A and R are true and R is the correct explanation of A.", "(4) Both A and R are true but R is NOT the correct explanation of A."], correct: 0, explanation: "A is true but R is false[span_87](start_span)[span_87](end_span)." },
            { q: "Nucleolus is", options: ["(1) Single membrane bound", "(2) Always one in number per nucleus", "(3) Not stainable", "(4) Ribosome factory"], correct: 3, explanation: "Ribosome factory[span_88](start_span)[span_88](end_span)." },
            { q: "Nucleolus is", options: ["(1) Spherical", "(2) Not continuous with nucleoplasm", "(3) More in number in those cells that actively carry out protein synthesis", "(4) More than one is true"], correct: 3, explanation: "More than one is true[span_89](start_span)[span_89](end_span)." },
            { q: "Read the given statements and select the correct option.<br>Statement 1: Plant cells do not rupture when placed in distilled water.<br>Statement 2: Animal cells rupture when placed in distilled water.", options: ["(1) Both statements 1 and 2 are correct.", "(2) Statement 1 is correct but statement 2 is incorrect", "(3) Statement 1 is incorrect but statement 2 is correct", "(4) Both statements 1 and 2 are incorrect."], correct: 0, explanation: "Both statements 1 and 2 are correct[span_90](start_span)[span_90](end_span)." },
            { q: "<b>Assertion:</b> Endocytosis is not shown by plant cells.<br><b>Reason:</b> The plant cells have rigid cell wall and have high turgor pressure.", options: ["(1) Both assertion and reason are correct and reason is correct explanation of assertion.", "(2) Both assertion and reason are correct and reason is not correct explanation of assertion.", "(3) Assertion in true but reason is false.", "(4) Both assertion and reason are false."], correct: 0, explanation: "Both assertion and reason are correct and reason is correct explanation of assertion[span_91](start_span)[span_91](end_span)." },
            { q: "The cell are held together by a Ca-pectate layer called:", options: ["(1) Primary cell wall", "(2) Secondary cell wall", "(3) Middle lamella", "(4) Tertiary cell wall"], correct: 2, explanation: "Middle lamella[span_92](start_span)[span_92](end_span)." },
            { q: "Major site of lipid synthesis in cell is", options: ["(1) SER", "(2) RER", "(3) Golgi body", "(4) All of the above"], correct: 0, explanation: "SER[span_93](start_span)[span_93](end_span)." },
            { q: "The SER is the major site of synthesis of", options: ["(1) Lipid only", "(2) Protein only", "(3) Lipid, steroidal hormones and glycogen metabolism", "(4) Protein and lipid"], correct: 2, explanation: "Lipid, steroidal hormones and glycogen metabolism[span_94](start_span)[span_94](end_span)." },
            { q: "A cell, which is very active in the synthesis and secretion of proteins, would be expected to have", options: ["(1) Equal amount of RER and SER", "(2) More SER than RER", "(3) More RER than SER", "(4) More GB and no RER"], correct: 2, explanation: "More RER than SER[span_95](start_span)[span_95](end_span)." },
            { q: "Endoplasmic reticulum is called RER when it has on its surface", options: ["(1) Elementary particles", "(2) Ribosomes", "(3) Oxysome", "(4) Quantasomes"], correct: 1, explanation: "Ribosomes[span_96](start_span)[span_96](end_span)." },
            { q: "P and Q are the major sites for the synthesis of ______ and ______ respectively.", options: ["(1) proteins and lipids", "(2) lipids and proteins", "(3) carbohydrates and lipids", "(4) vitamins and proteins"], correct: 1, explanation: "lipids and proteins[span_97](start_span)[span_97](end_span)." },
            { q: "Which of the following is associated with detoxification?", options: ["(1) Golgi body", "(2) Lysosome", "(3) SER", "(4) Peroxisome"], correct: 2, explanation: "SER[span_98](start_span)[span_98](end_span)." },
            { q: "When was Golgi body discovered?", options: ["(1) 1998", "(2) 1898", "(3) 1975", "(4) 1972"], correct: 1, explanation: "1898[span_99](start_span)[span_99](end_span)." },
            { q: "After packaging the materials are released from which face of Golgi body?", options: ["(1) Cis", "(2) Trans", "(3) Forming", "(4) Convex"], correct: 1, explanation: "Trans[span_100](start_span)[span_100](end_span)." },
            { q: "Which of the following is not a function of Golgi body?", options: ["(1) Formation of lysosome", "(2) Packaging of material", "(3) Synthesis of glycogen", "(4) Synthesis of glycolipid"], correct: 2, explanation: "Synthesis of glycogen[span_101](start_span)[span_101](end_span)." },
            { q: "What is diameter of cisternae of Golgi body in micrometer?", options: ["(1) 0.5-1.0", "(2) 1.0-2.0", "(3) 0.2-1.0", "(4) 1.0-4.1"], correct: 0, explanation: "0.5-1.0[span_102](start_span)[span_102](end_span)." },
            { q: "Which face of Golgi body is present near nucleus?", options: ["(1) Cis", "(2) Trans", "(3) Maturing", "(4) Concave"], correct: 0, explanation: "Cis[span_103](start_span)[span_103](end_span)." },
            { q: "Select the option with correct labelling of given structure. (Golgi)", options: ["(1) A-Cisternae, B-Vesicle C-Trans-face, D-Cisface.", "(2) A-Cisternae, B-Vesicle ,C-Cis-face, D-Transface.", "(3) A-Vesicle, B-Cisternae, C-Cis-face, D-Transface.", "(4) A-Tubules, B-Vesicle ,C-Trans-face, D-Cis- face."], correct: 0, explanation: "A-Cisternae, B-Vesicle C-Trans-face, D-Cisface[span_104](start_span)[span_104](end_span)." },
            { q: "Which of the following is the correct sequence/route of the secretory product?", options: ["(1) ER -> Vesicles -> Cis region of GB -> Trans region of GB -> Vesicles -> Plasma membrane", "(2) ER -> GB -> Lysosome -> Nuclear membrane -> Plasma membrane", "(3) ER -> Vesicles -> Trans region of GB -> Cis region of GB -> Vesicles -> Plasms membrane", "(4) Lysosome -> ER GB -> Vesicles -> Cell membrane"], correct: 0, explanation: "ER -> Vesicles -> Cis region of GB -> Trans region of GB -> Vesicles -> Plasma membrane[span_105](start_span)[span_105](end_span)." },
            { q: "The cis face and trans face of Golgi body are:", options: ["(1) Similar and connected", "(2) Entirely different and not connected", "(3) Entirely different and connected", "(4) Similar but not connected"], correct: 2, explanation: "Entirely different and connected[span_106](start_span)[span_106](end_span)." },
            { q: "Lysosomal enzymes work at", options: ["(1) Acidic Ph", "(2) Basic pH", "(3) Both acidic and basic pH", "(4) None of these"], correct: 0, explanation: "Acidic Ph[span_107](start_span)[span_107](end_span)." },
            { q: "The newly formed lysosome is called", options: ["(1) Primary lysosome", "(2) Secondary lysosome", "(3) Autophagic lysosome", "(4) All of the above"], correct: 0, explanation: "Primary lysosome[span_108](start_span)[span_108](end_span)." },
            { 
                q: "Match List-I with List-II.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>List-I</b><br>A. Rough endoplasmic reticulum<br>B. Ribosome<br>C. Golgi complex<br>D. Lysosomes</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>List-II</b><br>(I) Hydrolytic enzymes<br>(II) Composed of Ribonucleic acid (RNA) and proteins<br>(III) Protein synthesis and secretion<br>(IV) Packaging of material</td></tr>" +
                   "</table>", 
                options: ["(1) A-III, B-II, C-IV, D-I", "(2) A-II, B-III, C-IV, D-I", "(3) A-I, B-III, C-II, D-IV", "(4) A-IV, B-II, C-III, D-I"], 
                correct: 0, 
                explanation: "A-III, B-II, C-IV, D-I[span_109](start_span)[span_109](end_span)." 
            },
            { q: "Which of the following statements is not correct?", options: ["(1) Lysosomes are formed by the process of packaging in the endoplasmic reticulum.", "(2) Lysosomes have numerous hydrolytic enzymes.", "(3) The hydrolytic enzymes of lysosomes are active under acidic pH.", "(4) Lysosomes are membrane-bound structures."], correct: 0, explanation: "Lysosomes are formed by the process of packaging in the endoplasmic reticulum[span_110](start_span)[span_110](end_span)." },
            { 
                q: "Match the following.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Protein<br>B. Lipid<br>C. Glycoprotein<br>D. Hydrolytic enzyme</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) SER<br>(ii) Golgi body<br>(iii) Lysosome<br>(iv) RER</td></tr>" +
                   "</table>", 
                options: ["(1) A-(i), B-(ii), C-(iii), D-(iv)", "(2) A-(iv), B-(ii), C-(i), D-(iii)", "(3) A-(iv), B-(i), C-(ii), D-(iii)", "(4) A-(i), B-(iii), C-(ii), D-(iv)"], 
                correct: 2, 
                explanation: "A-(iv), B-(i), C-(ii), D-(iii)[span_111](start_span)[span_111](end_span)." 
            },
            { q: "Most of the water in mature plant cells occurs chiefly in which of the following?", options: ["(1) Cell wall", "(2) Cytoplasm", "(3) Vacuoles", "(4) Nucleus"], correct: 2, explanation: "Vacuoles[span_112](start_span)[span_112](end_span)." },
            { q: "Read the following statements.<br>I. It contains water, sap, excretory product and other unwanted materials.<br>II. It is bound by a single membrane called tonoplast<br>III. In plant cells, it can occupy upto 90% of cellular volume<br>IV. It content forms cell sap<br>V. It maintains turgor pressure", options: ["(1) Lysosome", "(2) Vacuole", "(3) Peroxisome", "(4) Food"], correct: 1, explanation: "Vacuole[span_113](start_span)[span_113](end_span)." },
            { q: "Which one is correct?<br>1. In Amoeba, contractile vacuole is important for excretion and osmoregulation.<br>2. In many cells as in protists, food vacuoles are formed by engulfing the food particles.", options: ["(1) Only 1", "(2) Only 2", "(3) Both (A) and (B).", "(4) Vacuole is always small sized in all cells of Plant."], correct: 2, explanation: "Both (A) and (B)[span_114](start_span)[span_114](end_span)." },
            { q: "The concentration of a number of ions and other materials is higher in vacuoles than those in Cytoplasm, why?", options: ["(1) Tonoplast has a number of active transport system that pumps ions into vacuole from cytoplasm.", "(2) Through osmosis, a large amount of ions go continuously to vacuole from cytoplasm.", "(3) Cytoplasmic ions enter the vacuole through osmotic flow of water.", "(4) Vacuole is always engaged in the hydrolysis of salts into their ions."], correct: 0, explanation: "Tonoplast has a number of active transport system that pumps ions into vacuole from cytoplasm[span_115](start_span)[span_115](end_span)." },
            { q: "In an Amoeba cell, vacuoles", options: ["(1) contains water, sap and excretory product", "(2) is bound by a single membrane called tonoplast", "(3) maintains turgor pressure", "(4) Can be food vacuole and contractile vacuole"], correct: 3, explanation: "Can be food vacuole and contractile vacuole[span_116](start_span)[span_116](end_span)." },
            { q: "Sap vacuole is absent in:", options: ["(1) Plant cell", "(2) Bacterial cell", "(3) Blue green algal cells", "(4) More than one"], correct: 3, explanation: "More than one[span_117](start_span)[span_117](end_span)." },
            { q: "Find out the incorrect statement regarding plastid", options: ["(1) Double membrane bound organelle", "(2) Semi-autonomous", "(3) Lack naked DNA molecule", "(4) More than one is true"], correct: 2, explanation: "Lack naked DNA molecule[span_118](start_span)[span_118](end_span)." },
            { q: "Number of thylakoids in a granum is", options: ["(1) 5-10", "(2) 2-100", "(3) 100-150", "(4) 150-200"], correct: 1, explanation: "2-100[span_119](start_span)[span_119](end_span)." },
            { q: "Choose the correct statements.<br>I. Mitochondria and Chloroplast transfer energy.<br>II. Mitochondrion is a power-house of cell as it produces most of the cellular ATP.<br>III. Mitochondria and chloroplast are found in all eukaryotic cells.<br>IV. Mitochondria are the sites of anaerobic respiration.<br>V. The matrix of mitochondria posses a single linear DNA, many RNA molecules, 80 S ribosomes.", options: ["(1) IV and V", "(2) II only", "(3) II, IV and V", "(4) III and V"], correct: 1, explanation: "II only[span_120](start_span)[span_120](end_span)." },
            { 
                q: "Match column I with column II and select the correct option from the codes given below:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Dictyosomes<br>B. Mitochondria<br>C. Vacuoles<br>D. Grana</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) Storage<br>(ii) Photosynthesis<br>(iii) Transport<br>(iv) Secretion<br>(v) Respiration</td></tr>" +
                   "</table>", 
                options: ["(1) A- (iv), B- (v), C- (i) , D- (ii)", "(2) A- (i), B- (ii), C- (iv), D- (iii)", "(3) A- (iv), B- (i), C- (ii), D- (iii)", "(4) A- (i), B- (ii), C- (iii), D- (iv)"], 
                correct: 0, 
                explanation: "A- (iv), B- (v), C- (i) , D- (ii)[span_121](start_span)[span_121](end_span)." 
            },
            { q: "Read the given statements and select the correct option.<br>Statement 1: Chloroplast and mitochondria are semi-autonomous bodies.<br>Statement 2: Chloroplast and mitochondria have their own DNA and protein synthesizing machinery.", options: ["(1) Both statement 1 and statement 2 are correct.", "(2) Statement 1 is correct but statement 2 is Incorrect.", "(3) Statement 1 is incorrect but statement 2 is correct.", "(4) Both statement 1 and 2 are incorrect."], correct: 0, explanation: "Both statement 1 and statement 2 are correct[span_122](start_span)[span_122](end_span)." },
            { 
                q: "Match column I with column II and select the correct option from the codes given below:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Chloroplast<br>B. Chromoplasts<br>C. Leucoplasts</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) Colourless plastids<br>(ii) Yellow, orange or red coloured plastids<br>(iii) Green plastids</td></tr>" +
                   "</table>", 
                options: ["(1) A-(iii), B-(i), C-(ii)", "(2) A-(iii), B-(ii), C-(i)", "(3) A-(i), B-(iii), C-(ii)", "(4) A-(i), B-(ii), C-(iii)"], 
                correct: 1, 
                explanation: "A-(iii), B-(ii), C-(i)[span_123](start_span)[span_123](end_span)." 
            },
            { q: "Read the given statements and select the correct option.<br>Statement 1: Chloroplast and mitochondria are semi-autonomous bodies.<br>Statement 2: Chloroplast and mitochondria have their own DNA and protein synthesizing machinery.", options: ["(1) Both statement 1 and statement 2 are correct", "(2) Statement 1 is correct but statement 2 is incorrect", "(3) Statement 1 is incorrect but statement 2 is correct", "(4) Both statement 1 and 2 are incorrect"], correct: 0, explanation: "Both statement 1 and statement 2 are correct[span_124](start_span)[span_124](end_span)." },
            { q: "Choose the incorrectly matched pair.", options: ["(1) Cytoskeleton - Maintain the shape of cell.", "(2) Rough Endoplasmic Reticulum (RER)-Involved in protein synthesis and secretion.", "(3) 70S-Found in prokaryotic cell only.", "(4) Contractile vacuole - Helps in excretion."], correct: 2, explanation: "70S-Found in prokaryotic cell only[span_125](start_span)[span_125](end_span)." },
            { q: "A cell organelle 'X' is divided into two types on the basis of a cell organelle 'Y', that helps in the protein synthesis. Identify 'X' and 'Y' respectively.", options: ["(1) Golgi complex and ribosome", "(2) SER and mitochondria", "(3) ER and ribosome", "(4) Lysosome and ER"], correct: 2, explanation: "ER and ribosome[span_126](start_span)[span_126](end_span)." },
            { q: "Which is the important site of formation of glycoproteins and glycolipids in eukaryotic cells?", options: ["(1) Peroxisomes", "(2) Golgi bodies", "(3) Polysomes", "(4) Endoplasmic reticulum"], correct: 1, explanation: "Golgi bodies[span_127](start_span)[span_127](end_span)." },
            { q: "Directions: In the given question, two statements are given as Statement-I and Statement-II.<br>Statement-I: Concave trans is the forming face and convex cis is the maturing face in Golgi apparatus.<br>Statement-II: The hypothesis which tell us the bodies of animals and plants are composed of cells and products of cells was given by Rudolf Virchow.", options: ["(1) Both Statement-I and Statement-II are correct.", "(2) Both Statement-I and Statement-II are incorrect.", "(3) Statement-I is correct and Statement-II is incorrect.", "(4) Statement-I is incorrect and Statement-II is correct."], correct: 1, explanation: "Both Statement-I and Statement-II are incorrect[span_128](start_span)[span_128](end_span)." },
            { q: "Vacuole in a plant cell:", options: ["(1) is membrane bound and contains storage proteins and lipids", "(2) is membrane bound and contains water and excretory substances", "(3) lacks membrane and contains air", "(4) lacks membrane and contains water and excretory substances"], correct: 1, explanation: "is membrane bound and contains water and excretory substances[span_129](start_span)[span_129](end_span)." },
            { q: "The DNA is located in the", options: ["(1) Cristae, mitochondria", "(2) Matrix, mitochondria", "(3) Intermembrane space, mitochondria", "(4) Grana, chloroplast"], correct: 1, explanation: "Matrix, mitochondria[span_130](start_span)[span_130](end_span)." },
            { q: "Which of the following statement is incorrect?", options: ["(1) Mitochondria, unless specifically stained are not easily visible under the microscope", "(2) Physiological activity of cells determines the number of mitochondria per cell", "(3) Mitochondrion, a powerhouse of cells has DNA, RNA, ribosomes, and enzyme. So it can survive outside the cell", "(4) Mitochondria divide by fission"], correct: 2, explanation: "Mitochondrion, a powerhouse of cells has DNA, RNA, ribosomes, and enzyme. So it can survive outside the cell[span_131](start_span)[span_131](end_span)." },
            { q: "If mitochondria is absent in mature RBC what will be the source of energy:", options: ["(1) TCA", "(2) ETS", "(3) link reaction", "(4) Glycolysis"], correct: 3, explanation: "Glycolysis[span_132](start_span)[span_132](end_span)." },
            { q: "Which of the following feature is present in mitochondria?", options: ["(1) Linear DNA, 70S ribosome", "(2) Circular DNA, glycogen synthesis", "(3) Circular DNA, dsDNA, 70S ribosome", "(4) Circular DNA, single strand DNA, 70S ribosome"], correct: 2, explanation: "Circular DNA, dsDNA, 70S ribosome[span_133](start_span)[span_133](end_span)." },
            { q: "Mitochondria and chloroplast are:<br>1. Semi-autonomous organelles<br>2. Formed by division of pre-existing organelles and they contain DNA but lack protein synthesizing machinery.", options: ["(1) Both (1) and (2) are correct", "(2) (2) is true but (1) is false", "(3) (1) is true but (2) is false", "(4) Both (1) and (2) are false"], correct: 2, explanation: "(1) is true but (2) is false[span_134](start_span)[span_134](end_span)." },
            { q: "Extra chromosomal DNA occurs in:", options: ["(1) Mitochondria", "(2) Ribosomes", "(3) Nucleus", "(4) Chromosomes"], correct: 0, explanation: "Mitochondria[span_135](start_span)[span_135](end_span)." },
            { q: "The number of chloroplast varies form 1 per cell in ______ to ______ per cell in the mesophyll.", options: ["(1) A-Chlorella, B-15 to 20", "(2) B-Chlamydomonas, B-20 to 40", "(3) A-Chlamydomonas, B-15 to 20", "(4) A-Chlamydomonas, B-10 to 40"], correct: 3, explanation: "A-Chlamydomonas, B-10 to 40[span_136](start_span)[span_136](end_span)." },
            { q: "Which of the following substances are stored in aleuroplast?", options: ["(1) Starch", "(2) Oil and Lipids", "(3) Proteins", "(4) Water and Oil"], correct: 2, explanation: "Proteins[span_137](start_span)[span_137](end_span)." },
            { q: "Ribosome subunit bind to ER surface is", options: ["(1) 40 S", "(2) 60 S", "(3) 30 S", "(4) 50 S"], correct: 1, explanation: "60 S[span_138](start_span)[span_138](end_span)." },
            { q: "Microtubules are made of", options: ["(1) Tubulin proteins", "(2) Flagellin proteins", "(3) Nexin proteins", "(4) Actin protein"], correct: 0, explanation: "Tubulin proteins[span_139](start_span)[span_139](end_span)." },
            { q: "An elaborate network of filamentous proteinaceous structures present in the cytoplasm is collectively known as", options: ["(1) Cilia", "(2) Flagella", "(3) Cytoskeleton", "(4) ER"], correct: 2, explanation: "Cytoskeleton[span_140](start_span)[span_140](end_span)." },
            { q: "Which of the following are involved in motility of bacterial cell?", options: ["(1) Flagella", "(2) Cilia", "(3) Fimbriae", "(4) Pili"], correct: 0, explanation: "Flagella[span_141](start_span)[span_141](end_span)." },
            { 
                q: "Go through the section of cilia / flagella showing the different parts.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Labels A, B, C, D</b><br>A. Plasma membrane<br>B. Interdoublet bridge<br>C. Central microtubule<br>D. Radial spoke</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Description</b><br>Axoneme component mapping</td></tr>" +
                   "</table>", 
                options: ["(1) A Plasma membrane, B - Interdoublet bridge, C- Central microtubule, D-Radial spoke", "(2) A-Plasma membrane, B Arm, C-Central microtubule, D-Radial spoke", "(3) A Plasma membrane, B- Interdoublet bridge, C-Hub, D-Radial spoke", "(4) A Plasma membrane, B Interdoublet bridge, C-Hub, D-Arm"], 
                correct: 0, 
                explanation: "A Plasma membrane, B - Interdoublet bridge, C- Central microtubule, D-Radial spoke[span_142](start_span)[span_142](end_span)." 
            },
            { q: "What is the total number of microtubules in cilia and flagella?", options: ["(1) 9", "(2) 2", "(3) 20", "(4) 18"], correct: 2, explanation: "20[span_143](start_span)[span_143](end_span)." },
            { q: "Cilia and flagella are similar in", options: ["(1) Structure", "(2) Their number per cell", "(3) Distribution", "(4) All of the above"], correct: 0, explanation: "Structure[span_144](start_span)[span_144](end_span)." },
            { q: "Cilia and flagella are covered by", options: ["(1) Cell wall", "(2) Basal body", "(3) Axoneme", "(4) Plasma membrane"], correct: 3, explanation: "Plasma membrane[span_145](start_span)[span_145](end_span)." },
            { q: "An organelle with an internal cross-section showing characteristic '9+2' array is the", options: ["(1) microtubule", "(2) microfilament", "(3) cilium or flagellum", "(4) cytoskeleton"], correct: 2, explanation: "cilium or flagellum[span_146](start_span)[span_146](end_span)." },
            { q: "Nine doublets and two singlets are present in", options: ["(1) Microtubule", "(2) Spindle fibers", "(3) Centriole", "(4) Cilium"], correct: 3, explanation: "Cilium[span_147](start_span)[span_147](end_span)." },
            { q: "Mark the correct statement.<br>S-I: The core of cilium or flagellum is called axoneme.<br>S-II: Central tubules are connected by bridges and is enclosed by central sheath.", options: ["(1) S-I correct and S-II incorrect", "(2) S-I and S-II both correct", "(3) S-I and S-II both incorrect", "(4) S-I incorrect and S-II correct"], correct: 1, explanation: "S-I and S-II both correct[span_148](start_span)[span_148](end_span)." },
            { q: "Animal cells contain another non-membrane bound organelle called", options: ["(1) Centrosome", "(2) Mitochondria", "(3) Chloroplast", "(4) Ribosome"], correct: 0, explanation: "Centrosome[span_149](start_span)[span_149](end_span)." },
            { q: "The cellular component at the base of each cilium or flagellum is", options: ["(1) Centriole", "(2) Nucleus", "(3) Microvillus", "(4) Basal Body"], correct: 3, explanation: "Basal Body[span_150](start_span)[span_150](end_span)." },
            { q: "Arrangement of microtubules in a flagellum and a centriole is respectively", options: ["(1) 9+2 and 9+1", "(2) 9+1 and 9+0", "(3) 9+0 and 9+2", "(4) 9+2 and 9+0"], correct: 3, explanation: "9+2 and 9+0[span_151](start_span)[span_151](end_span)." },
            { 
                q: "Match the cell organelles given in column I with cellular processes in column II and select the correct option from the codes given below:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Lysosomes<br>B. Ribosomes<br>C. Smooth endoplasmic reticulum<br>D. Centriole</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) Protein synthesis<br>(ii) Hydrolytic activity<br>(iii) Steroid synthesis<br>(iv) Formation of spindle</td></tr>" +
                   "</table>", 
                options: ["(1) a-ii, b-i, c-iii, d- iv", "(2) a-i, b-iii, c-iv, d-ii", "(3) a-i, b-iv, c-iii, d-iv", "(4) a-iv, b-iii, c-i, d-ii"], 
                correct: 0, 
                explanation: "a-ii, b-i, c-iii, d- iv[span_152](start_span)[span_152](end_span)." 
            },
            { 
                q: "Match the List-I with List-II.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>List-I</b><br>A. Golgi apparatus<br>B. Lysosomes<br>C. Vacuoles<br>D. Ribosomes</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>List-II</b><br>P. Synthesis of protein<br>Q. Trap waste and excretory products<br>R. Formation of glycoproteins and glycolipids<br>S. Digesting biomolecules</td></tr>" +
                   "</table>", 
                options: ["(1) A-R, B-S, C-Q, D-P", "(2) A-S, B-R, C-P, D-Q", "(3) A-R, B-Q, C-S, D-P", "(4) A-P, B-Q, C-S, D-R"], 
                correct: 0, 
                explanation: "A-R, B-S, C-Q, D-P[span_153](start_span)[span_153](end_span)." 
            },
            { 
                q: "Match the List-I with List-II to find out the correct.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>List-I</b><br>A. Cell envelope<br>B. Plasma membrane<br>C. Mesosome<br>D. Ribosomes</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>List-II</b><br>(I) Three layered structure<br>(II) Semi-permeable in nature<br>(III) Present both in prokaryotic and eukaryotic cells<br>(IV) Infolding of cell membrane</td></tr>" +
                   "</table>", 
                options: ["(1) A-I, B-II, C-IV, D-III", "(2) A-IV, B-III, C - I, D-II", "(3) A-II, B-I, C-III, D-IV", "(4) A-II, B-III, C-IV, D-I"], 
                correct: 0, 
                explanation: "A-I, B-II, C-IV, D-III[span_154](start_span)[span_154](end_span)." 
            },
            { 
                q: "Match the lists and select the correct option:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Cristae<br>B. Cisternae<br>C. Flattened membranous structure<br>D. Axoneme</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>P. Golgi apparatus<br>Q. Cilia<br>R. Mitochondria<br>S. Thylakoid</td></tr>" +
                   "</table>", 
                options: ["(1) A-(S); B-(P); C-(Q); D-(R)", "(2) A-(Q); B-(R); C-(S); D-(P)", "(3) A-(R); B-(P); C-(S); D-(Q)", "(4) A-(Q); B-(S); C-(R); D-(P)"], 
                correct: 2, 
                explanation: "A-(R); B-(P); C-(S); D-(Q)[span_155](start_span)[span_155](end_span)." 
            },
            { 
                q: "Match the following Lists and select the correct option.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>List-I</b><br>A. Smooth Endoplasmic Reticulum<br>B. Rough endoplasmic reticulum<br>C. Golgi apparatus<br>D. Centriole</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>List-II</b><br>(I) Protein synthesis<br>(II) Lipid synthesis<br>(III) Glycosylation<br>(IV) Spindle formation</td></tr>" +
                   "</table>", 
                options: ["(1) (A)(III) (I) (II) (IV)", "(2) (A)(IV) (II) (I) (III)", "(3) (A)(I) (II) (III) (IV)", "(4) (A)(II) (I) (III) (IV)"], 
                correct: 3, 
                explanation: "(A)(II) (I) (III) (IV)[span_156](start_span)[span_156](end_span)." 
            },
            { 
                q: "Match the lists and select the correct option.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>List-I</b><br>A. Centrioles<br>B. Cilia and Flagella</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>List-II</b><br>P. 9+2 arrangement<br>Q. 9+0 arrangement<br>R. Cellular movement<br>S. Cartwheel structure</td></tr>" +
                   "</table>", 
                options: ["(1) A-(P,Q); B-(R,S)", "(2) A-(Q,S); B-(P,R)", "(3) A-(P,R); B-(Q,S)", "(4) A-(P,S); B-(Q,R)"], 
                correct: 3, 
                explanation: "A-(P,S); B-(Q,R)[span_157](start_span)[span_157](end_span)." 
            },
            { q: "Choose the incorrect match.", options: ["(1) Nucleus - RNA", "(2) Lysosome - Protein synthesis", "(3) Mitochondria - Cellular respiration", "(4) Cytoskeleton - Microtubules"], correct: 1, explanation: "Lysosome - Protein synthesis[span_158](start_span)[span_158](end_span)." },
            { 
                q: "Match column I with column II and select the option from the codes given below.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Mitochondria<br>B. Lysosomes<br>C. Ribosomes<br>D. Nucleus</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>I. Without membrane<br>II. Single membrane<br>III. Double membrane</td></tr>" +
                   "</table>", 
                options: ["(1) A-(I), B-(II), C-(III), D-(III)", "(2) A-(III), B-(I), C-(I), D-(II)", "(3) A-(III), B-(II), C-(I), D-(III)", "(4) A-(II), B-(III), C-(I), D-(III)"], 
                correct: 2, 
                explanation: "A-(III), B-(II), C-(I), D-(III)[span_159](start_span)[span_159](end_span)." 
            },
            { q: "Chromatin is stained by", options: ["(1) Acidic dye", "(2) Basic dye", "(3) Chromatin can never be stained", "(4) Crystal violet"], correct: 1, explanation: "Basic dye[span_160](start_span)[span_160](end_span)." },
            { q: "Which of the following is incorrectly matched pair?", options: ["(1) 70S ribosomes - Prokaryotes", "(2) 80S ribosomes - Eukaryotes", "(3) Axoneme-Cilia", "(4) Centromere - Centrosome"], correct: 3, explanation: "Centromere - Centrosome[span_161](start_span)[span_161](end_span)." },
            { q: "<b>Assertion (A):</b> Nucleolus is a site for active ribosomal RNA synthesis.<br><b>Reason (R):</b> Larger and more numerous nucleoli are present in cells actively carrying out lipid synthesis.", options: ["(1) both Assertion (A) and Reason (R) are True and the Reason (R) is a correct explanation", "(2) both Assertion (A) and Reason (R) are True but Reason (R) is not a correct explanation", "(3) Assertion (A) is True but the Reason (R) is False.", "(4) Assertion (A) is False but the Reason (R) is True."], correct: 2, explanation: "Assertion (A) is True but the Reason (R) is False[span_162](start_span)[span_162](end_span)." },
            { 
                q: "Match List-I with List-II to find out the correct option.<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>List-I</b><br>A. Perinuclear Space<br>B. Axoneme<br>C. Chromatin<br>D. Centrosome</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>List-II</b><br>I. Forms the core of the cilia and flagella<br>II. Material of the nucleus stained by the basic dyes<br>III. Forms a barrier between the materials present inside the nucleus and that of the cytoplasm<br>IV. Forms spindle fibres during cell division</td></tr>" +
                   "</table>", 
                options: ["(1) A-I, B-III, C-II, D-IV", "(2) A-I, B-IV, C-II, D-III", "(3) A-II, B-III, C-I, D-IV", "(4) A-III, B-I, C-II, D-IV"], 
                correct: 3, 
                explanation: "A-III, B-I, C-II, D-IV[span_163](start_span)[span_163](end_span)." 
            },
            { q: "Histones are rich in", options: ["(1) Alanine and glycine", "(2) Lysine and arginine", "(3) Histidine and serine", "(4) Cysteine and tyrosine"], correct: 1, explanation: "Lysine and arginine[span_164](start_span)[span_164](end_span)." },
            { q: "The name chromatin was coined by:", options: ["(1) Flemming", "(2) Robert Brown", "(3) George Palade", "(4) Camillo Golgi"], correct: 0, explanation: "Flemming[span_165](start_span)[span_165](end_span)." },
            { q: "Chromatin consists of", options: ["(1) DNA only", "(2) DNA + Histones", "(3) DNA RNA + Histones + Non-histones proteins", "(4) Ribonucleoproteins only"], correct: 2, explanation: "DNA RNA + Histones + Non-histones proteins[span_166](start_span)[span_166](end_span)." },
            { q: "Which of the following features is common to prokaryotes and many eukaryotes?", options: ["(1) Chromatin material present", "(2) Cell wall present", "(3) Nuclear membrane present", "(4) Membrane bound sub-cellular organelles present"], correct: 0, explanation: "Chromatin material present[span_167](start_span)[span_167](end_span)." },
            { q: "The centromere lies slightly away from the middle of the chromosome resulting in one shorter arm and one longer arm. This type of chromosome is called", options: ["(1) Acrocentric", "(2) Submetacentric", "(3) Metacentric", "(4) Subtelocentric"], correct: 1, explanation: "Submetacentric[span_168](start_span)[span_168](end_span)." },
            { q: "The shorter and longer arms of a submetacentric chromosome are referred to as", options: ["(1) s-arm and l-arm respectively", "(2) p-arm and q-arm respectively", "(3) q-arm and p-arm respectively", "(4) m-arm and n-arm respectively"], correct: 1, explanation: "p-arm and q-arm respectively[span_169](start_span)[span_169](end_span)." },
            { q: "Part of chromosome after secondary constriction is called:", options: ["(1) Chromomere", "(2) Telomere", "(3) Satellite", "(4) Primary constriction"], correct: 2, explanation: "Satellite[span_170](start_span)[span_170](end_span)." },
            { q: "Structure which provides the shape of chromosomes is called", options: ["(1) Centromere", "(2) Centriole", "(3) Satellite", "(4) Chromomere"], correct: 0, explanation: "Centromere[span_171](start_span)[span_171](end_span)." },
            { q: "Chromosome is visible in", options: ["(1) Dividing cells", "(2) Non-dividing cells", "(3) Interphase of cell cycle", "(4) All of the above"], correct: 0, explanation: "Dividing cells[span_172](start_span)[span_172](end_span)." },
            { q: "Chromosomes can be classified on the basis of position of", options: ["(1) Centriole", "(2) Centromere", "(3) Satellite", "(4) Telomere"], correct: 1, explanation: "Centromere[span_173](start_span)[span_173](end_span)." },
            { q: "Read the following statements carefully and find out whether they are true or false.<br>I. Lysosomes are reservoirs of hydrolytic enzymes.<br>II. Chromatin contains DNA and histones.<br>III. Animal cells differ from plant cells in possessing a large central vacuole.<br>IV. Nucleolus is not a membrane-bound structure.", options: ["(1) I-T, II-F, III-T, IV-T", "(2) I-T, II-T, III-T, IV-T", "(3) I-T, II-T, III-F, IV-T", "(4) I-F, II-T, III-T, IV-T"], correct: 2, explanation: "I-T, II-T, III-F, IV-T[span_174](start_span)[span_174](end_span)." },
            { q: "Chromosome having centromere in its middle is:", options: ["(1) acrocentric.", "(2) telocentric.", "(3) metacentric.", "(4) sub-metacentric."], correct: 2, explanation: "metacentric[span_175](start_span)[span_175](end_span)." }
        ],
        "Cell Cycle and Cell Division": [],
        "Photosynthesis in Higher Plants": [],
        "Respiration in Plants": [],
        "Plant Growth and Development": [],
        "Sexual Reproduction in Flowering Plants": [],
        "Principles of Inheritance and Variation": [],
        "Molecular Basis of Inheritance": [],
        "Microbes in Human Welfare": [],
        "Biotechnology: Principles and Processes": [],
        "Biotechnology and its Applications": [],
        "Organisms and Populations": [],
        "Ecosystem": [],
        "Biodiversity and Conservation": []
    },

    "Zoology": {
        "Animal Kingdom": [],
        "Structural Organisation in Animals": [],
        "Biomolecules (Animal Biochemistry)": [],
        "Breathing and Exchange of Gases": [],
        "Body Fluids and Circulation": [],
        "Excretory Products and their Elimination": [],
        "Locomotion and Movement": [],
        "Neural Control and Coordination": [],
        "Chemical Coordination and Integration": [],
        "Human Reproduction": [],
        "Reproductive Health": [],
        "Evolution": [],
        "Human Health and Disease": []
    }
};
