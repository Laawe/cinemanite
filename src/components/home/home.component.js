import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import "./home.component.css"


export default function HomeComponent() {
  return(
      <body>
    <Jumbotron className="jumbotron_custom">
              <h1 aria-label className="cinema_webpage--title">cinemanite</h1>
              <p aria-label className="cinema_webpage__header--text">
            We want to create (short/large) films that expose and preserve ideas/feelings of young mexican filmmakers.
        </p>
        <Link className="cinema_webpage--link" to="/short-films" aria-label>Go see our films!</Link>
    </Jumbotron>
    <main className="container cinema_webpage">
        {/* <section className="cinema_webpage__section">
            <h3>Plátanos Fritos, our most recent short film.</h3>
            <div className="cinema_webpage__iframe">
                <iframe className="cinema_webpage__iframe--frame" width="320" height="315" src="https://www.youtube.com/embed/CitBSGlFxgo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section> */}
        <section>
        </section>
    </main>
      </body>
  );
};

  