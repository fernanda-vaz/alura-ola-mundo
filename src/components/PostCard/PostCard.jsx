import { Link } from "react-router-dom";
import styles from "./style.module.css";
import PropTypes from "prop-types";
import MyButton from "../MyButton/MyButton";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          src={`../../../public/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
          className={styles.cover}
        />

        <h2 className={styles.title}>{post.titulo}</h2>

        <MyButton>Ler</MyButton>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  post: PropTypes.node,
};
