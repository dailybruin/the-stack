# Class Parser

departments.txt format:
```
  department name (edited for link)
  department abbreviation (edited for link)
```
Ex:
```
  Biological+Chemistry+
  BIOL+CH
```

class parser csv file name format:
```
  day-hour-second.csv
```
We really only care about day/hour, second is to distinguish the day/hour files ran at the same time from different people

CSV data format:
```
  department abbreviation class name
  spots filled, spots total, spots left
0,0,0 means class is closed/full
-1,-1,-1 means class is waitlisted
Ex:
  AERO+ST A - Leadership Laboratory
  0,120,120
```
Department abbreviation is `AERO+ST`, aka Aerospace Studies

Class name is `A - Leadership Laboratory`

it has `0` spots filled, `120` spots total, and `120` spots open

### Other Notes
* some classes may have multiple rows of data, this is for the class being held at different times/professors
* we only get class data, not discussion data
* we also do not get professor data

General way of how program works:
```
iterate through departments by getting its link
  iterate through pages by clicking on the page nums
    press the expand all classes button
      get the text of all the classes
        determine if its closed/open/waitlisted and print to csv
```

if at any step something fails, we wait/press it again/skip to the next department/page

important variables:

`timeout`: how long we wait for a page to load, currently 10 seconds

`status_column_load`: we check that the expand all classes button has been pressed by seeing if each class has a status_column html div
  However, we can't wait for a certain # of them to have loaded (for all the classes) (the java version of selenium lets you do this but not python)
so we just sleep for status_column_load seconds, currently 2 seconds

4-23-5.csv is one of Andrew's test csvs on all the classes (doesn't have department abbreviation in front)



# Docker stuff
build the image by running
```
docker-compose build
```

then actually run the image in a container by running
```
docker-compose up
```
Note: It will keep running. If you want it to stop, use CTRL C twice.

this command will show you the currently running docker containers. 
```
docker container ls
```

If you want to "ssh" into any of them, run
```
docker exec -it UNIQUE_ID_CONTAINER_FROM_DOCKER_CONAINER_LS bash
```

## Volumes

We save our csv files in volumes, not the container. This is safer because they container could restart and we would lose data.
Even if you stop the container, you can still access the data it created.

This will list all volumes
```
docker volumes ls
```


This command will show you the file path to the volumes
```
docker volumes inspect ID_OF_VOLUME_FROM_PREV_COMMAND
```

Lastly, you will need to run
```
sudo cat path/to/volumes/directory/d-h-m.csv
```
To see the file. You can also use other terminal utilities like `vim` or `emacs` but you have to `sudo` them.

## Docker container doesn't stop
If that happens, run this command
```
docker container stop UNIQUE_ID_OF_CONTAINER_FROM_DOCKER_CONTAINER_LS
```

If docker is taking too much storage, you can `prune` the images and delete containers you aren't using. 
```
docker image prune
```
```
docker container rm UNIQUE_ID_OF_CONTAINER
```
