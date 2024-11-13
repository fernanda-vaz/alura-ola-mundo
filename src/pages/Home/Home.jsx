import styles from "./style.module.css";
import posts from "src/json/posts.json";
import PostCard from "src/components/PostCard/PostCard";

export default function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
