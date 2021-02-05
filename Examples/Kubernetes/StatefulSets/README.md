## 🧐 About <a name = "about"></a>
This manifest exhibits the StatefulSets Object and an example of a StatefulSet object in GCP. Refer to the guide for detailed explanations

### Refer to the Kubernetes Docs for a full list functionality

### Some info

The GCP example is meant to showcase use of stateful sets in cloud environments.

Due to StatefulSets relying on dynamic provisioning via StorageClasses, we do not have an example that uses local persistent volumes.

To use StatefulSets with local persistent volumes, which is a common thing to do, take a look at openEBS. It gives you Kuebernetes resources that can be used to dynamically provision local storage among other things.

