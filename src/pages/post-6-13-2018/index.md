---
title: Building a Java Application for Mac 
date: "2018-06-13T04:12:03.284Z"
---

In this article, we look at deploying your Java application on Mac. Unfortunately, there is not a lot of information on how to bring your Java application to the Mac. Let's get started.

#### Import the Mac Packages.
The first thing you need to is import the Mac packages. <span style="color:red"> <em> import com.apple.eawt.ApplicationEvent;</em> </span> is deprecated, so don't use that. Use these imports instead: 


``` java
import com.apple.eawt.AppEvent.AboutEvent;
import com.apple.eawt.AppEvent.PreferencesEvent;
import com.apple.eawt.AppEvent.QuitEvent;
import com.apple.eawt.AboutHandler;
import com.apple.eawt.QuitStrategy;

```

These packages allow you to access Mac specific events. See https://coderanch.com/how-to/javadoc/appledoc/api/com/apple/eawt/AppEvent.html for more details.

If you having trouble accessing the imports, on Eclipse, right click your project:

Build Path > Configure Build Path > Libraries > JRE System Library > Access rules.

Select Access rules and press edit on the right.
Add Access Rule, select Accessible from the drop down and add 'com/apple/eawt/**

![Alternate screenshot](/javaimport.png)




####Create an Adapter
The next step is to create a class that implements all the Mac events you want. For example, if you want to create an About section for your app you implement the AboutHandler.

``` java

public class MacApplicationAdapter implements AboutHandler, QuitHandler, PreferencesHandler {

	private MacApplicationHandler handler;

	public MacApplicationAdapter(MacApplicationHandler handler)
	  {
	    this.handler = handler;
	  }

	@Override
	public void handleQuitRequestWith(QuitEvent arg0, QuitResponse arg1) {
		// TODO Auto-generated method stub
		System.exit(0); // Syncs to the 'Quit' option when you right click your app in the Dock
		
	}

	@Override
	public void handleAbout(AboutEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void handlePreferences(PreferencesEvent arg0) {
		// TODO Auto-generated method stub
		
	}
}

```
#### Create a handler

The next step is to create a handler from which you can access the Mac events.

```java
public class MacApplicationHandler {
	
	public MacApplicationHandler() {
		configureForMac();
	}
	
	private void configureForMac() {
	    MacApplicationAdapter macAppHandler = new MacApplicationAdapter(this);

		    // create an instance of the Mac Application class, so you can handle the
		    // mac events with the Mac ApplicationAdapter

		    Application macApplication = Application.getApplication();

		    // need to enable the preferences option manually
		    macApplication.setPreferencesHandler(macAppHandler);
		    macApplication.setAboutHandler(macAppHandler);
		    macApplication.setQuitHandler(macAppHandler);
		    macApplication.setQuitStrategy(macAppHandler);
		    macApplication.addAppEventListener(macAppHandler);
		    
	
	}
```

#### There you go!
	Hopefully this should get you started.



