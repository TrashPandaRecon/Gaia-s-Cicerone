# Scripts & Results
---

The [example](example-wf.yml) shows how create a template that executes a script specified as a here-script (also known as a here document) in a workflow spec.

The *script* keyword allows the specification of the script body using the *source* tag.

This creates a temporary file containing the script body and then passes the name of the temporary file as the final parameter to *command*, which should be an interpreter like "bash" or "python3" depending on your container and how it is configured. It will execute the script body with the *command*.

The use of the *script* feature also assigns the standard output (stdout) of running the script to a special output parameter named *result*, which can be seen in the [example](example-wf.yml). This allows you to use the stdout of the script itself in the rest of the workflow spec as you wish.

