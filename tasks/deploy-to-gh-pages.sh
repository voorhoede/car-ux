#!/bin/bash
# build new distribution
rm -rf distribution || exit 0;
npm install -g grunt-cli
grunt deploy
# push it to gh-pages
( cd distribution
 git init
 git config user.name "Travis-CI"
 git config user.email "declanrek@gmail.com"
 git add .
 git commit -m "Deployed Car UX to Github Pages"
 # git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
