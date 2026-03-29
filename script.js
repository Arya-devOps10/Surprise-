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
const message = `Dear (),


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
    alert("Yay! \n New Achivent Unlocked!");
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
