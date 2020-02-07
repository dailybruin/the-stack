FROM ubuntu:latest
MAINTAINER docker@ekito.fr

RUN apt-get update \
  && apt-get -y install cron \
  && apt-get install -y gnupg2 \
  && apt-get -y install python3.6 \
  && apt-get install -y wget \
  && apt-get install -y python3-pip \ 
  && apt-get install -y python3-bs4 \ 
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy hello-cron file to the cron.d directory
COPY hello-cron /etc/cron.d/hello-cron
#COPY chromedriver . # not using this one because its for mac
COPY class_parser.py .
COPY departments.txt . 
COPY d.txt .
COPY test.py .

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/hello-cron

# Apply cron job
RUN crontab /etc/cron.d/hello-cron

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# install google chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get -y update
RUN apt-get install -y google-chrome-stable

RUN apt-get -y update && apt-get -y install python3-pip && apt-get -y install curl

# install chromedriver
RUN apt-get install -yqq unzip
RUN wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip
RUN unzip /tmp/chromedriver.zip chromedriver -d /app/

# set display port to avoid crash
ENV DISPLAY=:99

# upgrade pip
RUN pip3 install --upgrade pip

# install selenium
RUN pip3 install selenium

# this has been moved to docker-compose.yml
# Run the command on container startup
#CMD ["cron", "-f"]
