$(document).ready(() => {
    const baseURL = "http://localhost:3000";
    const fetchMovieDetails = (id) => {
        return $.ajax({
            url: `${baseURL}/films/${id}`,
            method: "GET"
        });
    };
    const displayMovieDetails = () => {
        fetchMovieDetails(1).done((movieDetails) => {
             }).fail((error) => {
            console.error("Error fetching movie details:", error);
        });
    };

      const fetchAllMovies = () => {
        return $.ajax({
            url: `${baseURL}/films`,
            method: "GET"
        });
    };

        const displayMovieList = () => {
        fetchAllMovies().done((movies) => {
            }).fail((error) => {
            console.error("Error fetching movies:", error);
        });
    };

        const buyTicket = (movieId) => {
      };

    });
