## Sidecars 
---
A sidecar is another container that executes concurrently in the same pod as the main container and is useful in creating multi-container pods.

This [example](example-wf.yml) creates a sidecar container that runs nginx as a simple web server. The order in which the containers come up is random, so in this example the main container polls the nginx container until it is ready to service requests. This is a good design pattern when designing multi-container systems: always wait for any services you need to come up before running your main code.
