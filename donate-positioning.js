(function($) {
  $(document).ready(function() {
    var bannerText = 'Support 25 years of building better yesterdays and the production of sites like this.';

    var buttonHtml = '<a href="#" class="donate-button"><img title="Donate to RRCHNM" src="https://rrchnm.org/donate/donate-button-red.svg"></a>';
    var bannerHtml = '<div id="support-rrchnm-banner">' + bannerText + buttonHtml + '</div>';
    var banner = $(bannerHtml);
    
    if ($('body').hasClass('admin-bar')) {
      $('#admin-bar').after(banner);
    } else if ($('#user-bar').length > 0) {
      $('#user-bar').after(banner);      
    } else {
      $('body').prepend(banner);      
    }
  });
})(jQuery);