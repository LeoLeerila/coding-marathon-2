# Self-Assessment (Template)

### Challenges faced

#### Frontend:

We initially had some minor issues with mapping out the response from /api/jobs in JobListings.jsx. It initially stumped us, until we remembered to change some configuration settings. Overall developing Frontend was easy.

There were issues with getting the conditional rendering of ui to work due to props not being passed correctly

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

##### Backend:
There was issue in the jobController with ID
```javascript
const getJobById = async (req, res) => {
    const {jobsId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(jobsId)) {
        return res.status(400).json({ message : "Invalid jobs ID"});
    };

    try {
        const job = await Job.findById(jobsId);
        if(job){
            res.status(200).json(job);
        }else {
      res.status(404).json({ message: "Jobs not found" });
    }
    }catch (error) {
    res.status(500).json({ message: "Failed to retrieve jobs" });
  } 
}
```
#### Solution:
Rename jobsId => jobId
```javascript
const getJobById = async (req, res) => {
    const {jobId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message : "Invalid jobs ID"});
    };

    try {
        const job = await Job.findById(jobId);
        if(job){
            res.status(200).json(job);
        }else {
      res.status(404).json({ message: "Jobs not found" });
    }
    }catch (error) {
    res.status(500).json({ message: "Failed to retrieve jobs" });
  } 
}
```

### Key Improvements:

- Code is clean
- Added security and authentication capabilities
- With added security, now posting, editing and deleting jobs was tied to a logged in user.


**Lessons Learned:**

1. Using props correctly
2. Check variables names
3. 


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
