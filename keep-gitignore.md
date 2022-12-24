Notice: the .gitignore file says "node_modules" because we don't want to
upload this in a commit. It excludes this folder for all commits in all directories because
it isn't prefixed with `/`. If it was prefixed with `/`, then it would only work in its
particular folder. The `.gitignore` file uses regex as input.

When you clone the repository, get into this folder. Then do
`npm install` and it automatically installs the packages in package.json.

Read more [here](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files).


