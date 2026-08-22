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
// 2. CHAPTER-WISE PRACTICE QUESTION BANK (Complete Official NEET Syllabus)
// =========================================================================
const chapterwisePracticeBank = {
    // =====================================================================
    // PHYSICS CHAPTERS
    // =====================================================================
    "Physics": {
        "Physics and Measurement": [],
        "Kinematics": [],
        "Laws of Motion": [],
        "Work, Energy and Power": [],
        "Motion of System of Particles and Rigid Body": [],
        "Gravitation": [],
        "Properties of Solids and Liquids": [],
        "Thermodynamics": [],
        "Kinetic Theory of Gases": [],
        "Oscillations and Waves": [],
        "Electrostatics": [],
        "Current Electricity": [],
        "Magnetic Effects of Current and Magnetism": [],
        "Electromagnetic Induction and Alternating Currents": [],
        "Electromagnetic Waves": [],
        "Optics": [],
        "Dual Nature of Matter and Radiation": [],
        "Atoms and Nuclei": [],
        "Electronic Devices": []
    },

    // =====================================================================
    // CHEMISTRY CHAPTERS
    // =====================================================================
    "Chemistry": {
        "Some Basic Concepts of Chemistry": [],
        "Structure of Atom": [],
        "Classification of Elements and Periodicity": [],
        "Chemical Bonding and Molecular Structure": [],
        "States of Matter: Gases and Liquids": [],
        "Chemical Thermodynamics": [],
        "Equilibrium": [],
        "Redox Reactions": [],
        "s-Block Elements": [],
        "p-Block Elements (Group 13 to 18)": [],
        "Organic Chemistry - Some Basic Principles & Techniques": [],
        "Hydrocarbons": [],
        "Solutions": [],
        "Electrochemistry": [],
        "Chemical Kinetics": [],
        "d- and f-Block Elements": [],
        "Coordination Compounds": [],
        "Haloalkanes and Haloarenes": [],
        "Alcohols, Phenols and Ethers": [],
        "Aldehydes, Ketones and Carboxylic Acids": [],
        "Amines": [],
        "Biomolecules": [],
        "Principles Related to Practical Chemistry": []
    },

    // =====================================================================
    // BOTANY CHAPTERS
    // =====================================================================
    "Botany": {
        "The Living World": [],
        "Biological Classification": [],
        "Plant Kingdom": [],
        "Morphology of Flowering Plants": [],
        "Anatomy of Flowering Plants": [],
        "Cell - The Unit of Life": [
            { 
                q: "Which of the following is true?<br>1. Most of the organisms have single cell in their bodies<br>2. Robert Hooke was the first person to describe a living cell", 
                options: ["(1) Only 1", "(2) Only 2", "(3) Both 1 and 2", "(4) None"], 
                correct: 3, 
                explanation: "Most organisms are single-celled, but Robert Hooke described dead cork cells[span_0](start_span)[span_0](end_span)." 
            },
            { 
                q: "Who was the first person to see cells under the microscope and give them a name?", 
                options: ["(1) Anton van Leeuwenhoek", "(2) Robert Hooke", "(3) Theodor Schwann", "(4) Matthias Schleiden"], 
                correct: 1, 
                explanation: "Robert Hooke[span_1](start_span)[span_1](end_span)." 
            },
            { 
                q: "Match Column I with Column II and select the correct option:<br><br><b>Column I</b><br>A. Leeuwenhoek<br>B. Robert Brown<br>C. Schleiden<br>D. Schwann<br><br><b>Column II</b><br>(i) First saw and described living cell<br>(ii) Cell wall is unique to plant cells<br>(iii) Discovered the nucleus<br>(iv) All plants are composed of cells", 
                options: ["(1) A-(i), B-(iii), C-(iv), D-(ii)", "(2) A-(i), B-(iii), C-(ii), D-(iv)", "(3) A-(iii), B-(i), C-(iv), D-(ii)", "(4) A-(i), B-(iv), C-(ii), D-(iii)"], 
                correct: 0, 
                explanation: "A-(i), B-(iii), C-(iv), D-(ii)[span_2](start_span)[span_2](end_span)." 
            },
            { 
                q: "Select the right option which relates to Schwann:<br>I. He reported that cells have a thin outer layer known as plasma membrane.<br>II. Cell wall is a unique character of plant cell.<br>III. Body of plants and animals are composed of cells and products of cells.", 
                options: ["(1) All are correct", "(2) Only III is correct", "(3) II and III are correct", "(4) All are incorrect"], 
                correct: 0, 
                explanation: "All are correct[span_3](start_span)[span_3](end_span)." 
            },
            { 
                q: "<b>Assertion (A):</b> The cell theory given by Schleiden and Schwann was modified by Rudolf Virchow.<br><b>Reason (R):</b> Cell theory says that all cells arise from pre-existing cells.", 
                options: ["(1) Both A and R are true and R is correct explanation", "(2) Both A and R are true but R is not correct explanation", "(3) A is true, R is false", "(4) A is false, R is true"], 
                correct: 0, 
                explanation: "Both A and R are true and R is correct explanation[span_4](start_span)[span_4](end_span)." 
            },
            { 
                q: "Choose the correct option.<br>Statement P: Cell wall gives shape to cell but it does not protect it from infection.<br>Statement Q: Cell wall helps in cell to cell interaction.", 
                options: ["(1) Both statements are correct", "(2) Both statements are incorrect", "(3) Only statement Q is correct", "(4) Only statement P is correct"], 
                correct: 2, 
                explanation: "Only statement Q is correct[span_5](start_span)[span_5](end_span)." 
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

    // =====================================================================
    // ZOOLOGY CHAPTERS
    // =====================================================================
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
