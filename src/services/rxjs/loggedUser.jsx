import { BehaviorSubject } from "rxjs";


var currentUser = [];

export const currentUser$ = new BehaviorSubject(currentUser); 

export const addCurrentUser = (newArray)=>{
    // currentUser.pop();
    let emptyArray = [];
    currentUser=emptyArray;
    currentUser.push(newArray);

    currentUser$.next(currentUser);
}


export const deleteCurrentUser = (id)=>{
    const index = currentUser.findIndex(item=> item.idUser === id);
    currentUser.splice(index, 1);

    currentUser$.next(currentUser);
}
