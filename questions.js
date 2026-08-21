const allNeetTests = {
    "test1": [
        // ==================== TEST 1: 180 QUESTIONS ====================
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
        // 👉 PASTE your remaining questions (up to 180) right here inside this array.
        // Make sure every question object is separated by a comma (,) just like above.
    ],
    "test2": [
        // ==================== TEST 2: 180 QUESTIONS ====================
        {
            subject: "Physics",
            q: "Which of the following is a dimensionally correct equation for centripetal force?",
            options: ["F = mv²/r", "F = mvr", "F = mv/r²", "F = m²v/r"],
            correct: 0,
            explanation: "Dimensional analysis shows [MLT⁻²] equals [M][L²T⁻²]/[L], which matches [MLT⁻²]."
        }
        // 👉 PASTE your Test 2 questions here up to 180.
    ]
};
