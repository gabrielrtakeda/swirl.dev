jQuery(function( $$ ) {
    var previous_offset = 0;

    $(window).scroll(function() {
        var offset = $(this).scrollTop(),
            move = offset > previous_offset ? '+' : '-',
            move_reverse = offset > previous_offset ? '-' : '+',
            diff_offset = Math.abs(offset - previous_offset);
        if (offset >= 44) {
            $('.logo').css({
                'position': 'fixed',
                'top': 0
            });
            $('.nav').addClass('nav-no-barrauol');
        } else if (offset < 44) {
            $('.logo').css({
                'position': 'relative',
                'top': 0
            });
            $('.nav').removeClass('nav-no-barrauol');
        }
        previous_offset = offset;
        console.log(offset, move, diff_offset);
    });
});
