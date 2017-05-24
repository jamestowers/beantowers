@extends('admin')

@section('title', 'Projects')

@section('content')

    <h1 class="page-title">@yield('title')</h1>
    
    @foreach($projects as $project)
        <div class="project-tile">
            <h1>{{ $project->title}}</h1>
            <p>{{ $project->description }}</p>
        </div>
    @endforeach

@stop