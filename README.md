<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=150px src="https://gaiatheblog.files.wordpress.com/2016/02/gaia-the-blog.png?w=225&h=300" alt="Project logo"></a>
</p>

<h3 align="center">Gaia's Cicerone</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center"> 
    <br> A guide on the architecture and technologies used in cloud native applications.`
</p>
### Side Note
Due to all cloud applications being run on the Linux Kernel, there will be an issue if you develop an application on Windows without added configuration. In DOS, files are ended with \n (also called LF). In Unix, files are ended with \r\n (also called CRLF). The result of this is that if you develop in Windows without any configuration, your code files will end with LF, and because all cloud applications are run with the Linux Kernel, the container will simply fail and exit with code 127 because it is unable to discern when a file ends, resulting in a file that is basically infinite.


## 🧐 About <a name = "about"></a>

This project attempts to give the user knowledge about the architecture and technologies used in building cloud native applications. The end goal is not complete fluency in everything mentioned. Instead, it is to give the user enough base knowledge to seek answers for themselves and understand the design patterns and terminology used.


### Prerequisites

A basic understanding of computers, DNS, networking, storage, cpu, etc.

You will at the very least need to install Docker and a local Kubernetes cluster. I reccommend Docker-Desktop since you will definitely need Docker, which comes with Docker-Desktop.

### Installing

The installation processes are similar for all platforms, you can either go to the Docker and Kubernetes website and go through their installation guide, or use package managers. 

I highly reccommend setting up a package manager. Here is a list for Windows/MacOS/Linux

Linux: There will be a package manager for your distribution.

MacOS: [Homebrew](https://brew.sh)

Windows: [Chocolatey](https://chocolatey.org)


## 🎈 Usage <a name="usage"></a>

The entire repo is centered around the Guide, read the guide and go through the examples under the examples folder. There is a prototype consisting of a distributed setup showcasing parallell processing with Kafka and a visualizer backend and frontend.


## ✍️ Authors <a name = "authors"></a>

- [@Willy](https://github.com/trashpandarecon) - Idea & Initial work


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
