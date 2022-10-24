console.log("[ EmotikonyChaoZ'u działają ]");

// Wielkość emot 28x28px

setInterval(SetEmotes, 1000);
// SetPoints();

var oldText = 0;

// Dodanie przycisku z punktami
// Layout-sc-nxg1ff-0 ejhEzS chat-input__buttons-container

// function SetPoints() {
//     var x = document.getElementsByClassName("Layout-sc-nxg1ff-0 ejhEzS chat-input__buttons-container");

//     var points = document.createElement("img");

//     x.appendChild(points);
// }

// Podmienianie tekstu na emoty
function SetEmotes() {
    var content = document.getElementsByClassName('text-fragment');

    // if(content.length !== oldText) {
    //     oldText = content.length;      

        for(let item of content) {

            var semicomas = char_count(item.outerText, ':');

            if(semicomas == 2) {

                var emote = item.outerText.slice(item.outerText.indexOf(":")+1, item.outerText.length);
                emote = emote.slice(0, emote.indexOf(":"));

                var floor = char_count(item.outerText, '_');

                var streamer = "";

                if(floor == 1) {
                    streamer = item.outerText.slice(1, item.outerText.indexOf("_"));
                    console.log(streamer);
                    emote = emote.slice(emote.indexOf("_")+1, emote.length);

                    console.log( streamer + " " + emote );

                } else {
                    var url = document.URL

                    var username = url.split("/");

                    console.log(username)

                    if(username[3] == "") {
                        return;
                    }

                    streamer = username[3];

                }

                var http = new XMLHttpRequest();
                var url = 'https:///nintys.pl:50444/Emote';
                // var params = 'emote=' + emote;  
                var params = 'streamer=' + streamer.toLowerCase() + '&emote=' + emote.toLowerCase(); // - dodaj później testowanie streamaera
                http.open('POST', url, true);

                http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                http.onreadystatechange = function() {
                    if(http.readyState == 4 && http.status == 200) {
                        if(streamer != document.URL.split("/")[3]) {
                            item.innerHTML = item.innerHTML.replace(':' + streamer + "_" + emote + ":", "<" + 'img src="https://nintys.pl:50443' + http.responseText + '" height="28px"' + ">");
                        } else {
                            item.innerHTML = item.innerHTML.replace(':' + emote + ":", "<" + 'img src="https://nintys.pl:50443' + http.responseText + '" height="28px"' + ">");
                        }   
                        console.log(item.innerHTML);
                        
                    }
                }
                http.send(params);
            }

        }
    // }

}

// Jestem zbyt leniwy by to samemu pisać XDDD
function char_count(str, letter) 
{
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
        if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
}