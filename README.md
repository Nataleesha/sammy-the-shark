deploying with parcel

1. npm install gh-pages --save-dev
2. in your package.json file, replace "main": "index.js" with "source": "src/index.html"
3. add "scripts": {
    "build": "parcel build src/index.html --public-url /Github-repo-name/","
  }
4. add “homepage”: “http://Github-username.github.io/Github-repo-name"
5. add “scripts”: {
...
“predeploy”: “npm run build”,
“deploy”: “gh-pages -d build”
}
6.npm run deploy
