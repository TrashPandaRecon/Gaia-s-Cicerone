## Kubernetes Resources 
---
In many cases, you may want to manage Kubernetes resources from Argo Workflows.

The *resource* template allows you to create, delete or update any type of Kubernetes resource as seen in this [example](example-wf.yml).

Resources created in this way are independent of the workflow. If you want the resource to be deleted when the workflow is delete, you can use [Kubernetes garbage collection](https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/) with the workflow resource as an owner reference ([example](https://argoproj.github.io/argo/examples/k8s-owner-reference.yaml))

When patching, the resource will accept another attribute, *mergeStrategy*, which can either be *strategic*m, *merge*, or *json*, If this attribute is not supplied, it will default to *strategic*. Keep in mind that Custom Resources cannot be patched with *strategic*, so a different strategy must be chosen. For example, suppose you have a [CronTab CRD defined](example2-wf.yml) defined, and an instance of it like [this](example3-wf.yml).

This Crontab can be modified using this [Argo Workflow](example4-wf.yml).