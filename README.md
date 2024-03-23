# NetFlix GPT
It replicates the core features of netflix with a twist of GPT.
With the help of GPT one can get suggestion  for movies, shows and books. 
According to his mood and wants.

## Working of Project
- Create React App
- Header
- Routing of App
- Login Form  (made the same form toggle  with the help of variable useState hook)
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying app to firebase production
- Create Sign Up User Account
- implement Sign In user Api
- Created Redux Store with UserSlice
- Implemented Sign Out
- updated profile Api call
- showed photo in user icon
- BugFix - Sign up user displayname & profile picture update
- BugFix- if the user is  not logged in then redirect to /browse to login page & vice versa 
- Unsubscribe to the onAuthStateChanged callback
- Added hard coded values to constant file if we need to change photo url or LOGO from there we can
- Registerd for TMDB API & create an app & get access token 
- Get Data from TMDB now playing movies list API
-  Show Movie List Page which contains movie cards showing details
- created custom hook for nowPlayingMovies & upate the store with movies data
- created a movie slice
- planning for MainContainer & SecondaryContainer 
- Fetch data for trailer video from youtube embded video code and made it autoplay & mute
- updated the store with trailer video data
- tailwind css to make mainContiner & secondaryContainer 
- Build secondary container
- Build Movies List
- Build Movies Card
- AND TMDB IMG_CDN_URl for movies poster
- And fetch TMDB api of popular movies
- Added other trending API fetch
- GPT search Button
- Made Gpt Search Page


## Features
- Login/Signup page: User can create an account or log in using their email id's (gmail is supported).
     - Sign In /Sing UP Form
     - Redirect to Browse Page
- Browse (After Authentication)
   - Header
   - Main Movie
      - Tailer in Background
      - Title & Description
      - MovieSuggestion
           - MovieList * N
- NetflixGpt
   - Search Bar
   - Movie Suggestions


## Technologies Used
- Python
- OpenAI API (GPT)
- React
- Firebase
-Tailwind CSS

## Installation and Setup
1. Clone the repository:
git clone

2. Navigate to the project directory: cd netflix-gpt

3.Install dependencies using npm:
create React App
npm install
Configured TailwindCSS

4. Start the development server:
 npm run start 

This will start the development server. Open http://localhost:3000 in your browser to view the application.
Generate passwords by adjusting the length and selecting options for including numbers and special characters.
Click on the "Copy" button to copy the generated password to your clipboard.

## Deployment
To deploy this app, you will need to build it first by running

npm run build