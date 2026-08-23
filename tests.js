// =========================================================================
// NEETPREP ELITE - MULTI-TEST SERIES CATALOG (tests.js)
// =========================================================================

const fullLengthTests = {
    "test_re_neet_01": {
        title: "Re NEET AITS Test - 01 (Code - 41712)",
        durationMinutes: 195, // 3 Hours 15 Mins
        totalQuestions: 180,
        questions: [
            {
                id: 1,
                subject: "Biology",
                q: "<b>Match the columns :</b><br><br>" +
                   "<table border='1' style='border-collapse:collapse; width:100%; text-align:left; margin-bottom:12px; font-size:13px; border-color:#cbd5e1;'>" +
                   "<tr style='background:#e0f2fe; color:#0369a1;'><th style='padding:8px; border:1px solid #cbd5e1;'>Column-I</th><th style='padding:8px; border:1px solid #cbd5e1;'>Column-II</th></tr>" +
                   "<tr><td style='padding:7px; border:1px solid #cbd5e1;'>A. Amoeboid protozoans</td><td style='padding:7px; border:1px solid #cbd5e1;'>(i) Paramecium</td></tr>" +
                   "<tr><td style='padding:7px; border:1px solid #cbd5e1;'>B. Flagellated protozoans</td><td style='padding:7px; border:1px solid #cbd5e1;'>(ii) Plasmodium</td></tr>" +
                   "<tr><td style='padding:7px; border:1px solid #cbd5e1;'>C. Ciliated protozoans</td><td style='padding:7px; border:1px solid #cbd5e1;'>(iii) Entamoeba</td></tr>" +
                   "<tr><td style='padding:7px; border:1px solid #cbd5e1;'>D. Sporozoans</td><td style='padding:7px; border:1px solid #cbd5e1;'>(iv) Trypanosoma</td></tr>" +
                   "</table>",
                options: [
                    "(1) A=(ii), B=(iv), C=(iii), D=(i)",
                    "(2) A=(i), B=(ii), C=(iii), D=(iv)",
                    "(3) A=(iii), B=(iv), C=(i), D=(ii)",
                    "(4) A=(iii), B=(iv), C=(ii), D=(i)"
                ],
                correct: 2, 
                explanation: "Amoeboid -> Entamoeba (iii); Flagellated -> Trypanosoma (iv); Ciliated -> Paramecium (i); Sporozoans -> Plasmodium (ii)[span_0](start_span)[span_0](end_span)."
            },
            {
                id: 2,
                subject: "Botany",
                q: "Here are few statements given below, Identify organism on basis of statements:<br>i) Lack cell wall<br>ii) Smallest living cell known<br>iii) Can survive without oxygen<br>iv) Pathogenic in animal & plants.",
                options: ["(1) Nostoc", "(2) Anabaena", "(3) Mycoplasma", "(4) Chlorella"],
                correct: 2,
                explanation: "Mycoplasma lacks a cell wall, is the smallest known living cell, can survive without oxygen, and is pathogenic[span_1](start_span)[span_1](end_span)."
            },
            {
                id: 3,
                subject: "Zoology",
                q: "<b>Match the following hormones with the respective disease:</b><br><br>" +
                   "<table border='1' style='border-collapse:collapse; width:100%; text-align:left; margin-bottom:12px; font-size:13px; border-color:#cbd5e1;'>" +
                   "<tr style='background:#e0f2fe; color:#0369a1;'><th style='padding:8px;'>Column-I</th><th style='padding:8px;'>Column-II</th></tr>" +
                   "<tr><td>(a) Insulin</td><td>(i) Addison's disease</td></tr>" +
                   "<tr><td>(b) Thyroxine</td><td>(ii) Diabetes insipidus</td></tr>" +
                   "<tr><td>(c) Corticoids</td><td>(iii) Acromegaly</td></tr>" +
                   "<tr><td>(d) Growth Hormone</td><td>(iv) Goitre</td></tr>" +
                   "<tr><td></td><td>(v) Diabetes mellitus</td></tr>" +
                   "</table>",
                options: ["(a) a-(v), b-(iv), c-(i), d-(iii)", "(b) a-(ii), b-(iv), c-(i), d-(iii)", "(c) a-(v), b-(i), c-(ii), d-(iii)", "(d) a-(ii), b-(iv), c-(iii), d-(i)"],
                correct: 0,
                explanation: "Insulin -> Diabetes mellitus (v); Thyroxine -> Goitre (iv); Corticoids -> Addison's disease (i); Growth Hormone -> Acromegaly (iii)[span_2](start_span)[span_2](end_span)."
            },
            {
                id: 4,
                subject: "Physics",
                q: "Let $x = \\frac{a^2 b^2}{c}$ be a physical quantity. If percentage errors in $a, b, c$ are 2%, 3%, and 4% respectively, find the percentage error in $x$.",
                options: ["(1) 7%", "(2) 14%", "(3) 21%", "(4) 28%"],
                correct: 1,
                explanation: "Using error propagation: $\\frac{\\Delta x}{x} = 2\\frac{\\Delta a}{a} + 2\\frac{\\Delta b}{b} + \\frac{\\Delta c}{c} = 2(2\\%) + 2(3\\%) + 4\\% = 14\\%$."
            },
            {
                id: 5,
                subject: "Chemistry",
                q: "In which of the following reactions does hydrogen peroxide ($H_2O_2$) act as a reducing agent?",
                options: [
                    "(1) $PbS + 4H_2O_2 \\rightarrow PbSO_4 + 4H_2O$",
                    "(2) $Mn^{2+} + H_2O_2 \\rightarrow Mn^{4+} + 2OH^{-}$",
                    "(3) $HOCl + H_2O_2 \\rightarrow H_3O^+ + Cl^- + O_2$",
                    "(4) $2Fe^{2+} + H_2O_2 \\rightarrow 2Fe^{3+} + 2OH^-$"
                ],
                correct: 2,
                explanation: "In reaction (3), $H_2O_2$ reduces $HOCl$ to $Cl^-$ while being oxidized to $O_2$, functioning as a reducing agent."
            }
        ]
    },
    "test_re_neet_02": {
        title: "Re NEET AITS Test - 02 (Code - 41713)",
        durationMinutes: 195,
        totalQuestions: 180,
        questions: [
            {
                id: 1,
                subject: "Physics",
                q: "Which of the following physical quantities has the same dimensions as Planck's constant?",
                options: ["(1) Torque", "(2) Angular momentum", "(3) Linear momentum", "(4) Surface tension"],
                correct: 1,
                explanation: "Both Planck's constant and angular momentum have dimensions of [ML²T⁻¹]."
            }
        ]
    }
};
