Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var distortion = [

/* just some stuff for the curious */
["test " , ["cry for help ", "silent warning "]],
[" test" , [" cry for help ", " silent warning"]],
["installation", ["neuro programming"]],
["name", ["god"]],

/* feelings, thoughts, perception */
["i thought", ["i somehow was sure", "my gut told me", "i catched myself thinking"]],
[" happy", [" fearful", " suspicious", " anxious"]],
[" sad", [" in tears", " devastated", " anxious"]],
[" scary", [" fascinating", " overwhelming"]],
[" heard", [" heard in the back of my head", " whispered"]],
[" smelled", [" tasted"]],
[" beautiful", [" destructive", " unexplainable", " mysterious"]],
[" wonderful", [" warm", " throbbing"]],
[" idea", [" child", " hallucination", " imperative thought"]],
[" meaningful", [" odd"]],
[" happy", [" confused"]],
[" hungry", [" greedy"]],
[" thirsty", [" greedy"]],

/* playing, activities */
[" pet", [" toy"]],
[" cats", [" children"]],
[" cat", [" child"]],
[" dog", [" guard", " private detective"]],
[" rabbit", [" obstetrician"]],
[" barked", [" screamed"]],
[" played with", [" pretended to be"]],
[" teddy", [" wild beast"]],
[" stuffed animal", [" close friend"]],
[" plush toy", [" close friend"]],
[" soft toy", [" close friend"]],
[" stuffed bear", [" wild beast"]],
[" doll", [" child", " watching eye"]],
[" puppet", [" child", " watching eye"]],
[" sandbox", [" meeting room", " the bedroom"]],
[" sandcastle", [" a living", " a beautiful white dress"]],
[" shovel", [" gun", " sword"]],
[" soccer", [" synchronized swimming", " ballet"]],
[" chasey", [" manhunt", " dear hunting"]],
[" teased", [" seduced", " married"]],
[" tickled", [" passionately kissed", " married"]],
[" bicycle", [" gondola", " nacelle"]], 
[" bike", [" gondola", " nacelle"]], 
[" skateboard", [" cardboard with strange letters on it", " whistling carriage"]],
[" skaters", [" glooming red shoes"]],
[" tricycle", [" pitchfork", " paper plane"]],
[" helmet", [" armor", " skydiving equipment"]],
[" training wheels", [" my parent's arms", " my parent's legs"]],
[" swing", [" paper plane"]],
[" see-saw", [" water tower", " catapult"]],
[" seesaw", [" water tower", " catapult"]],
[" slide", [" circular stair leading to darkness"]],
[" monkey bars", [" spider web"]],
[" climbing contraption", [" spider web"]], 

/* school, institutions */
["kindergarden", ["the fair", "the screaming seething water", "the pinball machine"]],
["school", ["the place where everyone was silent", "the factory"]],
["the teacher", ["an uncanny voice", "a speaking eye", "a singing shadow"]],
["the principal", ["the all-knowing presence", "the locksmith", "the military adviser"]],
[" lessons", [" exam"]],

/* appearance, body feelings, illness */
[" doctor", [" whispering snake", " wise owl"]],
[" meds", [" bitter ice cubes", " numbing soup"]],
[" medicine", [" bitter ice cubes", " numbing soup"]],
[" sick", [" dying"]],
[" stomach", [" head"]],
[" tooth", [" naughty word"]],
[" teeth", [" ears"]],
[" hair", [" tails around my head"]],
[" patch", [" scar tissue"]],
[" band-aid", [" tippet"]],
[" bandage", [" tippet"]],
[" tumbled", [" was stopped by an invisible force"]],
[" fell over", [" fell into a dark pit"]],
[" slipt and fell", [" fell into a dark pit"]],
[" vaccination", [" imortality potion"]],
[" examination", [" bug screening", " investigation", " psychoanalysis"]],
[" wound", [" gate to my soul", " lock made of flesh"]],
[" scraped", [" shattered"]],

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
[" tv", [" the image hole", " a flickering book", " a documentary about alcoholism", " a news flash about the collapse of world economy", " a documentary about dementia"]],
[" TV", [" the image hole", " a flickering book", " a documentary about alcoholism", " a news flash about the collapse of world economy", " a documentary about dementia"]],
[" cinema", [" image hole", " showroom", " briefing room", " parliament"]],
[" book", [" article about nuclear war heads", " mind of someone walking on the street", " booklet that smelled funny", " clock that went backwards", " old, yellowed newspaper" ]],


/* special occasions, holidays */
[" gift", [" mysterious package", " my parent's life savings"]],
[" candle", [" gushing fire"]],
[" cake", [" warm document", " potter's wheel"]],

/* outside world */
[" store", [" kitchen"]],
["street", ["secluded path"]],
[" church", [" the frightening echoing halls", " a haunted house", " a cold warehouse"]],
["bought", ["stole", "produced"]],

/* objects of desire */
["sweets", ["raw meat", "colorful raindrops"]],
["popsicle", ["sticky material"]],
["ice cream", ["lactating eye"]],
["balloon", ["naked bird"]],
[" train", [" fire breathing monster"]],
[" lollipop", [" glowing globe"]],
[" car", [" carriage"]],
[" apple", [" shimmering green herb"]],
[" carrot", [" salty root"]],

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

recognition.lang = "en-GB";
recognition.continuous = true;
recognition.start();
