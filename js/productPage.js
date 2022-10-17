// Demo Images
function change_image(image){
    var container = document.getElementById("pp_demoimg__activer");
    container.src = image.src;
}



// Main Consept
var bootistS = document.querySelectorAll(".pp_prodes__heading .pp_prodesh__headul li");

bootistS[0].onclick = (e)=>{
  e.preventDefault()
  bootistS[0].classList.add("pp_prodhdul__litaker");
  bootistS[1].classList.remove("pp_prodhdul__litaker");
  bootistS[2].classList.remove("pp_prodhdul__litaker");
  bootistS[3].classList.remove("pp_prodhdul__litaker");
  document.getElementById("pp__description1").classList.add("pp__display__block");
  document.getElementById("pp__description2").classList.remove("pp__display__block");
  document.getElementById("pp__description3").classList.remove("pp__display__block");
  document.getElementById("pp__description4").classList.remove("pp__display__block");
}

bootistS[1].onclick = (e)=>{
  e.preventDefault()
  bootistS[1].classList.add("pp_prodhdul__litaker");
  bootistS[0].classList.remove("pp_prodhdul__litaker");
  bootistS[2].classList.remove("pp_prodhdul__litaker");
  bootistS[3].classList.remove("pp_prodhdul__litaker");
  document.getElementById("pp__description1").classList.remove("pp__display__block");
  document.getElementById("pp__description2").classList.add("pp__display__block");
  document.getElementById("pp__description3").classList.remove("pp__display__block");
  document.getElementById("pp__description4").classList.remove("pp__display__block");
}

bootistS[2].onclick = (e)=>{
  e.preventDefault()
  bootistS[2].classList.add("pp_prodhdul__litaker");
  bootistS[0].classList.remove("pp_prodhdul__litaker");
  bootistS[1].classList.remove("pp_prodhdul__litaker");
  bootistS[3].classList.remove("pp_prodhdul__litaker");
  document.getElementById("pp__description1").classList.remove("pp__display__block");
  document.getElementById("pp__description2").classList.remove("pp__display__block");
  document.getElementById("pp__description3").classList.add("pp__display__block");
  document.getElementById("pp__description4").classList.remove("pp__display__block");
}

bootistS[3].onclick = (e)=>{
  e.preventDefault()
  bootistS[3].classList.add("pp_prodhdul__litaker");
  bootistS[0].classList.remove("pp_prodhdul__litaker");
  bootistS[1].classList.remove("pp_prodhdul__litaker");
  bootistS[2].classList.remove("pp_prodhdul__litaker");
  document.getElementById("pp__description1").classList.remove("pp__display__block");
  document.getElementById("pp__description2").classList.remove("pp__display__block");
  document.getElementById("pp__description3").classList.remove("pp__display__block");
  document.getElementById("pp__description4").classList.add("pp__display__block");
}