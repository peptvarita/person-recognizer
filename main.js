Webcam.set({
    width : 350,
    height : 300,
    image_format :'png',
    png_quality : 90
    })
    camera = document.getElementById("camera")
    
    Webcam.attach('#camera')
    function takephoto(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML= '<img id="P1" src="'+data_uri+'"/>'
        })
    }    
    console.log("ml5 version",ml5.version)       
    Mymodle = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sPH2mhyhm/model.json',modelLoaded)
    
    function modelLoaded(){
        console.log("Your Model is loaded$.$")
    }

function check(){
    I = document.getElementById("P1")
    Mymodle.classify(I,gotResult)
}
 function gotResult(error,results){


    if(error){console.log(error)}
    else{
        console.log(results)
        document.getElementById("on").innerHTML=results[0].label
        document.getElementById("acc").innerHTML=results[0].confidence.toFixed(2)
    }
 }



