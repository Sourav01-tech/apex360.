$(document).ready(function() {


    //variables
    $water = $('water');
    $grass = $('grass');
    $fish1 = $('fish1');
    $fish2 = $('fish2');
    $fish3 = $('fish3');


    //key press event
    $(document).on('keypress', function(e) {
        if (e.which == 119) {
            $($water).toggleClass('move');
            $(grass).toggleCLass('left');
            $($fish1).toggleClass('come');
            $($fish2).toggleClass('moment');
            $($fish3).toggleClass('float');
        }
    })

});