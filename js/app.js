

/*=====================================================
JUST PLAIN JQUERY OVERLAY EFFECT
=======================================================*/
/*
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);
$overlay.append($caption);

$('body').append($overlay);

$('#imageGallery a' ).click(function(event) {
  event.preventDefault();

  var imageLocation =  $(this).attr('href'); //just selecting
  $image.attr('src', imageLocation);//add image

  var captionLocation = $(this).children('img').attr('alt');//selectiong
  $caption.text(captionLocation);//add text

  $overlay.show();
})

$overlay.click(function() {
$overlay.hide();

})
*/

/*=======================================================
LIGHTBOX2 (JQUERY PLUGIN)
=======================================================*/
$(document).ready(function() {

  lightbox.option({
      'resizeDuration': 250,
      'fadeDuration': 200,
      'wrapAround': true,
      'positionFromTop': 200,
        });
});  
/*=========================================================
function FOR SEARCH
===========================================================*/
//   
function search() {

    var filter =  $('input').val().toUpperCase().split(' ');
    var li = $('li');
    var a = $('a');
    for (var i = 0; i < li.length; i++) {
        a = li[i];
        var text = a.innerHTML.toUpperCase();
        for(var f = 0; f < filter.length; f++) {
            if (text.indexOf(filter[f]) > -1 ) {    
                li[i].style.display = '';
                //break; // don't need further matches
            } else {
                li[i].style.display = 'none';
                
            }
        }
    }

}
/*==========================================================================
input
============================================================================*/
// $('input').keydown(function() {
//     $('input').val('');
// })
