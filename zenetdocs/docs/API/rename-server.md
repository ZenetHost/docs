---
sidebar_position: 4
---
# Rename server with API

it's really easy. Firstly we need to get our server id. It's the last few letters in the url
![](https://cdn.discordapp.com/attachments/911733230795911230/912073937129713664/unknown.png)

Copy that, you will need it

Now add this to your .js file
```jsx title="main.js"
client.renameServer("Your server ID", "Your New Server Name").then(console.log("Renamed"))
```
Now replace `Your server ID` with your server id and enter your new server name.
And then when you start the script it should log `Renamed` in your console

```jsx title="console"
Renamed
```

If you want to do more you can check out Nodeactyl docs: https://docs.nodeactyl.dev/api/client.html
