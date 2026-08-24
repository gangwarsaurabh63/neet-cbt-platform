// =========================================================================
// NEETPREP ELITE - FULL-LENGTH TEST CATALOG (tests.js)
// =========================================================================

const fullLengthTests = {
    "test_full_length_01": {
        title: "Careerwill - Pre-Medical Major Test - 01 (14.03.2026)",
        durationMinutes: 195, // 3 Hours 15 Mins
        totalQuestions: 180,
        questions: [
            // ==========================================
            // PHYSICS (Questions 1 to 45)
            // ==========================================
            {
                id: 1,
                subject: "Physics",
                q: "An explosion breaks a rock into three equal parts in a horizontal plane. Two of them go off at right angles to each other with speed of 6 m/s and 8 m/s respectively. Then find the speed of third part and also its angle of motion with that part having lesser speed:",
                options: ["(1) 5 m/s, 127°", "(2) 10 m/s, 127°", "(3) 10 m/s, 143°", "(4) 5 m/s, 147°"],
                correct: 1,
                explanation: "Using conservation of momentum, the two perpendicular momenta are p₁ = m(6) and p₂ = m(8). Their resultant is √(6² + 8²) = 10m. The third part must have equal and opposite momentum 10m, giving a speed of 10 m/s. Angle calculations yield 127°."
            },
            {
                id: 2,
                subject: "Physics",
                q: "A disc revolves with a speed of (1/π) rev/sec and has a radius of 30 cm. Two coins A and B are placed at 10 cm and 20 cm away from the centre of the record. If the coefficient of friction between the coins and the record is 0.1, which of the coins will revolve with the record?",
                options: ["(1) Only A", "(2) Only B", "(3) Both A and B", "(4) None of the coin will revolve with record."],
                correct: 2,
                explanation: "Maximum frictional force provides the necessary centripetal force: mω²r ≤ μmg, determining the threshold radius for coin B."
            },
            {
                id: 3,
                subject: "Physics",
                q: "R त्रिज्या के वृत्तीय मार्ग पर गति करते हुए कण की गतिज ऊर्जा K, इसके द्वारा तय की गयी दूरी s पर K = as² के अनुसार निर्भर करती है, जहाँ a नियतांक है। कण पर कार्यरत परिणामी बल तथा वेग के मध्य कोण होगा:",
                options: ["(1) tan⁻¹(2s / R)", "(2) tan⁻¹(s / R)", "(3) tan⁻¹(R / s)", "(4) tan⁻¹(R / 2s)"],
                correct: 0,
                explanation: "Tangential acceleration and centripetal acceleration relations give the angle between net force and velocity as tan⁻¹(2s/R)."
            },
            {
                id: 4,
                subject: "Physics",
                q: "L लम्बाई की एक छड़ एक छोर से कीलकित है तथा एक-समान कोणीय वेग से क्षैतिज तल में घूर्णन करती है। माना कीलकित छोर से L/4 तथा 3L/4 दूरी पर स्थित बिन्दुओं पर तनाव T₁ तथा T₂ है, तब:",
                options: ["(1) T₁ > T₂", "(2) T₂ > T₁", "(3) T₁ = T₂", "(4) T₁ तथा T₂ के मध्य संबंध इस बात पर निर्भर करता है की छड़ दक्षिणावर्त अथवा वामावर्त घूर्णन करती है।"],
                correct: 1,
                explanation: "Tension in a rotating rod provides the centripetal force for the outer segments, hence tension increases as distance from the pivot increases (T₂ > T₁)."
            },
            {
                id: 5,
                subject: "Physics",
                q: "A particle of mass m moves with a velocity v and collides inelastically with another stationary identical particle. After collision, the 1st particle moves with velocity v/√3 in a direction perpendicular to the initial direction of motion. Find the speed of other particle after collision:",
                options: ["(1) v", "(2) √3 v", "(3) 2v/√3", "(4) v/√3"],
                correct: 2,
                explanation: "Applying conservation of linear momentum along perpendicular components yields the final speed of the second particle as 2v/√3."
            },
            {
                id: 6,
                subject: "Physics",
                q: "Three particles A, B and C of equal mass move with equal speed v along the medians of an equilateral triangle as shown in the figure. They collide at the centroid G of the triangle. After the collision, A comes to rest and B retraces its path with the speed v. What is the velocity of C -",
                options: ["(1) v, in the same direction as the final velocity of B.", "(2) v/3, in the direction opposite to the final velocity of B.", "(3) v, in the direction opposite to the final velocity of B.", "(4) Zero."],
                correct: 2,
                explanation: "By conservation of total initial momentum (which is zero for symmetrical medians), particle C must move with speed v in the direction opposite to B's final path."
            },
            {
                id: 7,
                subject: "Physics",
                q: "The potential energy of a body is given by U = 9/x² - 2/x. The position x at which its speed is maximum is:",
                options: ["(1) x = +3 m", "(2) x = -3 m", "(3) x = 9 m", "(4) x = -9 m"],
                correct: 0,
                explanation: "Speed is maximum when potential energy is minimum, which occurs where force F = -dU/dx = 0. Solving gives x = +3 m."
            },
            {
                id: 8,
                subject: "Physics",
                q: "Power applied to a particle varies with time as P = (3t² - 2t + 1) Watt, where 't' is in second. The change in kinetic energy between t = 2s and t = 4s is:",
                options: ["(1) 32 J", "(2) 46 J", "(3) 61 J", "(4) 100 J"],
                correct: 2,
                explanation: "Change in kinetic energy equals the work done / integration of power with respect to time from t = 2 to t = 4, yielding 61 J."
            },
            {
                id: 9,
                subject: "Physics",
                q: "A bullet of mass 10 g moving with a velocity of 300 m/s strikes a wooden block and comes out from other side with a velocity of 200 m/s. The work done by the resistive force on the bullet is:",
                options: ["(1) -200 J", "(2) +200 J", "(3) -250 J", "(4) +250 J"],
                correct: 2,
                explanation: "Work done equals change in kinetic energy: ΔK = ½ m (v₂² - v₁²) = ½ × 0.01 × (200² - 300²) = -250 J."
            },
            {
                id: 10,
                subject: "Physics",
                q: "If force F = (xi + y²j) N is acting on a body and body moves from (1, 2, 1) m to (2, 3, 3) m, then the work done due to the force is:",
                options: ["(1) 42/5 J", "(2) 47/6 J", "(3) 55/3 J", "(4) 37/4 J"],
                correct: 1,
                explanation: "Integrating F·dr component-wise along the path from initial to final coordinates results in 47/6 J."
            },
            {
                id: 11,
                subject: "Physics",
                q: "In a vertical circular motion as shown in figure, if particle of mass m is given a speed of √(11gl/2) at lowest point (A), then:",
                options: ["(1) Particle will start oscillating about its lowest position.", "(2) Particle will come back after reaching B.", "(3) Particle will complete the vertical circle.", "(4) Particle will come back after reaching between points B and C"],
                correct: 2,
                explanation: "Since the velocity √(11gl/2) is greater than the critical velocity for completing a vertical loop (√(5gl)), the particle completes the vertical circle."
            },
            {
                id: 12,
                subject: "Physics",
                q: "एक पहिया जो प्रारंभ में विराम अवस्था में है, एकसमान कोणीय त्वरण से घूर्णन प्रारम्भ करता है। पहिया पहले प्रथम सेकण्ड में θ₁ कोण से और अगले दो सेकण्ड में θ₂ कोण से घूर्णन करता है, तो θ₂/θ₁ का मान होगा:",
                options: ["(1) 8", "(2) 4", "(3) 1/4", "(4) 1/8"],
                correct: 0,
                explanation: "Using θ = ½αt², for first 1s, θ₁ = ½α(1)² = ½α. For total 3s, θ₁ + θ₂ = ½α(3)² = 4.5α, making θ₂ = 4α, hence θ₂/θ₁ = 8."
            },
            {
                id: 13,
                subject: "Physics",
                q: "A fan is rotating with a speed of 360 rev/minute. It comes to rest in 6s on switching off the switch. The number of revolutions made by it before coming to rest is:",
                options: ["(1) 9", "(2) 27", "(3) 18", "(4) 36"],
                correct: 0,
                explanation: "Initial frequency = 6 rev/s, time = 6s. Total revolutions = Average frequency × time = (6/2) × 6 = 18 revolutions."
            },
            {
                id: 14,
                subject: "Physics",
                q: "यदि एक व्यक्ति 1 m/s से चाल बढ़ाता है, तो उसकी गतिज ऊर्जा 44% से बढ़ जाती है। तो उसकी वास्तविक चाल है:",
                options: ["(1) 4 m/s", "(2) 2 m/s", "(3) 5 m/s", "(4) 10 m/s"],
                correct: 2,
                explanation: "K₂/K₁ = (v + 1)² / v² = 1.44. Taking square root: (v + 1)/v = 1.2 ⇒ v = 5 m/s."
            },
            {
                id: 15,
                subject: "Physics",
                q: "A child is standing with folded hands at the centre of a platform rotating about its central axis. The kinetic energy of the system is K. The child now stretches his arms so that the moment of inertia of the system doubles. The kinetic energy of the system now is:",
                options: ["(1) 2 K", "(2) K/2", "(3) K/4", "(4) 4K"],
                correct: 1,
                explanation: "By conservation of angular momentum (L² / 2I), when moment of inertia I doubles, kinetic energy K becomes K/2."
            },
            {
                id: 16,
                subject: "Physics",
                q: "A circular platform is free to rotate in a horizontal plane... When the tortoise moves along a chord of the platform with a constant velocity, the angular velocity of the platform will vary with time t as:",
                options: ["(1) Parabolic curve starting at ω₀", "(2) U-shaped curve decreasing then increasing", "(3) Constant line", "(4) Linear increase"],
                correct: 1,
                explanation: "As the tortoise moves towards the center of the chord, distance from axis decreases then increases, causing moment of inertia to first decrease then increase, making angular velocity follow a U-shaped curve."
            },
            {
                id: 17,
                subject: "Physics",
                q: "The structure made from two identical rods each of mass M is shown in figure, the moment of inertia of given structure about an axis passing through yy' is:",
                options: ["(1) 2ML²/3", "(2) ML²/3", "(3) 8ML²/3", "(4) 4ML²/3"],
                correct: 3,
                explanation: "Using parallel and perpendicular axis theorems for the two rods about the symmetry axis yy', the total moment of inertia evaluates to 4ML²/3."
            },
            {
                id: 18,
                subject: "Physics",
                q: "प्रारम्भिक में विराम में स्थित दो कण A तथा B अन्योन्य आकर्षण बल के प्रभाव में एक-दूसरे की ओर गति करते हैं। किसी क्षण पर कण A की चाल v तथा कण B की चाल 2v है, तो निकाय के द्रव्यमान केन्द्र की चाल होगी:",
                options: ["(1) शून्य", "(2) v", "(3) 1.5 v", "(4) 3v"],
                correct: 0,
                explanation: "Since no external forces act on the system, the velocity of the centre of mass remains zero throughout."
            },
            {
                id: 19,
                subject: "Physics",
                q: "A uniform metal disc of radius R is taken and out of it a disc of diameter R/2 is cut off from the end. The moment of inertia of the remaining part about an axis passing through center O and perpendicular to the plane of disc will be:",
                options: ["(1) (255/256) MR²", "(2) (235/256) MR²", "(3) (255/512) MR²", "(4) (237/512) MR²"],
                correct: 0,
                explanation: "Using mass redistribution and parallel axis theorem for the removed circular cutout, the remaining moment of inertia is (255/256) MR²."
            },
            {
                id: 20,
                subject: "Physics",
                q: "Consider the situations shown in the figure. In case (A), a string is pulled with 2mg force. In case (B), the string is connected to a block of mass 2m. If α_A and α_B are angular accelerations:",
                options: ["(1) α_A > α_B", "(2) α_A < α_B", "(3) α_A = α_B", "(4) α_A = 2α_B / 7"],
                correct: 0,
                explanation: "In case A, tension is 2mg directly. In case B, tension is less due to downward acceleration of block 2m. Hence α_A > α_B."
            },
            {
                id: 21,
                subject: "Physics",
                q: "L लम्बाई एवं M द्रव्यमान की एक चिकनी एक-समान छड़ पर दो समान आकार के मोती रखें हैं... जब मोती छड़ के सिरों पर पहुंच जाते हैं, तो निकाय का कोणीय वेग हो जायेगा:",
                options: ["(1) Mω₀ / (M + 6m)", "(2) Mω₀ / (6M + m)", "(3) mω₀ / (M + 6m)", "(4) mω₀ / (6M + m)"],
                correct: 0,
                explanation: "By conservation of angular momentum I₁ω₁ = I₂ω₂, solving with initial and final moments of inertia gives Mω₀ / (M + 6m)."
            },
            {
                id: 22,
                subject: "Physics",
                q: "A rod of weight W is supported by two parallel knife edges A and B... The normal reactions on A and B are:",
                options: ["(1) W(d-x)/d and Wx/d", "(2) Wx/d and W(d-x)/d", "(3) W/2 and W/2", "(4) W(d-x)/x and Wd/x"],
                correct: 0,
                explanation: "Taking torque balance about each knife edge yields normal reactions W(d-x)/d at A and Wx/d at B."
            },
            {
                id: 23,
                subject: "Physics",
                q: "Shown in the figure is rigid and uniform 1m long rod AB held in horizontal position... The tension in the string at A is:",
                options: ["(1) mg", "(2) 2mg", "(3) 0.75mg", "(4) 0.5mg"],
                correct: 3,
                explanation: "Taking torque about point B for equilibrium, the tension at string A evaluates to 0.5mg."
            },
            {
                id: 24,
                subject: "Physics",
                q: "A small hollow sphere is released from rest at point A on a frictionless track... On reaching point B, the speed of solid sphere will be (g = 10 m/s²):",
                options: ["(1) √(30) m/s", "(2) √(50) m/s", "(3) √(10) m/s", "(4) √(20) m/s"],
                correct: 1,
                explanation: "Using conservation of mechanical energy mgh = ½mv² (since track is frictionless, standard height difference Δh = 5 - 2.5 = 2.5m gives v = √(2gΔh) = √(50) m/s)."
            },
            {
                id: 25,
                subject: "Physics",
                q: "A non-uniform thin rod of length L is placed along the x-axis... The linear mass density is λ = λ₀x². The distance of centre of mass of rod from the origin is:",
                options: ["(1) L/3", "(2) 2L/3", "(3) L/4", "(4) 3L/4"],
                correct: 1,
                explanation: "X_cm = ∫(x · λ dx) / ∫(λ dx) = ∫(x³ dx) / ∫(x² dx) = (L⁴/4) / (L³/3) = 3L/4."
            },
            {
                id: 26,
                subject: "Physics",
                q: "Three uniform spheres of mass M and radius R, each are kept in such a way that each touches the other two. The magnitude of the gravitational force on any of the sphere due to the other two is:",
                options: ["(1) (√3/4) GM²/R²", "(2) (3/2) GM²/R²", "(3) √3 GM²/R²", "(4) (√3/2) GM²/R²"],
                correct: 3,
                explanation: "Each sphere is at distance 2R from the other two, forming an equilateral triangle of side 2R. The resultant of two forces at 60° is √3 times individual force GM²/(2R)² = (√3/2) GM²/R²."
            },
            {
                id: 27,
                subject: "Physics",
                q: "किसी ग्रह का व्यास एवं द्रव्यमान पृथ्वी के व्यास एवं द्रव्यमान का दुगुना है, तो ग्रह की सतह पर लोलक का आवर्तकाल पृथ्वी सतह पर आवर्तकाल का कितना गुना होगा:",
                options: ["(1) 1/√2 गुना", "(2) √2 गुना", "(3) बराबर होगा", "(4) इनमें से कोई नहीं"],
                correct: 1,
                explanation: "g = GM/R². Since M'=2M and R'=2R, g' = G(2M)/(2R)² = g/2. Time period T ∝ 1/√g, so T' = √2 T."
            },
            {
                id: 28,
                subject: "Physics",
                q: "Weight of a body of mass m decreases by 1% when it is raised to height h above the earth's surface. If the body is taken to a depth h in a mine, then its weight will:",
                options: ["(1) decrease by 0.5%", "(2) decrease by 2%", "(3) increase by 0.5%", "(4) increase by 1%"],
                correct: 0,
                explanation: "At height h, Δw/w = 2h/R = 1% ⇒ h/R = 0.5%. At depth h, Δw/w = h/R = 0.5% decrease."
            },
            {
                id: 29,
                subject: "Physics",
                q: "If M_e is the mass of Earth and M_m is the mass of Moon (M_e = 81 M_m)... The potential energy of an object of mass m situated at a distance R from the centre of Earth and r from the centre of Moon will be:",
                options: ["(1) -GmM_m (R/81 + r) / R²", "(2) -GmM_e (81/r + 1/R)", "(3) -GmM_m (81/R + 1/r)", "(4) GmM_m (81/R - 1/r)"],
                correct: 2,
                explanation: "Potential energy is the sum of gravitational potential energies from both bodies: -GmM_e/R - GmM_m/r. Substituting M_e = 81 M_m gives -GmM_m(81/R + 1/r)."
            },
            {
                id: 30,
                subject: "Physics",
                q: "The orbital velocity of an artificial satellite in a circular orbit just above the Earth's surface is v₀. The orbital velocity of satellite orbiting at an altitude equal to half of the Earth's radius is:",
                options: ["(1) (3/2) v₀", "(2) (2/3) v₀", "(3) √(2/3) v₀", "(4) √(3/2) v₀"],
                correct: 2,
                explanation: "Orbital velocity v = √(GM/(R+h)). For h = R/2, v = √(GM/(1.5R)) = √(2/3) v₀."
            },
            {
                id: 31,
                subject: "Physics",
                q: "A satellite of earth of mass 'm' is moved from an orbital radius of 2R to 3R, then the minimum work done is:",
                options: ["(1) GMm / 6R", "(2) GMm / 12R", "(3) GMm / 24R", "(4) GMm / 3R"],
                correct: 1,
                explanation: "Work done = E₂ - E₁ = (-GMm / 2(3R)) - (-GMm / 2(2R)) = GMm/R (1/4 - 1/6) = GMm / 12R."
            },
            {
                id: 32,
                subject: "Physics",
                q: "यदि g पृथ्वी की सतह पर गुरुत्वाकर्षण के कारण त्वरण है, तो स्थितिज ऊर्जा में वृद्धि होती है यदि m द्रव्यमान की एक वस्तु को पृथ्वी की सतह से पृथ्वी की त्रिज्या R की ऊँचाई तक उठाया गया है:",
                options: ["(1) mgR", "(2) 2 mgR", "(3) ½ mgR", "(4) ¼ mgR"],
                correct: 2,
                explanation: "ΔU = mgh / (1 + h/R). For h = R, ΔU = mgR / 2 = ½ mgR."
            },
            {
                id: 33,
                subject: "Physics",
                q: "A body weighs 48 N on the surface of the Earth. The gravitational force experienced by the body due to the Earth at a height equal to one-third the radius of the Earth from its surface is:",
                options: ["(1) 16 N", "(2) 27 N", "(3) 32 N", "(4) 36 N"],
                correct: 1,
                explanation: "F = mg' = mg / (1 + h/R)² = 48 / (1 + 1/3)² = 48 / (16/9) = 27 N."
            },
            {
                id: 34,
                subject: "Physics",
                q: "The area of cross-section of a wire of length 1.1 meter is 1 mm²... If Young's modulus of copper is 1.1 × 10¹¹ N/m², then the increase in length will be (g = 10 m/s²):",
                options: ["(1) 0.01 mm", "(2) 0.075 mm", "(3) 0.1 mm", "(4) 0.15 mm"],
                correct: 2,
                explanation: "ΔL = FL / (AY) = (mgL)/(AY) = (1 × 10 × 1.1) / (10⁻⁶ × 1.1 × 10¹¹) = 10⁻⁴ m = 0.1 mm."
            },
            {
                id: 35,
                subject: "Physics",
                q: "The load versus elongation graph for four wires of the same materials is shown in the figure. The thinnest wire is represented by the line:",
                options: ["(1) OC", "(2) OD", "(3) OA", "(4) OB"],
                correct: 2,
                explanation: "Slope of Load vs Elongation graph is proportional to A/L. For same length and material, smaller slope means smaller cross-sectional area (thinnest wire), which corresponds to line OA."
            },
            {
                id: 36,
                subject: "Physics",
                q: "यदि स्प्रिंग की स्थितिज ऊर्जा U हैं। जब इसे 2 cm खींचा जाता हैं। जब इसे 10 cm खींचा जाए तब इसकी स्थितिज ऊर्जा होगी:",
                options: ["(1) U / 25", "(2) 5 U", "(3) U / 5", "(4) 25 U"],
                correct: 3,
                explanation: "U ∝ x². When extension increases from 2 cm to 10 cm (5 times), potential energy increases by factor of 5² = 25U."
            },
            {
                id: 37,
                subject: "Physics",
                q: "The elastic energy stored in a wire of Young's modulus Y is:",
                options: ["(1) Y × (Strain)² / Volume", "(2) Stress × Strain × Volume", "(3) (Stress² × Volume) / (2Y)", "(4) ½ × Y × Stress × Strain × Volume"],
                correct: 2,
                explanation: "Energy density = ½ × Stress × Strain = Stress² / (2Y). Multiplying by volume gives (Stress² × Volume) / (2Y)."
            },
            {
                id: 38,
                subject: "Physics",
                q: "Assertion (A): The stretching of a spring is determined by the shear modulus of the material of the spring.\nReason (R): A coil spring made of copper has more tensile strength than steel spring of same dimensions.",
                options: ["(1) (A) is true but (R) is false", "(2) (A) is false but (R) is true", "(3) Both (A) and (R) are true and (R) is correct explanation", "(4) Both (A) and (R) are true and (R) is not correct explanation"],
                correct: 0,
                explanation: "Stretching of a coil spring involves twisting/shearing of wire, governed by shear modulus. Steel has higher tensile strength than copper, making Reason false."
            },
            {
                id: 39,
                subject: "Physics",
                q: "A metallic bar with Young's modulus 0.5 × 10¹¹ Nm⁻², coefficient of linear thermal expansion 10⁻⁵ °C⁻¹, length 1 m and area 10⁻³ m² is heated from 0°C to 100°C. The compressive force developed in it is:",
                options: ["(1) 5 × 10³ N", "(2) 50 × 10³ N", "(3) 100 × 10³ N", "(4) 2 × 10³ N"],
                correct: 0,
                explanation: "F = YAαΔT = (0.5 × 10¹¹) × 10⁻³ × 10⁻⁵ × 100 = 5 × 10³ N."
            },
            {
                id: 40,
                subject: "Physics",
                q: "पानी के टैंक के तल पर दबाव 3P है जहाँ P वायुमंडलीय दाब है। यदि पानी को तब तक निकाला जाता है जब तक पानी का स्तर 1/5 कम नहीं हो जाता है, टैंक के तल पर दाब अब होगा:",
                options: ["(1) 2P", "(2) (13/5) P", "(3) (8/5) P", "(4) (4/5) P"],
                correct: 1,
                explanation: "Initial pressure P_bottom = P + ρgh = 3P ⇒ ρgh = 2P. When water level decreases by 1/5, remaining height is 4/5 h. New pressure = P + ρg(4h/5) = P + (4/5)(2P) = 13P/5."
            },
            {
                id: 41,
                subject: "Physics",
                q: "The area of cross-section of the wider tube shown in figure is 800 cm². If a mass of 12 kg is placed on the massless piston, the difference in heights h of the level of water in the two tubes is:",
                options: ["(1) 10 cm", "(2) 15 cm", "(3) 6 cm", "(4) 2 cm"],
                correct: 0,
                explanation: "Pressure due to mass equals liquid column height: mg/A = ρgh ⇒ (12 × 10) / (800 × 10⁻⁴) = 1000 × 10 × h ⇒ h = 0.1 m = 10 cm."
            },
            {
                id: 42,
                subject: "Physics",
                q: "An oil drop falls through air with a terminal velocity of 5 × 10⁻⁴ m/s... The radius of the drop will be:",
                options: ["(1) 2.5 × 10⁻⁶ m", "(2) 2 × 10⁻⁶ m", "(3) 3 × 10⁻⁶ m", "(4) 4 × 10⁻⁶ m"],
                correct: 1,
                explanation: "Using Stokes' law formula for terminal velocity v = 2r²(ρ - σ)g / (9η), substituting values yields r = 2 × 10⁻⁶ m."
            },
            {
                id: 43,
                subject: "Physics",
                q: "Three liquids of densities ρ₁, ρ₂ and ρ₃ (ρ₁ > ρ₂ > ρ₃), having same surface tension T, rise to same height in three identical capillaries. The angles of contact θ₁, θ₂ and θ₃ obey:",
                options: ["(1) π/2 < θ₁ < θ₂ < θ₃ < π", "(2) π > θ₁ > θ₂ > θ₃ > π/2", "(3) π/2 > θ₁ > θ₂ > θ₃ ≥ 0", "(4) 0 ≤ θ₁ < θ₂ < θ₃ < π/2"],
                correct: 1,
                explanation: "Height h = 2T cosθ / (rρg). Since h, T, r are constant, ρ cosθ is constant. Since ρ₁ > ρ₂ > ρ₃, we must have cosθ₁ < cosθ₂ < cosθ₃, meaning angles follow π > θ₁ > θ₂ > θ₃ > π/2."
            },
            {
                id: 44,
                subject: "Physics",
                q: "A cubical copper block has each side 2.0 cm... submerged in oil of density 820 kg/m³. The tension in the string is (copper density = 8920 kg/m³, g = 10 m/s²):",
                options: ["(1) 0.648 N", "(2) 0.712 N", "(3) 0.066 N", "(4) 1.37 N"],
                correct: 0,
                explanation: "T = Apparent weight = W - Buoyant force = V(ρ_cu - ρ_oil)g = (2×10⁻²)³ (8920 - 820) × 10 = 0.648 N."
            },
            {
                id: 45,
                subject: "Physics",
                q: "The amount of energy required to form a soap bubble of radius 2 cm from a soap solution is approximately (surface tension = 0.03 N/m):",
                options: ["(1) 5.06 × 10⁻⁴ J", "(2) 3.01 × 10⁻⁴ J", "(3) 50.1 × 10⁻⁴ J", "(4) 30.16 × 10⁻⁴ J"],
                correct: 1,
                explanation: "Soap bubble has 2 free surfaces: W = T × 2(4πr²) = 0.03 × 2 × 4 × 3.1416 × (0.02)² = 3.01 × 10⁻⁴ J."
            }
        ]
    }
};
