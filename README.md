# ecm-shop

This web application, which is written in JavaScript using the React library, utilizes Vite as a modern build tool and development server, thus enhancing its overall performance and development experience.

## Getting Started

First, run the development server:

```bash
yarn install  //  To install all dependencies for a project.

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


#### The user interface
  This web uses Ant Design (Antd) and Styled-components for building React-based web applications. It provides a set of reusable UI components, responsive web interfaces .

#### Making HTTP requests

  The front-end application communicates with a RESTful API, which are handled by the Axios library to retrieve product data, which are handled by the Axios library. 

#### Redux Toolkit to manage the ecommerce system's state.

- The productSlice slice handles the product data.
  The productSlice slice manages the product data and includes two createAsyncThunk actions: fetchProducts and fetchProductById. The fetchProducts action retrieves a list of products from a RESTful API by sending an HTTP GET request to the API's base URL with a query parameter specifying the limit of items to retrieve. The fetchProductById action retrieves a single product by sending an HTTP GET request to the API's base URL with the product's ID as a URL parameter. Both actions update the state with the fetched data using the extraReducers property of the productSlice slice.

- The cartSlice slice manages the cart data.
  The cartSlice slice manages the cart data and includes a single action, addToCart, which adds an item to the cart. The action checks if the item is already in the cart, and if so, updates the quantity and total price of the item. If the item is not in the cart, it adds the item to the cart. The cart data is stored in the browser's local storage using localStorage.
#### React Router for handling routing.

- A package that provides tools for managing client-side routing in React applications.

#### Setting up environment variable

```bash

VITE_BASE_URL = https://fakestoreapi.com/products

```

Load environment variable from a .env file into process.env. to define them in a local file.

### Deploy on Vercel

Check out the ECM-Shop website hosted on Vercel at [ECM-Shop](https://ecm-shop.vercel.app/) 


### Here’s how to clear the local storage in Google Chrome:

1. Open the Google Chrome Console by pressing F12 key or right click to select "Inspect".
2. Select “Application” in the console’s top menu.
3. Select “Local Storage” in the console’s left menu.
3. Right click your site(s) and click clear to delete the local storage.

if you need to clear the cart item.