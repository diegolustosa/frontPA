 function updateTextarea(number) {
      // Obtém o conteúdo atual do textarea
      var currentText = document.getElementById('numberDisplay').value;
      // Adiciona o número clicado ao final do conteúdo atual
      document.getElementById('numberDisplay').value = currentText + number;
    }

function calculate() {
    try {
      // Avalia a expressão matemática no textarea
      var result = eval(document.getElementById('numberDisplay').value);
      // Exibe o resultado na textarea
      document.getElementById('numberDisplay').value = result;
    } catch (e) {
      // Exibe uma mensagem de erro se a expressão for inválida
      document.getElementById('numberDisplay').value = 'Erro';
    }
  }

    function clearTextarea() {
      // Limpa o conteúdo da textarea
      document.getElementById('numberDisplay').value = '';
    }