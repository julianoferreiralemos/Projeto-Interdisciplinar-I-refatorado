document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const message = document.getElementById('message')?.value || '';

            const responseMessage = document.getElementById('responseMessage');
            if (responseMessage) {
                responseMessage.textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
                responseMessage.classList.remove('hidden');
            }

            contactForm.reset();
        });
    }
});




