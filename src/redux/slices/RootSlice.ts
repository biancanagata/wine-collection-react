import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        grape_variety: "Grape Variety",
        region: "Region",
        price: "Price",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseGrapeVariety: (state, action) => { state.grape_variety = action.payload},
        chooseRegion: (state, action) => { state.region = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseGrapeVariety, chooseRegion, choosePrice} = rootSlice.actions