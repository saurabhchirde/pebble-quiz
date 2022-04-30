import { v4 as uuid } from "uuid";

export const quizQuestions = [
  {
    _id: uuid(),
    name: "Avengers",
    img: "https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    popular: true,
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1563804951831-49844db19644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80",
        question:
          "During which war did Captain America get his superhuman abilities?",
        options: ["Civil War", "World War I", "World War II", "The Cold War"],
        answer: "World War II",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
        question:
          "Which of the following characters did not disappear during the ”blip”?",
        options: ["Spiderman", "Black Panther", "Doctor Strange", "Iron Man"],
        answer: "Iron Man",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1579445710183-f9a816f5da05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80",
        question: "What is Thor's mother's name?",
        options: ["Frya", "Feera", "Fridda", "Frigga"],
        answer: "Frigga",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Sports",
    img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80",
        question: "Term Chinaman is related to which sports ?",
        options: ["Football", "Hockey", "Cricket", "Golf"],
        answer: "Cricket",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1580153111806-5007b971dfe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        question: "With which game does Davis Cup is associated",
        options: ["Hockey", "Polo", "Lawn Tennis", "Cricket"],
        answer: "Lawn Tennis",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1624072213576-766398edb398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        question: "What is the name of person which controls a football match",
        options: ["A Referee", "A Spectator", "An Umpire", "A Goalkeeper"],
        answer: "A Referee",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Travel",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    topCategory: true,
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
        question: "Which continent is the largest ?",
        options: ["Asia", "Europe", "Africa", "North America"],
        answer: "Asia",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1642182887529-df52def152b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
        question: "Which river of India is called Vridha Ganga?",
        options: ["Krishna", "Godavari", "Kaveri", "Narmada"],
        answer: "Godavari",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        question: "Which foreign country is closest to Andaman Islands",
        options: ["Sri Lanka", "Indonesia", "Pakitan", "Nepal"],
        answer: "Sri Lanka",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1619392553201-3d9ab3169271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        question: "The state having largest area under waste land is",
        options: ["Rajastan", "Gujarat", "Madhya Pradesh", "Jammu and kashmir"],
        answer: "Rajastan",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Technology",
    img: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    topCategory: true,
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        question: "'OS' computer abbreviation usually means ?",
        options: [
          "Order of Significance",
          "Open Software",
          "Operating System",
          "Optical Sensor",
        ],
        answer: "Operating System",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        question: "'.MOV' extension refers usually to what kind of file?",
        options: [
          "Image file",
          "Animation/movie file",
          "Audio file",
          "MS Office document",
        ],
        answer: "Animation/movie file",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        question: "'DB' computer abbreviation usually means ?",
        options: ["Database", "Double Byte", "Data Block", "Driver Boot"],
        answer: "Database",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Science",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
        question: "The working principle of a washing machine is",
        options: ["Reverse osmosis", "Diffusion", "Centrifugation", "Dialysis"],
        answer: "Centrifugation",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1593435221502-c5d7bfc26cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        question: "Which of the following is used in pencils?",
        options: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
        answer: "Graphite",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80",
        question: "Chemical formula for water is",
        options: ["NaAlO2", "H2O", "Al2O3", "CaSiO3"],
        answer: "H2O",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Movies",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    topCategory: true,
    questions: [
      {
        _id: uuid(),
        img: "https://m.media-amazon.com/images/I/81rTTsIGjmL._SL1500_.jpg",
        question:
          "In 'Chaalbaaz' which actress played the double role of separated twin sisters?",
        options: [
          "Juhi Chawla",
          "Sridevi",
          "Madhuri Dixit",
          "Meenakshi Sheshadri",
        ],
        answer: "Sridevi",
      },
      {
        _id: uuid(),
        img: "https://remit2india.files.wordpress.com/2013/05/100-years-of-india-cinema.jpg",
        question:
          "Hollywood is in the United States. In which country is Bollywood located?",
        options: ["England", "Japan", "India", "Nepal"],
        answer: "India",
      },
      {
        _id: uuid(),
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2022/01/Amitabh-Bachchan-is-the-No.-1-Hero-in-the-country-Akshay-Kumar-Salman-Khan-Shah-Rukh-Khan-follow.jpeg",
        question: "Which actor is popularly known as 'the angry young man'?",
        options: [
          "Amitabh Bachanan",
          "Akshay Kumar",
          "Shah Rukh Khan",
          "Salman Khan",
        ],
        answer: "Amitabh Bachanan",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Language",
    img: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question:
          "Correct the sentence gramatically: She went to gym despite of her illness.",
        options: ["to", "of", "despite", "none of the above"],
        answer: "of",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question:
          "Choose the correct verb form from those in brackets. The earth _ round the sun.",
        options: ["moves", "moved", "move", "none of the above"],
        answer: "moves",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        question: "Correction of sentences: What your Sirname is?",
        options: [
          "What your Sirname?",
          "What is your Sirname?",
          "Your Sirname is what?",
          "none of the above",
        ],
        answer: "What is your Sirname?",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Animals",
    img: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    popular: true,
    questions: [
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1517486430290-35657bdcef51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
        question: "What animal has the worst shortest memory?",
        options: ["Dog", "Elephant", "Rat", "Dolphin"],
        answer: "Elephant",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1563204424-83201789377d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        question: "Which of the following has no Skeleton at all?",
        options: ["Star fish", "Sponge", "Silver fish", "Jelly fish"],
        answer: "Jelly fish",
      },
      {
        _id: uuid(),
        img: "https://images.unsplash.com/photo-1625416943248-3b6e7a090923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        question: "Which living bird lays the world's largest egg?",
        options: ["Eagle", "Owl", "Ostrich", "Vulture"],
        answer: "Ostrich",
      },
    ],
  },
];
