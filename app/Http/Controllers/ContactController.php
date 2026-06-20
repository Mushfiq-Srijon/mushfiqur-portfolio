<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'message' => 'required|string|max:2000',
        ]);

        Mail::to(config('mail.contact_recipient'))->send(
            new ContactFormMail($validated['name'], $validated['email'], $validated['message'])
        );

        return response()->json(['success' => true]);
    }
}