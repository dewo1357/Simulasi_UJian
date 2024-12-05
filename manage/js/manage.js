import { questions, Nilai } from "./aset.js";

const PIN = localStorage.getItem('PIN');
const NIK = localStorage.getItem('NIK');
if (PIN === null || NIK === null) {
    location.href = "../index.html"
}

//save & Load Local Storage
const anser = (key) => {
    let list_ans = null;
    let countdownTime = null;
    if (localStorage.getItem(key) == null) {
        if (key === 'time') {
            countdownTime = 2 * 60 * 60;
            localStorage.setItem('time', countdownTime);
        } else {
            list_ans = Array(questions.length).fill(0);
            localStorage.setItem(key, JSON.stringify(list_ans));
        }

    } else {
        if (key === 'time') {
            countdownTime = localStorage.getItem(key);
        } else {
            list_ans = JSON.parse(localStorage.getItem(key));
        }
    }

    if (key == 'time') {
        return countdownTime;
    } else {
        return list_ans;
    }
}

const save = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// Set the countdown time (2 hours = 120 minutes)
let countdownTime = anser('time');
console.log(countdownTime);
// Function to update the timer every second
const updateTimer = () => {
    // Calculate hours, minutes, and seconds
    let hours = Math.floor(countdownTime / 3600);
    let minutes = Math.floor((countdownTime % 3600) / 60);
    let seconds = countdownTime % 60;

    // Format time to always have two digits (e.g., 02:03:09)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the updated time
    document.getElementById('timer').innerText = `${hours}:${minutes}:${seconds}`;

    // Decrease the countdown time by 1 second
    if (countdownTime > 0) {
        countdownTime--;
        localStorage.setItem('time', countdownTime);
    } else {
        clearInterval(timerInterval);  // Stop the timer when it reaches 0
        alert("Time's up!");
        location.href = "../index.html";
        localStorage.clear();
    }
};

// Start the countdown timer
let timerInterval = setInterval(updateTimer, 1000);

const option = ["A", "B", "C", "D"];
let index = 0;
const StorageKey = 'ans';
const ScoreKey = "score"

//fill total ask
document.getElementById('TotalAsk').innerText = questions.length;


const list_ans = anser(StorageKey);
let nilai = anser(ScoreKey);
const render = (index) => {
    let n_fill = 0;
    // variabel menampung Nilai

    const buttonColor = document.getElementsByClassName("Soalkuu");
    for (let i = 0; i < buttonColor.length; i++) {
        document.getElementById(i).style.background = "antiquewhite";
        document.getElementById(i).style.color = "black";
        if (list_ans[i] !== 0) {
            n_fill++;
            document.getElementById(i).style.background = "green";
            document.getElementById(i).style.color = "antiquewhite";
        }
    }
    console.log(nilai)


    document.getElementById(index).style.background = "red";
    document.getElementById(index).style.color = "antiquewhite";

    for (let i = 0; i < option.length; i++) {
        const pilihanGanda = document.getElementById(option[i]);
        const ans = document.getElementById("option" + option[i]);
        ans.innerText = option[i] + ". " + questions[index].options[i];
        pilihanGanda.appendChild(ans);
    }

    const soal = document.getElementById('Soal');
    soal.innerText = questions[index].question;

    //mengembalikan history yang sudah di isi pilihan nya.
    const pilihan = document.getElementsByName("soal");
    for (let i = 0; i < pilihan.length; i++) {
        const value = pilihan[i].value;
        const value2 = list_ans[index];
        pilihan[i].checked = (value == value2) ? true : false;
    }

    //fill tersisa ask
    const sisa = document.getElementById('TotalAsk').innerText - n_fill;
    document.getElementById('TotalAskTersisa').innerText = sisa;

    //fill sudah berapa di isi
    document.getElementById('FillAsk').innerText = n_fill;
}


//Popup Function=========================
const OpenPopup = (x,y) =>{
    const OverLay = document.getElementById(x);
    const popcontent = document.getElementById(y);
    OverLay.style.display = 'flex';
    setTimeout(() => {
        popcontent.classList.add("action");
    }, 10)}

const ClosePoPup = (x,y) => {
    const OverLay = document.getElementById(x);
    const popcontent = document.getElementById(y);

    popcontent.classList.remove("action")
    setTimeout(() => {
        OverLay.style.display = 'none';
    }, 500);
}


//Mengisi Kumpulan No Soal
const form = document.getElementById("FormAns");
form.addEventListener('submit', function (e) {
    //mengambil radio soal dan mengecek apabila sudah ceklis;
    const soal = document.getElementsByName("soal");
    let isAns = false;
    for (let i = 0; i < soal.length; i++) {
        if (soal[i].checked) {
            list_ans[index] = soal[i].value;
            nilai[index] = Nilai[index][list_ans[index]];
            save(list_ans, StorageKey);
            save(nilai, ScoreKey);
            isAns = true
        }
        //reset ulang kembali checklis
        soal[i].checked = false;
    }
    if (isAns) {
        e.preventDefault();
        if (index != 99) {
            index++;
        }
        render(index);
        console.log(list_ans)
    } else {
        e.preventDefault();
        OpenPopup("OverLay","popupcontent")
    }
})



//Menutup PoPup
document.getElementById("ClosePoPup").addEventListener('click',function(e){
    e.preventDefault();
    ClosePoPup("OverLay","popupcontent")
});


document.getElementById("OverLay").addEventListener('click', function(e){
    e.preventDefault();
    ClosePoPup("OverLay","popupcontent")
});


document.getElementById("ClosePoPupBatal").addEventListener('click', function(e){
    e.preventDefault();
    ClosePoPup("OverLay2","popupcontent2");

});

document.getElementById("OverLay2").addEventListener('click', function(e){
    e.preventDefault();
    ClosePoPup("OverLay2","popupcontent2")
});


//
document.getElementById("Selesai").addEventListener('click', function(e){
    location.href = "./result.html";
});


//TOMBOL SELESAI
const buttonFinish = document.getElementById('Done');
buttonFinish.addEventListener('click', function (e) {
    e.preventDefault();
    OpenPopup("OverLay2","popupcontent2");
})

addEventListener('load', function () {
    const list_ans = localStorage.getItem(StorageKey);
    console.log(list_ans);

    for (let i = 0; i < option.length; i++) {
        document.getElementById("ans" + option[i]).checked = (list_ans[index]) ? true : false;
    }

    const NoSoal = document.getElementById("KumpulanNoSoal")
    for (let i = 0; i <= questions.length - 1; i++) {
        const node = document.createElement("button");
        node.setAttribute('value', i)
        node.setAttribute('class', 'Soalkuu');
        node.setAttribute('id', i);
        node.innerText = i + 1;

        node.style.background = "antiquewhite";

        node.addEventListener('click', function () {
            index = node.value;
            render(index);
            console.log(list_ans)
        });

        NoSoal.append(node);
    }
    render(0);
})


export default nilai;