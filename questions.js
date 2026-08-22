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
// 2. CHAPTER-WISE PRACTICE QUESTION BANK (Botany - Detailed Explanations)
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
            { 
                q: "Which of the following is true?<br>1. Most of the organisms have single cell in their bodies<br>2. Robert Hooke was the first person to describe a living cell", 
                options: ["(1) Most organisms have single cell", "(2) Robert Hooke described living cell", "(3) Both", "(4) None"], 
                correct: 3, 
                explanation: "<b>Core Concept:</b> Unicellularity vs Multicellularity and historical microscopy.<br><br><b>Detailed Breakdown:</b> While most organisms on Earth are indeed single-celled (unicellular), Robert Hooke observed dead cork cells (cell walls), not living cells.<br><br><b>Elimination:</b> Since statement 2 is factually incorrect (Leeuwenhoek first described living cells), 'Both' is false.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Who was the first person to see cells under the microscope and give them a name?", 
                options: ["(1) Anton van Leeuwenhoek", "(2) Robert Hooke", "(3) Theodor Schwann", "(4) Matthias Schleiden"], 
                correct: 1, 
                explanation: "<b>Core Concept:</b> Discovery of cellular structures.<br><br><b>Detailed Breakdown:</b> Robert Hooke coined the term 'cell' in 1665 after observing honeycomb-like dead plant cork tissue under his primitive microscope.<br><br><b>Elimination:</b> Leeuwenhoek observed living cells later, while Schleiden and Schwann formulated cell theory.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Which object is not composed of cells?", 
                options: ["(1) Feather", "(2) Garden soil", "(3) Plank of wood", "(4) Leaf"], 
                correct: 1, 
                explanation: "<b>Core Concept:</b> Cellular basis of life.<br><br><b>Detailed Breakdown:</b> Garden soil is an abiotic mixture of minerals, organic matter, water, and air, lacking cellular organization.<br><br><b>Elimination:</b> Feathers, wood (plant xylem tissue), and leaves are entirely biological structures composed of cells.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Unicellular organism are", 
                options: ["(1) Not capable of independent existence because they cannot perform all essential functions", "(2) Not capable of independent existence but they can perform all essential vital functions", "(3) Are capable of independent existence and perform all the essential vital functions", "(4) Are capable to lead independent existence but they perform some vital functions"], 
                correct: 2, 
                explanation: "<b>Core Concept:</b> Fundamental attribute of cellular life.<br><br><b>Detailed Breakdown:</b> Anything less than a complete cell structure (like unicellular organisms) ensures independent living and successfully executes all vital metabolic functions.<br><br><b>Elimination:</b> Options claiming they cannot survive independently contradict core biological principles.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Match column I with column II and select the correct option from the codes given below:<br><br>" +
                   "<table style='width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;'>" +
                   "<tr><td style='width:50%; vertical-align: top; padding: 10px; border-right: 1px solid #e2e8f0;'><b>Column I</b><br>A. Leeuwenhoek<br>B. Robert Brown<br>C. Schleiden<br>D. Schwann</td>" +
                   "<td style='width:50%; vertical-align: top; padding: 10px;'><b>Column II</b><br>(i) First saw and described living cell<br>(ii) The Presence of cell wall is unique to plant cells<br>(iii) Discovered the nucleus<br>(iv) All plants are composed of different kinds of cell</td></tr>" +
                   "</table>", 
                options: ["(1) A-(i), B-(iii), C-(iv), D-(ii)", "(2) A-(i), B-(iii), C-(ii), D-(iv)", "(3) A-(iii), B-(i), C-(iv), D-(ii)", "(4) A-(i), B-(iv), C-(ii), D-(iii)"], 
                correct: 0, 
                explanation: "<b>Core Concept:</b> Historical milestones in cell biology.<br><br><b>Detailed Breakdown:</b> Leeuwenhoek discovered live cells; Robert Brown found the nucleus (1831); Schleiden proposed plant tissues consist of cells; Schwann stated plant cell walls are unique outer layers.<br><br><b>Elimination:</b> Matching code 1 correctly pairs every historical contributor to their verified scientific discovery.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Select the incorrect statement.", 
                options: ["(1) Anything less than a complete structure of a cell does not ensure independent living", "(2) Subcellular components can regenerate whole cell", "(3) A cell arises by fusion of two cells", "(4) None of these"], 
                correct: 2, 
                explanation: "<b>Core Concept:</b> Cell theory axioms.<br><br><b>Detailed Breakdown:</b> New cells arise from pre-existing cells through division (Omnis cellula-e cellula), not through the cellular fusion of two independent mature cells.<br><br><b>Elimination:</b> Statements 1 and 2 align with cellular autonomy and regeneration principles.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "The cells discovered in thin sections of cork by Robert Hooke were actually", 
                options: ["(1) Cell wall", "(2) Cellulose", "(3) Protoplasm", "(4) Nuclei"], 
                correct: 0, 
                explanation: "<b>Core Concept:</b> Composition of cork tissue.<br><br><b>Detailed Breakdown:</b> Cork cells are dead plant tissues where only the rigid cellulosic outer boundary (the cell wall) remains intact.<br><br><b>Elimination:</b> Protoplasm and nuclei degenerate and disappear as cork cells mature and die.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Just like Robert Hooke is related to cork cells, Anton von Leeuwenhoek is related to:", 
                options: ["(1) Nucleus", "(2) Lysosome", "(3) Live cells", "(4) Chromatin"], 
                correct: 2, 
                explanation: "<b>Core Concept:</b> First observation of living microscopic matter.<br><br><b>Detailed Breakdown:</b> Leeuwenhoek improved microscope lenses to observe living bacteria, protozoa, sperm, and red blood cells for the first time.<br><br><b>Elimination:</b> Nucleus was discovered by Robert Brown, while lysosomes and chromatin were found much later.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "The figures of cork cells as seen by Robert Hooke were published in the book:", 
                options: ["(1) Origin of species", "(2) Species plantarum", "(3) Genera plantarum", "(4) Micrographia"], 
                correct: 3, 
                explanation: "<b>Core Concept:</b> Historical literature of science.<br><br><b>Detailed Breakdown:</b> Robert Hooke published his microscopic drawings and descriptions in his landmark 1665 book titled *Micrographia*.<br><br><b>Elimination:</b> *Origin of Species* was authored by Charles Darwin, and plantarum books by Linnaeus.", 
                pyqYear: "NEET Practice" 
            },
            { 
                q: "Matthias Schleiden was:", 
                options: ["(1) British Zoologist", "(2) German Botanist", "(3) British Botanist", "(4) German Zoologist"], 
                correct: 1, 
                explanation: "<b>Core Concept:</b> Background of cell theory founders.<br><br><b>Detailed Breakdown:</b> Matthias Schleiden was a German botanist who examined numerous plant tissues and concluded that plants are made of cells.<br><br><b>Elimination:</b> Theodor Schwann was the German zoologist who studied animal cells.", 
                pyqYear: "NEET Practice" 
            }
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
