
# ✅ Get started status on node.js
As you may know, when your discord.js bot starts, it keeps getting stuck at "Starting", but works perfectly.

![](https://cdn.discordapp.com/attachments/911733230795911230/1003311674062798858/unknown.png)

I will show you a quick way on how to fix it. **Note: it only works on Node.js**
Firstly you need to find some `onReady` function. If you do not have any, just follow a docs of your package to make one. After we located the onReady function, you just need to log this:
`zenet.started` so in Javascript 

```jsx title="onReady.js"
    console.log("zenet.started")
```



