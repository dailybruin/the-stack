---
layout: page
permalink: /docs/installations/
---

## Installations

# Linux
If you use Windows, download [the Linux distro](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
Mac and other OS users can move on to the next step.

WSL, as you will see, will make several installations easier and let you use download instructions typically used only for Macs or other Linux systems like Ubuntu.

# Jekyll
Jekyll is a development tool that lets you generate the site locally, so you can make changes to your Stack post and view it on your browser before publishing it for the world to see.

On a Mac, open Terminal. 

On Windows, open WSL and follow these [instructions](https://jekyllrb.com/docs/installation/windows/#installation-via-bash-on-windows-10) first.

Then go ahead and follow the Mac [instructions](https://github.com/dailybruin/the-stack/blob/master/README.md#installation-maclinux) for installation (even for Windows).

# VS Code
VS Code is a powerful text editor that lets you write code in several languages and run them within the application. It's like Microsoft Word for programming.

Follow instructions [here](https://code.visualstudio.com/download).

# Git
Git is a version control tool, 

For Windows (or Ubuntu), use the following commands in WSL:

```sh
$ sudo apt-get update
$ sudo apt-get install git
```

> Note for people new to command line: The '$' represents the prompt. So the $ sign must not be included in your command when you type it in, it just separates the commands, so 'sudo apt-get update' and 'sudo apt-get install git' are run one after each other.

For Mac, you can use these [instructions](https://gist.github.com/derhuerst/1b15ff4652a867391f03#installing-git-on-a-mac) to install Homebrew and then Git

Once, installation is done, you can test whether git was intalled:
```sh
$ git --version
```
It should print out something like git version 2.17.1 (or whatever the latest version number is).

Then, you can set your username and password:
```sh
$ git config --global user.name "Your Name"
$ git config --global user.email "Your Media Email"
```
> Make sure to use either your media email, or the email that is being added to the dailybruin github

# (Optional) Python
Python is a very readable, relatively easy to use programming language, and has several libraries that are helpful for data analysis. 

On Windows, using WSL, you can run the following commands
```sh
$ sudo apt-get update
$ sudo apt-get install python3.6
```
> Or whatever the latest version of Python is.

Most libraries can be installed in Python using pip: 
```sh
$ pip install library_name
```
Newer versions may use this command instead:
```sh
$ python -m pip install library_name
```

On Mac, make sure you have installed [Homebrew](#optional-homebrew) first.
Then, run on Terminal:

```sh
$ brew install python
```

# (Optional) Homebrew
Homebrew is a package manager for Mac. Essentially, it makes it easier for you to download and install software.

Follow [step 1](https://gist.github.com/derhuerst/1b15ff4652a867391f03#installing-git-on-a-mac).

