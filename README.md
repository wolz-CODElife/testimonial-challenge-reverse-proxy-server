# CORS-ANYTIME

CORs-anytime is a reverse proxy server created by [Joel Adewole](https:wolzcodelife.web.app) to solve a CORs issue with **GET** requests from [https://exercism.org/api/v2/](https://exercism.org/api/v2/) as it doesn't support CORs and doesn't require any form of authentication.

The server is hosted on [Heroku](https://www.heroku.com/).
___

## Usage
To make use of this server you need to append the request endpoint and parameters to [https://corsanytime.herokuapp.com/]()

> ### Example case: 


* Making request to [https://exercism.org/api/v2/tracks](https://exercism.org/api/v2/tracks) route without parameters using CORs-anytime will be:
 
``` 

const corsanytime = "https://corsanytime.herokuapp.com"
const url = corsanytime + "/tracks"; 

await fetch(url)
.then(res => res.json())
.then(data => { 
    console.log(data)
}) 

```




* Making request to [https://exercism.org/api/v2/tracks](https://exercism.org/api/v2/tracks) route without parameters using CORs-anytime will be:
 
``` 

const corsanytime = "https://corsanytime.herokuapp.com"
const url = corsanytime + "/tracks"; 

await fetch(url)
.then(res => res.json())
.then(data => { 
    console.log(data)
}) 

```
 