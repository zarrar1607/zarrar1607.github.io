# TRM WEBSITE

The Team Robocon MJCET was founded in 2008 by a group of students from MJCET who believed they could bring about a robot-revolution in Hyderabad. We started from a group of amateur robot-enthusiasts and have come a long way since. Our national level rankings have improved significantly over the years due to the increasing exposure and experience gained through participation in the ABU ROBOCON.

TRM Website is created with mindset of keeping it flexible, dynamic, and responsive. Note that creating this website cost me no money.  I used basic web technologies to develop this website. So, even for a beginner, the code of the website will be understandable. If you like the website template or any part of it (eg: A button or form, etc), you can use it to them to create your own website. This documentation is created with respect to those(TRM memebers) who want to maintain this website and those(other than TRM memebers) who want to include the template from my website into their own.

The technolgies that are used to from developing the website are:

1. HTML
2. CSS
3. BOOTSTRAP CDN (v4.6)
4. Font Awesome
5. JQuerry CDN (v3.5.1)
6. JavaScript
7. fslightbox-basic (v3.3.0)
8. Lightbox2 (v2.8.2)
9. Google Sheet

It can be said that 90% of the website uses front-end frameworks only. I haven't added the connection of Google sheets in this website. The idea is to use Google Sheets to store the Email Id if those users/clients that subscribe to our team. The whole website is divided into sections whose background are either dark or light or white.

# STRUCTURE OF FILES

It is important to know the file structure before undersatnding each page and the classes used.

```
Website
|----fslightbox-basic-3.3.0
     |----fslightbox.js
|----scripts
     |----mail.js
     |----side-nav.js
|----stylesheets
     |---- main.css
|----images
|----pdf
|----index.html
|----teams.html
|----certificate.html
|----robocon.html
|----R&D.html
|----events.html
|----contact.html

```

# TABLE OF CONTENT

<table style = "margin-left: auto;
  margin-right: auto; text-align: center; font-size:35px">
<tr>
<tr>
<th colspan="2">INDEX</th>
</tr>
<td colspan="2">Home/Index Page</td>
</tr>
<tr>
<td rowspan="2">About</td>
<td>Teams Page</td>
</tr>
<tr>
<td>Certificate Page</td>
</tr>
</tr>
<tr>
<td rowspan="2">Robots</td>
<td>Robocon Robot Page</td>
</tr>
<tr>
<td>R&D Robots Page</td>
</tr>
</tr>
<td colspan="2">Events Page</td>
</tr>
</tr>
<td colspan="2">Contact Page</td>
</tr>
</tr>
<td colspan="2">Navbar/Heading</td>
</tr>
</tr>
<td colspan="2">Footer</td>
</tr>
<tr>
<td rowspan="2">Scripts</td>
<td>mail.js</td>
</tr>
<tr>
<td>side-nav.js</td>
</tr>
</table>

# PAGES

### 1. Index Page

The page is divided into 6 sections and it uses simple html and bootstrap like bootstrap jumbotron and containers to divide the page.

The first section is a GIF image of trm that takes up the viewport of the client section. After that the main sections start. Based on these sections only other pages are created.

###### Abu Robocon Section:

1. 1st thing that should be encounter is current year's robocon theme image.
2. 2nd thing is the permanent one. It gives a short desciption about ABU Robocon.
3. 3rd is a button that redirects a user to current ABU Roboc website.

###### About us Section

This section gives a short summary on who TRM is and then there is a button that redirects you to current team memebers page(included within this website).

###### Robots Section

It tells us about the robots and can redirect you to page about the robots that were devloped for Robocon competition and Research & Development.

###### Events Section

It contains past 4 events  conducted by robocon, including 1 ongoing event(if true). The scection is scrollable and contains images of poster. It also tells us if the resgistration are open.

###### Subscribe Section

