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
