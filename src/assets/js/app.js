import $ from 'jquery';
import whatInput from 'what-input';


window.$ = $;
// for libraries that are expecting jQuery variable instead of $ variable...
window.jQuery = $;


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


// Prism.js Highlighting
// First add line-number class to all pre elements
var preElements = $( "pre" );
if(preElements.length) {
    preElements.addClass( "line-numbers" );
}
// Then add prism.js library
import './lib/prismjs/prism.min';


// Mixitup - Filtering and sorting
import mixitup from 'mixitup';
// Intantiate mixitup
var mixitupContainer = $('.mixitup-container')
console.log(mixitupContainer)
if ( mixitupContainer.length ) {
    var mixedup = mixitup('.mixitup-container');
}



$(document).foundation();
