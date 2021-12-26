import React from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualities";

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onBookmark,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualities {...qual} key={qual.name} />
        ))}
      </td>
      <td className="">{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onBookmark(_id)} />
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(_id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};
export default User;
