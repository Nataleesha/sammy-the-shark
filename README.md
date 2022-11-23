deploying with parcel

1. npm install gh-pages --save-dev
2. in package.json file, replace "main": "index.js" with "source": "src/index.html"
3. add "scripts": {
    "build": "parcel build src/index.html --public-url /github-repo-name/",
  }
4. add “homepage”: “http://github-username.github.io/github-repo-name"
5. add “scripts”: {
...
“predeploy”: “npm run build”,
“deploy”: “gh-pages -d build”
}
6.npm run deploy
