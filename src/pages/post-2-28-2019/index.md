---
title: Xamarin Forms iOS renewable subscriptions In-App Purchasing 
date: "2019-02-28T04:12:03.284Z"
---

### How to pass the Apple Store review.
 
Implementing renewable subscriptions can be very frustrating the first time you do it. I found a lot of tutorials on how to write the code to implement In-App Purchasing but not many tutorials explained the Apple Store review. In this tutorial I will help you to avoid the common pitfalls and to get your app to pass the Apple Store Review.

Implementing renewable subscriptions can be very frustrating the first time you do it. I found a lot of tutorials on how to write the code to implement In-App Purchasing but not many tutorials explained the Apple Store review. In this tutorial I will help you to avoid common pitfalls and to get your app to pass the Apple Store Review.

If you are looking for a tutorial on how implement the code behind, please checkout this tutorial.
https://blog.xamarin.com/integrating-in-app-purchases-in-mobile-apps/

From this  point on, I assume you have implemented the code behind. If not please refer to the link above.

####In-App Purchases:

**Step One**

Make sure you fill out the review information and add the In-App Purchases to your App, so the In-App Purchases can be reviewed and approved. 

![Alternate screenshot](/review.png)

I forgot to to do this and I received this error:

> Guideline 3.1.1 - Business - Payments - In-App Purchase


> We noticed that your app offers a subscription with a mechanism other than the in-app purchase 

That error was completely misleading and caused me to waste a lot of time. 

**Step Two**

Next, you need to add the App store disclaimer and your privacy and terms and conditions in the  the purchase flow without requiring additional action from the user (such as opening a link).

You need to add **ALL** of this text:
*  Title of publication or service
*  Length of subscription (time period and content or services provided during each subscription period)
*  Price of subscription, and price per unit if appropriate
*  Payment will be charged to iTunes Account at confirmation of purchase
*  Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period
*  Account will be charged for renewal within 24-hours prior to the end of the current period, and identify the cost of the renewal
*  Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user's Account Settings after purchase
Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable

And you need to **link** your **privacy** and **terms of use**.

Here is an example:

![Alternate screenshot](/inapppurchase.png)

**Step Three**
Restore Button.
You have to implement a restore button.

![Alternate screenshot](/restorebutton.png)


There you go! Now you should be able to pass the Apple in store review.