It just takes the input of user's email id and stores in google sheet. Also it contains social media icon of the redricts a user to social handles of the TRM. When ever you hover on those icons it is padded from bottom to create a jumping effect.

### 2. Teams Page

This page has a bit complex code. It has to know three important things.

First is the bootstrap collapse/accordian wrapper. It toggles the visibility of content across your project with a few classes. It uses buttons to show and hide content. This type of toggle is created for each year Robocon Members.

Second is a grid view of the team members. The Team Learders will have 4 columns in a row and the other members of the Team will be divided into 6 columns in a row.

Third and the most important is flip cards/ flip images. Initially only images of each team member is shown. When user hovers over the card it flips and gives the details of the memebers. For team leaders we have there role and social handles but for memebers we have only social handles of the team members.

### Certificate Page

The page is divided into section: Robocon Certificate and Other Competition Certificate.

###### Robocon Section

This also contain collapse and each collapse contains a gallery of robocon certificate created using lightbox2 framework.

###### Other Certificate

It is a simple gallery of certificates from other competition which also created using lightbox2 framework and it is a grid view with 3 columns in each row.

### Robocon Robot Page

This page is divided into year wise section with alternate Bootstrap black and light backgrounds. Each section has the content in following order:

1. Heading: ABU ROBOCON Year
2. Second, Theme image
3. Theme Name
4. Theme description with read more toggle and to know about the rules, a pdf is attached(Redirect on button click)
5. Either 3d Rendered Solid images of the bots or the real image of robots.
6. Short summary of the design of the robots(not neccessary) and to know more about the robot design, a pdf is attached(Redirect on button click).
7. A scrollable gallery that uses lightbox2 framework regarding the jorney of that year's robocon.

The most important thing on the page is side bar that expands on hover and contains a link to each year's robocon section (z-index = 1).

### R&D Robot Page

This page is also divided into project wise section with alternate Bootstrap white and light backgrounds. Each section has heading as the namme of the project and the diviede into 2 columns. The left column contains the gallery and right column contains a short summary of the project and the button that redirects to the project thesis.

The most important thing on the page is full sized scrollable side bar that expands on click and contains a link to each year's robocon section (z-index = 1020 to display above header).

The other important thing to notice is gallery. It is created by using fslightbox as lightbox2 doesnot support video popups and the reason for using lightbox2 is that we could add caption in the pop up image of lightbox2(for fslightbox, this is a premium feature - to pay).

Note that the ordeer of columns changes when window size is less than or equal to 576px, so that, gallery comes after content.

### Events Page

This page is divided into two sections.

1. First section contains the information on upcoming events. This section contains either a comming soon image or an event poster on left column and event's imnformation on right. A register button is added that takes the user to google forms for registering(Google forms are currently not link).
2. Second section contains past events that is hidden until user clicks on the button to show it. This section is also similar with event poster on left column and event's information on right.

Note that fslightbox is use for popup posters only.

### Contact page

It contains only one section that is divided into two columns. The left column contains a form that on submit sends a mail regarding any querry to the host/admistrator of the website and in the right column contains the location of TRM, contact info and mailing id. 

# NavaBar/Heading

It is a simple bootstrap navbar(sticky top) that allows the company/TRM logo to float on left which is a link to `index.html` and the links to each on right inline. About and Robot of the navbar are dropdown list. The dropdown elements are bit padded to left.

Only in `index.html`, a TRM Gif is added then the header is comes.

# Footer

It is a simple Bootstrap footer contains 4 columns and the first three only contains links to each page. The next column contains subscription to TRM Mailing list.

The next row contains a copyright of the TRM Page(makes it look professional).

The only difference in other pages and contact page is the footer in contact page contains credits to orginal website developer(this is pernmanent. Please don't change) and the one who is currently maintaining it.

# Scripts

###### Mail.js

It fills up the mail id, subject and body of users mail app.

###### Side-nav.js

It contains both functions, that is, side-nav for the Robocon Page and full-side-nav for the R&D page.
