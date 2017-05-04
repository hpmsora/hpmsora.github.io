function showContact() {
    if(document.getElementById("contactContactSessionWarp_id").style.display == "none") {
    	document.getElementById("contactContactSessionWarp_id").style.display = "block";
    } else {
    	document.getElementById("contactContactSessionWarp_id").style.display = "none";
    }
}

function LogoImageClick() {
  if(document.getElementById('Contact_Image_id').src == 'ASSETS/LogoImage_1.png')
    console.log(document.getElementById('Contact_Image_id'))
    document.getElementById('Contact_Image_id').src = 'ASSETS/LogoImage_2.png'
  else
    document.getElementById('Contact_Image_id').src = 'ASSETS/LogoImage_1.png'
}