# Math Olympiad Preparation: Exhaustive Topic List by Grade (5–12)

> **Scope:** This document covers everything a student needs to know at each grade level to compete at **national** (e.g., AMC, MATHCOUNTS, AIME, USAMO, national olympiads) and **international** (IMO) levels. Topics are organized by grade, then by the four core pillars: **Number Theory, Algebra, Geometry, and Combinatorics**. Each grade builds on all previous grades — nothing is removed, only added.
>
> **Tier notation used:**
> - ✅ **Required** — prerequisite knowledge all contestants must know
> - 🔵 **Useful** — often helpful; encouraged but sometimes avoidable
> - 🔶 **Advanced** — needed for hardest problems; learn after mastering required topics
> - ❌ **Out of scope** — not expected at standard IMO level

## Project Usage

This document is the syllabus guide for olympiad content. It is not the output format.

When an agent is asked to add olympiad-level content to the app, it must translate this syllabus into Lithuanian app content JSON split by grade and specific olympiad topic. Grade is used for grouping and filtering. The visible learning cards in `Teorija` and `Praktika` must be concrete topics, not one whole-grade page.

Canonical output paths use this pattern:

```txt
content/generated/{grade}/olimpiada-{grade}-{track_slug}.json
```

Examples:

```txt
content/generated/09/olimpiada-09-skaiciu-teorija.json
content/generated/09/olimpiada-09-algebra.json
content/generated/09/olimpiada-09-funkcijos.json
content/generated/09/olimpiada-09-geometrija.json
content/generated/09/olimpiada-09-kombinatorika.json
```

Old whole-grade names such as `olimpiada-09.json` may exist only as migration aliases or lightweight overview/navigation files. They must not contain all theory and all exercises for the grade as the primary student-facing topic.

Use this file to decide what topics and methods belong in each grade. Use `OLYMPIAD_EXERCISE_AUTHORING_GUIDE.md` to decide how each problem, solution, hint sequence, prerequisite list, mistake analysis, and SRS seed must be authored. Use `CONTENT_AUTHORING_GUIDE.md` for the shared JSON schema.

Do not create generator scripts, parser scripts, extraction scripts, or temporary automation as the deliverable. The deliverable is finished Lithuanian JSON content in topic-specific files.

---

## Grade 5

*Target: Junior/beginner olympiad level. AMC 8 early problems, MATHCOUNTS School round.*

### Number Theory
- ✅ Place value, reading and writing large integers
- ✅ Divisibility rules (2, 3, 4, 5, 6, 8, 9, 10, 11)
- ✅ Factors and multiples
- ✅ Greatest Common Divisor (GCD) and Least Common Multiple (LCM) — by listing
- ✅ Prime and composite numbers; identifying primes up to 100
- ✅ Even and odd numbers; parity of sums and products
- ✅ Simple integer word problems (age puzzles, coin problems)

### Algebra & Arithmetic
- ✅ Order of operations (PEMDAS/BODMAS)
- ✅ Fractions: addition, subtraction, multiplication, division
- ✅ Decimals and percentages; conversion between all three
- ✅ Ratios and simple proportions
- ✅ Patterns and sequences (arithmetic sequences: identify the rule, find the next term)
- ✅ Simple linear equations with one unknown (e.g., `3x + 5 = 20`)
- ✅ Word problems involving distance, rate, time (d = rt at introductory level)

### Geometry
- ✅ Points, lines, line segments, rays
- ✅ Types of angles: acute, right, obtuse, straight, reflex
- ✅ Angle relationships: complementary, supplementary, vertical angles
- ✅ Triangles: classification by sides (equilateral, isosceles, scalene) and angles
- ✅ Quadrilaterals: square, rectangle, rhombus, parallelogram, trapezoid — properties
- ✅ Perimeter of polygons
- ✅ Area of rectangles, squares, triangles, parallelograms
- ✅ Circles: radius, diameter, circumference (π introduced)
- ✅ Lines of symmetry
- ✅ Basic coordinate geometry: plotting points on a grid (Quadrant I only)

### Combinatorics & Logic
- ✅ Systematic listing and organized counting
- ✅ The Multiplication Principle (basic): if one task has m ways and another has n ways, there are m×n combinations
- ✅ Simple tree diagrams
- ✅ Basic probability: equally likely outcomes; P = favorable/total
- ✅ Logical puzzles: truth/false statements, simple deduction
- ✅ Venn diagrams with two sets

