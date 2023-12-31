import { Component } from "vue";

export interface ComponentInstance {
  id: number;
  component: Component;
}

export interface Country {
  id: number,
  name: string,
  phoneCode: number
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
  careerId: string,
  name: string,
  careerType: CareerType,
  careerModalities: CareerModality[]
}

export interface UsersCareers {
  id: number,
  status: string,
  modality: CareerModality,
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

export interface ClassRisk {
  id: number,
  name: string,
  risk?: number,
  score?: number
}

export interface StudentRisk {
  id: number,
  period: string,
  status: string,
  admission: string,
  school: string,
  segment?: string,
  segmentDetails?: string,
  classesRisk: ClassRisk[]
}

export interface FullUser {
  id: number,
  recordId: string,
  status: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  lastContact: string,
  lastActivity: string,
  category: Category,
  country: Country,
  state: State,
  role: Role,
  studentRisk: StudentRisk,
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

export interface Subreport {
  id: number,
  name: string,
}

export interface Report {
  id: number,
  name: string,
  icon: string,
  highlight: boolean,
  route: string,
  subreports?: Subreport[]
}