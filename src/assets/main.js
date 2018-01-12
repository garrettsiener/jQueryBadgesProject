$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/4141162.json',
    dataType: 'jsonp',
    success: function(response){
      $.each(response, function(){
        $('#badges').append("<div></div>").addClass('course');
        $('.course').append("<h3>"+ this.data('title') +"</h3>");
        $('.course').append("<img src="+ this.data('badge') +"></img>");
        $('.course').append("<a href=\""+ this.data('url') + "target=\"_blank\""
                            +">See Course</a>").addClass(btn);
      });
    }
  });


});
