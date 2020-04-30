---
layout: page
permalink: /docs/command-line/
---

## Intro to Command Line
The command line (CLI) is a tool for you to interact with your computer without a graphical interface. You can type in your commands, and they are executed by the computer. 
Though it may seem unnecessary at first, it unlocks functionality and makes other commands more convenient. 

On a Mac, open up **Terminal**.
On Windows, open up **WSL**.

# Summary
- [Understanding File Structure](http://linuxcommand.org/lc3_lts0020.php)
- [The Basics](https://www.taniarascia.com/how-to-use-the-command-line-for-apple-macos-and-linux/)
- [Anatomy Of A Command](#anatomy-of-a-command)
- [Some Useful Shortcuts](#some-useful-shortcuts) 

# Anatomy Of A Command
Every command has used in the CLI has the following format

command argument -short_option -short_option=(parameter) --long_option --long_option=
(parameter)

- command: This is the name of the command your system understands, like cd or ls
- argument: Some commands need arguments, for eg: `mkdir hello` needs the argument hello to create a directory named hello
- options: Options are a way for you to specify options for a particular command. They may or may not require parameters, some may have optional parameters.

Short options are options that are only one character long (and sometimes have a longer version). They are usually preceded by a single '-'. 
For example: `ls -l` (stands for long), prints the long version of files, showing details like size and date created.

Long options are options that use a full name. They are usually preceded by a double '-'.
For example: `ls --all` prints all files, even hidden ones. It's shorter version is `ls -a`

Parameters
Some command line options have parameters. For example, the command find takes an argument for where to search and it's option takes a parameter for the name of the file you're searching for. 
For example: `find . -name my-file.txt` looks for a file named 'my-file.txt' in your current directory. Here 'my-file.txt' is a parameter to the option -name (Alternatively, you can also write `find . -name=my-file.txt`) 

The command `man` refers to manual, and you can look up the manual for any command by entering `man command_name` in your terminal.

# Some Useful Shortcuts

- You can open a file or your entire folder (with all it's files and subfolders) directly from the terminal using the command `code .` (or the location of the file/directory instead of '.'). 
If this doesn't work for you, you can [easily set it up](https://code.visualstudio.com/docs/setup/mac)

- You can also open the directory in a similar way.
For Macs, type in `open .` (or the directory name instead of '.').
For Windows, type in `explorer .` (or the directory name instead of '.')

- VS Code also lets you run command line within the application, so you don't need to switch tabs. More details on [setup](https://code.visualstudio.com/docs/editor/integrated-terminal).

(these two links, annoyingly, require you to [sign up first](https://hellowebbooks.com/learn-command-line/))
- [Use Tab and Up Arrow to type less](ttps://hellowebbooks.com/course/really-friendly-command-line-intro/tired/)
- [Ctrl-C and Hidden Files](https://hellowebbooks.com/course/really-friendly-command-line-intro/wrong/)


# Practice
Exercise

# Resources
> - [Cheatsheet of Commands](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)
> - [Game](https://overthewire.org/wargames/bandit/bandit0.html): This is a bit advanced, but is a game that teaches you CLI. (Does a better job than 35L :) )
> - [Solutions](https://medium.com/@secttp): to the above game 
> - [VS Code CLI](https://code.visualstudio.com/docs/editor/command-line): Many more shortcuts to use
> - [A More Detailed Guide](https://www.learnenough.com/command-line-tutorial/basics)
