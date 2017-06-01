





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-a8f5b2279861ad2b30fb4e3cab5c24a9e55f5057f35d598a792174ceeebfa850.css" integrity="sha256-qPWyJ5hhrSsw+048q1wkqeVfUFfzXVmKeSF0zu6/qFA=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-c46e612174d571094aa3e0b07abe1877159cc88b4fdb1533889ff90b133f6cf3.css" integrity="sha256-xG5hIXTVcQlKo+Cwer4YdxWcyItP2xUziJ/5CxM/bPM=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-ba9994cfcace9ccd5ab1ba2fb4099ace8b74b3daf0990ce19c59956c1f4fdfee.css" integrity="sha256-upmUz8rOnM1asbovtAmazot0s9rwmQzhnFmVbB9P3+4=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>js-sha512/sha512.js at master · emn178/js-sha512 · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/3477613?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="emn178/js-sha512" property="og:title" /><meta content="https://github.com/emn178/js-sha512" property="og:url" /><meta content="js-sha512 - A simple SHA-512, SHA-384, SHA-512/224, SHA-512/256 hash functions for JavaScript supports UTF-8 encoding." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="FCD3:2892:61E5260:93CB2EF:592FDAB2" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FCD3:2892:61E5260:93CB2EF:592FDAB2" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MDk3ZGRkMGIxZTJjNTExNmU0YTExM2QyYjhkNGE3OGUwM2I4ZWQ3ZWMwZDc2MjNmZjM2YzE3YzliMTQ1ZjlmYXx7InJlbW90ZV9hZGRyZXNzIjoiMjE3LjE5LjE4Ny4xOTgiLCJyZXF1ZXN0X2lkIjoiRkNEMzoyODkyOjYxRTUyNjA6OTNDQjJFRjo1OTJGREFCMiIsInRpbWVzdGFtcCI6MTQ5NjMwODQwOSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="b6eb94c2342d11df7d91c967b7f0da1cc97a58b6">

  <meta http-equiv="x-pjax-version" content="54cd651d227a98354cb8b7c8037f6ae0">
  

    
  <meta name="description" content="js-sha512 - A simple SHA-512, SHA-384, SHA-512/224, SHA-512/256 hash functions for JavaScript supports UTF-8 encoding.">
  <meta name="go-import" content="github.com/emn178/js-sha512 git https://github.com/emn178/js-sha512.git">

  <meta content="3477613" name="octolytics-dimension-user_id" /><meta content="emn178" name="octolytics-dimension-user_login" /><meta content="15645922" name="octolytics-dimension-repository_id" /><meta content="emn178/js-sha512" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="15645922" name="octolytics-dimension-repository_network_root_id" /><meta content="emn178/js-sha512" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />
  <link href="https://github.com/emn178/js-sha512/commits/master.atom" rel="alternate" title="Recent Commits to js-sha512:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/emn178/js-sha512/blob/master/src/sha512.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="site-nav-container">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>            <a href="/marketplace" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
              Marketplace
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/emn178/js-sha512/search" class="js-site-search-form" data-scoped-search-url="/emn178/js-sha512/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/emn178/js-sha512/blob/master/src/sha512.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Femn178%2Fjs-sha512%2Fblob%2Fmaster%2Fsrc%2Fsha512.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Femn178%2Fjs-sha512"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/emn178/js-sha512/watchers"
     aria-label="3 users are watching this repository">
    3
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Femn178%2Fjs-sha512"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/emn178/js-sha512/stargazers"
      aria-label="42 users starred this repository">
      42
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Femn178%2Fjs-sha512"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/emn178/js-sha512/network" class="social-count"
       aria-label="22 users forked this repository">
      22
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/emn178" class="url fn" rel="author">emn178</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/emn178/js-sha512" data-pjax="#js-repo-pjax-container">js-sha512</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/emn178/js-sha512" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /emn178/js-sha512" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/emn178/js-sha512/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /emn178/js-sha512/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/emn178/js-sha512/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /emn178/js-sha512/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/emn178/js-sha512/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /emn178/js-sha512/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/emn178/js-sha512/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/emn178/js-sha512/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/emn178/js-sha512/blob/8f0ff971cd7b546a2015af58d5b0aa8f7dbb4c7f/src/sha512.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c44cfad426819d1a0e184ac0fa51c17f -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/emn178/js-sha512/blob/master/src/sha512.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/emn178/js-sha512/tree/v0.3.0/src/sha512.js"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/emn178/js-sha512/tree/v0.2.2/src/sha512.js"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/emn178/js-sha512/tree/v0.2.1/src/sha512.js"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/emn178/js-sha512/tree/v0.2.0/src/sha512.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/emn178/js-sha512/tree/v0.1.3/src/sha512.js"
              data-name="v0.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.3">
                v0.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/emn178/js-sha512/tree/v0.1.2/src/sha512.js"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/emn178/js-sha512/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/emn178/js-sha512"><span>js-sha512</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/emn178/js-sha512/tree/master/src"><span>src</span></a></span><span class="separator">/</span><strong class="final-path">sha512.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/emn178/js-sha512/commit/8f0ff971cd7b546a2015af58d5b0aa8f7dbb4c7f" data-pjax>
          8f0ff97
        </a>
        <relative-time datetime="2017-01-23T03:44:27Z">Jan 23, 2017</relative-time>
      </span>
      <div>
        <img alt="@emn178" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3477613?v=3&amp;s=40" width="20" />
        <a href="/emn178" class="user-mention" rel="author">emn178</a>
          <a href="/emn178/js-sha512/commit/8f0ff971cd7b546a2015af58d5b0aa8f7dbb4c7f" class="message" data-pjax="true" title="1. Added AMD support.
