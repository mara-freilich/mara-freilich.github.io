document.addEventListener("DOMContentLoaded", function (event) {

  /*
   * Display the menu items on smaller screens
   */
  var pull = document.getElementById('pull');
  var menu = document.querySelector('nav ul');

  pull.addEventListener('click', function (e) {
    menu.classList.toggle('hide');
  });

  /*
   * Make the header images move on scroll
   */
  window.addEventListener('scroll', function () {
    var x = window.pageYOffset || document.body.scrollTop;
    var main = document.getElementById("main");
    var mainStyle = main.style;

    mainStyle.backgroundPosition = '100% ' + parseInt(-x / 3) + 'px' + ', 0%, center top';
  });
});

hideShow.prototype.toggleRegion = function() {
    
    var thisObj = this;
    
    // toggle the region
    this.$region.slideToggle(this.toggleSpeed, function() {
                             
                             if ($(this).attr('aria-expanded') == 'false') { // region is collapsed
                             
                             // update the aria-expanded attribute of the region
                             $(this).attr('aria-expanded', 'true');
                             
                             // move focus to the region
                             $(this).focus();
                             
                             // update the button label
                             thisObj.$toggle.find('span').html('Hide');
                             
                             }
                             else { // region is expanded
                             
                             // update the aria-expanded attribute of the region
                             $(this).attr('aria-expanded', 'false');
                             
                             // update the button label
                             thisObj.$toggle.find('span').html('Show');
                             }
                             });
    
} // end toggleRegion()
