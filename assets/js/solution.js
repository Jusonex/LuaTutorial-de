$(document).ready(function() {
  $('.solution').each(function(i, element) {
    $(element).prepend('<label>Lösung anzeigen</label>');

    $(element).find('label:first').click(function() {
      $(element).find('.content').fadeToggle();
    });
  });
});
