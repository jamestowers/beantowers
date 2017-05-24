<html>

@include('head')

<body class="">

  <div id="app">
    
    @include('header')

    <div id="content">
    
        @if(isset($message) )
          <div class="alert on {{$message['type']}}">{!!$message['message']!!}</div>
        @endif

        @if (session('status'))
          <div class="alert alert-success">
              {{ session('status') }}
          </div>
        @endif

        @if (count($errors) > 0)
          <div class="alert alert-danger">
              <ul>
                  @foreach ($errors->all() as $error)
                      <li>{{ $error }}</li>
                  @endforeach
              </ul>
          </div>
        @endif

        @yield('content')

    </div> <!-- #content-->
    
    <footer>
    
    </footer>
  </div>

  <script src="/js/app.js"></script>
</body>
</html>