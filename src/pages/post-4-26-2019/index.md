---
title: Package a Java Application for Mac 
date: "2018-04-26T22:12:03.284Z"
---

####Here is the structure:

/Project_folder

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp|------ JavaJarFile.jar

####cd into the folder

``` $ cd Project_folder ```

####Create an environment variable, so you don't have to use the full path every time.

``` $ jdk=$(/user/libexexc/java_home)```

####Check the environment variable works.

```$jdk/bin/javapackager -version```

####If it doesn't work, you can always use the full path.

```/Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/bin/javapackager -version```

####Now, let's build the Mac package.

####To build a Jar file the main thing you need know is what class the main method is in. In this example the main method is in the MainClass.

```
/Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/bin/javapackager -deploy 
                                                                                  -native pkg
                                                                                  -name JavaJarFile 
                                                                                  -BappVersion=1.0.0 
                                                                                  -srcdir . 
                                                                                  -srcfiles JavaJarFile.jar
                                                                                  -appclass MainClass 
                                                                                  -outdir out 
                                                                                  -v 
                                                                                  -outfile 
``` 

####There you go! You've built a Java package installer for Mac.