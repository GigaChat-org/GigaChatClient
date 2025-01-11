import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);

  async function createNewPost(ev) {
    ev.preventDefault();

    // Validation
    if (!title || !summary || !content || !files) {
      setError("All fields are required.");
      return;
    }

    try {
      const data = new FormData();
      data.set('title', title);
      data.set('summary', summary);
      data.set('content', content);
      data.set('file', files[0]);

      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        setError("Failed to create the post. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to="/blogs" />;
  }

  return (
    <form onSubmit={createNewPost} className="space-y-4 max-w-md mx-auto p-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={ev => setTitle(ev.target.value)}
        className="block w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
        className="block w-full p-2 border rounded"
      />
      <input
        type="file"
        onChange={ev => setFiles(ev.target.files)}
        className="block w-full"
      />
      <Editor value={content} onChange={setContent} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Post</button>
    </form>
  );
}
