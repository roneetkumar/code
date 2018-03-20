$(function() {
    function generateCode() {
        if ($('.qrText').val() != '') {
            // Clear Previous QR Code
            $('#qrcode').empty();
            // Generate and Output QR Code
            $('#qrcode').qrcode({
                width: 200,
                height: 200,
                text: $('.qrText').val()
            });
            $('#qrcode').css('display', 'block');
        }
    }
    $('#generate-btn').on('click', function() {
        generateCode();
    });

    $('input').keypress(function(e) {
        if (e.which == 13) {
            generateCode();
            return false; //<---- Add this line
        }
    });

    $('button#generate-btn').on('click', function() {
        $('.input-bar').addClass('load');
    });

    $('#qrcode').on('click', function() {

        var canvas = $("canvas")[0];
        var img = canvas.toDataURL("image/png");
        // window.location.href = img;
        $('.downloadCode').attr('href', img);
    });

});