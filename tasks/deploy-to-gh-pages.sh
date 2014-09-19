#!/bin/bash
# build new distribution
echo "cloning gh-pages"
git clone -b gh-pages "https://${GH_TOKEN}@${GH_REF}" distribution > /dev/null 2>&1 || exit 1
rm -rf distribution/* || exit 0
npm install -g grunt-cli
echo "building new distribution"
grunt deploy
# push it to gh-pages
( cd distribution
 #git init
 git config user.name "Travis-CI"
 git config user.email "declanrek@gmail.com"
 git add .
 git commit -m "Deployed Car UX to Github Pages"
 echo "push it real good"
 #git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
