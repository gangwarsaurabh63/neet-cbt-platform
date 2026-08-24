// =========================================================================
// NEETPREP ELITE - FULL-LENGTH MOCK TEST CATALOG (tests.js)
// =========================================================================

const fullLengthTests = {
    "test_full_length_01": {
        title: "Careerwill - Pre-Medical Major Test - 01 (14.03.2026)",
        durationMinutes: 195, // Set to 195 Minutes (3 Hours 15 Mins)
        totalQuestions: 180,
        questions: [
            {
                id: 1,
                subject: "Physics",
                q: "An explosion breaks a rock into three equal parts in a horizontal plane. Two of them go off at right angles to each other with speed of 6 m/s and 8 m/s respectively. Then find the speed of third part and also its angle of motion with that part having lesser speed:",
                options: [
                    "(1) 5 m/s, 127°",
                    "(2) 10 m/s, 127°",
                    "(3) 10 m/s, 143°",
                    "(4) 5 m/s, 147°"
                ],
                correct: 1,
                explanation: "Using conservation of momentum, the two perpendicular momenta are p₁ = m(6) and p₂ = m(8). Their resultant is √(6² + 8²) = 10m. The third part must have equal and opposite momentum 10m, giving a speed of 10 m/s. Angle calculations yield 127°."
            },
            {
                id: 2,
                subject: "Physics",
                q: "A disc revolves with a speed of (1/π) rev/sec and has a radius of 30 cm. Two coins A and B are placed at 10 cm and 20 cm away from the centre of the record. If the coefficient of friction between the coins and the record is 0.1, which of the coins will revolve with the record?",
                options: [
                    "(1) Only A",
                    "(2) Only B",
                    "(3) Both A and B",
                    "(4) None of the coin will revolve with record."
                ],
                correct: 2,
                explanation: "Maximum frictional force provides the necessary centripetal force: mω²r ≤ μmg, determining the threshold radius for coin B."
            },
            {
                id: 3,
                subject: "Chemistry",
                q: "<b>Match Column-I with Column-II:</b><br><br>" +
                   "<table border='1' style='border-collapse:collapse; width:100%; text-align:left; margin-bottom:12px; font-size:13px; border-color:#cbd5e1;'>" +
                   "<tr style='background:#e0f2fe; color:#0369a1;'><th style='padding:8px;'>Column-I (Atomic Number)</th><th style='padding:8px;'>Position in the Periodic Table</th></tr>" +
                   "<tr><td>(A) 52</td><td>(P) s-block</td></tr>" +
                   "<tr><td>(B) 56</td><td>(Q) p-block</td></tr>" +
                   "<tr><td>(C) 57</td><td>(R) d-block</td></tr>" +
                   "<tr><td>(D) 60</td><td>(S) f-block</td></tr>" +
                   "</table>" +
                   "Choose the correct option:",
                options: [
                    "(1) A-Q, B-P, C-R, D-S",
                    "(2) A-Q, B-R, C-S, D-P",
                    "(3) A-R, B-S, C-Q, D-P",
                    "(4) A-S, B-P, C-R, D-Q"
                ],
                correct: 0,
                explanation: "Atomic number 52 is Tellurium (p-block). 56 is Barium (s-block). 57 is Lanthanum (d-block). 60 is Neodymium (f-block)."
            },
            {
                id: 4,
                subject: "Biology",
                q: "<b>Match the following columns and choose the correct option:</b><br><br>" +
                   "<table border='1' style='border-collapse:collapse; width:100%; text-align:left; margin-bottom:12px; font-size:13px; border-color:#cbd5e1;'>" +
                   "<tr style='background:#e0f2fe; color:#0369a1;'><th style='padding:8px;'>Column-I</th><th style='padding:8px;'>Column-II</th></tr>" +
                   "<tr><td>i. Glutamic acid</td><td>a. Neutral amino acid</td></tr>" +
                   "<tr><td>ii. Valine</td><td>b. Acidic amino acid</td></tr>" +
                   "<tr><td>iii. Lysine</td><td>c. Aromatic amino acid</td></tr>" +
                   "<tr><td>iv. Tryptophan</td><td>d. Basic amino acid</td></tr>" +
                   "</table>",
                options: [
                    "(1) i-b, ii-a, iii-d, iv-c",
                    "(2) i-b, ii-d, iii-a, iv-c",
                    "(3) i-d, ii-a, iii-b, iv-c",
                    "(4) i-c, ii-a, iii-d, iv-b"
                ],
                correct: 0,
                explanation: "Glutamic acid is acidic (b), Valine is neutral (a), Lysine is basic (d), and Tryptophan is aromatic/neutral structure (c). Thus i-b, ii-a, iii-d, iv-c."
            }
        ]
    }
};
