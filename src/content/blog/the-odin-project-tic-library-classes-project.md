---
title: 'The Odin Project - Library Project with Classes'
pubDate: 2024-03-11
author: 'David Smith'
image: 'project-library-classes-thumbnail.png'
tags: ['JavaScript', 'TOP']
slug: the-odin-project-library-classes-project
---

After the Odin Project Tic Tac Toe project, I once again had to return to the library project to do some refactoring! I was tasked with refactoring the code to use ES6 classes.

## Key takeaways and struggles

<img src="/public/images/the-odin-project-images/library-project-classes/library-constructor.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
Firstly, I'd like to mention right off the bat that I grossly underestimated how difficult it would be to 'simply' refactor my code to classes.
The task definitely sounded a lot easier than it actually was, especially when the guys at The Odin Project phrased it as "hey, remember that library project you did? Go and refactor the code to use classes. <del>You'll be fiiiinneee~~</del>"

So off I went, documentation after documentation, video after video, still to get stuck at the first hurdle. How many classes should I have? How do they interact with one another? Can I do something similar to the Tic Tac Toe project, wherein I split up the modules (classes in this case) into game state and DOM manipulation?

I decided on 3 classes, Library, App and Book. Rather than separate classes to handle state and DOM changes, like I did with the Tic Tac Toe project, I decided that the library class will handle the public functions for anything to do with the library such as removing books, adding books etc. The idea is that the public functions in the Library class are called inside of a private function inside of the app class.

<img src="/public/images/the-odin-project-images/library-project-classes/library-classes-add-book-to-library.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
For example, inside of the Library class, I have a public function called "addBook()" that is actually very simple, it just takes a book as an argument and pushes that book into the library array, which is where all of my books will be stored. I would then create a private function "_addBookToLibrary()" that will be attached to a button in the DOM and called on a click event. The Book constructor class is called, a new book is created and then the public addBook() function is called to add that book into the library array. Essentially, the App class is using private functions to call the public functions, to keep code encapsulated, safe and secure.

I did however find this quite difficult to do and found myself constantly moving code in and out of the App and Library classes, as to begin with, I was mostly set on the idea of one class handling state, the other DOM manipulation, which didn't really seem to work very well in the end.

## this was a struggle

No, literally, the 'this' keyword, something I thought I had a strong understanding of, made my life a misery in this project.
One of the major headaches I had was trying to interact between the classes and re-familiarising myself with the bind() function.
The App class was used to instantiate the Library class, thereby creating the array and now allowing me to use functions from that class, which is obviously why the functions are 'public' and are allowed to 'leave' their class. I'm being verbose here, because this was actually something that for a long time, I didn't quite understand; the differences between a private and public function. Especially when JavaScript doesn't _really_ have actual secure classes, and uses a naming convention to declare what is and isn't private. Urgh.

There were many times that I had tried to call functions from my App class, inside of my Library class, which obviously wasn't going to work due to the way the classes were being instantiated. The Library class is instantied inside of the app class, so I'd first need to instantiate App. I blame the Tic Tac Toe project for that confusion, as modules made it possible and rather simple; I could just simply return the functions that I wanted access to and use them intermittently, which was.. Wonderful.

As for the bind() method, I forgot that 'this' would point to the element that the event listener is being called upon, which is just strange and clunky. Obviously, the quick fix was to use bind(this) to point 'this' toward the instantiated object, allowing me to once again call my App class functions. I don't know, JavaScript, you're trying my patience.

## In conclusion

Overall, it proved much more difficult than I had anticipated, but like most of the real nitty gritty coding struggles, it was very educational and gave me a much deeper understanding. I can however, confidently say that as of right now, I am not particularly a fan of classes or OOP. Or rather, I prefer factory functions to classes. Maybe one day I'll be able to fully appreciate classes and OOP, but today is not that day. I'll likely be continuing to use a more 'functional' approach to the rest of my projects, where I'm not specifically asked to use classes.

You can find my code <a target="_blank" href="https://github.com/Moomins07/project-library-classes-revised-top" style="color: #312e81;">**here**.</a>
