window.revelar = ScrollReveal({reset:true})

revelar.reveal('.txt-introducao, .btn-servicos, .servicos, .servicos-container',
    {
        duration: 3000,
        delay: 100,
        distance: '90px',
    }
)

revelar.reveal('.text-pergunta, .contatoin, .forms',
    {
        duration: 3000,
        delay: 150,
        distance: '90px',
        origin: 'left'
    }
)

revelar.reveal('.explicacao-border, .endereco',
    {
        duration: 3000,
        delay: 150,
        distance: '90px',
        origin: 'right'
    }
)