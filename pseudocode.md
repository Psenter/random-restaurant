# MoSCoW
### Must have:
* Display food name
* Display cuisine type
* Display food description
* Open hours
* Location of restarurant
* Reactive page
### Should have:
* Place to swap between menu items/type
* Restaurant picture/icon
### Could have:
* Food prices
* Pictures of the food
#### Won't have:
* Changing menu items based on the day

# Atmoic design
### Atoms:
* Menu type/item button(s)
* Open hours
* Location
* Name of restaurant
* Food name
* Cuisine type
* Food description
* Restaurnt icon
### Molecules:
* Header
* Menu nav bar
* Food container
### Organisms:
* Display
* Change menu function
* Objects

# Questions/Notes:
### Questions:
* How to get food to change depending on what menu is clicked
* What should landing page look like? (Should there be one? or just go straight into menu?)
* What name am I going to use?
* How do I make my own API that I can call? (stretch goal, refer to instructions)
* How to get local storage to work? (look at mini project)
### Notes:
* Import axios into project
* Remember how to make the axios call
* Look at mini debug project for code snipits that might help
* Get API from the project instructions
* Page must be reactive
# INIT:
1. landingPage:
   * Where user goes when they open the page
   * Shows each menu
   * Description of the restaurant
   * DISPLAY header organism
2. menuPage:
   * DISPLAY header organism
   * DISPLAY food container organisms
   * makes call to correct file to display data

# Procedural:
## BEGIN
* User travels to page
   * UI DISPLAYS showing which menus are avalible (Maybe a description of the restaurant?)
* User clicks on one of the menus
   * Check what page was clicked on
   * Make call to API to gather data for page
   * Page DISPLAYS the data gathered
   * User can view the data from API
## END

# Functional:
```
onLoad {
    DISPLAY landingPage for user to see
}

buttonMenu event listener {
    when button is clicked make call for data
    DISPLAY correct data for menu page
}

buttonHome event listener {
    take user back to landingPage
}
```