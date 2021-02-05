## Volumes 
---
Note: Because of the heavily infrastructure dependent nature of K8s volumes, these probably will not work out of the box for you.

Volumes are a useful way to move large amounts of data from one step in a workflow to another. Depending on the system, some volumes may be accessible concurrently from multiple steps.



This [example](example-wf.yml) dynamically creates a volume and then uses the volume in a two step workflow.

This [example](example2-wf.yml) shows how to access an existing volume rather than creating/destroying one dynamically

This [example](example3-wf.yml) shows how to declare existing volumes at the template level, instead of the workflow level. This is useful for workflows that generate volumes using a *resource* step