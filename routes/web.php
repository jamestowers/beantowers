<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');

//Route::group(['middleware' => ['auth']], function () {

    Route::get('/admin', function () {
        return view('welcome');
    });

    Route::get('/projects', 'ProjectController@index');

    Route::get('/projects/{id}', 'ProjectController@show')->where('id', '[0-9]+');

    Route::resource('/admin/projects', 'ProjectController', ['except' => ['show']]);

    Route::post('media/upload', 'MediaController@handleFileUpload');
    Route::resource('/media', 'MediaController', ['except' => [
        'index', 'create', 'update'
    ]]);

//});

Route::get('/images/{size}/{name}', function($size = NULL, $name = NULL)
{
    // http://blog.nedex.io/dynamic-thumbnail-image-compression-on-laravel-5/
    if(!is_null($size) && !is_null($name)){
        // Use config - see config/images.php
        $sizes = Config::get('image.sizes.'.$size);
        $cache_image = Image::cache(function($image) use($sizes, $name){
            $url = url('/uploads/'.$name);
            if(isset($sizes['fit']) && $sizes['fit']){
              $resized = $image->make($url)
                ->fit( $sizes['width'], $sizes['height'], function ($constraint) {
                  $constraint->upsize();
                });
            }
            elseif(isset($sizes['crop']) && $sizes['crop']){
              $resized = $image->make($url)
                ->fit( $sizes['width'], $sizes['height'] );
            }else{
              $resized = $image->make($url)
                ->resize($sizes['width'], null, function ($constraint) {
                    $constraint->aspectRatio();
                });
            }
            return $resized;

        }, 60*24); // cache for 24 hours

        return Response::make($cache_image, 200, ['Content-Type' => 'image']);
    } else {
        \App::abort('404', 'The requested image cannot be found');
    }
});

Route::get('/{vue_capture?}', function () {
    return view('home');
})->where('vue_capture', '[\/\w\.-]*');