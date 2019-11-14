# travel-agency

Git Commands:
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
  ```
  
  npm 
  ```
  npm init // This makes package.json (our grocery list)
  npm install jquery --save
  npm install // This command installs all the packages listed in package.json
  npm show <packagename> version
  npm list --depth=0
  ```
  
  Gulp
  ```
  npm install gulp-cli --global
  npm install gulp --save-dev
  gulp // this will run the 'default' task of gulp
  npm install gulp-watch --save-dev
  
  ```
  
  All the npm packages installation in order
  
  ```
  npm install gulp-cli --global
  npm install gulp --save-dev
  npm install gulp-watch --save-dev
  npm install gulp-postcss --save-dev
  npm install autoprefixer --save-dev
  npm install gulp-plumber --save-dev
  npm install postcss-simple-vars --save-dev
  npm install postcss-nested --save-dev
  
  ```
  Issues:
  
  I had  to install [plumber](https://www.npmjs.com/package/gulp-plumber) to circumvent CSSSyntaxError and prevent it from breaking the pipe.
