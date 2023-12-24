
# Pokedex - React Application

The React Pokedex App is a web application that allows users to explore and search for Pokemon information. It leverages React for building the user interface, Redux for state management, and Tailwind CSS for styling. The app makes asynchronous requests to the PokeAPI to fetch and display Pokemon data.

## components

- **Card.js** : Renders individual Pokemon cards.
- **Cardboard.js** : Displays the center console screen for card display.
- **FilterSlice.js** : Allows user to filter Pokemon.
- **Modal.js** : Renders Stats Modal components.
- **PokemonCards.js**: Container component for displaying a grid of Pokemon cards.
- **Search.js** : Allows users to search for specific Pokemon.

### Containers
- **App.js**: The main container component that orchestrates the layout of the entire app.

### Reducers
- **index.js** : Manages the state related to Pokemon data.

### utils
- **Constants.js** : Defines constants for filters and colors.

## Other Files
- **App.css** : Additional styles for the main app component.
- **index.js** : Entry point for the React app.
- **package.json** : Dependency and configuration information.
- **.gitignore** : Specifies files and directories to be ignored by Git.

## How to run on local machine

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Rohitj18/PokeDex.git
    ```

1. Install the required packages.
    ```sh
    cd PokeDex
    npm install
    ```

1. Start the development server.
    ```sh
    npm run start
    ```
1. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view the project.




## Tech Stack

- React
- Redux
- Tailwind CSS



## Acknowledgements


- Credits to the [PokeAPI](https://pokeapi.co/) for providing Pokemon data.


