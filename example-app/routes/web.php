<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return response("<h1>Hello World!</h1>");
});


Route::get('/alma/{id?}', function ($id = 0) {
    return view('korte',[
        "id" => $id,
        "toIterate" => [
            "tech-1" => "php",
            "tech-2" => "nodejs",
            "tech-3" => "java"
        ]
    ]);
});

Route::get('/test', function () {
    return view('test',["name" => "Gipsz Aranka"]);
});

