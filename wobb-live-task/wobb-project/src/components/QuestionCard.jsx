import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const QuestionCard = ({ question }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <Link to={`/questions/${question.id}`}>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200 mb-2">
            {question.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{question.body}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium text-indigo-600">
              {question.username}
            </span>
            <span className="mx-2">•</span>
            <span>
              {formatDistanceToNow(new Date(question.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400 mr-1" />
            <span>{question.answers?.length || 0} answers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
