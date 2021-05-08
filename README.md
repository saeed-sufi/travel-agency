# travel-agency

## Workflow
* First create your project folder. Then create an empty repo on github. Then clone the github repo you are interested in on your computer. Then `git config` to tell git who is going to make changes to the cloned repo from now on. Then `git remote set-url` to tell git where you will be pushing the git repo from now on. Don't forget to make a `.gitignore` file in your project directory. Finally, `git push`.

* You'll need npm for package management so npm init to make the package.json in project directory. If you already have a package.json with all the package items listed in it, just `npm install` to install all the listed packages. 

* You'll need gulp for automation. it's a build system or task runner. Gulp is like a record player and gulp plugins are like records. There is almost a gulp plugin to automate any task you can think of. 

* To install Gulp, first install `gulp-cli` globally. Then install it locally in your project folder. 

* `npm install --save` will install packages which are needed to run the project in web browser as dev dependencies while `npm install --save-dev` will list package installation list in package.json as dev-dependencies which make our life as web developers easier. 

* Then, create the `gulpfile.js` in project directory. Everything in gulp, revolve around tasks. So, we start to edit gulpfile to add tasks which watch the certain files (html, css, php, ...) and run an specific task if any changes happen in any of the files. 

* Don't forget to add
 ```
 "browserslist": [
    "last 3 versions"
  ]
``` 
  in `package.json` file to make autoprefixer work.
  
* First we work on the `styles` task which takes care of css files. Here we need something like Sass or Postcss to work as a filter so that when we pipe css source file(s) into destination folder, postcss automatically applies filters to main css files. These filters are actually gulp plugins which are used as elements of the array that `postcss([])` expects.

