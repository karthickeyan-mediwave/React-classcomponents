import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
function Movie() {
  const movieSchema = Yup.object().shape({
    movieName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    Rating: Yup.number()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    url: Yup.string().url("Invalid url").required("Required"),
  });

  return (
    <div>
      <h1></h1>
      <Formik
        initialValues={{
          movieName: "",
          Rating: "",
          url: "",
        }}
        validationSchema={movieSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="movieName" type="text" />
            {errors.movieName && touched.movieName ? (
              <div>{errors.movieName}</div>
            ) : null}
            <Field name="Rating" type="text" />
            {errors.Rating && touched.Rating ? (
              <div>{errors.Rating}</div>
            ) : null}
            <Field name="url" type="url" />
            {errors.url && touched.url ? <div>{errors.url}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {/* <h2>{movieName}</h2>
      <h2>{Rating}</h2>
      <img src={url} /> */}
    </div>
  );
}

export default Movie;
