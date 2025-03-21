import { formatDistanceToNow } from "date-fns";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const AnswerCard = ({ answer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-start">
        <div className="mr-4">
          <UserCircleIcon className="h-10 w-10 text-indigo-500" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-indigo-600">{answer.username}</h4>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(answer.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
          <p className="text-gray-700">{answer.body}</p>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
