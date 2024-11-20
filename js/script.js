const linkInput = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errorMessage = document.getElementById('error-message');

function isValidURL(str) {
    let pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

linkForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (linkInput.value === '') {
        errorMessage.innerHTML = "Please enter a link."
        linkInput.classList.add('border-red');
    } else if (!isValidURL(linkInput.value)) {
        errorMessage.innerHTML = "Please enter a valid URL."
        linkInput.classList.add('border-red');
    } else {
        errorMessage.innerHTML = "";
        linkInput.classList.remove('border-red');
        alert('Success');
    }
});

// Mobile menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    console.log('BUTTON CLICKED')
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
});