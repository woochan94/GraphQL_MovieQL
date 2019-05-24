let movies = [
    {
        id: 0,
        title: "IronMan",
    },
    {
        id: 1,
        title: "SpiderMan",
    },
    {
        id: 2,
        title: "Black panther",
    },
    {
        id: 3,
        title: "Thor",
    },
    {
        id: 4,
        title: "Captain America",
    },
    {
        id: 5,
        title: "Captain Marvel",
    },
    {
        id: 6,
        title: "Avengers",
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (title) => {
    const newMovie = {
        id: `${movies.length + 1}`, 
        title
    };
    movies.push(newMovie); 
    return newMovie;
}