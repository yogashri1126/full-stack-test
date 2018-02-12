﻿**CODING TEST**
1.	There is sample well data attached. Load the data into your favorite database (Mongo preferred).
2.	Build a server with your favorite language (Node preferred) to communicate directly with the database and client (REST expected).
3.	Build a React front-end with the following:
4.	A React component containing a Leaflet map, which visualizes the well locations.
5.	Please plot the latitude and longitude. Size the markers by the performance metric (here it’s fake_number). Add a hover-box which lists the UWI and Operator name.
6.	A React component with a list of all UWIs and their associated lease, operator, and fake_number.
7.	Host your site on Heroku
8.	Share your github repository
____________________________________________________________________________________________________________________________________
**HOW TO RUN THIS APP**

1. npm init package.json
2. npm install all node packages in root directory
2. npm start
____________________________________________________________________________________________________________________________________

**PROGRESS (look at word document for screen shot images)**

Heroku site: https://dashboard.heroku.com/apps/sheltered-eyrie-85796

1.	Step one completed for importing into MongoDB

Sources:
https://dba.stackexchange.com/questions/159390/mongodb-all-commands-spit-out-not-authorized-on-admin-to-execute-command
http://docs.mlab.com/migrating/
Also, configured this database with the final Heroku application (created these two separately)


2.	Npm start is the server built for having the application to show up on the webpage (start.js although in package.json, main= server.js)

3.	See github for folder structure and react components in src file to develop the map and see converted csv file to geoJSON for plotting. Used the React leaflet map demo as a reference point, but still working on rendering map onto the page
Extra folder to show previous iterations of this folder structure (see research folder)

Sources:

https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50

Credits for Map.js App. Js, Index.js, Scripts folder, config folder, and index.css: https://github.com/clhenrick/React-Leaflet-demo 

Credits for map components for future rendering:
https://react-leaflet.js.org/docs/en/components.html#maplayer

Research:

csvimport- initially imported file to Robo3T for local mongoDb database. Also includes MERN stack rough work

leafletjs- all the components from documentation

react-leaflet-demo- Map demo of Brooklyn's subway lines and respective coordinates plotted from geoJSON

5. With Table.js, created the React component to render the table of well data. This is using the npm package csv-to-table react

https://www.npmjs.com/package/react-csv-to-table

**TECHNOLOGIES USED:**

MERN stack, 
React-leafletJS, 
Heroku/mLab, 
(see package.json for all node modules used)



