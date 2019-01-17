export interface InputProps {
  labelName?: string
  name: string
  placeholder?: string
  callback?: any
  value?: any
  maxLength?: number
  isRequired?: boolean
  validationStatement?: boolean
  validationError?: string
  extraText?: string
  isNumber?: boolean
  type?: string
  paymentField?: boolean
}

export interface PaymentProps extends InputProps {
  feeName: string
  inputValue: any
}

export interface Coordinator {
  email: string,
  id: string,
}

export class Coordinator {
  constructor(
    public email: string,
    public id: string
  ) {
    this.email = email;
    this.id = id
  }
}

export interface MockProps {
  categories: any
  responsibles: any
  titles: any
}

export interface EventProps {
  title: string,
  description: string,
  category_id: number,
  paid_event: boolean,
  event_fee: number,
  reward: number,
  date: string, 
  day: string,
  hour: string
  am_format: boolean
  duration: number, 
  coordinator: Coordinator
  email: string
}

export class EventObject {
  constructor(
    public title: string,
    public description: string,
    public category_id: (number | undefined),
    public paid_event: boolean,
    public event_fee: (number | undefined),
    public reward: (number | undefined),
    public date: string,
    public duration: (number | undefined),
    public coordinator: Coordinator
  ) {
    this.title = title;
    this.description = description;
    this.category_id = category_id;
    this.paid_event = paid_event;
    this.event_fee = event_fee;
    this.reward = reward;
    this.date = date;
    this.duration = duration;
    this.coordinator = coordinator;
  }
}

export interface Responsible {
  name: string
  id: number
  lastname: string
  email: string
}

export interface TitleObject {
  userId: number
  id: number
  title: string
}

export interface ButtonProps {
  disabled: boolean
}