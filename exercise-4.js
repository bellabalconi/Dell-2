//Using javascript or jQuery, please prevent the button below from loading the video when clicked:

$( "a.play" ).click(function( event ) {
    event.stopPropagation();
  });