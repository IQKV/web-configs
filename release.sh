#!/bin/bash

export GH_TOKEN=$GITHUB_TOKEN

# clean out any existing dev branch before switching to publish
git branch -D dev
git switch dev
lerna publish --yes --no-commit-hooks
