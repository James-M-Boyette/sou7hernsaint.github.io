    // Section 1: Written Instructions
    
    //  Concept & Setup

    // First, let's clarify what Mad Libs are: "Mad Libs are stories with words removed and replaced by blank spaces.  One player [you, the developer] asks the other player [the user], who haven’t seen the story, to fill in the blanks with adjectives, nouns, exclamations, colors, adjectives, and more. After these words are inserted into the blanks, ... the story is read aloud to hilarious results." You are going to write a program that takes a story of your choice, and then allows the user to replace words with (hopefully) far more hillarious words! In order to begin, you need to prepare your local and github-based files:
    // Create a repo online, and then clone it locally -
    // Go to github.com and click on the "new" button next to your repositories menu (on the left). Name it madLibsApp (or something similar). Keep the page that opens next open (you'll come back to it in a moment).
    // Create a folder on your computer and name it whatever you named your repo (madLibsApp etc). Migrate to this folder in your local terminal, and then enter the commands from that second github page (the first set of instructions, entitled "create a new repository from the command line"). Run "git status" to make sure everything's ready to go.
    // In your folder, create two files: an app.js file (which we will be doing the majority of our work in) and an index.html file; you can also just copy the html and js files we provided in 4.11 ...
    // ** Should I make template files instead, with starter comments that allow students to dive right in?
    // Add, commit, and push to Github via your local console
    // **... Does BitDegree want us to film gifs etc to demo the steps?
    // Before continuing, you should attempt to do some decomposition. If you are not familiar with decomposition, it is the practice of analyzing the problem(s) in front of you. Ask yourself, "What needs to happen in my app, generally?", "How might I achieve this using the tools I've learned so far?", and "Are there any situations I need to look out for - any problems this program might encounter?" For instance, this app 1. needs to get inputs from a user, store those inputs, and then insert those inputs into a story .. and 2. you can use variables to store their inputs - but since you will likely have them replace several pieces of the story, it may be better to store user inputs in a single array (as opposed to multiple, individual variables); and once the user inputs are in an array, you can use loops and array methods to play with that data .. and 3. are there benefits to using individual variables over a single array? any potential problems? (Consider how whether you can loop through individual variables). You should even take the time to sketch out your app in your own language before entering any code - this will considerably improve your speed once you start coding. Ex:
    // 1: make a "user input" array 
    // 2: make a variable and put my story in it - it needs to be a string, I think
    // 3: replace things in the story with arrays ... oh - maybe replace them with variables and store them in a second array?
    // 4: (potentially) make a second "replaced" array
    // 5: make questions (for each thing I want to replace) for the user ... maybe store these in a third array?
    // 6: make a loop that goes through each question, and stores each user input ... in a fourth array? ... but I want them to be in my second array ... how do I do this
    // etc etc
    // We encourage you to see how far you can get on your own, first - do decomposition and then try to write out these elements. If you hit road blocks, try using google - learning to google better versions of your current question is another essential skill you should continue to develop. Then, if you cannot solve your problem, absolutely look through this assignment's hints and detailed instructions!
    
    // Instructions

    // Part 1, "Story"
    // First, find a story: you could choose one you find insteresting online (for instance, try googling "unbelievable but true tech stories"), or you could make one up! Something about three paragraphs-long should be fine (go shorter or longer if you'd prefer). Store this story in your code file twice: once in a variable (something like originalStory), and once at the end of your code file in its original form, commented-out (because it's always good to have the original available for refrence etc in case you make a mistake later!)

    // Second, you need to declare a variable that stores an array. You are eventually going to store the user's answers in this array, and then concatonate its indeces in the final story. We suggest you name it something like userInputs
    // Third, you need to identify parts of that story you would like to replace. For any noun, verb, adjective etc that you'd like the user to (re)define, replace that word with a **tag function containing a unique variable - we suggest ${userInputs[x]}, and that you increment 'x' up by 1 for each new word/phrase you intend to replace
    // Note 1: Remember that you can re-use variables if you'd like the same word to appear multiple times in the story; ex: protagonistName could be used repeatedly if you wanted the same name to be used for a character throughout a story). You should end up with a few paragraphs that contain tag functions like this: 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]} ... Word got out that the team had "debugged" the ${userInputs[2]}'. 
    // Note 2: you may find it makes de-bugging later-on to simply add the tag function next-to/to the right of whatever it will eventually replace
    // **Is this what ${} is called?
    // Check your work: Add a command to show the story in your web browser's developer console (so that we can check for errors - note that you will be looking at this for most of your project, so keep it open with F12)
    // Once everything looks good, add, commit and push your work to Github (commit with a message like "Add mad-lib replacement variables to story")

    // Third, you need to record the number of unique replacements you're going to make, so, once you have inserted all of your tag functions, talley them up and store that number in a variable (numberOfQuestions etc). 
    // Note: if you plan to use a variable severl times (like a protagonist's name), only count it once for this talley - we only need a talley of the *unique* ones.
    // Once finished, add, commit and push your work (commit with a message like "Add declarations of mad-lib replacement variables")
    // Side-note: as you may have noticed, your code is starting to get long, and possibly a bit confusing. Try adding headings to each section of your code (commented-out) to keep things clear and organized.
    

    // Part 2, "User Prompts"
    // Create user-prompts for each mad-lib replacement (ie "Enter a verb", "Enter a noun" etc and store these strings in a variable (named "questionArray", etc))
    // Create the logic that will store the user inputs in the correct variables:
    // Write a 'for' loop 
    // [Hint] Give the following parameters: (let i = questions; i >= 0; i--)
    // Inside your loop, log 'i' to the terminal to make sure your loop is working properly
    // [Hint] remember that in order to create a list of things for our 'for' loop to do, we need to add curly-braces after our parameters ... so you should have 'for (let i = questions; i >= 0; i--) { console.log(i);}'
    // Take a moment to add --all, commit and push. This may seem excessive, but you will want to create versions you can roll-back to or take a look at if you significantly break your code and/or confuse yourself later-on.
    // Now that we know our 'for' loop works, declare a variable *outside of the 'for' loop* that is set to 0 (named questionCounter, etc) so that we can 
    // Next, inside of your loop, increment this variable up by one, and log it (because we need a number to go up by one, and allow us to read each element of our questionArray)
    // Again, add, commit, and push
    // Once you've confirmed that your loop both 1. decreases your 'i' variable and 2. increases your questionCounter variable, make your loop log a third thing: an element of your question array, based on your questionCounter variable (now, your loop should be able to log the first question to terminal, increase the counter by one, and then read the next question - over and over - because we are using the counter to indicate which index place in our array we'd like to read. We originally set it to '0', so our loop looks at the first position in our questionArray, and then we update the counter in order to have it look at the second position in our array; and so on.)
    // Note: you will want to put this line prior to increasing the counter in order to not accidentily miss your first question (you *don't* want to increase from 0 to 1 *before* reading from your questionArray - you want to read the zero-th index (of your array) *first*, and *then* increase the counter)
    // You should now be seeing each question in console - if you aren't, it's time to start de-bugging. 
    // Guess what? Add, commit, and push!
    // For a better user experience, you can take this opportunity to tell the user how many questions / word-replacements they have left to answer immediately after being shown the current question: add a string that uses a tag function to concatonate your "questionsTotal" and helpful language (ie console.log(questionArray[questionCounter] + `(${questions} questions left)`)
    // In order to make this go down, add a command right after to decrement the variable (questionTotal --;)
    // Once everything works in this section, git add, commit & push
    // Also, you may wish to turn off all of your log to console commands *except* the "question" one ( console.log(questionArray[questionCounter] + `; (${questionTotal} questions left)`); )
    // Annnnnd add, commit, and push!


    // Part 3, "User Inputs"
    // Inside of our loop, copy our remaining log-to-console command and replace its console.log with the prompt method (this will create a pop-up window with 1. Our questions, and 2. a field for users to enter things). 
    // Hint: you should now have the following line:
    // prompt(questionArray[questionCounter] + `... (${questionTotal} questions left)`);
    // Store the user's input in our userInputs variable, using the .push method
    // (Hint: userInputs.push(prompt(questionArray[questionCounter] + `... ({questionTotal} questions left)`)); )
    // Add a line immediately after logging-to-console the contents of your userInputs variable and check to see whether it successfully grows with each input
    // If everything's working ... add, commit, and push!
    // Using the 'alert' method, add a notice for the user that they've finished giving madlib inputs (and the story is ready) - something like alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');
    

    // Part 4, "Final Polish"
    // In order to add polish and make this project a part of your online portfolio of work, you need to do a few additional things: 
    // Convert your paragraphs to html-ready elements (add <h2></h2> tags to the beginning and end of each paragraph)
    // Add an instruction to print the story to the webpage with document.write(originalStory); (put it after you console.log the story) 
    // If you haven't already, now is the time to go back and do a final polish on your work - delete the original nouns, verbs etc in your story so that only the tag functions remain (you want '{userInputs[0]}' instead of 'In 1947 ${userInputs[0]}')
    // For the last time (for now) add, commit, and push!
    // You can come back later and add additional polish (change the css of your html file to get fancy text, colors, and even a background!)
    // Bonus: can you add a conditional to your loop that checks whether the user's input is blank - if it is, have it log something about "the user didn't write anything", and otherwise, have the loop store the input as normal