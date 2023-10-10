import { useState } from "react";
import { useFormik } from "formik";

const validateEmployee = (empData) => {
  const errors = {};

  if (!empData.tweet) {
    errors.tweet = "Please Enter  tweet";
  } else if (empData.tweet.length > 20) {
    errors.tweet = "tweet cannot exceed 20 characters";
  }

  return errors;
};

function CustomForm({ addTweet }) {
  const [tweet, setTweet] = useState("");
  function handleFormSumbit(e) {
    e.preventDefault();
    addTweet(tweet);
    console.log("hiiii");
  }
  function onchange(e) {
    console.log(e.target.value);
    setTweet(e.target.value);
  }

  const formik = useFormik({
    initialValues: {
      tweet: "",
    },
    validate: validateEmployee,
    onSubmit: (value) => {
      console.log(value.tweet);
      setTweet(value.tweet);
      addTweet(tweet);
      formik.resetForm();

      // console.log(kk.values(tweet));
    },
    // onChange: (e) => {
    //   setTweet(e.target.value);
    //   console.log(e.target.value);
    // },
    handleChange: (e) => {
      console.log(e.taget.value);
    },
  });

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Add Tweet</span>
          </div>
          <form onSubmit={handleFormSumbit}>
            <div className="row">
              <input
                type="text"
                placeholder="Enter the tweet here"
                required
                onChange={(e) => setTweet(e.target.value)}
              />
            </div>
            <div className="form-add">
              <button className="submit-btn" type="submit" disabled={!tweet}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <p>
            <input
              type="text"
              name="tweet"
              value={formik.values.tweet}
              onChange={formik.handleChange}
              // onChange={onchange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.tweet && formik.errors.tweet ? (
              <span style={{ color: "red" }}>{formik.errors.tweet}</span>
            ) : null}
          </p>

          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}
export default CustomForm;
