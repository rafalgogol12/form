export const initialReducerState = {
    data: undefined
}

export const initialEvent = {
    title: "",
    description: "",
    category_id: undefined,
    paid_event: false,
    event_fee: undefined,
    reward: undefined,
    date: "", 
    duration: undefined,
    day: "",
    hour: "",
    am_format: true,
    coordinator: {
        email: "",
        id: 0
    }
}

export const formatDate = "YYYY-MM-DD";
export const formatDateWithHour = `${formatDate} hh:mm A`;
export const formatToSend = `${formatDate}[T]HH:mm`;
export const AM = "AM";
export const PM = "PM";

export const loggedUserId = 3;
export const maxDescriptionLength = 140;

export const ADD_TO_EVENT = 'add_to_event';
export const CLEAN_EVENT = "clean_event"

export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_RESPONSIBLES = "fetch_responsibles"
export const FETCH_TITLE = 'fetch_title'

export const PATH = {
    ROOT: '/',
    CONFIRM: '/confirm'
}