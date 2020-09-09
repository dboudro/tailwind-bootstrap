	*installation*

npm init -y              *   makes package json *

npm install tailwindcss postcss-cli autoprefixer
npx tailwind init

touch postcss.config.js         
```
module.exports = {
	plugins: [
	require('tailwindcss'),
	require('autoprefixer')
	]
}
```

touch css/tailwind.css  

``` 
@tailwind base;
@tailwind components;
@tailwind utilities;
```

package.json 
"build": "postcss css -d build"

npm run build


*Chris Demo*
laravel new
php artisan serve  *artisan is CLI* *Composer is package manager*

**justify-content** - horizontal 
**align-items** - vertical
 - used on parent flex container 

 <div class="flex justify-between"></div>

 **align-content** requires flex-wrap. aligns all content of the flex container in the container. 

  <div class="flex flex-wrap content-end"></div>