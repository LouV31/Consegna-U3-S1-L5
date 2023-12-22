import { Col, Container, Row } from "react-bootstrap";

import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";

class BatMan extends Component {
    state = {
        searchQ: "Batman",
        films: { Search: [] },
        isLoading: false,
        hasError: false,
        errorMessage: "BLAAAAA",
    };
    URL = `http://www.omdbapi.com/?s=${this.state.searchQ}&apikey=438ff31f`;

    fetchFilms = async () => {
        this.setState({ isLoading: true });
        try {
            let response = await fetch(this.URL);
            if (response.ok) {
                let filmList = await response.json();
                console.log(filmList);
                this.setState({ films: filmList });
            }
        } catch (error) {
            this.setState({ hasError: true, errorMessage: error.message });

            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    };
    componentDidMount = () => {
        this.fetchFilms();
    };
    render() {
        const filmsToDisplay = this.state.films.Search.slice(0, 6);
        return (
            <>
                <Container fluid={"xs"} className="px-0">
                    <h4>
                        {this.state.searchQ.split("%20").join(" ")}
                        {this.state.isLoading && (
                            <span>
                                <Loading />
                            </span>
                        )}
                        {this.state.hasError && <Error message={this.state.errorMessage} />}
                    </h4>
                    <Row className="row row-cols-2 g-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 mb-5">
                        {filmsToDisplay.map((film, index) => (
                            <Col
                                key={`Film-${index}`}
                                className={
                                    index === 5
                                        ? "d-none d-md-block d-lg-none d-xxl-block"
                                        : index === 4
                                        ? "d-none d-md-block d-lg-none d-xl-block"
                                        : index === 3
                                        ? "d-sm-none d-md-block"
                                        : ""
                                }
                            >
                                <img src={film.Poster} className="img-fluid" />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}
export default BatMan;
