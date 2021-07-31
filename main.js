canvas = new fabric.Canvas("myCanvas");

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log("keypressed=" + keypressed);

    if (e.shiftKey == true && keypressed == 80) {
        console.log("shift and p key pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;

        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }

    if (e.shiftKey == true && keypressed == 77) {
        console.log("Shift and m key is pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;

        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keypressed == 37) {
        console.log("left key is pressed");
        left();
    }

    if (keypressed == 38) {
        console.log("up key is pressed");
        up();
    }

    if (keypressed == 40) {
        console.log("down key is pressed");
        down();
    }

    if (keypressed == 39) {
        console.log("right key is pressed");
        right();
    }

    if (keypressed == 67) {
        console.log("c is pressed");
        newImage("cloud.jpg");
    }

    if (keypressed == 68) {
        console.log("d is pressed");
        newImage("dark_green.png");
    }

    if (keypressed == 71) {
        console.log("g is pressed");
        newImage("ground.png");
    }

    if (keypressed == 76) {
        console.log("l is pressed");
        newImage("light_green.png");
    }

    if (keypressed == 82) {
        console.log("r is pressed");
        newImage("roof.jpg");
    }

    if (keypressed == 84) {
        console.log("t is pressed");
        newImage("trunk.jpg");
    }

    if (keypressed == 85) {
        console.log("u is pressed");
        newImage("unique.png");
    }

    if (keypressed == 87) {
        console.log("w is pressed");
        newImage("wall.jpg");
    }

    if (keypressed == 89) {
        console.log("y is pressed");
        newImage("yellow_wall.png");
    }
}

function ctrls() {
    window.alert("Press c for drawing cloud block" +
        "\n Press d for dark green block" +
        "\n Press g for ground block" +
        "\n Press l for light green block" +
        "\n Press r for roof block" +
        "\n Press t for trunk block" +
        "\n Press g for ground block" +
        "\n Press u for unique block" +
        "\n Press w for wall block" +
        "\n Press y for yellow wall block");
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_height;
        console.log("block img height=" + block_img_height);
        console.log("player_x=" + player_x + "player_y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 550) {
        player_y = player_y + block_img_height;
        console.log("block img height=" + block_img_height);
        console.log("player_x=" + player_x + "player_y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_img_width;
        console.log("block img width=" + block_img_width);
        console.log("player_x=" + player_x + "player_y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 950) {
        player_x = player_x + block_img_width;
        console.log("block img width=" + block_img_width);
        console.log("player_x=" + player_x + "player_y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}