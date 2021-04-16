function verification_email() {
    var email = $('#email_add').val();
    
    if (email.length < 1) {
        alert('Error: Please enter an email.');
    } else {
        $.ajax({
            type: "POST",
            url: '/rocket/php/email.php',
            data: {email: email},
            success: function(result) {
                if (result === 'True') {
                    var hrefL = "verif_code_page.html";
                    window.location.replace(hrefL);
                } else {
                    alert('Error: Please enter a valid email.');
                }
            }, error: function(result) {
                console.log(result);
                alert('failed');
            }
        });
    }
}