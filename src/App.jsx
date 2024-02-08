import { useState } from "react";
import "./App.css";
import NavBar from "./composants/Navbar";
import Post from "./composants/Post";
import p from "./post";
export default function App() {
  // Debut fonction pour liker
  let [posts, setPost] = useState(p);
  const liker = (data) => {
    const donneeCopier = [...posts];
    const index = posts.indexOf(data);
    donneeCopier[index] = { ...posts[index], liker: !posts[index].liker };
    setPost(donneeCopier);
  };
  const effacerLike = (id) => {
    const p = posts.filter((p) => {
      return p.id != id;
    });
    setPost(p);
  };
  const nbrePost = () => {
    const nbPost = posts.filter((p) => p.liker);
    return nbPost.length;
  };

  return (
    <>
      <div className="app">
        <NavBar nbPost={nbrePost} />
        {posts.map((p) => (
          <Post
            data={p}
            key={p.id}
            liker={liker}
            effacerLike={effacerLike}
            nbPost={nbrePost}
          />
        ))}
      </div>
    </>
  );
}

// Fin fonction pour liker