* `translateY` lets us position an element vertically relative to **itself**. For example, `translateY(100%) will push the content down, however tall the content is.

* For responsive images, it's better to have a real `img` element in your html file rather than applying the image as a css background image.

* BEM stands for Block, Element and Modifier. Look for block elements in the design file. 

* Class names are not necessarily supposed to be semantic. They are just a hook for css and javascript. So, the class names must communicate useful information to developers. 

* For font sizes, padding and margin values, we use `rem` unit in this course instead of `px`, `%` or `em`. When we use `rem` everything is relative to the root of the page which is always `html` element. 

* If we are giving padding to an element, we need to set the element to be an `inline-block` level element; that way, its parent and surrounding elements will be aware of its vertical padding.

* We need to tell `browserSync` where our website lives because browserSync actually spins up a little web server on our computer and it needs know where this web server should point.

* Inline boxes don’t affect vertical spacing. They’re not for determining layout—they’re for styling stuff inside of a block.

* If you want to play with the vertical space of a page, you must be working with block-level elements. check your display property if top or bottom margin isn't working.

* `paddings` never collapse. Add a `div` with `padding-top: 1px` between two block level consecutive elements to prevent their `margins` to collapse.

* HTML elements define their dimensions automatically. If we need explicit dimensions, we use `width` and `height` properties.

* Using `margin:auto` for centering a block only works when it has an explicit `width` defined on it.

* `text-align` property aligns the content and "inline" boxes inside of a block-level element. It will only align the content inside of our block boxes—not the blocks themselves.

* “descendant selectors” are used to target only those elements that are "inside" of another element.

* Use pseudo-classes to style different states of an element (`link`, `visited`, `hover`, `active`, ...). Think of them as class selectors that you don’t have to write on your own because they’re built into the browser.

* ID selectors are generally frowned upon. Use class selectors instead. Ids create a dependency between your website’s URLs and your CSS styles and this double functionality is another reason why we should avoid using them as css selectors. `href='selectors.html#button-2'`

* insert this code into `global.css` file so that you wouldn't forget to add `alt` attribute for every `img` element. 
```
img:not([alt]) {
  filter: grayscale(100%);
}
```

* If `postcss([])` encounters an error we have to handle it in a way that the watch task doesn't terminate; we do so by adding `.on('error', function() {this.emit('end')}` to the watch task.

### Responsive Images

* There are two scenarios when dealing with responsive images. 
1. Art direction and cropping situation: The images are cropped for desing purposes. In this case we need to use `picture` element. Also, in the picture element, we have to begin with **smallest** image in `img` tag. Then, use `source` element to add `srcset` and `media` for bigger images. Note that the order of media queries matters and it should be in the direction of large images to smaller ones. 
2. Image resolution and file size situation (faster load time): The only diffrence between alternative images is their size. In this scenario, we don't need `picture` element and `media` attribute. We only need a traditional `img` element with all the different image sizes listed in the `srcset` attribute. Also, we need to help the browser to know about the size of each image by adding pixel-width of each image (570w). 

* You can combine this two situation when you need to send different cropped images to monitors with higher resolution (4K, ..). In this case, we need to add the high-dpi image to the `srcset` atribute of `source` element. Also, do not forget to tell the web browser about the width of the image.

* Note that if you need to add multiple images for `img` element, you need to use `srcset` instead of `src` element.

* Note that when you use responsive images, browser will assume that the image is going to take the entire width of the window. That's why they choose to display high-dpi copy of the image. So, we need to tell the browser that the image width is not going to be more than X pixels; we do so by adding `sizes` attribute to the `source` element (ex: `sizes = "404px"`). We can add media query to the `sizes` attribute to tell the browser of the width of image in screens with different sizes (ex: `sizes="(min-width:976px) 976px, 100vw"`)

* If you need to add a class to a `picture` element, you have to add it to the `img` element which resides in `picture` element.

* For responsive images to work for older browser which do not support `picture` elements and `srcset` attributes, you need to install an npm package called `picturefill`. Import it into the `vendor.js` file. 

### More CSS Styling tips

* It's preferable to use a descendent selector rather than nesting more than two rules.

* You should be very careful not to pollute the global css scope (`_global.css`).

* **Never** insert an element between two elements that are positioned relative and absolute in relation with each other.

* If you're specifying `width` for a block level element, use `-left: auto` and `margin-right: auto` to center it.

* `img` element is by default an inline level element.

* If an `img` element is to be centered, after setting `margin-left: auto` and `margin-right: auto` of its container element, make sure to set the `max-width` of the image to its actual maximum width. Note that for this trick to work, the image should not be floated.

* Do not forget to set `overflow: hidden` in `wrapper.css`. 

*  Use ```em``` for margins of the text so that they scale relative to the font sizes used in the text.

* If an element is floated, it's taken out of the flow of the page and it's parent element how tall it should be.

* If an element is `position: relative` its surrounding elements, would not be aware of the change; They will think that the relatively positioned element is still where it used to be.

* `position: absolute` will cause the element to get out of the normal flow of the page.

* When an element is positioned absolutely, it will shrink wrap and only use as much space as it need to fit its content. You can adjust it by setting `width: 100%`

* When two html elements overlap, the one that comes later will sit on top. This is when we need to use z-index.

* Note that when using `transform: scale()`, by default, the element consideres its perfect center to be the origin of the transform.

* You can use `left` property and `transform: translateX` to center an element.

* Use `position: absolute` and set `left` and `top` properties to position an element perfectly where you want it to be.

* If you need to put a semi-transparent layer on an image, after setting the `background-image` to use the image, apply `linear-gradient` for setting a transparent color on the image.

* An element should be `position: relative` so that the `z-index` property is acknowledged by the browser.

* To change `background-color` from a real color to its default, `background-color: transparent`.

## Flexbox

* If a flex item has an explicit width, its `flex-basis` is set to that width. Otherwise, it will be sized according to the width of its content. Also, if you set `flex-basis: 0;` it means all the space is free to grab by flexbox and be shared in proportion.

* when `flex-basis: auto` flexbox will take the `max-content` size of the item as the flex-basis and when `flex-basis: 0` flexbox will take the `min-content` size of the item as the flex-basis.

* If you set `flex-basis: 0` then explicitly setting the items width, would be ignored.

* When there is positive free space in the container, adjusting `flex-shrink` will trigger no change and vice versa for `flex-grow` when there is negative free space. In other words, items can’t grow with no positive free space, and they won’t shrink unless there is negative free space.

* If you set `min-width` or `max-width` for flex items, that size is not going to be violated no matter how you adjust `shrink` or `grow`. In other words, it will make flex items inflexible in one direction. But if you only set `width` for flex items, then modifying `shrink` and `grow` properties would still work in both direction.

* `flex: initial;` is equivalent to `flex: 0 1 auto;`. `flex: auto;` is equivalent to `flex: 1 1 auto;`. `flex: none;` is equivalent to `flex: 0 0 auto;`. `flex: 1;` is equivalent to `flex: 1 1 0;`

* `align-content` is similar to `align-items`, but instead of aligning flex items, it aligns flex lines. So, in order for it to have any effect, `flex-wrap` has to be set to `wrap`.

## Javascript

* An `object` is an entity that has data and behaviour (nouns and verbs).

* In Javascript, a `constructor` is a reusable blueprint.

* A `constructor` function looks like a regular function and the fact that how we use this function, makes it a `constructor` function (by using `new` keyword which is an operator that creates a new instance of the constructor function object type).

* The `require()` syntax for importing js files, works in gulp because gulp is running in Node.js but it wouldn't work in browser! This is when we need **webpack** for making a bundled file of all of the separate js files. 

* When we `require()` a file, the code that file is executed immediatelly. But apart from running this file, we need to have access to certain parts of it. In other words we want to make these parts, accessible or callable.

* `require()` returns `exports` object.

* first install webpack globally, then create a `webpack.config.js` file in the root of the main directory. Note that webpack needs us to give it an absolute path (not a relative path); This is why we need to use `path`.

* `babel-loader` helps us to integrate babel with webpack

* The first item in a jquery array-like object, is always a pointer to the native DOM element. 

* Browsers download an image, as soon as they see a `src` or `srcset` attribute in the `img` tag.

* By adding Modernizr to your project you would be able to check what features the browser support on the fly.

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
   
