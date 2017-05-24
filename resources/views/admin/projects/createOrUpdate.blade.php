@extends('admin')

@section('title', $project->exists ? 'Edit '.$project->title : 'Add a new project')

@section('content')
    
    <div id="project-edit" class="pad">

        <h1 class="page-title">@yield('title')</h1>
        
        @if($project->exists) 
            <a href="{{ url('projects', $project->id) }}" role="button" class="btn btn-sm pull-right">View project</a>
            {!! Form::model(
                $project, [
                    'action' => ['ProjectController@update', $project->id], 
                    'method' => 'PUT', 
                    'files' => true,
                    'multiple'=> true
                ]) 
            !!}
        @else
            {!! Form::open([
                'action' => ['ProjectController@store'],
                'files' => true
            ]) !!}
        @endif
        
            <div class="form-row">
                {!! Form::label('title') !!}
                {!! Form::text('title', $project->title, [
                        'placeholder' => 'Project title',
                        'required' => true
                    ]) !!}
            </div>

            <div class="form-row">
                {!! Form::label('slug', 'URL slug') !!}
                {!! Form::text('slug', $project->slug, [
                        'placeholder' => 'slug'
                    ]) !!}
            </div>

            <div class="form-row">
                {!! Form::label('subtitle') !!}
                {!! Form::text('subtitle', $project->subtitle, [
                        'placeholder' => 'Project subtitle'
                    ]) !!}
            </div>

            <div class="form-row">
                {!! Form::label('description') !!}
                {!! Form::textarea('description', $project->description, [
                        'placeholder' => 'Description',
                        'required' => true
                    ]) !!}
            </div>
            
            <div class="form-row">
                {!! Form::label('header-image') !!}
                <image-upload 
                    :current-images="{{ json_encode( $project->headerImage->toArray() ) }}"
                    name="header-image"
                    :multiple="false"
                    thumbnail-size="header"
                    >
                    </image-upload>
            </div>

            <div class="form-row">
                {!! Form::label('images') !!}
                <image-upload 
                    :current-images="{{ json_encode( $project->images->toArray() ) }}"
                    thumbnail-size="header"
                    >
                    </image-upload>
            </div>

            <div class="form-row">
                {!! Form::submit('Save', [
                    'class' => 'btn btn-primary'
                ]) !!}
            </div>

        {!! Form::close() !!}

    </div>

@stop