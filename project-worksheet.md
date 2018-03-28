# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Styling / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and/or functionality.

Trivia Game - hardcoded, not randomized: https://quiet-sea-30511.herokuapp.com/
<!-- Race : -->


## Wireframes

Include images of your wireframes. 

![Wireframes](/images/Wireframes.jpg?raw=true "Wireframes")

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

![Priority Matrix](/images/Priority-Matrix.jpg?raw=true "Wireframes")

## Game Components

### Landing Page
What will a player see when they start your game?

Title
Image
Story Introduction

Select Easy / Hard

### Game Initialization
What will a player see when the game is started? 

Hare and Tortoise at Start Line of Race
Trivia Question #1/5

### Playing The Game
What will be the flow of the game, what will the user be expected to do and what will the user expect from the game

Flow - 5 random questions
Expect user to - 5 answer selections
User expect from game - score, answer results

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

if Win show image, if Lose show video
Win - 5 questions correct in 30 s, hare wins race
Lose - less than 5 questions correct in 30 s, timer runs out and tortoise wins

### Game Reset
How will the user restart the game once it has been completed?

Press Play Again button on results page

## MVP 

Include the full list of features that will be part of your MVP 

Timer - end game after 30s / 20s
Trivia hardcoded
5 question and answer 

## POST MVP

Include the full list of features that you are considering for POST MVP

Trivia API
full race animations

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Show Intro | H | 3 |  | 
| Start Timer | H | 3 |  | 
| Show Random Trivia Questions and Answers | H | 11 |  | 
| Display Result | H | 3 |  | 
| Total |  | 20 hrs |  |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 


## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 

jQuery - 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  



## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.



## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  



## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.



#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object