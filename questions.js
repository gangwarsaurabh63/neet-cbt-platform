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
            explanation: "Using formula λ = h / √(2meV). For α-particle, mass is 4m and charge is 2e, giving λ_α = λ / (2√2)."
        },
        {
            subject: "Physics",
            q: "Five identical cells are connected as shown in figure. Calculate effective e.m.f. between A and B:",
            options: ["E", "3E", "3E / 5", "zero"],
            correct: 1,
            explanation: "Parallel combination of identical cells keeps the effective EMF equal to a single cell E."
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
// 2. CHAPTER-WISE PRACTICE QUESTION BANK (Organized by Subject & Chapter)
// =========================================================================
const chapterwisePracticeBank = {
    // ----------------- PHYSICS -----------------
    "Physics": {
        "Mechanics": [
            {
                q: "A particle moves in a straight line with constant acceleration. It changes its velocity from 10 m/s to 20 m/s over 135 m. The time t is:",
                options: ["12 s", "9 s", "10 s", "1.8 s"],
                correct: 1,
                explanation: "Time t = distance / average velocity = 135 / ((10+20)/2) = 9 seconds."
            },
            {
                q: "The escape velocity of a body from the earth depends upon:",
                options: ["Mass of the body", "Direction of projection", "Location from where it is projected", "Mass and radius of the earth"],
                correct: 3,
                explanation: "Escape velocity formula is v_e = √(2GM/R), which depends on mass and radius of the planet."
            }
        ],
        "Current Electricity": [
            {
                q: "Five identical cells are connected in parallel. The effective e.m.f. is:",
                options: ["E", "5E", "E / 5", "Zero"],
                correct: 0,
                explanation: "For identical cells in parallel, the total EMF is equal to the EMF of a single cell."
            }
        ]
    },

    // ----------------- CHEMISTRY -----------------
    "Chemistry": {
        "Chemical Bonding": [
            {
                q: "Which of the following molecules has maximum dipole moment?",
                options: ["HF", "HCl", "HBr", "HI"],
                correct: 0,
                explanation: "HF has the highest electronegativity difference, giving it the maximum dipole moment."
            }
        ],
        "Coordination Compounds": [
            {
                q: "The oxidation state of chromium in K₂Cr₂O₇ is:",
                options: ["+3", "+6", "+4", "+7"],
                correct: 1,
                explanation: "2(+1) + 2(Cr) + 7(-2) = 0 => 2Cr = 12 => Cr = +6."
            }
        ]
    },

    // ----------------- BOTANY -----------------
    "Botany": {
        "Cell Cycle and Division": [
            {
                q: "Crossing over occurs during which stage of meiosis?",
                options: ["Leptotene", "Pachytene", "Diplotene", "Zygotene"],
                correct: 1,
                explanation: "Exchange of genetic material between non-sister chromatids occurs in pachytene."
            }
        ],
        "Plant Kingdom": [
            {
                q: "Which of the following is a non-vascular embryophyte?",
                options: ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms"],
                correct: 1,
                explanation: "Bryophytes are non-vascular land plants that produce embryos."
            }
        ]
    },

    // ----------------- ZOOLOGY -----------------
    "Zoology": {
        "Human Physiology - Heart": [
            {
                q: "The pacemaker of the human heart is:",
                options: ["SA Node", "AV Node", "Bundle of His", "Purkinje fibers"],
                correct: 0,
                explanation: "Sinoatrial (SA) node initiates the normal cardiac impulse."
            }
        ],
        "Animal Kingdom": [
            {
                q: "Water vascular system is a characteristic feature of which phylum?",
                options: ["Porifera", "Echinodermata", "Mollusca", "Annelida"],
                correct: 1,
                explanation: "Water vascular system is unique to echinoderms like starfish and sea urchins."
            }
        ]
    }
};
