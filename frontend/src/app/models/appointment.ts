import {Course} from './course';

export interface Appointment {
  transaction_id: string;
  course: Course;
  appointment: string;
  student_id: string;
  tutor_id: string;
  status: string;
}











