$(function () {
    $("#nav-placeholder").load("https://josephinel6.github.io/simple-editing/navigation.html");
});

function viewImgSquirrel(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#squirrel')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);
    }
}