2. Fixed ArrayBuffer dosen&#39;t work in Webpack.">1. Added AMD support.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@emn178" height="24" src="https://avatars3.githubusercontent.com/u/3477613?v=3&amp;s=48" width="24" />
            <a href="/emn178">emn178</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/emn178/js-sha512/raw/master/src/sha512.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/emn178/js-sha512/blame/master/src/sha512.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/emn178/js-sha512/commits/master/src/sha512.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      592 lines (508 sloc)
      <span class="file-info-divider"></span>
    23.4 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * [js-sha512]{@link https://github.com/emn178/js-sha512}</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @version 0.3.0</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @author Chen, Yi-Cyuan [emn178@gmail.com]</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @copyright Chen, Yi-Cyuan 2014-2017</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @license MIT</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*jslint bitwise: true */</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> root <span class="pl-k">=</span> <span class="pl-k">typeof</span> <span class="pl-c1">window</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">window</span> <span class="pl-k">:</span> {};</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">NODE_JS</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-smi">root</span>.<span class="pl-c1">JS_SHA512_NO_NODE_JS</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">process</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">process</span>.<span class="pl-smi">versions</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">process</span>.<span class="pl-smi">versions</span>.<span class="pl-smi">node</span>;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-c1">NODE_JS</span>) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    root <span class="pl-k">=</span> <span class="pl-c1">global</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">COMMON_JS</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-smi">root</span>.<span class="pl-c1">JS_SHA512_NO_COMMON_JS</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">AMD</span> <span class="pl-k">=</span> <span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">HEX_CHARS</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0123456789abcdef<span class="pl-pds">&#39;</span></span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">EXTRA</span> <span class="pl-k">=</span> [<span class="pl-k">-</span><span class="pl-c1">2147483648</span>, <span class="pl-c1">8388608</span>, <span class="pl-c1">32768</span>, <span class="pl-c1">128</span>];</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">SHIFT</span> <span class="pl-k">=</span> [<span class="pl-c1">24</span>, <span class="pl-c1">16</span>, <span class="pl-c1">8</span>, <span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">K</span> <span class="pl-k">=</span>[</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x428A2F98</span>, <span class="pl-c1">0xD728AE22</span>, <span class="pl-c1">0x71374491</span>, <span class="pl-c1">0x23EF65CD</span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xB5C0FBCF</span>, <span class="pl-c1">0xEC4D3B2F</span>, <span class="pl-c1">0xE9B5DBA5</span>, <span class="pl-c1">0x8189DBBC</span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x3956C25B</span>, <span class="pl-c1">0xF348B538</span>, <span class="pl-c1">0x59F111F1</span>, <span class="pl-c1">0xB605D019</span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x923F82A4</span>, <span class="pl-c1">0xAF194F9B</span>, <span class="pl-c1">0xAB1C5ED5</span>, <span class="pl-c1">0xDA6D8118</span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xD807AA98</span>, <span class="pl-c1">0xA3030242</span>, <span class="pl-c1">0x12835B01</span>, <span class="pl-c1">0x45706FBE</span>,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x243185BE</span>, <span class="pl-c1">0x4EE4B28C</span>, <span class="pl-c1">0x550C7DC3</span>, <span class="pl-c1">0xD5FFB4E2</span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x72BE5D74</span>, <span class="pl-c1">0xF27B896F</span>, <span class="pl-c1">0x80DEB1FE</span>, <span class="pl-c1">0x3B1696B1</span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x9BDC06A7</span>, <span class="pl-c1">0x25C71235</span>, <span class="pl-c1">0xC19BF174</span>, <span class="pl-c1">0xCF692694</span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xE49B69C1</span>, <span class="pl-c1">0x9EF14AD2</span>, <span class="pl-c1">0xEFBE4786</span>, <span class="pl-c1">0x384F25E3</span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x0FC19DC6</span>, <span class="pl-c1">0x8B8CD5B5</span>, <span class="pl-c1">0x240CA1CC</span>, <span class="pl-c1">0x77AC9C65</span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x2DE92C6F</span>, <span class="pl-c1">0x592B0275</span>, <span class="pl-c1">0x4A7484AA</span>, <span class="pl-c1">0x6EA6E483</span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x5CB0A9DC</span>, <span class="pl-c1">0xBD41FBD4</span>, <span class="pl-c1">0x76F988DA</span>, <span class="pl-c1">0x831153B5</span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x983E5152</span>, <span class="pl-c1">0xEE66DFAB</span>, <span class="pl-c1">0xA831C66D</span>, <span class="pl-c1">0x2DB43210</span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xB00327C8</span>, <span class="pl-c1">0x98FB213F</span>, <span class="pl-c1">0xBF597FC7</span>, <span class="pl-c1">0xBEEF0EE4</span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xC6E00BF3</span>, <span class="pl-c1">0x3DA88FC2</span>, <span class="pl-c1">0xD5A79147</span>, <span class="pl-c1">0x930AA725</span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x06CA6351</span>, <span class="pl-c1">0xE003826F</span>, <span class="pl-c1">0x14292967</span>, <span class="pl-c1">0x0A0E6E70</span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x27B70A85</span>, <span class="pl-c1">0x46D22FFC</span>, <span class="pl-c1">0x2E1B2138</span>, <span class="pl-c1">0x5C26C926</span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x4D2C6DFC</span>, <span class="pl-c1">0x5AC42AED</span>, <span class="pl-c1">0x53380D13</span>, <span class="pl-c1">0x9D95B3DF</span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x650A7354</span>, <span class="pl-c1">0x8BAF63DE</span>, <span class="pl-c1">0x766A0ABB</span>, <span class="pl-c1">0x3C77B2A8</span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x81C2C92E</span>, <span class="pl-c1">0x47EDAEE6</span>, <span class="pl-c1">0x92722C85</span>, <span class="pl-c1">0x1482353B</span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xA2BFE8A1</span>, <span class="pl-c1">0x4CF10364</span>, <span class="pl-c1">0xA81A664B</span>, <span class="pl-c1">0xBC423001</span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xC24B8B70</span>, <span class="pl-c1">0xD0F89791</span>, <span class="pl-c1">0xC76C51A3</span>, <span class="pl-c1">0x0654BE30</span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xD192E819</span>, <span class="pl-c1">0xD6EF5218</span>, <span class="pl-c1">0xD6990624</span>, <span class="pl-c1">0x5565A910</span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xF40E3585</span>, <span class="pl-c1">0x5771202A</span>, <span class="pl-c1">0x106AA070</span>, <span class="pl-c1">0x32BBD1B8</span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x19A4C116</span>, <span class="pl-c1">0xB8D2D0C8</span>, <span class="pl-c1">0x1E376C08</span>, <span class="pl-c1">0x5141AB53</span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x2748774C</span>, <span class="pl-c1">0xDF8EEB99</span>, <span class="pl-c1">0x34B0BCB5</span>, <span class="pl-c1">0xE19B48A8</span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x391C0CB3</span>, <span class="pl-c1">0xC5C95A63</span>, <span class="pl-c1">0x4ED8AA4A</span>, <span class="pl-c1">0xE3418ACB</span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x5B9CCA4F</span>, <span class="pl-c1">0x7763E373</span>, <span class="pl-c1">0x682E6FF3</span>, <span class="pl-c1">0xD6B2B8A3</span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x748F82EE</span>, <span class="pl-c1">0x5DEFB2FC</span>, <span class="pl-c1">0x78A5636F</span>, <span class="pl-c1">0x43172F60</span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x84C87814</span>, <span class="pl-c1">0xA1F0AB72</span>, <span class="pl-c1">0x8CC70208</span>, <span class="pl-c1">0x1A6439EC</span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x90BEFFFA</span>, <span class="pl-c1">0x23631E28</span>, <span class="pl-c1">0xA4506CEB</span>, <span class="pl-c1">0xDE82BDE9</span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xBEF9A3F7</span>, <span class="pl-c1">0xB2C67915</span>, <span class="pl-c1">0xC67178F2</span>, <span class="pl-c1">0xE372532B</span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xCA273ECE</span>, <span class="pl-c1">0xEA26619C</span>, <span class="pl-c1">0xD186B8C7</span>, <span class="pl-c1">0x21C0C207</span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0xEADA7DD6</span>, <span class="pl-c1">0xCDE0EB1E</span>, <span class="pl-c1">0xF57D4F7F</span>, <span class="pl-c1">0xEE6ED178</span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x06F067AA</span>, <span class="pl-c1">0x72176FBA</span>, <span class="pl-c1">0x0A637DC5</span>, <span class="pl-c1">0xA2C898A6</span>,</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x113F9804</span>, <span class="pl-c1">0xBEF90DAE</span>, <span class="pl-c1">0x1B710B35</span>, <span class="pl-c1">0x131C471B</span>,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x28DB77F5</span>, <span class="pl-c1">0x23047D84</span>, <span class="pl-c1">0x32CAAB7B</span>, <span class="pl-c1">0x40C72493</span>,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x3C9EBE0A</span>, <span class="pl-c1">0x15C9BEBC</span>, <span class="pl-c1">0x431D67C4</span>, <span class="pl-c1">0x9C100D4C</span>,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x4CC5D4BE</span>, <span class="pl-c1">0xCB3E42B6</span>, <span class="pl-c1">0x597F299C</span>, <span class="pl-c1">0xFC657E2A</span>,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0x5FCB6FAB</span>, <span class="pl-c1">0x3AD6FAEC</span>, <span class="pl-c1">0x6C44198C</span>, <span class="pl-c1">0x4A475817</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">  ];</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> blocks <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">sha384</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">message</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">sha512</span>(message, <span class="pl-c1">384</span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">sha512_256</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">message</span>) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">sha512</span>(message, <span class="pl-c1">256</span>);</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">sha512_224</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">message</span>) {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">sha512</span>(message, <span class="pl-c1">224</span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">sha512</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">message</span>, <span class="pl-smi">bits</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> h0h, h0l, h1h, h1l, h2h, h2l, h3h, h3l, </td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      h4h, h4l, h5h, h5l, h6h, h6l, h7h, h7l, block, code, end <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">      i, j, index <span class="pl-k">=</span> <span class="pl-c1">0</span>, start <span class="pl-k">=</span> <span class="pl-c1">0</span>, bytes <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">message</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      s0h, s0l, s1h, s1l, c1, c2, c3, c4, </td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      abh, abl, dah, dal, cdh, cdl, bch, bcl,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      majh, majl, t1h, t1l, t2h, t2l, chh, chl;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (bits <span class="pl-k">==</span> <span class="pl-c1">384</span>) {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">      h0h <span class="pl-k">=</span> <span class="pl-c1">0xCBBB9D5D</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      h0l <span class="pl-k">=</span> <span class="pl-c1">0xC1059ED8</span>;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">      h1h <span class="pl-k">=</span> <span class="pl-c1">0x629A292A</span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">      h1l <span class="pl-k">=</span> <span class="pl-c1">0x367CD507</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">      h2h <span class="pl-k">=</span> <span class="pl-c1">0x9159015A</span>;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">      h2l <span class="pl-k">=</span> <span class="pl-c1">0x3070DD17</span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">      h3h <span class="pl-k">=</span> <span class="pl-c1">0x152FECD8</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">      h3l <span class="pl-k">=</span> <span class="pl-c1">0xF70E5939</span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      h4h <span class="pl-k">=</span> <span class="pl-c1">0x67332667</span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      h4l <span class="pl-k">=</span> <span class="pl-c1">0xFFC00B31</span>;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      h5h <span class="pl-k">=</span> <span class="pl-c1">0x8EB44A87</span>;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">      h5l <span class="pl-k">=</span> <span class="pl-c1">0x68581511</span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">      h6h <span class="pl-k">=</span> <span class="pl-c1">0xDB0C2E0D</span>;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">      h6l <span class="pl-k">=</span> <span class="pl-c1">0x64F98FA7</span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">      h7h <span class="pl-k">=</span> <span class="pl-c1">0x47B5481D</span>;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">      h7l <span class="pl-k">=</span> <span class="pl-c1">0xBEFA4FA4</span>;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (bits <span class="pl-k">==</span> <span class="pl-c1">256</span>) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">      h0h <span class="pl-k">=</span> <span class="pl-c1">0x22312194</span>;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">      h0l <span class="pl-k">=</span> <span class="pl-c1">0xFC2BF72C</span>;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">      h1h <span class="pl-k">=</span> <span class="pl-c1">0x9F555FA3</span>;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">      h1l <span class="pl-k">=</span> <span class="pl-c1">0xC84C64C2</span>;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      h2h <span class="pl-k">=</span> <span class="pl-c1">0x2393B86B</span>;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">      h2l <span class="pl-k">=</span> <span class="pl-c1">0x6F53B151</span>;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">      h3h <span class="pl-k">=</span> <span class="pl-c1">0x96387719</span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">      h3l <span class="pl-k">=</span> <span class="pl-c1">0x5940EABD</span>;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">      h4h <span class="pl-k">=</span> <span class="pl-c1">0x96283EE2</span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">      h4l <span class="pl-k">=</span> <span class="pl-c1">0xA88EFFE3</span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">      h5h <span class="pl-k">=</span> <span class="pl-c1">0xBE5E1E25</span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">      h5l <span class="pl-k">=</span> <span class="pl-c1">0x53863992</span>;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">      h6h <span class="pl-k">=</span> <span class="pl-c1">0x2B0199FC</span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">      h6l <span class="pl-k">=</span> <span class="pl-c1">0x2C85B8AA</span>;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">      h7h <span class="pl-k">=</span> <span class="pl-c1">0x0EB72DDC</span>;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">      h7l <span class="pl-k">=</span> <span class="pl-c1">0x81C52CA2</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (bits <span class="pl-k">==</span> <span class="pl-c1">224</span>) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">      h0h <span class="pl-k">=</span> <span class="pl-c1">0x8C3D37C8</span>;</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">      h0l <span class="pl-k">=</span> <span class="pl-c1">0x19544DA2</span>;</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">      h1h <span class="pl-k">=</span> <span class="pl-c1">0x73E19966</span>;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">      h1l <span class="pl-k">=</span> <span class="pl-c1">0x89DCD4D6</span>;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">      h2h <span class="pl-k">=</span> <span class="pl-c1">0x1DFAB7AE</span>;</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">      h2l <span class="pl-k">=</span> <span class="pl-c1">0x32FF9C82</span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">      h3h <span class="pl-k">=</span> <span class="pl-c1">0x679DD514</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">      h3l <span class="pl-k">=</span> <span class="pl-c1">0x582F9FCF</span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">      h4h <span class="pl-k">=</span> <span class="pl-c1">0x0F6D2B69</span>;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">      h4l <span class="pl-k">=</span> <span class="pl-c1">0x7BD44DA8</span>;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">      h5h <span class="pl-k">=</span> <span class="pl-c1">0x77E36F73</span>;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">      h5l <span class="pl-k">=</span> <span class="pl-c1">0x04C48942</span>;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">      h6h <span class="pl-k">=</span> <span class="pl-c1">0x3F9D85A8</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">      h6l <span class="pl-k">=</span> <span class="pl-c1">0x6A1D36C8</span>;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">      h7h <span class="pl-k">=</span> <span class="pl-c1">0x1112E6AD</span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">      h7l <span class="pl-k">=</span> <span class="pl-c1">0x91D692A1</span>;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> { <span class="pl-c"><span class="pl-c">//</span> 512</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">      h0h <span class="pl-k">=</span> <span class="pl-c1">0x6A09E667</span>;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">      h0l <span class="pl-k">=</span> <span class="pl-c1">0xF3BCC908</span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      h1h <span class="pl-k">=</span> <span class="pl-c1">0xBB67AE85</span>;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">      h1l <span class="pl-k">=</span> <span class="pl-c1">0x84CAA73B</span>;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">      h2h <span class="pl-k">=</span> <span class="pl-c1">0x3C6EF372</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">      h2l <span class="pl-k">=</span> <span class="pl-c1">0xFE94F82B</span>;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">      h3h <span class="pl-k">=</span> <span class="pl-c1">0xA54FF53A</span>;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">      h3l <span class="pl-k">=</span> <span class="pl-c1">0x5F1D36F1</span>;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">      h4h <span class="pl-k">=</span> <span class="pl-c1">0x510E527F</span>;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">      h4l <span class="pl-k">=</span> <span class="pl-c1">0xADE682D1</span>;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">      h5h <span class="pl-k">=</span> <span class="pl-c1">0x9B05688C</span>;</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">      h5l <span class="pl-k">=</span> <span class="pl-c1">0x2B3E6C1F</span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">      h6h <span class="pl-k">=</span> <span class="pl-c1">0x1F83D9AB</span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      h6l <span class="pl-k">=</span> <span class="pl-c1">0xFB41BD6B</span>;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">      h7h <span class="pl-k">=</span> <span class="pl-c1">0x5BE0CD19</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">      h7l <span class="pl-k">=</span> <span class="pl-c1">0x137E2179</span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">      bits <span class="pl-k">=</span> <span class="pl-c1">512</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    block <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">0</span>] <span class="pl-k">=</span> block;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">1</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">2</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">3</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">4</span>] <span class="pl-k">=</span> </td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">5</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">6</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">7</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">8</span>] <span class="pl-k">=</span> </td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">9</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">10</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">11</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">12</span>] <span class="pl-k">=</span> </td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">13</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">14</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">15</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">16</span>] <span class="pl-k">=</span> </td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">17</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">18</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">19</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">20</span>] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">21</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">22</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">23</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">24</span>] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">25</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">26</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">27</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">28</span>] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      blocks[<span class="pl-c1">29</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">30</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">31</span>] <span class="pl-k">=</span> blocks[<span class="pl-c1">32</span>] <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (i <span class="pl-k">=</span> start; index <span class="pl-k">&lt;</span> length <span class="pl-k">&amp;&amp;</span> i <span class="pl-k">&lt;</span> <span class="pl-c1">128</span>; <span class="pl-k">++</span>index) {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">=</span> <span class="pl-smi">message</span>.<span class="pl-c1">charCodeAt</span>(index);</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (code <span class="pl-k">&lt;</span> <span class="pl-c1">0x80</span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> code <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (code <span class="pl-k">&lt;</span> <span class="pl-c1">0x800</span>) {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0xc0</span> <span class="pl-k">|</span> (code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">6</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0x80</span> <span class="pl-k">|</span> (code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (code <span class="pl-k">&lt;</span> <span class="pl-c1">0xd800</span> <span class="pl-k">||</span> code <span class="pl-k">&gt;=</span> <span class="pl-c1">0xe000</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0xe0</span> <span class="pl-k">|</span> (code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">6</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0x80</span> <span class="pl-k">|</span> (code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">          code <span class="pl-k">=</span> <span class="pl-c1">0x10000</span> <span class="pl-k">+</span> (((code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3ff</span>) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">10</span>) <span class="pl-k">|</span> (<span class="pl-smi">message</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-k">++</span>index) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3ff</span>));</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0xf0</span> <span class="pl-k">|</span> (code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((code <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">6</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">          blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> (<span class="pl-c1">0x80</span> <span class="pl-k">|</span> (code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3f</span>)) <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">SHIFT</span>[i<span class="pl-k">++</span> <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">      bytes <span class="pl-k">+=</span> i <span class="pl-k">-</span> start;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">      start <span class="pl-k">=</span> i <span class="pl-k">-</span> <span class="pl-c1">128</span>;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (index <span class="pl-k">==</span> length) {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        blocks[i <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">2</span>] <span class="pl-k">|=</span> <span class="pl-c1">EXTRA</span>[i <span class="pl-k">&amp;</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">++</span>index;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">      block <span class="pl-k">=</span> blocks[<span class="pl-c1">32</span>];</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (index <span class="pl-k">&gt;</span> length <span class="pl-k">&amp;&amp;</span> i <span class="pl-k">&lt;</span> <span class="pl-c1">112</span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        blocks[<span class="pl-c1">31</span>] <span class="pl-k">=</span> bytes <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        end <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (j <span class="pl-k">=</span> <span class="pl-c1">32</span>; j <span class="pl-k">&lt;</span> <span class="pl-c1">160</span>; j <span class="pl-k">+=</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">30</span>];</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">29</span>];</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        s0h <span class="pl-k">=</span> ((t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">1</span>) <span class="pl-k">|</span> (t1l <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">31</span>)) <span class="pl-k">^</span> ((t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">|</span> (t1l <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">24</span>)) <span class="pl-k">^</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        s0l <span class="pl-k">=</span> ((t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">1</span>) <span class="pl-k">|</span> (t1h <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">31</span>)) <span class="pl-k">^</span> ((t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">|</span> (t1h <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">24</span>)) <span class="pl-k">^</span> ((t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> t1h <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">4</span>];</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        s1h <span class="pl-k">=</span> ((t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">19</span>) <span class="pl-k">|</span> (t1l <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">13</span>)) <span class="pl-k">^</span> ((t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">29</span>) <span class="pl-k">|</span> (t1h <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">3</span>)) <span class="pl-k">^</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        s1l <span class="pl-k">=</span> ((t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">19</span>) <span class="pl-k">|</span> (t1h <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">13</span>)) <span class="pl-k">^</span> ((t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">29</span>) <span class="pl-k">|</span> (t1l <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">3</span>)) <span class="pl-k">^</span> ((t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>) <span class="pl-k">|</span> t1h <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">26</span>);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">32</span>];</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">31</span>];</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">14</span>];</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> blocks[j <span class="pl-k">-</span> <span class="pl-c1">13</span>];</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        blocks[j] <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">        blocks[j <span class="pl-k">+</span> <span class="pl-c1">1</span>] <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> ah <span class="pl-k">=</span> h0h, al <span class="pl-k">=</span> h0l, bh <span class="pl-k">=</span> h1h, bl <span class="pl-k">=</span> h1l, ch <span class="pl-k">=</span> h2h, cl <span class="pl-k">=</span> h2l, dh <span class="pl-k">=</span> h3h, dl <span class="pl-k">=</span> h3l, eh <span class="pl-k">=</span> h4h, el <span class="pl-k">=</span> h4l, fh <span class="pl-k">=</span> h5h, fl <span class="pl-k">=</span> h5l, gh <span class="pl-k">=</span> h6h, gl <span class="pl-k">=</span> h6l, hh <span class="pl-k">=</span> h7h, hl <span class="pl-k">=</span> h7l;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">      bch <span class="pl-k">=</span> bh <span class="pl-k">&amp;</span> ch;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">      bcl <span class="pl-k">=</span> bl <span class="pl-k">&amp;</span> cl;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> <span class="pl-c1">160</span>; j <span class="pl-k">+=</span> <span class="pl-c1">8</span>) {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">        s0h <span class="pl-k">=</span> ((ah <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (al <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((al <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (ah <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((al <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (ah <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        s0l <span class="pl-k">=</span> ((al <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (ah <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((ah <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (al <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((ah <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (al <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        s1h <span class="pl-k">=</span> ((eh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (el <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((eh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (el <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((el <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (eh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        s1l <span class="pl-k">=</span> ((el <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (eh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((el <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (eh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((eh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (el <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        abh <span class="pl-k">=</span> ah <span class="pl-k">&amp;</span> bh;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        abl <span class="pl-k">=</span> al <span class="pl-k">&amp;</span> bl;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        majh <span class="pl-k">=</span> abh <span class="pl-k">^</span> (ah <span class="pl-k">&amp;</span> ch) <span class="pl-k">^</span> bch;</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        majl <span class="pl-k">=</span> abl <span class="pl-k">^</span> (al <span class="pl-k">&amp;</span> cl) <span class="pl-k">^</span> bcl;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        chh <span class="pl-k">=</span> (eh <span class="pl-k">&amp;</span> fh) <span class="pl-k">^</span> (<span class="pl-k">~</span>eh <span class="pl-k">&amp;</span> gh);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        chl <span class="pl-k">=</span> (el <span class="pl-k">&amp;</span> fl) <span class="pl-k">^</span> (<span class="pl-k">~</span>el <span class="pl-k">&amp;</span> gl);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j];</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> <span class="pl-c1">K</span>[j];</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (hl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (hl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (hh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (hh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (majl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (majl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (majh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (majh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (dl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (dl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (dh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (dh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        hh <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">        hl <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">        dh <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        dl <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">        s0h <span class="pl-k">=</span> ((dh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (dl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((dl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (dh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((dl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (dh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">        s0l <span class="pl-k">=</span> ((dl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (dh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((dh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (dl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((dh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (dl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">        s1h <span class="pl-k">=</span> ((hh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (hl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((hh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (hl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((hl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (hh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">        s1l <span class="pl-k">=</span> ((hl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (hh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((hl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (hh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((hh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (hl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">        dah <span class="pl-k">=</span> dh <span class="pl-k">&amp;</span> ah;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">        dal <span class="pl-k">=</span> dl <span class="pl-k">&amp;</span> al;</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">        majh <span class="pl-k">=</span> dah <span class="pl-k">^</span> (dh <span class="pl-k">&amp;</span> bh) <span class="pl-k">^</span> abh;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">        majl <span class="pl-k">=</span> dal <span class="pl-k">^</span> (dl <span class="pl-k">&amp;</span> bl) <span class="pl-k">^</span> abl;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">        chh <span class="pl-k">=</span> (hh <span class="pl-k">&amp;</span> eh) <span class="pl-k">^</span> (<span class="pl-k">~</span>hh <span class="pl-k">&amp;</span> fh);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">        chl <span class="pl-k">=</span> (hl <span class="pl-k">&amp;</span> el) <span class="pl-k">^</span> (<span class="pl-k">~</span>hl <span class="pl-k">&amp;</span> fl);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (gl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (gl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (gh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (gh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (majl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (majl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (majh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (majh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (cl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (cl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (ch <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (ch <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">        gh <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">        gl <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        ch <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">        cl <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">        s0h <span class="pl-k">=</span> ((ch <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (cl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((cl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (ch <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((cl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (ch <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">        s0l <span class="pl-k">=</span> ((cl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (ch <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((ch <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (cl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((ch <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (cl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">        s1h <span class="pl-k">=</span> ((gh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (gl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((gh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (gl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((gl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (gh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">        s1l <span class="pl-k">=</span> ((gl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (gh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((gl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (gh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((gh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (gl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">        cdh <span class="pl-k">=</span> ch <span class="pl-k">&amp;</span> dh;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">        cdl <span class="pl-k">=</span> cl <span class="pl-k">&amp;</span> dl;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">        majh <span class="pl-k">=</span> cdh <span class="pl-k">^</span> (ch <span class="pl-k">&amp;</span> ah) <span class="pl-k">^</span> dah;</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">        majl <span class="pl-k">=</span> cdl <span class="pl-k">^</span> (cl <span class="pl-k">&amp;</span> al) <span class="pl-k">^</span> dal;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">        chh <span class="pl-k">=</span> (gh <span class="pl-k">&amp;</span> hh) <span class="pl-k">^</span> (<span class="pl-k">~</span>gh <span class="pl-k">&amp;</span> eh);</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        chl <span class="pl-k">=</span> (gl <span class="pl-k">&amp;</span> hl) <span class="pl-k">^</span> (<span class="pl-k">~</span>gl <span class="pl-k">&amp;</span> el);</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">4</span>];</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">5</span>];</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">4</span>];</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">5</span>];</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (fl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (fl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (fh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (fh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (majl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (majl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (majh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (majh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (bl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (bl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (bh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (bh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">        fh <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">        fl <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        bh <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">        bl <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">        s0h <span class="pl-k">=</span> ((bh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (bl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((bl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (bh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((bl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (bh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">        s0l <span class="pl-k">=</span> ((bl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">|</span> (bh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">4</span>)) <span class="pl-k">^</span> ((bh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">2</span>) <span class="pl-k">|</span> (bl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">30</span>)) <span class="pl-k">^</span> ((bh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">7</span>) <span class="pl-k">|</span> (bl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">25</span>));</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">        s1h <span class="pl-k">=</span> ((fh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (fl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((fh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (fl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((fl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (fh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">        s1l <span class="pl-k">=</span> ((fl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">14</span>) <span class="pl-k">|</span> (fh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">18</span>)) <span class="pl-k">^</span> ((fl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">|</span> (fh <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">14</span>)) <span class="pl-k">^</span> ((fh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">9</span>) <span class="pl-k">|</span> (fl <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">23</span>));</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">        bch <span class="pl-k">=</span> bh <span class="pl-k">&amp;</span> ch;</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">        bcl <span class="pl-k">=</span> bl <span class="pl-k">&amp;</span> cl;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">        majh <span class="pl-k">=</span> bch <span class="pl-k">^</span> (bh <span class="pl-k">&amp;</span> dh) <span class="pl-k">^</span> cdh;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">        majl <span class="pl-k">=</span> bcl <span class="pl-k">^</span> (bl <span class="pl-k">&amp;</span> dl) <span class="pl-k">^</span> cdl;</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">        chh <span class="pl-k">=</span> (fh <span class="pl-k">&amp;</span> gh) <span class="pl-k">^</span> (<span class="pl-k">~</span>fh <span class="pl-k">&amp;</span> hh);</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">        chl <span class="pl-k">=</span> (fl <span class="pl-k">&amp;</span> gl) <span class="pl-k">^</span> (<span class="pl-k">~</span>fl <span class="pl-k">&amp;</span> hl);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">6</span>];</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> blocks[j <span class="pl-k">+</span> <span class="pl-c1">7</span>];</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">6</span>];</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> <span class="pl-c1">K</span>[j <span class="pl-k">+</span> <span class="pl-c1">7</span>];</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (el <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (el <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (eh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (chh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (eh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">        t1h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">        t1l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (majl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (majl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (majh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (majh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (s0h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">        t2h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">        t2l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (al <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (al <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (ah <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (ah <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">        eh <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">        el <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">        c1 <span class="pl-k">=</span> (t2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">        c2 <span class="pl-k">=</span> (t2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">        c3 <span class="pl-k">=</span> (t2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">        c4 <span class="pl-k">=</span> (t2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (t1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">        ah <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        al <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h0l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (al <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h0l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (al <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h0h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (ah <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h0h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (ah <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">      h0h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">      h0l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h1l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (bl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h1l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (bl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h1h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (bh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h1h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (bh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">      h1h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">      h1l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h2l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (cl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h2l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (cl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h2h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (ch <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h2h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (ch <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">      h2h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">      h2l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h3l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (dl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h3l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (dl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h3h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (dh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h3h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (dh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">      h3h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">      h3l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h4l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (el <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h4l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (el <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h4h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (eh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h4h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (eh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">      h4h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">      h4l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h5l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (fl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h5l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (fl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h5h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (fh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h5h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (fh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">      h5h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">      h5l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h6l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (gl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h6l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (gl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h6h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (gh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h6h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (gh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">      h6h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">      h6l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">      c1 <span class="pl-k">=</span> (h7l <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (hl <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">      c2 <span class="pl-k">=</span> (h7l <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (hl <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c1 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">      c3 <span class="pl-k">=</span> (h7h <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (hh <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>) <span class="pl-k">+</span> (c2 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">      c4 <span class="pl-k">=</span> (h7h <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (hh <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">+</span> (c3 <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">      h7h <span class="pl-k">=</span> (c4 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c3 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">      h7l <span class="pl-k">=</span> (c2 <span class="pl-k">&lt;&lt;</span> <span class="pl-c1">16</span>) <span class="pl-k">|</span> (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">0xFFFF</span>);</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">while</span> (<span class="pl-k">!</span>end);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> hex <span class="pl-k">=</span> <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h0h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h0l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h0l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h1h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h1l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h1l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h2h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h2l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h2l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">HEX_CHARS</span>[(h3h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h3h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>];</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (bits <span class="pl-k">&gt;=</span> <span class="pl-c1">256</span>) {</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">      hex <span class="pl-k">+=</span> <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h3l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h3l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>];</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (bits <span class="pl-k">&gt;=</span> <span class="pl-c1">384</span>) {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">      hex <span class="pl-k">+=</span> <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h4h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h4l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h4l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h5h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h5l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h5l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>];</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (bits <span class="pl-k">==</span> <span class="pl-c1">512</span>) {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">      hex <span class="pl-k">+=</span> <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h6h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h6l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h6l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7h <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h7h <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">28</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">24</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">20</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">HEX_CHARS</span>[(h7l <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">4</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>] <span class="pl-k">+</span> <span class="pl-c1">HEX_CHARS</span>[h7l <span class="pl-k">&amp;</span> <span class="pl-c1">0x0F</span>];</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> hex;</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">exports</span> <span class="pl-k">=</span> sha512;</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">exports</span>.<span class="pl-smi">sha512</span> <span class="pl-k">=</span> sha512;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">exports</span>.<span class="pl-smi">sha384</span> <span class="pl-k">=</span> sha384;</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">exports</span>.<span class="pl-smi">sha512_256</span> <span class="pl-k">=</span> sha512_256;</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">exports</span>.<span class="pl-smi">sha512_224</span> <span class="pl-k">=</span> sha512_224;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-c1">COMMON_JS</span>) {</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">exports</span>;</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">root</span>.<span class="pl-smi">sha512</span> <span class="pl-k">=</span> sha512;</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">root</span>.<span class="pl-smi">sha384</span> <span class="pl-k">=</span> sha384;</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">root</span>.<span class="pl-smi">sha512_256</span> <span class="pl-k">=</span> sha512_256;</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">root</span>.<span class="pl-smi">sha512_224</span> <span class="pl-k">=</span> sha512_224;</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">AMD</span>) {</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">define</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">exports</span>;</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.22613s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-YR5yZsGniaV+fJRYGk0cFCrPKjyIlL/sjg73oPdyeIc=" src="https://assets-cdn.github.com/assets/frameworks-611e7266c1a789a57e7c94581a4d1c142acf2a3c8894bfec8e0ef7a0f7727887.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-U6TF7czNO1S+W5oUKgn3k2kC95Pc4h/O1/W6xrzb0Kw=" src="https://assets-cdn.github.com/assets/github-53a4c5edcccd3b54be5b9a142a09f7936902f793dce21fced7f5bac6bcdbd0ac.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

