import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../App.css";
import React, { useState } from "react";

function Workout() {
  const movieSchema = Yup.object().shape({
    movieName: Yup.string()
      .min(2, "required more than 2")
      .max(50, "require less than 50")
      .required("Required"),
    Rating: Yup.number()
      .min(2, "required more than 2")
      .max(10, "require less than 10")
      .required("Required"),
    url: Yup.string().url("Invalid url").required("Required"),
  });
  const [movieList, setMovieList] = useState([]);

  return (
    <div>
      <div>
        <h1></h1>
        <Formik
          initialValues={{
            movieName: "",
            Rating: 0,
            url: "",
          }}
          validationSchema={movieSchema}
          onSubmit={(values) => {
            console.log(values);
            const newMovie = {
              movieName: values.movieName,
              Rating: values.Rating,
              url: values.url,
            };
            setMovieList([...movieList, newMovie]);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="">MovieName</label> <br />
              <Field name="movieName" type="text" />
              {errors.movieName && touched.movieName ? (
                <div>{errors.movieName}</div>
              ) : null}{" "}
              <br />
              <label htmlFor="">Rating</label> <br />
              <Field name="Rating" type="number" />
              {errors.Rating && touched.Rating ? (
                <div>{errors.Rating}</div>
              ) : null}{" "}
              <br />
              <label htmlFor="">Image</label> <br />
              <Field name="url" type="url" />
              {errors.url && touched.url ? <div>{errors.url}</div> : null}
              <br />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <>
        {movieList.length > 0 && (
          <div className="movielist">
            <h2>Movie List:</h2>
            <div className="movie-list">
              {movieList.map((movie, index) => (
                <div className="movie-card" key={index}>
                  <h1>{movie.name}</h1>
                  <h3>Rating: {movie.rating}</h3>
                  <img src={movie.url} alt={movie.name} />
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Workout;
