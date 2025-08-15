document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Sistema de abas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panels
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const panelId = this.getAttribute('data-tab');
            document.getElementById(panelId).classList.add('active');
        });
    });
    
    // Animação de elementos ao rolar
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-image, .feature, .gallery-item, .contact-form, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar a página
    
    // Galeria lightbox (simplificado)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Aqui você pode implementar um lightbox mais sofisticado
            // ou usar uma biblioteca como Lightbox.js ou Fancybox
            console.log('Imagem clicada:', this.querySelector('img').src);
        });
    });
    
    // Validação do formulário
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Aqui você pode adicionar o código para enviar o formulário
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
