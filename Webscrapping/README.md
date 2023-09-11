<details>
    
<summary>axios-modulue-doubt</summary>

    
```markdown
## Step 1: Install Axios

To use Axios in your Node.js project, you need to install it using npm (Node Package Manager). Open your terminal and navigate to your project folder:

```shell
npm install axios
```

This command installs the Axios package, which allows you to make HTTP requests easily.

## Step 2: Write the Axios Code with a Callback Function

Now that Axios is installed, you can write code to make an HTTP GET request to 'https://www.google.com' and handle the response using a callback function. Here's the code:

```javascript
const axios = require('axios');

console.log("Before");

axios('https://www.google.com', callback);

function callback(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
}

console.log("After");
```

- `axios('https://www.google.com', callback);`: Initiates an HTTP GET request to 'https://www.google.com' using Axios and specifies a callback function (`callback`) to handle the response.

- `function callback(err, data) { ... }`: This is the callback function that takes two parameters, `err` and `data`. It is called when the HTTP request is complete.

- Inside the `callback` function:
  - If there is an error (`err` is not `null` or `undefined`), it logs the error to the console.
  - If there is no error, it logs the `data`, which would contain the response from the HTTP request.

- `console.log("After");`: This line is outside the callback and will execute immediately after the `axios` call, without waiting for the HTTP request to complete.

This code allows you to make an HTTP request and handle the response using a callback function, providing a callback-style pattern for handling asynchronous operations.
---
### Why this work?
The code you provided works because you're using the `axios` function in a way that takes advantage of its ability to return a Promise. Here's an explanation of how it works step by step:

1. `axios('https://www.google.com', callback);`: In this line, you're making an HTTP GET request to 'https://www.google.com' using `axios`. Instead of using `.then` to handle the response, you're passing a callback function (`callback`) as the second argument. This is a non-standard way of using `axios`, but it can work because `axios` returns a Promise.

2. `function callback(err, data) {...}`: This is your callback function, which takes two parameters, `err` and `data`. This function will be called when the HTTP request is complete.

3. Inside the `callback` function:
   - If there is an error (`err` is not `null` or `undefined`), you log the error to the console.
   - If there is no error, you log the `data`, which would contain the response from the HTTP request.

4. `console.log("After");`: This line is outside the callback and will execute immediately after the `axios` call, without waiting for the HTTP request to complete.

So, this code essentially initiates an HTTP GET request to 'https://www.google.com' using `axios` and specifies a callback function (`callback`) to handle the response. When the request completes (either successfully or with an error), the `callback` function is called, and it handles the result.

Please note that this approach is not the typical way to use `axios`, but it can work if you want to use a callback-style pattern rather than Promises or `async/await` for handling asynchronous operations.

---
#
----
### Certainly! Let's simplify the code by using `async/await` and a custom function to make the HTTP request and handle both success and error cases:

```javascript
const axios = require('axios');

console.log("Before");

async function fetchData() {
  try {
    const response = await axios.get('https://www.google.com');
    // Successful request
    console.log('statusCode:', response.status);
    // You can access the HTML content using response.data
    return response; // Return the response on success
  } catch (error) {
    // Error handling
    console.error('error:', error);
    throw error; // Throw the error on failure
  }
}

async function main() {
  try {
    const response = await fetchData();
    // Do something with the response here
  } catch (error) {
    // Handle errors here
  }
}

main();

console.log("After");
```

In this simplified code:

1. We define an `async` function called `fetchData` that encapsulates the HTTP request logic using `axios` and handles both success and error cases.

2. The `main` function is also defined as an `async` function and calls `fetchData` to perform the request. You can handle the response and errors within the `main` function.

3. We use `await` to wait for asynchronous operations to complete, making the code more readable and avoiding the need for `.then`.

This code structure simplifies the handling of the HTTP request and its results, making it easier to understand and maintain.


</details>


-----


<details>

<summary>
    Web scrapping doubt: We can't use Axios: use a headless browser or a different approach.
</summary>


```javascript
const axios = require('axios');
const cheerio = require('cheerio');

console.log("Before");

axios.get('https://www.google.com/search?q=worldometer+coronavirus&oq=world&aqs=chrome.4.69i57j0i67i650j0i131i433i512j46i131i433i512j0i67i650j69i65j69i61l2.4657j0j4&sourceid=chrome&ie=UTF-8')
  .then(response => {
    // Successful request
    console.log('statusCode:', response.status);
    // You can access the HTML content using response.data
    handleHTML(response.data);
  })
  .catch(error => {
    // Error handling
    console.error('error:', error);
  });

function handleHTML(html) {
    let selTool = cheerio.load(html);
    let h1s = selTool("h1");
    console.log(h1s.length);
}

console.log("After");
```

The issue you're facing is likely related to the way you're making the Axios request and handling the response in the callback function. You should use `axios.get` to make the GET request and then handle the response inside the `.then` block. Here's the corrected code:

```javascript
const axios = require('axios');
const cheerio = require('cheerio');

console.log("Before");

axios.get('https://www.google.com/search?q=worldometer+coronavirus&oq=world&aqs=chrome.4.69i57j0i67i650j0i131i433i512j46i131i433i512j0i67i650j69i65j69i61l2.4657j0j4&sourceid=chrome&ie=UTF-8')
  .then(response => {
    // Successful request
    console.log('statusCode:', response.status);
    // You can access the HTML content using response.data
    handleHTML(response.data);
  })
  .catch(error => {
    // Error handling
    console.error('error:', error);
  });

function handleHTML(html) {
    let selTool = cheerio.load(html);
    let h1s = selTool("h1");
    console.log(h1s.length);
}

console.log("After");

```

In this corrected code:

1. We use `axios.get` to make the GET request, and inside the `.then` block, we handle the response, including parsing it with Cheerio.

2. The `handleHTML` function is called with `response.data` to parse and manipulate the HTML content.

3. The length of `<h1>` elements is logged correctly within the `handleHTML` function.

This should resolve the issue, and you should see the correct length of `<h1>` elements printed to the console.


I apologize for the confusion earlier. Google's search results page is likely dynamically generated using JavaScript, which means that when you make a simple HTTP request using Axios, you may not get the fully rendered page. To scrape content from pages like this, you would typically need a headless browser or a different approach.

If you want to scrape data from such a page, you might consider using a tool like Puppeteer (a headless Chrome browser controlled via Node.js) or utilizing an API if one is available for the website you are trying to extract data from.

Here's an example using Puppeteer to scrape the Google search page for `<h1>` elements:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  console.log("Before");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=worldometer+coronavirus&oq=world&aqs=chrome.4.69i57j0i67i650j0i131i433i512j46i131i433i512j0i67i650j69i65j69i61l2.4657j0j4&sourceid=chrome&ie=UTF-8');

  const h1s = await page.$$("h1");
  console.log(h1s.length);

  await browser.close();

  console.log("After");
})();
```

This code uses Puppeteer to launch a headless browser, navigate to the Google search page, and then count the number of `<h1>` elements on the page. Please make sure to install Puppeteer using `npm install puppeteer` before running this code.

    
</details>
