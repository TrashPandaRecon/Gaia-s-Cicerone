## Suspend 
---
Workflows can be suspended by:
```
argo suspend <Workflow_name>
```
or by specifying a *suspend* step on the workflow like in this [example](example-wf.yml). 

Once suspended, a Workflow will not schedule any new steps until it is resumed either manually with
```
argu resume <Workflow_name>
```
or automatically with the *duration* limit as the example above.

