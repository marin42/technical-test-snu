Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ? 
- Which feature did you develop and why ? 
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 


## ANSWER

I respected the given "emergency context", therefore I only tried to make the app deliverable, making only vital fixes and improvements.

Corrected bug list:
- App crash when using user quicksearch.
- 'Name' field was not sent when creating a user from the user page.
- Project view wasn't working correctly due to a wrong api payload (array instead of object).
- User was not redirected to project view after creating a project.
- Hrefs from the field "url" on project were not opened as external hrefs.
- Update button on user view did not work.
- The /activity GET call did not handled the `user` filter correctly.
- The calendar switch was not working on activities view.
- (NOT FIXED) 'unique' property on user name is not working, but in order to fix it I would have to drop the existing database.

Features:
- Added password length check matching server rules on both signup page and user creation page.
- Added an endpoint to access "Organizations" ressource.
- Added a switcher on signup page to pick an existing organization, as user should not have the possibility to put his own organization (personnal interpretation).
- Made the all calendar clearer, disabling the addActivities switcher/button when the lines are already added.
- Made the calendar clearer, blocking the max hours user can input in a day to 8, whatever the project, you cannot declare working more than 8 hours a day.

Feedback:

I would definitely advice not to deliver an app at this state of developpment. The calendar page was definitely the fuzziest one, due to several bugs and uncleared UX. I made it a bit clearer but it would imho need an improved UX/UI, or at least, a tutorial.


About the architecture:
- I would drop the use of redux as it is only used for the setUser action.
- CRUD components are missing consistency as they sometimes are in the same file and sometimes not.
- UX is missing consistency, User view is directly on "edit" mode and other aren't. The fields on ressources are sometimes accessibles in edit mode but not displayed on view (if they are useless than we should delete them).
- Lack of consistency on what should be the main identifier: email or username.
- Lack of consistency on variable name, username is sometimes "name" sometimes "username", "organisation" is spelled in french on the front and in english on the backend "organization".
- The account page seems either unfinished or useless, as I can access my own profile on the users page.


Thank you guys for the test, it was quite interesting, I usually do tests that requires to build an app from scratch implementing only a given feature, this approach is different and was funnier.

Marin