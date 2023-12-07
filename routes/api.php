<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get-teams', [
    \App\Http\Controllers\AboutUsController::class,
    'getAllTeams',
]);

Route::get('/get-projects', [
    \App\Http\Controllers\ProjectController::class,
    'getAllProjects',
]);

Route::get('/get-project/{slug}', [
    \App\Http\Controllers\ProjectController::class,
    'getProjects',
]);

Route::get('/get-sliders', [
    \App\Http\Controllers\BaseController::class,
    'getSliders',
]);
Route::get('/get-news', [
    \App\Http\Controllers\BaseController::class,
    'getAllNews',
]);

Route::get('/get-new/{slug}', [
    \App\Http\Controllers\BaseController::class,
    'getNew',
]);