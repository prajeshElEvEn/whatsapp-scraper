# Whatsapp Scraper

## Description

This is a whatsapp web scraper built using `whatsapp-web.js` to scrape whatsapp groups' data.

## Technologies Used

- [Whatsapp Web JS](https://wwebjs.dev/)
- [NodeJS](https://nodejs.org/en)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node Color Log](https://www.npmjs.com/package/node-color-log)
- [ExpressJS](https://expressjs.com/)

## Installation

- `Fork` and `clone` this repository

```bash
git clone <repo-url>
```

- Navigate to the project directory

```bash
cd whatsapp-scraper
```

- Install dependencies

```bash
npm i
```

- Create a mongodb database and get the connection string

- Create a `.env` file in the root directory and add the following environment variables

```bash
PORT=<port-number>
MONGO_URI=<your-mongodb-uri>
```

- Run the application

```bash
npm run dev
```

## Usage

- Use whatsapp app on your mobile phone to scan the QR code that will be displayed on the terminal
- The application will start scraping the data from whatsapp groups and save it to the database

## Contributing

For major changes, please open an issue first to discuss what you would like to change.

## Author

[@prajesh](https://bit.ly/prajesheleven)
