# Mixed Messages

---

### A Codecadmey Portfolio Project - [Full Stack Engineer Path](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)

---

## Table Of Content

+ [Introduction](#introduction)
+ [Functionality](#functionality)
+ [Reference and Version](#reference-and-version)
  + [Reference](#reference)
  + [Version](#version)

## Introduction

"Mixed Messages" is a Node.js console app that generates
random messages each time a user runs the program. In this
program, we took it to Hogwarts - generating random messages,
predictions and suggestions to users.

## Functionality

The source code of this program starts with declaring/initiating
a variable holding an array of names of Harry Potter Characters - `m1`.

It goes on, declaring two more variables; one, an array holding details of the character - `m2`.
The other, an array, holding kinds of pets owned in the movie - `m3`.

The first two functions generates random Index to loop through `m1`/`m2` and `m3` respectively -
`randomIndex1()` and `randomIndex2()`.

The program then gets user input synchronously - `prompt-sync` Node module. At this point,
it leverages a function - `welcome()`, which prints a welcome message if the user is a fan,
or an error message if the user isn't. Finally, it returns `true` if the former is the case and
`false` if the latter is.

The main functionality lies in the `MixedMessages()` function - this generates mixed and somewhat funny
messages, suggestions and predictions based on the Harry Potter movie.

Finally, we linked the two functions - `welcome()` and `mixedMessages()`; by the former's return value - `true` or `false`.
If the user is a fan (`welcome()===true`), Mixed Messages will be generated. Else, the program ends.

It is helpful to note that the user can opt out of the program anytime - `Ctrl` `c` _(Windows)_ or `Cmd` `c` _(Mac)_.

## Reference and Version

### Reference

In the process of completing this project, _sites/materials_ were consulted. They include:

+ [Getting User Input in Node.js](https://www.codecademy.com/articles/getting-user-input-in-node-js)
+ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
+ [How To Write A Good README For Your GitHub Project](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

### Version

+ _node v16.2.0_
+ _npm v7.13.0_
+ _prompt-sync v4.2.0_
+ _ansi-regex v4.1.0_
+ _strip-ansi v5.2.0_
+ _git v2.31.1.windows.1_