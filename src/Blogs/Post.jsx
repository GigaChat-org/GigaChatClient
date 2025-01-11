import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({_id, title, summary, cover, content, createdAt, author}) {
  return (
    <div className="post border border-gray-300 rounded-md shadow-md overflow-hidden flex flex-col">
      <div className="">
        <Link to={`post/${_id}`}>
          <img className="post-image w-full h-48 object-cover" src={cover} alt="" />
        </Link>
      </div>
      <div className="texts p-4 space-y-2">
        <Link to={`post/${_id}`}>
          <div className="post-heading text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">{title}</div>
        </Link>
        <p className="info text-sm text-gray-500">
          <time>{createdAt ? format(new Date(createdAt), "MMMM dd, yyyy") : "Invalid Date"}</time>
        </p>
        <p className="summary text-gray-700">{summary}</p>
      </div>
    </div>
  );
}
