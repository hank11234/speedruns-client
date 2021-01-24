# Speedruns Tracker Client
Speedruns Tracker is a website that allows user to create and account to add and keep track of their games, and those games' associated speedruns. Can be used exclusively for games as well.

### Relevant Links
- [Deployed Client](https://hank11234.github.io/speedruns-client/)
- [Deployed API](https://sleepy-plateau-04404.herokuapp.com/)
- [API Repo](https://github.com/hank11234/speedruns-tracker)

### Technologies Used
- HTML5
- CSS/SASS
- Javascript
- jQuery
- Ajax

### Problem Solving Strategy
I relied heavily on the work from past exercises we've done in class and my previous project and was very meticulous with my console.logs to make sure I was always doing what I thought I was. I also took great advantage of the other members of my group as well as a larger subset of my other classmates.

### Planning/Development Process
Initially my plan was to create the credential functions, then design the API for the program, write CRUD functions for the runs and then for the games, make sure runs were properly related to games and then make sure games were properly related to users. I more or less followed this plan with some slight alterations. I started by writing up the html for the auth functions and went through the process of adding curl scripts, event listeners, events, api calls and ui responses for each. I then linked my API by adding the proper Url to the config file, and deployed for the first time. After I started on the games by copying the curl scripts over from the API and added html for each of them. Then I repeated the process of event listeners, events, api calls and ui responses for the games, and at this point started to add basic styling to my page. And then went through the process one more time for the speedruns. I finished up this version of the project by adding details such as more response messages after actions are performed, adding buttons to show only the functions for games or runs based on the actions you wanted to take, and continuing styling. 

### Unsolved Problems/Future Versions
- Would like to further clean up the list of games and runs, most ideally each into its own div box with an edit and delete button right there for each one as opposed to having to manually input all the information for those
- Add use of modals for edit and delete after reformat
- Add ability to call games by title as opposed to ID (Potential issue: Games with the same name)
- Add calendar input for game release date and run date 
- Add time input for run length

### Wireframe
![Wireframe](https://imgur.com/a/kAmV5tx)

### User Stories
- As a user I want to be able to create an account to store my speedruns.
- As a user I want to be able to easily create new run entries and reference my past ones.
- As a user I want to be able to reference all my entries by game for organizational clarity.
- As a user I want my entries to be in order from lowest time so I can quiskly see my best runs.