document.addEventListener("DOMContentLoaded", function () {
  // Carrossel da equipe
  const carousel = document.querySelector(".mentoras");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cardWidth = 270;

  if (carousel && prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
      carousel.scrollLeft += cardWidth;
    });

    prevBtn.addEventListener("click", () => {
      carousel.scrollLeft -= cardWidth;
    });
  }

  // Carrossel de parceiros
  const carouselParceiros = document.getElementById("parceirosCarousel");
  const prevBtnParceiros = document.getElementById("prevBtnParceiros");
  const nextBtnParceiros = document.getElementById("nextBtnParceiros");
  const cardWidthParceiros = 270;

  if (carouselParceiros && prevBtnParceiros && nextBtnParceiros) {
    nextBtnParceiros.addEventListener("click", () => {
      carouselParceiros.scrollLeft += cardWidthParceiros;
    });

    prevBtnParceiros.addEventListener("click", () => {
      carouselParceiros.scrollLeft -= cardWidthParceiros;
    });
  }

  // Formulários de Login, Cadastro e Recuperação de Senha
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');
  const loginSection = document.getElementById('login');
  const registerSection = document.getElementById('registrar');
  const registerLink = document.querySelector('.login-container p a[href="#registrar"]');
  const backToLoginLink = document.querySelector('.register-section .back-to-login');
  const forgotPasswordLink = document.querySelector('.forgot-password');
  const forgotPasswordModal = document.getElementById('forgot-password-modal');
  const closeModalBtn = document.querySelector('.close-btn');
  const forgotPasswordForm = document.getElementById('forgot-password-form');


  // Login
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      const emailValido = 'teste@email.com';
      const senhaValida = '123456';

      if (email === emailValido && senha === senhaValida) {
        alert('Login bem-sucedido! Bem-vindo(a)!');
        loginForm.reset();
      } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
      }
    });
  }

  // Troca de Formulários 
  if (registerLink && backToLoginLink) {
    registerLink.addEventListener('click', function (event) {
      event.preventDefault();
      loginSection.style.display = 'none';
      registerSection.style.display = 'flex';
    });

    backToLoginLink.addEventListener('click', function (event) {
      event.preventDefault();
      registerSection.style.display = 'none';
      loginSection.style.display = 'flex';
    });
  }

  // Cadastro 
  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email-register').value;
      const senha = document.getElementById('senha-register').value;

      alert(`Conta criada com sucesso para ${nome}! \nE-mail: ${email}`);
      registerForm.reset();

      registerSection.style.display = 'none';
      loginSection.style.display = 'flex';
    });
  }

  // Recuperação de Senha 
  if (forgotPasswordLink && forgotPasswordModal && closeModalBtn && forgotPasswordForm) {
    forgotPasswordLink.addEventListener('click', function (event) {
      event.preventDefault();
      forgotPasswordModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
      forgotPasswordModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target == forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
      }
    });

    forgotPasswordForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('forgot-email').value;

      alert(`Um link de recuperação de senha foi enviado para ${email}.`);

      forgotPasswordForm.reset();
      forgotPasswordModal.style.display = 'none';
    });
  }
});