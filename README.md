# react-developer-portfolio

## Purpose

The purpose of this app is to demonstrate our knowledge and understanding of the React.js front-end framework

## Screenshot of App Homepage


## Educational Concepts Implemented
>React.js

>Node.js


## Links

Link to deployed application...


Link to GitHub repo...
https://github.com/Pkrysinski/React-Developer-Portfolio


## User Story

AS AN employer looking for candidates with experience building single-page applications...

I WANT to view a potential employee's deployed React portfolio of work samples,
SO THAT I can assess whether they're a good candidate for an open position.

## Acceptence Criteria Notes

GIVEN a single-page application portfolio for a web developer...

- - - - -
WHEN I load the portfolio,
THEN I am presented with a page containing a header, a section for content, and a footer.
>DONE: Header, content section, and footer all stubbed up and functional.


- - - - -
WHEN I view the header,
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio.
>DONE: Finally got the React Routing working!  Navigation titles now function as working links to tell the react-router-dom what to replace in the content section of the page with whichever link's component was clicked.


- - - - -
WHEN I view the navigation titles,
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted.
>DONE: Implementation of NavLink logic in the new StyledNavbar.js file now replacing the old Navbar.js file.  This allows us to check for isActive or isPending attributes to the component in which we're looking at.


- - - - -
WHEN I click on a navigation title,
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted.
>DONE: This now works with the previous requirement with implementation of the NavLink attributes, and the correct page is loaded on the screen.


- - - - -
WHEN I load the portfolio the first time,
THEN the About Me title and section are selected by default.
>DONE: This is now the default page when the app is loaded up.


- - - - -
WHEN I am presented with the About Me section,
THEN I see a recent photo or avatar of the developer and a short bio about them.


- - - - -
WHEN I am presented with the Portfolio section,
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories.


- - - - -
WHEN I am presented with the Contact section,
THEN I see a contact form with fields for a name, an email address, and a message.
>DONE: Full name, email address, and textarea with message all implemented.


- - - - -
WHEN I move my cursor out of one of the form fields without entering text,
THEN I receive a notification that this field is required.


- - - - -
WHEN I enter text into the email address field,
THEN I receive a notification if I have entered an invalid email address.
>DONE: Email validation implemented and tested.

- - - - -
WHEN I am presented with the Resume section,
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies.


- - - - -
WHEN I view the footer,
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter).


- - - - -
TODO LIST...
-Need a footer component (and maybe a header?).
-Need to implement tailwind/CSS.