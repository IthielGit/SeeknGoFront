import { createSlice,configureStore } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
    name:"auth",
    initialState:{
        idUser: 0,
        user_type:null,
        email: null,
        username: null,
        password: null,
        numTel:null,
        poste: null,
        adresse: null,
        nom: null,
        prenom: null,
        ticketResas: [],
        numNif: null,
        numStat: null,
        numRcs: null,
        authority: {},
        prestations: [],
        factureAbnmts: []
    }
    ,reducers: {
        seConnecter : (state,action) => {
            //{type : 'seConnecter', payload : new state}
            //data from backend will be passed through here
            state = action.payload;
            return state;
        }   
    }
})

export const {seConnecter} = loggedUserSlice.actions;


export const storeLogin = configureStore({
    reducer : {
        //un store qui réunit toutes les slices login(données et intéractions login)
        loggedUser : loggedUserSlice.reducer
    }
})