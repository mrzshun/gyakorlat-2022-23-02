Hasznos linkek:
https://laravel.com/docs/10.x
https://laravel.com/docs/10.x/eloquent
https://laravel.com/docs/10.x/collections

Hogyan installáld a projektet (frontenddel együtt)?

1. git clone git@github.com:mrzshun/gyakorlat-2022-23-02.git
2. cd gyakorlat-2022-23-02/blog 
3. composer install
4. .env fájl készítése a blog könyvtárba, abba a .env.example bemásolása
5. php artisan key:generate
6. npm i //frontend telepítése 
7. npm i -D @fortawesome/fontawesome-free //font telepítése ikonokhoz
8. npm run dev -- build
9. php artisan migrate --seed //adatbázis fájl létrehozásához "yes"

CRUD:
Create, Read, Update, Delete

Parancsok:
php artisan make:model Flight
php artisan make:model Flight -mf
létrehozza a modelt, és hozzá a migrationt és a factory-t

Blog projekt

Van benne 3 (2+1) entitás
Category: name, background color, text color
Post: title, text, description, author
Author: beépített User modelt fogjuk használni

Adatmodell kapcsolatok
1-1 - egy-egy kapcsolat
1-N - egy-sok kapcsolat
N-N - sok-sok kapcsolat

Author-Post: 1-N
Post-Category: N-N

http://webprogramozas.inf.elte.hu/#!/subjects/webprog-server/handouts/laravel-04-rel%C3%A1ci%C3%B3k

https://laravel.com/docs/10.x/collections

Pár dokumentáció és link összeszedve, ami a videos órához kell:

Laravel UI:
https://github.com/szerveroldali/blog_basic_assets 

Laravel Frontend:

https://laravel.com/docs/10.x/frontend
Bármelyikkel lehet a beadandót csinálni, vagy indulhattok a gyakorlati kezdőcsomagból is.
Laravel Vite:
https://laravel.com/docs/10.x/vite
Bootstrap 5 doksi:
https://getbootstrap.com/docs/5.0/getting-started/introduction/ 
Laravel blade - sections, yield:
https://laravel.com/docs/10.x/blade#layouts-using-template-inheritance

Laravel HTTP redirect
https://laravel.com/docs/10.x/redirects
https://laravel.com/docs/10.x/responses#redirects

Laravel Controllerek, Resource Controllerek:
https://laravel.com/docs/10.x/controllers
https://laravel.com/docs/10.x/controllers#resource-controllers

CSRF sebezhetőség doksi:
https://owasp.org/www-community/attacks/csrf

Laravel validáció
https://laravel.com/docs/10.x/validation
https://laravel.com/docs/10.x/validation#available-validation-rules

Bootstrap form validációhoz használt komponensek
https://getbootstrap.com/docs/5.0/forms/validation/

Laravel Session
https://laravel.com/docs/10.x/session