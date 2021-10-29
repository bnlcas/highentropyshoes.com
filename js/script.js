shoeFiles = ['./shoes/IMG_0799.JPG', './shoes/IMG_0766.JPG', './shoes/IMG_1525.JPG', './shoes/IMG_1280.JPG', './shoes/IMG_5964.JPG', './shoes/IMG_1041.JPG', './shoes/IMG_7020.JPG', './shoes/IMG_0773.JPG', './shoes/IMG_0765.JPG', './shoes/IMG_0981.JPG', './shoes/IMG_4112.JPG', './shoes/IMG_1081.JPG', './shoes/IMG_0572.JPG', './shoes/IMG_0566.JPG', './shoes/IMG_6856.JPG', './shoes/IMG_0764.JPG', './shoes/IMG_1324.JPG', './shoes/IMG_6885.JPG', './shoes/IMG_1046.JPG', './shoes/IMG_0827.JPG', './shoes/IMG_2003.JPG', './shoes/IMG_7191.JPG', './shoes/IMG_1090.JPG', './shoes/IMG_3042.JPG', './shoes/IMG_2348.JPG', './shoes/IMG_0761.JPG', './shoes/IMG_0549.JPG', './shoes/IMG_0575.JPG', './shoes/IMG_1051.JPG', './shoes/IMG_0830.JPG', './shoes/IMG_1247.JPG', './shoes/IMG_0831.JPG', './shoes/IMG_1078.JPG', './shoes/IMG_0560.JPG', './shoes/IMG_6887.JPG', './shoes/IMG_0762.JPG', './shoes/IMG_0776.JPG', './shoes/IMG_7031.JPG', './shoes/IMG_1382.JPG', './shoes/IMG_3542.JPG', './shoes/IMG_0739.JPG', './shoes/IMG_0507.JPG', './shoes/IMG_1631.JPG', './shoes/IMG_0498.JPG', './shoes/IMG_4173.JPG', './shoes/IMG_1037.JPG', './shoes/IMG_0665.JPG', './shoes/IMG_6017.JPG', './shoes/IMG_0499.JPG', './shoes/IMG_0506.JPG', './shoes/IMG_2488.JPG', './shoes/IMG_1381.JPG', './shoes/IMG_3019.JPG', './shoes/IMG_3025.JPG', './shoes/IMG_0666.JPG', './shoes/IMG_0897.JPG', './shoes/IMG_0667.JPG', './shoes/IMG_0673.JPG', './shoes/IMG_0854.JPG', './shoes/IMG_0505.JPG', './shoes/IMG_1196.JPG', './shoes/IMG_4950.JPG', './shoes/IMG_1192.JPG', './shoes/IMG_5041.JPG', './shoes/IMG_2713.JPG', './shoes/IMG_2707.JPG', './shoes/IMG_0500.JPG', './shoes/IMG_1193.JPG', './shoes/IMG_0716.JPG', './shoes/IMG_1350.JPG', './shoes/IMG_0714.JPG', './shoes/IMG_3037.JPG', './shoes/IMG_0853.JPG', './shoes/IMG_0660.JPG', './shoes/IMG_0715.JPG', './shoes/IMG_0724.JPG', './shoes/IMG_1412.JPG', './shoes/IMG_2480.JPG', './shoes/IMG_0877.JPG', './shoes/IMG_4386.JPG', './shoes/IMG_0453.JPG', './shoes/IMG_6624.JPG', './shoes/IMG_0725.JPG', './shoes/IMG_0731.JPG', './shoes/IMG_0900.JPG', './shoes/IMG_0727.JPG', './shoes/IMG_3574.JPG', './shoes/IMG_3038.JPG', './shoes/IMG_6961.JPG', './shoes/IMG_6020.JPG', './shoes/IMG_4385.JPG', './shoes/IMG_3171.JPG', './shoes/IMG_1996.JPG', './shoes/IMG_0530.JPG', './shoes/IMG_0524.JPG', './shoes/IMG_1376.JPG', './shoes/IMG_0726.JPG', './shoes/IMG_1399.JPG', './shoes/IMG_0736.JPG', './shoes/IMG_0454.JPG', './shoes/IMG_2531.JPG', './shoes/IMG_1212.JPG', './shoes/IMG_3411.JPG', './shoes/IMG_5934.JPG', './shoes/IMG_2530.JPG', './shoes/IMG_1944.JPG', './shoes/IMG_0723.JPG', './shoes/IMG_2283.JPG', './shoes/IMG_1013.JPG', './shoes/IMG_4396.JPG', './shoes/IMG_0899.JPG', './shoes/IMG_2724.JPG', './shoes/IMG_0898.JPG', './shoes/IMG_6999.JPG', './shoes/IMG_0720.JPG', './shoes/IMG_6861.JPG', './shoes/IMG_3058.JPG', './shoes/IMG_1920.JPG', './shoes/IMG_1049.JPG', './shoes/IMG_0801.JPG', './shoes/IMG_0829.JPG', './shoes/IMG_3065.JPG', './shoes/IMG_6860.JPG', './shoes/IMG_5616.JPG', './shoes/IMG_6451.JPG', './shoes/IMG_0746.JPG', './shoes/IMG_6453.JPG', './shoes/IMG_5166.JPG', './shoes/IMG_1857.JPG', './shoes/IMG_6862.JPG', './shoes/IMG_1089.JPG', './shoes/IMG_1076.JPG', './shoes/IMG_8251.JPG', './shoes/IMG_3462.JPG', './shoes/IMG_5985.JPG', './shoes/IMG_5991.JPG', './shoes/IMG_1077.JPG', './shoes/IMG_1088.JPG', './shoes/IMG_0553.JPG', './shoes/IMG_1329.JPG', './shoes/IMG_0745.JPG', './shoes/IMG_0796.JPG', './shoes/IMG_5611.JPG', './shoes/IMG_0769.JPG', './shoes/IMG_1339.JPG', './shoes/IMG_0557.JPG', './shoes/IMG_5995.JPG', './shoes/IMG_0556.JPG', './shoes/IMG_3088.JPG', './shoes/IMG_0740.JPG', './shoes/IMG_0756.JPG', './shoes/IMG_0742.JPG', './shoes/IMG_3061.JPG', './shoes/IMG_0540.JPG', './shoes/IMG_0385.JPG', './shoes/IMG_0352.JPG', './shoes/IMG_0541.JPG', './shoes/IMG_0555.JPG', './shoes/IMG_1844.JPG', './shoes/IMG_6859.JPG', './shoes/IMG_0780.JPG']


function ShuffleFilenames(){
    for (var i = shoeFiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shoeFiles[i];
        shoeFiles[i] = shoeFiles[j];
        shoeFiles[j] = temp;
    }
}

function LoadRandomImage()
{
    var randomInd = Math.floor(Math.random() * shoeFiles.length);
    var filename = shoeFiles[randomInd];
}

function InitializeImageElements()
{
    ShuffleFilenames();
    var mainDiv = document.getElementById("main");
    for(var i = 0; i < shoeFiles.length; i++)
    {
        var elem = document.createElement("img");
        elem.setAttribute("src", shoeFiles[i]);
        elem.setAttribute("loading", "lazy");
        mainDiv.appendChild(elem);
    }
}

InitializeImageElements();