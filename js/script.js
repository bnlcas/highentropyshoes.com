shoeFiles = ['./Shoes/IMG_0799.JPG', './Shoes/IMG_0766.JPG', './Shoes/IMG_1525.JPG', './Shoes/IMG_1280.JPG', './Shoes/IMG_5964.JPG', './Shoes/IMG_1041.JPG', './Shoes/IMG_7020.JPG', './Shoes/IMG_0773.JPG', './Shoes/IMG_0765.JPG', './Shoes/IMG_0981.JPG', './Shoes/IMG_4112.JPG', './Shoes/IMG_1081.JPG', './Shoes/IMG_0572.JPG', './Shoes/IMG_0566.JPG', './Shoes/IMG_6856.JPG', './Shoes/IMG_0764.JPG', './Shoes/IMG_1324.JPG', './Shoes/IMG_6885.JPG', './Shoes/IMG_1046.JPG', './Shoes/IMG_0827.JPG', './Shoes/IMG_2003.JPG', './Shoes/IMG_7191.JPG', './Shoes/IMG_1090.JPG', './Shoes/IMG_3042.JPG', './Shoes/IMG_2348.JPG', './Shoes/IMG_0761.JPG', './Shoes/IMG_0549.JPG', './Shoes/IMG_0575.JPG', './Shoes/IMG_1051.JPG', './Shoes/IMG_0830.JPG', './Shoes/IMG_1247.JPG', './Shoes/IMG_0831.JPG', './Shoes/IMG_1078.JPG', './Shoes/IMG_0560.JPG', './Shoes/IMG_6887.JPG', './Shoes/IMG_0762.JPG', './Shoes/IMG_0776.JPG', './Shoes/IMG_7031.JPG', './Shoes/IMG_1382.JPG', './Shoes/IMG_3542.JPG', './Shoes/IMG_0739.JPG', './Shoes/IMG_0507.JPG', './Shoes/IMG_1631.JPG', './Shoes/IMG_0498.JPG', './Shoes/IMG_4173.JPG', './Shoes/IMG_1037.JPG', './Shoes/IMG_0665.JPG', './Shoes/IMG_6017.JPG', './Shoes/IMG_0499.JPG', './Shoes/IMG_0506.JPG', './Shoes/IMG_2488.JPG', './Shoes/IMG_1381.JPG', './Shoes/IMG_3019.JPG', './Shoes/IMG_3025.JPG', './Shoes/IMG_0666.JPG', './Shoes/IMG_0897.JPG', './Shoes/IMG_0667.JPG', './Shoes/IMG_0673.JPG', './Shoes/IMG_0854.JPG', './Shoes/IMG_0505.JPG', './Shoes/IMG_1196.JPG', './Shoes/IMG_4950.JPG', './Shoes/IMG_1192.JPG', './Shoes/IMG_5041.JPG', './Shoes/IMG_2713.JPG', './Shoes/IMG_2707.JPG', './Shoes/IMG_0500.JPG', './Shoes/IMG_1193.JPG', './Shoes/IMG_0716.JPG', './Shoes/IMG_1350.JPG', './Shoes/IMG_0714.JPG', './Shoes/IMG_3037.JPG', './Shoes/IMG_0853.JPG', './Shoes/IMG_0660.JPG', './Shoes/IMG_0715.JPG', './Shoes/IMG_0724.JPG', './Shoes/IMG_1412.JPG', './Shoes/IMG_2480.JPG', './Shoes/IMG_0877.JPG', './Shoes/IMG_4386.JPG', './Shoes/IMG_0453.JPG', './Shoes/IMG_6624.JPG', './Shoes/IMG_0725.JPG', './Shoes/IMG_0731.JPG', './Shoes/IMG_0900.JPG', './Shoes/IMG_0727.JPG', './Shoes/IMG_3574.JPG', './Shoes/IMG_3038.JPG', './Shoes/IMG_6961.JPG', './Shoes/IMG_6020.JPG', './Shoes/IMG_4385.JPG', './Shoes/IMG_3171.JPG', './Shoes/IMG_1996.JPG', './Shoes/IMG_0530.JPG', './Shoes/IMG_0524.JPG', './Shoes/IMG_1376.JPG', './Shoes/IMG_0726.JPG', './Shoes/IMG_1399.JPG', './Shoes/IMG_0736.JPG', './Shoes/IMG_0454.JPG', './Shoes/IMG_2531.JPG', './Shoes/IMG_1212.JPG', './Shoes/IMG_3411.JPG', './Shoes/IMG_5934.JPG', './Shoes/IMG_2530.JPG', './Shoes/IMG_1944.JPG', './Shoes/IMG_0723.JPG', './Shoes/IMG_2283.JPG', './Shoes/IMG_1013.JPG', './Shoes/IMG_4396.JPG', './Shoes/IMG_0899.JPG', './Shoes/IMG_2724.JPG', './Shoes/IMG_0898.JPG', './Shoes/IMG_6999.JPG', './Shoes/IMG_0720.JPG', './Shoes/IMG_6861.JPG', './Shoes/IMG_3058.JPG', './Shoes/IMG_1920.JPG', './Shoes/IMG_1049.JPG', './Shoes/IMG_0801.JPG', './Shoes/IMG_0829.JPG', './Shoes/IMG_3065.JPG', './Shoes/IMG_6860.JPG', './Shoes/IMG_5616.JPG', './Shoes/IMG_6451.JPG', './Shoes/IMG_0746.JPG', './Shoes/IMG_6453.JPG', './Shoes/IMG_5166.JPG', './Shoes/IMG_1857.JPG', './Shoes/IMG_6862.JPG', './Shoes/IMG_1089.JPG', './Shoes/IMG_1076.JPG', './Shoes/IMG_8251.JPG', './Shoes/IMG_3462.JPG', './Shoes/IMG_5985.JPG', './Shoes/IMG_5991.JPG', './Shoes/IMG_1077.JPG', './Shoes/IMG_1088.JPG', './Shoes/IMG_0553.JPG', './Shoes/IMG_1329.JPG', './Shoes/IMG_0745.JPG', './Shoes/IMG_0796.JPG', './Shoes/IMG_5611.JPG', './Shoes/IMG_0769.JPG', './Shoes/IMG_1339.JPG', './Shoes/IMG_0557.JPG', './Shoes/IMG_5995.JPG', './Shoes/IMG_0556.JPG', './Shoes/IMG_3088.JPG', './Shoes/IMG_0740.JPG', './Shoes/IMG_0756.JPG', './Shoes/IMG_0742.JPG', './Shoes/IMG_3061.JPG', './Shoes/IMG_0540.JPG', './Shoes/IMG_0385.JPG', './Shoes/IMG_0352.JPG', './Shoes/IMG_0541.JPG', './Shoes/IMG_0555.JPG', './Shoes/IMG_1844.JPG', './Shoes/IMG_6859.JPG', './Shoes/IMG_0780.JPG']


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