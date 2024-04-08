$(document).ready(() => {
    const baseURL = "http://localhost:3000";

    // Function to fetch movie details by ID
    const fetchMovieDetails = (id) => {
        return $.ajax({
            url: `${baseURL}/films/${id}`,
            method: "GET"
        });
    };

    // Function to display movie details
    const displayMovieDetails = () => {
        fetchMovieDetails(1).done((movieDetails) => {
            // Code to display movie details on the frontend
        }).fail((error) => {
            console.error("Error fetching movie details:", error);
        });
    };

    // Function to fetch all movies
    const fetchAllMovies = () => {
        return $.ajax({
            url: `${baseURL}/films`,
            method: "GET"
        });
    };

    // Function to display list of movies
    const displayMovieList = () => {
        fetchAllMovies().done((movies) => {
            // Code to display list of movies on the frontend
        }).fail((error) => {
            console.error("Error fetching movies:", error);
        });
    };

    // Function to buy a ticket for a movie
    const buyTicket = (movieId) => {
        // Code to handle buying ticket and updating available tickets
    };

    // Event listeners or other logic to handle user interactions
});