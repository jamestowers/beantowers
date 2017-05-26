@extends('app')

@section('content')

    <div class="page inner pad">

        <h1 class="huge">Register</h1>
        
        <form role="form" method="POST" action="{{ route('register') }}">
            
            {{ csrf_field() }}
            
            <div class="form-row{{ $errors->has('name') ? ' has-error' : ''}}">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" value="{{ old('name') }}" required autofocus />
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-row{{ $errors->has('email') ? ' has-error' : ''}}">
                <label for="email">E-Mail Address</label>
                <input id="email" type="email" name="email" value="{{ old('email') }}" required />
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-row{{ $errors->has('password') ? ' has-error' : ''}}">
                <label for="password">Password</label>
                <input id="password" type="password"  name="password" value="{{ old('password') }}" required />
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-row">
                <label for="password-confirm">Confirm password</label>
                <input id="password-confirm" type="password" name="password_confirmation" required />
            </div>
            
            <div class="form-row">
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
            </div>
        </form>
    </div>


@endsection