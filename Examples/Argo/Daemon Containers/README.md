## Daemon Containers 
---
Argo can start containers that run in the background, known as *Daemon Containers*, while the workflow itself continues execution.

Note that the daemons will be automatically destroyed when the workflow exits the template scope in which the daemon was invoked. Daemon containers are useful for starting up services to be tested or to be used in testing.

They are also useful when running large simulations to spin up a database as a daemon for collecting and organizing results.

The big advantage of daemons compared with sidecars is that their existence can persist across multiple steps or even the entire workflow.

Step templates use the *steps* prefix to refer to another step: for example *{{steps.influx.ip}}*.

In DAG templates, the tasks prefix is used instead: for example *{{tasks.influx.ip}}*.


