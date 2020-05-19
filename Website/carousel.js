var imageNumber = 0;
var image = document.getElementById('first-slide');

function slideLeft(){
    
    if(imageNumber==0){
        imageNumber=2;
        document.getElementById('first-slide').src = "./images/040608_Band3.jpg";
    } else if(imageNumber==1){
        imageNumber=0;
        document.getElementById('first-slide').src = "./images/34458_1531435843257_1155575172_1527667_275439_n.jpg";
    } else{
        imageNumber=1;
        document.getElementById('first-slide').src = "./images/74264_1434727309182_1262913281_30996230_1176004_n.jpg";
    }
}

function slideRight(){
    if(imageNumber==0){
        imageNumber=1;
        document.getElementById('first-slide').src = "./images/040608_Band3.jpg";
    } else if(imageNumber==1){
        imageNumber=2;
        document.getElementById('first-slide').src = "./images/34458_1531435843257_1155575172_1527667_275439_n.jpg";
    } else{
        imageNumber=0;
        document.getElementById('first-slide').src = "./images/74264_1434727309182_1262913281_30996230_1176004_n.jpg";
    }
}