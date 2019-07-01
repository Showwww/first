window.onload = function () {
    var image = document.getElementById( "gallery" ).children[0];
    var i = 1;

    image.onclick = function () {
        if (i < 6) {
            i++;
            image.src = "img/" + i + ".jpg";
            image.style.display = "block";

            var some = document.getElementsByTagName( "p" );
            console.log( some );

            some[0].onclick = function () {
                this.className = "big pig";
                image = document.getElementById( "gallery" ).children[0];
                image.style.display = "block";
            }
        } else {
            i = 1;
            image.src = "img/" + i + ".jpg";
        }
    };


    var some = document.getElementsByTagName( "p" );
    console.log( some );

    some[0].onclick = function () {
        this.className = "big pig";
        image = document.getElementById( "gallery" ).children[0];
        image.style.display = "block";
    };
    some[1].onclick = function () {
        this.className = "big small";
        var image1 = document.getElementById( "gallery1" ).children[2];
        image1.style.display = "block";
    }
};

