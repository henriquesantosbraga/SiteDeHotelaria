
const campoSenha = document.getElementById('senha');
const btnMostrarSenha = document.getElementById('btn-mostrar-senha');

btnMostrarSenha.addEventListener('click', function() {
    
    // 3. Verificamos o tipo atual do input de senha
    if (campoSenha.type === 'password') {
        // Se estiver escondido, mudamos para 'text' (mostra a senha)
        campoSenha.type = 'text';
        btnMostrarSenha.textContent = '🔒'; // Muda o ícone para um cadeado
    } else {
        // Se já estiver aparecendo, mudamos de volta para 'password' (esconde)
        campoSenha.type = 'password';
        btnMostrarSenha.textContent = '👁️'; // Muda o ícone de volta para o olhinho
    }
});