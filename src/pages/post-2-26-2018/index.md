---
title: C# Async Guidelines
date: "2018-02-26T22:12:03.284Z"
---
### Asynchronous Code

Asynchronous code is non-blocking code, which means we can start a long-running operation without waiting while its happening. 

### What is Async/Await

In C# 5.0 the compiler team at Microsoft added a new feature in form of two keywords: 
* Async
* Await

The purpose of Async/Await is to make asynchronous programming a lot easier to write by avoiding complex patterns that were necessary in previous version of C#. Even with the new async and await feature, there are still some common pitfalls.

### Best Practices

Type | Description | Exceptions
-----|-------------|-----------
Avoid async void| Prefer async Task methods over async void methods| Event handlers(Button click event)
Async all the way | Don't mix blocking and async code | Console main method
Configure context| Use ConfigureAwait(false)| Methods that require context (don't use for methods that change the UI)

###Async Void

Async void methods primary purpose is to make asynchronous event handlers possible.

Async void methods have no Task object, therefore any exceptions will be raised directly on the SynchronizationContext.

Async void methods cannot be awaited. Async void methods are fire and forget. Async void methods will notify their SynchronizationContext when they and finish, but a custom SynchronizationContext is a complex solution for typical application code. 

Example:
___
```csharp
async void ThrowExceptionAsync() {
  throw new InvalidOperationException();
}

public void CallThrowExceptionAsync() {
  try {
    ThrowExceptionAsync();
  } catch (Exception) {
    Console.WriteLine("Failed");
  }
}
```
___
The code fails to print "Failed". The exception is never handled.

It's best just to avoid async void.

### Async void lambda functions
Even trickier case is the asynchronous lambda function to delegate method. If you use action(anonymous) delegates, the C# compiler will create an async void method, which starts the work and returns void. If you use Func<Task> delegate, the generates a function that returns Task.

Example:
___
```csharp
Parallel.For(0, 10, async i => {
  await Task.Delay(1000);
});
```
___

Does the code finish in 1 second, after all the tasks finish sleeping, or does it finish immediately? 

The answer is you cannot know. It all depends if the delegate is an Action or Func<Task>. 

### Nesting Async Code

What do you thinks occurs here?
___
``` csharp
Console.WriteLine("Before");
await Task.Factory.StartNew(
  async () => { await Task.Delay(1000); });
Console.WriteLine("After");
```
___

"Before" and "After" are written right after one another, the code never waits one second.Why? The outer Task, StartNew, is the method being awaited and returns a Task<T> while theinner lambda method is returned right away with the result being a Task<Task>. The inner method is ignored.

The solution to this is to use Task.Run().
___
``` csharp
Console.WriteLine("Before");
await Task.Run( async () => { await Task.Delay(1000); });
Console.WriteLine("After");
```
___

Remember, however, Task.Run() pools the task and the inner lambda method can be run on a background thread. Task.Run() is best suited for CPU bound work, and not used for updating the UI.


### Async all the way.
There are no half measures with async, it's all or nothing. What "Async all the way" means is you shouldn't mix synchronous and asynchronous code without careful consideration. One common problem is writing  async void methods in a constructor, especially when working on GUI applications. 

Example:
___
```csharp

 public ViewClass(){
      //Not awaited!
      asyncVoidMethod();
 }

 async void asyncVoidMehtod(){
   //If the initial method is not being awaited, you might have deadlocks further down the code. 
   await anotherAyncMethod();
 }
 ```
 ___
 
 Not adhering to "async all way", will result in code running synchronously and causing deadlocks in your application.

### Conclusion

Async and Await greatly simplify writing asynchronous code. Personally, I love using Async and Await. I highly recommend you pick you up ["Concurrency in C# Cookbook: Asynchronous, Parallel, and Multithreaded Programming"](https://www.amazon.com/gp/product/1449367569/ref=as_li_tl?ie=UTF8&tag=granulardevel-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1449367569&linkId=4392101d23b6f64aec5e2c1744abf6f0) by Stephen Cleary  and  ["Async in C# 5.0: Unleash the Power of Async"](https://www.amazon.com/gp/product/1449337163/ref=as_li_tl?ie=UTF8&tag=granulardevel-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1449337163&linkId=9a8efc62bde5493db9e1b7c838c818d0) by Alex Davies.
