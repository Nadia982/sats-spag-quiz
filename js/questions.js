const questions = [
  {
    id: 1,
    q: "Which sentence is a command?",
    choices: [
      "The relay race will be next.",
      "I hope I don't drop the baton.",
      "Run as fast as you can",
      "I know you can win this race",
    ],
    answer: 2,
    questionRef: "2023-paper1-q1",
  },
  {
    id: 2,
    q: "Is this sentence an exclamation or a question?",
    q2: "'How disappointing it was that it rained on sports day'",
    choices: ["Exclamation", "Question"],
    answer: 0,
    questionRef: "2023-paper1-q2a",
  },

  {
    id: 3,
    q: "Is this sentence an exclamation or a question?",
    q2: "'How many times have you been to the swimming pool this week'",
    choices: ["Exclamation", "Question"],
    answer: 1,
    questionRef: "2023-paper1-q2b",
  },

  {
    id: 4,
    q: "Is this sentence an exclamation or a question?", 
    q2: "'How will you spend your summer holidays'",
    choices: ["Exclamation", "Question"],
    answer: 1,
    questionRef: "2023-paper1-q2c",
  },

  {
    id: 5,
    q: "Is this sentence an exclamation or a question?",
    q2: "'How kind you are to give me this present'",
    choices: ["Exclamation", "Question"],
    answer: 0,
    questionRef: "2023-paper1-q2d",
  },

  {
    id: 6,
    q: "Which sentence is written in standard English?",
    choices: [
      "The autumn leaves was crunching beneath our feet as we walked along.",
      "The autumn leaves were crunching beneath our feet as we walked along.",
    ],
    answer: 1,
    questionRef: "2023-paper1-q5a",
  },

  {
    id: 7,
    q: "Which sentence is written in standard English?",
    choices: [
      "We done a great job in picking the juiciest fruit for our pie.",
      "We did a great job in picking the juiciest fruit for our pie.",
    ],
    answer: 1,
    questionRef: "2023-paper1-q5b",
  },

  {
    id: 8,
    q: "Which sentence is written in standard English?",
    choices: [
      "My brother didn't do anything to help us.",
      "My brother didn't do nothing to help us.",
    ],
    answer: 0,
    questionRef: "2023-paper1-q5b",
  },
  {
    id: 9,
    q: "Which pair of words are antonyms?",
    choices: [
      "marine submarine",
      "unicycle bicycle",
      "proper improper",
      "act interact",
    ],
    answer: 2,
    questionRef: "2023-paper1-q6",
  },
// Commented out on 3/1/2024 as this question has been answered correctly several times in a row.
  // {
  //   id: 10,
  //   q: "Select the sentence that shows Lara is most likely to go swimming on Saturday.",
  //   choices: [
  //     "Lara will go swimming on Saturday.",
  //     "Lara should go swimming on Saturday.",
  //     "Lara might go swimming on Saturday.",
  //     "Lara could go swimming on Saturday.",
  //   ],
  //   answer: 0,
  //   questionRef: "2023-paper1-q9",
  // },
  {
    id: 11,
    q: "Which sentence is the most formal?",
    choices: [
      "We can't keep your things here, as there's no room.",
      "It is essential that you take all your belongings with you.",
      "Please pack up all your stuff before you leave.",
      "It's time to get all your bits and pieces together.",
    ],
    answer: 1,
    questionRef: "2023-paper1-q9",
  },
  {
    id: 12,
    q: "Which sentence is punctuated correctly?",
    choices: [
      "Charlie's party, which was at the ice rink was really enjoyable.",
      "Charlie's party which was at the ice rink, was really enjoyable.",
      "Charlie's party, which was at the ice rink, was really enjoyable.",
      "Charlie's party which, was at the ice rink, was really enjoyable.",
    ],
    answer: 2,
    questionRef: "2023-paper1-q11",
  },
  {
    id: 13,
    q: "In which sentence is plant a verb?",
    choices: [
      "The recycling plant was closed for the weekend.",
      "The children plant beans in the school garden.",
      "I remember to water my plant every day.",
      "The roses were growing in a plant pot.",
    ],
    answer: 1,
    questionRef: "2023-paper1-q12",
  },
  {
    id: 14,
    q: "Which sentence is the most formal?",
    choices: [
      "I asked him to phone me when he got here.",
      "I told him to call me as soon as he turned up.",
      "I got him to ring me when he came in.",
      "I requested that he telephone me on arrival.",
    ],
    answer: 3,
    questionRef: "2023-paper1-q14",
  },
  {
    id: 15,
    q: "Is the apostrophe in this sentence used for a contracted form or possession?", 
    q2: "'Let's hope it warms up soon.'",
    choices: ["Contracted form", "Possession"],
    answer: 0,
    questionRef: "2023-paper1-q17a",
  },
  {
    id: 16,
    q: "Is the apostrophe in this sentence used for a contracted form or possession?",
    q2: "'The teachers' coats were hanging in the staffroom.'",
    choices: ["Contracted form", "Possession"],
    answer: 1,
    questionRef: "2023-paper1-q17b",
  },
  {
    id: 17,
    q: "Is the apostrophe in this sentence used for a contracted form or possession?", 
    q2: "'The children wear their scarves when it's cold.'",
    choices: ["Contracted form", "Possession"],
    answer: 0,
    questionRef: "2023-paper1-q17c",
  },
  {
    id: 18,
    q: "Which option completes the sentence using the present progressive?", 
    q2:"'I _________ the photos to the school website.'",
    choices: ["upload", "will upload", "have uploaded", "am uploading"],
    answer: 3,
    questionRef: "2023-paper1-q18",
  },
  {
    id: 19,
    q: "Which sentence uses tense correctly?",
    choices: [
      "She is getting the ball and then she scored the winning goal.",
      "My friends thought the film was good, but I don't like thrillers.",
      "When the clock strikes midnight, everyone was in bed.",
      "Tonight he is playing rounders and she joined in.",
    ],
    answer: 1,
    questionRef: "2023-paper1-q19",
  },
  {
    id: 20,
    q: "Which sentence is punctuated correctly?",
    choices: [
      "Erin wanted the most up-to date computer that was available.",
      "Erin wanted the most-up-to-date computer that was available.",
      "Erin wanted the most up-to-date-computer that was available.",
      "Erin wanted the most up-to-date computer that was available.",
    ],
    answer: 3,
    questionRef: "2023-paper1-q28",
  },
  {
    id: 21,
    q: "What are the underlined words in the sentence below?", 
    q2: "<em>The girl with curly red hair</em> is in my class.",
    choices: [
      "a relative clause",
      "a subordinate clause",
      "a main clause",
      "a noun phrase",
    ],
    answer: 3,
    questionRef: "2023-paper1-q33",
  },
  {
    id: 22,
    q: "Which sentence uses a semi-colon correctly?",
    choices: [
      "In the bag we found; five carrots, two cabbages and a large onion.",
      "The book began with a boy called Tim; climbing a steep hill.",
      "Jessie went to look for her brother; Bill.",
      "The wind was howling; the rain was drumming on the roof.",
    ],
    answer: 3,
    questionRef: "2023-paper1-q38",
  },
  {
    id: 23,
    q: "Is <em>once</em> an adverb or a conjuction in the sentence below?", 
    q2: "'I've only been to France <em>once</em> with my family.'",
    choices: ["adverb", "conjunction"],
    answer: 0,
    questionRef: "2023-paper1-q50a",
  },
  {
    id: 24,
    q: "Is <em>once</em> an adverb or a conjunction in this sentence?", 
    q2: "'<em>Once</em> I arrived in Paris, I tried to speak French.'",
    choices: ["adverb", "conjunction"],
    answer: 1,
    questionRef: "2023-paper1-q50b",
  },
  {
    id: 25,
    q: "Is <em>once</em> an adverb or a conjunction in this sentence?", 
    q2: "'My accent really improved <em>once</em> we had been there a few days.'",
    choices: ["adverb", "conjunction"],
    answer: 1,
    questionRef: "2023-paper1-q50c",
  },
  {
    id: 26,
    q: "Which sentence must end with a question mark? Select one.",
    choices: [
      "Shall we go round the fitness trail in the park",
      "We could go tomorrow if you like",
      "What I really like is the rope bridge",
      "Let me know what you would like to do",
    ],
    answer: 0,
    questionRef: "2022-paper1-q4",
  },
  {
    id: 27,
    q: "Which sentence is punctuated correctly? Select one.",
    choices: [
      "Nevertheless we, are going on Saturday.",
      "Finally, I think I understand what you mean.",
      "Considering, all his efforts the result was disappointing.",
      "At the last, count there were twenty people coming.",
    ],
    answer: 1,
    questionRef: "2022-paper1-q5",
  },
  {
    id: 28,
    q: "Which sentence uses commas correctly?",
    choices: [
      "The band will perform at concerts in Belfast, Manchester, Birmingham, Nottingham and, Sheffield.",
      "The children could choose to play netball, cricket, hockey or tennis.",
      "Owls badgers, hedgehogs and bats are all nocturnal animals.",
      "Painting, drawing, sculpture and print-making, were all options on the art day.",
    ],
    answer: 1,
    questionRef: "2022-paper1-q6",
  },
  {
    id: 29,
    q: "Which sentence is punctuated correctly? Select one",
    choices: [
      "Add one ounce (around one) tablespoon of yeast to your bread mix.",
      "Add one ounce around one tablespoon of yeast (to your bread mix).",
      "Add one ounce (around one tablespoon) of yeast to your bread mix.",
      "Add one ounce around (one tablespoon) of yeast to your bread mix.",
    ],
    answer: 2,
    questionRef: "2022-paper1-q7",
  },
  {
    id: 30,
    q: "Which sentence expresses the greatest certainty? Select one.",
    choices: [
      "It may rain later in the week.",
      "The train might arrive late again today.",
      "I will walk through the park to get to school.",
      "It should be sunny and warm tomorrow.",
    ],
    answer: 2,
    questionRef: "2022-paper1-q8",
  },
  {
    id: 31,
    q: "What does the word 'them' refer to in the sentence below?", 
    q2: "'Although deserts are very dry, a rich variety of plants and animals can survive in them.'",
    choices: ["deserts", "variety", "plants", "animals"],
    answer: 0,
    questionRef: "2022-paper1-q10",
  },
  {
    id: 32,
    q: "What is the word class of the underlined words?",
    q2: "I have two brothers. Brian is <em>older</em> and Stanley is <em>younger</em> than me.",
    choices: ["adjective", "noun", "adverb", "verb"],
    answer: 0,
    questionRef: "2022-paper1-q15",
  },
  {
    id: 33,
    q: "Which sentence is the most formal? Select one.",
    choices: [
      "Getting enough sleep is important, isn't it?",
      "Let's set off early for school tomorrow.",
      "Do you fancy coming with us to the park?",
      "It is essential that we remember our water bottles.",
    ],
    answer: 3,
    questionRef: "2022-paper1-q17",
  },
  {
    id: 34,
    q: "Which option is punctuated correctly? Select one.",
    choices: ["He is famous for his innovative music: a mix of recorded noises, traditional instruments and songs.", "He is famous for his innovative music. a mix of recorded noises, traditional instruments and songs.", "He is famous for his innovative music; a mix of recorded noises, traditional instruments, and songs.", "He is famous for his innovative music, (a mix of recorded noises, traditional instruments and songs)."],
    answer: 0,
    questionRef: "2022-paper1-q23",
  },
  {
    id: 35,
    q: "What is the word class of the underlined words?", 
    q2: "The <em>erosive</em> force of the sea <em>erodes</em> the coastline.",
    choices: ["noun adjective", "adjective verb", "noun verb", "adjective adverb"],
    answer: 1,
    questionRef: "2022-paper1-q26",
  },
  {
    id: 36,
    q: "What is the sentence below?", 
    q2: "'Safiya asked the teacher which page we had to read.'",
    choices: ["a question", "a command", "a statement", "an exclamation"],
    answer: 2,
    questionRef: "2022-paper1-q28",
  },
  {
    id: 37,
    q: "How does the use of the passive in the second sentence affect the way the information is presented?",
    q2: "1. Max dropped the red bucket.",
    q3: "2. The red bucket was dropped.",
    choices: ["It does not say who dropped the bucket.", "It shows that the action happened in the past.", "It shows that it was an accident.", "It does not say why the bucket was dropped."],
    answer: 0,
    questionRef: "2022-paper1-q29",
  },
  // {
  //   id: 38,
  //   q: "Which option makes the sentence start with an adverbial?", 
  //   q2: "_________ we lined up for the class photo.",
  //   choices: ["It was noisy and crowded, but", "The photographer arrived while", "With big smiles on our faces,", "The whole class were ready so"],
  //   answer: 2,
  //   questionRef: "2022-paper1-q36",
  // },
  // {
  //   id: 39,
  //   q: "Is the following sentence standard or non-standard English?", 
  //   q2: "'I were going to keep the picture to show you.'",
  //   choices: ["standard", "non-standard"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q42a",
  // },
  // {
  //   id: 40,
  //   q: "Is the following sentence standard or non-standard English?", 
  //   q2: "'We was helping to design the new school building'",
  //   choices: ["standard", "non-standard"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q42a",
  // },
  // {
  //   id: 41,
  //   q: "Is the following sentence standard or non-standard English?", 
  //   q2: "'He doesn't know nothing about football'",
  //   choices: ["standard", "non-standard"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q42a",
  // },
  // { 
  //   id: 42,
  //   q: "Is the following sentence standard or non-standard English?", 
  //   q2: "'I have done all the washing-up.'",
  //   choices: ["standard", "non-standard"],
  //   answer: 0,
  //   questionRef: "2022-paper1-q42a",
  // },
  // {
  //   id: 43,
  //   q: "What is the grammatical term for the underlined words in the sentence below?", 
  //   q2: "'<em>The majestic lioness under the shady tree</em> watched her cubs play.'",
  //   choices: ["a fronted adverbial",
  //   "a subordinate clause",
  //   "a main clause",
  //   "a noun phrase"],
  //   answer: 3,
  //   questionRef: "2022-paper1-q44",
  // },
  // {
  //   id: 44,
  //   q: "Below is a sentence containing an apostrophe followed by a statement about the sentence. Choose whether the statement is true or false.", 
  //   q2: "'Gina put out the cats' food.' There is more than one cat.",
  //   choices: ["true", "false"],
  //   answer: 0,
  //   questionRef: "2022-paper1-q45a",
  // },
  // {
  //   id: 45,
  //   q: "Below is a sentence containing an apostrophe and a statement about the sentence. Choose whether the statement is true or false.", 
  //   q2: "'The girl's party is this afternoon.' There is more than one girl.",
  //   choices: ["true", "false"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q45b",
  // },
  // {
  //   id: 46,
  //   q: "Below is a sentence containing an apostrophe and a statement about the sentence. Choose whether the statement is true or false.", 
  //   q2: "'The trees' leaves were green.' There is only one tree.",
  //   choices: ["true", "false"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q45c",
  // },
  // {
  //   id: 47,
  //   q: "Below is a sentence containing an apostrophe and a statement about the sentence. Choose whether the statement is true or false.", 
  //   q2: "'The boys' lunch was delicious.' There is only one boy.",
  //   choices: ["true", "false"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q45d",
  // },
  // {
  //   id: 48,
  //   q: "What is the grammatical term for the underlined words in the sentence below?",
  //   q2: "'Nathan <em>had hoped</em> for a part in the school play.'",
  //   choices: ["Simple past", "Past progressive", "Past perfect"],
  //   answer: 2,
  //   questionRef: "2022-paper1-q49a",
  // },
  // {
  //   id: 49,
  //   q: "What is the grammatical term for the underlined words in the sentence below?", 
  //   q2: "The children <em>were rehearsing</em> their lines.",
  //   choices: ["Simple past", "Past progressive", "Past perfect"],
  //   answer: 1,
  //   questionRef: "2022-paper1-q49b",
  // },
  // {
  //   id: 50,
  //   q: "What is the grammatical term for the underlined words in the sentence below?", 
  //   q2: "Lots of parents <em>came</em> to watch.",
  //   choices: ["Simple past", "Past progressive", "Past perfect"],
  //   answer: 0,
  //   questionRef: "2022-paper1-q49c",
  // },
  // {
  //   id: 51,
  //   q: "Select the sentence that must end with a question mark.",
  //   choices: ["The teacher asked them what they were doing", "I wonder what time the next train arrives", "Did she play tennis on your team last year", "He asked if he could use my pen"],
  //   answer: 2,
  //   questionRef: "2021-paper1-q1",
  // },
  // {
  //   id: 52,
  //   q: "Is the following sentence is a question or a command?",
  //   q2: "'Do your stretches before you exercise'",
  //   choices: ["Question", "Command"],
  //   answer: 1,
  //   questionRef: "2021-paper1-q3a",
  // }, {
  //   id: 53,
  //   q: "Is the following sentence is a question or a command?",
  //   q2: "'Do you prefer tennis or cricket'",
  //   choices: ["Question", "Command"],    
  //   answer: 0,
  //   questionRef: "2021-paper1-q3b",
  // },  {
  //   id: 54,
  //   q: "Is the following sentence is a question or a command?",
  //   q2: "'Do the boys always go running in the morning'",
  //   choices: ["Question", "Command"],
  //   answer: 0,
  //   questionRef: "2021-paper1-q3c",
  // },  {
  //   id: 55,
  //   q: "Is the following sentence is a question or a command?",
  //   q2: "'Do take some water with you to football practice'",
  //   choices: ["Question", "Command"],
  //   answer: 1,
  //   questionRef: "2021-paper1-q3d",
  // },  
  // {
  //   id: 56,
  //   q: "Which sentence must not end with an exclamation mark?",
  //   choices: ["What a dreadful day I had", "What is the temperature now", "The wind is very strong today", "You really must wear a coat"],
  //   answer: 1,
  //   questionRef: "2021-paper1-q6",
  // },
  
  
  // *******************************************************************************************************************************
  //  {
  //   id: 57,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 58,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 59,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 60,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 61,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 62,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 63,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 64,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 65,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 66,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 67,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 68,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 69,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 70,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 71,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 72,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 73,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 74,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },  {
  //   id: 75,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: [],
  //   questionRef: "2021-paper1-q",
  // },
  // {
  //   id: 50,
  //   q: "exampleToCopy",
  //   choices: ["", "", ""],
  //   answer: 0,
  //   questionRef: "2021-paper1-q",
  // },
  // example of an image-based question
  // {
  //   id: 11,
  //   q: "How many squares are showing in this pic?",
  //   choices: ["3", "2", "1"],
  //   answer: 2,
  //   img: "img/square.jpg"
  // questionRef:
  //   }
];