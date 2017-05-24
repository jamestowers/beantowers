<html>

@include('head')

<body class="">

  <div 
    id="app" 
    class="group"
    :data-page="$store.state.route.name"
    >
    
    @include('header')

    <project-tiles></project-tiles>

    <router-view></router-view>
    
    <footer id="app-footer">
      <ul id="logos">
        <li><img src="/images/logos/redbull.png" alt="Red Bull logo" width="120" /></li>
        <li><img src="/images/logos/universal.png" alt="Universal Music logo" width="120" /></li>
        <li><img src="/images/logos/ck.png" alt="Calvin Klein logo" width="120" /></li>
        <li><img src="/images/logos/gaga.png" alt="Lady Gaga logo" width="120" /></li>
        <li><img src="/images/logos/glenlivet.png" alt="The Glenlivet logo" width="120" /></li>
        <li><img src="/images/logos/mia.png" alt="M.I.A. logo" width="120" /></li>
      </ul>
    </footer>
    
  </div>

  <script src="/js/app.js"></script>
</body>
</html>