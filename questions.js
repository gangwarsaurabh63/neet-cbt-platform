const allNeetTests = {
    "test1": [
        // ==================== TEST 1: PHYSICS ====================
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
        // (Include the rest of your Test 1 questions here)
    ],
    "test2": [
        // ==================== TEST 2: PHYSICS ====================
        {
            subject: "Physics",
            q: "Which of the following is a dimensionally correct equation for centripetal force?",
            options: ["F = mv²/r", "F = mvr", "F = mv/r²", "F = m²v/r"],
            correct: 0,
            explanation: "Dimensional analysis shows [MLT⁻²] equals [M][L²T⁻²]/[L], which matches [MLT⁻²]."
        },
        {
            subject: "Physics",
            q: "The escape velocity of a body from the earth depends upon:",
            options: ["Mass of the body", "Direction of projection", "Location from where it is projected", "Mass of the earth and radius of the earth"],
            correct: 3,
            explanation: "Escape velocity formula is v_e = √(2GM/R), which depends on the mass and radius of the planet."
        }
        // (Add your other Test 2 questions here up to 180)
    ]
};
