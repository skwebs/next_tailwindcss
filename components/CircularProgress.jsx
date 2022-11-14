import styles from '../styles/CircularProgress.module.scss';


const CircularProgress = ({ color = null, size = 30, className } = {}) => {
    return (
        <>
            <svg stroke={color && color} className={`${color ? styles.mono : styles.multi} ${styles.CircularProgress} ${className}`} width={size} height={size} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className={styles.circle} fill="none" strokeWidth="6" strokeLinecap="" cx="33" cy="33" r="30"></circle>
            </svg>
        </>
    )
}

export default CircularProgress