---

## Grade 6

*Target: AMC 8 (all problems), MATHCOUNTS School & Chapter rounds.*

### Number Theory
- ✅ Prime factorization using factor trees
- ✅ GCD and LCM using prime factorization
- ✅ Fundamental theorem of arithmetic (every integer > 1 has a unique prime factorization)
- ✅ Perfect squares and perfect cubes
- ✅ Square roots of perfect squares
- ✅ Divisibility by composite numbers (e.g., by 12, 15, 18)
- ✅ Number of divisors of a number from its prime factorization
- ✅ Sum of divisors (introductory)

### Algebra & Arithmetic
- ✅ Negative integers and the number line; absolute value
- ✅ Operations with negative numbers
- ✅ Exponents and powers: base, exponent notation
- ✅ Scientific notation (basic)
- ✅ Evaluating algebraic expressions by substitution
- ✅ One- and two-step equations and inequalities
- ✅ Ratio problems (scaling, map problems, unit rates)
- ✅ Percentage: increase, decrease, profit/loss
- ✅ Simple and compound proportion (cross-multiplication)
- ✅ Average (mean), median, mode, range

### Geometry
- ✅ Area of circles (`A = πr²`)
- ✅ Area and perimeter of composite figures (combinations of rectangles, triangles, circles)
- ✅ Introduction to 3D solids: cube, rectangular prism, cylinder, cone, sphere
- ✅ Surface area and volume of cubes and rectangular prisms
- ✅ Coordinate geometry: all four quadrants, distance between horizontal/vertical points
- ✅ Transformations: reflection, translation, rotation (intuitive understanding)
- ✅ The Pythagorean theorem (statement and application, not proof)
- ✅ Introduction to congruence: same shape and size

### Combinatorics & Logic
- ✅ Permutations: counting ordered arrangements (factorial notation `n!`)
- ✅ Combinations: unordered selections `C(n,k)` formula introduced
- ✅ Probability: independent events, P(A and B) = P(A)·P(B)
- ✅ Probability: mutually exclusive events, P(A or B) = P(A) + P(B)
- ✅ Complementary counting: P(not A) = 1 - P(A)
- ✅ Venn diagrams with two and three sets; inclusion-exclusion at the counting level

---

## Grade 7

*Target: AMC 8 top scores, MATHCOUNTS State round, entry-level national olympiad.*

### Number Theory
- ✅ Modular arithmetic: the concept of remainders; `a ≡ b (mod m)` notation
- ✅ Casting out nines and casting out elevens
- ✅ Integer sequences: triangular numbers, Fibonacci numbers, perfect numbers
- ✅ Euclidean algorithm for GCD
- ✅ Relative primes (coprimality)
- ✅ Floor and ceiling functions (⌊x⌋ and ⌈x⌉)

### Algebra
- ✅ Linear equations in two variables; systems of two linear equations (substitution, elimination)
- ✅ Introduction to quadratic expressions: expanding `(a+b)²`, `(a-b)²`, `(a+b)(a-b)`
- ✅ Factoring simple quadratics: `x² + bx + c = (x+p)(x+q)`
- ✅ Ratio and proportion: direct and inverse proportion
- ✅ Arithmetic sequences: general term `aₙ = a₁ + (n-1)d` and sum formula
- ✅ Geometric sequences: general term `aₙ = a₁·rⁿ⁻¹` and sum formula
- ✅ Absolute value equations and inequalities
- ✅ Introduction to functions: domain, range, vertical line test

### Geometry
- ✅ Triangle properties: sum of angles = 180°; exterior angle theorem
- ✅ The Pythagorean theorem and its converse; special right triangles (30-60-90, 45-45-90)
- ✅ Similar triangles: AA, SAS, SSS similarity criteria
- ✅ Properties of parallel lines cut by a transversal (alternate interior, corresponding angles)
- ✅ Angle bisectors and perpendicular bisectors
- ✅ Introduction to circles: central angle, inscribed angle (inscribed angle = ½ central angle)
- ✅ Tangent to a circle; tangent-radius perpendicularity
- ✅ Volume and surface area of cylinders, cones, spheres
- ✅ Coordinate geometry: slope, slope-intercept form `y = mx + b`
- ✅ Midpoint formula; distance formula
- ✅ Intro to transformations with coordinates

