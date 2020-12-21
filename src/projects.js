//template: projectName: [
//  tiitle,
//  [technologies used]
//  description
//  site link
// code github link
// src of project image
//]
import portfolio from './portfolio.png';
import robofriends from './robofriends.png';
import todomanager from './todomanager.png';
import tictactoe from './tictactoe.png';
import starwarsthing from './starwarsthing.png'
import faceapp from './faceapp.png'

export const projects = [
    {
        project: [
            'Portfolio',
            [
                'react', 'JavaScript', 'sass', 'html', 'npm'
            ],
            'It is a simple portfolio that has been created with the help of technologies like React, SASS and others mentioned above. Thanks to the React technology, the website is stable and highly efficient, and its structure is based on proprietary components, allowing them to be reused in other projects.'
            , 'https://github.com/Regnar110/react-portfolio'
            , 'https://github.com/Regnar110/react-portfolio'
            , portfolio
        ]
    },
    
    {
        project: [
            'To-Do Manager',
            [
                'react', 'JavaScript', 'sass', 'html', 'npm', 'tachyons' 
            ],
            'This is my first simple to-do list management application, developed using the above mentioned technologies. There you can add new things and delete those that are no longer needed.'
            ,'https://mw-todoinreact.netlify.app'
            ,'https://github.com/Regnar110/react-todomanager'
            , todomanager
        ]
    },

    {
        project: [
            'RoboFriends App',
            [
                'react', 'JavaScript', 'sass', 'html', 'npm', 'tachyons' 
            ],
            'The roboFriends application is an application developed during the React.js basic course. It is an application where the user can search for robots that are displayed in real time in response to what is in the input field. The list of robots is downloaded using the API, i.e. the data is downloaded from an external website and used in this application.'
            ,'https://mw-robofriendsapp.netlify.app'
            ,'https://github.com/Regnar110/robofriends-app'
            , robofriends
        ]
    },

    {
        project: [
            'Tic-Tac-Toe',
            [
                'react', 'JavaScript', 'sass', 'html', 'npm' 
            ],
            'This is a simple tic-tac-toe game. The game was created with react.js. A "winning algorithm" has been built into the game, which determines which player wins the game. The game also has a simple console that indicates the players current move, and a logical structure created to prevent unwanted actions. The entire structure of the application is based on manipulating the state of the application.'
            ,'https://mw-tictactoe.netlify.app'
            ,'https://github.com/Regnar110/react-tictactoe'
            , tictactoe
        ]
    },
    {
        project: [
            'Star Wars database',
            [
                'react', 'JavaScript', 'AJAX', 'sass', 'html', 'npm', 'API'
            ],
            'An application that, using AJAX and API, downloads and processes data in a specific way, which will then be used to render components and their content for the application. The data used to create the application were imported from SWAPI applications and APIs created by GitHub users.',
            'https://starwarsthing.netlify.app',
            'https://github.com/Regnar110/react-sw-movies',
            starwarsthing
        ]
    },
    {
        project: [
            'Face recognition',
            [
                'React', 'JavaScript', 'AJAX', 'sass', 'npm', 'API', 'Node', 'Exporess', 'Knex', 'Bcrypt', 'PostgresSQL', 'Postman', 'Tachyons', 'Heroku'
            ],
            `Application that detects faces in photos. You can log in using the email: guest@gmail.com, password: 123456789 or create a new account.always with . Test this app with any photo URL which have jpeg, jpg, png or other photo file extension in query`,
            'https://mw-face-reco.netlify.app',
            'https://github.com/Regnar110/faceApp',
            faceapp
        ]
    }

]