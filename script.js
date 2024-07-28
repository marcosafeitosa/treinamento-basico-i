       // teste
       
        const contentArray = [
    "I - Introdução. (Balão Verde)",
    "Seja bem-vindo(a) ao Treinamento Básico I do Exército Brasileiro.",
    "Eu sou o [Patente] [Nickname] e irei treiná-lo(a).",
    "Não durma durante o treinamento para não ser auto-kickado(a).",
    "Responda às perguntas usando \"Sim, [sua patente]\", e \"Não, [sua patente]\".",
    "O Exército Brasileiro possui dois corpos docentes, são os Praças e os Oficiais.",
    "Praças utilizam a camisa VERDE.",
    "Para Praças, use o nick ou patente como tratamento.",
    "Exemplo: Sim, Sargento/Não, Sargento.",
    "Oficiais utilizam a camisa BRANCA.",
    "Você deve se dirigir a um Oficial usando \"Senhor(a)\".",
    "Exemplo: Sim, senhor(a)/Não, senhor(a).",
    "Dúvidas?",

    "II - Pagamentos. (Balão Verde)",
    "Após aprovado(a) neste treinamento, você será um Soldado do Exército Brasileiro,",
    "sendo assim, possuirá direito a pagamentos.",
    "Estes ocorrem 4x ao dia, horários: 12h, 15h, 18h e 21h.",
    "Soldados ganham 4 mobis, Soldado Estrela 5 mobis e Cabos 6 mobis.",
    "Dúvidas?",

    "III - Negrito. (Balão Verde)",
    "O negrito é obrigatório nas dependências do Exército Brasileiro.",
    "Para utilizar o negrito pelo computador,",
    "basta segurar a tecla SHIFT e teclar ENTER após digitar a frase.",
    "Caso o negrito falhe, corrija-o com um \"*\" em negrito.",
    "Para utilizar o negrito na versão mobile, basta escrever :shout no início da frase.",
    "Exemplo: ;shout Olá. (Altere ; por : )",
    "Dúvidas?",

    "IV - Comandos. (Balão Verde)",
    "1. Sentido/Atenção.",
    "Você ficará de pé diante do seu assento.",
    "Este movimento se chama Sentido/Atenção, deve ser feito quando ouvir um apito.",
    "Ou quando um Oficial for à portinha e solicitar o comando.",
    "Em Sentido é proibido falar/sussurrar e ficar com drinks na mão.",
    "Caso fique torto(a), sente-se e refaça o movimento até ficar reto(a).",
    "Sabe soltar itens da mão?",
    "Clique em você, aperte na seta em cima do seu boneco e em \"Soltar Item\".",
    "Em caso de bug, você pode usar o comando \":drop\" também.",
    "Dúvidas?",
    "2. Descansar/À vontade.",
    "Você irá se sentar novamente no seu assento.",
    "Este movimento se chama Descansar/À vontade.",
    "Quando for dado esse comando, deve se sentar e retornar para suas atividades.",
    "Ambos os comandos devem ser executados em 5 segundos.",
    "Caso contrário, poderá ir para fora do QG. Mas poderá retornar normalmente.",
    "Dúvidas?",

    "V - Quartel-General (QG). (Balão Verde)",
    "1. Guarda-Portão (GP).",
    "São as \"Cadeiras Majestosas\" que ficam localizadas na parte da frente do QG.",
    "Para assumir o GP, fique a um quadrado de distância atrás do posto e digite:",
    "\"Assumo, [Patente].\"",
    "Em GP é proibido se ausentar e deve sempre assumir seus superiores.",
    "A função do GP é o alistamento.",
    "Exemplo: Fulano, deseja se alistar?",
    "Caso ele diga sim, utilize o comando \":liberar\".",
    "Caso ele não queira ou esteja atrapalhando, sussurre com um Oficial.",
    "Dúvidas?",
    "2. Preencha a Retaguarda (PAR).",
    "O PAR são os sofás-tronos ao fundo dos GP's.",
    "Lugar onde você irá esperar por alguma função, caso todas estejam ocupadas.",
    "Se tiver lugar no GP ou um superior sentado, busque assumir o posto.",
    "Dúvidas?",
    "3. Posto de Ausência (PDA).",
    "É o local onde você irá se ausentar, ele fica ao lado do CI.",
    "Basta clicar em usar a “Máquina de Ticket” que você será movido(a) para ele.",
    "Para retornar às atividades, basta clicar normalmente num piso próximo.",
    "Vale destacar que é proibido entrar no Quartel e ir direto para o PDA.",
    "Dúvidas?",

    "4. Funcionamento do Quartel General.",
    "O Quartel General funciona das 10h às 23h em dias da semana e",
    "das 11h às 23h em finais de semana/feriado.",

    "VI - Regras do Exército Brasileiro. (Balão Verde)",
    "1. Nunca pedir pagamentos, promoções ou direitos.",
    "2. Proibido participar de outro Exército/Polícia enquanto alistado do Ex.BR.",
    "3. Não faltar com respeito com ninguém.",
    "4. Proibido dançar, sentar no chão e apresentar placas nas dependências internas do Ex.BR.",
    "5. Proibido manter a visibilidade do perfil e o status online desabilitados enquanto estiver nas salas pertencentes ao Ex.BR.",
    "Dúvidas?",

    "VII - Finalização. (Balão Verde)",
    "Parabéns, você foi aprovado(a) no Treinamento Básico I.",
    "Para encontrar o Exército Brasileiro novamente, basta procurar por Cm-Anonimo",
    "no navegador e ir até o quarto do Exército Brasileiro com a tag FMB.",
    "A entrada no QG deve ser feita através do “Monolito Negro” do lado de fora.",
    "Você deve estar devidamente fardado(a), com a missão correta e,",
    "quando estiver tudo correto, será liberado(a) por um Oficial."
];

        const container = document.getElementById('container');
        const alertBox = document.getElementById('alert');
        const copyPreviousButton = document.getElementById('copyPrevious');
        const copyNextButton = document.getElementById('copyNext');
        const startAutoCopyButton = document.getElementById('startAutoCopy');
        const stopAutoCopyButton = document.getElementById('stopAutoCopy');

        let autoCopyInterval;

        contentArray.forEach((paragraph, index) => {
          const p = document.createElement('p');
          p.className = 'paragraph';
          if (paragraph.includes('(Balão Verde)')) {
            p.classList.add('balao-verde');
          }
          p.dataset.index = index;
          p.innerText = paragraph;
          container.appendChild(p);
        });

        const paragraphs = document.querySelectorAll('.paragraph');

        function copyText(index) {
          if (index < 0 || index >= paragraphs.length) return;

          const textToCopy = paragraphs[index].innerText;
          navigator.clipboard.writeText(textToCopy).then(() => {
            paragraphs.forEach(p => p.classList.remove('copied'));
            paragraphs[index].classList.add('copied');

            // Scroll to center the paragraph
            const containerHeight = container.clientHeight;
            const paragraphOffsetTop = paragraphs[index].offsetTop;
            const paragraphHeight = paragraphs[index].offsetHeight;
            const scrollTop = paragraphOffsetTop - (containerHeight / 2) + (paragraphHeight / 2);
            container.scrollTo({ top: scrollTop, behavior: 'smooth' });

            // Show alert if paragraph contains "(Balão Verde)"
            if (paragraphs[index].classList.contains('balao-verde')) {
              showAlert();
              clearInterval(autoCopyInterval); // Stop the timer if "(Balão Verde)" is found
            }
          }).catch(err => console.error('Failed to copy text: ', err));
        }

        function showAlert() {
          alertBox.style.display = 'block';
          setTimeout(() => {
            alertBox.style.display = 'none';
            enableButtons();
          }, 3000);
        }

        function enableButtons() {
          copyPreviousButton.disabled = false;
          copyNextButton.disabled = false;
        }

        let currentIndex = 0;

        copyPreviousButton.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            copyText(currentIndex);
          }
        });

        copyNextButton.addEventListener('click', () => {
          if (currentIndex < paragraphs.length - 1) {
            currentIndex++;
            copyText(currentIndex);
          }
        });

        startAutoCopyButton.addEventListener('click', () => {
          autoCopyInterval = setInterval(() => {
            if (currentIndex < paragraphs.length - 1) {
              currentIndex++;
              copyText(currentIndex);
            } else {
              clearInterval(autoCopyInterval);
            }
          }, 6000);
        });

        stopAutoCopyButton.addEventListener('click', () => {
          clearInterval(autoCopyInterval);
        });

        // Copia automaticamente o primeiro parágrafo ao carregar a página
        window.onload = () => {
          copyText(currentIndex);
        };