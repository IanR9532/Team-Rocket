function displayPokemon(name) {
    var 
    $.ajax({
        type: 'POST',
        url: '../php/display_pokemon.php',
        data: { type: "name", name: name },
        success: function(result) {
            console.log("success");
        }
    });
}

function savePokemon() {

}

$(document).ready(function () {
    $('.teamsListBtn').click(function() {
        var pkm = $(this).val();
        displayPokemon(pkm);
    });
});