#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Installing global dependencies..."
gem install bundler

echo "Installing project dependencies..."
cd $SCRIPT_DIR
bundle

printf "\nInstallation complete! Run development server with the command 'jekyll serve'.\n" 
printf "You may also want to check out the documentation in the 'docs' folder.\n\n"
printf "Happy Stacking!\n\n"
cat << LOGO
████████╗██╗  ██╗███████╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗
╚══██╔══╝██║  ██║██╔════╝    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
   ██║   ███████║█████╗      ███████╗   ██║   ███████║██║     █████╔╝ 
   ██║   ██╔══██║██╔══╝      ╚════██║   ██║   ██╔══██║██║     ██╔═██╗ 
   ██║   ██║  ██║███████╗    ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
LOGO
