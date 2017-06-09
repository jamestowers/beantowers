<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Notifications\ContactMessage;

class ContactController extends Controller
{
    public function send(Request $request)
    {   
        $msg = $request->all();
        $user = User::first();
        $user->notify(new ContactMessage($msg));
    }
}
