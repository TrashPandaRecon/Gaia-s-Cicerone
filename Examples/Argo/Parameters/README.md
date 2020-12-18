# Hello Whale 🐳  but with parameters
---
Argo has a parameters feature, this time, the *whalesay* template takes an input parameter named *message* that is passed as args to the cowsay command.

The argo CLI provides a convenient way to override parameters used to invoke the entrypoint. One such example is binding the *message* parameter to use "Goodbye Whale" instead of the default "hello whale"
```
argo submit example-wf.yml -p message="Goodbye Whale"
```

In case of multiple parameters that can be overwritten, the argo CLI provides a command to load parameters in YAML or JSON format. [Here](message.yml) is an example

To run, use the following command
```
argo submit example-wf.yml --parameter-file message.yml
```

Command-line parameters can also be used to override the default entrypoint and invoke any template in the workflow spec. For example, if you add a new version of the *whalesay* called *whalesay-caps* but you don't want to change the default entrypoint, you can invoke this from the command line as follows:
```
argo submit example-wf.yaml --entrypoint whalesay-caps 
```

By using a combination of the *--entrypoint* and *-p* parameters, you can call any template in the workflow spec with any parameter you want. Taking a look at the second [example](example2-wf.yml), since the values set in the *spec.arguments.parameters* are globally scoped and can be accessed via *{{workflow.parameters.parameter_name}}*. This can be useful to pass information to multiple steps in a workflow. For example, if you wanted to run your workflows with different logging levels that are set in the environment of each container, you may want to set different logging levels at runtime.

In the second [example](example2-wf.yml), both steps *A* and *B* would have the same log-level set to *INFO*
and can easily be changed between workflow submissions using the *-p* flag.

