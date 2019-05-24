import { getMovies, getById, addMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_,{ title}) => addMovie(title)
    }
};

export default resolvers;