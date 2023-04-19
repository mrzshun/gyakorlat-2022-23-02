<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('posts.index',[
            'posts' => Post::all(),
            'categories' => Category::all(),
            'users' => User::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // if(!Auth::check()){
        //     return redirect('posts');
        // }
        return view('posts.create',[
            'categories' => Category::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'title' => 'required',
                'description' => 'required',
                'text' => 'required',
                'categories' => 'nullable|array',
                'categories.*' =>  'numeric|integer|exists:categories,id',
                'cover_image' => 'nullable|file|mimes:jpg,png|max:4096',
            ],
            [
                'title.required' => "The title field is required",
                'description.required' => "The description field is required",
                'text.required' => "The text field is required",
            ]
        );
        $cover_image_path = '';
        if($request->hasFile('cover_image')){
            $file = $request->file('cover_image');
            $cover_image_path = 'cover_image_'.Str::random(10).'.'.$file->getClientOriginalExtension();
            Storage::disk('public')->put($cover_image_path,$file->get()); //EZZEL KEZDENI LEGKÖZELEBB!
        }

        $post = Post::factory()->create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'text' => $validated['text'],
            'cover_image_path' => $cover_image_path,
            'author_id' => $request->user()->id, //Auth::id() vagy: $post->author()->associate(Auth::user()) + mentés
        ]);
        isset($validated['categories']) ? $post->categories()->sync($validated['categories']) : "";
        Session::flash('post_created',$validated['title']);
        return redirect()->route('posts.show',$post);
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return view('posts.show',[
            'post' => $post,
        ]); //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return view('posts.edit',[
            'post' => $post,
            'categories' => Category::all(),
        ]); //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $this->authorize('delete',$post);
        Session::flash('post_deleted',$post['title']);
        $post->delete();
        return redirect()->route('posts.index');
    }
}
