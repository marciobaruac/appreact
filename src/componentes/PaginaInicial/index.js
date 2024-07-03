// Importando as dependências necessárias
import React, { useState } from 'react';
import './estilo.css'; // Importando o arquivo de estilos CSS

// Definindo o componente funcional PaginaInicial
export default function PaginaInicial() {
  // Declarando uma variável de estado 'numeroAleatorio' com valor inicial 1 e uma função para atualizá-la 'setNumeroAleatorio'
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

  // Função para gerar um número aleatório entre 1 e 100 atualizar o estado

  // Funçã Math.random gera numero aleatorio
  // Função Math.florr para arredondar valor
  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100) + 1); // Gera um número aleatório entre 1 (inclusivo) e 100 (exclusivo)
    setNumeroAleatorio(novoNumero); // Atualiza o estado com o novo número gerado
  }

  // Renderizando a estrutura JSX do componente
  return (
    <div className="conteudo-centralizado"> {/* Div principal com classe CSS para centralizar o conteúdo */}
      <h3>Número aleatório:</h3> {/* Cabeçalho menor */}
      <h1>{numeroAleatorio}</h1> {/* Exibe o número aleatório atual */}

      <div className='area-botao'> {/* Div para a área do botão */}
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>
        
        <button onClick={gerarNumero}> {/* Botão que chama a função gerarNumero quando clicado */}
          Gerar número
        </button>
      </div>
    </div>
  );
}
