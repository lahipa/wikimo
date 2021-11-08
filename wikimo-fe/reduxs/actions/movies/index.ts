import ActionTypes from "./actionTypes";
import { getMovies } from "../../../services";
import { AppDispatch } from "../../store";

export const getMoviesBySearch = (_x: string, keywords: string, page: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: ActionTypes.GET_MOVIES_REQUEST });

        try {
            const response: any = await getMovies({
                apikey: _x,
                s: keywords,
                page: page.toString(),
            });

            return dispatch ({
                type: ActionTypes.GET_MOVIES_SUCCESS,
                payload: {
                    data: response.Search,
                    total: response.totalResults,
                    message: "", 
                },
            });
        } catch (err: any) {
            return dispatch ({
                type: ActionTypes.GET_MOVIES_FAILURE,
                payload: {
                    data: false,
                    message: err.message,
                },
            })
        }
    }
}

export const getMovieById = (_x: string, id: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: ActionTypes.GET_MOVIE_REQUEST });

        try {
            const response: any = await getMovies({
                apikey: _x,
                i: id,
            });

            return dispatch ({
                type: ActionTypes.GET_MOVIE_SUCCESS,
                payload: {
                    data: response,
                    message: "", 
                },
            });
        } catch (err: any) {
            return dispatch ({
                type: ActionTypes.GET_MOVIE_FAILURE,
                payload: {
                    data: false,
                    message: err.message,
                },
            })
        }
    }
}