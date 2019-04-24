---
title: Configuring Spring Boot Application Properties 
date: "2019-04-24T22:12:03.284Z"
---

### Configuring Spring Boot Application Properties.

Application properties can be found in resources folder under the main folder.

Spring Boot allows for 3 different application properties:

* default: application.properties
* development: application-test.properties
* production: application-prod.properties

In order to switch the profiles, you have to change the Run Configurations.

![Alternate screenshot](/runconfig.png)

In Run Configurations select the Arguments tab and add <strong>-Dspring.profiles.active=test</strong> to access the application-test.properties.

![Alternate screenshot](/arugments.png)