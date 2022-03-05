---
sidebar_position: 1
---

# Getting Started
## Prerequisites
- In these docs, we are only going to be using JavaScript, so make sure you have [Node.js](https://nodejs.org/en/ "Node.js"), also make sure you have it added to your Windows PATH
- A good text (preferably code) editor like [VS Code](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/downloads/), we highly don't recommend coding in Notepad 😅
- Have file extensions visible in the Windows explorer (or any other file explorer you might be using)
- At least some basic knowledge about what you're doing, not everything will be explained to detail here

## Setup
Let's start by making a folder. You can name it whatever you want.
In that folder, open CMD by clicking on the explorer's addressbar and typing `cmd.exe`.
Once CMD is opened, enter the following:
```jsx
npm init -y
```
Remove the `-y` if you want to enter custom parameters, but that isn't necessary.
The command should make a `package.json` file. You don't need to touch that file for now.

Now, let's install the module that can control our API and make it easy for us, with the following command:
```jsx
npm i nodeactyl
```
Now, let's make a main file. It doesn't matter how you call it, I will call it `main.js` for example. Just remember that it needs to have the `.js` extension at the end.

This will be everything for this short "Getting Started" guide. Next time, we will show how to get an API key from the panel.
