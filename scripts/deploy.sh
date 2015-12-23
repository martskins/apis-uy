#!/bin/sh
rm -rf ./dist
npm run build
cd ./dist && \
git init . && \
git add . && \
git commit -m "Deploy"; \
git push "git@github.com:cherta/apis-uy.git" master:gh-pages --force
