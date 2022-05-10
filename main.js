prediction = "";
Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}
console.log('ml5.version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y-TyzOjGF/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction = results[0].label;

        if (results[0].label == "Okay Sign") {
            document.getElementById("result_emoji").innerHTML = "&#128076;";
            document.getElementById("result_gesture_name").innerHTML = "Ok I will do my homework";
        }
        if (results[0].label == "Thumbs Up") {
            document.getElementById("result_emoji").innerHTML = "&#128077";
            document.getElementById("result_gesture_name").innerHTML = "I am drinking a Thumbs up soda";
        }
        if (results[0].label == "Peace Sign") {
            document.getElementById("result_emoji").innerHTML = "&#9996;";
            document.getElementById("result_gesture_name").innerHTML = "Pray for world peace";
        }
        if (results[0].label == "Fist") {
            document.getElementById("result_emoji").innerHTML = "&#9994;";
            document.getElementById("result_gesture_name").innerHTML = "I will hit you with my fist";
        }
        if (results[0].label == "Clap") {
            document.getElementById("result_emoji").innerHTML = "&#128079;";
            document.getElementById("result_gesture_name").innerHTML = "I should clap for you";
        }
        if (results[0].label == "Swag Sign") {
            document.getElementById("result_emoji").innerHTML = "&#129304;";
            document.getElementById("result_gesture_name").innerHTML = "What party is complete without swag ?";
        }
        if (results[0].label == "Bye") {
            document.getElementById("result_emoji").innerHTML = "&#128075;";
            document.getElementById("result_gesture_name").innerHTML = "Bye Bye";
        }
    }
}