import { ADD_TO_EVENT, initialEvent, CLEAN_EVENT } from '../utils/globals';

export default function (state: any = initialEvent, action: any) {
  switch (action.type) {
    case ADD_TO_EVENT:
      return {
        ...state,
        title: action.params.title,
        description: action.params.description,
        category_id: action.params.category_id,
        paid_event: action.params.paid_event,
        event_fee: action.params.event_fee,
        reward: action.params.reward,
        day: action.params.day,
        hour: action.params.hour,
        am_format: action.params.am_format,
        duration: action.params.duration,
        coordinator: action.params.coordinator,
        email: action.params.email
      }
      case CLEAN_EVENT:
        return {
          initialEvent
        }
    default:
        return state;
  }
}