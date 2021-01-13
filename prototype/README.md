
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
- [TODO](../TODO.md)
- [Authors](#authors)


## 🧐 About <a name = "about"></a>

This is by no means a full repository containing everything you need to get a Microservice environment up and running on your machine. It only consists the custom code enabling the functionality used in the demo. It is not meant for a production environment and as such lacks basically all the neccessary security configurations. Do not use this in any production scenario as is.

## 💡 Concept <a name = "concept"></a>
The concept of this demo is simple, we will have the follwing
* Producers producing dummy data 
* Consumers consuming data and writing to the database
* Argo Workflows transforming data
* A Visualizer that consists of a frontend and a backend that will read from the database to show information.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will omit the step by step process of getting the demo up and running on your machine, it will simply tell you what is needed to make the demo work.

### Prerequisites

What systems you need in place before bringing up the containers. I recommend getting a Kubernetes cluster up and installing kubeapps on it for management and deployment of these systems.

```
1. A Single Kubernetes Cluster - Eg.MiniKube or Docker-Desktop
2. Argo
3. Kafka
4. MongoDB

```

### Kafka

You will need to know a few things to configure the producers and consumers of kafka.

First you will need to know the DNS name and Port your Kafka Brokers are accessible by in your cluster by consumers.

Then you will need to know the DNS name and Port your Kafka Brokers are accessible by in your cluster by producers.

### MongoDB

You will need a MongoDB deployed on your cluster, of course, the database passwords and users should be known, these are used when configuring the containers that interact with Mongo

### Argo
Argo is just a Kubernetes custom resource definition, but it is also reliant on containers and services that enable its functionality much like Kafka.

## 🚀 Deployment <a name = "deployment"></a>
TODO: write this after actually finalizing the demo.

Add additional notes about how to deploy this on a live system.

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

