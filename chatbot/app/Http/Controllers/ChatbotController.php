<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function query(Request $request)
    {
        $query = $request->input('query');

        // Make a serverless call for inference
        $response = Http::post('https://your-serverless-inference-url.com', [
            'query' => $query
        ]);

        return response()->json($response->json());
    }
}
