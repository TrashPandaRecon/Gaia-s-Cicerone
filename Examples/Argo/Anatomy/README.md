# Hello Whale 🐳
Argo adds a new kind of kubernetes spec called a Workflow. The above spec contains a single template called whalesay which runs the docker/whalesay container and invokes cowsay "hello whale". The whalesay template is the entrypoint for the spec.

The entrypoint specifies the initial template that should be invoked when the workflow spec is executed by Kubernetes.

The command to run this will depend heavily on your argo installation, but it is generally
```
argo submit example-wf.yml
```
just add a -n flag for namespace, as mentioned in the guide, the argo CLI tool is just a wrapper around kubectl, so all kubectl commands will work as well.
