import $ from "jquery";
import "what-input";

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// Prism.js Highlighting

var preElements = $("pre");
// Only excute on pages with pre elements
if (preElements.length) {
  preElements.addClass("line-numbers code-toolbar");
}
// Then add prism.js library
// import "./lib/prismjs/prism.min";
// require("../../../node_modules/prismjs/prism.js");
require("./lib/prismjs/prism.min");

// Mixitup - Filtering and sorting
import mixitup from "mixitup";
// Intantiate mixitup
var mixitupContainer = $(".mixitup-container");
// Only run mixitup on pages with a mixitup container
if (mixitupContainer.length) {
  mixitup(".mixitup-container");
}

$(document).foundation();
