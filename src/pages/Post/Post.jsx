import { Route, Routes, useParams } from "react-router-dom";
import posts from "src/json/posts.json";
import PostModel from "../../components/PostModel/PostModel";
import ReactMarkdown from "react-markdown";
import "./style.css";
import NotFound from "src/pages/NotFound/NotFound";
import DefaultPage from "../Default/DefaultPage";
import styles from "./style.module.css";
import PostCard from "src/components/PostCard/PostCard";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModel
              fotoCapa={`../../../public/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}
