#!/bin/bash
# build new distribution
CURRENT_COMMIT=`git rev-parse HEAD`

rm -rf distribution/* || exit 0

echo "building new distribution"
npm install -g grunt-cli
grunt deploy

# push it to gh-pages
cd distribution
echo "configure git user"
git init
git config user.name "Travis-CI"
git config user.email "declanrek@gmail.com"
echo "add and commit new distribution files"
git add -A
git commit -m "Deployed Car UX ($CURRENT_COMMIT) to Github Pages"
echo "push it real good"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
