---
layout: page
permalink: /docs/beginner/git/
---

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
