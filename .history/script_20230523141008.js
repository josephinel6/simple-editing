$(function () {
    $("#nav-placeholder").load("https://josephinel6.github.io/simple-editing/navigation.html");
});

function viewImgSquirrel(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#squirrel')
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function downloadeditedpic() {
    document.getElementById("downloadsquirrel").download = document.getElementById("squirrel").sc
}

window.onload = function () {
    window.scrollTo(0, 0);
}