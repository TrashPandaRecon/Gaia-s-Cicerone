# Anatomy of a Workflow

Note that this is not functional, it is just to show you how a workflow looks like as a manifest.

"Templates" = workflow steps, which are just container images

Argo uses a declarative DAG, so you just tell it the dependencies for a step and it does the rest.

In this case, the transform task is dependant on the get-views and get-payments tasks. It will only execute when those two tasks are completed.
