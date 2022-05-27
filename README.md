# Social Network API
    
## Description
Social Network API is strictly the back end of an application that allows for the following crud format functions: creating, updating and deleting users, and adding existing users as friends to other existing users, AND creating, updating and deleting user thoughts, and existing users having the ability to react to other users' thoughts. Lastly, friends and reactions can be removed from users and thoughts. This functionality allows people to post text content, have conversations and build virutal community.
    
## Table of Contents
- [Social Network API](#social-network-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
    
## Installation
You must have Node.js, Express.js, mongodb + mongodb compass and insomnia installed on your computer. After cloning the repo, open the main index.js file in the terminal and type npm i to install the necessary packages. 

## Usage
then type node index.js to start the server (index.js). open mongodb compass and click connect, then open insomnia. Use the route requests in insomnia to perform the get, post, put and delete paths and watch your database change with users, friends, thoughts and reactions. have fun! 
here are the following route paths for ease of use: 
Post User: localhost:3001/api/users 
then in a JSON body, follow the example...
{
	"username": "Smokey the Bear",
	"email": "SMokes@gmail.com"
} 
Get User: localhost:3001/api/users/pi/users/  
Get User by ID: localhost:3001/api/users/<userid>  
Edit/Put User:  localhost:3001/api/users/<userid>
follow the JSON example above
Delete User: localhost:3001/api/users/<userid>
Post Thought: localhost:3001/api/thoughts
then in a JSON body, follow the example...
{
	"thoughtText": "wahooo!!!!",
	"username": "Pablo Magan",
	"userId": "629003aa5b66bd942deca234"
}
Get Thought: localhost:3001/api/thoughts/
Edit/Put Thought: localhost:3001/api/thoughts/<thoughtid>
then in a JSON body, follow the example...
{
	"thoughtText": "I like to take walks in the sun."
}
Delete Thought: localhost:3001/api/thoughts/<thoughtid>
Add/Post Friend: localhost:3001/api/users/<userid>/friends/<other-userid>
Delete Friend: localhost:3001/api/users/<userid>/friends/<other-userid>
Post Reaction: localhost:3001/api/thoughts/<thoughtid>/reactions/
then in a JSON body, follow the example...
{
	"reactionBody": "----------------------",
	"username": "Judy Magan"
}
Delete Reaction: localhost:3001/api/thoughts/<thoughtid>/reactions/<reactionid>
Make sure you use the proper request! (GET, POST, PUT, DELETE)
    
## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    
## Contributing
Feel free to contribute

## Questions
If you have any questions, feel free to contact me:

https://github.com/Jnbanks

joku.banks@gmail.com

Link to demo video: https://drive.google.com/file/d/1G9-3FTOWfUxyaNXs2tyf7VXGy_Zg434T/view?usp=sharing 
Link to Github repository: