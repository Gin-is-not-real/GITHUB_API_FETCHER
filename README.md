# GITHUB API FETCHER
Some tests to recover and manipulating data from the GitHub API using AJAX.  

Switch the script by links on header navbar, tip your GitHub username and click on search button for run it.  

The information will be retrieved from the API and formatted according to the chosen script.  

**API EXPLORER** just display data and permit to navigate into informations by links.  

**CARD GENERATOR** generate a visit card with user informations from API.  

**HUB** will display information and access to the most useful sections.


## SCRIPTS PRESENTATION

### API EXPLORER
Fetch data from API and display all result in the form of a key-value pair.  

If the result of one data is a link to a website, a link will be generated.  

if it represents an API route (a link to a sub-data), for example repositories data or commits, the search will be restarted and the data redisplayed, without reloading the page (AJAX).


### CARD GENERATOR
Fetch data from API and display user informations in form of CARD. (work in progress).  

Displayed data:
- avatar logo
- creation data and last update date
- name
- location
- number of repositories

Soon:
- [ ] total chars
- [ ] languages - number of chars for each


### HUB
Fetch data from API and display most usefuls informations and links to navigate in some sections, like the last updates or commits, quick access to repository commits, repository sorting... . (work in progress). 