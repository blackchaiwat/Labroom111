import {FILTER_BRAND,FILTER_COLOR,FILTER_PRICE,SEARCH_BY,SORT_BY} from '../../actionTypes'
const filtersReducerDefaultState = {
    brand: ["Diesel", "Hudson", "Lee"],
    value: {min: 300, max: 990} ,
    sortBy: "",
    searchBy:""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            };
        case FILTER_COLOR:
            return {
                ...state,
                color: action.color
            };
        case FILTER_PRICE:
             const value={min: action.value.value[0], max: action.value.value[1]}
            return {
    ...state,value,
            };
        case SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        case SEARCH_BY:
            return {
                ...state,
                searchBy: action.search
        };
        default:
            return state;
    }
}

export default filtersReducer;