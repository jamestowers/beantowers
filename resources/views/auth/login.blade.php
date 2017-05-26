@extends('app')

@section('content')

<div class="page inner pad">

    <h1 class="huge">Login</h1>

    <form role="form" method="POST" action="{{ route('login') }}">
        {{ csrf_field() }}

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
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                </label>
            </div>

            <button type="submit" class="btn btn-primary">
                Register
            </button>

            <a class="btn btn-link" href="{{ route('password.request') }}">
                Forgot Your Password?
            </a>
        </div>

    </form>
    
</div>

@endsection
