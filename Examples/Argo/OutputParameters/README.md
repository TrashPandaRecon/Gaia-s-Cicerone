## Output Parameters
---
This [example](example-wf.yml) showcases output parameters, a general mechanism to use the result of a step as a parameter rather than as an artifact. This allows you to use the result from any type of step, not just a *script*, for conditional tests, loops, and arguments. Output parameters work similarly to *script result* except that the value of the output parameter is set to the contents of a generated file rather than the contents of stdout.

Note: DAG templates use the tasks prefix to refer to another tasks. For example:
```
{{tasks.generate-parameter.outputs.paramters.hello-param}}
```