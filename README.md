<h1>CODING TEST</h1>
1.	There is sample well data attached. Load the data into your favorite database (Mongo preferred).
<br>
2.	Build a server with your favorite language (Node preferred) to communicate directly with the database and client (REST expected).
<br>
3.	Build a React front-end with the following:

      a. A React component containing a Leaflet map, which visualizes the well locations.
      
      b. Please plot the latitude and longitude. Size the markers by the performance metric (here it’s fake_number). Add a hover-box      which lists the UWI and Operator name.   

      c. A React component with a list of all UWIs and their associated lease, operator, and fake_number.
      
4.	Host your site on Heroku
5.	Share your github repository
____________________________________________________________________________________________________________________________________
<h1>HOW TO RUN THIS APP</h1>

1. npm init package.json
2. npm install all node packages in root directory
2. npm start
____________________________________________________________________________________________________________________________________

<h1>PROGRESS (look at word document for screen shot images)</h1>

Heroku site: https://dashboard.heroku.com/apps/sheltered-eyrie-85796

1.	Step one completed for importing into MongoDB

**Sources:**
https://dba.stackexchange.com/questions/159390/mongodb-all-commands-spit-out-not-authorized-on-admin-to-execute-command
http://docs.mlab.com/migrating/
Also, configured this database with the final Heroku application (created these two separately)


2.	Npm start is the server built for having the application to show up on the webpage (start.js although in package.json, main= server.js)

3a. &3b.	See github for folder structure and react components in src file to develop the map and see converted csv file to geoJSON for plotting. Used the React leaflet map demo as a reference point, and I was able to render the map and well locations. However, I am still working on making like a bubble map and size based on the marker size. I would have to redo geoJSON to include fake_number and attribute that as markersize. This would need more digging in the leafletJS documentation
Extra folder to show previous iterations of this folder structure (see research folder)

In addition to the map, React hoverbox would be necessary to display well information: https://www.npmjs.com/package/react-hoverbox

https://stackoverflow.com/questions/44566340/show-a-component-on-hover-in-reactjs

https://github.com/FormidableLabs/radium/issues/524

I also understand at this current deployment, mLab imported CSV data is not called on for the well data and showing the data. The only connection front has to back is the production mongoDB configuration variable I set with the existing mLab I have outside of the final heroku deployment I showed on the site. That would involve another component to connect to remote database, export as a JSON in the same directory as src file, and then undergo csv-to-table npm package methods. Then I could continue the same process of rendering on to the page using react-router. I could also interact with mLab as well by exporting the database back to csv and then calling a csv-to-geoJSON npm package to export the output file I already manually created in the src folder.

I am also aware I do not protect myself from database authentication, as db username/password is somewhere in this folder structure when connecting to the remote database.

https://www.npmjs.com/package/csv-2-geo-json

**Sources:**

https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50

Credits for Map.js App. Js, Index.js, Scripts folder, config folder, and index.css: https://github.com/clhenrick/React-Leaflet-demo 

Credits for map components for future rendering:
https://react-leaflet.js.org/docs/en/components.html#maplayer

**Research:**

csvimport- initially imported file to Robo3T for local mongoDb database. Also includes MERN stack rough work

leafletjs- all the components from documentation

react-leaflet-demo- Map demo of Brooklyn's subway lines and respective coordinates plotted from geoJSON

3c. With Table.js, created the React component to render the table of well data. This is using the npm package csv-to-table react

https://www.npmjs.com/package/react-csv-to-table

However, I would need to use react-router to show the table in another route: https://reacttraining.com/react-router/web/guides/philosophy

https://www.npmjs.com/package/react-router

<h1>TECHNOLOGIES USED:</h1>

MERN stack, 
React-leafletJS, 
Heroku/mLab, 
(see package.json for all node modules used)



