import favicon from "./img/favicon.png";
import "./css/general.css";
import "./css/style.css";
import "./css/queries.css";
import { Helmet } from "react-helmet";

function Head() {
  return (
    // return <p>Hello</p>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="descritpion"
        content="Omnifood is AI-powered food subscription thet will make yuou eat healty again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
      />
      {/* <link rel="icon" href="./img/favicon.png" /> */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
      <link rel="manifest" href="manifest.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/general.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/queries.css" />
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <script defer src="./js/script.js">
        {/* script */}
      </script>
      <script
        defer
        src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
      ></script>
      <title>Omnifood &mdash; Never cook again</title>
    </Helmet>
  );
}

export default Head;
