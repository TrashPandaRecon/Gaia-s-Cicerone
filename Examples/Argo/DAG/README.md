## DAGs
As an alternative to specifying sequences of steps, you can define the workflow as a Directed Acyclic Graph (DAG) by specifying the dependencies of each task. This can be simpler to maintain for complex workflows and allows for maximum paralellism when running tasks.

In the [example](example-wf.yml), *A* runs first, *B* and *C* run in parallel after *A* (if it succeeds) then, once *B* and *C* are completed succesfully, *D* can run.

There is no reason why only one container can be the root (starting container), you can have multi-root DAGs. The templates called from a DAG or Steps template can themselves be DAGs or Steps templates. This can allow for complex workflows to be split into manageable pieces.

Side note: if you have the Argo UI, you can see how this runs graphically, it's pretty cool.

## Some Technical Info
the DAG logic has a built in *fail fast* feature to stop scheduling new steps, as soon as it detects that one of the DAG nodes has failed. It then waits until all DAG nodes are completed before failing the DAG itself. You can manually turn this off by setting the *FailFast flag to false. Do however note that with this off, it will allow a DAG to run all branches to completion regardless of the failed outcomes of branches in the DAG. More info and examples can be found in the Argo documentation.