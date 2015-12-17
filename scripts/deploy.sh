#!/bin/sh
rm -rf ./build
node build.js
cd ./dist && \
git init . && \
git add . && \
git commit -m "Deploy"; \
git push "git@github.com:cherta/apis-uy.git" master:gh-pages --force && \
rm -rf .git
