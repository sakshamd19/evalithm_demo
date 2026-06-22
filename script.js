document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordBtn = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password-input');
    const loginForm = document.querySelector('.login-form');

    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the eye icon visual state (simple opacity change for now)
        if (type === 'text') {
            togglePasswordBtn.style.opacity = '0.5';
        } else {
            togglePasswordBtn.style.opacity = '1';
        }
    });

    // Handle form submission (prevent default and show a demo alert)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign In button clicked. This is a demo.');
    });

    // Handle secondary buttons
    const secondaryBtns = document.querySelectorAll('.btn-secondary');
    secondaryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnText = e.currentTarget.querySelector('span').textContent;
            alert(`${btnText} clicked.`);
        });
    });
});
