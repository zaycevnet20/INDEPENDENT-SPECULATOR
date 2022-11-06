import styles from './NewsItem.module.css';
import cn from 'classnames';

export const NewsItem: React.FC = () => {

  return (
    <div className={cn('news-item-wrapper', styles.itemWrapper)}>
      <div className={cn('item', styles.item)}>
        <div className={styles.wrapper}>
          <div className={styles.imageBlock} style={{ background: "url(/test-post.jpg)" }}></div>
          <div className={styles.date}>February 05, 2020</div>
          <div className={styles.title}>Tittle - Et harum quidem rerum facilis est et exp expedita distinctio. Libero tempore.</div>
          <div className={styles.read}>
            <a>Read now
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.311523 5.90002C0.311523 5.75249 0.369762 5.61101 0.473427 5.50669C0.577092 5.40237 0.717692 5.34377 0.864297 5.34377H13.902L10.4229 1.84384C10.3191 1.73939 10.2607 1.59773 10.2607 1.45002C10.2607 1.30231 10.3191 1.16064 10.4229 1.05619C10.5266 0.951745 10.6674 0.893066 10.8142 0.893066C10.961 0.893066 11.1018 0.951745 11.2056 1.05619L15.6278 5.50619C15.6792 5.55786 15.7201 5.61924 15.748 5.68682C15.7758 5.7544 15.7902 5.82685 15.7902 5.90002C15.7902 5.97318 15.7758 6.04563 15.748 6.11321C15.7201 6.18079 15.6792 6.24217 15.6278 6.29384L11.2056 10.7438C11.1018 10.8483 10.961 10.907 10.8142 10.907C10.6674 10.907 10.5266 10.8483 10.4229 10.7438C10.3191 10.6394 10.2607 10.4977 10.2607 10.35C10.2607 10.2023 10.3191 10.0606 10.4229 9.95619L13.902 6.45626H0.864297C0.717692 6.45626 0.577092 6.39766 0.473427 6.29334C0.369762 6.18903 0.311523 6.04754 0.311523 5.90002Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
