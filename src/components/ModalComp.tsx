import styles from "./ModalComp.module.css"

export type TModalProps = {
    showModal: boolean
    toggleModal: React.Dispatch<React.SetStateAction<boolean>>
    handleRestart: () => void
    moves: number
}

const ModalComp = ({ showModal, toggleModal, handleRestart, moves }: TModalProps) => {

    const getEmoji = (moves: number) => {
        if (moves <= 10) return "🤯"       
        if (moves <= 16) return "😎"       
        if (moves <= 24) return "😅"       
        return "💀"
    }

    const emoji = getEmoji(moves)

    return (
        <section
            className={styles.final_result}
            style={{ visibility: showModal ? "visible" : "hidden" }}
        >
            <button onClick={() => toggleModal(false)} className={styles.final_btn}>X</button>

            <div className={styles.final_container}>
                <h2>Final Score</h2>
                <span className={styles.score}>{moves} moves</span>

                <span className={`${styles.final_icon} final_icon animate_delay-1s`}>
                    {emoji}
                </span>

                <span onClick={handleRestart} className={styles.final_text}>
                    Click to play again
                </span>
            </div>
        </section>
    )
}

export default ModalComp
