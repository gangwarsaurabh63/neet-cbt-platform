const fullLengthTests = {
    "test_re_neet_01": {
        title: "Re NEET AITS Test - 01 (Code - 41712)",
        durationMinutes: 195,
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
                explanation: "Amoeboid -> Entamoeba (iii); Flagellated -> Trypanosoma (iv); Ciliated -> Paramecium (i); Sporozoans -> Plasmodium (ii)."
            },
            {
                id: 2,
                subject: "Biology",
                q: "Here are few statement given below, Identify organism on basis of statement:<br>i) Lack cell wall<br>ii) Smallest living cell known<br>iii) Can survive without oxygen<br>iv) Pathogenic in animal & plants.",
                options: ["(1) Nostoc", "(2) Anabaena", "(3) Mycoplasma", "(4) Chlorella"],
                correct: 2,
                explanation: "Mycoplasma lacks a cell wall, is the smallest known living cell, can survive without oxygen, and is pathogenic."
            },
            {
                id: 7,
                subject: "Biology",
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
                explanation: "Insulin -> Diabetes mellitus (v); Thyroxine -> Goitre (iv); Corticoids -> Addison's disease (i); Growth Hormone -> Acromegaly (iii)."
            }
        ]
    }
};
