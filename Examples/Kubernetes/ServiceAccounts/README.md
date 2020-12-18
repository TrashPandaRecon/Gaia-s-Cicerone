## 🧐 About <a name = "about"></a>
This manifest exhibits the the process of setting up a service accounts. Refer to the guide for detailed explanations

### Refer to the Kubernetes Docs for a full list functionality

### Some info
Each service account has a API token associated with it when created.

To retrieve this on linux/MacOS:
```
kubectl get secret $(kubectl get serviceaccount kubeapps-operator -o jsonpath='{range .secrets[*]}{.name}{"\n"}{end}' | grep kubeapps-operator-token) -o jsonpath='{.data.token}' -o go-template='{{.data.token | base64decode}}' && echo
```

To retrieve this on Windows, create a file called GetDashToken.cmd (it can be named anything as long as its .cmd) with the following in it:
```
@ECHO OFF
REM Get the Service Account
kubectl get serviceaccount kubeapps-operator -o jsonpath={.secrets[].name} > s.txt
SET /p ks=<s.txt
DEL s.txt

REM Get the Base64 encoded token
kubectl get secret %ks% -o jsonpath={.data.token} > b64.txt

REM Decode The Token
DEL token.txt
certutil -decode b64.txt token.txt
```
Open a command prompt and run the GetDashToken.cmd, your token will be found in the token.txt file

Note that we will basically never actually do this for users outside of learning purposes, usually you have Kubernetes RBAC integrated with your Organisations Active Directory or
Active directory equivalent that will give users their own accounts, the admins will give them their API token.

### Use Case
Lets say we want to configure a service account that has permissions to pull from a private registry

First we need to create the secret either via a manifest or through the CLI tool like so
```
kubectl create secret docker-registry myregistrykey --docker-server=DUMMY_SERVER \
        --docker-username=DUMMY_USERNAME --docker-password=DUMMY_DOCKER_PASSWORD \
        --docker-email=DUMMY_DOCKER_EMAIL
```
Once you create the secret by filling in your registry's server, username, password, and email, you can create a service account or edit an existing one to use this secret when pulling container images.

For example, you can add this to the default service account like so.
Note that this overwrites any imagePullScret previously set , ie DONT DO THIS ON YOUR HOST UNLESS U KNOW HOW TO REVERT IT
```
kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "myregistrykey"}]}'
```

Note: this replaces your default so any containers being made without a serviceAccount specified will inherit these permissions.
