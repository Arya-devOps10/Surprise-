// 1. Password Unlock
function unlock() {
    const input = document.getElementById('passInput').value;
    const correctPass = "140326";
    if (input === correctPass) {
        document.getElementById('passwordGate').style.display = 'none';
        document.getElementById('mainContent').style.display = 'flex';
    } else {
        alert("Ghalat Password! Socho thoda...");
    }
}

// 2. Letter Content (Aap yahan jitna chahe likh sakte hain)
const message = `Dear Rasmalai(Lalchand ji💗),

As you told me you don't like that typical bouquet 💐 or some gift type proposal so here it is this one for you something like digital letter 💌 which only you can access hehe. Before you came into my life it was kinda boring and simple I mean I was not a person I think you see me as now but yeah it took lot of things to become the guy I am now and I guess I feel like maybe everything happened for the reason maybe I am the guy right now that could be my best version to enter in your life. You know there is a theory called Red string. It says every two people in the world are connected to each other through a string. They may cross each other several time but never know. But at right time and at right place they will meet each cuz they are ment to each other. I earlier used to think this can't be true and who would even be standing at the other end of that thread holding it. But I guess I was wrong. It was you standing their holding it at the other end. Idk if things will be always good like this but I promise if it mess up I will be standing there with you fearless to fix up the mess. I can't promise you that their won't be a time in our life when you will not cry but I promise I will be standing there with you to wipe down your tears, I will be standing there with you in every situation in every happiness and problems in all circumstances kabhi thode kaand sath mein karenge toh kabhi life ke kand sath mein clean karenge. Toh meri priye Rasmalai ji do you want to become Judy of this Nick? Do you want to become Pepper Potts of this Tony Stark? Do you want to become MJ of this Peter? Do you want to become Peggy Carter of this Steve Rogers? Do you Rasmalai ji want to become partner in n crime a.k.a Girlfriend of this Arya(Authentic, Radiant, Youthful, Admirable)?`;

// 3. Animation Logic
const thread = document.getElementById('pullThread');
const envelope = document.getElementById('myEnvelope');

thread.addEventListener('click', () => {
    thread.classList.add('pulled');

    setTimeout(() => { envelope.classList.add('open'); }, 800);

    setTimeout(() => {
        document.getElementById('letterOverlay').style.display = 'flex';
        startTypewriter(message);
    }, 2500);
});

function startTypewriter(text) {
    let i = 0;
    const el = document.getElementById('fullTypewriter');
    el.innerHTML = "";
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
            i++;
            setTimeout(type, 40);
        } else {
            document.getElementById('finalAction').style.display = 'block';
        }
    }
    type();
}

// 4. Button Interactions
function sayYes() {
    alert("Yay! \n New Achivent Unlocked\n New Character Girlfriend Unlocked❤️!");
}

function moveNo() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function closeLetter() {
    document.getElementById('letterOverlay').style.display = 'none';
}