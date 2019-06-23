---
title: Jenkins Build Pull Request  
date: "2019-06-23T04:12:03.284Z"
---

Continuous Integration with Jenkins and GitHub. Get Jenkins to build Pull Requests.


### Source Code Management.
Under Advanced set "refspec" to :
```
+refs/pull/*:refs/remotes/origin/pr/*
```
In "Branch Specifier", enter: 
 ```
 ${ghprbActualCommit}
 ```
![Alternate screenshot](/jenkins_sourceCodeManagement.png)

### Build Triggers
Select GitHub Pull Request Builder.
In GitHub API credentials add ``` https://api.github.com: Anonymous connection```

In the Admin list add your username and select github hooks for building triggering.

![Alternate screenshot](/jenkins_buildTriggers.png)