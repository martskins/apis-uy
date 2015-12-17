#!/bin/sh
rm -rf ./dist
node ./scripts/build.js
cd ./dist && \
git init . && \
git add . && \
git commit -m "Deploy"; \
git push "git@github.com:cherta/apis-uy.git" master:gh-pages --force &&
