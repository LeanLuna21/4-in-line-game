import { Square } from "./Square"

export const WinnerModal = ({winner, resetGame}) => {
    if (winner === null) return null
    
    const winnerText = winner === false ? 'Empate' : '¡Ganaste!'
    const winnerClass = winnerText === 'Empate' ? "tie" : 'win'

    return (
        <section className='winner'>
            <div className='text'>

                <header className={winnerClass}>
                    {winner && <Square visible> {winner} </Square>}
                </header>
                <h2 className='title'>
                    {winnerText}
                </h2>

            </div>

            <button onClick={resetGame}>
                Restart
            </button>
        </section>
    )
}