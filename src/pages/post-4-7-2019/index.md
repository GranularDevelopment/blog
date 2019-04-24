---
title: Deeplinking iOS and Android, Nginx and .Well-Known 
date: "2019-04-07T04:12:03.284Z"
---

### Deeplinking iOS and Android, Nginx and .Well-Known.

In this tutorial we will setup the server side of deeplinking for iOS and Android using Nginx.


## Creating the .well-known directory 
Log into your server and create the .well-known directory at root of your application.

``` bash
mkdir .well-known
```

## Create Android assetlinks.json
Go to https://developers.google.com/digital-asset-links/tools/generator to generate your assetlinks.json.  After generating your assetlinks.json, place the file into your .well-known directory.

## Create iOS apple-app-site-association
Create the apple-app-site-association with no extension.

```json
{
    "applinks": {
      "apps": [],
      "details": [
        {
          "appID": "<your app>",
          "paths": [ "*" ]
        }
      ]
    }
 }
```

After generating your apple-app-site-association, with no extension, place the file into your .well-known directory.

## Update Nginx Server block

``` bash
location ^~ /.well-known {
         default_type application/json;
         allow all;
         auth_basic off;
         alias <path to well-known directory> ;
    }
```

Let's break down this server block.

default_type needs to be application/json

^ is needed for the alias.

allow all and auth_basic are optional

## Now test assetlinks.json.
You can test your files here:

http://branch.io/resources/aasa-validator/

and 

https://developers.google.com/digital-asset-links/tools/generator


## Thats it! Now your apple-app-site-association and assetlinks.json file should be accessible.