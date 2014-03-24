Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var distortion = [

/* just some stuff for the curious */
["test " , ["cry for help ", "silent warning "]],
[" test" , [" cry for help ", " silent warning"]],
["installation", ["neuro programming"]],
["name", ["god"]],

/* feelings, thoughts */
["i thought", ["i somehow was sure"]],
["lucky", ["gifted"]],
["scary", ["fascinating"]],
[" heard", [" heard in the back of my head"]],
[" smelled", [" tasted"]],
["beautiful", ["destructive"]],
["wonderful", ["frightening"]],
["idea", ["child"]],
["meaningful", ["odd"]],
["happy", ["confused"]],

/* playing */
["pet", ["toy"]],
["cats", ["children"]],
["cat", ["child"]],
[" played with", [" pretended to be"]],
[" teddy", [" wild beast"]],
[" stuffed animal", [" close friend"]],
[" plush toy", [" close friend"]],
[" soft toy", [" close friend"]],
[" stuffed bear", [" wild beast"]],
[" sandbox", [" meeting room", " the bedroom"]],
[" sandcastle", [" a living", " a beautiful white dress"]],
[" shovel", [" gun", " sword"]],

/* school, institutions */
["kindergarden", ["the fair", "the screaming seething water", "the pinball machine"]],
["school", ["the place where everyone was silent", "the factory"]],
["the teacher", ["an uncanny voice", "a speaking eye", "a singing shadow"]],
["the principal", ["the all-knowing presence", "the locksmith", "the military adviser"]],
[" lessons", [" exam"]],

/* appearance, body feelings, illness */
["the doctor", ["a whispering snake", "a wise owl"]],
[" meds", [" bitter ice cubes", " numbing soup"]],
[" medicine", [" bitter ice cubes", " numbing soup"]],
[" sick", [" dying"]],
[" stomach", [" head"]],
["tooth", ["naughty word"]],
["teeth", ["ears"]],
[" hair", [" tails around my head"]],

/* family */
["my dad", ["the local police officer", "the judge", "a priest", " a soldier"]],
["my father", ["the local police officer", "the judge", "a priest", "a soldier"]],
["my mom", ["an elegant spider", "a hare", "a nun"]],
["my mother", ["an elegant spider", "a hare", "a nun"]],
["my grandfather", ["a wise owl", "a taleteller"]],
["my granddad", ["a wise owl", "a taleteller"]],
["my grandma", ["a wrinkled bear", "a scenting smiling tulip"]],
["from work", ["from the court room", "from the cemetery", "from the strange room"]],

/* authority */
[" confessed to", [" gave my eye to"]],
[" for permission", [" for a permit written on a tiny piece of paper"]],
["s permission", ["s graceful eyes"]],
["grounded", ["imprisoned and tortured", "abducted"]],

/* eating and sleeping */
[" refrigerator", [" grave"]],
[" fridge", [" grave"]],
[" dinner", [" the big orgy"]],
[" crib", [" womb"]],
[" asleep", [" into a warm dark pit"]],

/* entertainment */
[" tv", [" the image hole"]],
[" TV", [" the image hole"]],
[" cinema", [" image hole"]],

/* special occasions, holidays */
[" gift", [" mysterious package", "my parent's life savings"]],
[" candle", [" gushing fire"]],
[" cake", [" warm document", " potter's wheel"]],

/* outside world */
[" store", [" kitchen"]],
["street", ["secluded path"]],
[" church", [" the frightening echoing halls", "a haunted house", " a cold warehouse"]],
["bought", ["stole", "produced"]],

/* objects of desire */
["sweets", ["raw meat", "colorful raindrops"]],
["popsicle", ["sticky material"]],
["ice cream", ["lactating eyes"]],
["balloon", ["naked bird"]],

];

var recognition = new webkitSpeechRecognition();

recognition.onresult = function(event) {

    $("#prompt").fadeOut(1000); 

    for (var i = event.resultIndex; i < event.results.length; ++i) {

      if (event.results[i].isFinal) {
       var transcript = event.results[i][0].transcript;
        for (var i = 0; i < distortion.length; i++){
           original = distortion[i][0];
           distorted  = distortion[i][1].randomElement();
           transcript = transcript.replace(original, '<span class="distorted">' + distorted + '</span>');
        }
       $('html, body').animate({scrollTop: $(document).height() }, 2000);
       $("#narrative").append( transcript + ". " );

      }

    }

}

recognition.onend = function(){

    $("#prompt").fadeIn(1000)
    $("#narrative").append("<br>");
    $('html, body').animate({scrollTop: $(document).height() }, 2000);
    recognition.start();

}

recognition.lang = "en-US";
recognition.continuous = true;
recognition.start();
