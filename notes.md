# Section 1, Lecture 4

_Command Line Interface (CLI):_
 * A utility to type commands to your computer rather than clicking
 	- Bash on Linux,
 	- Terminal on Mac,
 	- Command Prompt on Windows,
 	- and other replacements...
 [resource for learning command line](http://cli.learncodethehardway.org/book/ ) 
 
 # Section 2, Lecture 6

 ## V8 The Javascript Engine

 * The heart of node.js


_processors, machine code, and c++:_
 
 * When you buy a machine you look at the processing power
 	* this is the microprocessor (a tiny machine) - small machine that works in tandem with
 	electrical inputs ultimately to do a job. We give the processor instructions. A microprocessor speaks
 	a language. Not all processors speak the same language.
 	* EXAMPLE of languages:
 		* IA-32
 		* x86-64
 		* ARM
 		* MIPS
 * These languages are called _machine code (aka machine language):_
 	* programming languages
 	* spoken by computer
 	* processors
		* every program you run on your computer has been converted (compiled) into machine code
		* we write in these languages that are converted into machine code

 * Languages built on each other 

	#### 1. Machine Code (lower level)
	### 2. Assembly Language
	## 3. C/C++
	# 4. JavaScript

 * Node is written in C++
 * V8 is written in C++ (this is the thing that converts JS into machine code)

 # Section 2, Lecture 7

 * JavaScript engines and the ecmascript specification

 _Ecmascript:_

 * The standard JS is based on
 	* needed a standard since there are so many search engines

 * JS is the language that we are writing and ecmascript is the standard

 * V8 abides by the standards. It makes sure that the JS code that is written is standard and behaves the way the JS should.

 _JS Engine:_

 * a programming that converts JS code into something the computer processor can understand

 # Section 2, Lecture 8

 # V8 Under The Hood

 V8 - open source. JS engine. V8 build to be used in google chrome browser. 

 # Adding Features to JS
 * This has to do with the notion of node.js

 * V8 can run standalone or can be embededd into any C++ application

 * We write JS code and it is passed to the V8 (C++) engine and converted to machine code, BUT we can also embedded V8 into your own C++ Program. Code runs through V8. It still generates that machine code, there are hooks you can use to add features to JS.

 * V8 is just C++ so it allows you to add to it and make it available to your JS code.

 * By adding V8 into your own C++ program, then your JS code knows more. V8 makes your JS do more.

 * Shell is a C++ program that runs in the command line, but it embeddeds V8.

 In shell you can write commands in C++ embed V8 and your porgram can convert it to JS.

