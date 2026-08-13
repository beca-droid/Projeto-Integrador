// ==========================================
// ABC PRA VIDA - CONTEÚDO DOS MÓDULOS
// ==========================================
const dadosModulos = {
    vogais: `
        <h2>🔤 Módulo 1: Vogais e Sons</h2>
        <p>As vogais são as letras fundamentais da nossa língua. Clique em cada uma para ouvir:</p>
        
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
            <div onclick="falarTexto('A, de Abelha')" style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; text-align: center; min-width: 100px; cursor: pointer;">
                <span style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">A</span>
                <p>Abelha 🔊</p>
            </div>
            <div onclick="falarTexto('E, de Elefante')" style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; text-align: center; min-width: 100px; cursor: pointer;">
                <span style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">E</span>
                <p>Elefante 🔊</p>
            </div>
            <div onclick="falarTexto('I, de Igreja')" style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; text-align: center; min-width: 100px; cursor: pointer;">
                <span style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">I</span>
                <p>Igreja 🔊</p>
            </div>
            <div onclick="falarTexto('O, de Ovo')" style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; text-align: center; min-width: 100px; cursor: pointer;">
                <span style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">O</span>
                <p>Ovo 🔊</p>
            </div>
            <div onclick="falarTexto('U, de Uva')" style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; text-align: center; min-width: 100px; cursor: pointer;">
                <span style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">U</span>
                <p>Uva 🔊</p>
            </div>
        </div>

        <h3>Exercício Rápido</h3>
        <p>Qual vogal começa a palavra <strong>"AMIGO"</strong>?</p>
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <button onclick="verificarRespostaMod1(true)" style="padding: 0.5rem 1.5rem; font-size: 1.2rem; cursor: pointer;">A</button>
            <button onclick="verificarRespostaMod1(false)" style="padding: 0.5rem 1.5rem; font-size: 1.2rem; cursor: pointer;">E</button>
            <button onclick="verificarRespostaMod1(false)" style="padding: 0.5rem 1.5rem; font-size: 1.2rem; cursor: pointer;">O</button>
        </div>
        <p id="feedback-mod1" style="margin-top: 1rem; font-weight: bold;"></p>
    `,
    
    cotidiano: `
        <h2>🏠 Módulo 2: Palavras do Dia a Dia</h2>
        <p>No nosso cotidiano, lemos e usamos palavras essenciais para nos comunicar e navegar no mundo.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 2rem 0;">
            <div onclick="falarTexto('Entrada')" style="background: #fff; border: 2px solid var(--secondary-color); padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">🚪</span>
                <h3 style="color: var(--primary-color);">ENTRADA 🔊</h3>
            </div>
            <div onclick="falarTexto('Saída')" style="background: #fff; border: 2px solid var(--secondary-color); padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">🚶‍♂️</span>
                <h3 style="color: var(--primary-color);">SAÍDA 🔊</h3>
            </div>
            <div onclick="falarTexto('Ônibus')" style="background: #fff; border: 2px solid var(--secondary-color); padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">🚌</span>
                <h3 style="color: var(--primary-color);">ÔNIBUS 🔊</h3>
            </div>
            <div onclick="falarTexto('Pão')" style="background: #fff; border: 2px solid var(--secondary-color); padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">🍞</span>
                <h3 style="color: var(--primary-color);">PÃO 🔊</h3>
            </div>
        </div>

        <hr style="margin: 2rem 0; border: 0; border-top: 1px solid #ccc;">

        <h3>Atividade: Associe a Imagem</h3>
        <p>Qual palavra corresponde ao ícone abaixo?</p>
        <div style="text-align: center; margin: 1.5rem 0;">
            <span style="font-size: 4rem;">🍞</span>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button onclick="verificarRespostaMod2('SAÍDA')" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">SAÍDA</button>
            <button onclick="verificarRespostaMod2('PÃO')" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">PÃO</button>
            <button onclick="verificarRespostaMod2('ÔNIBUS')" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">ÔNIBUS</button>
        </div>

        <p id="feedback-mod2" style="margin-top: 1.5rem; font-weight: bold; text-align: center;"></p>
    `,

    pratica: `
        <h2>✍️ Módulo 3: Prática de Escrita</h2>
        <p>Aprender a juntar as partes das palavras (sílabas) ajuda a construir a escrita.</p>

        <div style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
            <h3>Atividade: Monte a Palavra</h3>
            <p>Clique nas sílabas na ordem correta para formar o nome do objeto:</p>
            
            <div style="text-align: center; margin: 1rem 0;">
                <span style="font-size: 4rem;">⚽</span>
            </div>

            <div style="background: #fff; border: 2px dashed var(--primary-color); padding: 1rem; font-size: 2rem; font-weight: bold; text-align: center; min-height: 60px; border-radius: 6px; letter-spacing: 4px;" id="palavra-montada"></div>

            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem;">
                <button onclick="adicionarSilaba('LA')" style="padding: 0.75rem 1.5rem; font-size: 1.3rem; font-weight: bold; cursor: pointer; border-radius: 6px; background-color: var(--secondary-color); color: #fff; border: none;">LA</button>
                <button onclick="adicionarSilaba('BO')" style="padding: 0.75rem 1.5rem; font-size: 1.3rem; font-weight: bold; cursor: pointer; border-radius: 6px; background-color: var(--secondary-color); color: #fff; border: none;">BO</button>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem;">
                <button onclick="limparPalavra()" style="padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; border-radius: 6px; background-color: #d9534f; color: #fff; border: none;">Limpar</button>
                <button onclick="verificarEscrita()" style="padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; border-radius: 6px; background-color: #5cb85c; color: #fff; border: none;">Conferir</button>
            </div>

            <p id="feedback-mod3" style="margin-top: 1.5rem; font-weight: bold; text-align: center;"></p>
        </div>
    `,

    frases: `
        <h2>💬 Módulo 4: Formando Frases</h2>
        <p>Aprender a juntar palavras nos ajuda a expressar pensamentos completos.</p>

        <div style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
            <h3>Atividade: Complete a Frase</h3>
            <p style="font-size: 1.2rem; text-align: center;">"O _____ é um transporte público."</p>

            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem;">
                <button onclick="verificarFrase('ONIBUS')" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">ÔNIBUS</button>
                <button onclick="verificarFrase('PAO')" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">PÃO</button>
                <button onclick="verificarFrase('AMIGO')" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">AMIGO</button>
            </div>

            <p id="feedback-mod4" style="margin-top: 1.5rem; font-weight: bold; text-align: center;"></p>
        </div>
    `,

    placas: `
        <h2>🪧 Módulo 5: Leitura do Mundo</h2>
        <p>Identificar símbolos e avisos no dia a dia garante mais autonomia e segurança.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 2rem 0;">
            <div onclick="falarTexto('Pare')" style="background: #fff; border: 2px solid #d9534f; padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">🛑</span>
                <h3 style="color: #d9534f;">PARE 🔊</h3>
            </div>
            <div onclick="falarTexto('Atenção')" style="background: #fff; border: 2px solid #f0ad4e; padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">⚠️</span>
                <h3 style="color: #f0ad4e;">ATENÇÃO 🔊</h3>
            </div>
            <div onclick="falarTexto('Pessoas com Deficiência')" style="background: #fff; border: 2px solid var(--secondary-color); padding: 1rem; border-radius: 8px; text-align: center; cursor: pointer;">
                <span style="font-size: 2.5rem;">♿</span>
                <h3 style="color: var(--primary-color);">PREFERENCIAL 🔊</h3>
            </div>
        </div>

        <hr style="margin: 2rem 0; border: 0; border-top: 1px solid #ccc;">

        <h3>Atividade: O que significa esta placa?</h3>
        <div style="text-align: center; margin: 1.5rem 0;">
            <span style="font-size: 4rem;">🛑</span>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button onclick="verificarPlaca(false)" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">SIGA EM FRENTE</button>
            <button onclick="verificarPlaca(true)" style="padding: 0.75rem 1.5rem; font-size: 1.1rem; cursor: pointer; border-radius: 6px;">PARADA OBRIGATÓRIA</button>
        </div>

        <p id="feedback-mod5" style="margin-top: 1.5rem; font-weight: bold; text-align: center;"></p>
    `
};

