---
sidebar_position: 3
---
# Connecting to API

I'm assuming that you already have your API key and basic project setup.

let's connect to the api by copying this code to your .js file. Just replace `YourAPIKey` with your key

```jsx title="main.js"
const Nodeactyl = require('nodeactyl');
const client = new Nodeactyl.NodeactylClient("https://panel.zenet.host", "YourAPIKey");
```
Thats's all. Now if you run the file with `node [yourfile]` you should see nothing
