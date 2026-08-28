document.addEventListener('DOMContentLoaded', function () {
    const campoSenha = document.getElementById('senha');
    const btnMostrarSenha = document.getElementById('btn-mostrar-senha');

    if (campoSenha && btnMostrarSenha) {
        btnMostrarSenha.addEventListener('click', function () {
            if (campoSenha.type === 'password') {
                campoSenha.type = 'text';
                btnMostrarSenha.textContent = '🔒';
            } else {
                campoSenha.type = 'password';
                btnMostrarSenha.textContent = '👁️';
            }
        });
    }
});
