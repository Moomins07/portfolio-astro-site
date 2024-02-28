---
title: 'The Odin Project - Library Project'
pubDate: 2024-02-23
author: 'David Smith'
image: 'project-library-thumbnail.png'
tags: ['JavaScript', 'TOP']
slug: the-odin-project-library-project
---

Following my previous post 'Returning to the Odin Project', I'd like to put my thought's on paper. The frustrations, the struggles, the dopamine hits and the thought-processes. There's a lot to cover.

For context, in case you did not read my previous post:

"_As part of the The Odin Project's curriculum, after I had completed the foundations and made it to the full-stack JavaScript section of the course, I was tasked with creating a simple web page app that will display a list of books that the user can add/remove from the page using a form input. Essentially a CRUD app.. Without the U, I guess? A CRD? (K-uh-rd)!_"

I made the mistake of cutting corners and neglecting The Odin Project, so when I finally decided to return and start a few projects behind where I originally left off, I found myself stuck.

"_Past-Dave was in fact guilty of a crime, the crime of completing a code-along 'Tracalorie app' tutorial that used OOP and ES6 classes, and copying that code into the Library Project and altering it to work with this new project. You could argue that this is still a form of learning as I wasn't just copy and pasting, I was making the code work by adding/removing as I needed, but clearly I did not retain as much as I had thought._"

To solve that problem, I went back to the very beginning of the Library Project, quite literally deleting all of the previously written code and attempting it all over again, this time using constructor Functions, as explicitly stated in the project constraints, instead of ES6 classes.

Note, to save time, I retained the CSS and HTML as this is something that I feel I can confidently re-create.

## The key take-aways

<img src="/public/images/the-odin-project-images/library-project/constructor-function.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>

Without a doubt, my largest concern was my understanding of classes and private/public methods. This is what originally stumped me when I tried to re-create the Library Project the first time using ES6 classes. Even though I understand the theory/principles behind OOP, I found myself struggling to confidently know exactly when/how I should use a class/constructor function for an entity, followed by whether or not the methods attached to that class should be public or private. I feel that I now have a greater understanding of all of the above after this project.

However, I have used constructor functions for this project as the project requires me to do so, but I will re-factor my code at a later time to use ES6 classes, also according to TOP's curriculum, which I hope will only develop my understanding even further!

<h2> The thought process </h2>

Thankfully, whenever you're tasked with a new project during TOP's course, they're kind enough to give you a small push in the right direction with some suggestions. In this case, it was suggested that the books be stored in a library, followed by a constructor function to create books, and lastly a function that will push newly created books into the 'library' array.

So that's what I did, I created the empty library array, a constructor function that would create book objects, and then created an 'addBookToLibrary' function that prevents the form input button from submitting, checks if both fields are populated and then creates a book and pushes it into the library array.

**Removing the books**

<figure style="text-align: center;">
  <img src="/public/images/the-odin-project-images/library-project/remove-book-function.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
</figure>
The first problem I anticipated is removing the books, as this would require me to target a specific item in the array, removing it and then re-loading the array on the DOM.
I tried to break this up into two parts, finding the book in the array, and then removing that book according to the id of the element that is targetted in the DOM.

It finds the id of the element that is targetted using event delegation and the event object. Now that I had the id, I needed to compare that id to the ones in my library array. Enter findIndex function! It confirms if the user would like to remove the item, stores the index of the book in the library array, checks if it exists, and if so, removes it from the array. Once the item is removed from the array, the DOM needs to be updated, so I load the books once again!

This particular function gave me the most trouble as I was not sure how to find a specific index in an array, but I fortunately learned of the findIndex method after some Googling.
<br>
<br>
<br>
<br>

<hr>

**Loading the books**

<figure style="text-align: center;">
  <img src="/public/images/the-odin-project-images/library-project/load-books-function.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
</figure>

Another small issue I ran into was the books duplicating themselves in the DOM on the web page, which was quite easily resolved by clearing the HTML of the parent containers. Simply clearing the DOM would ensure that the full array of books would be added without any stray extras.

<br>
<br>
<br>
<hr>

**Using the prototype**

<figure style="text-align: center;">
  <img src="/public/images/the-odin-project-images/library-project/book-prototype-function.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
</figure>

The last challenge was to create a method on the prototype of created Book objects that would be used to update whether or not the book had been read.
Admittedly, I struggled with this part as I had to remind myself how the prototype works and why I'm storing the method in the Book's prototype to begin with.
Once I added the method to the prototype, I was unsure as to how to use the method correctly in my project to update the DOM.

Initially, creating a function in this particular way had confused me in comparison to using ES6 classes, as I had forgotten that this method would only ever be called from an instantiated book object, meaning that 'this' refers to a property within the book object.

To use the method, I need access to a book object, so I once again needed to find an ID and the correct book in my library.

<figure style="text-align: center;">
  <img src="/public/images/the-odin-project-images/library-project/check-if-read-function.png" alt="Alt text" class="md:p-4 md:float-right md:w-1/2"/>
</figure>

So, I check if the user clicks on a 'read' button, I store the id of that button in 'id', followed by finding that specific book in my library and storing it in book. Now that I have the book object stored in book, I can call the 'updateRead' prototype method. If the book exists, I call book.updateRead, which simply switches the key:value pair to read: true/false. Depending on whether or not the 'key' read is true or false, the textContent of the target element (the read button) is set to either no or yes via ternary operator!

I'll admit, after everything, I struggled with the prototype method the most, as it didn't really occur to me that I simply had to use the prototype method just to change the value of 'read' inside of the object itself, and then change the textContent of the element based on the value in the objeect. This is definitely an area that I need to improve upon.

## Conclusion

It was certainly a humble reminder that there's always something to improve on, even the 'basics'. Admittedly, I was quite demoralised when I realised that I had become stuck on something that I thought I had an understanding of, but in the end, I was able to go back, break the problem into smaller chunks and complete the project from scratch. Now, this time I'll properly re-factor the constructor functions into ES6 classes!

You can find my code <a target="_blank" href="https://github.com/Moomins07/project-library-revised-top" style="color: #312e81;">**here**.</a>