### Combinatorics & Logic
- ✅ Permutations with repetition; circular permutations
- ✅ Pascal's triangle; reading off binomial coefficients
- ✅ Binomial theorem for small exponents
- ✅ The pigeonhole principle (basic applications)
- ✅ Principle of Mathematical Induction (introductory — understanding the concept)
- ✅ Conditional probability: P(A | B) = P(A and B) / P(B)
- ✅ Expected value (basic)

---

## Grade 8

*Target: AMC 8 perfect score, AMC 10 (early problems), MATHCOUNTS National, regional olympiad rounds.*

### Number Theory
- ✅ Linear Diophantine equations: `ax + by = c`; conditions for integer solutions (Bézout's identity)
- ✅ Modular arithmetic operations: addition, subtraction, multiplication mod m
- ✅ Fermat's Little Theorem (statement): `aᵖ ≡ a (mod p)` for prime p
- ✅ Wilson's Theorem (statement): `(p-1)! ≡ -1 (mod p)` for prime p
- ✅ Chinese Remainder Theorem (CRT) — basic two-equation form
- ✅ Perfect numbers, amicable numbers (recognition)
- ✅ p-adic valuation basics: `νₚ(n)` = exponent of prime p in n
- ✅ Base representations: converting between base 10, base 2, base 8, base 16

### Algebra
- ✅ Quadratic formula; discriminant; nature of roots
- ✅ Vieta's formulas for quadratics: `x₁ + x₂ = -b/a`, `x₁x₂ = c/a`
- ✅ Factoring: sum/difference of cubes, grouping
- ✅ Polynomial long division
- ✅ Rational expressions: simplification, addition, multiplication
- ✅ Logarithms: definition, change of base, log rules
- ✅ Exponential equations; solving `aˣ = b`
- ✅ Completing the square
- ✅ Systems of equations: three variables (Gaussian elimination basics)
- ✅ Arithmetic and geometric series (infinite geometric series)
- ✅ Sequences defined by recurrence relations (e.g., Fibonacci)

### Geometry
- ✅ Coordinate geometry: equation of circle `(x-h)² + (y-k)² = r²`
- ✅ Properties of quadrilaterals in depth (diagonals, area formulas)
- ✅ Introduction to trigonometry: sine, cosine, tangent in right triangles; SOH-CAH-TOA
- ✅ Heron's formula for triangle area
- ✅ Circumradius formula: `R = abc/(4K)` where K = area
- ✅ Angles in a circle: central, inscribed, tangent-chord, chord-chord, secant-secant
- ✅ Power of a Point theorem
- ✅ Introduction to similarity ratios in areas and volumes
- ✅ Euler's line (centroid, circumcenter, orthocenter are collinear)
- ✅ Nine-point circle (existence and basic properties)
- 🔵 Trigonometric identities: Pythagorean, double-angle (sin 2θ, cos 2θ)

### Combinatorics
- ✅ Principle of Inclusion-Exclusion (PIE) for 2 and 3 sets
- ✅ Stars and bars method (distributing identical objects into distinct bins)
- ✅ Recursion and recurrence relations (solving linear recurrences)
- ✅ Mathematical induction: writing formal induction proofs
- ✅ Probability: geometric probability
- ✅ Expected value: computing with finite sample spaces
- ✅ Basic graph theory: vertices, edges, degree, paths, cycles, connected components
- ✅ Handshake lemma: sum of degrees = 2 × number of edges

---

## Grade 9

*Target: AMC 10 high scores / AMC 12 mid-level, AIME qualification, national olympiad first round.*

### Number Theory
- ✅ Euler's Totient function `φ(n)`: formula and properties
- ✅ Euler's theorem: `aᵠ⁽ⁿ⁾ ≡ 1 (mod n)` when gcd(a,n) = 1
- ✅ Chinese Remainder Theorem (full statement for k equations)
- ✅ Multiplicative functions: `φ`, `τ` (number of divisors), `σ` (sum of divisors)
- ✅ Legendre's formula for the exponent of prime p in n!
- ✅ Basic Diophantine equations: `x² - dy² = 1` (Pell's equation — recognition)
- ✅ Quadratic residues: when is `x² ≡ a (mod p)` solvable?
- ✅ Orders modulo n; primitive roots
- 🔵 Lifting the Exponent Lemma (LTE): `νₚ(aⁿ ± bⁿ)` formulas
- 🔵 Zsygmondy's theorem (statement)
- 🔵 Sum and number of divisors: explicit formulas using prime factorization

### Algebra
- ✅ Polynomials in one variable: roots, Factor Theorem, Remainder Theorem
- ✅ Vieta's formulas for polynomials of degree n
- ✅ Rational Root Theorem
- ✅ Fundamental Theorem of Algebra (statement)
- ✅ Complex numbers: definition `i = √(-1)`, arithmetic, modulus, argument
- ✅ Polar form of complex numbers; De Moivre's theorem
- ✅ AM-GM inequality: statement and basic applications
- ✅ Cauchy-Schwarz inequality: statement and basic applications
- ✅ Absolute value inequalities (piecewise analysis)
- ✅ Functional equations: basic types (Cauchy's equation `f(x+y) = f(x)+f(y)`)
- ✅ Sum notation (Σ) and product notation (Π); telescoping sums
- ✅ Introduction to proof writing: direct proof, proof by contradiction, proof by contrapositive
- 🔵 Rearrangement inequality
- 🔵 Chebyshev's inequality
- 🔵 Power Mean inequality (QM ≥ AM ≥ GM ≥ HM)

### Geometry
- ✅ Trigonometry: Law of Sines, Law of Cosines
- ✅ Extended Law of Sines: `a/sin A = 2R`
- ✅ Triangle centers in depth: incenter, circumcenter, centroid, orthocenter
- ✅ Ceva's theorem and its converse
- ✅ Menelaus' theorem
- ✅ Angle bisector theorem
- ✅ Ptolemy's theorem on cyclic quadrilaterals
- ✅ Stewart's theorem
- ✅ Radical axis and radical center of circles
- ✅ Homothety (definition, center of homothety, application to tangent circles)
- ✅ Directed angles (mod 180°) — essential for clean angle-chasing proofs
- 🔵 Trigonometric form of Ceva's theorem
- 🔵 Simson line
- 🔵 Isogonal conjugates (definition and basic properties)
- 🔵 Coordinate bash: using algebra/coordinates to solve geometry problems

### Combinatorics
- ✅ Generating functions (introduction): ordinary generating functions for simple sequences
- ✅ Catalan numbers: definition, formula, and combinatorial interpretations
- ✅ Stirling numbers of the second kind (introduction)
- ✅ Ramsey theory (R(3,3) = 6 and basic Ramsey numbers)
- ✅ Graph theory: bipartite graphs, trees, Euler circuits (Eulerian graph criteria)
- ✅ Graph coloring: chromatic number basics
- ✅ Invariants and monovariants in combinatorial problems
- ✅ Game theory: Nim, Sprague-Grundy theorem (introductory)
- 🔵 Hall's Marriage Theorem (statement and simple application)
- 🔵 Double counting (counting pairs or triples in two ways)

---

## Grade 10

*Target: AMC 12 high scores, AIME mid-level (problems 6–10), USAJMO qualification.*

### Number Theory
- ✅ Quadratic reciprocity law (Legendre symbol computation)
- ✅ Gaussian integers: basic properties, norms, primes in Z[i]
- ✅ Proof of Fermat's theorem on sums of two squares
- ✅ Continued fractions (finite): Euclidean algorithm connection, convergents
- ✅ Pell's equation: finding fundamental solution, generating solutions
- ✅ Strong induction and the well-ordering principle applied to number theory proofs
- 🔵 Lifting the Exponent (LTE) full proof and applications
- 🔵 Bertrand's Postulate (statement: there is always a prime between n and 2n)
- 🔵 Arithmetic functions and Möbius inversion formula

### Algebra
- ✅ Polynomials in two or more variables: symmetric polynomials
- ✅ Newton's identities (power sums in terms of elementary symmetric polynomials)
- ✅ Inequalities: advanced AM-GM, weighted AM-GM
- ✅ Cauchy-Schwarz in Engel/Sedrakyan form (Titu's lemma)
- ✅ Jensen's inequality (convex/concave functions)
- ✅ Schur's inequality (statement and application)
- ✅ Muirhead's inequality (statement and when to apply vs. SOS)
- ✅ Functional equations: advanced techniques (substitution, finding symmetry, monotonicity arguments)
- ✅ Real analysis concepts (intuitive): monotone functions, intermediate value concept
- ✅ Algebraic identities: Sophie Germain, sum of cubes generalizations
- 🔵 Hölder's inequality
- 🔵 Minkowski's inequality
- 🔵 SOS (Sum of Squares) decomposition for proving inequalities
- 🔶 Generating functions for solving recurrences (exponential generating functions)

### Geometry
- ✅ Inversive geometry: definition of inversion in a circle, distance formula under inversion
- ✅ Inversion applied to: tangent circles, coaxial circles, Apollonius circle problems
- ✅ Complex number geometry: representing points as complex numbers, rotations, reflections
- ✅ Barycentric coordinates: definition, expressing triangle centers, collinearity condition
- ✅ Projective geometry introduction: cross-ratio, harmonic division
- ✅ Pascal's theorem (hexagon inscribed in a conic)
- ✅ Brianchon's theorem
- ✅ Spiral similarity: definition, composition of rotations and homotheties
- ✅ Miquel's theorem and Miquel point
- ✅ Symmedians and the symmedian point
- ✅ Incenter-excenter lemma (arc midpoints)
- 🔵 Poles and polars in a circle (projective duality)
- 🔵 Brocard points and Brocard angle
- 🔵 Harmonic bundles and harmonic quadrilaterals

### Combinatorics
- ✅ Advanced graph theory: Turán's theorem, extremal graph theory basics
- ✅ Ramsey theory: R(m,n) bounds, probabilistic method introduction
- ✅ Inclusion-Exclusion: Möbius function on posets
- ✅ Burnside's lemma / Pólya enumeration theorem (counting under symmetry)
- ✅ Bijections as a proof technique (constructing explicit bijections)
- ✅ Catalan number generating function derivation
- ✅ Planar graphs: Euler's formula `V - E + F = 2`, Kuratowski's theorem
- ✅ Coloring proofs: using 2-colorings, proper colorings as contradiction tools
- 🔵 Dilworth's theorem (chains and antichains in posets)
- 🔵 Linear algebra in combinatorics: rank arguments, dimension counting
- 🔵 Probabilistic method basics

---

## Grade 11

*Target: AIME top scores (problems 10–15), USAMO, IMO preliminary rounds.*

### Number Theory
- ✅ Full proof and mastery of Chinese Remainder Theorem
- ✅ Orders and primitive roots: existence, counting, properties
- ✅ Index calculus (discrete logarithms modulo p)
- ✅ Quadratic reciprocity: full proof understanding
- ✅ Jacobi symbol
- ✅ Waring's problem and representation of integers (awareness)
- ✅ Zsygmondy's theorem (proof sketch)
- ✅ p-adic valuation and the ultrametric inequality
- 🔵 Statement of Dirichlet's theorem on primes in arithmetic progressions
- 🔵 Fermat's theorem on sums of two squares (proof via Gaussian integers)
- 🔵 Vinogradov's theorem (statement: every large odd number is a sum of three primes)

### Algebra
- ✅ Polynomials: irreducibility criteria (Eisenstein, mod p reduction)
- ✅ Roots of unity: nth roots, cyclotomic polynomials (Φₙ(x))
- ✅ Chebyshev polynomials (definition, extremal property)
- ✅ Advanced functional equations: regularity conditions, characterization theorems
- ✅ Linear recurrences: characteristic polynomial method, closed-form solutions
- ✅ Trigonometric polynomial manipulation for olympiad problems
- ✅ Inequalities: full SOS, pqr method for symmetric inequalities
- ✅ Sturm's theorem (statement — counting real roots)
- 🔵 Lagrange interpolation
- 🔵 Bernstein's inequality for polynomials
- 🔶 Generating functions: advanced applications (exponential GFs, species, Pólya)
- 🔶 Formal power series manipulation

### Geometry
- ✅ Projective geometry: full treatment of cross-ratios, harmonic pencils
- ✅ Poles and polars: La Hire's theorem, Brokard's theorem
- ✅ Inversion in olympiad proofs: inversion to handle tangent lines, coaxial circles
- ✅ Moving points / projective transformations as a proof technique
- ✅ Complete quadrilaterals: Gauss-Bodenmiller theorem
- ✅ Trigonometric cevians and trig Ceva
- ✅ Mixed methods: synthetic + trigonometric + coordinate in one proof
- ✅ Geometric inequalities: Ptolemy, Erdős–Mordell, Pedoe's inequality
- ✅ Isogonal and isotomic conjugates in depth
- 🔵 Conic sections: ellipse, parabola, hyperbola (focus-directrix, eccentricity)
- 🔵 Apollonius circle problems via inversion
- 🔶 Projective transformations and duality
- 🔶 Sawayama-Thébault theorem; Cayley-Bacharach theorem

### Combinatorics
- ✅ Extremal combinatorics: Szemerédi regularity lemma (statement)
- ✅ Turán-type problems and Kruskal-Katona theorem (awareness)
- ✅ Algebraic combinatorics: polynomials over finite fields to count
- ✅ Combinatorial nullstellensatz (Alon's theorem) — application
- ✅ Advanced graph theory: Hall's theorem proof, König's theorem, matching theory
- ✅ Permanent vs. determinant; van der Waerden conjecture (Falikman-Egorychev, awareness)
- ✅ Hypergraph coloring and Hales-Jewett theorem (awareness)
- ✅ Probabilistic method: Lovász Local Lemma
- 🔵 Spectral graph theory (eigenvalue methods) basics
- 🔵 Matroids (definition and exchange axiom)
- 🔶 Algebraic methods: polynomial method, coefficient extraction

---

## Grade 12

*Target: IMO team selection, IMO gold medal level.*

### Number Theory
- ✅ All previous topics at full mastery
- ✅ Algebraic number theory (awareness): number fields, rings of integers
- ✅ Elliptic curves over finite fields (awareness — problems may reference these)
- ✅ Advanced Diophantine techniques: descent, parametrization, bounding arguments
- ✅ Vieta jumping (a powerful technique specific to olympiad number theory)
- ✅ Schur's theorem in number theory (coloring the integers)
- ✅ Application of LTE in competition problems at full depth
- 🔵 Statement of Catalan's conjecture (Mihailescu's theorem): xᵃ - yᵇ = 1
- 🔵 ABC conjecture (awareness)
- 🔶 p-adic analysis (intuition for competition problems)
- 🔶 Statement of prime number theorem and density implications

### Algebra
- ✅ All previous topics at full mastery
- ✅ Functional equations: full classification of Cauchy-type equations (under continuity, monotonicity, and no regularity condition)
- ✅ Olympiad inequality techniques: mixing variables, SOS, tangent line trick, Lagrange multipliers (intuitive)
- ✅ Polynomial problems involving roots of unity filter
- ✅ Complex analysis intuition for olympiad problems (residues awareness)
- ✅ Algebraic combinatorics: permanent of a matrix (van der Waerden problem)
- 🔵 Representation theory basics (characters, used in advanced combinatorics)
- 🔶 Real analysis: uniform convergence, measure zero sets (for advanced functional equations)
- 🔶 Analytic number theory flavor: partial summation, Dirichlet series (awareness)

### Geometry
- ✅ All previous topics at full mastery
- ✅ Moving points technique: full mastery for projective proofs
- ✅ Complex number methods for olympiad geometry at competition level
- ✅ Barycentric coordinates for full olympiad problems
- ✅ Radical axes in 3-circle and multi-circle configurations
- ✅ Mixtilinear incircles; Sawayama-Thébault; Feuerbach's theorem
- ✅ Geometric inequalities at IMO depth: Erdős–Mordell, Ptolemy equality/inequality
- 🔵 Conic section geometry for olympiad problems
- 🔶 Computational algebraic geometry flavor (awareness for exotic problems)
- ❌ Differential geometry, differential equations — NOT required at IMO level
- ❌ Solid geometry — no longer part of IMO problem set in modern era

### Combinatorics
- ✅ All previous topics at full mastery
- ✅ Full Probabilistic Method: second moment, alteration, Lovász Local Lemma with applications
- ✅ Spectral methods: adjacency matrix eigenvalues, expanders (Cheeger bound awareness)
- ✅ Algebraic methods in combinatorics: polynomial method, combinatorial nullstellensatz
- ✅ Ramsey multiplicity; anti-Ramsey theory (awareness)
- ✅ Turán-type extremal problems: Zykov symmetrization, Kruskal-Katona
- ✅ Structural results: Szemerédi's regularity lemma application
- ✅ Additive combinatorics basics: Cauchy-Davenport, Freiman's theorem (awareness)
- 🔵 Topological methods: Borsuk-Ulam theorem (statement; used in some IMO problems)
- 🔵 Algebraic topology flavor: Sperner's lemma, fixed-point arguments
- 🔶 Matroid theory for advanced exchange problems
- ❌ Algorithmic complexity — NOT expected at IMO

---

## Cross-Grade Core Skills (All Grades Must Develop)

These are meta-skills and proof techniques that are required at every level, growing in depth:

### Proof Writing
- Direct proof
- Proof by contradiction (Reductio ad absurdum)
- Proof by contrapositive
- Mathematical induction (weak, strong, structural)
- Proof by construction (exhibit an explicit example)
- Proof by exhaustion / case analysis
- Double counting arguments
- Extremal principle (consider the smallest/largest element)
- Invariant arguments (find a quantity that does not change)
- Monovariant arguments (find a quantity that strictly increases/decreases)

### Problem-Solving Strategies
- Work backwards from the desired conclusion
- Test small cases to find a pattern, then prove the pattern
- Reformulate the problem (add auxiliary lines, change variables, generalize then specialize)
- Exploit symmetry in the problem
- Identify and use the key lemma
- Exploit extremal elements (max/min argument)
- Use parity and coloring arguments
- Construct counterexamples efficiently
- Bound quantities from above and below simultaneously

### Mathematical Writing
- Precise quantifier use (∀, ∃)
- Notation: set builder, summation, product, floor/ceiling
- Writing clearly structured multi-step proofs
- Citing theorems correctly in solutions
- Knowing when a proof is complete vs. hand-wavy

---

## Excluded Topics (NOT Expected at Standard IMO Level)

> These are topics that do **not** appear (or appear extremely rarely) in standard national/international olympiad problem sets:

- ❌ Calculus (derivatives, integrals) — officially excluded; a few national olympiads may permit it
- ❌ Statistics and probability theory beyond elementary expected value
- ❌ Linear algebra (matrices, determinants) — occasionally useful but problems always have alternate solutions
- ❌ Abstract algebra (groups, rings, fields) — not directly required
- ❌ Real and complex analysis
- ❌ Differential geometry; topology (beyond Borsuk-Ulam/Sperner's at Grade 12 level)
- ❌ Numerical methods and approximations
- ❌ Solid geometry (3D) — removed from modern IMO; still appears in some national olympiads
- ❌ Statistics (mean, variance, hypothesis testing)
- ❌ Mathematical modelling
- ❌ Foundational set theory (ZFC axioms)
- ❌ Complexity theory, computability theory

---

## Recommended Resources by Level

### Grades 5–7 (Beginner)
- *Art of Problem Solving Vol. 1: The Basics* — Rusczyk & Lehoczky
- MATHCOUNTS Handbook (annual)
- AMC 8 problem archives

### Grades 7–9 (Intermediate)
- *Art of Problem Solving Vol. 2: And Beyond* — Rusczyk & Lehoczky
- *Introduction to Number Theory* — Mathew Crawford (AoPS)
- *Introduction to Counting & Probability* — David Patrick (AoPS)
- *Introduction to Geometry* — Rusczyk (AoPS)
- AMC 10/12 problem archives

### Grades 9–11 (Advanced)
- *Intermediate Algebra* — Richard Rusczyk (AoPS)
- *Intermediate Counting & Probability* — David Patrick (AoPS)
- *Intermediate Number Theory* (AoPS)
- *The Art and Craft of Problem Solving* — Paul Zeitz
- *Problem Solving Strategies* — Arthur Engel
- AIME problem archives; USAMO archives

### Grades 11–12 (Olympiad / IMO Level)
- *Mathematical Olympiad Treasures* — Andreescu & Enescu
- *Mathematical Olympiad Challenges* — Andreescu & Gelca
- *Problems from the Book* — Andreescu & Dospinescu
- *Straight from the Book* — Andreescu & Dospinescu
- *Euclidean Geometry in Mathematical Olympiads* (EGMO) — Evan Chen
- *The IMO Compendium* — Djukić et al. (complete IMO shortlist)
- Evan Chen's unofficial olympiad syllabus (evanchen.cc)
- Yufei Zhao's training handouts (yufeizhao.com)
- Past IMO problems (imo-official.org)

---

*Last updated: May 2026. Based on the IMO official problem corpus, AMC/AIME/USAMO competition syllabi, Evan Chen's unofficial olympiad syllabus, Art of Problem Solving curriculum, and established national olympiad preparation frameworks.*


> **Language Constraint:** All the content on the app must be strictly in Lithuanian. No other language should be visible in the production app.
