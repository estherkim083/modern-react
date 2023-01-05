import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice= createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '', 
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm= action.payload;
        },
        addCar(state, action) { //action 이 객체, name, cost 속성이 있음.
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        deleteCar(state, action) {
            //action payload 이 id 인 경우이다.
            const updated = state.data.filter((car)=> {
                return car.id !== action.payload
            });
            state.data= updated;
        }
    }
})

export const {changeSearchTerm, addCar, deleteCar} =carsSlice.actions;
export const carsReducer= carsSlice.reducer;