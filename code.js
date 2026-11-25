const textArea = document.getElementById("txt");
const voiceSelect = document.getElementById("sel");
const button = document.getElementById("but");
const characterCount = document.getElementById("character-count");
const statusMessage = document.getElementById("status-message");

let voices = [];

async function loadVoices() {
    if (typeof puter === "undefined") {
        voiceSelect.innerHTML = "<option>API de voz indisponível</option>";
        statusMessage.textContent = "Não foi possível carregar a API Puter. Verifique sua conexão e recarregue a página.";
        return;
    }

    try {
        const availableVoices = await puter.ai.txt2speech.listVoices({
            provider: "aws-polly"
        });
        voices = availableVoices.filter(
            voice => voice.language?.code?.toLowerCase() === "pt-br"
        );

        if (voices.length === 0) {
            voiceSelect.innerHTML = "<option>Nenhuma voz em português disponível</option>";
            statusMessage.textContent = "A Puter não retornou vozes em português do Brasil.";
            return;
        }

        voiceSelect.replaceChildren(
            ...voices.map(voice => new Option(voice.name, voice.id))
        );
        voiceSelect.disabled = false;
        button.disabled = false;
        statusMessage.textContent = "Vozes em português carregadas. Pronto para gerar a fala.";
    } catch (error) {
        voiceSelect.innerHTML = "<option>Falha ao carregar vozes</option>";
        statusMessage.textContent =
            `Erro ao carregar as vozes: ${error.message || "tente novamente."}`;
    }
}

loadVoices();

textArea.addEventListener("input", () => {
    characterCount.textContent =
        `${textArea.value.length} caractere${textArea.value.length === 1 ? "" : "s"}`;
});

button.addEventListener("click", async () => {
    const text = textArea.value.trim();

    if (!text) {
        statusMessage.textContent = "Digite algum texto primeiro.";
        textArea.focus();
        return;
    }

    if (text.length > 3000) {
        statusMessage.textContent = "O texto deve ter no máximo 3.000 caracteres.";
        return;
    }

    try {
        button.disabled = true;
        statusMessage.textContent = "Gerando áudio...";
        const selectedVoice = voices.find(voice => voice.id === voiceSelect.value);
        if (!selectedVoice) {
            throw new Error("Selecione uma voz válida.");
        }

        const audio = await puter.ai.txt2speech(text, {
            provider: "aws-polly",
            voice: selectedVoice.id,
            engine: selectedVoice.supported_engines?.includes("neural")
                ? "neural"
                : "standard",
            language: selectedVoice.language.code
        });

        statusMessage.textContent = "Reproduzindo...";
        await audio.play();
    } catch (error) {
        statusMessage.textContent =
            `Erro ao gerar a fala: ${error.message || "tente novamente."}`;
    } finally {
        button.disabled = false;
    }
});
