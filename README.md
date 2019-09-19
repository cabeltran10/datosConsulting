# Data Consulting

> Create a little web application to see some data from [datos.gov.co](https://datos.gov.co/) using [navio](https://github.com/john-guerra/navio)

## How it looks

![GitDataConsulting](https://raw.githubusercontent.com/cabeltran10/datosConsulting/master/img/SreenShotGif.gif)

## Requirements

In your computer you need to have installed Node.js, for installation just go [here](https://nodejs.org/es/), having that you can just continue with the Quick Start

This app have frontend and backend, so it is important to run both of them. In the Quick Start are the instructions if you want to run once at a time or both in the same command. If you just run the client, the app will work but will have many error in console and it is possible that fails int the moment you try to search something, that is because each time you search, your search will be added to the data base to the transaction history.

## Before you start

If you are gone to run it locally, please create a ```.env``` file in the root directory of the proyect (datosconsulting), inside it just write: ```DATABASE_URL=localhost/transactions``` You don't have to put data in it, just make some searchs in the web app that it will make the transaction history.

This step is important, if you don't do it the app will crash locally.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run mongodb (just for local)
mongodb

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

# Want to build the optimize version of the app? (NO required to local deploy)
npm run heroku-postbuild
```

## Some important information

This web application have a creative component, to see it just click the botton in the home page.

This component was made using a react module call [react spring](https://www.react-spring.io/), it let you do many interesting animations to almost anything. It was very interesting to see how it works and to apply it this time.

This web application will auto-deploy, so the ```build``` version of the application is not included in the repository, to build it just see the Quick Start.

## App Info

### Author

[Camilo Beltran](https://cabeltran10.github.io/homepagecamilobeltran/)

### Link

[Data Consulting](https://data-consulting-web-dev.herokuapp.com/)

### Version

1.0.0

### Credits

This proyect have some third party libraries, if you want to look at then just go to the [package.json](https://github.com/cabeltran10/datosConsulting/blob/master/client/package.json) to see the Front ones and [package.json](https://github.com/cabeltran10/datosConsulting/blob/master/package.json) to see the Back ones.

Special credit to [navio](https://github.com/john-guerra/navio) that makes the graph with the data you give from the API.

### License

The MIT License (MIT)

Copyright (c) Camilo Beltran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
