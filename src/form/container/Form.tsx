import * as React from 'react'
import * as moment from 'moment';
import EventInformation from '../components/EventInformation';
import CoordinatorComponent from "../components/CoordinatorComponent";
import TimeComponent from "../components/TimeComponent";
import { connect } from 'react-redux';
import { ApplicationState } from '../../reducers';
import { EventProps, EventObject, MockProps, Coordinator } from '../../types/Types';
import { saveToForm, fetchCategories } from '../action';
import SubmitButton from '../components/SubmitButton';
import Spinner from '../../common/Spinner';
import { findUser } from '../../utils/Functions';
import { AM, PM, formatDateWithHour, formatToSend, PATH } from '../../utils/globals';

export interface FormProps {
  mockData: MockProps
  newEvent: EventProps
  callbackToSave: (name: string, value: any, toNumber?: boolean) => void
}

interface Props {
  history: any
  fetchCategories: () => Promise<any>
  saveToForm: (event: EventProps) => void
}

export type FormAllProps = FormProps & Props;

class Form extends React.Component<FormAllProps> {
  componentDidMount() {
    const { fetchCategories } = this.props;

    fetchCategories()
  }

  render() {
    const { newEvent, mockData } = this.props;

    if (mockData.categories === undefined ||
      mockData.responsibles === undefined ||
      mockData.titles === undefined) {
      return <Spinner />
    }

    return (
      <div>
        <form onSubmit={this.submitHandler} >
          <EventInformation
            newEvent={newEvent}
            mockData={mockData}
            callbackToSave={(name: string, value: any, isNumber: boolean) => this.callbackToSave(name, value, isNumber)} />
          <CoordinatorComponent
            newEvent={newEvent}
            mockData={mockData}
            callbackToSave={(name: string, value: any) => this.callbackToSave(name, value)}
            callbackToSaveObject={(name: string, value: any) => this.callbackToSaveObject(name, value)} />
          <TimeComponent
            newEvent={newEvent}
            mockData={mockData}
            callbackToSave={(name: string, value: any) => this.callbackToSave(name, value)} />
          <SubmitButton />
        </form>
      </div>
    )
  }

  callbackToSave(name: string, item: any, isNumber: boolean = false) {
    const { newEvent, saveToForm } = this.props
    const value = !isNumber ? item.target.value : Number(item.target.value)

    saveToForm({ ...newEvent, [name]: value })
  }

  callbackToSaveObject(name: string, item: any) {
    const { newEvent, saveToForm, mockData } = this.props
    const id = Number(item.target.value)
    const responsible = findUser(mockData.responsibles, id)

    saveToForm({ ...newEvent, [name]: responsible, "email": responsible ? responsible.email : ""})
  }

  submitHandler = (e: any) => {
    e.preventDefault();

    const { newEvent } = this.props;
    const hour = newEvent.am_format ? `${newEvent.hour} ${AM}` : `${newEvent.hour} ${PM}`;
    const date = moment(`${newEvent.day} ${hour}`, formatDateWithHour).format(formatToSend);

    const dataToSend = new EventObject(
      newEvent.title,
      newEvent.description,
      newEvent.category_id ? Number(newEvent.category_id) : undefined,
      newEvent.paid_event,
      newEvent.event_fee ? Number(newEvent.event_fee) : undefined,
      newEvent.reward ? Number(newEvent.reward) : undefined,
      date,
      newEvent.duration ? Number(newEvent.duration) * 3600 : undefined,
      new Coordinator(newEvent.email, newEvent.coordinator.id)
    )

    this.props.history.push(PATH.CONFIRM)

    console.log(dataToSend)
  }
}

function mapStateToProps(state: ApplicationState) {
  return { newEvent: state.newEvent, mockData: state.mockData }
}

const actions = {
  saveToForm,
  fetchCategories
}

export default connect<{}, {}, FormAllProps>(mapStateToProps, actions)(Form);