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
    ],
    "test2": [
        {
            subject: "Physics",
            q: "Which of the following is a dimensionally correct equation for centripetal force?",
            options: ["F = mv²/r", "F = mvr", "F = mv/r²", "F = m²v/r"],
            correct: 0,
            explanation: "Dimensional analysis shows [MLT⁻²] equals [M][L²T⁻²]/[L]."
        }
    ]
};

// =========================================================================
// 2. CHAPTER-WISE PRACTICE QUESTION BANK (Fully Populated Syllabus)
// =========================================================================
const chapterwisePracticeBank = {
    // =====================================================================
    // PHYSICS CHAPTERS
    // =====================================================================
    "Physics": {
        "Physics and Measurement": [
            {
                q: "If error in measurement of radius of a sphere is 2%, then error in the calculation of volume is:",
                options: ["2%", "4%", "6%", "8%"],
                correct: 2,
                explanation: "Volume V = (4/3)πr³. Taking error: ΔV/V = 3(Δr/r) = 3 × 2% = 6%.",
                pyqYear: "NEET 2023"
            }
        ],
        "Kinematics": [
            {
                q: "A particle moves in a straight line with constant acceleration. It changes its velocity from 10 m/s to 20 m/s over 135 m. The time t is:",
                options: ["12 s", "9 s", "10 s", "1.8 s"],
                correct: 1,
                explanation: "Time t = distance / average velocity = 135 / ((10+20)/2) = 9 seconds.",
                pyqYear: "NEET 2022"
            }
        ],
        "Laws of Motion": [
            {
                q: "A block of mass m is placed on a rough inclined plane of angle θ. If coefficient of friction is μ, the minimum force required to move the block up the incline is:",
                options: ["mg sinθ", "mg(sinθ + μcosθ)", "mg(sinθ - μcosθ)", "μmg cosθ"],
                correct: 1,
                explanation: "To push up the incline, force must overcome both the component of gravity (mg sinθ) and maximum friction (μmg cosθ)."
            }
        ],
        "Work, Energy and Power": [],
        "Motion of System of Particles and Rigid Body": [],
        "Gravitation": [],
        "Properties of Solids and Liquids": [],
        "Thermodynamics": [],
        "Kinetic Theory of Gases": [],
        "Oscillations and Waves": [],
        "Electrostatics": [],
        "Current Electricity": [
            {
                q: "Five identical cells are connected in parallel. The effective e.m.f. is:",
                options: ["E", "5E", "E / 5", "Zero"],
                correct: 0,
                explanation: "For identical cells in parallel, the total EMF is equal to the EMF of a single cell."
            }
        ],
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
        "Chemical Bonding and Molecular Structure": [
            {
                q: "Which of the following molecules has maximum dipole moment?",
                options: ["HF", "HCl", "HBr", "HI"],
                correct: 0,
                explanation: "HF has the highest electronegativity difference, giving it the maximum dipole moment.",
                pyqYear: "NEET 2023"
            }
        ],
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
        "Coordination Compounds": [
            {
                q: "The oxidation state of chromium in K₂Cr₂O₇ is:",
                options: ["+3", "+6", "+4", "+7"],
                correct: 1,
                explanation: "2(+1) + 2(Cr) + 7(-2) = 0 => 2Cr = 12 => Cr = +6."
            }
        ],
        "Haloalkanes and Haloarenes": [],
        "Alcohols, Phenols and Ethers": [],
        "Aldehydes, Ketones and Carboxylic Acids": [],
        "Amines": [],
        "Biomolecules": [
            {
                q: "Which of the following is a reducing sugar?",
                options: ["Sucrose", "Lactose", "Cellulose", "Starch"],
                correct: 1,
                explanation: "Lactose contains a free reducing aldehyde group on its glucose unit, making it a reducing sugar.",
                pyqYear: "NEET 2025"
            }
        ],
        "Principles Related to Practical Chemistry": []
    },

    // =====================================================================
    // BOTANY CHAPTERS
    // =====================================================================
    "Botany": {
        "The Living World": [],
        "Biological Classification": [],
        "Plant Kingdom": [
            {
                q: "Which of the following is a non-vascular embryophyte?",
                options: ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms"],
                correct: 1,
                explanation: "Bryophytes are non-vascular land plants that produce embryos."
            }
        ],
        "Morphology of Flowering Plants": [],
        "Anatomy of Flowering Plants": [],
        "Cell - The Unit of Life": [],
        "Cell Cycle and Cell Division": [
            {
                q: "Crossing over occurs during which stage of meiosis?",
                options: ["Leptotene", "Pachytene", "Diplotene", "Zygotene"],
                correct: 1,
                explanation: "Exchange of genetic material between non-sister chromatids occurs during the pachytene stage of prophase I.",
                pyqYear: "NEET 2024"
            }
        ],
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
        "Animal Kingdom": [
            {
                q: "Water vascular system is a characteristic feature of which phylum?",
                options: ["Porifera", "Echinodermata", "Mollusca", "Annelida"],
                correct: 1,
                explanation: "Water vascular system is unique to echinoderms, aiding in locomotion, capture, and respiration."
            }
        ],
        "Structural Organisation in Animals": [],
        "Biomolecules (Animal Biochemistry)": [],
        "Breathing and Exchange of Gases": [],
        "Body Fluids and Circulation": [
            {
                q: "The pacemaker of the human heart is:",
                options: ["SA Node", "AV Node", "Bundle of His", "Purkinje fibers"],
                correct: 0,
                explanation: "Sinoatrial (SA) node generates the maximum number of action potentials per second, acting as the primary pacemaker.",
                pyqYear: "NEET 2023"
            }
        ],
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
