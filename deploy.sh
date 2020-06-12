#!/usr/bin/env sh
# package.json "deploy": "yarn build; push-dir --dir=dist --branch=gh-pages --cleanup"

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# Commit repo
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/BertrandBev/vue-live-docs master:gh-pages

# Cleanup and Nav back
rm -rf .git
cd -