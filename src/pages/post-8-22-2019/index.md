---
title: Nginx Loadbalancing Passing Path Parameters  
date: "2019-08-22T04:12:03.284Z"
---


### Load Balancer Setup: How to handle requests based on location. 
Goal: Setup a new API using a path parameter. For example, you want to add /api to your url path that will hit your new API. That is yourwebiste.com/api.

The first step is to add a location block in your Nginx configuration. Lets create the location api block.

```
    server {

    listen 443 ssl;
    listen [::]:443 ssl ;


    location / {
      proxy_read_timeout 300;
      proxy_connect_timeout 300;
      proxy_pass http://yourwebsite.com;
    }

    #New API location
    location ^~ /api{
      proxy_read_timeout 300;
      proxy_connect_timeout 300;
      proxy_pass http://api/;
    }

 }
 ```

The next step is to add the upstream block that will pass the request to your backend servers.

```
#Upstream block
upstream api {
    server backendserver:8081;
  }

server {

    listen 443 ssl;
    listen [::]:443 ssl ;


    location / {
      proxy_read_timeout 300;
      proxy_connect_timeout 300;
      proxy_pass http://yourwebsite.com;
    }

    #New API location
    location ^~ /api{
      proxy_read_timeout 300;
      proxy_connect_timeout 300;
      proxy_pass http://api/;
    }
 }
 ```

### Backend Server Setup
Now we need to configure the backendserver to listen to port 8081 to receive the requests.

```
server {
    listen 8081;
    server_name api;

    location / {
        include proxy_params;
        proxy_pass http://unix:/path/to/api;
    }
}
```

### Conclusion

That's it! Nginx makes it very easy to configure and handle path paramter requests.