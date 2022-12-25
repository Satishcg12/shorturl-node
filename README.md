# Short URL

A web app that allows users to create short, easy-to-remember URLs for long, complex URLs.
## Features

   - Generate short URLs for long URLs
   - Customize short URLs
   - Redirect users to the corresponding long URL when a short URL is visited
   - Search for short URLs in the database
   - Login using OAuth
   - Save short URLs and long URLs to a database
   - Expire short URLs after a specified time period
   - Validate long URLs to ensure they are valid and properly formatted

## Screenshots

Insert screenshots of the web app here.
## Installation

To install and run this web app, you will need [Node.js]() and [MongoDB]() installed on your machine.

   1. Clone this repository: `git clone https://github.com/user/short-url.git`
   2. Navigate to the project directory: `cd short-url`
   1. Install the dependencies: `npm install`
   1. Start the MongoDB server:  `mongod`
   1. Start the web app: `npm start`

## Usage

To create a short URL, navigate to the homepage and enter the long URL in the form. A short URL will be generated for you automatically. You can also customize the short URL by entering your own desired URL in the form.

To visit a short URL, simply enter the short URL in your browser's address bar. You will be redirected to the corresponding long URL.

To search for short URLs, enter a search query in the search bar and press enter. The search results will be displayed on the page.

To log in to the web app, click the "Log In" button and follow the prompts to authenticate using your preferred OAuth provider.
## Contribution

If you find a bug or have an idea for a new feature, please open an issue in the [issue tracker](). If you would like to contribute code, please fork this repository and submit a pull request.
## Testing

To test the web app, run the following command in the project directory:
```
npm test
```

## License

This project is released under the [MIT License]().
## Contact

For any questions or feedback, please contact me at [user@example.com].
## Acknowledgements

   - [randomstring]() for generating random short URLs
   - [MongoDB]() for storing short and long URLs in the database
   - [Auth0]() for handling user authentication
   - [valid-url]() for validating long URLs