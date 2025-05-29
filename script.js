document.addEventListener('DOMContentLoaded', () => {
  const toggleTheme = document.getElementById('toggleTheme');
  const root = document.documentElement;
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') root.classList.add('dark');

  toggleTheme?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });

  // Chatbot toggle
  const chatBtn = document.getElementById('chatbotBtn');
  const chatBox = document.getElementById('chatbotBox');
  const chatInput = document.getElementById('chatInput');
  const chatContent = document.getElementById('chatContent');

  chatBtn?.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
  });

  chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const userMsg = chatInput.value.trim();
      if (userMsg) {
        const msgElem = document.createElement('div');
        msgElem.textContent = `🧑‍💼 ${userMsg}`;
        chatContent.appendChild(msgElem);
        chatInput.value = '';

        setTimeout(() => {
          const botReply = document.createElement('div');
          botReply.className = 'typing';
          botReply.textContent = `🤖 FixCity Bot: Thanks for your message!`; // Placeholder
          chatContent.appendChild(botReply);
          chatContent.scrollTop = chatContent.scrollHeight;
        }, 500);
      }
    }
  });

  // Submission animation
  const submitForm = document.getElementById('submitForm');
  const successMsg = document.getElementById('successMessage');
  if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      successMsg.classList.remove('hidden');
      gsap.fromTo(successMsg, { opacity: 0 }, { opacity: 1, duration: 1 });
    });
  }
});
