import './lastfm.js'


// Import our custom SCSS
import '../scss/styles.scss'

// Import our custom CSS
import '../css/styles.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import './sakura.js'

if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"ConniBug",utcoffset:"0"}))};sessionStorage.setItem("_swa","1");
