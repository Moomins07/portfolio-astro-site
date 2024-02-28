---
title: 'The Odin Project - Tic Tac Toe Project'
pubDate: 2024-02-28
author: 'David Smith'
image: 'tic-tac-toe-js.jpg'
tags: ['JavaScript', 'TOP']
slug: the-odin-project-tic-tac-toe-project
---

Following The Odin Project's Library Project, I was tasked with creating a Tic Tac Toe game. This is actually a revised version of a revised version of the tic-tac-toe game..

Approximately 6months ago when I first attempted this project, I struggled with many areas of the project and found myself using tutorials and essentially slowly refactoring my work. In fact, I have another version of this same project called 'tic-toe-toe-revised' wherein I attempted to recreate the project with less help from a YouTube tutorial I originally followed for help.

I recall being so stuck with this project when I first encountered it that I'd decided that I'd follow a YouTube tutorial and then attempt to recreate it, which is exactly what I did.

So now, with this... Revised-revised version of the tic-toe-toe project, I've re-factored and gone even further.

## Key takeaways from this project

<img src="/public/images/the-odin-project-images/tic-tac-toe-project/tic-tac-toe-module1.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
As I mentioned before, for my first attempt at this project, I followed a a YouTube video which took a functional approach and, typical of a YouTube tutorial, kept the code in the global scope entirely. In my original 'revised' version, I attempted to use a module and stored all of my code inside of modules, my main modules 'ticTacToe' followed by keeping utility functions in a second module called 'utils'.

**One of the key constraints of this project are as follows:**

_Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances._

This is why I decided to wrap all of my code in an IIFE module called 'ticTacToe'. I figured that this was doing as the project asked and kept code out of the global scope. However, although I had _technically_ adhered to the constraints of the project, I wanted to take this further; I am also guilty of including a lot of logic in the project that was taken from a tutorial and wasn't really my own code, even though I understand the code. This also meant that I hadn't used any factory functions at all, which was also another key constraint I had missed.

Now, I say _technically_ adhered because I realised that, even though none of my code now sat within the global scope, it just felt like a mess. Code was everywhere, there was no real sense of 'structure' of logic to the placement of my code. I once again blame past-Dave for using a YouTube tutorial as they tend to do exactly that, keep code in random order in the global scope; it works, right?

In this version of the project, I've attempted to push further and try to truly understand the strengths and reasons behind encapsulating code in modules. I asked myself **why we encapsulate the code in modules**. Why would I return some functions in a factory function but keep other functions 'priavet'? Note that I've also removed any logic that was not my own, and attempted to do it all again, my way.

There's a lot to cover!

I have broken the original single TicTacToe module into a variety of modules now that organise the code even more. I now have 2 main modules, GameUI and GameBoard, that use factory functions to keep data private, only returning the functions that I need to use in other modules. In GameUI, I store functions that modify the DOM, in GameBoard, I store functions that modify the game's state.

Then it began to hit me. I began to see how and why this makes sense. I realised how much easier it was to re-factor the code as a slowly but surely began to encapsulate code in modules. Does the function apply classes to an element? Into the GameUI module it goes. Does it affect the game's _state_? Shove in the GameBoard module.

Originally, I placed a lot of the full functions in the return statement, eventually realising that this was difficult to manage and unnecessary, so I moved everything into the function body and just returned the name of the function.

<img src="/public/images/the-odin-project-images/tic-tac-toe-project/tic-tac-toe-constructor.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>

**Now ask me, what functions do you return from the factory function and why?**
Funny you ask! As I began to encapsulate everything into modules, I realised "what if I need that function that's inside of GameBoard, in my GameUI module?". I can't access any of the functions inside of the factory function body, firstly it needs to become 'public', so I return it from the factory function! Bear in mind, it returns an object of the module, so to call that function, I can use dot notation. E.g. On the right, you see that I call my 'createUser' constructor function using 'GameBoard'.

Private and public functions now make a lot more sense, whereas before I felt that I wasn't really able to confidently decide whether or not a function needed to be private or public. This is also where I had a lot of confusion with ES6 classes, which essentially do the same thing in a different way.

<img src="/public/images/the-odin-project-images/tic-tac-toe-project/tic-tac-toe-config.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>

**But there's more!**
Somewhere along the way, I noticed myself needing some 'global' variables, which was something that didn't originally cross my mind. What if I need to access a variable that decides who's turn it is in my GameUI module? Ok, yes, you're probably saying "I thought GameUI was only supposed to handle the DOM stuff, not game state". You're right, I could have spent another day or two refactoring this code even further, but I understand the concept and I want to move on.

To solve this, I added a 'Config' object at the top of my GameBoard module that stored a variety of useful things, such as the winning conditions array.

Now, whenever I need to check a global variable, inside of GameBoard I can call Config.[item], and outside GameBoard.[item]. I found this a little strange as I originally thought I'd have to call it using GameBoard.Config.[item], but this wasn't the case and caused me some confusion.

**I was nearly there**, but then I discovered one last concept that I had overlooked that was also beginning to cause me some trouble.
I noticed that, inside of my GameUI module, 'circleTurn' inside of my Config object was returning undefined even though my changeTurn() function was supposed to alternate circleTurn between true and false. How could this be? I was stumped. Eventually, with the help of Google, I was promptly reminded of Getters and Setters, something I had learned during some previous OOP lessons.

Admittedly, I didn't quite understand getters and setters during those lessons and I was dreading the thought of now having to essentially use the same concept, whilst developing my own functions to get and set data. Thankfully this didn't end up being too difficult.

I created functions such as 'getCircleTurn' that would specifically return "Config.circleTurn", which may sound a little unusual at first. What's the difference? Essentially, private data should remain **private**, meaning that the original data should not be altered. I didn't quite get this at first, but the 'set' function made it even clearer. To set the turn of the player, I would now use 'setCircleTurn' to assign data to the Config.circleTurn variable, meaning that I now don't touch the original data at all, everything has to go through my get and set functions. **This makes the data safe and secure!**.

You don't want people having direct access to your private data, that's a recipe for disaster.

Overall, this has been a challenging project, starting from staring blankly at my screen and following YouTube tutorials to essentially re-writing it from the ground-up including more and more concepts as I go. It has however been extremely educational and I'll be using what I've learned in future projects. Obviously, it's not perfect, I've done a poor job of keeping functions to 'one responsibility' and some functions probably don't belong in a particular module, but it's all an improvement.

## So, in this project I've covered the following:<br>

**Modulatiry** by splitting the code into 2 modules. GameUI for DOM related functions and GameBoard for game-state functions.

**Constructor functions** to construct the players that insert their names.

**Factory functions** to keep functions private and to be able to export public functions to other modules that need those functions.

**Getters and Setters** to ensure that private data stays private.

You can find my code <a target="_blank" href="https://github.com/Moomins07/tic-tac-toe-revised-top" style="color: #312e81;">**here**.</a>
