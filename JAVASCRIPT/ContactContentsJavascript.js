function showContact() {
    if(document.getElementById("contactContactSessionWarp_id").style.display == "none") {
    	document.getElementById("contactContactSessionWarp_id").style.display = "block";
    } else {
    	document.getElementById("contactContactSessionWarp_id").style.display = "none";
    }
}

function LogoImageClick() {
  if(document.getElementById('Contact_Image_id').src == 'ASSETS/LogoImage_1.jpg')
    document.getElementById('Contact_Image_id').src = 'ASSETS/LogoImage_2.jpg'
  else
    document.getElementById('Contact_Image_id').src = 'ASSETS/LogoImage_1.jpg'
}