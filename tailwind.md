*installation*

npm init -y              *   makes package json *

npm install tailwindcss postcss-cli autoprefixer
npx tailwind init
new file: postcss.config.js in root
make post.css.config file

make tailwind.css file 
``` @tailwind base;
@tailwind components;
@tailwind utilities;
```

package.json 
"build": "postcss css/tailwind.css -o public/build/tailwind.css"

live-server
