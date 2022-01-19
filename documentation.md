# DOCUMENTATION
-----------------------------------------------------------
## PRESENTATION
### FILES
- index.html
- scriptLoader.js
- global.js
- fetch_api.js
- interfaces.js
- front.js

### FONCTIONNEMENT
- The main header propose a script to init. Each button call functions from **interfaces.js** for adapt html and search button function.

- The search bar under it allows different things depending on the chosen script, generally init a global var like USER_NAME, and call functions from **fetch_api.js**.  

- When user run the search, **fetch_api.js** functions request an url with fetch(), sometimes adding headers or parameters, that directly fetch data from API. They process the answer after receiving it (Promise of fetch()), and generally call a function from **front.js**.

- **front.js** contains dom vars and function for create the DOM according to script, creating its elements fill with information from objects, and fll the innerHtml or append created nodes. 
-----------------------------------------------------------
## FILE STRUCTURE AND FUNCTIONS
### index
### js/

-----------------------------------------------------------
## FILE STRUCTURE AND FUNCTIONS

### index.html

#### main header 
Header with navbar containing buttons for load a script.  

#### article #main   
Header containing the search text input and button for run the function according to the choosen script. 

#### section #card (hidden)   
The card template using by CARD GENERATOR.

#### script: scriptLoader.js   
Load js scripts files using Promises and `.then()`.


### js/ 

#### scriptLoader.js  
For load all js scripts.  

#### main.js - Init, Events listeners
- Add listeners for main header navbar
- define USER_NAME (demo 'Gin-is-not-real') and _searchBarInput value with these.  
- call one of scripts from interfaces.js

#### global.js
Contains vars and globals functions, like getUserRoute(username)  

- API_URL 
- myHeader *Headers Object, use for append request header, like user-agent*
- USER_NAME
- USER

- PROPLIST_USER *Array of strings storing JSON keys about user*  
- LIST_TO_LOAD *Array*

- getUserRoute(username) *return string for fetch user data by concatenate api url, route identifier (here '/users') and username send as parameter.*


#### scripts/

##### front.js - Display
- Dom vars
- functions for generate and display the front
- functions for create HTML elements

- functions for generate and display the front:
    - function createCard(obj)
    - function displayExplorerPage(obj, url)
    - function displayPropList(json)
    - function formatDate(date)

- function for create HTML elements
    - function createListLine(prop, value)
    - function createLink(value)
    - function createFetcherLink(value)
    - function createObjectElt(obj)
    - function createAppropriateElement(value)


##### interface.js - Load a script
Function for "load" the choosen script by: 
- adapt html (clear inner html, change id, texts)
- change event of searchbar

Functions are:
- function loadCardGenerator()
- function loadMyHub()
- function loadApiExplorer()

##### fetch_api.js - Fetch and Entities
- function fetchAndCallback(url, cb)
- function fetchAndDisplay(url)