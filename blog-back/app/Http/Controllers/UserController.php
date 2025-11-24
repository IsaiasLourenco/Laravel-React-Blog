<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //LISTAR TODOS OS USUÁRIOS
    public function index() {
        return response()->json(User::all());
    }
    
    //CRIAR NOVO USUÁRIO
    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json($user, 201);
    }

    // MOSTRAR UM USUÁRIO ESPECÍFICO
    public function show($id) {
        $user = User::find($id);
        if (!$user) return response()->json(['message' => 'User not found!'], 404);
        return response()->json($user);
    }

    // ATUALIZAR USUÁRIO
    public function update(Request $request, $id) {

        $user = User::find($id);
        if (!$user) return response()->json(['message' => 'User not found!'], 404);

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,'.$user->id,
            'password' => 'sometimes|string|min:6',
        ]);

        if ($request->has('password')) {
            $request->merge(['password' => Hash::make($request->password)]);
        }
        $user->update($request->all());
        return response()->json($user);
    }

    // DELETAR USUÁRIO
    public function destroy($id) {
        $user  = User::find($id);
        if (!$user) return response()->json(['message' => 'User not found!'], 404);
        $user->delete();
        return response()->json(['message' => 'User successfully deleted!']);
    }

}