// ==========================================
// FUNÇÕES DE ÁUDIO
// ==========================================

// Fala texto em voz alta em português
function falarTexto(texto) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const mensagem = new SpeechSynthesisUtterance(texto);
        mensagem.lang = 'pt-BR';
        mensagem.rate = 0.9;
        window.speechSynthesis.speak(mensagem);
    }
}

// Toca efeito sonoro sintetizado de acerto/erro
function tocarEfeitoSonoro(tipo) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (tipo === 'sucesso') {
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.3);
        } else if (tipo === 'erro') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.3);
        }
    } catch (e) {
        console.log("Áudio não suportado no navegador.");
    }
}

// ==========================================
// NAVEGAÇÃO E LÓGICA DO APP
// ==========================================

let palavraAtual = "";

function mudarModulo(nomeModulo) {
    const menu = document.getElementById('menu');
    const conteudo = document.getElementById('conteudo');
    const moduloContainer = document.getElementById('modulo-container');

    if (dadosModulos[nomeModulo]) {
        moduloContainer.innerHTML = dadosModulos[nomeModulo];
        menu.classList.add('hidden');
        conteudo.classList.remove('hidden');
        palavraAtual = "";
    }
}

function voltarMenu() {
    const menu = document.getElementById('menu');
    const conteudo = document.getElementById('conteudo');

    conteudo.classList.add('hidden');
    menu.classList.remove('hidden');
    palavraAtual = "";
}

