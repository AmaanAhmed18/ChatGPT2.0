// Type text
const text = "Welcome to ChatGPT 2.0!";
const typingSpeed = 100; 

let index = 0; 
let typingTimeout;

function typeText() {
    if (index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
        index++;
        typingTimeout = setTimeout(typeText, typingSpeed); 
    }
    else {
        const typewriter = document.querySelector('.typewriter');
        typewriter.style.borderRight = 'none';
    }
}

function resetTypingAnimation() {
    clearTimeout(typingTimeout); 
    index = 0; 
    document.getElementById("text").textContent = ''; 
    typeText(); 
}

window.onload = typeText;


document.addEventListener('DOMContentLoaded', function () {
    const modeButton = document.getElementById('mode-button');
    const modeOptions = document.getElementById('mode-options');
    const modeToggle = document.querySelector('.mode-toggle');

    modeButton.addEventListener('click', function () {
        modeToggle.classList.toggle('active');
    });

    modeOptions.addEventListener('click', function (event) {
        if (event.target.classList.contains('mode-option')) {
            const theme = event.target.getAttribute('data-theme');
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                modeButton.textContent = 'Mode';
            } else {
                document.body.classList.remove('dark-theme');
                modeButton.textContent = 'Mode';
            }
            modeToggle.classList.remove('active'); 
            resetTypingAnimation(); 
        }
    });

    if (document.body.classList.contains('dark-theme')) {
        modeButton.textContent = 'Mode';
    } else {
        modeButton.textContent = 'Mode';
    }
});

// Hidden icons
document.addEventListener('DOMContentLoaded', function () {
    const visibleIcon = document.querySelector('.icon-visible');
    const iconsContainer = document.querySelector('.icons');

    visibleIcon.addEventListener('click', function () {
        iconsContainer.classList.toggle('show-icons');
    });
});

// Change theme 
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
    });
});


document.getElementById("try-chatgpt").addEventListener("click", function() {
    var formContainer = document.getElementById("form-container");
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
});

document.getElementById("user-questions-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents the form from submitting the traditional way

    // Here you can capture the form data and process it as needed
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;

    console.log({ q1, q2, q3, q4 });

    // You can add logic here to use these answers for further interaction or processing
});
