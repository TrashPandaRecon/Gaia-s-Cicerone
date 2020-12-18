## Artifacts 🔍

Note: you will need to configure an artifact repository like Mini.io or S3 to run this example. Refer to the documentation to learn how, or just use kubeapps.

When running workflows, it is common to have steps that generate or consume artifacts. Often, the output artifacts of one step may be used as input artifacts to a subsequent step.

The [example-wf.yml](example) spec consists of two steps that run in sequence. The first step named *generate-artifact* will generate an artifact using the *whalesay* template that will be consumed by the second step named *print-message* that then consumes the generated artifact.

Here is how it goes
1. The *whalesay* template generates a file named */tmp/hello-world.txt*
2. It then *outputs* this file as an artifact named *hello-art*
3. The *print-message template* then takes in an artifact named *message*, unpacks it at */tmp/message*. Then prints it the contents of */tmp/message* using the cat command.

The *artifact-example* template passes the *hello-art* artifact generated as an output of the *generate-artifact* step as the *message* input artifact to the print-message step.

DAG templates use the tasks prefix to refer to another task.

Artifacts are packaged as Tarballs and gzipped by default, you can customize this behaviour by specifying an archive strategy, using the archive field as seen in [example2-wf.yml](example).
