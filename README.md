<p align="center">
<img src="https://user-images.githubusercontent.com/97575616/153774426-44d9fc7c-dd1f-4fb7-b1aa-bb2c91c2c85c.png" >
</p>

<h1 align="center">Bate-papo UOL</h1>

[![uses-javascript](https://user-images.githubusercontent.com/97575616/152987324-94b641c3-8073-4132-9950-7b7e56179080.svg)](https://www.javascript.com)
![uses-html5](https://user-images.githubusercontent.com/97575616/152926412-a8c6da7f-0d54-4253-a820-cb264210bbcf.svg)
![uses-css](https://user-images.githubusercontent.com/97575616/152917480-e46ad631-d96c-413d-8b62-25012c52c7fc.svg)
![built-with-git (1)](https://user-images.githubusercontent.com/97575616/152927121-6e37ae20-6f09-4f84-9bdf-889ef6ef5773.svg)
![built-with-visual-studio-code](https://user-images.githubusercontent.com/97575616/152921255-9e6ad64b-5a0d-4f28-a3d0-f8c6a2774d85.svg)
[![License: MIT](https://user-images.githubusercontent.com/97575616/152917040-e317b158-cad1-4f6c-8985-0a555783da7e.svg)](https://opensource.org/licenses/MIT)

## Table of contents
* [Project Description](#project-description)
* [Status](#status)
* [Mockup](#Mockup)
* [Requirements](#requirements)
* [Author](#author)


## Project Description
<p align="justify">My fifth project for the Driven Education bootcamp was the JavaScript implementation of a fully functional chat, inspired by the homesick Bate-Papo UOL (famous Brazilian website), using an API to enable communication</p>

### Status
<!-- ![status-finished](https://user-images.githubusercontent.com/97575616/152926720-d042178b-24c0-4d6b-94fb-0ccbd3c082cc.svg) -->
![status-in-progress](https://user-images.githubusercontent.com/97575616/153774620-d6a0a615-9d38-4402-ae72-20c52f8bbd5c.svg)

### Mockup 
<p align="center">
<img width=300px src="https://user-images.githubusercontent.com/97575616/155638279-16b1012e-872d-493b-9112-fc4aaf4cba66.png">
<img width=500px src="https://user-images.githubusercontent.com/97575616/155638289-91159143-f616-4706-a8d9-18f3fff094b0.png">
</p>

## Requirements

* **GENERAL**<br>
    - [x] Do not use any library to implement this project (jQuery, lodash, react, etc), or other languages that compile to JS (TypeScript, ELM, etc), only pure JavaScript.
    - [x] The project must be developed using Git and GitHub, in a public repository.
    - [x] **For each requirement implemented** make a *commit* with a descriptive message of what you have evolved.

* **LAYOUT**
  - [x] Apply layout for mobile

* **CHAT**
  - [x] When entering the site, it must load the messages from the server and display them according to the layout provided
  - [x] There are 3 types of message:
   - Status messages (**Entered** or **Leave** the room): must have a gray background
   - Reserved messages (**Reservedly**): must have a pink background
   - Normal messages: must have a white background
  - [x] Every 3 seconds the site must reload messages from the server to keep it always up to date
  - [x] The chat should have automatic scrolling by default, that is, whenever new messages are added to the end of the chat it should scroll to the end
  - [x] Messages with Privately should only be displayed if the recipient's name is the same as the name of the user who is using the chat (or else he could see messages reserved for other people)   

- **ENTRANCE TO THE ROOM*
  - [x] When enter on the site, the user should be asked with a `prompt`
  - [x] After enter the name, it must be sent to the server to register the user
   - If the server responds successfully, the user will be able to enter the room
   - If the server responds with an error, the user must be asked to enter another name, as it is already in use
  - [ ] While the user is in the room, every 5 seconds the site must notify the server that the user is still present, otherwise it will be considered "Leave the room" 

- **ORDER SUBMISSION**
  - [x] When sending a message, it must be sent to the server
   - In case the server responds successfully, you must get messages from the server again and update the chat
   - If the server responds with an error, it means that this user is no longer in the room and the page must be updated (and thus returning to the step of asking for the name)
  - [x] in this send, you must inform a sender, the addressee and if the message is reserved or not

- **BONUS**
- **ACTIVE PARTICIPANTS**
  - [x] When clicking on the participants' top right icon, the side menu should open above the chat according to the layout. A semi-transparent dark background should be above the chat.
  - [x] When clicking on the dark background, the side menu should be hidden again
  - [x] The site must get the participant list as soon as it enters the chat and must update the list every 10 seconds
  - [x] When clicking on a person or in public/privately, the option clicked must be marked with a check and the others unmarked
  - [x] In addition to the check above, when changing these parameters, the sentence that informs the recipient must also be changed, which is below the message input 

- **LOGIN SCREEN**
  - [x] Instead of a prompt, make loogin screen (according to the layout provided) 
- **SEND WITH ENTER**
  - [x] Make it so that, if the user presses ENTER in the message screen, it will be sent (that is, it should have the same behavior if the user clicks on the send button)  


### Author
---
<div align="center">
<img width= 200px src="https://user-images.githubusercontent.com/97575616/157583676-812b2612-a644-4c18-be9c-61f633406f50.png" alt=""/>
  <p> <i><b>Thales Gomes Targino</i></b> </p>

<br /> [![Twitter Badge](https://img.shields.io/badge/-@thales_targino-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thales_targino)](https://twitter.com/thales_targino) [![Linkedin Badge](https://img.shields.io/badge/-thalesgomest-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-gomes-targino/)](https://www.linkedin.com/in/thales-gomes-targino/) 
[![Gmail Badge](https://img.shields.io/badge/-thalestargino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thalestargino@gmail.com)](mailto:tgmarinho@gmail.com)
  
</div>
