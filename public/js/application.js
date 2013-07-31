$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).data('heading'));
  });

  $('.skill_teller').on('click', function() {
    console.log('skills to pay the bills');
    var url = $(location).attr('href').split('/');
    $('#skill_holder').text(url[4]);
  });
});
  // What other events do you need to bind to make the other pages work?

