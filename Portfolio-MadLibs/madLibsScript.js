"use strict";

const runMadLibButton = document.querySelector("#runMadLibs");
// window.onload = () => {
runMadLibButton.onclick = () => {
    // Console Test
    console.log(`runMadLibButton executed`);
    
    // Total questions
    let questionTotal = 28;

    // Question Counter (which question are we on)
    let questionCounter = 0;

    const finalStory = document.querySelector('#target')

    // User Que's:
    const solicitation = `Please enter a`;
    const questionArray = [
    `${solicitation} year ("2001", "2021" etc)`,
    `${solicitation} person's full name`, 
    `${solicitation} computer-specific model ("commodore 64" etc)`,
    `${solicitation} famous school`,
    `${solicitation} word for people you know (friends, family etc)`,
    `${solicitation} type of bug`,
    `${solicitation} computer-specific part (plural-tense, ie "screens")`,
    `${solicitation} profession (plural-tense, i.e. "painters")`,
    `${solicitation} type of book`,
    `${solicitation} verb (past-tense)`,
    `${solicitation}nother verb (past-tense)`,
    `${solicitation}n adjective`,
    `${solicitation} pronoun`,
    `${solicitation} noun`,
    `${solicitation} verb`,
    `${solicitation} month, day and year (long-form, ie January, 1 2000)`,
    `${solicitation} number`,
    `${solicitation} noun (plural-tense)`,
    `${solicitation} famous museum`,
    `${solicitation} city, state (ie Washington, D.C)`,
    `${solicitation}n adjectiv`,
    `${solicitation} physics-specific noun (ie "gravity")`,
    `${solicitation} person's full name`,
    `${solicitation} number`,
    `${solicitation} type of document (ie "poem", "essay" etc)`,
    `${solicitation} bad thing (ie an "error")`,
    `${solicitation}n old machine`,
    `${solicitation} tool used for hunting`,
    `${solicitation} verb (infinitive-tense)`,
    ]
    
    // User Input Storage
    let userInputs = [];
    for (let i = questionTotal; i >= 0; i--) {
        console.log(questionArray[questionCounter] + `... (${questionTotal} questions left)`);
        userInputs.push(prompt(questionArray[questionCounter] + `... (${questionTotal} questions left)`));
        console.log(userInputs);
        questionCounter ++;
        questionTotal --;
        }
        
    // **should we add an "if" to make sure the user actually wrote ___? Like 'if variable == "" (an empty string), re-do the message with an additional "hey - you didn't seem to add anything?""
    
       
    // The User's *new history of computer bugs
    let originalStory = `<p>In <span class="subs">${userInputs[0]}</span>, computer pioneer <span class="subs">${userInputs[1]}</span> found herself working on a <span class="subs">${userInputs[2]}</span> at <span class="subs">${userInputs[3]}</span>. It was at this time that <span class="subs">${userInputs[4]}</span> discovered a <span class="subs">${userInputs[5]}</span> had gotten trapped in one of the <span class="subs">${userInputs[6]}</span> and was causing an error. The <span class="subs">${userInputs[7]}</span> removed the <span class="subs">${userInputs[5]}</span> and taped it in their <span class="subs">${userInputs[8]}</span>, identifying it as the "first actual case of bug being <span class="subs">${userInputs[9]}</span>."</p>

    <p>Word got out that the team had "<span class="subs">${userInputs[10]}</span>" the <span class="subs">${userInputs[2]}</span>, hence leading to the phrase’s use in computing and <span class="subs">${userInputs[11]}</span> culture. <span class="subs">${userInputs[1]}</span> readily admitted that <span class="subs">${userInputs[12]}</span> was not there when the incident occurred, but that didn’t stop it from becoming one of <span class="subs">${userInputs[1]}</span>'s favorite <span class="subs">${userInputs[13]}</span>s. <span class="subs">${userInputs[1]}</span> <span class="subs">${userInputs[14]}</span> of natural causes on January 1, <span class="subs">${userInputs[15]}</span>, at the age of <span class="subs">${userInputs[16]}</span>. For those interested, the offending <span class="subs">${userInputs[5]}</span>'s <span class="subs">${userInputs[17]}</span>, along with the original <span class="subs">${userInputs[8]}</span>, can be seen at the <span class="subs">${userInputs[18]}</span> in <span class="subs">${userInputs[19]}</span>.</p>

    <p>And while this is the "<span class="subs">${userInputs[20]}</span>" use case of finding a <span class="subs">${userInputs[2]}</span> <span class="subs">${userInputs[5]}</span>, the original use of the word dates further back in <span class="subs">${userInputs[21]}</span> to <span class="subs">${userInputs[22]}</span>, who in an <span class="subs">${userInputs[23]}</span> <span class="subs">${userInputs[24]}</span> used the term "<span class="subs">${userInputs[5]}</span>" to refer to a technological <span class="subs">${userInputs[25]}</span>. While he worked on the quadruplex <span class="subs">${userInputs[26]}</span>, he said it needed a "<span class="subs">${userInputs[5]}</span> <span class="subs">${userInputs[27]}</span>" to <span class="subs">${userInputs[28]}</span> properly.</p>`
    console.log(originalStory);

    // End of User Inputs
    alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

    // Remove previous
    const removeThese = document.querySelectorAll('.remove-me')
        removeThese.forEach(element => {
            element.remove();
        });
    
    // Output
    console.log(originalStory);
    // document.write(originalStory); // **This is throwing the child node error: Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    // document.getElementById('target').innerHTML = "I wrote something";
    document.getElementById("target").style = `font-style: normal`;
    finalStory.innerHTML = originalStory;
}

