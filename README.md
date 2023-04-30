# BlazeMart - A MERN ecommerce store.

<h3>30th April, 2023</h3>
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