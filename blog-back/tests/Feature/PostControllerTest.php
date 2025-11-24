<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_list_posts()
    {
        Post::factory()->count(3)->create();

        $response = $this->get('/api/posts');

        $response->assertStatus(200)
            ->assertJsonCount(3, 'data');
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_create_a_post()
    {
        $data = [
            'author' => 'Isaias',
            'title' => 'Meu Post',
            'body'  => 'Conteúdo'
        ];

        $response = $this->postJson('/api/posts', $data);


        $response->assertStatus(201)
            ->assertJsonPath('data.title', 'Meu Post');

        $this->assertEquals(1, Post::count());
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function title_is_required()
    {
        $data = [
            'author' => 'Isaias',
            'title' => '',
            'body'  => 'Texto'
        ];

        $response = $this->postJson('/api/posts', $data);


        $response->assertStatus(422);
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_update_a_post()
    {
        $post = Post::factory()->create();

        $data = [
            'author' => 'Novo Autor',
            'title'  => 'Título Editado',
            'body'   => 'Texto novo'
        ];

        $response = $this->put("/api/posts/{$post->id}", $data);

        $response->assertStatus(200)
            ->assertJsonPath('data.title', 'Título Editado');
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_can_delete_a_post()
    {
        $post = Post::factory()->create();

        $response = $this->delete("/api/posts/{$post->id}");

        $response->assertStatus(204);

        $this->assertEquals(0, Post::count());
    }
}
