# Self-Assessment (Template)

### Challenges faced

#### Frontend:

We initially had some minor issues with mapping out the response from /api/jobs in JobListings.jsx. It initially stumped us, until we remembered to change some configuration settings. Overall developing Frontend was easy.

While creating authentication routes for App.jsx, our first solution to getting the user token was something along these lines:

```javascript
    const [isAuthenticated, setIsAuthenticated] = useState(
        JSON.parse(localStorage.getItem("user")) || false
    );
```
##### Solution:
However after reviewing some past tasks, we changed it to this.

```javascript
    const [isAuthentintaced, setIsAuthenticated] = useState(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        return user && user.token ? true : false;
    });
```


### Key Improvements:

- Code is clean
- Added security and authentication capabilities
- With added security, now posting, editing and deleting jobs was tied to a logged in user.


**Lessons Learned:**

1. Check your configuration settings and make sure routes are accessible before launching into a debugging spree.
2. 


```js
// File name or function
// Your code part A
```

```js
// File name or function
// Your code part B
```

```js
// File name or function
// Your code part A
```

```js
// File name or function
// Your code part B
```