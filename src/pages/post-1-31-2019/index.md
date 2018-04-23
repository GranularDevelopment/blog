---
title: The Importance of Clean Code 
date: "2018-01-31T22:12:03.284Z"
---

One of the most commonly overlooked aspects of software development is writing clean code. Clean code is simple, easy to read and easy to understand. Of course, one cannot write about clean code without mentioning ["Clean Code"](https://www.amazon.com/gp/product/0137081073/ref=as_li_tl?ie=UTF8&tag=granulardevel-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0137081073&linkId=c563dccdf4b748f30d980ebb0a7f154f)  or [“The Clean Coder”](https://www.amazon.com/gp/product/0137081073/ref=as_li_tl?ie=UTF8&tag=granulardevel-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0137081073&linkId=23bd45ba6df611c149d0ee3ea116f2c2) by Robert C. Martin— I highly recommend you pickup a copy. 

### What is clean code? 

Remember back to your days as a student, when your teacher would say, “You should write about a topic as if the reader has no formal background on the subject. Any reader should be able to understand the basics of the topic on what you have written.”  That’s the premise of clean code. Code needs to written at lowest common denominator. I don't mean that in a derogatory way. It means you need to write code that is aligned to the skillset of your team. 


Let’s take a look at real production code, taken from a Xamarin App ( class names and method names have been changed). If you know Xamarin Forms, you will probably notice a few more issues with this code, but I won’t be discussing those issues here.

```cs 
    public class LoginView: ContentPage 
    {
        public async Task HandleLogin() 
        {
            await Navigation.PopAsync();
            await LoadStartPage();
        }
            ...

        public async Task GoToWebPage()
        {

            await Navigation.PushAsync(new WebViewPage(1, HandleLogin));
        }
            ...
    }
     // Separate file
     public class WebViewPage : Page
    {
        private int flow;
        private Action handleLogin;

        public WebViewPage(int flow , Action handleLogin)
        {
            this.flow = flow;
            this.handleLogin += handleLogin;
        }

        public async Task Login()
        {
            await handleLogin();
        }

    }
```

### What’s the solution?

I find the best the solution is to work directly with the coworker who checked in this code change. 
Software development is all about, well, development. By working as a team, or pair programming with another coworker, you build a stronger relationship with that person and you are able to walk them through your way of thinking.

### Let’s go through this:

The LoginView is a view that allows the user to login through a web view or through OAuth. In our case we are using the web view. When selecting web view login, a new page will appear on top of the LoginView allowing the user to login. Once the user logs in we call the HandleLogin() method popping the web view page.

The issue we have is that each type of login page uses the HandleLogin function to pop off its page.  The web view is using HandleLogin as a callback and delegating the PopAsync() to the LoginView. This makes the code highly coupled and the web view is dependent on the LoginView. The solution is to have the web view handle PopAsync() itself. 



```csharp 
     public class WebViewPage : Page
    {
        private int flow;

        public WebViewPage(int flow )
        {
            this.flow = flow;
            this.handleLogin += handleLogin;
        }

        public async Task Login()
        {
            await handleLogin();
        }

        public async Task HandleLogin() 
        {
            await Navigation.PopAsync();
            await LoadStartPage();
        }
    }
```

There's a lot more to clean code than what has been shown here. The point is to make the code as easy to understand for your reader and try to remove as much ambiguity as you can. 