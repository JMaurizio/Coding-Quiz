# Coding-Quiz

To make this coding quiz I made a basic HTML file with divs that I could append items to with Javascript. My JS file will show that i put the questions into and object array and run them through the start quiz fuction each time to generate the next question.  After the question is answered the program will tell you if you answered right or wrong displayed at the bottom of the choices. If you answer correct it will add 10 seconds to your time, if you're wrong it will subtract 10 seconds from your time. The checkanswer function will also check to see if there are anymore questions left in the question array.  If there are no questions left it will send you to the final page shown in the endquiz fuction.

The endquiz function does work however there are two problems with this application that I do intend to fix and resubmit.  Unfortunately I ran out of time and had to submit the work I currently have.

The first problem is that the time left interval does not stop at the end of the quiz.  After a bit of research I now understand that I need to set the function to a variable that is globally scoped.  That way the setInterval function can be accessed inside of other functions.

The second problem is the leaderboard.  After working in office hours with a TA we were able to get it to submit the submitedscores data object to the proper array and localstorage.  However it is not properly displaying them in the leaderboard section and seems to either replace or corrupt the first data object in the array everytime a new score is submitted.  I understand this is a problem with the application and intend to fix it at a later date.

Below are screenshots of the current state fo the application as well as a github pages link.

 https://jmaurizio.github.io/Coding-Quiz/


 ![screenshot1](./assets/images/Coding Quiz Screenshot.png)