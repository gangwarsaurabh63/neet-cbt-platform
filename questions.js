const neetQuestions = [
    // ==================== PHYSICS (45 Questions) ====================
    {
        subject: "Physics",
        q: "A proton accelerated through a potential V has de-Broglie wavelength λ. Then the de-Broglie wavelength of an α-particle, when accelerated through the same potential V, is:",
        options: ["λ / 2", "λ / √2", "λ / (2√2)", "λ / 8"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "Five identical cells are connected as shown in figure. Calculate effective e.m.f. between A and B:",
        options: ["E", "3E", "3E / 5", "zero"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "A cassegrain telescope uses two mirrors built with mirrors 20 mm apart. If radius of curvature of larger mirror is 220 mm and small mirror is 140 mm, where will final image of an object at infinity be from secondary mirror?",
        options: ["315 mm", "415 mm", "215 mm", "115 cm"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "An infinite sequence of resistance is shown in the figure. The resultant resistance between A and B will be, when R1 = 1 ohm and R2 = 2 ohm:",
        options: ["Infinity", "1 Ω", "2 Ω", "1.5 Ω"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "In meter bridge, when two resistances R1 and R2 are connected in series across left gap and 10 in right gap, null point is 60 cm. With R1 and R2 in parallel across left gap and 5 in right gap, null point is 40 cm. Possible values are:",
        options: ["50, 100", "42, 12.5", "10Ω, 5Ω", "62, 90"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "Part of a simple harmonic motion is graphed where y is displacement from mean position. The correct equation describing this S.H.M is:",
        options: ["y = 4 cos(0.6t)", "y = 2 sin(10t/3 - π/2)", "y = 4 sin(10t/3 + π/2)", "y = 2 cos(10t/3 + π/2)"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Light with an energy flux of 20 W/cm² falls on a non-reflecting surface at normal incidence. If surface area is 30 cm², total momentum delivered during 30 min is:",
        options: ["36 × 10⁻⁵ kg·m/s", "36 × 10⁻⁴ kg·m/s", "108 × 10⁴ kg·m/s", "1.08 × 10⁷ kg·m/s"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "The load versus extension graph of a wire of length 1.5 m with cross-sectional area 2 mm² gives a Young's modulus of:",
        options: ["1.5 × 10¹¹ N/m²", "3.0 × 10¹¹ N/m²", "4.5 × 10¹¹ N/m²", "6 × 10¹¹ N/m²"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Find the distance from center of a uniform solid sphere at which gravitational potential is half of the potential at center of sphere (R = Radius of sphere):",
        options: ["√(3/2) R", "R", "4R/5", "4R/3"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "Two objects of mass m are connected by a thread over a frictionless pulley. If a third object m' is added on top of one, tension becomes 4/3 times initial tension. Find m':",
        options: ["m / 2", "m", "2m", "3m"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "The given graph shows variation of angle of deviation for a triangular prism kept in air. Correct statements include angle of prism = 60°, refractive index = √2, etc. Which combination is correct?",
        options: ["a & b", "b & c", "c, d & e", "b, c, d & e"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "A machine gun fires 60 bullets per minute with velocity 700 m/s. If each bullet has mass 50 g, power developed by the gun is:",
        options: ["10000 W", "12250 W", "9700 W", "None of these"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "The binding energy of 17Cl³⁵ nucleus is 298 MeV. Find its atomic mass (given mass of proton = 1.007277 amu, neutron = 1.00866 amu):",
        options: ["35.2796 amu", "34.9597 amu", "349.796 amu", "262.72 amu"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "An ideal fluid flows through a pipe of non-uniform diameter (max 6.4 cm, min 4.8 cm). The ratio of minimum to maximum velocity is:",
        options: ["√3 / 2", "3 / 4", "81 / 256", "9 / 16"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "A particle moves in a straight line with constant acceleration, changing velocity from 10 m/s to 20 m/s over 135 m in t seconds. Value of t is:",
        options: ["12 s", "9 s", "10 s", "1.8 s"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Length of a rectangular plate is 10.0 cm (least count 0.1 cm) and width is 1.00 cm (least count 0.01 cm). Max possible error in area measurement is:",
        options: ["±0.2 cm²", "±0.1 cm²", "±0.3 cm²", "zero"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "When a metal surface is illuminated with light of wavelength λ, stopping potential is 5V₀. With wavelength 4λ, stopping potential is V₀. Threshold wavelength is:",
        options: ["6λ", "1.33λ", "16λ", "8λ"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "An iron bar (Y = 10¹¹ N/m², α = 10⁻⁶/°C, 1 m long, area 10⁻³ m²) is heated from 0°C to 100°C without expanding. Compressive force developed is:",
        options: ["10,000 N", "1000 N", "5000 N", "10⁵ N"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "Two spherical balls with charge 10 µC are suspended by insulating threads of length √2 m. In equilibrium, threads are separated by 90°. Mass of each ball is:",
        options: ["0.1 gm", "22.5 gm", "1 gm", "102.5 gm"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "A stretched wire of length 110 cm is divided into three segments whose frequencies are in ratio 1:2:3. Their lengths must be:",
        options: ["20 cm; 30 cm; 60 cm", "60 cm; 30 cm; 20 cm", "60 cm; 20 cm; 30 cm", "30 cm; 60 cm; 20 cm"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Electric potential in a region is V = (3x²/2) - (y²/4). Electric field intensity at point (1m, 2m) is:",
        options: ["3î - ĵ", "-3î + ĵ", "6î - 2ĵ", "-6î + 2ĵ"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Two temperature scales A and B are related by (A-42)/110 = (B-72)/220. At which temperature do both scales have the same reading?",
        options: ["-42°", "-72°", "+12°", "-40°"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "A gas at initial temperature 127°C and γ = 1.5 is suddenly compressed to 1/9th of its initial volume. The rise in temperature is:",
        options: ["1200 K", "927°C", "400°C", "800 K"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "For a given toroid with inner radius 10 cm, outer radius 20 cm, N = 100 turns, and current I = 2A, the magnetic field along its axis will be nearly:",
        options: ["0.5 mT", "1 T", "0.25 mT", "4 T"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "A ball P collides with identical ball Q at rest. For what value of coefficient of restitution e does the velocity of Q become two times that of P after collision?",
        options: ["1 / 3", "1 / 2", "1 / 4", "1 / 6"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "In a double slit experiment, slits are 1 mm apart, screen 1 m away, wavelength 500 nm. Width of each slit for obtaining ten maxima within central maximum of single slit pattern is:",
        options: ["0.1 mm", "0.5 mm", "0.02 mm", "0.2 mm"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "A square wire frame of side 3 cm is placed 25 cm away from a concave mirror of focal length 10 cm. Area enclosed by the image of the wire is:",
        options: ["2 cm²", "1 cm²", "9 cm²", "None of these"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Magnetic moment of a magnet of mass 75 gm is 9 × 10⁻⁷ A·m². If density is 7.5 × 10³ kg/m³, intensity of magnetisation is:",
        options: ["0.9 A/m", "0.09 A/m", "9 A/m", "90 A/m"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "Three thin rods each of mass M and length L are placed along x, y, and z axes with one end at origin. Moment of inertia of this system about axis y = x is:",
        options: ["2ML² / 3", "4ML² / 3", "5ML² / 3", "ML² / 3"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "A body cools from 4T to 3T in 10 minutes (room temperature T). Temperature of the body at the end of next 10 minutes will be:",
        options: ["7T / 3", "T", "7T / 4", "3T / 2"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "An electron revolves around a proton in a circular orbit of diameter 1 Å, producing a magnetic field of 14 Wb/m² at the proton. Its angular velocity is about:",
        options: ["4.375 × 10¹⁶ rad/s", "2.25 × 10¹⁴ rad/s", "4 × 10¹⁵ rad/s", "8.75 × 10¹⁶ rad/s"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "In an ac circuit, e = 100 sin(30t) and i = 20 sin(30t - π/4). Average power consumed and wattless current are, respectively:",
        options: ["(50/√2)W, zero", "50W, zero", "50W, 10A", "(1000/√2)W, 10A"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "A student uses parallax method with least count 0.1 cm, obtaining graph between u and v where u = -30.0 cm and v = 60.0 cm. Measured focal length is:",
        options: ["(20.0 ± 0.055) cm", "(20 ± 0.11) cm", "(20.0 ± 0.1) cm", "(20 + 0.055) cm"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "Glass capillary is dipped in water so water rises to 5 cm. If another capillary with one-fourth cross-sectional area is dipped, water rises to:",
        options: ["2.5 cm", "5 cm", "7.5 cm", "10 cm"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "Two air-cored solenoids P and Q. Current in P changes at 5 A/s, induced emf in Q is 2 mV. If current in Q changes at 2 A/s, emf induced in P is:",
        options: ["8 × 10⁻⁴ V", "2 × 10⁻⁸ V", "5 × 10⁻³ V", "8 × 10⁻² V"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "In an RC circuit network with capacitors 2µF, 3µF, 4µF and a 30V battery, when the switch is closed, the amount of charge flowing through the battery is:",
        options: ["60 µC", "120 µC", "90 µC", "100 µC"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "A cart moves at 20 m/s. Sand drops into it at 50 kg/min. Force required to move cart with constant velocity is:",
        options: ["50 N", "30.33 N", "26.45 N", "16.66 N"],
        correct: 3
    },
    {
        subject: "Physics",
        q: "In a screw gauge with pitch 0.5 mm and 50 circular scale divisions, measuring a wire yields a volume of:",
        options: ["0.335 cm³", "0.295 cm³", "0.3346 cm³", "0.2948 cm³"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "For an atom with energy levels, transition from 4E to E emits photon λ₁, and transition from (7/3)E to E emits λ₂. Ratio λ₁/λ₂ is:",
        options: ["9 / 4", "4 / 9", "3 / 2", "7 / 3"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "For a Zener diode circuit with Rs = 400Ω, RL = 600Ω, and Vz = 6V connected to 12V supply, matching parameters gives power dissipated in Zener diode as:",
        options: ["30 mW", "12 mW", "10 mW", "5 mW"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "Dimensional formula of [β] in equation (α/t²) = FV + (β/x²) where T=time, F=force, V=velocity, X=distance is:",
        options: ["[M¹L⁴T⁻³]", "[M²L⁴T⁻²]", "[M²L³T⁻³]", "[M²L³T⁻²]"],
        correct: 0
    },
    {
        subject: "Physics",
        q: "Displacement-time curve for particles P and Q shows correct kinematic behavior where:",
        options: ["Both move with constant equal speed", "P is accelerated, Q is retarded", "Both move with uniform speed, speed of P > Q", "Both move with uniform speed, speed of Q > P"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "A battery of internal resistance 4Ω is connected to a resistor network. Value of R for maximum power transfer is:",
        options: ["4 / 9 Ω", "8 / 9 Ω", "2 Ω", "18 Ω"],
        correct: 2
    },
    {
        subject: "Physics",
        q: "A body of mass m tied to a spring yields elongation 1 cm. When angular velocity is doubled, elongation becomes 5 cm. Original length of spring is:",
        options: ["16 cm", "15 cm", "14 cm", "13 cm"],
        correct: 1
    },
    {
        subject: "Physics",
        q: "The given logic gate configuration combining OR and NAND gates is equivalent to:",
        options: ["NAND", "XOR", "OR", "XNOR"],
        correct: 3
    },

    // ==================== CHEMISTRY (45 Questions) ====================
    {
        subject: "Chemistry",
        q: "Wavelength of different radiations are given below: λ(A)=300 nm, λ(B)=300 pm, λ(C)=3 nm, λ(D)=300Å. The increasing order of their energies is:",
        options: ["A < B < C < D", "B < D < C < A", "A < C < D < B", "A < D < C < B"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Consider reversible reactions at 298K: (a) N2O4 ⇌ 2NO2, (b) 2SO2 + O2 ⇌ 2SO3, (c) 2HI ⇌ H2 + I2, (d) X + Y ⇌ 4Z. Highest and lowest value of Kc will be shown by respectively:",
        options: ["d, b", "a, c", "b, a", "b, c"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Following statements regarding water: How many of these are correct? (pH+pOH=14 at all temp; [H+][OH-]=10^-14 at all temp; neutral at all temp, etc.)",
        options: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "An organic compound on analysis was found to contain 0.032% of sulphur. If its molecule contains two sulphur atoms, the molecular mass of the compound will be:",
        options: ["200", "2000", "100000", "200000"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Assertion: Nitrous acid (HNO2) may act as an oxidising agent as well as reducing agent. Reason: Oxidation number of nitrogen remains same in all compounds.",
        options: ["Both Assertion & Reason are True & Reason is correct explanation", "Both True but Reason is not correct explanation", "Assertion is True but Reason is False", "Both are False"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "When one mole of an ideal gas is compressed to half of its initial volume and simultaneously heated to twice of its initial temperature, the change in entropy (ΔS) is:",
        options: ["Cp,m ln 2", "Cv,m ln 2", "R ln 2", "(Cv,m - R) ln 2"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Calculate the heat produced (in kJ) when 224 gm of CaO is completely converted to CaCO3 by reaction with CO2 at 27°C in a fixed volume container (ΔHf of CaCO3=-1207, CaO=-635, CO2=-394 kJ/mol):",
        options: ["702.04 kJ", "821.96 kJ", "1012 kJ", "921 kJ"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "The chemical reagent from which a solution of required concentration can be prepared is:",
        options: ["Secondary standard", "Dilute solution", "Concentrated solution", "Primary standard"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "0.15gm of a solute dissolved in 15gm of solvent boils higher by 0.216°C than pure solvent. Molecular mass of solute is (Kb = 2.16 K kg mol⁻¹):",
        options: ["1.01", "10", "10.1", "100"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "1 mole each of (i) NaCl, (ii) K2SO4, (iii) Na3PO4, (iv) glucose are taken in 5 moles water. Relative decrease in vapour pressure will be in order:",
        options: ["i < ii < iii < iv", "iv < iii < ii < i", "iv < i < ii < iii", "equal in all"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Match List-I (Conversion: 1 mol H2O to O2, MnO4- to Mn2+, etc.) with List-II (Faradays required):",
        options: ["A-II, B-IV, C-I, D-III", "A-III, B-IV, C-I, D-II", "A-II, B-III, C-I, D-IV", "A-III, B-IV, C-II, D-I"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "If E°(Au+/Au) is 1.69 V and E°(Au³+/Au) is 1.40 V, then E°(Au³+/Au+) will be:",
        options: ["0.19 V", "2.945 V", "1.255 V", "None of these"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Consider the graph of concentration vs time. Which option does not show instantaneous rate of reaction at 40th second?",
        options: ["(C5 - C2) / (50 - 30)", "(C3 - C2) / (40 - 30)", "(C3 - C1) / (40 - 20)", "(C4 - C2) / (50 - 30)"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "For phosgene formation mechanism CO + Cl2 → COCl2 with slow step COCl + Cl2 → COCl2 + Cl, the rate expression is:",
        options: ["r = k5 * (k3/k4) * (k1/k2)^(1/2) * [CO][Cl2]^(3/2)", "r = k5 * (k3/k4) * (k1/k2)^(1/2) * [CO][Cl2]^(1/2)", "r = k5 * (k3/k4)^(1/2) * (k1/k2) * [CO][Cl2]^(3/2)", "None of these"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "What will be molality of ethanol in water if mole fraction of ethanol is 0.4?",
        options: ["3.70 m", "18 m", "21 m", "37 m"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Which of the following statements would be incorrect?",
        options: ["Maximum covalency of second period element is 4", "Chemical reactivity best shown by reaction with oxygen & halogen", "Transition metals change in atomic radii is much smaller across period", "For all block elements metallic character increases down group"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Match the elements (Li, Be, C, Cs) with their properties (Most acidic oxide, Most metallic, Similar to Al, Highest IE2):",
        options: ["(i)D (ii)C (iii)A (iv)B", "(i)D (ii)A (iii)C (iv)B", "(i)A (ii)C (iii)B (iv)D", "(i)C (ii)D (iii)B (iv)A"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "In NO3- ion, the number of bond pairs and lone pairs of electrons on nitrogen is:",
        options: ["3, 0", "5, 0", "4, 0", "4, 1"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "Statement-I: Bonds formed by hybrid orbitals are stronger than atomic orbitals. Statement-II: In benzene all carbon atoms have sp² hybridisation.",
        options: ["Both statement-I and II are correct", "Statement-I correct, II incorrect", "Statement-I incorrect, II correct", "Both incorrect"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "Statement-1: Benzene itself is non-polar, but on monosubstitution it becomes polar. Statement-2: Dipole moment of disubstituted benzene is always zero.",
        options: ["Both incorrect", "Statement-1 correct, Statement-2 incorrect", "Statement-1 incorrect, Statement-2 correct", "Both correct"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "Which option/statement is not for the theory mentioned in bracket?",
        options: ["Does not explain shape & relative stability (octet theory)", "Multiple bond treated as single super pair (VSEPR)", "Zero overlapping (VBT)", "Bond order can't be fractional (MOT)"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Match coordination compounds [Cr(H2O)6]3+, [Co(CN)4]2-, [Ni(NH3)6]2+, [MnF6]4- with hybridisation and unpaired electrons:",
        options: ["RPTQ", "SRQP", "RQSP", "SPQR"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Consider statements on [Cr(NH3)6]3+, [Fe(CN)6]3-, [Mn(CN)6]3- regarding CFSE and magnetic moments:",
        options: ["FTF", "TTF", "TTT", "FFF"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Read statements on geometrical and optical isomerism in square planar and octahedral complexes. The option having incorrect statements is:",
        options: ["I, III & IV", "I & II", "II only", "I, II, III & IV"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Choose the incorrect statement among carbon isotope, group 14 ionization energy, electronegativity, and complex existence:",
        options: ["¹⁴C is radioactive used for radiocarbon dating", "Ionization Energy of group-14 elements regularly decrease down the group", "Electronegativity values of H & P are almost same", "[SiF6]²⁻, [GeCl6]²⁻ and [Sn(OH)6]²⁻ exist"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "Based on group 15 elements: Bi2O5 basicity, NF3 covalency, PH3 boiling point, N-N vs P-P bond strength. Correct statements are:",
        options: ["A, B & C", "Only A & B", "A, B, C & D", "Only C & D"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Which transition element does not have variable oxidation state?",
        options: ["Zn", "Cu", "V", "Sc"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Which of the following statements is not incorrect regarding Chromyl chloride test, KMnO4 decomposition, d-block metallic structures, and tetrahedral geometry?",
        options: ["Chromyl chloride test not applicable for KCl, CaCl2, CsCl", "KMnO4 gives Mn2O7 and O2 in thermal decomposition", "Zn, Cd, Hg show one or more typical metallic structures", "MnO4- and CrO42- show tetrahedral geometry and form pπ-dπ bonds"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Identify correct statements for halide salt reactions with conc. H2SO4 (chloride gives reddish brown fumes, iodide gives violet vapours, bromide gives reddish brown fumes in excess):",
        options: ["(i) and (ii)", "(ii) and (iii)", "(i) and (iii)", "All are correct"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "MgSO4 on reaction with NH4OH and Na2HPO4 forms a white crystalline precipitate of formula:",
        options: ["Mg3(PO4)2", "MgCl2", "MgSO4", "Mg(NH4)PO4"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Assertion: Synthesis of ethyl phenyl ether may be achieved by Williamson synthesis. Reason: Reaction of bromobenzene with sodium ethoxide yields ethyl phenyl ether.",
        options: ["Both (A) and (R) correct and R is explanation", "A correct but R not correct", "A not correct but R correct", "Both correct but R not explanation"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "What is the correct acidic strength order of substituted benzoic acid/phenol derivatives?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "The major product (R) of the reaction sequence: Phenol + CHCl3/KOH → P + HCN → Q + H3O⁺ → R is:",
        options: ["Salicylic acid derivative 1", "Derivative 2", "Derivative 3", "Derivative 4"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "The product of which of the following reactions does not undergo oxidation with acidified KMnO4?",
        options: ["Na / liq. NH3 reduction product", "CrO3 / acetic anhydride oxidation product", "Tertiary butyl chloride reaction", "Silver salt reaction"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "Which of the following statements is incorrect regarding nitration/chlorination/alkylation of benzene and carcinogenicity?",
        options: ["Electrophiles are Cl⁺ and R⁺ respectively", "During nitration, sulfuric acid acts as base and nitric acid acts as acid", "In sigma complex one carbon is sp³ hybrid", "Polynuclear hydrocarbons with more than two rings are nontoxic"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "For reaction sequence starting from phenyl/acyl derivatives leading to product C, what is correct about product (C)?",
        options: ["C gives silver mirror with Tollen's reagent", "C gives yellow precipitate with I2/NaOH", "C can be prepared by HCHO + methyl magnesium bromide", "Both (2) & (3) are correct"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "In which of the following will 1° amine not be the product?",
        options: ["CH3CH2CN + H2/Ni", "Amide reduction with LiAlH4", "Isocyanide reduction", "Cyanide reduction with Na/C2H5OH"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "Reaction sequence of benzene/phenol derivatives leading to compound B yields which structure?",
        options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "In Lassaigne's test for sulphur in organic compound with sodium nitroprusside solution, the violet colour formed is due to:",
        options: ["Na2[Fe(CN)5NOS]", "Na3[Fe(CN)5S]", "Na4[Fe(CN)5NOS]", "Na3[Fe(CN)6]"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "The IUPAC name of the given compound containing CHO, Bromo, chloro, and methyl groups on a hexenal chain is:",
        options: ["(2R, 4Z)-4-Bromo-2-chloro-2-methyl-4-hexenal", "(2R, 4E)-4-Bromo-2-chloro-2-methyl-4-hexenal", "(2Z, 5R)-3-Bromo-5-chloro-5-formyl-2-hexene", "(2S, 4E)-4-Bromo-2-chloro-2-methyl-4-hexenal"],
        correct: 1
    },
    {
        subject: "Chemistry",
        q: "Which is an incorrect statement regarding stereoisomers, meso-compounds, geometrical isomers, and enantiomers?",
        options: ["Pair 1", "Pair 2", "Pair 3 are conformations", "Pair 4"],
        correct: 2
    },
    {
        subject: "Chemistry",
        q: "Which of the following is benzenoid?",
        options: ["Thiophene", "Pyrrole", "Tropone", "Naphthalene"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Which is an incorrect statement regarding carbohydrates (Cellulose, Sucrose, anomers, epimers)?",
        options: ["Cellulose is linear polymer of α-D-glucose", "Sucrose is composed by α-D-glucose and β-D-fructose", "α-D-glucose and β-D-glucose are anomers", "Glucose and mannose are epimers"],
        correct: 0
    },
    {
        subject: "Chemistry",
        q: "Match reactions (Gattermann-Koch, Swarts, Sandmayer, Etard) with their names:",
        options: ["P-B, Q-C, R-A, S-D", "P-B, Q-D, R-C, S-A", "P-C, Q-B, R-D, S-A", "P-B, Q-C, R-D, S-A"],
        correct: 3
    },
    {
        subject: "Chemistry",
        q: "Which among the following statements are correct regarding carbenes and carbon radicals (CH3 radical sp² vs sp³ hybrid, singlet vs triplet CH2 stability)?",
        options: ["Statement 1 only", "Statement 2 only", "Statement 3 only", "Statement 4"],
        correct: 1
    },

    // ==================== BOTANY (45 Questions) ====================
    {
        subject: "Botany",
        q: "Consider the following statements (A to D): Numerical taxonomy, Cytotaxonomy, Phylogenetic classification systems, Artificial classifications. How many statements are not correct?",
        options: ["One", "Two", "Three", "Zero"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "In Mangifera indica, Solanum tuberosum, and Panthera leo, all the three names indica, tuberosum and leo represent the:",
        options: ["Names of family", "Names of specific epithets", "Names of genus", "Names of generic epithet"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Pyriform biflagellated male gametes, oogamous sexual reproduction, and diplontic life cycle pattern are related to:",
        options: ["Chara", "Fucus", "Cladophora", "Polysiphonia"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Animals, mammals, and dogs represent:",
        options: ["Taxa at same levels", "Taxa / Taxon at different levels", "Taxa which have same morphological characters", "Taxa at division level"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Chemosynthetic bacteria obtain energy:",
        options: ["from sunlight", "from UV rays", "from Water", "By the oxidation of organic or inorganic substances"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Assertion: In gymnosperm male and female gametophyte remain within sporangia. Reason: They do not have an independent free living existence.",
        options: ["Both True & Reason is correct explanation", "Both True but Reason is not correct explanation", "Assertion is True but Reason is False", "Both False"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "The side of a flower facing the mother axis is called:",
        options: ["Anterior side", "Posterior side", "Dorsal side", "Ventral side"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "In dicot leaves, size of vascular bundles are dependent on the:",
        options: ["Size of the leaves", "Size of the mesophyll cells", "Size of the veins", "Size of the bundle sheath cells"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "The transverse section of stem of dicotyledonous plant shows which anatomical feature?",
        options: ["Phloem parenchyma absent", "Water containing cavities within vascular tissue", "Hypodermis made up of sclerenchyma", "Vascular bundles are conjoint, collateral and open arranged in a ring"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Assertion: Endomembrane system include ER, golgi complex, lysosome and vacuole. Reason: Their functions are coordinated to each other.",
        options: ["Both True & correct explanation", "Both True but not explanation", "Assertion True, Reason False", "Both False"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Plant cells differ from animal cells in having:",
        options: ["large vacuole, plastids and cell wall", "cell wall, plastids and centrioles", "cell wall, plastids and mitochondria", "cell membrane, plastids and cell wall"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Which of the following statements with respect to endoplasmic reticulum is incorrect?",
        options: ["Part of endomembrane system", "Steroidal hormones synthesised in SER", "RER bears ribosomes on surface", "SER is continuous with inner membrane of nucleus"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Arrange the events of interphase in correct sequence: (i) RNA & DNA polymerase synthesis, (ii) DNA replication & histone synthesis, (iii) Tubulin synthesis, (iv) Karyokinesis & cytokinesis",
        options: ["(i) -> (ii) -> (iii) -> (iv)", "(ii) -> (i) -> (iii) -> (iv)", "(iv) -> (iii) -> (ii) -> (i)", "(iii) -> (iv) -> (ii) -> (i)"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "In cells of higher plants, during S-phase:",
        options: ["DNA replication in nucleus and centrioles duplicate in cytoplasm", "DNA replication occurs in nucleus", "Centrioles duplicates in cytoplasm", "Centrioles duplicate in nucleus and DNA replication in cytoplasm"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "How many chromosomes will onion root tip cell have at G1-phase, after S-phase and after M-phase if it has 16 chromosomes in mesophyll cell?",
        options: ["16, 32, 32", "16, 32, 16", "8, 16, 16", "16, 16, 16"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "The acid insoluble fraction of the tissue has:",
        options: ["Amino acids, Proteins and nucleic acids", "Monosaccharides and polysaccharides", "Nucleic acids, nucleotides and nitrogen base", "Proteins, nucleic acids, polysaccharides and lipids"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Statement A: Steroids do not contain fatty acids, but are included in lipids. Statement B: Cholesterol is the most abundant steroid in animal tissues.",
        options: ["Both statements are correct", "Statement A correct, B incorrect", "Statement A incorrect, B correct", "Both incorrect"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Statement-I: Enzyme substrate complex is short lived and dissociated into product and enzyme. Statement-II: Most enzymes classified based on essentiality of ES complex.",
        options: ["Both statement-I and II are correct", "Both incorrect", "Only statement-I is correct", "Only statement-II is correct"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Which among the following is not a post-fertilization event in flowering plants?",
        options: ["Endosperm and embryo development", "Maturation of ovule into seed", "Ovary into fruit conversion", "Formation of megaspores from megaspore mother cell"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Statement-1: If female parent produces unisexual flowers, no need for emasculation. Statement-2: Pollination transfers pollen grains from anther to stigma.",
        options: ["Both statements are correct", "Statement-1 correct, 2 incorrect", "Statement-1 incorrect, 2 correct", "Both incorrect"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Statement-1: Megaspore mother cell divides meiotically and one megaspore forms embryo sac. Statement-2: Mature embryo sac is 7 nucleated and 8 celled.",
        options: ["Statement-1 correct, Statement-2 incorrect", "Statement-2 correct, Statement-1 incorrect", "Both statements are correct", "Both statements are incorrect"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Match List-I (Splitting of water, Radioactive carbon use, ATP synthesis, Malic acid synthesis) with List-II (Calvin pathway, Cyclic photophosphorylation, Z-scheme, Hatch & Slack):",
        options: ["A-I, B-II, C-III, D-IV", "A-IV, B-III, C-II, D-I", "A-III, B-I, C-II, D-IV", "A-IV, B-I, C-II, D-III"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Which statement(s) is/are true regarding temperature sensitivity of dark and light reactions?",
        options: ["Dark reaction is more temperature sensitive than light reaction", "Light reaction is more temperature sensitive than dark reaction", "Both are not sensitive to temperature", "Dark reaction sensitive, light reaction not sensitive to light"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Statement-I: Ubiquinol is oxidised with transfer of electrons to cytochrome c via bc1 complex. Statement-II: Cytochrome c oxidase complex contains cytochromes a, a3 and two copper centres.",
        options: ["Both incorrect", "Statement I correct, II incorrect", "Statement I incorrect, II correct", "Both Statement I and II are correct"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Cytochrome c is a small protein attached to the:",
        options: ["Outer surface of inner mitochondrial membrane", "Inner surface of outer mitochondrial membrane", "Inner surface of inner mitochondrial membrane", "Outer surface of outer mitochondrial membrane"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "What would be correct regarding growth figures (a and b showing leaf growth area)?",
        options: ["Relative growth rate is equal in both", "Figure (a) shows more absolute growth rate", "Absolute growth rate is equal in both", "Relative growth rate is more in figure (b)"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Oxygen acts as final hydrogen acceptor in ETS. How many molecules of oxygen are required to oxidise 6 molecules of pyruvic acid?",
        options: ["20 oxygen", "15 oxygen", "30 oxygen", "60 oxygen"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Which of the following hormone promotes internode/petiole elongation in deep water rice?",
        options: ["Kinetin", "Ethylene", "2-4-D", "GA3"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Match Column-I (Multiple alleles, Polygenic inheritance, Pleiotropy) with Column-II definitions:",
        options: ["A-ii, B-iii, C-i", "A-iii, B-ii, C-i", "A-i, B-ii, C-iii", "A-ii, B-i, C-iii"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Which of the following statement is not true for two genes showing 50% recombination frequency?",
        options: ["May be on different chromosomes", "Tightly linked", "Show independent assortment", "Undergo more than one crossover if on same chromosome"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Location of few genes of Drosophila studied by T.H. Morgan:",
        options: ["y, w, m on Y chromosome", "y+, w+, m+ on Y chromosome", "y, y+, w, w+, m, m+ on X-chromosome", "Present on autosomes"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Of a normal couple, half the sons are haemophilic while half the daughters are carriers. The gene is located on:",
        options: ["X-chromosome of father", "Y-chromosome of father", "One X-chromosome of mother", "Both X-chromosomes of mother"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "A man with blood group B marries female with blood group A and first child has blood group B. What is genotype of child?",
        options: ["IAIB", "IAIO", "IBIO", "IBIB"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Match transcription factors in prokaryotes (Sigma factor, Template strand, Coding strand, RNA Polymerase):",
        options: ["1-a, 2-b, 3-c, 4-d", "1-d, 2-b, 3-c, 4-a", "1-c, 2-d, 3-a, 4-b", "1-b, 2-d, 3-a, 4-c"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Find out correct statements for lac-operon (structural genes regulated by common promoter, i refers to inducer, lactose is substrate, y-gene codes for permease, z-gene codes for beta-galactosidase):",
        options: ["a and c only", "a, b and e only", "a, c and e only", "a, c, d and e"],
        correct: 3
    },
    {
        subject: "Botany",
        q: "Sequence of binding of amino acyl-t-RNA complexes during translation for mRNA transcribed by 3'ATACGCATTGCG5':",
        options: ["a, b, c, d", "d, a, b, c", "a, c, d, b", "b, a, c, d"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "The repressor of the operon is synthesized:",
        options: ["All the time", "Certain time", "Non constitutively", "None of them"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "Identify incorrect match: Ribozyme (Nucleic acid), Spliceosome (Bacteria), Genetic code (Triplet), Replication (DNA Polymerase):",
        options: ["Ribozyme - Nucleic acid", "Spliceosome - Bacteria", "Genetic code - Triplet", "Replication - DNA Polymerase"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "During replication of DNA, Okazaki fragments are formed in the direction of:",
        options: ["3' -> 5'", "5' -> 3'", "5' -> 5'", "3' -> 3'"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Match ecological interactions (Commensalism, Parasitism, Mutualism, Predation) with examples and effects (+/-, +/+, etc.):",
        options: ["A-1-i-α; B-2-ii-β; C-3-iii-γ; D-4-iv-δ", "A-2-ii-β; B-1-iii-γ; C-3-i-α; D-4-iv-δ", "A-3-iii-γ; B-4-iv-α; C-2-ii-β; D-1-i-δ", "A-1-ii-γ; B-3-i-α; C-2-iii-β; D-4-iv-δ"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "They reduce survival, growth and reproduction of host and render them vulnerable to predation. They are:",
        options: ["Predator", "Parasite", "Amensal", "Commensal"],
        correct: 1
    },
    {
        subject: "Botany",
        q: "Statement I: Primary source of energy in ecosystem is solar energy. Statement II: Rate of production of organic matter during photosynthesis is net primary productivity (NPP).",
        options: ["Both statement I and II are correct", "Both incorrect", "Statement I correct, II incorrect", "Statement I incorrect, II correct"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Assertion (A): Pyramid of biomass in sea is generally inverted. Reason (R): Paradoxically biomass of phytoplankton exceeds that of fishes.",
        options: ["Both incorrect", "Both correct and R explains A", "A correct, R incorrect", "A correct, R correct but not explanation"],
        correct: 2
    },
    {
        subject: "Botany",
        q: "Which of the following is not included in 'Evil Quartet' responsible for biodiversity loss?",
        options: ["Co evolution", "Overexploitation", "Alien species invasion and co extinction", "Habitat loss and fragmentation"],
        correct: 0
    },
    {
        subject: "Botany",
        q: "The Earth Summit was held in:",
        options: ["2002 in Johannesburg", "1992 in Rio de Janeiro", "1992 in Johannesburg", "2002 in Rio de Janeiro"],
        correct: 1
    },

    // ==================== ZOOLOGY (45 Questions) ====================
    {
        subject: "Zoology",
        q: "Match organisms Pila, Bombyx, Pleurobrachia, Taenia with characteristics (Flame cells, Comb plates, Radula, Malpighian tubules):",
        options: ["(iii), (ii), (iv), (i)", "(iii), (ii), (i), (iv)", "(iii), (iv), (ii), (i)", "(ii), (iv), (iii), (i)"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "First phylum to have complete digestive tract can be represented by:",
        options: ["Hydra", "Taenia", "Ancylostoma", "Pheretima"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Identify incorrect match: Porifera, Coelenterata, Ctenophora, Platyhelminthes:",
        options: ["Porifera - ostia, choanocytes, indirect development, sycon", "Coelenterata - Cnidoblasts, Gastrovascular cavity, Triploblastic, Adamsia", "Ctenophora - Combplates, Diploblastic, indirect development, Ctenoplana", "Platyhelminthes - Flame cells, Parasite, Monocious, Tapeworm"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Read statements regarding matrix of connective tissue (cells secrete matrix, matrix accumulates between cells and fibres, matrix acts as ground substance):",
        options: ["a only", "b and c", "a and c", "a, b and c"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "During metamorphosis, moulting occurs how many times in cockroach?",
        options: ["3-5", "15-20", "13", "1-2"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Which of the following is an unpaired structure in Rana tigrina?",
        options: ["Optic lobes in midbrain", "Lungs", "Diencephalon in forebrain", "Kidneys"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "With reference to frog: Statement I: Ability to change color to hide from enemy. Statement II: Undergo summer sleep (aestivation) and winter sleep (hibernation).",
        options: ["Both incorrect", "Statement I incorrect, II correct", "Both Statement I and II are correct", "Statement I correct, II incorrect"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Which type of animals pump out mixed blood present in ventricles to organs?",
        options: ["Fishes and Amphibians", "Birds and mammals", "Amphibians and mammals", "Amphibians and reptiles"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Match ECG waves (P-wave, T-wave, QRS complex, End of T-wave) with heart activities:",
        options: ["A-III, B-I, C-IV, D-II", "A-III, B-I, C-II, D-IV", "A-IV, B-I, C-III, D-II", "A-IV, B-I, C-II, D-IV"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Tidal volume and inspiratory reserve volume are 500 ml and 2500 ml. Vital capacity if expiratory reserve volume is 1000 ml:",
        options: ["2000 ml", "1500 ml", "3500 ml", "4000 ml"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Arrange steps of expiration: Relaxation of diaphragm, Reduction of pulmonary volume, Expulsion of air, Increase in intra-pulmonary pressure:",
        options: ["I -> II -> III -> IV", "I -> II -> IV -> III", "IV -> III -> II -> I", "IV -> II -> III -> I"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Observe alveoli figure and identify label 'A' and nature of tissue associated:",
        options: ["Basement membrane - Non-cellular layer", "Blood capillary - Mesothelium", "Alveolar wall - One-celled thick squamous epithelium", "Alveoli compound endothelium"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "During micturition, urinary bladder and urethral sphincter respectively:",
        options: ["Contracts, Contracts", "Contracts, Relaxes", "Relaxes, Contracts", "Relaxes, Relaxes"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Which condition will not activate JG cells?",
        options: ["Decrease in blood volume", "Fall in Na+ ion concentration", "Rise in GFR", "Fall in blood pressure"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Diagram representing nerve impulse in myelinated neuron. Label parts correctly:",
        options: ["1", "2", "3", "4"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Statement-I: Brain is protected by three cranial meninges. Statement-II: Pia mater is the outermost menix.",
        options: ["Both true", "Both false", "Statement-I true, II false", "Statement-I false, II true"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Match hormones (Insulin, Thyroxin, Corticoids, Growth Hormone) with respective diseases:",
        options: ["(iv), (i), (ii), (iii)", "(i), (iv), (v), (iii)", "(ii), (i), (v), (iii)", "(i), (iii), (iv), (ii)"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Assertion (A): cAMP serves as second messenger for protein hormones. Reason (R): Insulin is a protein hormone.",
        options: ["Both correct, R not explanation", "A correct, R not correct", "A not correct, R correct", "Both correct and R is explanation"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Select correct match for animal movements (Locomotion, Cilia in cytopharynx, Tentacles in hydra, Streaming of protoplasm):",
        options: ["A-i, B-iii, C-ii, D-iv", "A-iv, B-vi, C-iii, D-v", "A-i, B-v, C-vi, D-i", "A-iii, B-iii, C-ii, D-iv"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Choose correct statement about muscular tissue:",
        options: ["Skeletal muscles uninucleated", "Intercalated discs allow cardiac muscle cells to contract as a unit", "Walls of blood vessels made of columnar epithelium", "Smooth muscles multinucleated and involuntary"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Dislocated shoulder joint where head of humerus is no longer in contact. Which structure is most directly involved?",
        options: ["Acetabulum", "Acromion", "Glenoid cavity", "Pubic symphysis"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Flowchart of forebrain parts (Cerebrum, Hypothalamus, Association area, Neuro-secretory cells):",
        options: ["A Cerebrum, B Thalamus, C Motor area, D Neuro-secretory cells", "A Cerebellum, B Medulla, C Sensory area, D Neuro-sensory cells", "A Cerebellar hemisphere, B Hypothalamus, C Association area, D Neuro-sensory cells", "A Cerebrum, B Hypothalamus, C Association area, D Neuro-secretory cells"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Which of the following are examples of homologous organs?",
        options: ["Forelimb of mammals, sweet potato and potato", "All vertebrate heart, wings of butterfly and birds", "All vertebrate brain, flippers of dolphin and whale", "Thorn of Bougainvillea and tendril of cucurbita"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Which gas was not present in free form at the time life originated on earth?",
        options: ["Ammonia", "Oxygen", "Hydrogen", "Methane"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Founder effect is related to:",
        options: ["Mutation", "Natural selection", "Genetic drift", "Gene flow"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "In a population at Hardy-Weinberg equilibrium, if frequency of allele A is 0.6, expected frequency of heterozygotes is:",
        options: ["0.36", "0.48", "0.24", "0.16"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Coelacanth caught in South Africa (lobefins) evolved into the first:",
        options: ["Amphibians", "Jawless fish", "Reptiles", "Birds"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Sportspersons abused drugs by snorting/ingesting affecting cardiovascular system. What kind of drugs?",
        options: ["Heroin", "Cocaine", "Cannabinoids", "Barbiturates"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Match barriers of innate immunity (Physical, Physiological, Cellular, Cytokine) with examples:",
        options: ["a-(i)(ii), b-(vi)(v), c-(iii), d-(iv)", "a-(i)(vi), b-(ii)(v), c-(iii), d-(iv)", "a-(i)(vi), b-(ii)(v), c-(iv), d-(iii)", "a-(ii)(vi), b-(i)(v), c-(iii), d-(iv)"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Which of the following are bacterial diseases?",
        options: ["Pneumonia, Malaria", "Typhoid, Common cold", "Dysentery, Plague", "Ascariasis, Diphtheria"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Find incorrect statement among plague, morphine, memory cells, and barbiturates:",
        options: ["Plague is bacterial disease", "Morphine is painkiller", "Memory cells formed in acquired immunity", "Barbiturates are stimulant drugs"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Cell-mediated immunity mainly depends on the action of:",
        options: ["T lymphocytes", "B lymphocytes", "Mast cells", "Neutrophils"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Property regarding drug obtained from given plant (Opium poppy properties):",
        options: ["Pain killer", "CNS Stimulant", "Hallucinogen", "Hypnotic"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Which of the following is the most fatal non-infectious disease?",
        options: ["AIDS", "Diabetes", "Cancer", "Hepatitis"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Who disapproved good humor theory?",
        options: ["William Harvey", "Starling", "Hippocrates", "Indian Ayurveda"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Which set of example is related with secondary lymphoid organ?",
        options: ["Heart, Liver, Spleen", "Thymus, MALT, Bone marrow", "Spleen, appendix, tonsils", "Lymph node, bone marrow, skin"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Spermatogenesis flowchart sequence (Spermatogonia -> Primary spermatocyte -> A -> B -> Spermatozoa). Statement regarding B:",
        options: ["Produced by first meiotic division", "Diploids structure", "Produced by mitosis division", "Has 23 chromosomes"],
        correct: 3
    },
    {
        subject: "Zoology",
        q: "Statement-I: Tail part of sperm possesses numerous mitochondria. Statement-II: Secondary follicle is surrounded by thecal layer.",
        options: ["Both correct", "Both incorrect", "Only Statement I correct", "Only Statement II correct"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Which hormone induces rupture of graafian follicle and release of ovum?",
        options: ["LH", "Relaxin", "Progesterone", "Inhibin"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Mammary duct connects:",
        options: ["Mammary tubule to mammary ampulla", "Mammary alveoli to mammary tubule", "Mammary tubule to lactiferous duct", "Lactiferous duct to nipple"],
        correct: 0
    },
    {
        subject: "Zoology",
        q: "Highly coiled tubules in testis where sperms are produced are called:",
        options: ["Epididymis", "Vas deferens", "Seminiferous tubules", "Rete testis"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Match List-I (Placenta, Corpus luteum, Acrosome, Colostrum) with List-II descriptions:",
        options: ["i-d; ii-c; iii-a; iv-b", "i-c; ii-d; iii-b; iv-a", "i-d; ii-c; iii-b; iv-a", "i-c; ii-d; iii-a; iv-b"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "How many of the following are sexually transmitted infections? (Syphilis, ringworm, hepatitis-B, typhoid, genital herpes, common cold)",
        options: ["One", "Two", "Three", "Four"],
        correct: 1
    },
    {
        subject: "Zoology",
        q: "Which of the following is not a barrier method of contraception?",
        options: ["Condoms", "Cervical caps", "Lactational amenorrhea", "Both 1 and 2"],
        correct: 2
    },
    {
        subject: "Zoology",
        q: "Which of the following contraceptives does not use hormones?",
        options: ["Oral contraceptive pills", "LNG-20", "Multiload 375", "Hormonal implants"],
        correct: 2
    }
];
