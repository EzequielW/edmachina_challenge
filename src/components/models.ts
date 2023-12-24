import { Component } from "vue";

export interface ComponentInstance {
  id: number;
  component: Component;
}

export interface Country {
  id: number,
  name: string,
  phone_code: number
}

export interface State {
  id: number,
  name: string
}

export interface Category {
  id: number,
  name: string
}

export interface Role {
  id: number,
  name: string
}

export interface CareerType {
  id: number,
  name: string, 
}

export interface CareerModality {
  id: number,
  name: string, 
}

export interface Career {
  id: number,
  career_id: string,
  name: string,
  career_type: CareerType,
  career_modalities: CareerModality[]
}

export interface UsersCareers {
  id: number,
  status: string,
  modality_id: number,
  career: Career
}

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  role: Role
}

export interface UserActivity {
  id: number,
  type: string,
  description: string,
  user: User,
  url: string,
  createdAt: string
}

export interface FullUser {
  id: number,
  record_id: string,
  status: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  lastContact: string,
  lastActivity: string,
  activities: UserActivity[],
  usersCareers: UsersCareers[],
  category: Category,
  country: Country,
  state: State,
  role: Role,
  createdAt: string,
  updatedAt: string,
}

export interface UserAbout {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  category: Category,
  country: Country,
}