const pindah = document.getElementById('PindahLogin');
const check = document.getElementById("check");
const errorMessage = document.getElementById('errorMessage');

check.checked = true
pindah.addEventListener('click', function (e) {
  console.log("Oke")
  e.preventDefault();
  if (check.checked) {
    check.checked = false;
    document.getElementById("Regist").removeAttribute('hidden');
    document.getElementById("Login").setAttribute('hidden', 1);
    const pinInput = document.getElementById('pinInput');
    const pinInput2 = document.getElementById('pinInput2');

    pinInput.value = "";
    pinInput2.value = "";
    pindah.innerText = "Sign In";
  } else {
    check.checked = true;
    document.getElementById("Login").removeAttribute('hidden');
    document.getElementById("Regist").setAttribute('hidden', 1);

    const pinInput = document.getElementById('pinInputRegist');
    const pinInput2 = document.getElementById('pinInputRegist2');

    pinInput.value = "";
    pinInput2.value = "";
    errorMessage.innerText = "";
    pindah.innerText = "Register";
  }
})


const formRegist = document.getElementById('RegistForm');
formRegist.addEventListener('submit', function (event) {
  const pinInput = document.getElementById('pinInputRegist');
  const pinInput2 = document.getElementById('pinInputRegist2');
  const pin = pinInput.value;
  const pin2 = pinInput2.value;
  localStorage.setItem('NIK', pin);
  localStorage.setItem('PIN', pin2);

  //membangkitkan popup
  document.getElementById("OverLay").style.display = 'flex';
  setTimeout(() => {
    document.getElementById("popcontent").classList.add("show");
    document.getElementById("Login").removeAttribute('hidden');
    document.getElementById("Regist").setAttribute('hidden', 1);
    pindah.innerText = "Register";
  }, 10)

  event.preventDefault();
});

document.getElementById("Close").addEventListener('click', function () {
  document.getElementById("popcontent").classList.remove("show");
  setTimeout(() => {
    document.getElementById("OverLay").style.display = 'none';
  }, 1000)

})

const Notif = (inputId,NotifId,nSisa,n) => {
  document.getElementById(NotifId).style.visibility = "visible";
  const syarat_n_char = n;
  const actual = document.getElementById(inputId)
  const Notif = document.getElementById(NotifId);
  const sisaNotif = document.getElementById(nSisa);
  Notif.style.visibility = "visible";
  const n_actual = actual.value.length;
  const sisa = syarat_n_char - n_actual;
  sisaNotif.innerText = sisa;

  if (sisa === 0) {
    sisaNotif.style.color = "black";
  } else {
    sisaNotif.style.color = "red"
  }
}

const actual = document.getElementById('pinInputRegist')
actual.addEventListener('input',function(){
  Notif("pinInputRegist",'NotifNIK','Sisa',10);
})


const actual2 = document.getElementById('pinInputRegist2')
actual2.addEventListener('input',function(){
  Notif("pinInputRegist2",'NotifPIN','Sisa2',4);
})

document.getElementById('pinInputRegist').addEventListener('focus', function () {
  document.getElementById("NotifNIK").style.visibility ="visible";
})

document.getElementById('pinInputRegist2').addEventListener('focus', function () {
  document.getElementById("NotifPIN").style.visibility ="visible";
})


document.getElementById('pinInputRegist').addEventListener('blur', function () {
  document.getElementById("NotifNIK").style.visibility ="hidden";
})

document.getElementById('pinInputRegist2').addEventListener('blur', function () {
  document.getElementById("NotifPIN").style.visibility ="hidden";
})


document.getElementById("RegistForm").addEventListener('input',function(){
  const actual = document.getElementById('pinInputRegist');
  const actual2 = document.getElementById('pinInputRegist2');

  if(actual.value.length===10 && actual2.value.length===4){
    document.getElementById("regist").removeAttribute("disabled")
  }else{
    document.getElementById("regist").setAttribute("disabled","")
  }
})

const form = document.getElementById('pinForm');
form.addEventListener('submit', function (event) {
  const pinInput = document.getElementById('pinInput');
  const pinInput2 = document.getElementById('pinInput2');
  const pin = pinInput.value;
  const pin2 = pinInput2.value;

  let correctPin = null;
  let correctPin2 = null;
  if (localStorage.getItem('PIN') != null && localStorage.getItem('NIK') != null) {
    correctPin = localStorage.getItem('NIK').toString();
    correctPin2 = localStorage.getItem('PIN').toString();
  }

  const ayah1 = "1276021706790003";
  const ayah2 = "290801"
  console.log(correctPin);
  console.log(pin);
  console.log(pin2);


  if (pin !== correctPin && pin !== ayah1) {
    event.preventDefault(); // Prevent form submission
    errorMessage.textContent = "KODE NIK Tidak Terdaftar. Silakan coba lagi.";
  } else {
    if (pin2 != correctPin2 && pin2 !== ayah2) {
      event.preventDefault();
      errorMessage.textContent = "KODE PIN salah. Silakan coba lagi.";
    } else {
      event.preventDefault();
      localStorage.setItem('NIK', pin);
      localStorage.setItem('PIN', pin2);
      location.href = "manage/validate.html"
      console.log("OKe")
    }
  }
});

