<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// Teste
Route::get('/ping', function () {
    return ['status' => 'API funcionando!'];
});

// POSTS
Route::apiResource('posts', PostController::class);

// USERS
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

// 🔥 LOGIN API
Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    $user = \App\Models\User::where('email', $request->email)->first();
    $token = $user->createToken('react-token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token
    ]);
});