// Validações do Módulo 1
function verificarRespostaMod1(correto) {
    const feedback = document.getElementById('feedback-mod1');
    if (correto) {
        feedback.innerText = "Parabéns! 'Amigo' começa com a letra A.";
        feedback.style.color = "green";
        tocarEfeitoSonoro('sucesso');
        falarTexto("Parabéns! Amigo começa com a letra A.");
    } else {
        feedback.innerText = "Tente novamente! Pense no som inicial da palavra.";
        feedback.style.color = "red";
        tocarEfeitoSonoro('erro');
        falarTexto("Tente novamente.");
    }
}

// Validações do Módulo 2
function verificarRespostaMod2(opcao) {
    const feedback = document.getElementById('feedback-mod2');
    if (opcao === 'PÃO') {
        feedback.innerText = "Correto! Esta imagem representa a palavra PÃO.";
        feedback.style.color = "green";
        tocarEfeitoSonoro('sucesso');
        falarTexto("Correto! Pão.");
    } else {
        feedback.innerText = "Não foi desta vez. Tente selecionar a palavra 'PÃO'.";
        feedback.style.color = "red";
        tocarEfeitoSonoro('erro');
        falarTexto("Tente novamente.");
    }
}

// Validações do Módulo 3
function adicionarSilaba(silaba) {
    palavraAtual += silaba;
    document.getElementById('palavra-montada').innerText = palavraAtual;
    falarTexto(silaba);
}

function limparPalavra() {
    palavraAtual = "";
    document.getElementById('palavra-montada').innerText = "";
    document.getElementById('feedback-mod3').innerText = "";
}

function verificarEscrita() {
    const feedback = document.getElementById('feedback-mod3');
    if (palavraAtual === "BOLA") {
        feedback.innerText = "Excelente! Você formou a palavra BOLA corretamente.";
        feedback.style.color = "green";
        tocarEfeitoSonoro('sucesso');
        falarTexto("Excelente! Você formou a palavra Bola.");
    } else if (palavraAtual === "") {
        feedback.innerText = "Clique nas sílabas acima para formar a palavra.";
        feedback.style.color = "#555";
    } else {
        feedback.innerText = "Quase lá! Lembre-se: 'BO' vem antes de 'LA'. Clique em Limpar e tente de novo.";
        feedback.style.color = "red";
        tocarEfeitoSonoro('erro');
        falarTexto("Quase lá! Tente de novo.");
    }
}

// Validações do Módulo 4
function verificarFrase(opcao) {
    const feedback = document.getElementById('feedback-mod4');
    if (opcao === 'ONIBUS') {
        feedback.innerText = "Muito bem! 'O ônibus é um transporte público.'";
        feedback.style.color = "green";
        tocarEfeitoSonoro('sucesso');
        falarTexto("Muito bem! O ônibus é um transporte público.");
    } else {
        feedback.innerText = "Tente de novo! Pense em qual palavra completa melhor a frase.";
        feedback.style.color = "red";
        tocarEfeitoSonoro('erro');
        falarTexto("Tente novamente.");
    }
}

// Validações do Módulo 5
function verificarPlaca(correto) {
    const feedback = document.getElementById('feedback-mod5');
    if (correto) {
        feedback.innerText = "Correto! A placa PARE indica parada obrigatória.";
        feedback.style.color = "green";
        tocarEfeitoSonoro('sucesso');
        falarTexto("Correto! Parada obrigatória.");
    } else {
        feedback.innerText = "Atenção! Esta placa indica que você deve parar.";
        feedback.style.color = "red";
        tocarEfeitoSonoro('erro');
        falarTexto("Tente novamente.");
    }
}