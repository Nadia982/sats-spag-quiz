const questions = [
    {
      id: 1,
      q: "Which sentence is a command?",
      options: ["The relay race will be next.", "I hope I don’t drop the baton.", "Run as fast as you can", "I know you can win this race"],
      answer: 2,
      questionRef: "2023-paper1-q1"
    },
    {
      id: 2,
      q: "Is this sentence an exclamation or a question? 'How disappointing it was that it rained on sports day'",
      options: ["Exclamation", "Question"],
      answer: 0,
      questionRef: "2023-paper1-q2a"
  
    },
  
    {
      id: 3,
      q: "Is this sentence an exclamation or a question? 'How many times have you been to the swimming pool this week'",
      options: ["Exclamation", "Question"],
      answer: 1,
      questionRef: "2023-paper1-q2b"
    },
  
    {
      id: 4,
      q: "Is this sentence an exclamation or a question? 'How will you spend your summer holidays'",
      options: ["Exclamation", "Question"],
      answer: 1,
      questionRef: "2023-paper1-q2c"
    },
  
    {
      id: 5,
      q: "Is this sentence an exclamation or a question? 'How kind you are to give me this present'",
      options: ["Exclamation", "Question"],
      answer: 0,
      questionRef: "2023-paper1-q2d"
    },
  
    {
      id: 6,
      q: "Which sentence is written in standard English?",
      options: ["The autumn leaves was crunching beneath our feet as we walked along.", "The autumn leaves were crunching beneath our feet as we walked along."],
      answer: 1,
      questionRef: "2023-paper1-q5a"
    },
  
    {
      id: 7,
      q: "Which sentence is written in standard English?",
      options: ["We done a great job in picking the juiciest fruit for our pie.", "We did a great job in picking the juiciest fruit for our pie."],
      answer: 1,
      questionRef: "2023-paper1-q5b"
    },
    
    {
      id: 8,
      q: "Which sentence is written in standard English?",
      options: ["My brother didn't do anything to help us.", "My brother didn't do nothing to help us."],
      answer: 0,
      questionRef: "2023-paper1-q5b"
    },
    {
      id: 9,
      q: "Which pair of words are antonyms?",
      options: ["marine submarine", "unicycle bicycle", "proper improper", "act interact"],
      answer: 2,
      questionRef: "2023-paper1-q6"
    },
    {
      id: 10,
      q: "Select the sentence that shows Lara is most likely to go swimming on Saturday.",
      options: ["Lara will go swimming on Saturday.", "Lara should go swimming on Saturday.", "Lara might go swimming on Saturday.", "Lara could go swimming on Saturday."],
      answer: 0,
      questionRef: "2023-paper1-q9"
    },
    {
      id: 11,
      q: "Which sentence is the most formal?",
      options: ["We can't keep your things here, as there's no room.", "It is essential that you take all your belongings with you.", "Please pack up all your stuff before you leave.", "It’s time to get all your bits and pieces together."],
      answer: 1,
      questionRef: "2023-paper1-q9" 
    },
    {
      id: 12,
      q: "Which sentence is punctuated correctly?",
      options: ["Charlie's party, which was at the ice rink was really enjoyable.", "Charlie's party which was at the ice rink, was really enjoyable.", "Charlie's party, which was at the ice rink, was really enjoyable.", "Charlie's party which, was at the ice rink, was really enjoyable."],
      answer: 2,
      questionRef: "2023-paper1-q11" 
    },
    {
      id: 13,
      q: "In which sentence is plant a verb?",
      options: ["The recycling plant was closed for the weekend.",
      "The children plant beans in the school garden.",
      "I remember to water my plant every day.",
      "The roses were growing in a plant pot."],
      answer: 1,
      questionRef: "2023-paper1-q12" 
    },
    {
      id: 14,
      q: "Which sentence is the most formal?",
      options: ["I asked him to phone me when he got here.",
      "I told him to call me as soon as he turned up.",
      "I got him to ring me when he came in.",
      "I requested that he telephone me on arrival."],
      answer: 3,
      questionRef: "2023-paper1-q14"
    },
    {
      id: 15,
      q: "Is the apostrophe in this sentence used for a contracted form or possession? 'Let's hope it warms up soon.'",
      options: ["Contracted form", "Possession"],
      answer: 0,
      questionRef: "2023-paper1-q17a" 
    },
    {
      id: 16,
      q: "Is the apostrophe in this sentence used for a contracted form or possession? 'The teachers' coats were hanging in the staffroom.'",
      options: ["Contracted form", "Possession"],
      answer: 1,
      questionRef: "2023-paper1-q17b"
    },
    {
      id: 17,
      q: "Is the apostrophe in this sentence used for a contracted form or possession? 'The children wear their scarves when it's cold.'",
      options: ["Contracted form", "Possession"],
      answer: 0,
      questionRef: "2023-paper1-q17c"
    },
    {
      id: 18,
      q: "Which option completes the sentence using the present progressive? 'I _________ the photos to the school website.'",
      options: ["upload", "will upload", "have uploaded", "am uploading"],
      answer: 3,
      questionRef: "2023-paper1-q18" 
    },
    {
      id: 19,
      q: "Which sentence uses tense correctly?",
      options: ["She is getting the ball and then she scored the winning goal.",
      "My friends thought the film was good, but I don't like thrillers.",
      "When the clock strikes midnight, everyone was in bed.",
      "Tonight he is playing rounders and she joined in."],
      answer: 1,
      questionRef: "2023-paper1-q19"
    },
    {
      id: 20,
      q: "Which sentence is punctuated correctly?",
      options: ["Erin wanted the most up-to date computer that was available.", "Erin wanted the most-up-to-date computer that was available.", "Erin wanted the most up-to-date-computer that was available.", "Erin wanted the most up-to-date computer that was available."],
      answer: 3,
      questionRef: "2023-paper1-q28" 
    },
    {
      id: 21,
      q: "What are the words between asterisks in the sentence below? *The girl with curly red hair* is in my class.",
      options: ["a relative clause", "a subordinate clause", "a main clause", "a noun phrase"],
      answer: 3,
      questionRef: "2023-paper1-q33" 
    },
    {
      id: 22,
      q: "Which sentence uses a semi-colon correctly?",
      options: ["In the bag we found; five carrots, two cabbages and a large onion.", "The book began with a boy called Tim; climbing a steep hill.", "Jessie went to look for her brother; Bill.", "The wind was howling; the rain was drumming on the roof."],
      answer: 3,
      questionRef: "2023-paper1-q38"
    },
    {
      id: 23,
      q: "Is 'once' an adverb or a conjunction in this sentence? 'I've only been to France once with my family.'",
      options: ["adverb", "conjunction"],
      answer: 0,
      questionRef: "2023-paper1-q50a"
    },
    {
      id: 24,
      q: "Is 'once' an adverb or a conjunction in this sentence? 'Once I arrived in Paris, I tried to speak French.'",
      options: ["adverb", "conjunction"],
      answer: 1,
      questionRef: "2023-paper1-q50b"
    },
    {
      id: 25,
      q: "Is 'once' an adverb or a conjunction in this sentence? 'My accent really improved once we had been there a few days.'",  
      options: ["adverb", "conjunction"],
      answer: 1,
      questionRef: "2023-paper1-q50c"
    },
    
  //example of an image-based question
  // {
  //   id: 11,
  //   q: "How many squares are showing in this pic?",
  //   options: ["3", "2", "1"],
  //   answer: 2,
  //   img: "img/square.jpg"
  // questionRef:
  //   }  
  ];