import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

export const setIngredients = (initIngredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: initIngredients
    }
}

export const fetchIngredientsFailed = () => {
    return { type: actionTypes.FETCH_INGREDIENTS_FAILD }

}

export const initIngredients = () => {
    return dispatch => {
        axios
            .get("/ingredients.json")
            .then(response => {
                console.log(`my object ${response.data}`);
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    }
};