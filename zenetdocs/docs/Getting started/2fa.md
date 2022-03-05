---
sidebar_position: 3
---

# 🗝 2 Factor Authentication [2FA]
2 Factor Authentication is another security layer you can use to improve the security of your account. When logging in, you are also required a 6-digit code from your mobile device apart from your normal account credentials. The 2FA is handled outside of our servers, so you don't have to worry about this method being compromised.

## Setting up 2FA 
### 1. Changing your view to the "Account" section
If you want to setup 2FA on your account, first change your view to the `Account` section by clicking the button highlighted in the picture below:

![](https://cdn.discordapp.com/attachments/911733230795911230/949682352202862612/AccessAccountSection.png)

### 2.  Getting 2FA QR code
After that, notice the 3rd column which says `Configure Two Factor`.

![](https://cdn.discordapp.com/attachments/911733230795911230/949682816726208554/Notice2FA.png)

You should see a `ENABLE` button in the box under `Configure Two Factor`. By clicking it, you will start the process of adding 2 Factor Authentication to your account. If you see a `DISABLE` button instead, you already have 2FA enabled for your account. If you decide to disable it, just click the button and it will revert to the state before this step.

When you click the `ENABLE` button, this box with a QR code will appear on your screen.

### 3. Adding your account to a 2FA app
To proceed, download an app such as Microsoft Authenticator ([Android](https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en&gl=US) and [IOS](https://apps.apple.com/us/app/microsoft-authenticator/id983156458)), add a new account (pick the 3rd option - Other account), scan the QR code on screen or type in the long code next to it. After that, your account should now be visible in the app's main menu. 

![](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdidproject.azurewebsites.net%2Fimages%2Fscan_qr.png&f=1&nofb=1)

### 4. Finishing 2FA setup
Pick your account on the main tab in the 2FA app (Its name should be ZenetHosting) and then type the generated 6-digit code from the app into the empty field next to the QR code and click on `SETUP`.

![](https://cdn.discordapp.com/attachments/911733230795911230/949692803103993936/AuthApp.png)
