// ==================== 1. MOCK TEST QUESTION BANK (CBT Mode) ====================
const allNeetTests = {
    "test1": [
        {
            subject: "Physics",
            chapter: "Dual Nature of Matter",
            q: "A proton accelerated through a potential V has de-Broglie wavelength λ. Then the de-Broglie wavelength of an α-particle, when accelerated through the same potential V, is:",
            options: ["λ / 2", "λ / √2", "λ / (2√2)", "λ / 8"],
            correct: 2,
            explanation: "Using formula λ = h / √(2meV). For α-particle, mass is 4m and charge is 2e, giving λ_α = λ / (2√2)."
        },
        // Add more test 1 questions up to 180 here...
    ],
    "test2": [
        {
            subject: "Physics",
            chapter: "Current Electricity",
            q: "Five identical cells are connected as shown in figure. Calculate effective e.m.f. between A and B:",
            options: ["E", "3E", "3E / 5", "zero"],
            correct: 1,
            explanation: "Parallel combination of identical cells keeps the effective EMF equal to a single cell E."
        }
    ]
};

// ==================== 2. CHAPTER-WISE PRACTICE QUESTION BANK ====================
// You can add as many chapters and questions as you want here!
const chapterwisePracticeBank = {
    "Physics": {
        "Mechanics": [
            {
                q: "A particle moves in a straight line with constant acceleration. It changes its velocity from 10 m/s to 20 m/s over 135 m. The time t is:",
                options: ["12 s", "9 s", "10 s", "1.8 s"],
                correct: 1,
                explanation: "Time t = distance / average velocity = 135 / ((10+20)/2) = 9 seconds."
            }
        ],
        "Current Electricity": [
            {
                q: "The electrical resistance of a voltmeter should be very high so that:",
                options: ["It draws maximum current", "It draws negligible current from the circuit", "It changes circuit potential", "None of these"],
                correct: 1,
                explanation: "A high resistance voltmeter draws negligible current, ensuring it doesn't disturb the voltage drop across the component being measured."
            }
        ]
    },
    "Chemistry": {
        "Chemical Bonding": [
            {
                q: "Which of the following molecules has maximum dipole moment?",
                options: ["HF", "HCl", "HBr", "HI"],
                correct: 0,
                explanation: "HF has the highest electronegativity difference, giving it the maximum dipole moment."
            }
        ]
    },
    "Botany": {
        "Cell Cycle": [
            {
                q: "Crossing over occurs during which stage of meiosis?",
                options: ["Leptotene", "Pachytene", "Diplotene", "Zygotene"],
                correct: 1,
                explanation: "Exchange of genetic material between non-sister chromatids occurs in pachytene."
            }
        ]
    },
    "Zoology": {
        "Human Physiology": [
            {
                q: "The pacemaker of the human heart is:",
                options: ["SA Node", "AV Node", "Bundle of His", "Purkinje fibers"],
                correct: 0,
                explanation: "Sinoatrial (SA) node initiates the normal cardiac impulse."
            }
        ]
    }
};
