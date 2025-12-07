function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`${name}, आपका संदेश भेज दिया गया!`);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}