## Timeouts
---
This [example](example-wf.yml) shows how to limit the elapsed time for a workflow. 

Imagine if you have a workflow that usually takes 1 hour, but for some reason it just idles around forever and does not end. In this case, you would set the *activeDeadlineSeconds* variable to teminate after maybe a minute.

