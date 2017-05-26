<header class="header" role="banner">
  
    <router-link :to="{ name: 'home' }" id="back">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 640"><path d="M20.7 324.7l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-164.7 164.7h521.4c8.8 0 16 7.2 16 16s-7.2 16-16 16h-521.4l164.7 164.7c6.2 6.2 6.2 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7l-192-192c-6.2-6.2-6.2-16.4 0-22.6z"/></svg>
    </router-link>

    <div class="tagline"><h2>Digital first design & development</h2></div>

</header>

<nav id="app-nav">
    <ul role="navigation">
        <li>
            <router-link :to="{ name: 'home' }">Projects</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
        </li>
        @if( Auth::check() )
            <a href="{{ url('/logout') }}"
                onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                Logout
            </a>

            <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        @endif
    </ul>

    <router-link :to="{ name: 'home' }" id="logo"><h1>BeanTowers</h1></router-link>

    <a href="#" id="menu-toggle"><span></span></a>
</nav>