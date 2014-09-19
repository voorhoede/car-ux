#!/bin/bash
rm -rf out || exit 0;
mkdir out;
npm install -g grunt-cli
grunt deploy
( cd distribution
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@nodemeatspace.com"
 git add .
 git commit -m "Deployed Car UX to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
