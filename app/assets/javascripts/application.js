// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require social-share-button

var scroll = 0
$(document).on("scroll",function(){
  if (scroll > 0){
    console.log("disabled");
    $(".hover").addClass("disable-hover");
  }
  scroll++;
});
$(document).on("scrollstop",function(){
  console.log("enabled");
  $(".hover").removeClass("disable-hover");
});
$(document).ready(function(){
$(".ui-loader").remove();
});
