import { BehaviorSubject } from "rxjs";

const reservation = {
    id : null,
    email: "",
    firstName: "",
    lastName: "",
    telNum: "",
    activityId: "",
    compteUserId: "",
    selectedDate: "",
    selectedTime: "",
    selectedPrice: "",
    uniteDeComptage: "",
    ticketTotalPrice: "",
}

const reservation$ = new BehaviorSubject(reservation);





