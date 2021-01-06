## Exit Handlers
---
This [example](example-wf.yml) shows how exit handlers work.

An exit handler is a template that always executes, irrespective of success or failure, at the end of the workflow. 

Just a side note: when people say xxx hook, what they mean in concept is something like this exit handler. Hooks "hook" to the end of something and execute.

Some common use cases for exit handlers are:
* Cleaning up after a workflow runs
* Sending notifications of a workflow status (e.g., email/Slack)
* Posting the pass/fail status to a webhook result (e.g. Github build result)
* Resubmitting or submitting another workflow