// Function that pre-fills all inputs so the user can see an example.
const fillMadLibButton = document.querySelector("#fillMadLibs");
fillMadLibButton.onclick = () => {
    // Console Test
    console.log(`fillMadLibButton executed`);

    const finalStory = document.querySelector('#target')

    let userInputs = [
            "1776",
            "J.S. Bach",
            "Nintendo 64",
            "Bob Ross's School of Painting",
            "dance partners",
            "praying mantis",
            "buttons",
            "ballerinas",
            "love letter",
            "skipped",
            "hopped",
            "soft",
            "it",
            "soda can",
            "burped",
            "May, 4th 1983",
            "42",
            "socks",
            "MoMA",
            "London, England",
            "strong",
            "black hole",
            "Liberachi",
            "Cher",
            "3000",
            "bedtime story",
            "explosion",
            "derrigable",
            "duck call",
            "sing",
    ];  
       
    // The User's *new history of computer bugs

    let originalStory = `<p>In <span class="subs">${userInputs[0]}</span>, computer pioneer <span class="subs">${userInputs[1]}</span> found herself working on a <span class="subs">${userInputs[2]}</span> at <span class="subs">${userInputs[3]}</span>. It was at this time that <span class="subs">${userInputs[4]}</span> discovered a <span class="subs">${userInputs[5]}</span> had gotten trapped in one of the <span class="subs">${userInputs[6]}</span> and was causing an error. The <span class="subs">${userInputs[7]}</span> removed the <span class="subs">${userInputs[5]}</span> and taped it in their <span class="subs">${userInputs[8]}</span>, identifying it as the "first actual case of bug being <span class="subs">${userInputs[9]}</span>."</p>

    <p>Word got out that the team had "<span class="subs">${userInputs[10]}</span>" the <span class="subs">${userInputs[2]}</span>, hence leading to the phrase’s use in computing and <span class="subs">${userInputs[11]}</span> culture. <span class="subs">${userInputs[1]}</span> readily admitted that <span class="subs">${userInputs[12]}</span> was not there when the incident occurred, but that didn’t stop it from becoming one of <span class="subs">${userInputs[1]}</span>'s favorite <span class="subs">${userInputs[13]}</span>s. <span class="subs">${userInputs[1]}</span> <span class="subs">${userInputs[14]}</span> of natural causes on January 1, <span class="subs">${userInputs[15]}</span>, at the age of <span class="subs">${userInputs[16]}</span>. For those interested, the offending <span class="subs">${userInputs[5]}</span>'s <span class="subs">${userInputs[17]}</span>, along with the original <span class="subs">${userInputs[8]}</span>, can be seen at the <span class="subs">${userInputs[18]}</span> in <span class="subs">${userInputs[19]}</span>.</p>

    <p>And while this is the "<span class="subs">${userInputs[20]}</span>" use case of finding a <span class="subs">${userInputs[2]}</span> <span class="subs">${userInputs[5]}</span>, the original use of the word dates further back in <span class="subs">${userInputs[21]}</span> to <span class="subs">${userInputs[22]}</span>, who in an <span class="subs">${userInputs[23]}</span> <span class="subs">${userInputs[24]}</span> used the term "<span class="subs">${userInputs[5]}</span>" to refer to a technological <span class="subs">${userInputs[25]}</span>. While he worked on the quadruplex <span class="subs">${userInputs[26]}</span>, he said it needed a "<span class="subs">${userInputs[5]}</span> <span class="subs">${userInputs[27]}</span>" to <span class="subs">${userInputs[28]}</span> properly.</p>`

    // End of User Inputs
    alert('All done! Ready for a pre-filled, not-at-all confusing history of tech??');

    // Remove previous
    const removeThese = document.querySelectorAll('.remove-me')
        removeThese.forEach(element => {
            element.remove();
        });
    
    // Output
    console.log(originalStory);
    document.getElementById("target").style = `font-style: normal`;
    finalStory.innerHTML = originalStory;
}

