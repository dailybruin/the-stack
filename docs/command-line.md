---
layout: page
permalink: /docs/command-line/
---

### File Structure
- Open up Terminal
- There are two types of files: directories and files
A Directory is a folder, it contains links to other files or directories
Files are what you usually think of as files, a word doc, a jpeg, a code file, etc.

The root directory is where your file system begins in your computer, inside it are all the directories and files.

We can refer to directories multiple levels down using forward slashes. For example, under the stak repo (a git root directory), this file lives in the-stack/docs/about.md, where "the-stack" and "docs" are directories, and "about.md" is a file.

#### Moving Around
You can move around within a file system using the command cd which stands for "change directory", and lists all the files in the directory you currently are in using "ls".

"." refers to your current directory and
".." refers to the directory above 
pwd - print working directory

So if you're in the-stack directory, you can go into docs
by doing cd docs
and then go back by doing cd ..
And to go through multiple directories in one command, you can chain them together with the forward slash. So, for example, you can go to the javascript files of some article by doing
cd js/posts/primaries/
(show ls output)
and you can go back by doing 
cd ../../..
ls (back in the main repo)
(add screenshot here), also shows you where you currently are

"Tab" to complete file names
"Up arrow" to look up your previous commands

#### Command Structure
Every command has a few of these

- the command name

command argument -short_option -short_option=(parameter) --long_option --long_option=(parameter)

- look up command descriptions using man (name of command) (or by good old google search)
"how to ..."

- common commands
mkdir
rmdir
rm
touch 
cat 
head 
tail
cp
mv
wget

find 
grep 
sed
sudo

echo
sort

Fun:
cal

#### Exercises

(VSCODE Shortcut: you can open the file in VS Code by using this fun trick)

- Directories and file structure
- common commands
- options and arguments
