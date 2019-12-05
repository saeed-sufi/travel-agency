# travel-agency

## Git Commands:
```
  git init
  git config --global user.name saeed-sufi
  git config --global user.email saeed.sufi@hotmail.com
  git add -A
  git commit -m 'testing git'
  git checkout -- .
  git remote -v
  git remote set-url origin https://github.com/saeed-sufi/travel-agency.git
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
  // if yout want to stage and commit changes in one move:
  git commit -am 'counted to thirteen'
  git push origin count-to-fifteen
  // to delete a branch
  git branch -d count-to-fifteen
  // create a new branch and check out to it in one move: 
  git checkout -b our-features
  // if you want a dedicated commit for the merge:
  git merge our-features --no-ff
  // show a list of branches:
  git branch
  git show-branch
  git branch -a
  
  #### Git Terminology
a pull request is basically a request to merge one branch into another
  
  
  ```
  
  ## npm 
  ```
  npm init // This makes package.json (our grocery list)
  npm install jquery --save
  npm install // This command installs all the packages listed in package.json
  npm show <packagename> version
  npm list --depth=0
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
  ```
  ## Issues:
  
  I had  to install [plumber](https://www.npmjs.com/package/gulp-plumber) to circumvent CSSSyntaxError and prevent it from breaking the pipe. This issue was resolved when I learned how to manage gulp errors later in the course. So, there was no need to use plumber anymore.
  
  ## Notes:
  **normalize.css** is very useful since it resets every default css property that different browsers use so that our project would look the same in all browsers. 
  Remember to use it for all your projects!
  
 ### em Size Unit
 Use ```em``` for margins of the text so that they scale relative to the font sizes used in the text. 
