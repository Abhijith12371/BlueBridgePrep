import { LogicalReasoningGuide } from '../types';

export const logicalReasoningData: LogicalReasoningGuide = {
  LogicalReasoningGuide: [
    {
      TopicName: "Number & Alphabet Series",
      Concept: "Identify the next/missing number or alphabet in a sequence.",
      Tricks: [
        "Look for +n, −n, ×n, ÷n patterns.",
        "Check squares, cubes, prime numbers, Fibonacci.",
        "Convert alphabets to numbers (A=1, … Z=26)."
      ],
      Example: "2, 6, 12, 20, ? → Differences 4, 6, 8 → Next +10 = 30",
      SampleQuestions: [
        {"Question": "5, 11, 23, 47, ?", "Answer": "95"},
        {"Question": "3, 9, 27, 81, ?", "Answer": "243"},
        {"Question": "13, 17, 19, 23, ?", "Answer": "29"},
        {"Question": "A, C, F, J, O, ?", "Answer": "U"},
        {"Question": "144, 121, 100, 81, ?", "Answer": "64"},
        {"Question": "2, 3, 5, 8, 12, 17, ?", "Answer": "23"},
        {"Question": "B, D, G, K, ?", "Answer": "P"},
        {"Question": "1, 1, 2, 3, 5, 8, ?", "Answer": "13"},
        {"Question": "Z, X, U, Q, ?", "Answer": "L"},
        {"Question": "10, 20, 40, 80, ?", "Answer": "160"}
      ]
    },
    {
      TopicName: "Coding–Decoding",
      Concept: "Words or numbers are written in a coded pattern.",
      Tricks: [
        "Commonly shifting letters (+1, −1).",
        "Sometimes reverse order.",
        "Numbers often represent positions of letters."
      ],
      Example: "APPLE = BQQMF (+1 each letter).",
      SampleQuestions: [
        {"Question": "CAT = DBU → DOG = ?", "Answer": "EPH"},
        {"Question": "BOY = DQZ → GIRL = ?", "Answer": "IKTN"},
        {"Question": "415 = CAT → 514 = ?", "Answer": "BAD"},
        {"Question": "TREE = VTKG → LEAF = ?", "Answer": "NGCH"},
        {"Question": "MANGO = NBOHP → BANANA = ?", "Answer": "CBOBOB"},
        {"Question": "NOSE = OPVF → EARS = ?", "Answer": "FBST"},
        {"Question": "BOOK = CPLL → PEN = ?", "Answer": "QDM"},
        {"Question": "KING = MHQJ → QUEEN = ?", "Answer": "SWGGP"},
        {"Question": "INDIA = JOEJB → CHINA = ?", "Answer": "DIJOB"},
        {"Question": "123 = DOG, 456 = CAT → 789 = ?", "Answer": "RAT"}
      ]
    },
    {
      TopicName: "Blood Relations",
      Concept: "Questions about family relations.",
      Tricks: [
        "Draw family tree diagrams.",
        "Use symbols: Male = □, Female = ○.",
        "\"Only son/daughter\" eliminates confusion."
      ],
      Example: "\"My grandfather's only son = my father.\"",
      SampleQuestions: [
        {"Question": "A is B's mother, C is A's father, D is C's son → D is ?", "Answer": "Maternal uncle of B"},
        {"Question": "P father of Q, Q mother of R → P is ?", "Answer": "Grandfather of R"},
        {"Question": "X sister of Y, Z mother of Y → Z is ?", "Answer": "Mother of X"},
        {"Question": "Raj's uncle's daughter → ?", "Answer": "Cousin"},
        {"Question": "A sister of B, B wife of C, C brother of D → D is ?", "Answer": "Brother-in-law of A"},
        {"Question": "\"Son of my mother's brother\" → ?", "Answer": "Cousin"},
        {"Question": "\"Father's son\" → ?", "Answer": "Brother"},
        {"Question": "A father of B, B mother of C → A is ?", "Answer": "Grandfather of C"},
        {"Question": "\"Only son of grandfather\" → ?", "Answer": "Father"},
        {"Question": "A's wife's brother is B → A is ?", "Answer": "Brother-in-law of B"}
      ]
    },
    {
      TopicName: "Direction Sense",
      Concept: "Person moves in directions, find final position or distance.",
      Tricks: [
        "Use x-y axis diagram.",
        "N↑, S↓, E→, W←.",
        "Use Pythagoras for shortest distance."
      ],
      Example: "Walk 3 km north, 4 km east → Distance = 5 km.",
      SampleQuestions: [
        {"Question": "4N, 3E → ?", "Answer": "5 km"},
        {"Question": "5S, 2W → ?", "Answer": "√29 ≈ 5.4 km"},
        {"Question": "2N, 2E, 2S → ?", "Answer": "2 km East"},
        {"Question": "Facing N → right → E → right → S → ?", "Answer": "South"},
        {"Question": "3W, 4N → ?", "Answer": "5 km"},
        {"Question": "6E, 8S → ?", "Answer": "10 km"},
        {"Question": "Facing E → 90°L → N → 180°R → S → ?", "Answer": "South"},
        {"Question": "5N, 12E → ?", "Answer": "13 km"},
        {"Question": "A 10N of B, C 10E of A → BC = ?", "Answer": "√200 = 14.1 km"},
        {"Question": "10N, 10W, 10S → Net = ?", "Answer": "10 km West"}
      ]
    },
    {
      TopicName: "Seating Arrangement",
      Concept: "Linear/circular seating with given conditions.",
      Tricks: [
        "Start with fixed clue (like 'X sits between Y and Z').",
        "Try multiple arrangements, eliminate contradictions."
      ],
      Example: "\"In a circle, A between B and C.\"",
      SampleQuestions: [
        {"Question": "5 in line, A left of B, B right of C, D right of E → Middle?", "Answer": "C"},
        {"Question": "A next to B & D → Opposite A?", "Answer": "C"},
        {"Question": "6 in row, P left of Q, R right of Q, T between P & R → Middle?", "Answer": "Q"},
        {"Question": "8 in circle, A between B & C, D opposite A → Between D & C?", "Answer": "B"},
        {"Question": "4 boys + 4 girls alternating, boy at ends → 3rd?", "Answer": "Girl"},
        {"Question": "7 in circle, X between Y & Z, Z opposite A → Opposite Y?", "Answer": "Z"},
        {"Question": "Row of 5, C between A & B, D right of B → Right end?", "Answer": "D"},
        {"Question": "9 in circle, M between L & N → Right of M?", "Answer": "N"},
        {"Question": "6 in line, A left of B, B left of C, D between A & B → Order?", "Answer": "A–D–B–C"},
        {"Question": "4 in circle, A opposite B, C left of D → Next to A?", "Answer": "C & D"}
      ]
    },
    {
      TopicName: "Syllogisms",
      Concept: "Given statements, check conclusions.",
      Tricks: [
        "Use Venn diagrams.",
        "Don't assume beyond given info."
      ],
      Example: "All cats are animals. Some animals are dogs. → Conclusion: Some animals are cats (True).",
      SampleQuestions: [
        {"Question": "All pens are pencils. Some pencils are erasers → Some pens are erasers?", "Answer": "False"},
        {"Question": "All books are papers. No paper is glass → No book is glass?", "Answer": "True"},
        {"Question": "Some men are doctors. All doctors are teachers → Some men are teachers?", "Answer": "True"},
        {"Question": "All cars are bikes. All bikes are trucks → All cars are trucks?", "Answer": "True"},
        {"Question": "Some fruits are apples. Some apples are mangoes → Some fruits are mangoes?", "Answer": "Not certain"},
        {"Question": "All birds are animals. Some animals are insects → Some birds are insects?", "Answer": "Not certain"},
        {"Question": "No dog is cat. Some cats are lions → No dog is lion?", "Answer": "Not certain"},
        {"Question": "All flowers are plants. Some plants are green → Some flowers are green?", "Answer": "Not certain"},
        {"Question": "Some chairs are tables. All tables are wood → Some chairs are wood?", "Answer": "Not certain"},
        {"Question": "All men are humans. Some humans are women → Some men are women?", "Answer": "Not certain"}
      ]
    },
    {
      TopicName: "Analogy",
      Concept: "Find relationship between pair of words/numbers.",
      Tricks: [
        "Look for function, property, or category."
      ],
      Example: "\"Pen : Write :: Knife : ?\" → Cut",
      SampleQuestions: [
        {"Question": "Hand : Glove :: Foot : ?", "Answer": "Shoe"},
        {"Question": "Doctor : Patient :: Teacher : ?", "Answer": "Student"},
        {"Question": "King : Crown :: Soldier : ?", "Answer": "Gun"},
        {"Question": "Eye : See :: Ear : ?", "Answer": "Hear"},
        {"Question": "Hot : Cold :: Day : ?", "Answer": "Night"},
        {"Question": "Cat : Kitten :: Dog : ?", "Answer": "Puppy"},
        {"Question": "Book : Reading :: Knife : ?", "Answer": "Cutting"},
        {"Question": "Light : Dark :: Success : ?", "Answer": "Failure"},
        {"Question": "Painter : Brush :: Writer : ?", "Answer": "Pen"},
        {"Question": "Fish : Swim :: Bird : ?", "Answer": "Fly"}
      ]
    },
    {
      TopicName: "Data Sufficiency",
      Concept: "Given statements, check if they provide enough info (no solving needed).",
      Tricks: [
        "Focus on 'is this info sufficient?' not on calculation."
      ],
      Example: "\"What is Raju's age?\" (I) Raju younger than Sita. (II) Sita is 20. → Not sufficient.",
      SampleQuestions: [
        {"Question": "Is X > Y? (I) X=10, (II) Y=8", "Answer": "Together sufficient"},
        {"Question": "What is value of a+b? (I) a=5, (II) b=10", "Answer": "Together sufficient"},
        {"Question": "Is P even? (I) P=2k, (II) P=odd", "Answer": "(I) sufficient"},
        {"Question": "Is A>B? (I) A=10, (II) B=15", "Answer": "Together sufficient"},
        {"Question": "Is triangle right angled? (I) Sides 3,4,5. (II) One angle=90°", "Answer": "Either alone sufficient"},
        {"Question": "Is number prime? (I) Divisible by 2. (II) Divisible by 3", "Answer": "Not sufficient"},
        {"Question": "Is X married? (I) X has wife. (II) X is unmarried", "Answer": "Either sufficient"},
        {"Question": "Which city is bigger? (I) Pop of A > Pop of B. (II) Area of A > B", "Answer": "Not sufficient"},
        {"Question": "What is area of square? (I) Side=5. (II) Perimeter=20", "Answer": "Either sufficient"},
        {"Question": "Is student passed? (I) Marks >40. (II) Marks=50", "Answer": "Either sufficient"}
      ]
    },
    {
      TopicName: "Calendar & Clocks",
      Concept: "Find day/date/time.",
      Tricks: [
        "Calendar: Odd days method.",
        "Clock: Each hour = 30°, each minute = 6°."
      ],
      Example: "If Jan 1, 2025 is Wednesday, Aug 26, 2025 is Tuesday.",
      SampleQuestions: [
        {"Question": "1 Jan 2000 was Saturday, what was 1 Jan 2001?", "Answer": "Monday"},
        {"Question": "If today is Tuesday, 100 days later?", "Answer": "Thursday"},
        {"Question": "15 Aug 1947 was Friday, what was 15 Aug 1948?", "Answer": "Sunday"},
        {"Question": "Angle between hands at 3:15?", "Answer": "7.5°"},
        {"Question": "Angle between hands at 6:30?", "Answer": "15°"},
        {"Question": "If 1 Jan 2020 was Wednesday, what was 1 Jan 2021?", "Answer": "Friday"},
        {"Question": "Day on 26 Jan 1950?", "Answer": "Thursday"},
        {"Question": "200th day of a leap year?", "Answer": "July 18"},
        {"Question": "Angle at 2:20?", "Answer": "50°"},
        {"Question": "If 15 Mar 2023 was Wednesday, what is 15 Mar 2024?", "Answer": "Friday"}
      ]
    },
    {
      TopicName: "Critical Reasoning",
      Concept: "Analyze arguments: assumptions, strengthening, weakening, conclusions.",
      Tricks: [
        "Always stick to given info only.",
        "Watch for extreme statements ('all, never, only')."
      ],
      Example: "Statement: 'All students must study at night to score well.' Weakening argument: 'Many top students study in the morning.'",
      SampleQuestions: [
        {"Question": "Statement: Smoking should be banned. Assumption?", "Answer": "Smoking is harmful"},
        {"Question": "Statement: More buses should run in city. Assumption?", "Answer": "Public uses buses"},
        {"Question": "Argument: Mobile phones harmful. Weaken?", "Answer": "Mobiles used in emergencies"},
        {"Question": "Argument: Education should be free. Strengthen?", "Answer": "Many can't afford school"},
        {"Question": "Statement: 'Exercise daily keeps you healthy.' Assumption?", "Answer": "People want health"},
        {"Question": "Argument: Exams unnecessary. Weaken?", "Answer": "Exams measure progress"},
        {"Question": "Argument: Computers replace teachers. Weaken?", "Answer": "Teachers provide guidance"},
        {"Question": "Argument: Cities cause pollution. Strengthen?", "Answer": "Most vehicles in cities"},
        {"Question": "Statement: 'TV is harmful.' Assumption?", "Answer": "People watch TV"},
        {"Question": "Argument: College attendance compulsory. Strengthen?", "Answer": "Students learn discipline"}
      ]
    }
  ]
};