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
// 2. CHAPTER-WISE PRACTICE QUESTION BANK (Complete Syllabus & PDF Questions)
// =========================================================================
const chapterwisePracticeBank = {
    // ----------------- PHYSICS -----------------
    "Physics": {
        "Physics and Measurement": [],
        "Kinematics": [],
        "Laws of Motion": [],
        "Work, Energy and Power": [],
        "Current Electricity": []
    },

    // ----------------- CHEMISTRY -----------------
    "Chemistry": {
        "Some Basic Concepts of Chemistry": [],
        "Structure of Atom": [],
        "Chemical Bonding and Molecular Structure": [],
        "Biomolecules": []
    },

    // ----------------- BOTANY -----------------
    "Botany": {
        "The Living World": [],
        "Biological Classification": [],
        "Plant Kingdom": [],
        "Cell - The Unit of Life": [
            {
                q: "Which of the following is true? (1) Most of the organisms have single cell in their bodies (2) Robert Hooke was the first person to describe a living cell (3) Both (4) None",
                options: ["Most organisms have single cell", "Robert Hooke described living cell", "Both", "None"],
                correct: 3,
                explanation: "Most organisms have a single cell (unicellular), but Robert Hooke described dead cork cells, not living cells[span_0](start_span)[span_0](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Who was the first person to see cells under the microscope and give them a name?",
                options: ["Anton van Leeuwenhoek", "Robert Hooke", "Theodor Schwann", "Matthias Schleiden"],
                correct: 1,
                explanation: "Robert Hooke was the first person to observe and name cells[span_1](start_span)[span_1](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Which object is not composed of cells?",
                options: ["Feather", "Garden soil", "Plank of wood", "Leaf"],
                correct: 1,
                explanation: "Garden soil is not composed of cells[span_2](start_span)[span_2](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Unicellular organisms are:",
                options: [
                    "Not capable of independent existence because they cannot perform all essential functions",
                    "Not capable of independent existence but can perform vital functions",
                    "Are capable of independent existence and perform all essential vital functions",
                    "Are capable to lead independent existence but they perform some vital functions"
                ],
                correct: 2,
                explanation: "Unicellular organisms are capable of independent existence and perform all essential vital functions[span_3](start_span)[span_3](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Match column I with column II and select the correct option: A. Leeuwenhoek - First saw living cell, B. Robert Brown - Discovered nucleus, C. Schleiden - All plants are composed..., D. Schwann - Cell wall unique to plants",
                options: ["A-(i), B-(iii), C-(iv), D-(ii)", "A-(i), B-(iii), C-(ii), D-(iv)", "A-(iii), B-(i), C-(iv), D-(ii)", "A-(i), B-(iv), C-(ii), D-(iii)"],
                correct: 0,
                explanation: "Leeuwenhoek first saw living cells, Robert Brown discovered the nucleus, Schleiden stated all plants are composed of cells, and Schwann noted plant cell walls/membranes[span_4](start_span)[span_4](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Select the incorrect statement.",
                options: ["Anything less than a complete structure of a cell does not ensure independent living", "Subcellular components can regenerate whole cell", "A cell arises by fusion of two cells", "None of these"],
                correct: 2,
                explanation: "A cell arises from pre-existing cells, not typically by the fusion of two cells in the context of cell theory fundamentals[span_5](start_span)[span_5](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "The cells discovered in thin sections of cork by Robert Hooke were actually:",
                options: ["Cell wall", "Cellulose", "Protoplasm", "Nuclei"],
                correct: 0,
                explanation: "The structures observed by Robert Hooke were plant cell walls[span_6](start_span)[span_6](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Just like Robert Hooke is related to cork cells, Anton von Leeuwenhoek is related to:",
                options: ["Nucleus", "Lysosome", "Live cells", "Chromatin"],
                correct: 2,
                explanation: "Leeuwenhoek is related to live cells[span_7](start_span)[span_7](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "The figures of cork cells as seen by Robert Hooke were published in the book:",
                options: ["Origin of species", "Species plantarum", "Genera plantarum", "Micrographia"],
                correct: 3,
                explanation: "Robert Hooke published his findings in his book Micrographia[span_8](start_span)[span_8](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Matthias Schleiden was:",
                options: ["British Zoologist", "German Botanist", "British Botanist", "German Zoologist"],
                correct: 1,
                explanation: "Matthias Schleiden was a German botanist[span_9](start_span)[span_9](end_span).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Who gave final shape to cell theory?",
                options: ["Virchow", "Schwann", "Schleiden", "Leeuwenhoek"],
                correct: 0,
                explanation: "Rudolf Virchow gave the final shape to cell theory.",
                pyqYear: "NEET Practice"
            },
            {
                q: "The new cells originate:",
                options: ["By bacterial fermentation", "From abiotic material", "From pre-existing cells", "Through regeneration of old cells"],
                correct: 2,
                explanation: "New cells originate from pre-existing cells (Omnis cellula-e cellula).",
                pyqYear: "NEET Practice"
            },
            {
                q: "Which one is an exception to cell theory?",
                options: ["Virus", "Mycoplasma", "Algae", "All the above"],
                correct: 0,
                explanation: "Viruses are non-cellular and represent an exception to cell theory.",
                pyqYear: "NEET Practice"
            },
            {
                q: "In which year did Matthias Schleiden observe different types of cells in various plant tissue?",
                options: ["1902", "1855", "1838", "1905"],
                correct: 2,
                explanation: "Schleiden made his observations in 1838.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Cell theory was formulated by:",
                options: ["Schleiden and Schwann", "Robert Hooke", "Leeuwenhoek", "Marcello Malpighi"],
                correct: 0,
                explanation: "Cell theory was formulated by Schleiden and Schwann.",
                pyqYear: "NEET Practice"
            },
            {
                q: "'Omnis cellula-e cellula' i.e., new cells arise from pre-existing cells; this statement is given by:",
                options: ["Schleiden and Schwann", "Rudolf Virchow", "Robert Brown", "George Palade"],
                correct: 1,
                explanation: "This statement was given by Rudolf Virchow.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Select the right option which relates to Schwann: I. Thin outer layer known as plasma membrane, II. Cell wall is a unique character of plant cell, III. Body of plants and animals are composed of cells and products of cells.",
                options: ["All are correct", "Only III is correct", "II and III are correct", "All are incorrect"],
                correct: 0,
                explanation: "All listed statements correctly align with Theodor Schwann's conclusions.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Assertion: The cell theory given by Schleiden and Schwann was modified by Rudolf Virchow. Reason: Cell theory says that all cells arise from pre-existing cells.",
                options: ["Both Assertion and Reason are true and Reason is correct explanation", "Both are true but Reason is not correct explanation", "Assertion is true but Reason is false", "Assertion is false but Reason is true"],
                correct: 0,
                explanation: "Virchow modified the theory precisely by adding that cells arise from pre-existing cells.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Prokaryotic cells are generally _____ than the eukaryotic cells.",
                options: ["Smaller, slower", "Larger, slower", "Smaller, faster", "Larger, faster"],
                correct: 2,
                explanation: "Prokaryotic cells are generally smaller and multiply faster than eukaryotic cells.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Nuclear membrane is absent in:",
                options: ["Penicillium", "Agaricus", "Volvox", "Nostoc"],
                correct: 3,
                explanation: "Nostoc is a prokaryote (cyanobacterium) and lacks a nuclear membrane.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Which of the following structures is not found in a prokaryotic cell?",
                options: ["Nucleoid", "Plasma membrane", "Nuclear envelope", "Ribosome"],
                correct: 2,
                explanation: "Prokaryotic cells lack a true nuclear envelope.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Which of the cell is round and biconcave?",
                options: ["Mesophyll cell", "Tracheid", "RBC", "WBC"],
                correct: 2,
                explanation: "Human red blood cells (RBCs) are round and biconcave.",
                pyqYear: "NEET Practice"
            },
            {
                q: "What is the size of the smallest cells in micrometer?",
                options: ["0.3", "0.4", "1.0", "3.0"],
                correct: 0,
                explanation: "Mycoplasmas, the smallest cells, are about 0.3 micrometers in length.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Which of the following is largest isolated cell?",
                options: ["Neuron", "Ostrich egg", "WBC", "None"],
                correct: 1,
                explanation: "The egg of an ostrich is the largest isolated single cell.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Longest cell in our body is nerve fibre. The smallest is of:",
                options: ["Human sperm", "Eye", "Kidney and Intestine", "Blood"],
                correct: 0,
                explanation: "Human sperm cells are among the smallest cells in the human body.",
                pyqYear: "NEET Practice"
            },
            {
                q: "An example of a prokaryotic cell is:",
                options: ["Blue-green algae", "Pleuro Pneumoniae Like Organism (PPLO)", "Bacteria", "All of these"],
                correct: 3,
                explanation: "All listed examples are prokaryotes.",
                pyqYear: "NEET Practice"
            },
            {
                q: "The main difference between prokaryotic and eukaryotic cell is that in the prokaryotic cell there is no: I. nucleus with a nuclear membrane, II. mitochondria and chloroplasts, III. cell wall, IV. genetic material.",
                options: ["Only I", "Only II", "I and II", "I and III"],
                correct: 2,
                explanation: "Prokaryotes lack a membrane-bound nucleus and membrane-bound organelles like mitochondria and chloroplasts.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Bacterial cell wall is made of:",
                options: ["Peptidoglycan", "Murein", "Chitin", "Both (1) and (2)"],
                correct: 3,
                explanation: "Bacterial cell walls are composed of peptidoglycan, also known as murein.",
                pyqYear: "NEET Practice"
            },
            {
                q: "When was the most accepted model for plasma membrane organization given?",
                options: ["1962", "1972", "1984", "1964"],
                correct: 1,
                explanation: "The Fluid Mosaic Model was proposed by Singer and Nicolson in 1972.",
                pyqYear: "NEET Practice"
            },
            {
                q: "Fungal cell wall is made of:",
                options: ["Chitin", "Galactan", "Mannan", "All of the above"],
                correct: 0,
                explanation: "Fungal cell walls are principally composed of chitin.",
                pyqYear: "NEET Practice"
            },
            {
                q: "🖼️ [Diagram Based] Identify the parts labeled A, B, C, and D in the given section of cilia/flagella showing the 9+2 axoneme arrangement:",
                options: [
                    "A-Plasma membrane, B-Interdoublet bridge, C-Central microtubule, D-Radial spoke",
                    "A-Plasma membrane, B-Arm, C-Central microtubule, D-Radial spoke",
                    "A-Plasma membrane, B-Interdoublet bridge, C-Hub, D-Radial spoke",
                    "A-Plasma membrane, B-Interdoublet bridge, C-Hub, D-Arm"
                ],
                correct: 0,
                explanation: "The cross-section of a cilium or flagellum shows an outer plasma membrane enclosing an axoneme with 9 peripheral doublets and 2 central microtubules connected by bridges and radial spokes.",
                pyqYear: "NEET Diagram Question"
            },
            {
                q: "🖼️ [Diagram Based] In the ultrastructure of a typical plant chloroplast, what do labels A and B typically represent in standard NCERT diagrams?",
                options: [
                    "A-Thylakoid; B-Stroma",
                    "A-Stroma lamella; B-Granum",
                    "A-Granum; B-Stroma",
                    "A-Stroma; B-Thylakoid"
                ],
                correct: 1,
                explanation: "In standard chloroplast diagrams, 'A' points to the inter-grana stroma lamella connecting stacks, and 'B' points to the stacked granum.",
                pyqYear: "NEET Diagram Question"
            },
            {
                q: "🖼️ [Diagram Based] Which cell organelle shows the polar 'cis' (forming) and 'trans' (maturing) faces involved in packaging secretory proteins?",
                options: ["Mitochondria", "Golgi apparatus", "Endoplasmic reticulum", "Chloroplast"],
                correct: 1,
                explanation: "The Golgi apparatus consists of many flat, disc-shaped sacs or cisternae stacked parallelly, featuring distinct convex cis (forming) and concave trans (maturing) faces.",
                pyqYear: "NEET Diagram Question"
            },
            {
                q: "🖼️ [Diagram Based] A structure showing 9 evenly spaced peripheral fibrils of tubulin protein without any central microtubules (the 9+0 arrangement) is found in:",
                options: ["Cilia", "Flagella", "Centriole", "Eukaryotic chromosome"],
                correct: 2,
                explanation: "Centrioles and basal bodies feature a 9+0 triplet microtubule arrangement, unlike the 9+2 arrangement found in cilia and flagella axonemes.",
                pyqYear: "NEET Diagram Question"
            }
        ]
    },

    // ----------------- ZOOLOGY -----------------
    "Zoology": {
        "Animal Kingdom": [],
        "Human Physiology - Heart": [],
        "Body Fluids and Circulation": []
    }
};
