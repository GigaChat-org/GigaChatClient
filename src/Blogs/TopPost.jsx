import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function TopPost({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <div className="top-post border border-gray-800 mb-12">
      <div className="">
        <Link to={`post/${_id}`}>
          <img className="top-post-image w-full max-h-150 object-cover" src={cover} alt="" />
        </Link>
      </div>
      <div className="texts px-2.5 pb-2.5">
        <Link to={`post/${_id}`}>
          <div className="post-heading text-xl font-bold overflow-hidden text-ellipsis">{title}</div>
        </Link>
        <p className="info text-gray-600 font-bold text-base flex gap-2.5">
          <time className="text-sm text-gray-500">
            {createdAt ? format(new Date(createdAt), "MMMM dd, yyyy") : "Invalid Date"}
          </time>
        </p>
        <p className="summary mt-2.5 text-base leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}
