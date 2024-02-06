function showContact() {
    if(document.getElementById("contactContactSessionWarp_id").style.display == "none") {
      document.getElementById("contactContactSessionWarp_id").style.display = "block";
    } else {
    	document.getElementById("contactContactSessionWarp_id").style.display = "none";
    }
}

function LogoImageClick() {
  if($('#Contact_Image_id').data("status") == 'LogoImage_1.png') {
    document.getElementById('Contact_Image_id').src = 'ASSETS/ICONS/LogoImage_2.png'
    $('#Contact_Image_id').data("status", 'LogoImage_2.png')
  }
  else {
    document.getElementById('Contact_Image_id').src = 'ASSETS/ICONS/LogoImage_1.png'
    $('#Contact_Image_id').data("status", 'LogoImage_1.png')
  }
}