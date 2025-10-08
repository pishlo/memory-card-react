import type { TCard } from "../types/card.types"
import styles from "./CardComp.module.css"

export type TCardProps = {
	clickProp: (card: TCard) => void
	card: TCard
}

const CardComp = ({ clickProp, card }: TCardProps) => {
	const handleClick = () => {
		if (!card.flipped) clickProp(card)
	}

	return (
		<article onClick={handleClick} className={`${styles.card} ${card.flipped ? styles.flipped : ""}`}>
			<div className={styles.cardInner}>
				<div className={styles.cardFront}>
					<img src={`./imgs/${card.image}`} alt={card.image} />
				</div>
				<div className={styles.cardBack}></div>
			</div>
		</article>
	)
}

export default CardComp