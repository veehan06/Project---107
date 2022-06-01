function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sLYDd91qc/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults())
}
function gotResults(error, results){
    console.log("got result")
}