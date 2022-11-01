import React, { useState } from "react";

function PostTable(props) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>UserId</td>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {props.map((value) => {
            return (
              <tr>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const Post = (props) => {
  const [userId, setUserId] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [array, setArray] = useState([...props.posts]);

  function onClick() {
    const object = { userId, id, title, body };
    setArray([...array, object]);
    setUserId("");
    alert("data added succesfully..!! you can see in table")
  }

  return (
    <div>
      <div class="inputBody m-3">
        <div class="input-group">
          <span class="input-group-text">
            <label>
               userId 
            </label>
          </span>
          <textarea
            onChange={(e) => setUserId(e.target.value)}
            class="form-control"
            placeholder=""
            
          ></textarea>
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">
            <label>
              Id 
            </label>
          </span>
          <textarea
            onChange={(e) => setId(e.target.value)}
            class="form-control"
            placeholder=""
           
          ></textarea>
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">
            <label>
              Title
            </label>
          </span>
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            class="form-control"
            placeholder=""
            
          ></textarea>
        </div>
        <br />
        <div class="input-group">
          <span class="input-group-text">
            <label>
              Body 
            </label>
          </span>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            class="form-control"
            placeholder=""
            
          ></textarea>
        </div>
        <div class="successButton mt-3">
          <button onClick={onClick} type="button" class="btn btn-success">
            SUBMIT
          </button>
        </div>
      </div>
      <div class="m-3">{PostTable(array)}</div>
    </div>
  );
};

export default Post;
