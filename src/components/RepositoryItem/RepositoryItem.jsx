import styles from "./repositoryItem.module.scss";

export const RepositoryItem = ({ repositoryName, description, html_url }) => {
  return (
    <div className={styles["repository-item"]}>
      <a className={styles["repository-name"]} href={html_url} target='_blank'>
        {repositoryName}
      </a>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
