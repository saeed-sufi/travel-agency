# travel-agency

## Workflow
* First create your project folder. Then create an empty repo on github. Then clone the github repo you are interested in on your computer. Then `git config` to tell git who is going to make changes to the cloned repo from now on. Then `git remote set-url` to tell git where you will be pushing the git repo from now on. Don't forget to make a `.gitignore` file in your project directory. Finally, `git push`.

* You'll need npm for package management so npm init to make the package.json in project directory. If you already have a package.json with all the package items listed in it, just `npm install` to install all the listed packages. 

* You'll need gulp for automation. it's a build system or task runner. Gulp is like a record player and gulp plugins are like records. There is almost a gulp plugin to automate any task you can think of. 

* To install Gulp, first install `gulp-cli` globally. Then install it locally in your project folder. 

* `npm install --save` will install packages which are needed to run the project in web browser without which our application wouldn't work while `npm install --save-dev` will list package installation list in package.json as dev-dependencies which make our life as web developers easier. 

* Then, create the `gulpfile.js` in project directory. Everything in gulp, revolve around tasks. So, we start to edit gulpfile to add tasks which watch the certain files (html, css, php, ...) and run an specific task if any changes happen in any of the files. 

* Don't forget to add
 ```
 "browserslist": [
    "last 3 versions"
  ]
``` 
  in `package.json` file to make autoprefixer work.
  
* First we work on the `styles` task which takes care of css files. Here we need something like Sass or Postcss to work as a filter so that when we pipe css source file(s) into destination folder, postcss automatically applies filters to main css files. These filters are actually gulp plugins which are used as elements of the array that `postcss([])` expects.

* We need to tell `browserSync` where our website lives because browserSync actually spins up a little web server on our computer and it needs know where this web server should point.

* If `postcss([])` encounters an error we have to handle it in a way that the watch task doesn't terminate; we do so by adding `.on('error', function() {this.emit('end')}` to the watch task.

## Git Commands:
```
  git init
  // Git needs to know who is making the changes
  git config --global user.name saeed-sufi
  git config --global user.email saeed.sufi@hotmail.com
  // Git command who am I
  git config --list
  git add -A
  git commit -m 'testing git'
  // prints commits:
  git log --oneline
  // to go back a specific commit:
  git checkout 900cfcf index.html
  // In order to get back to the last commit
  git checkout -- .
  
  // In order to delete .git 
  rm -rf .git
  git remote add origin https://github.com/saeed-sufi/travel-agency.git
  // if you want to know where your github repo will be pushed to:
  git remote -v
  git remote set-url origin https://github.com/saeed-sufi/travel-agency.git
  // To make a gitignore file, first make a gitignore.txt file and then open the command line and type:
  ren gitignore.txt .gitignore
  git push origin master
  git pull origin master
  git clone https://github.com/saeed-sufi/travel-agency.git
  git branch
  git reset app/index.html // if you don't need to commit changes to a specific file.
  // once you commit all the changes and the working directory is clean, you can create a new branch:
  git branch count-to-ten
  git checkout count-to-ten // changing the working branch from master to count-to-ten
  // once you have finished working on a branch you are ready to merge it to the master branch
  // first be sure to checkout to master branch and then execute the following:
  git merge count-to-ten
  // if you want to stage and commit changes in one move:
  git commit -am 'counted to thirteen'
  git push origin count-to-fifteen
  // to delete a branch
  git branch -d count-to-fifteen
  // create a new branch and check out to it in one move: 
  git checkout -b our-features
  // if you want a dedicated commit for the merge so that all the commits could be reviewed in one place and (in case you have lots of commits already), then it's better to merge with disabled fast forward.
  git merge our-features --no-ff
  // show a list of branches:
  git branch
  git show-branch
  git branch -a
  git fetch // will get all the files at repo ready and available
  git pull origin .gitignore // will pull only the .gitignore file into the local repository
  
  // for more extended comment use the following commenting method:
  git commit -m "Subject" -m "Description..."
  ```
  #### Git Terminology
  * Pull request: is basically a request to merge one branch into another
  
  * In order to avoid merge conflicts, keep in mind the four following tip:
  1. Run `git pull` as often as possible.
  2. Communicate with your team.
  3. Standardize whitespace setting of your editor.
  4. Think of `git merge` as a two-way street (`git merge master` while you're in branch).
 
  
  ## npm 
  
  If you need an npm package, search for it in the npmjs website. 
  ```
  npm init // This makes package.json (our grocery list)
  npm install jquery --save
  npm install // This command installs all the packages listed in package.json
  // Show the current available version of a package (not necessarilly the one that is installed in your project):
  npm show <packagename> version
  npm list --depth=0
  // to delete all node_modules:
  npm uninstall `ls -1 node_modules | tr '/\n' ' '`
  ```
  
  ## Gulp
  ```
  npm install gulp-cli --global
  npm install gulp --save-dev
  gulp // this will run the 'default' task of gulp
  npm install gulp-watch --save-dev
  
  ```
  
  ### All the npm packages installation in order
  
  ```
  npm install gulp-cli --global
  npm install gulp --save-dev
  npm install gulp-watch --save-dev
  npm install gulp-postcss --save-dev
  npm install autoprefixer --save-dev
  npm install gulp-plumber --save-dev
  npm install postcss-simple-vars --save-dev
  npm install postcss-nested --save-dev
  npm install postcss-import --save-dev
  npm install browser-sync --save-dev
  npm install postcss-mixins --save-dev
  npm install webpack -g // make sure to install it globally!
  npm install babel-core babel-loader babel-preset-es2015 --save-dev
  npm install gulp-rename --save-dev
  npm install lazysizes --save
  npm install jquery-smooth-scroll --save
  npm install picturefill --save
  npm install imagemin --save-dev
  npm install usemin --save-dev
  npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
  ```
  ## Issues:
  
  I had  to install [plumber](https://www.npmjs.com/package/gulp-plumber) to circumvent CSSSyntaxError and prevent it from breaking the pipe. This issue was resolved when I learned how to manage gulp errors later in the course. So, there was no need to use plumber anymore.
  
  ## Notes:
  * **normalize.css** is very useful since it resets every default css property that different browsers use so that our project would look the same in all browsers. Remember to use it for all your projects!
  
  * Staging step in git is our chance to consider what changes we need to apply to our repo
   
