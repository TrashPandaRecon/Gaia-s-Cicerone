# Docker
Docker and Docker Compose example for a simple Python login page.

This is an example of a very simple python login page which uses a database container. To use it, simply build the docker image by cding into the directory and using the command 
```
docker build -t <Any Name You Want> . <-- this full stop here indicates that the command should run in the current directory 
```

It is exposed on port 5000, access it by typing localhost:5000 into a browser.

This simple application uses two containers, an application container which talks to a database container.

You can see the login name and password being inserted into the database in init.sql under the db folder.

