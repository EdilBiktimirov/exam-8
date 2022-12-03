import React, {MouseEventHandler} from 'react';
import {Link} from "react-router-dom";

interface Props {
  text: string;
  author: string;
  id: string;
  onDeleteBtnClick: MouseEventHandler;
}

const Quote: React.FC<Props> = ({text, author, id, onDeleteBtnClick}) => {

  return (
    <div className="card p-3 mb-2 shadow-sm d-flex justify-content-between flex-row">
      <div>
        <p className="fst-italic">"{text}"</p>
        <p><span className="fw-bold">Author: </span>{author}</p>
      </div>
      <div className="d-flex flex-column">
        <Link
          to={"/quotes/" + id + "/edit"}
          className="btn btn-info mb-2">Edit</Link>
        <button
          className="btn btn-danger"
          onClick={onDeleteBtnClick}>Delete
        </button>
      </div>
    </div>
  );
};

export default Quote;