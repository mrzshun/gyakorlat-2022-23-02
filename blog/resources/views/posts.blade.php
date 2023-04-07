@forelse ($posts as $post)
    <h2>{{ $post->title }}</h2>
    <cite>Author: {{ $post->author->name }}</cite>
    <p><strong>Tags</strong>
        @foreach ($post->categories as $tag)
            <span
                style="color:{{ $tag->txt_color }};background-color:{{ $tag->bg_color }}">{{ $tag->name }},&nbsp;</span>
        @endforeach
    </p>
    <p><strong>{{ $post->description }}</strong></p>
    <p>{{ $post->text }}</p>
@empty
    <h1>Nincsenek blogpostok</h1>
@endforelse