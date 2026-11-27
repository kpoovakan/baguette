# To-Do List
Pretty self-explanatory...

## Do This Now
- [x] Displaying localStorage.temp
- [x] Button that can add items to days
- [x] In function for adding items to days, somehow configure the date where the item is added to the dashboard versus the date the item will be delivered to customer
- [x] Saving things to localStorage
- [x] Finishing unfinished buttons in navbar
- [x] Separate pre-release page without cloud features

## Do This Later
- [x] Connecting localStorage to cloud
- [x] Allowing items to be checked off
- [x] Editing previously created items
- [x] Add day of the week (Minggu, Senin, Selasa...) to top of columns
- [x] Add an alert to frontend to warn and disable using the word "constructor" anywhere in Baguette user input
- [x] Saving an item's position in its column to localStorage and to the cloud
- [x] Some way to move items from one day to another (one column to another)
- [x] In function for adding items to days, write code for custom "production stages" (option is currently in dropdown but commented out, uncomment it and add onclick to parent element)
- [x] Add a color-code chart to the bottom of the screen or something. Its entire div tag would be passed from the backend, and the frontend just appends it to the end of the document. That way, guest users won't see the color-code chart (because div style="display:none;") but registered premium users can have the color-code chart.
- [x] Add something in navbar to view plan info, and premium users can see who else is on their team and therefore can view their info
- [x] Change the CSS design of buttons and stuff, to have it match the input styles; in addition to :hover, also add :focus for keyboard accessibility
- [x] Fix bug where reloading the page while editing an item will make the item disappear
- [ ] When connecting localStorage to the cloud, figure out how to check for new data upon a new session or something without making it happen whenever reload is for resetting the dashboard
- [x] Add "leave? changes you make may not be saved" whenever user attempts to leave and saveNowButton is enabled
- [ ] Fetch new data upon page reload
- [x] Editing items and editing the time doesn't save the correct am/pm, fix this bug
- [x] Fix bug where the popup when sending data to cloud won't be closed and therefore saveNowButton(0) doesn't run
- [x] Fix bug where running uiLoginSetup() as a guest (after updating the dashboard from adding or editing items) it opens the welcome (account+team) dialog every time
- [x] Add warning for small screens
- [ ] Finish Features section of logged-out page


## Do This Sometime Within The Next 314 Years
- [x] Button to request data deletion
- [ ] Some way to contact developer
- [ ] Meta tags for description, gsc, responsiveness, and language, then remove the noindex
- [x] In function for adding items to days, make it also automatically add the item to the dashboard without having to reload the page