// Function that shows the original text (without Mad Libs alterations)
const fillStoryButton = document.querySelector("#fillStory");
fillStoryButton.onclick = () => {
    console.log(`fillStoryButton executed`);
    
    let originalStory = `<p>In 1947 computer pioneer Grace Hopper found herself working on a Mark II Computer at Harvard University It was at this time that her associates discovered a moth had gotten trapped in one of the computer’s relays and was causing an error. The operators removed the moth and taped it in their log book  identifying it as the "first actual case of bug being found."</p>
    
    <p>Word got out that the team had "debugged" the computer hence leading to the phrase’s use in computing and pop culture. Hopper readily admitted that she was not there when the incident occurred, but that didn’t stop it from becoming one of her favorite stories Hopper died of natural causes on January 1, 1992 at the age of 85 For those interested, the offending moth’s remains along with the original log book can be seen at the Smithsonian National Museum of American History in Washington, D.C.</p>

    <p>And while this is the "modern" use case of finding a computer bug the original use of the word dates further back in time to Thomas Edison who in an 1878 letter used the term "bug" to refer to a technological glitch While he worked on the quadruplex telegraph he said it needed a "bug trap" to function properly.</p>`
    const finalStory = document.querySelector('#target')
    const removeThese = document.querySelectorAll('.remove-me')
    removeThese.forEach(element => {
        element.remove();
      });
    document.getElementById("target").style = `font-style: normal`;
    finalStory.innerHTML = originalStory;
}
const resetStoryButton = document.querySelector("#resetStory");
resetStoryButton.onclick = () => {
    console.log(`resetStoryButtonButton executed`);
    
    let originalStory = `<p class="remove-me">
    In <span class="subs">___</span>,
    computer pioneer
    <span class="subs">___</span> found
    herself working on a
    <span class="subs">___</span> at
    <span class="subs">___</span>. It was at
    this time that
    <span class="subs">___</span> discovered
    a <span class="subs">___</span> had
    gotten trapped in one of the
    <span class="subs">___</span> and was
    causing an error. The
    <span class="subs">___</span> removed
    the <span class="subs">___</span> and
    taped it in their
    <span class="subs">___</span>,
    identifying it as the "first actual case
    of bug being
    <span class="subs">___</span>."
</p>

<p class="remove-me">
    Word got out that the team had "<span
        class="subs"
        >___</span
    >" the <span class="subs">___</span>,
    hence leading to the phrase’s use in
    computing and
    <span class="subs">___</span> culture.
    <span class="subs">___</span> readily
    admitted that
    <span class="subs">___</span> was not
    there when the incident occurred, but
    that didn’t stop it from becoming one of
    <span class="subs">___</span>'s favorite
    <span class="subs">___</span>s.
    <span class="subs">___</span>
    <span class="subs">___</span> of natural
    causes on January 1,
    <span class="subs">___</span>, at the
    age of <span class="subs">___</span>.
    For those interested, the offending
    <span class="subs">___</span>'s
    <span class="subs">___</span>, along
    with the original
    <span class="subs">___</span>, can be
    seen at the
    <span class="subs">___</span> in
    <span class="subs">___</span>.
</p>

<p class="remove-me">
    And while this is the "<span
        class="subs"
        >___</span
    >" use case of finding a
    <span class="subs">___</span>
    <span class="subs">___</span>, the
    original use of the word dates further
    back in <span class="subs">___</span> to
    <span class="subs">___</span>, who in an
    <span class="subs">___</span>
    <span class="subs">___</span> used the
    term "<span class="subs">___</span>" to
    refer to a technological
    <span class="subs">___</span>. While he
    worked on the quadruplex
    <span class="subs">___</span>, he said
    it needed a "<span class="subs"
        >___</span
    >
    <span class="subs">___</span>" to
    <span class="subs">___</span> properly.
</p>`
    // Remove previous
    const removeThese = document.querySelectorAll('.remove-me')
        removeThese.forEach(element => {
            element.remove();
        });

    const finalStory = document.querySelector('#target')
    
    document.getElementById("target").style = `font-style: normal`;
    finalStory.innerHTML = originalStory;
}