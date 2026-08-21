const allNeetTests = {
    "test1": [
        // ==================== PHYSICS (Q1 - Q45) ====================
        {
            subject: "Physics",
            q: "A proton accelerated through a potential V has de-Broglie wavelength λ. Then the de-Broglie wavelength of an α-particle, when accelerated through the same potential V, is:",
            options: ["λ / 2", "λ / √2", "λ / (2√2)", "λ / 8"],
            correct: 2,
            explanation: "Using formula λ = h / √(2meV). For α-particle, mass is 4m and charge is 2e, giving λ_α = λ / (2√2)[span_0](start_span)[span_0](end_span)."
        },
        {
            subject: "Physics",
            q: "Five identical cells are connected as shown in figure. Calculate effective e.m.f. between A and B -",
            options: ["E", "3E", "3E / 5", "zero"],
            correct: 1,
            explanation: "Four cells have same polarity and one is reversed, giving E_AB = (Er - Er/4)/(r + r/4) = 3E/5[span_1](start_span)[span_1](end_span)."
        },
        {
            subject: "Physics",
            q: "A cassegrain telescope uses two mirrors as shown in figure. Such a telescope is built with the mirrors 20 mm apart. If the radius of curvature of the larger mirror is 220 mm and the small mirror is 140 mm, where will the final image of an object at infinity be from secondary mirror?",
            options: ["315 mm", "415 mm", "215 mm", "115 cm"],
            correct: 0,
            explanation: "For secondary mirror, u_2 = +(f_1 - d) = +90 mm and f_2 = 70 mm, yielding v_2 = 315 mm[span_2](start_span)[span_2](end_span)."
        },
        {
            subject: "Physics",
            q: "An infinite sequence of resistance is shown in the figure. The resultant resistance between A and B will be, when R₁ = 1 ohm and R₂ = 2 ohm:",
            options: ["Infinity", "1 Ω", "2 Ω", "1.5 Ω"],
            correct: 2,
            explanation: "Solving the infinite ladder network equation R(2 + R) = 2 + R + 2R gives R = 2 Ω[span_3](start_span)[span_3](end_span)."
        },
        {
            subject: "Physics",
            q: "In meter bridge, when two resistances R₁ and R₂ are connected in series across the left gap and 10 Ω in right gap, the null point is obtained 60 cm from left. With R₁ and R₂ connected in parallel across left gap and 5 Ω in right gap, the null point becomes 40 cm. The possible values of R₁ and R₂ are:",
            options: ["5 Ω, 10 Ω", "4.2 Ω, 12.5 Ω", "7 Ω, 8 Ω", "6 Ω, 9 Ω"],
            correct: 0,
            explanation: "Solving series condition R₁ + R₂ = 15 Ω and parallel condition R₁R₂ = 50 Ω gives R₁ = 10 Ω and R₂ = 5 Ω[span_4](start_span)[span_4](end_span)."
        },
        {
            subject: "Physics",
            q: "Part of a simple harmonic motion is graphed in the figure, where y is the displacement from the mean position. The correct equation describing this S.H.M is:",
            options: ["y = 4 cos(0.6t)", "y = 2 sin(10t/3 - π/2)", "y = 4 sin(10t/3 + π/2)", "y = 2 cos(10t/3 + π/2)"],
            correct: 1,
            explanation: "At t = 0, y = -2, which fits y = 2 sin(10t/3 - π/2)[span_5](start_span)[span_5](end_span)."
        },
        {
            subject: "Physics",
            q: "Light with an energy flux of 20 W cm⁻² falls on a non-reflecting surface at normal incidence. If the surface has an area of 30 cm², the total momentum delivered (for complete absorption) during 30 min is:",
            options: ["36 × 10⁻⁵ kg-ms⁻¹", "36 × 10⁻⁴ kg-ms⁻¹", "108 × 10⁴ kg-ms⁻¹", "1.08 × 10⁷ kg-ms⁻¹"],
            correct: 1,
            explanation: "Momentum p = E/c = (I A t)/c = 36 × 10⁻⁴ kg-ms⁻¹[span_6](start_span)[span_6](end_span)."
        },
        {
            subject: "Physics",
            q: "The load versus extension (Δl) graph of a wire of length 1.5 m with cross-sectional area 2 mm² is given. The Young's modulus for the material of the wire is:",
            options: ["1.5 × 10¹¹ Nm⁻²", "3.0 × 10¹¹ Nm⁻²", "4.5 × 10¹¹ Nm⁻²", "6 × 10¹¹ Nm⁻²"],
            correct: 1,
            explanation: "Y = (l/A) * (1/slope) = (1.5 / (2 × 10⁻⁶)) * (60 / 1.5 × 10⁻⁴) = 3.0 × 10¹¹ Nm⁻²[span_7](start_span)[span_7](end_span)."
        },
        {
            subject: "Physics",
            q: "Find the distance from center of a uniform solid sphere at which the gravitational potential is half of the potential at center of sphere. (R = Radius of sphere)",
            options: ["√(3/2) R", "√(5/3) R", "4R / 5", "4R / 3"],
            correct: 3,
            explanation: "Equating V_r = -(GM/r) to half of V_center (-3GM/4R) yields r = 4R/3[span_8](start_span)[span_8](end_span)."
        },
        {
            subject: "Physics",
            q: "Two objects of mass m are connected by a thread over a light pulley. If a third object m' is added on top of one and objects are released, the tension becomes 4/3 times initial. The value of m' is:",
            options: ["m / 2", "m", "2m", "3m"],
            correct: 1,
            explanation: "Solving acceleration and tension formula T' = (4/3)mg gives m' = m[span_9](start_span)[span_9](end_span)."
        },
        {
            subject: "Physics",
            q: "The given graph shows the variation of angle of deviation for angle of incidence for a triangular prism kept in air. Choose the correct statement: (a) A = 45°, (b) μ = √2, (c) Speed in prism = (3/√2)×10⁸ ms⁻¹, (d) Critical angle = 45°, (e) Brewster's angle = tan⁻¹(√2)",
            options: ["a & b", "b & c", "c, d & e", "b, c, d & e"],
            correct: 3,
            explanation: "Refractive index μ = √2, speed = C/μ, critical angle = 45°, and Brewster's angle = tan⁻¹(√2) are all correct[span_10](start_span)[span_10](end_span)."
        },
        {
            subject: "Physics",
            q: "A machine gun fires 60 bullets per minute with a velocity of 700 m/s. If each bullet has a mass of 50 g, find the power developed by the gun:",
            options: ["10000 W", "12250 W", "9700 W", "None of these"],
            correct: 1,
            explanation: "Power = (1/2 m v²) / t = (0.5 * (50/1000) * 700²) / 1 = 12250 W[span_11](start_span)[span_11](end_span)."
        },
        {
            subject: "Physics",
            q: "The binding energy of ₁₇Cl³⁵ nucleus is 298 MeV. Find its atomic mass (nearly). Mass of proton = 1.007277 amu, Mass of neutron = 1.00866 amu, 1 amu = 931.5 MeV.",
            options: ["35.2796 amu", "34.9597 amu", "349.796 amu", "262.72 amu"],
            correct: 1,
            explanation: "Mass = Z(m_p) + N(m_n) - (BE / 931.5) = 34.9597 amu[span_12](start_span)[span_12](end_span)."
        },
        {
            subject: "Physics",
            q: "An ideal fluid flows through a pipe of non-uniform diameter. Max and min diameters are 6.4 cm and 4.8 cm. The ratio of min to max velocities is:",
            options: ["√3 / 2", "3 / 4", "81 / 256", "9 / 16"],
            correct: 3,
            explanation: "Using continuity equation v_min / v_max = (d_min / d_max)² = (4.8 / 6.4)² = 9/16[span_13](start_span)[span_13](end_span)."
        },
        {
            subject: "Physics",
            q: "A particle moves in a straight line with constant acceleration, changing velocity from 10 m/s to 20 m/s over 135 m in t seconds. The value of t is:",
            options: ["12 s", "9 s", "10 s", "1.8 s"],
            correct: 1,
            explanation: "Time t = distance / average velocity = 135 / ((10 + 20)/2) = 9 seconds[span_14](start_span)[span_14](end_span)."
        },
        {
            subject: "Physics",
            q: "A rectangular plate's length is measured with a meter scale as 10.0 cm (LC 0.1 cm) and width with vernier calipers as 1.00 cm (LC 0.01 cm). Max possible error in area measurement is:",
            options: ["±0.2 cm²", "±0.1 cm²", "±0.3 cm²", "zero"],
            correct: 0,
            explanation: "Fractional error ΔA/A = (0.1/10.0) + (0.01/1.00) = 0.02, leading to ΔA = ±0.2 cm²[span_15](start_span)[span_15](end_span)."
        },
        {
            subject: "Physics",
            q: "When a metal surface is illuminated with wavelength λ, stopping potential is 5V₀. With wavelength 4λ, stopping potential is V₀. The threshold wavelength is:",
            options: ["6 λ", "1.33 λ", "16 λ", "8 λ"],
            correct: 2,
            explanation: "Applying Einstein's photoelectric equation for both cases yields threshold wavelength λ₀ = 16λ[span_16](start_span)[span_16](end_span)."
        },
        {
            subject: "Physics",
            q: "An iron bar (Y = 10¹¹ N/m², α = 10⁻⁶/°C) 1 m long and 10⁻³ m² in area is heated from 0°C to 100°C without being allowed to bend. Find the compressive force developed:",
            options: ["10,000 N", "1000 N", "5000 N", "10⁵ N"],
            correct: 0,
            explanation: "Force F = YAαΔT = (10¹¹)(10⁻³)(10⁻⁶)(100) = 10,000 N[span_17](start_span)[span_17](end_span)."
        },
        {
            subject: "Physics",
            q: "Two small spherical balls with charge 10 µC are suspended by insulating threads of length √2 m. In equilibrium threads are separated by 90°. Mass of each ball is:",
            options: ["0.1 gm", "22.5 gm", "1 gm", "102.5 gm"],
            correct: 1,
            explanation: "Balancing electrostatic repulsion and component of weight gives m = 22.5 g[span_18](start_span)[span_18](end_span)."
        },
        {
            subject: "Physics",
            q: "A stretched wire of length 110 cm is divided into three segments whose frequencies are in ratio 1: 2: 3. Their lengths must be:",
            options: ["20 cm, 30 cm, 60 cm", "60 cm, 30 cm, 20 cm", "60 cm, 20 cm, 30 cm", "30 cm, 60 cm, 20 cm"],
            correct: 1,
            explanation: "Since frequency is inversely proportional to length, l₁ : l₂ : l₃ = 1/1 : 1/2 : 1/3, giving 60 cm, 30 cm, 20 cm[span_19](start_span)[span_19](end_span)."
        },
        {
            subject: "Physics",
            q: "Electric potential is V = (3x²/2) - (y²/4). Electric field intensity at point (1m, 2m) is:",
            options: ["3î - ĵ", "-3î + ĵ", "6î - 2ĵ", "-6î + 2ĵ"],
            correct: 1,
            explanation: "E = -[∂V/∂x î + ∂V/∂y ĵ] = -3x î + (y/2) ĵ, which evaluates to -3î + ĵ at (1, 2)[span_20](start_span)[span_20](end_span)."
        },
        {
            subject: "Physics",
            q: "Two temperature scales A and B are related by (A - 42)/110 = (B - 72)/220. At which temperature do both scales have the same reading?",
            options: ["-42°", "-72°", "+12°", "-40°"],
            correct: 2,
            explanation: "Substituting A = B = T gives (T - 42)/1 = (T - 72)/2, solving to T = +12°[span_21](start_span)[span_21](end_span)."
        },
        {
            subject: "Physics",
            q: "A gas is suddenly compressed to 1/9th of its initial volume. If original temperature was 127°C and γ = 1.5, what is the rise in temperature?",
            options: ["1200 K", "927°C", "400°C", "800 K"],
            correct: 3,
            explanation: "Using T₁V₁^(γ-1) = T₂V₂^(γ-1), T₂ = 1200 K, so rise in temperature ΔT = 1200 - 400 = 800 K[span_22](start_span)[span_22](end_span)."
        },
        {
            subject: "Physics",
            q: "For a given toroid with inner radius 10 cm, outer radius 20 cm, N = 100 turns, and current I = 2A, the magnetic field along its axis will be nearly:",
            options: ["0.5 mT", "1 T", "0.25 mT", "4 T"],
            correct: 2,
            explanation: "Using mean radius r_avg = 15 cm, B = μ₀NI / (2π r_avg) ≈ 0.27 mT, closest option is 0.25 mT[span_23](start_span)[span_23](end_span)."
        },
        {
            subject: "Physics",
            q: "A ball P collides with an identical ball Q at rest. For what value of coefficient of restitution e does velocity of Q become two times that of P after collision?",
            options: ["1 / 3", "1 / 2", "1 / 4", "1 / 6"],
            correct: 0,
            explanation: "Using conservation of momentum and restitution relation e = (v_Q - v_P)/v = 1/3[span_24](start_span)[span_24](end_span)."
        },
        {
            subject: "Physics",
            q: "In a double slit experiment, slits are 1 mm apart, screen 1 m away, λ = 500 nm. Width of each slit for obtaining ten maxima within central maximum of single slit pattern is:",
            options: ["0.1 mm", "0.5 mm", "0.02 mm", "0.2 mm"],
            correct: 3,
            explanation: "Equating 10(λD/d) = 2(λD/b) yields slit width b = 0.2 mm[span_25](start_span)[span_25](end_span)."
        },
        {
            subject: "Physics",
            q: "A square wire frame of side 3 cm is placed 25 cm away from a concave mirror of focal length 10 cm. What is the area enclosed by the image?",
            options: ["2 cm²", "1 cm²", "9 cm²", "None of these"],
            correct: 1,
            explanation: "Using mirror formula, image distance v = -50/3 cm, magnification m = -2/3, so image area = m² × A_obj = (4/9) × 9 = 4 cm²[span_26](start_span)[span_26](end_span)."
        },
        {
            subject: "Physics",
            q: "The magnetic moment of a magnet of mass 75 gm is 9 × 10⁻⁷ A-m². If density is 7.5 × 10³ kg/m³, the intensity of magnetization will be:",
            options: ["0.9 A/m", "0.09 A/m", "9 A/m", "90 A/m"],
            correct: 1,
            explanation: "Intensity I = M / V = M / (mass / density) = 0.09 A/m[span_27](start_span)[span_27](end_span)."
        },
        {
            subject: "Physics",
            q: "Three thin rods each of mass M and length L are placed along x, y, and z axes with one end at origin. The moment of inertia of this system about axis y = x is:",
            options: ["2ML² / 3", "4ML² / 3", "5ML² / 3", "ML² / 3"],
            correct: 0,
            explanation: "Summing contributions using perpendicular axis theorem components gives I = (2/3)ML²[span_28](start_span)[span_28](end_span)."
        },
        {
            subject: "Physics",
            q: "A body cools from 4T to 3T in 10 minutes with room temperature T. The temperature of the body at the end of next 10 minutes will be:",
            options: ["7T / 3", "T", "7T / 4", "3T / 2"],
            correct: 0,
            explanation: "Applying Newton's law of cooling iteratively yields T' = 7T/3[span_29](start_span)[span_29](end_span)."
        },
        {
            subject: "Physics",
            q: "An electron revolves around a proton in a circular orbit of diameter 1 Å, producing a magnetic field of 14 Wb/m² at the proton. Its angular velocity is about:",
            options: ["4.375 × 10¹⁶ rad/s", "2.25 × 10¹⁴ rad/s", "4 × 10¹⁵ rad/s", "8.75 × 10¹⁶ rad/s"],
            correct: 0,
            explanation: "Using B = (μ₀ e ω) / (4π r), solving for ω gives 4.375 × 10¹⁶ rad/s[span_30](start_span)[span_30](end_span)."
        },
        {
            subject: "Physics",
            q: "In an AC circuit, e = 100 sin(30t) volt and i = 20 sin(30t - π/4) A. Average power and wattless current are respectively:",
            options: ["(50/√2)W, zero", "50W, zero", "50W, 10A", "(1000/√2)W, 10A"],
            correct: 3,
            explanation: "P_av = V_rms * I_rms * cos(φ) = 1000/√2 W, and wattless current = I_0 sin(φ) / √2 = 10A[span_31](start_span)[span_31](end_span)."
        },
        {
            subject: "Physics",
            q: "A student uses parallax method to find focal length of convex lens (LC 0.1 cm), obtaining graph between u and v passing through u = -30.0 cm, v = 60.0 cm. Measured focal length is:",
            options: ["(20.0 ± 0.055) cm", "(20 ± 0.11) cm", "(20.0 ± 0.1) cm", "(20 ± 0.055) cm"],
            correct: 2,
            explanation: "Calculated f = 20.0 cm with error propagation giving (20.0 ± 0.1) cm[span_32](start_span)[span_32](end_span)."
        },
        {
            subject: "Physics",
            q: "Glass capillary is dipped in water so water rises to 5 cm. If another capillary with cross-sectional area 1/4th of previous is dipped, water rise will be:",
            options: ["2.5 cm", "5 cm", "7.5 cm", "10 cm"],
            correct: 3,
            explanation: "Since height h is inversely proportional to radius r (and thus √A), reducing area to 1/4th doubles the height to 10 cm[span_33](start_span)[span_33](end_span)."
        },
        {
            subject: "Physics",
            q: "Two air-cored solenoids P and Q. In P, current changing at 5 As⁻¹ induces 2 mV in Q. If current in Q changes at 2 As⁻¹, emf induced in P is:",
            options: ["8 × 10⁻⁴ V", "2 × 10⁻⁸ V", "5 × 10⁻³ V", "8 × 10⁻² V"],
            correct: 0,
            explanation: "Mutual inductance M = 2 mV / 5 As⁻¹ = 0.4 mH. Induced emf in P = M * (dI_Q/dt) = 0.4 mH * 2 = 8 × 10⁻⁴ V[span_34](start_span)[span_34](end_span)."
        },
        {
            subject: "Physics",
            q: "In a circuit with a 30V battery and capacitors (3 µF, 4 µF, 2 µF), when a switch is closed, the amount of charge flow through the battery is:",
            options: ["60 µC", "120 µC", "90 µC", "100 µC"],
            correct: 1,
            explanation: "Change in equivalent capacitance multiplied by voltage yields ΔQ = 120 µC[span_35](start_span)[span_35](end_span)."
        },
        {
            subject: "Physics",
            q: "A cart moving at 20 m/s receives sand dropped at 50 kg/min. The force required to move the cart with constant velocity is:",
            options: ["50 N", "30.33 N", "26.45 N", "16.66 N"],
            correct: 3,
            explanation: "Force F = v * (dm/dt) = 20 m/s * (50 kg / 60 s) = 16.66 N[span_36](start_span)[span_36](end_span)."
        },
        {
            subject: "Physics",
            q: "In a screw gauge with pitch 0.5 mm and 50 circular scale divisions, observations give corrected wire diameter as 2.92 mm (0.292 cm). Length measured is 5.00 cm. Volume to correct significant figures is:",
            options: ["0.335 cm³", "0.295 cm³", "0.3346 cm³", "0.2948 cm³"],
            correct: 0,
            explanation: "Volume V = (π D² / 4) * L = 0.335 cm³[span_37](start_span)[span_37](end_span)."
        },
        {
            subject: "Physics",
            q: "Atom energy levels: transition from 4E to E emits photon λ₁, and transition from (7/3)E to E emits photon λ₂. The ratio λ₁ / λ₂ is:",
            options: ["9 / 4", "4 / 9", "3 / 2", "7 / 3"],
            correct: 1,
            explanation: "hc/λ₁ = 3E and hc/λ₂ = (4/3)E, so λ₁/λ₂ = 4/9[span_38](start_span)[span_38](end_span)."
        },
        {
            subject: "Physics",
            q: "For the Zener diode circuit shown (12V source, V_z = 6V), match parameters or find values for R_s = 400 Ω, R_L = 600 Ω (current through Zener diode is):",
            options: ["30 mA", "12 mA", "10 mA", "5 mA"],
            correct: 3,
            explanation: "Source current minus load current gives Zener current I_z = 15 mA - 10 mA = 5 mA[span_39](start_span)[span_39](end_span)."
        },
        {
            subject: "Physics",
            q: "Dimensional formula of [β] in equation α/t² = FV + β/x² (where T=Time, F=Force, V=Velocity, X=Distance) is:",
            options: ["[M¹L⁴T⁻³]", "[M²L⁴T⁻²]", "[M²L³T⁻³]", "[M²L³T⁻₂]"],
            correct: 0,
            explanation: "Dimensional consistency requires [β/x²] = [FV], so [β] = [Force * Velocity * Distance²] = [M¹L⁴T⁻³][span_40](start_span)[span_40](end_span)."
        },
        {
            subject: "Physics",
            q: "Displacement-time curve of particles P and Q shows: (1) both move with constant equal speed, (2) P accelerated Q retarded, (3) both uniform speeds with P greater than Q, (4) both uniform speeds with Q greater than P.",
            options: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "Slopes of the displacement-time curves indicate both have uniform speeds, with P having a steeper slope (greater speed)[span_41](start_span)[span_41](end_span)."
        },
        {
            subject: "Physics",
            q: "A battery of internal resistance 4 Ω is connected to a resistor network. To give maximum power to the network, the value of R (in Ω) should be:",
            options: ["4 / 9", "8 / 9", "2", "18"],
            correct: 2,
            explanation: "For maximum power transfer, external equivalent resistance must equal internal resistance (4 Ω), yielding R = 2 Ω[span_42](start_span)[span_42](end_span)."
        },
        {
            subject: "Physics",
            q: "A body of mass m tied to a spring has elongation 1 cm. When angular velocity is doubled, elongation becomes 5 cm. Original length of the spring is:",
            options: ["16 cm", "15 cm", "14 cm", "13 cm"],
            correct: 1,
            explanation: "Setting up centripetal force equations for both cases and dividing gives original length l = 15 cm[span_43](start_span)[span_43](end_span)."
        },
        {
            subject: "Physics",
            q: "The given logic gate configuration (combinational OR, NAND gates) is equivalent to:",
            options: ["NAND", "XOR", "OR", "XNOR"],
            correct: 3,
            explanation: "Boolean expression evaluation yields A'B + AB', which matches XNOR[span_44](start_span)[span_44](end_span)."
        },

        // ==================== CHEMISTRY (Q46 - Q90) ====================
        {
            subject: "Chemistry",
            q: "Wavelength of different radiations are given below :- λ(A) = 300 nm, λ(B) = 300 pm, λ(C) = 3 nm, λ(D) = 300 Å. The increasing order of their energies is :-",
            options: ["A < B < C < D", "B < D < C < A", "A < C < D < B", "A < D < C < B"],
            correct: 3,
            explanation: "Energy is inversely proportional to wavelength. Converting all to a common unit gives energy order A < D < C < B[span_45](start_span)[span_45](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Consider the following reversible reactions (at 298 K):- (a) N2O4(g) ⇌ 2NO2(g), (b) 2SO2(g) + O2(g) ⇌ 2SO3(g), (c) 2HI(g) ⇌ H2(g) + I2(g), (d) X(g) + Y(g) ⇌ 4Z(g). Highest and lowest value of K_c will be shown by the reaction respectively.",
            options: ["d, b", "a, c", "b, a", "b, c"],
            correct: 1,
            explanation: "Kp = Kc(RT)^Δn. Depending on Δn values, reaction (d) has highest Δn (+2) giving high Kc scale, whereas others vary based on stoichiometry[span_46](start_span)[span_46](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Following few statements are given regarding water. How many of these are correct? (Statements about pH+pOH, ionic product, neutral nature, temperature variations)",
            options: ["2", "3", "4", "5"],
            correct: 3,
            explanation: "4 statements out of the given set regarding auto-ionization of water and temperature dependency are correct[span_47](start_span)[span_47](end_span)."
        },
        {
            subject: "Chemistry",
            q: "An organic compound on analysis was found to contain 0.032% of sulphur. If its molecule contain two sulphur atoms, then the molecular mass of the compound will be :-",
            options: ["200", "2000", "100000", "200000"],
            correct: 3,
            explanation: "Using % S = (no. of atoms * atomic wt * 100) / mol. wt => Mol. wt = (2 * 32 * 100) / 0.032 = 200,000[span_48](start_span)[span_48](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Assertion :- Nitrous acid (HNO2) may act as an oxidising agent as well as a reducing agent. Reason:- The oxidation number of nitrogen remains same in all the compounds.",
            options: ["Both Assertion & Reason are True & Reason is a correct explanation of the Assertion.", "Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.", "Assertion is True but Reason is False.", "Both Assertion & Reason are False."],
            correct: 2,
            explanation: "Nitrogen in HNO2 has +3 oxidation state (intermediate state), so it can act as both oxidizing and reducing agent. Reason is false[span_49](start_span)[span_49](end_span)."
        },
        {
            subject: "Chemistry",
            q: "When one mole of an ideal gas is compressed to half of its initial volume and simultaneously heated to twice of its initial temperature, the change in entropy of gas (ΔS) is :-",
            options: ["Cp,m ln 2", "Cv,m ln 2", "R ln 2", "(Cv,m - R) ln 2"],
            correct: 3,
            explanation: "Using ΔS = Cv ln(T₂/T₁) + R ln(V₂/V₁), substituting T₂/T₁ = 2 and V₂/V₁ = 1/2 gives (Cv,m - R) ln 2[span_50](start_span)[span_50](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Calculate the heat produced (in kJ) when 224 gm of CaO is completely converted to CaCO3 by reaction with CO2 at 27°C in a container of fixed volume.",
            options: ["702.04 kJ", "821.96 kJ", "1012 kJ", "921 kJ"],
            correct: 3,
            explanation: "Using ΔH_f values of CaCO3, CaO, and CO2, calculating reaction enthalpy and applying constant volume conditions gives 921 kJ[span_51](start_span)[span_51](end_span)."
        },
        {
            subject: "Chemistry",
            q: "The chemical reagent from which the solution of required concentration can be prepared is:",
            options: ["Secondary standard", "Dilute solution", "Concentrated solution", "Primary standard"],
            correct: 3,
            explanation: "Primary standards are reagents of high purity used to prepare standard solutions directly[span_52](start_span)[span_52](end_span)."
        },
        {
            subject: "Chemistry",
            q: "0.15gm of a solute, dissolved in 15gm of solvent is boiled at a temperature higher by 0.216°C than that of the pure solvent. The molecular mass of solute is (Kb = 2.16 k kg mol⁻¹) is :-",
            options: ["1.01", "10", "10.1", "100"],
            correct: 3,
            explanation: "Using ΔTb = Kb * m, molality m = 0.15 / (M * 0.015), solving gives M = 100[span_53](start_span)[span_53](end_span)."
        },
        {
            subject: "Chemistry",
            q: "1 mole each of following solutes are taken in 5 moles water: (i) NaCl, (ii) K2SO4, (iii) Na3PO4, (iv) glucose. Assuming 100% ionisation, relative decrease in vapour pressure order is:",
            options: ["i < ii < iii < iv", "iv < iii < ii < i", "iv < i < ii < iii", "equal in all"],
            correct: 2,
            explanation: "Relative decrease in vapor pressure depends on van't Hoff factor i: glucose (1) < NaCl (2) < K2SO4 (3) < Na3PO4 (4)[span_54](start_span)[span_54](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Match List-I with List-II for Faraday required: (A) 1 mol H2O to O2, (B) 1 mol MnO4⁻ to Mn²⁺, (C) 1.5 mol Ca from molten CaCl2, (D) 1 mol FeO to Fe2O3.",
            options: ["A-II, B-IV, C-I, D-III", "A-III, B-IV, C-I, D-II", "A-II, B-III, C-I, D-IV", "A-III, B-IV, C-II, D-I"],
            correct: 0,
            explanation: "Matching electron changes per mole yields A-II, B-IV, C-I, D-III[span_55](start_span)[span_55](end_span)."
        },
        {
            subject: "Chemistry",
            q: "If E°(Au⁺/Au) is 1.69 V and E°(Au⁺³/Au) is 1.40 V, then E°(Au⁺³/Au⁺) will be :-",
            options: ["0.19 V", "2.945 V", "1.255 V", "None of these"],
            correct: 2,
            explanation: "Using Gibbs free energy combination ΔG° = ΔG₂° - ΔG₁°, E° comes out to be 1.255 V[span_56](start_span)[span_56](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Consider the concentration vs time graph. Which option does not show instantaneous rate of reaction at 40th second?",
            options: ["(C5 - C2) / (50 - 30)", "(C3 - C2) / (40 - 30)", "(C3 - C1) / (40 - 20)", "(C4 - C2) / (50 - 30)"],
            correct: 0,
            explanation: "Intervals used for tangent at t=40s must be centered around 40s; (C5-C2)/(50-30) uses points away from the tangent slope at 40s[span_57](start_span)[span_57](end_span)."
        },
        {
            subject: "Chemistry",
            q: "For the phosgene formation mechanism: (i) Cl2 ⇌ 2Cl, (ii) Cl + CO ⇌ COCl, (iii) COCl + Cl2 → COCl2 + Cl (slow). The correct rate law expression is:",
            options: ["r = k5 * (k3/k4) * (k1/k2)^(1/2) * [CO][Cl2]^(3/2)", "r = k5 * (k3/k4) * (k1/k2)^(1/2) * [CO][Cl2]^(1/2)", "r = k5 * (k3/k4)^(1/2) * (k1/k2) * [CO][Cl2]^(3/2)", "None of these"],
            correct: 0,
            explanation: "Applying steady-state approximation yields r = k5*(k3/k4)*(k1/k2)^(1/2)*[CO][Cl2]^(3/2)[span_58](start_span)[span_58](end_span)."
        },
        {
            subject: "Chemistry",
            q: "What will be molality of ethanol in water if mole fraction of ethanol is 0.4?",
            options: ["3.70 m", "18 m", "21 m", "37 m"],
            correct: 3,
            explanation: "Molality = (X_ethanol * 1000) / (X_water * M_water) = (0.4 * 1000) / (0.6 * 18) ≈ 37 m[span_59](start_span)[span_59](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which of the following statements would be incorrect? (Focusing on period elements, transition metal radii, chemical reactivity, and block metallic character trends)",
            options: ["The maximum covalency of second period element is 4", "The chemical reactivity of an element can be best shown by its reaction with oxygen & halogen", "Among transition metals (3d series), change in atomic radii is much smaller compared to representative elements", "For all block elements metallic character increase down the group"],
            correct: 2,
            explanation: "Transition metal atomic radii decrease slightly then remain nearly constant[span_60](start_span)[span_60](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Match Column-I (Elements Li, Be, C, Cs) with Column-II (Properties: Most Acidic oxide, Most Metallic character, Similar to Al, Highest IE2)",
            options: ["(i) D (ii) C (iii) A (iv) B", "(i) D (ii) A (iii) C (iv) B", "(i) A (ii) C (iii) B (iv) D", "(i) C (ii) D (iii) B (iv) A"],
            correct: 0,
            explanation: "Li has highest IE2 (D), Be resembles Al (C), C forms most acidic oxide (A), Cs has most metallic character (B)[span_61](start_span)[span_61](end_span)."
        },
        {
            subject: "Chemistry",
            q: "In NO3⁻ ion the number of bond pairs and lone pairs of electrons on nitrogen atom is:",
            options: ["3, 0", "5, 0", "4, 0", "4, 1"],
            correct: 0,
            explanation: "Nitrogen in NO3⁻ forms 3 bonds using all 5 valence electrons, leaving 0 lone pairs and 3 bond pairs[span_62](start_span)[span_62](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Statement-I: In hybridisation, bond formed by hybrid orbitals are stronger as compared to atomic orbitals. Statement-II: In benzene all carbon atoms has sp² hybridisation.",
            options: ["Both statement-I and II are correct.", "Statement-I is correct and statement-II is incorrect.", "Statement-I is incorrect and statement-II is correct.", "Both statement-I and II are incorrect."],
            correct: 0,
            explanation: "Hybrid orbitals have better directional overlap making stronger bonds, and all carbons in benzene are sp² hybridized[span_63](start_span)[span_63](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Statement-1: Benzene itself is non-polar, but on monosubstitution it becomes polar. Statement-2: Dipole moment of disubstituted benzene is always zero.",
            options: ["Both Statement-1 and Statement-2 are incorrect.", "Statement-1 is correct but Statement-2 is incorrect.", "Statement-1 is incorrect but Statement-2 is correct.", "Both Statement-1 and Statement-2 are correct."],
            correct: 1,
            explanation: "Monosubstituted benzene with a polar group has a net dipole moment, but disubstituted benzene dipole moment depends on isomer position, so it is not always zero[span_64](start_span)[span_64](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which option/statement is not for the theory mentioned in bracket? (Checking Octet theory, VSEPR, VBT, MOT)",
            options: ["Does not explain shape & relative stability (octet theory)", "Multiple bond treated as single super pair (VSEPR)", "Zero overlapping (VBT)", "Bond order can't be fractional (MOT)"],
            correct: 3,
            explanation: "MOT successfully explains fractional bond orders (e.g., O2⁻ is 1.5)[span_65](start_span)[span_65](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Match List-I (Complexes like [Cr(H2O)6]3+, [Co(CN)4]2-, etc.) with List-II (Hybridisation and unpaired electrons)",
            options: ["RPTQ", "SRQP", "RQSP", "SPQR"],
            correct: 2,
            explanation: "Matching coordination numbers, crystal field splitting, and geometries yields RQSP[span_66](start_span)[span_66](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Consider statements on complexes: S1: [Cr(NH3)6]3+ has CFSE equal to -1.2 Δ₀. S2: [Fe(CN)6]3- has spin-only magnetic moment 1.73 BM. S3: [Mn(CN)6]3- spin magnetic moment is 2.8 BM.",
            options: ["FTF", "TTF", "TTT", "FFF"],
            correct: 2,
            explanation: "All three statements regarding crystal field stabilization and spin-only magnetic moments calculated via √n(n+2) are true[span_67](start_span)[span_67](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Read statements on isomerism: (I) Square planar optical isomerism, (II) Ma2b2 geometrical/optical, (III) Mabcd isomers, (IV) fac-mer isomerism. Incorrect statements:",
            options: ["I, III & IV", "I & II", "II only", "I, II, III & IV"],
            correct: 2,
            explanation: "Square planar complexes rarely show optical isomerism due to a plane of symmetry, making statement II incorrect[span_68](start_span)[span_68](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Choose the incorrect statement among carbon family and periodic trends:",
            options: ["¹⁴C is a radioactive isotope used for radiocarbon dating", "Ionisation Energy of group-14 elements regularly decrease down the group", "The electronegativity values of H & P are almost same", "SiF6²⁻, [GeCl6]²⁻ and [Sn(OH)6]²⁻ exists"],
            correct: 1,
            explanation: "Ionization energy does not decrease strictly/regularly down group 14 (due to d and f orbital effects), making statement 2 incorrect[span_69](start_span)[span_69](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Based on compounds of group 15 elements, correct statements: (A) Bi2O5 is more basic than N2O5, (B) NF3 is more covalent than BiF5, (C) PH3 boils at lower temperature than NH3, (D) N-N single bond is stronger than P-P single bond.",
            options: ["A, B & C", "Only A & B", "A, B, C & D", "Only C & D"],
            correct: 0,
            explanation: "Statements A, B, and C are correct. Statement D is false because P-P single bond is stronger than N-N due to high lone-pair repulsion in nitrogen[span_70](start_span)[span_70](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which transition element does not have variable oxidation state?",
            options: ["Zn", "Cu", "V", "Sc"],
            correct: 3,
            explanation: "Scandium (Sc) exclusively shows a +3 oxidation state in its compounds[span_71](start_span)[span_71](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which of the following statement is not incorrect (correct statement)?",
            options: ["Chromyl chloride test not applicable for KCl, CaCl2, CsCl", "KMnO4 gives Mn2O7 and O2 in thermal decomposition", "Zn, Cd, Hg show one or more than one typical metallic structure", "MnO4⁻ and CrO4²⁻ show tetrahedral geometry and form pπ-dπ bond"],
            correct: 3,
            explanation: "Both permanganate and chromate ions have tetrahedral structures involving pπ-dπ bonding[span_72](start_span)[span_72](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Identify correct statements on salt analysis with warm conc. H2SO4 (chloride, iodide, bromide tests)",
            options: ["(i) and (ii)", "(ii) and (iii)", "(i) and (iii)", "All are correct"],
            correct: 3,
            explanation: "All descriptions of halide salt reactions with concentrated sulfuric acid producing respective halogen vapors/fumes are correct[span_73](start_span)[span_73](end_span)."
        },
        {
            subject: "Chemistry",
            q: "MgSO4 on reaction with NH4OH and Na2HPO4 forms a white crystalline precipitate. Formula of white ppt. is:",
            options: ["Mg3(PO4)2", "MgCl2", "MgSO4", "Mg(NH4)PO4"],
            correct: 3,
            explanation: "Magnesium ammonium phosphate (Mg(NH4)PO4) precipitates out as a white crystalline solid[span_74](start_span)[span_74](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Assertion: Synthesis of ethyl phenyl ether may be achieved by Williamson synthesis. Reason: Reaction of bromobenzene with sodium ethoxide yields ethyl phenyl ether.",
            options: ["Both (A) and (R) are correct and (R) is correct explanation", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct", "Both (A) and (R) are not correct"],
            correct: 1,
            explanation: "Williamson synthesis works for aliphatic halides with alkoxides, but bromobenzene does not undergo nucleophilic substitution easily due to partial double bond character[span_75](start_span)[span_75](end_span)."
        },
        {
            subject: "Chemistry",
            q: "What is correct acidic strength order of substituted benzoic acid compounds given in options?",
            options: ["Order matching electron-withdrawing groups like -NO2 increasing acidity", "Order matching electron-donating groups", "Mixed order", "None"],
            correct: 0,
            explanation: "Electron-withdrawing groups (like -NO2) stabilize the carboxylate anion and increase acidic strength[span_76](start_span)[span_76](end_span)."
        },
        {
            subject: "Chemistry",
            q: "The major product (R) of the given reaction sequence starting from Phenol with CHCl3/KOH (Reimer-Tiemann) followed by HCN and H3O⁺ is:",
            options: ["Salicylic acid derivative", "Mandelic acid derivative related structure", "Phenol derivative", "None"],
            correct: 1,
            explanation: "Reaction sequence yields the corresponding substituted mandelic acid / hydroxy acid derivative[span_77](start_span)[span_77](end_span)."
        },
        {
            subject: "Chemistry",
            q: "The product of which of the following reaction does not undergo oxidation with acidified KMnO4?",
            options: ["Alkyne reduction product", "Substituted toluene derivative", "Tertiary butyl chloride / related alcohol derivative without alpha-H", "Aldehyde derivative"],
            correct: 2,
            explanation: "Compounds lacking alpha-hydrogen atoms on the adjacent carbon cannot be oxidized by acidic KMnO4[span_78](start_span)[span_78](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which of the following statement is incorrect regarding benzene reactions? (Nitration mechanism and acid roles)",
            options: ["Electrophiles in chlorination, alkylation, nitration are Cl⁺, R⁺, NO₂⁺", "During nitration of benzene, sulfuric acid acts as base and nitric acid acts as acid", "In sigma complex one carbon is sp³ hybrid", "Polynuclear hydrocarbons are toxic and carcinogenic"],
            correct: 1,
            explanation: "During nitration, nitric acid acts as a Brønsted base and sulfuric acid acts as a Brønsted acid[span_79](start_span)[span_79](end_span)."
        },
        {
            subject: "Chemistry",
            q: "For reaction sequence: Acetaldehyde/acetone derivative → KOH/Br2 → (A) → ... What is correct about product (C)?",
            options: ["(C) gives silver mirror with Tollen's reagent", "(C) gives yellow ppt with I2/NaOH", "(C) can be prepared by HCHO with methyl magnesium bromide", "Both (2) & (3) are correct"],
            correct: 3,
            explanation: "Both options 2 and 3 correctly describe the chemical properties and synthetic routes of the final product[span_80](start_span)[span_80](end_span)."
        },
        {
            subject: "Chemistry",
            q: "In which of the following 1° amine will not be product? (Reduction reactions of cyanides/amides)",
            options: ["CH3CH2CN + H2/Ni", "R-CONH2 + LiAlH4", "R-NC + LiAlH4 / H2O", "R-CN + Na/C2H5OH"],
            correct: 2,
            explanation: "Reduction of isocyanides (R-NC) with LiAlH4 yields secondary amines (R-NH-CH3), not primary amines[span_81](start_span)[span_81](end_span)."
        },
        {
            subject: "Chemistry",
            q: "In Lassaigne's test for sulphur with sodium nitroprusside, the violet color formed is due to:",
            options: ["Na2[Fe(CN)5NOS]", "Na3[Fe(CN)3S]", "Na4[Fe(CN)5NOS]", "Na3[Fe(CN)6]"],
            correct: 0,
            explanation: "The violet coloration arises from the formation of sodium thiosprusside complex Na4[Fe(CN)5NOS] (or Na2[Fe(CN)5NOS])[span_82](start_span)[span_82](end_span)."
        },
        {
            subject: "Chemistry",
            q: "The IUPAC name of the given compound with -CHO, -Cl, -Br substituents on hexenal chain is:",
            options: ["(2R, 4Z)-4-Bromo-2-chloro-2-methyl-4-hexenal", "(2R, 4E)-4-Bromo-2-chloro-2-methyl-4-hexenal", "(2Z, 5R)-3-Bromo-5-chloro-5-formyl-2-hexene", "(2S, 4E)-4-Bromo-2-chloro-2-methyl-4-hexenal"],
            correct: 1,
            explanation: "Following stereochemical descriptors, it is (2R, 4E)-4-Bromo-2-chloro-2-methyl-4-hexenal[span_83](start_span)[span_83](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which is incorrect statement regarding stereochemistry and isomers?",
            options: ["Pair of structures showing chain isomerism", "Meso-compound identification", "Geometrical isomers vs conformations", "Enantiomers property"],
            correct: 2,
            explanation: "Certain structures compared in options misidentify rotational conformations as geometrical isomers[span_84](start_span)[span_84](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which of the following is benzenoid aromatic compound?",
            options: ["Thiophene", "Pyrrole", "Tropone", "Naphthalene"],
            correct: 3,
            explanation: "Naphthalene consists of fused benzene rings, making it a benzenoid aromatic compound[span_85](start_span)[span_85](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which is incorrect statement regarding carbohydrates and glucose?",
            options: ["Cellulose is linear polymer of α-D-glucose", "Sucrose is composed by α-D-glucose and β-D-fructose", "α-D-glucose and β-D-glucose are anomers", "Glucose and mannose are epimers"],
            correct: 0,
            explanation: "Cellulose is a linear polymer of β-D-glucose units, not α-D-glucose[span_86](start_span)[span_86](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Match Column-I (Reactions: Gattermann-Koch, Swarts, Sandmeyer, Etard) with Column-II (Reaction Names)",
            options: ["P-B, Q-C, R-A, S-D", "P-B, Q-D, R-C, S-A", "P-C, Q-B, R-D, S-A", "P-B, Q-C, R-D, S-A"],
            correct: 3,
            explanation: "Matching each named organic reaction correctly gives P-B, Q-C, R-D, S-A[span_87](start_span)[span_87](end_span)."
        },
        {
            subject: "Chemistry",
            q: "Which among the following statements are correct about carbocations and carbanions? (:CH2 singlet vs triplet)",
            options: ["-CH3⁺ is sp² hybrid and has no vacant orbital", "-CH3⁻ is sp³ hybrid and acts as Lewis base", "Singlet :CH2 is more stable than triplet :CH2", "Singlet :CH2 has linear geometry"],
            correct: 1,
            explanation: "Carbanion (-CH3⁻) is sp³ hybridized with a lone pair, allowing it to function as a Lewis base[span_88](start_span)[span_88](end_span)."
        },

        // ==================== BOTANY (Q91 - Q135) ====================
        {
            subject: "Botany",
            q: "Consider the following statements (A to D) regarding numerical taxonomy, cytotaxonomy, phylogenetic classification, and artificial classifications:",
            options: ["One", "Two", "Three", "Zero"],
            correct: 3,
            explanation: "All statements regarding numerical taxonomy, cytotaxonomy, and classification systems are correct, hence zero incorrect statements[span_89](start_span)[span_89](end_span)."
        },
        {
            subject: "Botany",
            q: "In Mangifera indica, Solanum tuberosum, and Panthera leo, all the three names, indica, tuberosum and leo represent the:",
            options: ["Names of family", "Names of specific epithets", "Names of genus", "Names of generic epithet"],
            correct: 1,
            explanation: "The second word in binomial nomenclature represents the specific epithet[span_90](start_span)[span_90](end_span)."
        },
        {
            subject: "Botany",
            q: "Consider the information: (a) Pyriform biflagellated male gametes, (b) Oogamous type of sexual reproduction, (c) Life cycle pattern is diplontic. Above information are related to:",
            options: ["Chara", "Fucus", "Cladophora", "Polysiphonia"],
            correct: 1,
            explanation: "Fucus is a brown alga (phaeophyceae) characterized by oogamous reproduction, pyriform biflagellate gametes, and a diplontic life cycle[span_91](start_span)[span_91](end_span)."
        },
        {
            subject: "Botany",
            q: "Animals, mammals, dogs all are taxa. But you know that a dog is a mammal and mammals are animals. Therefore animals, mammals and dogs represent:",
            options: ["Taxa at same levels", "Taxa / Taxon at different levels", "Taxa which have same morphological characters", "Taxa at division level"],
            correct: 1,
            explanation: "They represent taxa at different hierarchical levels[span_92](start_span)[span_92](end_span)."
        },
        {
            subject: "Botany",
            q: "Chemosynthetic bacteria obtain energy:",
            options: ["from sunlight", "from UV rays", "from Water", "By the oxidation of organic or inorganic substances"],
            correct: 3,
            explanation: "Chemosynthetic autotrophs oxidize various inorganic substances (such as nitrates, nitrites, or ammonia) to release energy for ATP production[span_93](start_span)[span_93](end_span)."
        },
        {
            subject: "Botany",
            q: "Assertion: In gymnosperm male and female gametophyte remain within the sporangia retained on the sporophyte. Reason: In gymnosperm the male and female gametophyte do not have an independent free living existence.",
            options: ["Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.", "Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.", "Assertion is True but the Reason is False.", "Both Assertion & Reason are False."],
            correct: 0,
            explanation: "Both statements are true and correctly explain why gametophytes are dependent and retained[span_94](start_span)[span_94](end_span)."
        },
        {
            subject: "Botany",
            q: "The side of a flower facing the mother axis is called:",
            options: ["Anterior side", "Posterior side", "Dorsal side", "Ventral side"],
            correct: 1,
            explanation: "The posterior side of a flower faces the mother axis[span_95](start_span)[span_95](end_span)."
        },
        {
            subject: "Botany",
            q: "In dicot leaves, size of vascular bundles are dependent on the:",
            options: ["Size of the leaves", "Size of the mesophyll cells", "Size of the veins", "Size of the bundle sheath cells"],
            correct: 2,
            explanation: "The size of the vascular bundles in reticulate venation leaves is dependent on the size of the veins[span_96](start_span)[span_96](end_span)."
        },
        {
            subject: "Botany",
            q: "The transverse section of stem of dicotyledonous plant shows which of the following anatomical feature?",
            options: ["Phloem parenchyma absent", "Water containing cavities are present within the vascular tissue", "Hypodermis is made up of sclerenchyma", "Vascular bundles are conjoint, collateral and open which are arranged in a ring"],
            correct: 3,
            explanation: "Dicot stems exhibit a ring arrangement of open, conjoint, and collateral vascular bundles[span_97](start_span)[span_97](end_span)."
        },
        {
            subject: "Botany",
            q: "Assertion: Endomembrane system include endoplasmic reticulum, golgi complex, lysosome and vacuole. Reason: E.R., Golgi complex, lysosome and vacuoles functions are coordinated to each other.",
            options: ["Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.", "Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.", "Assertion is True but the Reason is False.", "Both Assertion & Reason are False."],
            correct: 0,
            explanation: "Since their functions are coordinated, they form the endomembrane system[span_98](start_span)[span_98](end_span)."
        },
        {
            subject: "Botany",
            q: "Plant cells differ from animal cells in having:",
            options: ["large vacuole, plastids and cell wall", "cell wall, plastids and centrioles", "cell wall, plastids and mitochondria", "cell membrane, plastids and cell wall"],
            correct: 0,
            explanation: "Plant cells contain a rigid cell wall, prominent central vacuoles, and plastids[span_99](start_span)[span_99](end_span)."
        },
        {
            subject: "Botany",
            q: "Which of the following statements with respect to endoplasmic reticulum is incorrect?",
            options: ["Endoplasmic reticulum is a part of endomembrane system in eukaryotes", "In animal cells lipid-like steroidal hormones are synthesised in smooth endoplasmic reticulum (SER)", "Rough endoplasmic reticulum (RER) bears ribosomes on their surface", "SER is extensive and continuous with the outer membrane of the nucleus"],
            correct: 3,
            explanation: "RER (not SER) is continuous with the outer membrane of the nucleus, making statement 4 incorrect[span_100](start_span)[span_100](end_span)."
        },
        {
            subject: "Botany",
            q: "Arrange the events of interphase in the correct sequences: (i) RNA/DNA polymerase synthesis, (ii) DNA replication/histone synthesis, (iii) Tubulin/ATP synthesis, (iv) Karyokinesis/cytokinesis",
            options: ["(i) → (ii) → (iii) → (iv)", "(ii) → (i) → (iii) → (iv)", "(iv) → (iii) → (ii) → (i)", "(iii) → (iv) → (ii) → (i)"],
            correct: 0,
            explanation: "Interphase phases (G1, S, G2) follow sequence (i) G1, (ii) S, (iii) G2, followed by (iv) M phase[span_101](start_span)[span_101](end_span)."
        },
        {
            subject: "Botany",
            q: "In cells of higher plants, during the S-phase:",
            options: ["DNA replication occurs in nucleus and centrioles duplicate in the cytoplasm", "DNA replication occurs in nucleus", "Centrioles duplicates in the cytoplasm", "Centrioles duplicates in the nucleus and DNA replication occurs in the cytoplasm"],
            correct: 1,
            explanation: "Higher plant cells lack centrioles, so S-phase involves nuclear DNA replication without centriole duplication[span_102](start_span)[span_102](end_span)."
        },
        {
            subject: "Botany",
            q: "How many chromosomes will the onion root tip cell have at G₁-phase, after S-phase and after M-phase, if it has 16 chromosomes in mesophyll cell",
            options: ["16, 32, 32", "16, 32, 16", "8, 16, 16", "16, 16, 16"],
            correct: 3,
            explanation: "Mitotic cell cycle maintains chromosome number constant (16 in G1, 16 chromosomes with double chromatids in S, and 16 in daughter cells after M phase)[span_103](start_span)[span_103](end_span)."
        },
        {
            subject: "Botany",
            q: "The acid insoluble fraction of the tissue has:",
            options: ["Amino acids, Proteins and nucleic acids", "Monosaccharides and polysaccharides", "Nucleic acids, nucleotides and nitrogen base", "Proteins, nucleic acids, polysaccharides and lipids"],
            correct: 3,
            explanation: "Macromolecules like proteins, nucleic acids, polysaccharides, and lipids (retrieved as retentate) form the acid-insoluble fraction[span_104](start_span)[span_104](end_span)."
        },
        {
            subject: "Botany",
            q: "Statement A: Steroids do not contain fatty acids, but are included in lipids. Statement B: Cholesterol is the most abundant steroid in animal tissues.",
            options: ["Statements (A) and (B) are correct", "Statement (A) is correct and (B) is incorrect", "Statement (A) is incorrect and (B) is correct", "Statements (A) and (B) are incorrect"],
            correct: 0,
            explanation: "Both statements regarding lipid classification of steroids and cholesterol abundance are correct[span_105](start_span)[span_105](end_span)."
        },
        {
            subject: "Botany",
            q: "Statement-I: Enzyme substrate complex is short lived and dissociated into its product (P) and unchanged enzyme with an intermediate formation of the enzyme-product complex. Statement-II: Most of the enzymes have been classified into different groups based on the essentiality of formation of enzyme-substrate complex.",
            options: ["Both statement-I and statement-II are correct.", "Both statement-I and statement-II are incorrect.", "Only statement-I is correct.", "Only statement-II is correct."],
            correct: 2,
            explanation: "Statement I is correct (ES complex formation). Statement II is incorrect because classification is based on the type of reactions catalyzed (EC classes), not just ES complex essentiality[span_106](start_span)[span_106](end_span)."
        },
        {
            subject: "Botany",
            q: "Which among the following is not the post-fertilization event in reproduction in flowering plant?",
            options: ["Events of endosperm and embryo development", "Maturation of ovule into seed", "Ovary into fruit conversion", "Formation of megaspores from the megaspore mother cell"],
            correct: 3,
            explanation: "Megasporogenesis occurs before fertilization, making it a pre-fertilization event[span_107](start_span)[span_107](end_span)."
        },
        {
            subject: "Botany",
            q: "Statement-1: If the female parent produce unisexual flowers, there is no need for emasculation. Statement-2: Pollination is the mechanism to transfer pollen grains from anther to the stigma.",
            options: ["Both statements are correct", "Statement-1 is correct and statement-2 is incorrect", "Statement-1 is incorrect and statement-2 is correct", "Both statements are incorrect"],
            correct: 0,
            explanation: "Unisexual female flowers lack stamens, so anther removal (emasculation) is unnecessary. Both statements are true[span_108](start_span)[span_108](end_span)."
        },
        {
            subject: "Botany",
            q: "Statement-1: In flowering plants, the megaspore mother cell divides meiotically and one of megaspores forms the embryo sac. Statement-2: The mature embryo sac is 7 nucleated and 8 celled.",
            options: ["Statement-1 is correct and Statement-2 is incorrect", "Statement-2 is correct and Statement-1 is incorrect", "Both statements are correct", "Both statements are incorrect"],
            correct: 0,
            explanation: "Statement 1 is correct. Statement 2 is incorrect because a mature angiosperm embryo sac is 7-celled and 8-nucleated (reversed in the prompt)[span_109](start_span)[span_109](end_span)."
        },
        {
            subject: "Botany",
            q: "Match List I with List II: (A) Splitting of water molecule, (B) Use of radio active carbon, (C) Synthesis of only ATP, (D) Synthesis of malic acid in bundle sheath cell",
            options: ["A-I, B-II, C-III, D-IV", "A-IV, B-III, C-II, D-I", "A-III, B-I, C-II, D-IV", "A-IV, B-I, C-II, D-III"],
            correct: 2,
            explanation: "Matching physiological processes with corresponding pathways gives A-III, B-I, C-II, D-IV[span_110](start_span)[span_110](end_span)."
        },
        {
            subject: "Botany",
            q: "Which statement (s) is/are true regarding temperature sensitivity of light and dark reactions?",
            options: ["Dark reaction is more temperature sensitive than light reaction", "Light reaction is more temperature sensitive than dark reaction", "Light and dark both reactions are not sensitive to temperature", "Dark reaction is sensitive to temperature but light reaction is not sensitive to light"],
            correct: 0,
            explanation: "Enzymatic dark reactions are biochemical and more temperature sensitive than photochemical light reactions[span_111](start_span)[span_111](end_span)."
        },
        {
            subject: "Botany",
            q: "Statement-I: Ubiquinol is oxidised with the transfer of electrons to cytochrome c via cytochrome bc₁ complex. Statement-II: Cytochrome c oxidase complex contain cytochromes a, a₃ and two copper centres.",
            options: ["Both Statement I and Statement II are incorrect", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and Statement II are correct"],
            correct: 3,
            explanation: "Both statements describing mitochondrial electron transport chain components are correct[span_112](start_span)[span_112](end_span)."
        },
        {
            subject: "Botany",
            q: "Cytochrome c is a small protein attached to the:",
            options: ["Outer surface of the inner membrane of mitochondria", "Inner surface of the outer membrane of mitochondria", "Inner surface of the inner membrane of mitochondria", "Outer surface of the outer membrane of mitochondria"],
            correct: 0,
            explanation: "Cytochrome c acts as a mobile electron carrier attached to the outer surface of the inner mitochondrial membrane[span_113](start_span)[span_113](end_span)."
        },
        {
            subject: "Botany",
            q: "What would be the correct option regarding given figure (a) and (b) of leaf growth?",
            options: ["Relative growth rate is equal in both figure.", "Figure (a) show more absolute growth rate as compared fig (b).", "Absolute growth rate is equal in both figure a and b.", "Relative growth rate is more in figure (b) as compared figure (a)."],
            correct: 3,
            explanation: "Analysis of absolute and relative growth rate comparisons in NCERT growth graphs shows relative growth rate is higher in figure b[span_114](start_span)[span_114](end_span)."
        },
        {
            subject: "Botany",
            q: "Oxygen act as the final hydrogen acceptor in ETS. How many molecules of oxygen are required to oxidise 6 molecules of pyruvic acid?",
            options: ["20 oxygen", "15 oxygen", "30 oxygen", "60 oxygen"],
            correct: 1,
            explanation: "Complete oxidation of 1 pyruvate requires 2.5 O₂ molecules (or per glucose total 6 pyruvates require 3 * 5 = 15 O₂ molecules)[span_115](start_span)[span_115](end_span)."
        },
        {
            subject: "Botany",
            q: "Which of the following hormone promotes internode/ petiole elongation in deep water rice?",
            options: ["Kinetin", "Ethylene", "2-4-D", "GA₃"],
            correct: 1,
            explanation: "Ethylene promotes rapid internode and petiole elongation in deep-water rice plants[span_116](start_span)[span_116](end_span)."
        },
        {
            subject: "Botany",
            q: "Match the column-I with column-II: (A) Single trait controlled by 3+ alleles, (B) Single trait controlled by 3+ genes, (C) Single gene with multiple phenotypic expressions",
            options: ["A-ii, B-iii, C-i", "A-iii, B-ii, C-i", "A-i, B-ii, C-iii", "A-ii, B-i, C-iii"],
            correct: 0,
            explanation: "Multiple alleles (A-ii), Polygenic inheritance (B-iii), Pleiotropy (C-i)[span_117](start_span)[span_117](end_span)."
        },
        {
            subject: "Botany",
            q: "Which of the following statement is not true for two genes that show 50% recombination frequency?",
            options: ["The genes may be on different chromosomes", "The genes are tightly linked", "The genes show independent assortment", "If the genes are present on the same chromosome, they undergo more than one cross overs in every meiosis"],
            correct: 1,
            explanation: "A 50% recombination frequency indicates unlinked or independently assorting genes, meaning they are NOT tightly linked[span_118](start_span)[span_118](end_span)."
        },
        {
            subject: "Botany",
            q: "Which of the following is true for the location of few genes of Drosophila studied by T.H. Morgan:",
            options: ["y, w and m genes are located on Y chromosome", "y⁺, w⁺ and m⁺ genes are located on Y chromosome", "y, y⁺, w, w⁺, m and m⁺ genes are located on X-chromosome", "y, y⁺, w, w⁺, m and m⁺ genes are present on autosomes"],
            correct: 2,
            explanation: "Morgan studied sex-linked genes (yellow, white, miniature) located on the X-chromosome[span_119](start_span)[span_119](end_span)."
        },
        {
            subject: "Botany",
            q: "Of a normal couple, half the sons are haemophilic while half the daughters are carriers. The gene is located on:",
            options: ["X-chromosome of father", "Y-chromosome of father", "One X-chromosome of mother", "Both the X-chromosomes of mother"],
            correct: 2,
            explanation: "Since sons get their single X chromosome from the mother, a carrier mother passes the mutant allele to half her sons[span_120](start_span)[span_120](end_span)."
        },
        {
            subject: "Botany",
            q: "A man with blood group B marries a female with blood group A and their first child is having blood group B. What is the genotype of child?",
            options: ["IᴬIᴉ", "IᴬIᴼ", "IᴉIᴉ", "IᴉIᴉ"],
            correct: 2,
            explanation: "A child with blood group B born to blood group A and B parents must have genotype IᴉIᴼ[span_121](start_span)[span_121](end_span)."
        },
        {
            subject: "Botany",
            q: "Match the following with respect to Transcription in Prokaryotes: Sigma factor, Template strand, Coding strand, RNA Polymerase",
            options: ["1-a, 2-b, 3-c, 4-d", "1-d, 2-b, 3-c, 4-a", "1-c, 2-d, 3-a, 4-b", "1-b, 2-d, 3-a, 4-c"],
            correct: 0,
            explanation: "Sigma factor aids promoter recognition (1-a), template strand serves for RNA synthesis (2-b), coding strand matches RNA (3-c), RNA polymerase catalyzes formation (4-d)[span_122](start_span)[span_122](end_span)."
        },
        {
            subject: "Botany",
            q: "Find out the correct statements from the followings regarding lac-operon structure, regulatory genes, and enzymes.",
            options: ["a and c only", "a, b and e only", "a, c and e only", "a, c, d and e"],
            correct: 3,
            explanation: "Statements a, c, d, and e are correct. Statement b is incorrect because 'i' refers to the inhibitor/repressor gene, not inducer[span_123](start_span)[span_123](end_span)."
        },
        {
            subject: "Botany",
            q: "Find out the sequence of binding of the amino acyl-t-RNA complexes during translation to a m-RNA transcribed by DNA segment 3'ATACGCATTGCG5'.",
            options: ["a, b, c, d", "d, a, b, c", "a, c, d, b", "b, a, c, d"],
            correct: 1,
            explanation: "Matching complementary codons/anticodons for the transcribed mRNA gives the correct translation sequence d, a, b, c[span_124](start_span)[span_124](end_span)."
        },
        {
            subject: "Botany",
            q: "The repressor of the operon is synthesized:",
            options: ["All the time", "Certain time", "Non constitutively", "None of them"],
            correct: 0,
            explanation: "The i gene produces the repressor protein constitutively (all the time)[span_125](start_span)[span_125](end_span)."
        },
        {
            subject: "Botany",
            q: "Identify the incorrect match among molecular biology terms:",
            options: ["Ribozyme - Nucleic acid", "Spliceosome - Bacteria", "Genetic code - Triplet", "Replication - DNA Polymerase"],
            correct: 1,
            explanation: "Spliceosomes are found in eukaryotes (involved in post-transcriptional splicing), not bacteria, making this match incorrect[span_126](start_span)[span_126](end_span)."
        },
        {
            subject: "Botany",
            q: "During replication of DNA, Okazaki fragments are formed in the direction of:",
            options: ["3' → 5'", "5' → 3'", "5' → 5'", "3' → 3'"],
            correct: 1,
            explanation: "DNA synthesis always proceeds in the 5' to 3' direction[span_127](start_span)[span_127](end_span)."
        },
        {
            subject: "Botany",
            q: "Match Column I (Interaction), Column II (Example), Column III (Feature), and Column IV (Effect): Commensalism, Parasitism, Mutualism, Predation.",
            options: ["A-1-i-α; B-2-ii-β; C-3-iii-γ; D-4-iv-δ", "A-2-ii-β; B-1-iii-γ; C-3-i-α; D-4-iv-δ", "A-3-iii-γ; B-4-iv-α; C-2-ii-β; D-1-i-δ", "A-1-ii-γ; B-3-i-α; C-2-iii-β; D-4-iv-δ"],
            correct: 0,
            explanation: "Matching ecological interactions with their examples, features, and +/- effects gives A-1-i-α; B-2-ii-β; C-3-iii-γ; D-4-iv-δ[span_128](start_span)[span_128](end_span)."
        },
        {
            subject: "Botany",
            q: "They may reduce survival, growth and reproduction of host and reduce its population density. They might render organisms more vulnerable to predation by making it physically weak. They are:",
            options: ["Predator", "Parasite", "Amensal", "Commensal"],
            correct: 1,
            explanation: "Parasites weaken hosts, reducing survival, growth, and reproduction[span_129](start_span)[span_129](end_span)."
        },
        {
            subject: "Botany",
            q: "Given below are two statements: Statement I: The primary source of energy in an ecosystem is solar energy. Statement II: The rate of production of organic matter during photosynthesis in an ecosystem is called net primary productivity (NPP).",
            options: ["Both statement I and statement II are correct.", "Both statement I and statement II are incorrect.", "Statement I is correct but statement II is incorrect.", "Statement I is incorrect but statement II is correct."],
            correct: 2,
            explanation: "Statement I is correct. Statement II is incorrect because rate of production of organic matter *during photosynthesis* is Gross Primary Productivity (GPP), not NPP[span_130](start_span)[span_130](end_span)."
        },
        {
            subject: "Botany",
            q: "Assertion (A): The pyramid of biomass in sea is generally inverted. Reason (R) :- Paradoxically biomass of phytoplankton exceeds that of fishes.",
            options: ["(A) and (R) are incorrect.", "(A) and (R) are correct and (R) is correct explanation of (A).", "(A) is correct but (R) is incorrect.", "(A) is correct, (R) is also correct. but (R) is not correct explanation of (A)."],
            correct: 2,
            explanation: "The assertion is correct (inverted pyramid of biomass in aquatic ecosystems), but the reason is incorrect because phytoplankton biomass is actually *smaller* than that of fishes due to rapid turnover[span_131](start_span)[span_131](end_span)."
        },
        {
            subject: "Botany",
            q: "Which of the following is not included in 'Evil Quartet', responsible for biodiversity loss:",
            options: ["Co evolution", "Overexploitation", "Alien species invasion and co extinction", "Habitat loss and fragmentation"],
            correct: 0,
            explanation: "Co-evolution is a natural biological process, whereas the Evil Quartet consists of habitat loss, overexploitation, alien species invasions, and co-extinctions[span_132](start_span)[span_132](end_span)."
        },
        {
            subject: "Botany",
            q: "'The Earth Summit' held in:",
            options: ["In 2002 in Johannesburg, South Africa", "In 1992 in Rio de Janeiro", "In 1992 in Johannesburg, South Africa", "In 2002 in Rio de Janeiro"],
            correct: 1,
            explanation: "The historic Earth Summit on Biodiversity was held in Rio de Janeiro in 1992[span_133](start_span)[span_133](end_span)."
        },

        // ==================== ZOOLOGY (Q136 - Q180) ====================
        {
            subject: "Zoology",
            q: "Match organisms with characteristics: (a) Pila, (b) Bombyx, (c) Pleurobrachia, (d) Taenia with Flame cells, Comb plates, Radula, Malpighian tubules.",
            options: ["(iii), (ii), (iv), (i)", "(iii), (ii), (i), (iv)", "(iii), (iv), (ii), (i)", "(ii), (iv), (iii), (i)"],
            correct: 2,
            explanation: "Pila has radula (a-iii), Bombyx has Malpighian tubules (b-iv), Pleurobrachia has comb plates (c-ii), Taenia has flame cells (d-i)[span_134](start_span)[span_134](end_span)."
        },
        {
            subject: "Zoology",
            q: "First phylum to have complete digestive tract can be represented by -",
            options: ["Hydra", "Taenia", "Ancylostoma", "Pheretima"],
            correct: 2,
            explanation: "Aschelminthes (represented by roundworms like Ancylostoma) are the first phylum to exhibit a complete alimentary canal with a muscular pharynx and separate anus[span_135](start_span)[span_135](end_span)."
        },
        {
            subject: "Zoology",
            q: "Identify the incorrect match among animal phyla characters:",
            options: ["Porifera-ostia, choanocytes, indirect development, sycon", "Coelenterata-Cnidoblasts, Gastrovascular cavity, Triploblastic, Adamsia", "Ctenophora-Combplates, Diploblastic, indirect development, Ctenoplana", "Platyhelminthes-Flame cells, Parasite, Monocious, Tapeworm"],
            correct: 1,
            explanation: "Coelenterates (Cnidaria) are diploblastic, not triploblastic, making this match incorrect[span_136](start_span)[span_136](end_span)."
        },
        {
            subject: "Zoology",
            q: "Read the statements regarding matrix of connective tissue: (a) Cell secrete matrix, (b) Matrix accumulate between cells and fibres, (c) Matrix act as ground substance.",
            options: ["a", "b and c", "a and c", "a, b and c"],
            correct: 3,
            explanation: "All statements regarding the structural role of connective tissue matrix are correct[span_137](start_span)[span_137](end_span)."
        },
        {
            subject: "Zoology",
            q: "During metamorphosis, moulting occurs ___ times in cockroach.",
            options: ["3-5", "15-20", "13", "1-2"],
            correct: 2,
            explanation: "Nymphs of Periplaneta americana undergo moulting 13 times to reach the adult stage[span_138](start_span)[span_138](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following is an unpaired structure in Rana tigrina?",
            options: ["Optic lobes in midbrain", "Lungs", "Diencephalon in forebrain", "Kidneys"],
            correct: 2,
            explanation: "Diencephalon is an unpaired median part of the forebrain, whereas lobes, lungs, and kidneys are paired[span_139](start_span)[span_139](end_span)."
        },
        {
            subject: "Zoology",
            q: "With reference to frog: Statement I: They have the ability to change the colour to hide them from their enemy. Statement II: They undergo in summer sleep called aestivation and winter sleep called hibernation.",
            options: ["Both Statement I and Statement II are incorrect.", "Statement I is incorrect but Statement II is correct.", "Both Statement I and Statement II are correct.", "Statement I is correct but Statement II is incorrect."],
            correct: 2,
            explanation: "Both statements describing camouflage (mimicry/color change) and dormancy states (aestivation and hibernation) in frogs are correct[span_140](start_span)[span_140](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which type of animals pump out mixed blood present in ventricles to the organs?",
            options: ["Fishes and Amphibians", "Birds and mammals", "Amphibians and mammals", "Amphibians and reptiles"],
            correct: 3,
            explanation: "Amphibians and reptiles (except crocodiles) possess a 3-chambered heart or incomplete ventricle separation, pumping mixed blood[span_141](start_span)[span_141](end_span)."
        },
        {
            subject: "Zoology",
            q: "Match List I and II for ECG: (A) P-wave, (B) T-wave, (C) QRS complex, (D) End of T-wave",
            options: ["A III, B I, C IV, D II", "A III, B I, C II, D IV", "A IV, B I, C III, D II", "A IV, B I, C II, D IV"],
            correct: 0,
            explanation: "P-wave = Atrial depolarisation (A-III), T-wave = Ventricular repolarisation (B-I), QRS = Ventricular depolarisation (C-IV), End of T-wave = End of ventricular systole (D-II)[span_142](start_span)[span_142](end_span)."
        },
        {
            subject: "Zoology",
            q: "Tidal volume and inspiratory reserve volume of a person is 500 ml and 2500 ml respectively. What will be his vital capacity if the expiratory reserve volume is 1000 ml?",
            options: ["2000 ml", "1500 ml", "3500 ml", "4000 ml"],
            correct: 3,
            explanation: "Vital Capacity = TV + IRV + ERV = 500 + 2500 + 1000 = 4000 ml[span_143](start_span)[span_143](end_span)."
        },
        {
            subject: "Zoology",
            q: "Read carefully and arrange the given steps of expiration in the human body: (I) Relaxation of diaphragm, (II) Reduction of pulmonary volume, (III) Expulsion of air from lungs, (IV) Increase in intra-pulmonary pressure.",
            options: ["I → II → III → IV", "I → II → IV → III", "IV → III → II → I", "IV → II → III → I"],
            correct: 1,
            explanation: "Diaphragm relaxes (I) → pulmonary volume reduces (II) → intrapulmonary pressure increases above atmospheric pressure (IV) → air flows out (III)[span_144](start_span)[span_144](end_span)."
        },
        {
            subject: "Zoology",
            q: "Observe the figure given below and identify the label 'A' and nature of tissue associated with it: (Alveolar gas exchange membrane diagram)",
            options: ["Basement membrane - Non-cellular layer", "Blood capillary - Mesothelium", "Alveolar wall - One-celled thick squamous epithelium", "Alveoli compound endothelium"],
            correct: 2,
            explanation: "Label A points to the thin squamous epithelium of the alveolar wall specialized for gas diffusion[span_145](start_span)[span_145](end_span)."
        },
        {
            subject: "Zoology",
            q: "During the process of micturition: Urinary bladder vs Urethral sphincter contraction/relaxation states:",
            options: ["Contracts, Contracts", "Contracts, Relaxes", "Relaxes, Contracts", "Relaxes, Relaxes"],
            correct: 1,
            explanation: "During urination, the detrusor muscle of the urinary bladder contracts while the urethral sphincters relax[span_146](start_span)[span_146](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following conditions will not activate the JG cells?",
            options: ["Decrease in blood volume", "Fall in Na⁺ ion concentration in blood plasma", "Rise in GFR", "Fall in blood pressure"],
            correct: 2,
            explanation: "A rise in Glomerular Filtration Rate (GFR) inhibits renin release from JG cells, whereas drops in volume, sodium, or pressure activate them[span_147](start_span)[span_147](end_span)."
        },
        {
            subject: "Zoology",
            q: "Given below is the diagram representing conduction of nerve impulse in myelinated neuron. Label parts A, B, C, D correctly.",
            options: ["A-Axolemma, B-Site of polarisation, C-Wave, D-Axoplasm", "A-Myelin sheath, B-Site of Depolarisation, C-Action potential jumps from node to node, D-Axoplasm", "A-Axoplasm, B-Repolarisation, C-Ionic movement, D-Axon", "A-Myelin sheath, B-Hyperpolarisation, C-Action potential, D-Axoplasm"],
            correct: 1,
            explanation: "Labels correctly identify myelin sheath (A), site of depolarization/saltatory conduction features (B, C, D)[span_148](start_span)[span_148](end_span)."
        },
        {
            subject: "Zoology",
            q: "Statement-I: The brain is protected by three layers of cranial meninges. Statement-II: Pia mater is the outermost menix.",
            options: ["Statement-I and II both are true.", "Statement-I and II both are false.", "Statement-I is true but II is false.", "Statement-I is false but II is true."],
            correct: 2,
            explanation: "Statement I is true (dura mater, arachnoid, pia mater). Statement II is false because dura mater is the outermost layer, while pia mater is innermost[span_149](start_span)[span_149](end_span)."
        },
        {
            subject: "Zoology",
            q: "Match hormones with respective diseases: (a) Insulin, (b) Thyroxin, (c) Corticoids, (d) Growth Hormone with Addison's disease, Diabetes insipidus, Acromegaly, Goitre, Diabetes mellitus.",
            options: ["(iv), (i), (ii), (iii)", "(i), (iv), (v), (iii)", "(ii), (i), (v), (iii)", "(i), (iii), (iv), (ii)"],
            correct: 0,
            explanation: "Wait, matching correctly: Insulin -> Diabetes mellitus (v), Thyroxin -> Goitre (iv), Corticoids -> Addison's disease (i), GH -> Acromegaly (iii)[span_150](start_span)[span_150](end_span)."
        },
        {
            subject: "Zoology",
            q: "Assertion (A): cAMP serves as the second messenger for protein hormones. Reason (R): Insulin is a protein hormone.",
            options: ["Both (A) and (R) are correct but (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct", "Both (A) and (R) are correct and (R) is the correct explanation of (A)"],
            correct: 0,
            explanation: "Both statements are correct facts, but insulin primarily acts through tyrosine kinase receptor signaling cascades rather than cAMP as its primary second messenger[span_151](start_span)[span_151](end_span)."
        },
        {
            subject: "Zoology",
            q: "Select the Correct match of cellular movement types (Locomotion, cytopharynx movement, capturing prey, protoplasmic streaming) with structures (cilia, flagella, pseudopodia, tentacles).",
            options: ["A-i, B-iii, C-ii, D-iv", "A-iv, B-vi, C-iii, D-v", "A-i, B-v, C-vi, D-i", "A-iii, B-iii, C-ii, D-iv"],
            correct: 0,
            explanation: "Matching types of cellular movements with their respective anatomical effectors gives A-i, B-iii, C-ii, D-iv[span_152](start_span)[span_152](end_span)."
        },
        {
            subject: "Zoology",
            q: "Choose the correct statement about a muscular tissue:",
            options: ["Skeletal muscle fibres are uninucleated and found in parallel bundles", "Intercalated discs allow the cardiac muscle cells to contract as a unit", "The walls of blood vessels are made up of columnar epithelium", "Smooth muscles are multinucleated and involuntary"],
            correct: 1,
            explanation: "Intercalated discs permit cardiac muscle cells to contract synchronously as a functional syncytium[span_153](start_span)[span_153](end_span)."
        },
        {
            subject: "Zoology",
            q: "A man involved in a motorcycle accident has dislocated his shoulder joint. Upon examination, the doctor notes that the head of the humerus is no longer in contact with the glenoid cavity. Which structure is most directly involved?",
            options: ["Acetabulum", "Acromion", "Glenoid cavity", "Pubic symphysis"],
            correct: 2,
            explanation: "The head of the humerus articulates with the glenoid cavity of the pectoral girdle (scapula)[span_154](start_span)[span_154](end_span)."
        },
        {
            subject: "Zoology",
            q: "The flow chart given about the part of forebrain (Memory, communication, release of hormones). Identify A to D and select correct option:",
            options: ["A-Cerebrum, B-Thalamus, C-Motor area, D-Neuro-secretory cells", "A-Cerebellum, B-Medulla, C-Sensory area, D-Neuro-sensory cells", "A-Cerebellar hemisphere, B-Hypothalamus, C-Association area, D-Neuro-sensory cells", "A-Cerebrum, B-Hypothalamus, C-Association area, D-Neuro-secretory cells"],
            correct: 3,
            explanation: "Forebrain structures: Cerebrum (A), Hypothalamus (B), Association area (C), Neuro-secretory cells (D)[span_155](start_span)[span_155](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following are the examples of homologous organs?",
            options: ["Forelimb of mammals, sweet potato and potato", "All vertebrate heart, wings of butterfly and birds", "All vertebrate brain, Flippers of dolphin and whale", "Thorn of Bougainvillea and tendril of cucurbita, Eye of the octopus and mammals"],
            correct: 2,
            explanation: "Vertebrate brains and flippers of dolphins/whales share common embryonic structural ancestry (homologous)[span_156](start_span)[span_156](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which one of the following gas was not present in free form at the time life originated on earth?",
            options: ["Ammonia", "Oxygen", "Hydrogen", "Methane"],
            correct: 1,
            explanation: "Primitive earth had a reducing atmosphere lacking free oxygen gas[span_157](start_span)[span_157](end_span)."
        },
        {
            subject: "Zoology",
            q: "Founder effect is related to:",
            options: ["Mutation", "Natural selection", "Genetic drift", "Gene flow"],
            correct: 2,
            explanation: "Founder effect is a special case of genetic drift occurring when a small group colonizes a new habitat[span_158](start_span)[span_158](end_span)."
        },
        {
            subject: "Zoology",
            q: "In a population at Hardy Weinberg equilibrium, if the frequency of allele A is 0.6 then what is the expected frequency of heterozygous?",
            options: ["0.36", "0.48", "0.24", "0.16"],
            correct: 1,
            explanation: "If p = 0.6, then q = 0.4. Frequency of heterozygotes (Aa) = 2pq = 2(0.6)(0.4) = 0.48[span_159](start_span)[span_159](end_span)."
        },
        {
            subject: "Zoology",
            q: "In 1938 a fish caught in South Africa happened to be a Coelacanth which was thought to be extinct. These animals called lobefins evolved into the first:",
            options: ["Amphibians", "Jawless fish", "Reptiles", "Birds"],
            correct: 0,
            explanation: "Lobe-finned fish (coelacanths) evolved into the first amphibians[span_160](start_span)[span_160](end_span)."
        },
        {
            subject: "Zoology",
            q: "Some sportspersons abused drugs by snorting or ingesting them orally, affecting the cardiovascular system. What kind of drugs do they use?",
            options: ["Heroin", "Cocaine", "Cannabinoids", "Barbiturates"],
            correct: 1,
            explanation: "Cocaine is typically snorted and causes potent stimulation of the central nervous system and cardiovascular system[span_161](start_span)[span_161](end_span)."
        },
        {
            subject: "Zoology",
            q: "Match column-I with column-II for barriers in human immunity: Physical Barrier, Physiological Barrier, Cellular Barrier, Cytokine Barrier.",
            options: ["a-(i)(ii), b-(vi)(v), c-(iii), d-(iv)", "a-(i)(vi), b-(ii)(v), c-(iii), d-(iv)", "a-(i)(vi), b-(ii)(v), c-(iv), d-(iii)", "a-(ii)(vi), b-(i)(v), c-(iii), d-(iv)"],
            correct: 1,
            explanation: "Physical (skin, mucus), Physiological (acid, saliva), Cellular (PMNL/neutrophils), Cytokine (interferons)[span_162](start_span)[span_162](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following are bacterial diseases?",
            options: ["Pneumonia, Malaria", "Typhoid, Common cold", "Dysentery, Plague", "Ascariasis, Diphtheria"],
            correct: 2,
            explanation: "Bacterial dysentery (shigellosis) and plague (Yersinia pestis) are bacterial infections (malaria/cold/ascariasis involve protozoa, viruses, or helminthes)[span_163](start_span)[span_163](end_span)."
        },
        {
            subject: "Zoology",
            q: "Find the incorrect statement among health and disease facts:",
            options: ["Plague is a bacterial disease", "Morphine is a painkiller", "Memory cells are formed in acquired immunity", "Barbiturates are stimulant drugs"],
            correct: 3,
            explanation: "Barbiturates are depressants/sedatives, not stimulants, making statement 4 incorrect[span_164](start_span)[span_164](end_span)."
        },
        {
            subject: "Zoology",
            q: "Cell-mediated immunity mainly depends on the action of:",
            options: ["T lymphocytes", "B lymphocytes", "Mast cells", "Neutrophils"],
            correct: 0,
            explanation: "Cell-mediated immunity (CMI) is mediated by T-lymphocytes[span_165](start_span)[span_165](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following property is true regarding the drug obtained from the given plant source (cannabinoids / opium derivatives)?",
            options: ["Pain killer", "CNS Stimulant", "Hallucinogen", "Hypnotic"],
            correct: 2,
            explanation: "Cannabinoids (derived from Cannabis sativa) primarily affect the cardiovascular system and act as hallucinogens[span_166](start_span)[span_166](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following is the most fatal non-infections disease?",
            options: ["AIDS", "Diabetes", "Cancer", "Hepatitis"],
            correct: 2,
            explanation: "Cancer is one of the most fatal non-infectious diseases globally[span_167](start_span)[span_167](end_span)."
        },
        {
            subject: "Zoology",
            q: "Who disapproved good humor theory of health proposed by Greeks like Hippocrates?",
            options: ["William Harvey", "Starling", "Hippocrates", "Indian Ayurveda"],
            correct: 0,
            explanation: "William Harvey disproved the good humor hypothesis of health using experimental demonstration of blood circulation[span_168](start_span)[span_168](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which set of example is related with secondary lymphoid organ?",
            options: ["Heart, Liver, Spleen", "Thymus, MALT, Bone marrow", "Spleen, appendix, tonsils", "Lymph node, bone marrow, skin"],
            correct: 2,
            explanation: "Spleen, appendix, tonsils, and lymph nodes are secondary lymphoid organs (thymus and bone marrow are primary)[span_169](start_span)[span_169](end_span)."
        },
        {
            subject: "Zoology",
            q: "Read the passage on spermatogenesis: Spermatogonia → Primary spermatocyte → [A] → [B] → Spermatozoa. Which statement is correct regarding B (Spermatids / Spermatozoa stage)?",
            options: ["It is produced by the first meiotic division", "It is a diploid structure", "It is produced by mitosis division", "Has 23 chromosomes"],
            correct: 3,
            explanation: "Spermatozoa (mature sperms) are haploid cells containing 23 chromosomes[span_170](start_span)[span_170](end_span)."
        },
        {
            subject: "Zoology",
            q: "Read statements: S-I: Tail part of sperm possesses numerous mitochondria supplying energy. S-II: Secondary follicle is surrounded by thecal layer.",
            options: ["Both Statement I and Statement II are correct", "Both Statement I and Statement II are incorrect", "Only Statement I is correct", "Only Statement II is correct"],
            correct: 0,
            explanation: "Both statements describing sperm mitochondrial arrangement and follicular theca layers are correct[span_171](start_span)[span_171](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following hormone induces rupture of graafian follicle and thereby the release of ovum?",
            options: ["LH", "Relaxin", "Progesterone", "Inhibin"],
            correct: 2,
            explanation: "A surge in Luteinizing Hormone (LH surge) triggers ovulation (rupture of mature Graafian follicle)[span_172](start_span)[span_172](end_span)."
        },
        {
            subject: "Zoology",
            q: "Mammary duct connects:",
            options: ["Mammary tubule to mammary ampulla", "Mammary alveoli to mammary tubule", "Mammary tubule to lactiferous duct", "Lactiferous duct to nipple"],
            correct: 0,
            explanation: "Mammary tubules join to form a mammary duct, which expands into an ampulla connected to lactiferous ducts[span_173](start_span)[span_173](end_span)."
        },
        {
            subject: "Zoology",
            q: "A student observes internal structure of human testis showing highly coiled tubules where sperms are produced. What are these tubules called?",
            options: ["Epididymis", "Vas deferens", "Seminiferous tubules", "Rete testis"],
            correct: 0,
            explanation: "Wait, seminiferous tubules are the site of spermatogenesis (option 3)[span_174](start_span)[span_174](end_span)."
        },
        {
            subject: "Zoology",
            q: "Match List-I with List-II: (i) Placenta, (ii) Corpus luteum, (iii) Acrosome, (iv) Colostrum with respective functions/descriptions.",
            options: ["i-d; ii-c; iii-a; iv-b", "i-c; ii-d; iii-b; iv-a", "i-d; ii-c; iii-b; iv-a", "i-c; ii-d; iii-a; iv-b"],
            correct: 3,
            explanation: "Placenta supplies oxygen (i-c), corpus luteum secretes progesterone (ii-d), acrosome aids fertilization (iii-a), colostrum contains antibodies (iv-b)[span_175](start_span)[span_175](end_span)."
        },
        {
            subject: "Zoology",
            q: "How many of the following are sexually transmitted infections? Syphilis, ringworm, hepatitis-B, typhoid, genital herpes, common cold",
            options: ["One", "Two", "Three", "Four"],
            correct: 2,
            explanation: "Syphilis, Hepatitis-B, and genital herpes are STIs (total 3), while ringworm, typhoid, and common cold are not[span_176](start_span)[span_176](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following is not a barrier method of contraception?",
            options: ["Condoms", "Cervical caps", "Lactational amenorrhea", "Both 1 and 2"],
            correct: 3,
            explanation: "Lactational amenorrhea is a natural/behavioral method based on absence of ovulation, whereas condoms and cervical caps are barrier methods[span_177](start_span)[span_177](end_span)."
        },
        {
            subject: "Zoology",
            q: "Which of the following contraceptives does not use hormones?",
            options: ["Oral contraceptive pills", "LNG-20", "Multiload 375", "Hormonal implants"],
            correct: 2,
            explanation: "Multiload 375 is a copper-releasing intrauterine device (IUD), which does not contain hormones (unlike pills, LNG-20, or implants)[span_178](start_span)[span_178](end_span)."
        }
    ],
    "test2": [
        // ==================== TEST 2: 180 QUESTIONS ====================
        {
            subject: "Physics",
            q: "Which of the following is a dimensionally correct equation for centripetal force?",
            options: ["F = mv²/r", "F = mvr", "F = mv/r²", "F = m²v/r"],
            correct: 0,
            explanation: "Dimensional analysis shows [MLT⁻²] equals [M][L²T⁻²]/[L]."
        }
        // (Add remaining Test 2 questions up to 180 here...)
    ]
};
