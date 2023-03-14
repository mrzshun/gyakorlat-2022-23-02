@if ($id == 1)
1
@elseif ($id > 1)
nagyobb, mint 1
@else
kisebb, mint 1
@endif
<br/>
@unless ($id == 314)
nem 314<br/>
@endunless

@foreach ($toIterate as $key => $value)
    @if ($loop->index == 1)
        @continue
    @endif
    <p>{{$key}} => {{$value}}</p>
@endforeach
