## 🧐 About <a name = "about"></a>
This manifest exhibits basic ConfigMaps and Secrets, including some of the common ways to use them. Refer to the guide for detailed explanations

### Refer to the Kubernetes Docs for a full list functionality
### Some things to look at
There are some points to look at and understand after applying this manifest to your node.

Take a look at how Kubernetes obscures Secret data values via the command
```
kubectl get secret secretmap -o yaml
```

View the logs of the ubuntu-pod-startup via the command to see if the Echo command worked
```
kubectl logs ubuntu-pod-startup
```

Exec into the ubuntu-pod-vol pod and look at all the files we mounted via, also try writing to the /etc/sconfig directory and see what happens
```
kubectl exec --stdin --tty ubuntu-pod-vol -- /bin/bash
```

