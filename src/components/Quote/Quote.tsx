import React from 'react';
import {Link, useParams} from "react-router-dom";

interface Props {
  text: string;
  author: string;
  id: string;
}

const Quote: React.FC<Props> = ({text, author, id}) => {



  return (
    <div className="card">
      <p>{text}</p>
      <p>{author}</p>
      <Link to={"quotes/" + id + "/edit"} className="btn" >Edit</Link>
      <button className="btn">Delete</button>
    </div>
  );
};

export default Quote;