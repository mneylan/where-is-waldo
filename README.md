A take on the popular children’s books, 3 characters from Where’s Waldo are hidden throughout the map and the user is tasked with finding them. 

The backend is built with Ruby on Rails and the frontend with React. The database stores the x and y coordinates of the characters on the map, as well as a list of players and their scores. 

At the start and end of the game, a Ruby DateTime object is created, with the difference being the player’s score. When a user clicks on the board and selects a character, the Fetch API makes a call to the backend to check if the character is near where they clicked. Another Fetch call at the end of the game displays a list of high scores with an option for the user to add their name to the list.
