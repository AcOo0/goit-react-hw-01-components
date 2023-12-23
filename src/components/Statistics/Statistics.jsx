import styles from './statistics.module.css'
import getRandomHexColor from './randomColor';

const Statistics = ({ title, stats = [] }) => { 
    const elements = stats.map(({id, label, percentage}) => <li key={id} className={styles.item} style={{backgroundColor: getRandomHexColor()}}>
        <span className={styles.label}>{label} </span>
        <span className={styles.percentage}> {percentage}%</span>
    </li>);
    return (
        <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {elements}
            </ul>
        </section>
    )
}

export default Statistics;