# 🪐 Hosting Node.js server

After you got all your Zenet details, we can get to hosting a node.js server.

**Prerequisites:**
- ssh client like [Termius](https://termius.com/ "Termius")
- sftp client like [Termius](https://termius.com/ "Termius") or [WinSCP](https://winscp.net/eng/download.php "WinSCP") (optional if you want to gitclone it)

## Setting up project

:::danger

Make sure your server listens on same port as we gave you!

:::

Here is my demo app, i used typescript but it's basically the same
```ts title="index.ts"
import express from 'express';
const port = 8745;
const app = express();

app.get('/', (req, res) => {
res.send("Hello, world! This is application hosted on Zenet!")
});

app.listen(port, () => {
console.log(`Server is running on port ${port}. http://localhost:${port}`);
})
```

## Uploading via SFTP
I will be using Termius because it has a free plan and it's the best in my opinion.
After you launch the Termius, you should see this:

![](https://cdn.p33t.net/TWIJNWNNJH.png)

Click the "ADD" button and click the "New Host"

![](https://cdn.p33t.net/BGZBCPSHDT.png)

You should see a form where you need to input your adress, domain and password. Type `ssh.zenetusers.eu` as a adress. After saving and connecting you should see this:

![](https://cdn.p33t.net/TMFWFJUJJQ.png)

Our work folder is at `htdocs/ [YOUR DOMAIN]` so in my case, i will change the directory into `htdocs/tutorial.zenetusers.eu`


```
cd htdocs/tutorial.zenetusers.eu/
```
I will leave the terminal now because we need to upload our files first! 
Click the SFTP button in the navigation bar

![](https://cdn.p33t.net/MDGMYTODZP.png)

Now click the "Select Host" button and select your server

![](https://cdn.p33t.net/TDTSCZJAKG.png)

After you're connected just navigate to the htdocs/ [YOUR DOMAIN] again and drag and drop your code there. Make sure to not include node_modules. Now let's get back to the terminal.

If you are in the terminal, run the following commands:
```
npm i pm2 -g
```
```
npm i
```
If you are using typescript like me, run the following command too
```
pm2 install typescript
```

Now you can start it, just type `pm2 start` and name of your file after that. My file name is index.ts so i will run:
```
pm2 start index.ts
```
If you want to see logs, type `pm2 log`
And we are **done**!

![](https://cdn.p33t.net/KOLIDWJDFO.png) 

our website is live on https://tutorial.zenetusers.eu
