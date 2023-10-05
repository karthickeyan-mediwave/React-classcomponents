import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../App.css";

function Movie() {
  const moviesPlayload: any = [
    {
      id: "1",
      movieName: "Joe",
      Rating: 5,
      url: "kk",
    },
  ];
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
            moviesPlayload.push(values);
            console.log(moviesPlayload);
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
        {moviesPlayload.map(function (data: any, index: any) {
          return (
            <div>
              <div key={index}>
                <h2> movieName: {data.movieName} </h2>
                <p>movieName: {data.Rating}</p>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Movie;
