document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    let turn = document.querySelector("#turn");
    console.log(turn)

    if (playerTurn == 0) {
        turn.innerHTML = `<h2>Player ✖️ turn</h2>`
    } else {
        turn.innerHTML = `<h2>Player ⭕ turn</h2>`
    }

    if (handleMove(position)) {
        if (playerTurn == 0) {
            // Função para lançar confetes das laterais
            confetti({
                particleCount: 150, // Aumenta a quantidade de confetes
                spread: 60,         // Ângulo de dispersão
                origin: { x: 0, y: 0.6 }, // Origem dos confetes na lateral esquerda
                colors: ['#785DC8', '#785DC8']
            });

            confetti({
                particleCount: 150, // Aumenta a quantidade de confetes
                spread: 60,         // Ângulo de dispersão
                origin: { x: 1, y: 0.6 }, // Origem dos confetes na lateral direita
                colors: ['#785DC8', '#785DC8']
            });
        } else {
            // Função para lançar confetes das laterais
            confetti({
                particleCount: 150, // Aumenta a quantidade de confetes
                spread: 60,         // Ângulo de dispersão
                origin: { x: 0, y: 0.6 }, // Origem dos confetes na lateral esquerda
                colors: ['#F92F60', '#F92F60']
            });

            confetti({
                particleCount: 150, // Aumenta a quantidade de confetes
                spread: 60,         // Ângulo de dispersão
                origin: { x: 1, y: 0.6 }, // Origem dos confetes na lateral direita
                colors: ['#F92F60', '#F92F60']
            });
        }
        setTimeout(() => {
            let winnerMessage = playerTurn == 0 ? 'Player ✖️ won!!' : 'Player ⭕ won!!';

            // Atualiza o conteúdo do modal
            document.querySelector('#winModal .modal-body').textContent = winnerMessage;

            // Exibe o modal
            let winModal = new bootstrap.Modal(document.getElementById('winModal'));
            winModal.show();

            // Adiciona evento ao botão "Jogar Novamente"
            document.getElementById('playAgainButton').addEventListener('click', function () {
                location.reload(); // Recarrega a página
            });
        }, 750);
    }


    if (draw) {
        setTimeout(() => {
            let Message = "It was a draw!!";

            // Atualiza o conteúdo do modal
            document.querySelector('#winModal .modal-body').textContent = Message;

            // Exibe o modal
            let winModal = new bootstrap.Modal(document.getElementById('winModal'));
            winModal.show();

            // Adiciona evento ao botão "Jogar Novamente"
            document.getElementById('playAgainButton').addEventListener('click', function () {
                location.reload(); // Recarrega a página
            });
        }, 10);
    }


    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class="${symbol}"></div>`
        }

    })
}