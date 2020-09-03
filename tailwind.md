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
"build": "postcss css -d build"

npm run build

live-server



*Chris Demo*
laravel new
php artisan serve  *artisan is CLI* *Composer is package manager*

**justify-content** - horizontal 
**align-items** - vertical
 - used on parent flex container 

 <div class="flex justify-between"></div>

 **align-content** requires flex-wrap. aligns all content of the flex container in the container. 

  <div class="flex flex-wrap content-end"></div>