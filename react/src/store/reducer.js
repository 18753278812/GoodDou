"use strict";

const defaultState = {
	serch: "菜谱、专辑",
	banner: []
}

const Reducer = (state = defaultState,action = {} ) => {
	switch(action.type) {
		case "BANNER_LIST" : 
			return Object.assign({}, state, {
				banner: [...action.payload]
			})
		default: 
			return state
	}
}

export default Reducer;