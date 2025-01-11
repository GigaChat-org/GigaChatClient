import Post from "./Post";
import TopPost from "./TopPost";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/post')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  let topPost = null;
  let remPost = null;

  if (posts.length > 0) {
    topPost = posts[0];
    remPost = posts.slice(1);
  }

  return (
    <div className="space-y-8">
      <div className="latest-post">
        {topPost != null && <TopPost {...topPost} />}
      </div>
      <div className="post-cont grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {remPost != null && remPost.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
