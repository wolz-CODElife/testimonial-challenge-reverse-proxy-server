# CORS-ANYTIME

CORs-anytime is a reverse proxy server created by [Joel Adewole](https:wolzcodelife.web.app) to solve a CORs issue with **GET** requests from [https://exercism.org/api/v2/](https://exercism.org/api/v2/) as it doesn't support CORs and doesn't require any form of authentication.

The server is hosted on [Heroku](https://www.heroku.com/).
___

## Usage
To make use of this server you need to append the request endpoint and parameters to [https://corsanytime.herokuapp.com/]()

> ### Example cases: 


* Making request to [https://exercism.org/api/v2/tracks](https://exercism.org/api/v2/tracks) route without parameters using CORs-anytime will be:
 
```Javascript 

const corsanytime = "https://corsanytime.herokuapp.com"
const url = corsanytime + "/tracks"; 

await fetch(url)
.then(res => res.json())
.then(data => { 
    console.log(data)
}) 

```




* Making request to [https://exercism.org/api/v2/hiring/testimonials?page=2&track=python&exercise=ming&order=newest_first](https://exercism.org/api/v2/hiring/testimonials?page=2&track=python&exercise=ming&order=newest_first) route without parameters using CORs-anytime will be:
 
```Javascript 

const corsanytime = "https://corsanytime.herokuapp.com"
const url = corsanytime + "/hiring/testimonials?page=2&track=python&exercise=ming&order=newest_first"; 

await fetch(url)
.then(res => res.json())
.then(data => { 
    console.log(data)
}) 

```

___

## Contribution

If you wish to contribute to this repository, you do so by following the steps below:

> ### Clone Source Code:

You can clone the git repository by running the following commands in your terminal:
```bash

git clone https://github.com/wolz-CODElife/testimonial-challenge-reverse-proxy-server.git

cd testimonial-challenge-reverse-proxy-server

```

Running these commands should download the source code of this project and change your terminal directory to the downloaded folder.

> ### Running the Application

After downloading the source code, install the dependencies of the project that are found in the `package.json` file. You can do this by running the following command inside the project directory.

```bash
npm install
```

After installing the project dependencies, you can start the server by running the following command in ther terminal.
```
node index.js
```

This should start listening to **PORT: 4000**. Open up a browser tab and launch [http://localhost:4000](http://localhost:4000). This should load data from the API having CORs issues.
 