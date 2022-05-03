const btnChangeBck = document.getElementById("change_bckgnd");


btnChangeBck.addEventListener("click", changebck);

function changebck() {
    var body_sec = document.getElementById("body_part")
	//body_sec.style.backgroundImage = "url('bckgnd/bckgnd_2.png')";
    var style_bckgnd = body_sec.getAttribute("style");
    if (style_bckgnd == 'background-image: url("bckgnd/bckgnd_1.png");'|| style_bckgnd == 'background-image: url("bckgnd/bckgnd_ns/bckgnd_1.jpg");' || style_bckgnd == 'background-image: url("bckgnd/bckgnd_ns/bckgnd_2.jpg");') {
        body_sec.style.backgroundImage = "url('bckgnd/bckgnd_2.png')";
        c = 0;
    }
    if (style_bckgnd == 'background-image: url("bckgnd/bckgnd_2.png");') {
        body_sec.style.backgroundImage = "url('bckgnd/bckgnd_1.png')";
        c = 0;
    }
}