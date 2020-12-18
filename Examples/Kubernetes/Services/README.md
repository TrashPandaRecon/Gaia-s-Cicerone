## 🧐 About <a name = "about"></a>
This manifest exhibits the Services Object and how to expose it to the outside. Refer to the guide for detailed explanations

### Refer to the Kubernetes Docs for a full list functionality

### Some things to look at
Note that nodePort is really only acceptable in a closed system due to it essentially punching
a hole in security, it bypasses almost all network security in Kubernetes by design.
Also everyone will hate you for using it. It exposes an upper range of Ports that firewalls may block.
Only use it for internal systems that are airgapped.
For externally facing systems, look at Ingress Objects.



