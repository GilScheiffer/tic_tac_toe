document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            let winnerMessage = playerTurn == 0 ? 'Player ✖️ won!!' : 'Player ⭕ won!!';
            
            // Atualiza o conteúdo do modal
            document.querySelector('#winModal .modal-body').textContent = winnerMessage;
    
            // Exibe o modal
            let winModal = new bootstrap.Modal(document.getElementById('winModal'));
            winModal.show();
    
            // Adiciona evento ao botão "Jogar Novamente"
            document.getElementById('playAgainButton').addEventListener('click', function() {
                location.reload(); // Recarrega a página
            });
        }, 10);
    }
    
    
    updateSquares();
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = `<div class="${symbol}"></div>`
        }

    })
}