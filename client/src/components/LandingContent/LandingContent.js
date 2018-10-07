import React from "react";
import "./LandingContent.css";

const LandingContent = () => (
    <div className="landingcontent">
        <table>
            <tbody>
                <tr>
                    <td>
                        <div className="row row-fix">
                            <div className="col s12 m12">
                                <h4 className="center-align animated fadeInUpBig"><i className="material-icons">local_movies</i> Whats Trending? </h4>
                                <p className="center-align animated fadeInUpBig">Take a look at new and popular movies being watched among the MyMovieList community</p>
                                <ul className="carousel animated fadeInUpBig">

                                    <li className="carousel-item">
                                        <img alt="" src="venom.jpg" />
                                    </li>

                                    <li className="carousel-item">
                                        <img alt="" src="firstMan.jpg" />
                                    </li>

                                    <li className="carousel-item">
                                        <img alt="" src="halloween.jpg" />
                                    </li>

                                    <li className="carousel-item">
                                        <img alt="" src="nun.jpg" />
                                    </li>

                                    <li className="carousel-item">
                                        <img alt="" src="nightSchool.jpg" />
                                    </li>

                                    <li className="carousel-item">
                                        <img alt="" src="wbr.jpg" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td className="table-format-left animated bounceInDown delay-2s"><h5 className="table-heading red-text"><i className="fas fa-user-friends"></i> Share with your friends.</h5><br></br><span>With a thriving community, chat with others and compare lists with friends!</span></td>
                    <td><div className="row">
                        <div className="col s12 m7">
                            <div className="card animated fadeInUp delay-2s">
                                <div className="card-image">
                                    <img src="poster2.png" alt="Pulp Fiction movie scene"></img>
                                </div>
                                <div className="card-content">
                                    <p className="black-text">Keep track of your own personal movie list. Share with others. Compare movie lists. All in one place.</p>
                                </div>
                            </div>
                        </div>
                    </div></td>
                </tr>
                <tr>
                    <td className="table-format-left fadeInLeftBig animated delay"><img src="poster.jpg" className="img-poster" alt="Interstellar movie poster"></img></td>
                    <td className="table-right bounceInRight animated delay"><h5 className="table-heading yellow-text"><i className="fas fa-star-half"></i> Score Your Movies</h5><br></br>Score the movies on your list from 0-10. Did you like the movie? Score a 10. Hate the movie? Score a 0.</td>
                </tr>
                <tr>
                    <td className="table-format-left bounceInLeft animated delay-2"><h5 className="table-heading green-text"><i className="far fa-lightbulb"></i> Never Forget</h5><br></br>Never forget the movies you watched or what scores you gave. Keep track of it all in one place.</td>
                    <td><div className="row">
                        <div className="col s12 m5">
                            <div className="card-panel deep-purple flipInY animated delay-2">
                                <span className="white-text"><i className="fas fa-question"></i> What are you waiting for? Sign up today.
                            </span>
                            </div>
                        </div>
                    </div></td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default LandingContent;
