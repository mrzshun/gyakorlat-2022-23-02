Hasznos linkek:
https://laravel.com/docs/10.x
https://laravel.com/docs/10.x/eloquent
https://laravel.com/docs/10.x/collections

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