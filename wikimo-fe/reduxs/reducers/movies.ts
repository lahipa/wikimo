import ActionTypes from "../actions/movies/actionTypes";
import { ListMovie, DetailMovie } from "../../services/datatypes"

interface MovieReducer {
  movies: Array<ListMovie>;
  movie: DetailMovie;
}

interface GetMoviesAction {
  type: ActionTypes.GET_MOVIES_SUCCESS;
  payload: {
    data: MovieReducer["movies"];
  };
}

interface GetMovieAction {
  type: ActionTypes.GET_MOVIE_SUCCESS;
  payload: {
    data: MovieReducer["movie"];
  };
}

interface ClearState {
  type: "CLEAR_MOVIES";
  payload: MovieReducer;
}

type MovieAction = ClearState | GetMoviesAction | GetMovieAction;

const initialState: MovieReducer = {
  movies: [],
  movie: {},
};

const moviesReducer = (state: MovieReducer = initialState, action: MovieAction) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.data],
      };
    case ActionTypes.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload.data,
      };
    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
        movie: {},
      };
    default:
      return state;
  }
};

export default moviesReducer;
