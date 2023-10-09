import React, { useState, useEffect } from "react";
import CustomInput from "./Input";

const LikeApp = () => {
  const initiallikes = JSON.parse(localStorage.getItem("likes"));
  const [likes, setlikes] = useState(initiallikes);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  // Load likes from local storage when the component mounts
  //   useEffect(() => {
  // const initiallikes = JSON.parse(localStorage.getItem("likes"));
  //     setlikes(initiallikes);
  //   },);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  });

  const addlike = () => {
    {
      const newlike = {
        id: new Date().getTime(),
        text: text,
      };
      setlikes([...likes, newlike]);
      setText("");
    }
  };

  const updatelike = (id) => {
    if (editText !== "") {
      const updatedlikes = likes.map((like) =>
        like.id === id ? { ...like, text: editText } : like
      );

      setlikes(updatedlikes);
      setEditIndex(-1);
      setEditText("");
    }
  };

  const deletelike = (id) => {
    const updatedlikes = likes.filter((like) => like.id !== id);
    setlikes(updatedlikes);
  };
  function onchange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Like App</h1>
      <CustomInput
        placeholder={"enter the likes "}
        title={"Likes"}
        onchange={onchange}
        value={text}
        name={"color"}
        type={"text"}
      />
      <button onClick={addlike}>Add</button>
      <ul>
        {likes.map((like) => (
          <li key={like.id}>
            {editIndex === like.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updatelike(like.id)}>Update</button>
                <button onClick={() => setEditIndex(-1)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{like.text}</p>
                <button onClick={() => setEditIndex(like.id)}>Edit</button>
                <button onClick={() => deletelike(like.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikeApp;
