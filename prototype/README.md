
<h3 align="center">Demo Prototype</h3>

<div align="center">

</div>

---

<p align="center"> A repository consisting only of customized code bases used for demoing Kubernetes and Microservice Architecture
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Concept](#concept)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)


## 🧐 About <a name = "about"></a>

This is by no means a full repository containing everything you need to get a Microservice environment up and running on your machine. It only consists the custom code enabling the functionality used in the demo. It is not meant for a production environment and as such lacks basically all the neccessary security configurations. Do not use this in any production scenario as is.

## 💡 Concept <a name = "concept"></a>
The concept of this demo is simple, we will have the follwing
* Producers producing dummy data 
* Consumers consuming data and writing to the database
* A Visualizer that consists of a frontend and a backend that produce dummy data to show information via graphs.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will omit the step by step process of getting the demo up and running on your machine, it will simply tell you what is needed to make the demo work.

### Prerequisites

What systems you need in place before bringing up the containers. I recommend getting a Kubernetes cluster up and installing [kubeapps](https://kubeapps.com/docs/getting-started/) on it for management and deployment of these systems.

As a general rule, we disable all storage persistence when deploying these. This is to keep the prototype as simple as possible.

```
1. A Single Kubernetes Cluster - Eg.MiniKube or Docker-Desktop
2. NGINX Ingress Controller - via helm
3. Kafka - via kubeapps
4. MongoDB - via kubeapps

```

### Kafka

You will need to know a few things to configure the producers and consumers of kafka.

First you will need to know the DNS name and Port your Kafka Brokers are accessible by in your cluster by consumers.

Then you will need to know the DNS name and Port your Kafka Brokers are accessible by in your cluster by producers.

### MongoDB

You will need a MongoDB deployed on your cluster, of course, the database passwords and users should be known, these are used when configuring the containers that interact with Mongo

### NGINX Ingress Controller ( Kubernetes Version )
An Ingress Controller is needed for Ingress to work. For this prototype, we use the Nginx Ingress Controller which can be helm deployed using instructions from this [site](https://kubernetes.github.io/ingress-nginx/deploy/)

## 🚀 Deployment <a name = "deployment"></a>

You will have to get the Producer, Consumer DNS Names for the Kafka Brokers, as well as the MongoDB custom username, password, and DNS name it is accessible from within the cluster and substitute all of these values accordingly in the ConfigMap contained in the Demo.yml kubernetes manifest files.

Before deploying you should also create a Topic in Kafka with at least 50 partitions either via a container manually or via a script. The name of the Topic should also be substituted in the ConfigMap contained in Demo.yml.

## ⛏️ Built Using <a name = "built_using"></a>
- [Typescript](https://www.typescriptlang.org) - Programming Language
- [Python](https://www.python.org) - Programming Language
- [react-vis](https://uber.github.io/react-vis/) - A composable charting library built using [D3](https://d3js.org) 
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Kafka](https://kafka.js.org) - Message Queue
- [Socket.io](https://socket.io) - Socket Framework
- [ChakraUI](https://chakra-ui.com) - UI Component Library for React
- [Kubernetes](https://kubernetes.io) - Container Orchestrator
- [Docker](https://www.docker.com) - Container Runtime and Dev Container Manager
- Other smaller libraries that handle API connectivity with various languages

## ✍️ Authors <a name = "authors"></a>

- [@WillyLim](https://github.com/trashpandarecon) - Initial work
