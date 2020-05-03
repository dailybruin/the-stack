---
layout: page
permalink: /docs/guide/
---

## Jekyll
TODO: Just improve existing documentation

https://stack.dailybruin.com/docs/
Installation: https://github.com/dailybruin/the-stack/blob/master/README.md
Jekyll: https://stack.dailybruin.com/docs/website-code/
Workflow: https://stack.dailybruin.com/docs/workflow/ 

- Go on over to [the Stack repository](https://github.com/dailybruin/the-stack) and follow the installation process.

## Markdown

Every page in The Stack uses Markdown. Markdown is a light-weight formatting tool for all your articles.

In simple terms, markdown is like a glorified Google Doc, which lets you 
- add code (HTML) in your file
- use standard syntax to create headings, add links and images. 

Writing a hashtag before your heading (for example, "# HEADING") creates a heading. And the more hashtags (upto 7) you add in front of it, the smaller the heading gets. For example, ("### SMALLER HEADING" creates a smaller heading). 

# HEADING
This heading uses a single hashtag.

### SMALLER HEADING
This heading uses 3 hashtags.

There are standard ways to add links, images, lists, tables, etc.
Whenever you need to figure out how to do something, look it up from this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet).

### Internal Links
One of the things the cheatsheet doesn't explain is how to create internal links, i.e., how to create links to different parts of the page (like how clicking on "Markdown" in the Topics list leads you here).

Every title in Markdown is a link. So, for example, "# HEADING" earlier is a link and you can refer to it by:

`[go to heading](#heading)`

[go to heading](#heading)

The syntax to refer to the links is
- make everything lowercase
- add a '-' for spaces

So, for example:

`[go to smaller heading](#smaller-heading)`

[go to smaller heading](#smaller-heading)

## Command Line

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

## Git
Git is a tool for version control, you can install it [here](add link).

It's a convenient way for several people to work together on a project. In some sense, it's also like a glorified google doc, except you can maintain multiple files and directories as well as code, and can revert back to older versions of your code.

Since we want everyone to work on the same project, there is a "remote" version of it online (up on github), and a "local" version that lives on your computer. Git is a way for you to add your changes from your local version to the remote version, and to import the changes your teammates made to your local version.

(add graphic here showing central remote and multiple users)

### Create/Clone Repo
Your entire project lives in the "repository" or the root directory for your project.

You can initialize (or create) a repository locally and then push it to a remote. (TODO: add link)
In most cases however, you can simply create a repository online on github, and then clone it (TODO: add images)

In fact, in most cases, you will work on an existing project, and so you can just go to the repository online and clone it 

(Note: This is the clone you did above while installing Jekyll)

### Branches
Imagine your git repository to be a screenplay. Then the main version of the screenplay is "master". You're job as a (script) developer is to add a scene, see if it works with the flow of the general script. Some of your teammates might be working on adding the same scene or some might be working on different scenes.

(TODO: Add image of scenes)

So when you add a scene, you're really testing out another version of the master play, the master play but with your newly added scene. So you create a branch, add your scene, see how it's working, and if you're satisified with it, you merge it to master.

To create your own version, you create a branch off of master. This copies the entire play, and now you can add your changes and new material to it

git checkout -b

### Stage, Commit, Push and Pull
Imagine your git repository to be a screenplay. The entire project is a bunch of scenes (branches) and you are responsible for some of the scenes, your teammates are responsible for others.

Whenever you make changes to your scene, you can add those changes to the staging area.
git add name_of_file    //this file is now being tracked by git
git add .   //adds everything under the current directory (good shortcut for adding all changes)
git add js/*    //adds everything under a certain directory

(TODO: add git status screenshot)

Whenever you are satisfied with your draft, you can commit your changes
git commit -m "first draft" //m means message
git commit -am "first draft"    //-a shortcut (explain tracked and untracked file)
(TODO: add git status screenshot)

If you are ready for others to see your draft, you can push it to the remote so everyone else can see
git push    //sometimes when it's your first push, git may yell at you. But it gives you the right command to use, just copy and run that command

If you want to see the changes other people made to your script, you can do
git pull    //pulls all changes from remote

You can do git status to see what changes you have made

Made an error? use git checkout
Unstage? git reset HEAD
Undo a commit? 
view commit history?

Why do we have git add as well as git commit?
Commits are like snapshots of your repository, they will be stored in the commit history. So if you've added a bunch of changes, but you realized you made a typo. If your work history included every little typo you changed and every line you added, it would be hard to read through. Therefore, commits are used so that we can view *meaningful changes* through time, like adding a new character in your script, or a new monologue, but not word changes here and there.

The flow of work above comprises of what you will do 95% of the time. Yo make a change and add it, after you've added a few you commit them and push them for everyone else to see. Other parts of the process only happen once or twice during the life cycle of the project, so this is the core of what you need to master (and what you can get away with knowing most of the time).

### Pull Requests

### Merge and Merge Conflict

#### Merge Conflicts
Say two people are working on the same scene. Suppose you pushed "Mattie: Stack is lit'", and then your friend pulled and changed the line to "Mattie: 'Stack is super super lit'". When you pull again, you will have a merge conflict, because git doesn't know which version of the line you want to keep.

You can simply go to the line, save the version you want, say "Mattie: 'Stack is super lit'" and then do the above process all over again (add, commit and push) to fix the conflict

In this case, you can go to the file, edit it to the version you want to keep 
(TODO: add screenshot of the >>>>>>>>> and <<<<<<<<<<>>>>>>>>>>, and "accept incoming change", etc. in VS Code)


### Advanced: Stash?
### Advanced: Rebasing?
### Advanced: Fork?

## ChartJS 
- (using tool when available)
- (+basic HTML/CSS/JS)
- responsiveness and media queries

## Good Code Practices
- code lints
- good code structure
- standardization
- abstraction
- code secrets (+env)
- gitignore
- DRY (don't repeat yourself)

## What Are APIs?
(+ some good ones to use)



