	*installation*

npm init -y              *   makes package json *

npm install tailwindcss postcss-cli autoprefixer
npx tailwind init
new file: postcss.config.js in root
make postcss.config.js file

make tailwind.css file 
``` @tailwind base;
@tailwind components;
@tailwind utilities;
```

package.json 
"build": "postcss css/tailwind.css -o build/tailwind.css"

npm run build

live-server



*Chris Demo*
laravel new
php artisan serve  *artisan is CLI* *Composer is package manager*