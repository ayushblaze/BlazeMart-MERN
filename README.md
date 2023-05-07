# BlazeMart - A MERN ecommerce store.

<h3>30th April, 2023 (Frontend Only)</h3>
<ol>
  <li>Completed the Header Navbar, apparently the "ml-auto" class wasn't working for some reason, so I had to add an inline style to move the Cart and Sign.</li>
  <li>Added the Footer too.</li>
  <li>Right now, we're fetching all the products from a products.js file, but later we'll fetch them from a DB.</li>
  <li>Added the HomeScreen component which renders all of the items (products) coming from the products.js file, using map we loop over all of the products in products.js and send them as props to the Product component</li>
  <li>
    In the HomeScreen, we're using a Product component which renders cards for each product containing an image, name, price and rating/review of the product, however to render the rating/review of the product, created another component Rating.js which renders stars based on the rating value coming in as props.
  </li>
  <li>
    When we click on a card information about that particular product is rendered using the ProductScreen.js component.
  </li>
</ol>
<br>
<h3>3rd May, 2023 (Starting out the backend)</h3>
<ol>
  <li>
    Talking about modules, right now, I'm gonna use commonJS syntax but soon I'll shift to ES6 modules syntax.
    The Products file (the one present inside backend/data) uses ES6 "export default products", changing it to export.default = products for now.
  </li>
  <li>
    Added a /api/products route, we'll now call this route from the frontend.
  </li>
  <li>Now, there's a backend route which gives you all of the products from a static file the endpoint is "/api/products" since the server is running on port 5000 and we make a call from the frontend (port 3000) we get a cors error, now to tackle the cors error in the frontend's package.json we added a key value pair which was "proxy": "http://127.0.0.1:5000" and this is something I learnt today.</li>
</ol>
  <br>
  <h3>5th May, 2023</h3>
  <ol>
    <li>Setup Atlas, connecting to the DB through the db.js file inside backend/config/.</li>
    <li>Setup mongoose for communicating with the DB, setup mongoose Schema for our data.</li>
    <li>Added the colors package to make the console message clearer.</li>
  </ol>
  <br>
  <h3>7th May, 2023</h3>
  <ol>
    <li>Added dummy user data, since we're gonna need an admin user to populate the "user" field in products data.</li>
    <li>Created a seeder.js file which would import/destroy data depending on the flag you pass it.</li>
    <>
  </ol>
