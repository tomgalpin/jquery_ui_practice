$(document).ready(function(){
  // Sortable
  $( "#sortable" ).sortable({
        placeholder: "ui-state-highlight"
      });
  $( "#sortable" ).disableSelection();

  // Selectable
  $( "#selectable" ).selectable();
  // Date Picker
  $( "#datepicker" ).datepicker();

  //Progress Bar
  var progressbar = $( "#progressbar" ),
  progressLabel = $( ".progress-label" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "Complete!" );
    }
  });

  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;

    progressbar.progressbar( "value", val + 1 );

    if ( val < 99 ) {
      setTimeout( progress, 100 );
    }
  }

  setTimeout( progress, 3000 );

  // Resizable
  $( "#resizable" ).resizable({
        containment: "#container"
      });

});