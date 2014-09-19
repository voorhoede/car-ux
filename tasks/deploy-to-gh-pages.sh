#!/bin/bash
# build new distribution
CURRENT_COMMIT=`git rev-parse HEAD`

echo "cloning gh-pages"
git clone -b gh-pages "https://${GH_TOKEN}@${GH_REF}" distribution > /dev/null 2>&1 || exit 1
rm -rf distribution/* || exit 0

echo "building new distribution"
npm install -g grunt-cli
grunt deploy

# push it to gh-pages
cd distribution
#git init
echo "configure git user"
git config user.name "Travis-CI"
git config user.email "declanrek@gmail.com"
echo "add and commit new distribution files"
git add -A
git commit -m "Deployed Car UX ($CURRENT_COMMIT) to Github Pages"
echo "push it real good"
git push origin gh-pages > /dev/null 2>&1
#git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
