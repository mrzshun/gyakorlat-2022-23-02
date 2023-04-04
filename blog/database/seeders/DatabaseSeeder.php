<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = \App\Models\User::factory(10)->create();
        $categories = \App\Models\Category::factory(10)->create();
        for($i = 0; $i<10; $i++) {
            $post = \App\Models\Post::factory()->create();
            $post->author()->associate($users->random())->save();
            $post->categories()->sync(
                $categories->random(
                    rand(1,$categories->count())
                )
        );
        }
    }
}
