import bcrypt from 'bcrypt';
import { supabase } from '../lib/supabaseClient';
import {  users, patients, appointments, medicalRecords, billings } from '../lib/placeholder-data';


async function seedUsers() {
  await supabase.rpc('create_extension', { extension: 'uuid-ossp' });
  users.map(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const { error } = await supabase
  .from('users')
  .insert([
    {
      id: user.id,
      name: user.name,
      email: user.email,
      phone_no: user.phone_no,
      password: hashedPassword,
      role: user.role,
      specialization: user.specialization,
      user_img: user.user_img,
      created_at: user.created_at,
      updated_at:user.updated_at,
    }
  ]);
  if (error) throw error;

})
}

async function seedPatients() {
  await supabase.rpc('create_extension', { extension: 'uuid-ossp' });
  patients.map(async (patient) => {
 
  const { error } = await supabase
  .from('patients')
  .insert([
    {
                id:  patient.id,
                name: patient.name,
                dob: patient.dob,
                email: patient.email,
                phone_no: patient.phone_no,
                address: patient.address,
                gender: patient.gender,
                medical_history: patient.medical_history,
                obstetric_history: patient.obstetric_history,
                patient_img: patient.patient_img,
                created_at: patient.created_at,
                updated_at:patient.updated_at,
              }
  ]);
  if (error) throw error;

})
}


async function seedAppointments() {
  await supabase.rpc('create_extension', { extension: 'uuid-ossp' });
  appointments.map(async (appointment) => {

  const { error } = await supabase
  .from('appointments')
  .insert([
    {
                id: appointment.id,
                patient_id: appointment.patient_id,
                doctor_id: appointment.doctor_id,
                appointment_date: appointment.appointment_date,
                appointment_type: appointment.appointment_type,
                status: appointment.status,
                notes: appointment.notes,
                created_at: appointment.created_at,
                updated_at:appointment.updated_at,
              }
  ]);
  if (error) throw error;

})
}

async function seedMedicalRecords() {
  await supabase.rpc('create_extension', { extension: 'uuid-ossp' });
  medicalRecords.map(async (record) => {

  const { error } = await supabase
  .from('medical_records')
  .insert([
    {
              id: record.id,
              patient_id: record.patient_id,
              doctor_id:  record.doctor_id,
              record_type: record.record_type,
              visit_date: record.visit_date,
              description: record.description,
              test_results: record.test_results,
              prescription: record.prescription,
              created_at: record.created_at,
              updated_at: record.updated_at,
            }
  ]);
  if (error) throw error;

})
}

async function seedBillings() {
  await supabase.rpc('create_extension', { extension: 'uuid-ossp' });
  billings.map(async (bill) => {

  const { error } = await supabase
  .from('billings')
  .insert([
    {
              id: bill.id,
              patient_id: bill.patient_id,
              appointment_id: bill.appointment_id,
              amount: bill.amount,
              status: bill.status,
              payment_date: bill.payment_date,
              created_at: bill.created_at,
              updated_at: bill.updated_at,
            }
  ]);
  if (error) throw error;

})
}



export async function GET() {
  try {
       await seedUsers();
       await seedPatients();
       await seedAppointments();
       await seedMedicalRecords();
       await seedBillings();
    
    return new Response(JSON.stringify({ message: 'Database seeded successfully' }), { status: 200 });
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}


