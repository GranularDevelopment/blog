---
title: Creating a Subdomain 
date: "2018-02-05T22:12:03.284Z"
---
### This tutorial will walk you through creating a subdomain on Ubuntu 16.04 using Nginx. 

The first step is to add a subdomain to your domain host:

Type| Name | Value| TTL
----|------|------|-------------------
A   | subdomain| IP address| 1/2Hour 

Currently, there is an open ["issue"](https://github.com/certbot/certbot/issues/5447) with Certbot and Ubuntu, the PPA is out of data.
The next step is install ["certbot-auto"](https://certbot.eff.org/docs/install.html#alternate-installation-methods):
```
user@webserver:~$ wget https://dl.eff.org/certbot-auto
user@webserver:~$ chmod a+x ./certbot-auto
user@webserver:~$ ./certbot-auto --help
```

Now run :

```
sudo certbot-auto certbot --nginx -d subdomain.domainname.com
```
If you run into any issues check Nginx and sites-available configuration. Make sure you have two server blocks. One for your domain and
the other for your subdomain.

```
server {
            listen 80;
            server_name domainname.com ;
            return 301 https://domainname.com$request_uri;
        }
        server {
                listen 443 ssl; # managed by Certbot
                server_name domainname.com ;

                # SSL configuration
                ssl_certificate /etc/letsencrypt/live/domainname.com/fullchain.pem; # managed by Certbot
                ssl_certificate_key /etc/letsencrypt/live/domainname.com/privkey.pem; # managed by Certbot
                include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
                ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        }

server {
            listen 80;
            server_name subdomain.domainname.com ;
            return 301 https://subdomain.domainname.com$request_uri;
        }
        server {
                listen 443 ssl; # managed by Certbot
                server_name subdomain.domainname.com ;

                # SSL configuration
                ssl_certificate /etc/letsencrypt/live/subdomain.domainname.com/fullchain.pem; # managed by Certbot
                ssl_certificate_key /etc/letsencrypt/live/subdomain.domainname.com/privkey.pem; # managed by Certbot
                include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
                ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        }

```
Check the configuration file to make sure you have no issues:
```
~$ sudo nginx -t
```

There you go! Your subdomain should be all set.

