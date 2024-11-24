import { supabase } from '../lib/supabaseClient';
import {
  Users, Billings, Patients, Appointments, MedicalRecords
} from './definitions';
import { formatCurrency } from './utils';
import { users,patients } from './placeholder-data';



export async function fetchCardData() {
  try {
    // Run multiple queries in parallel using Promise.all
    const [paitentCount, doctorsCount, billStatus] = await Promise.all([
      supabase.from('users')
      .select('*', { count: 'exact' })
      .eq('role', 'doctor'),
      supabase.from('patients').select('*', { count: 'exact' }),
      supabase
        .from('billings')
        .select('status, amount')
        .then(({ data, error }) => {
          if (error) throw error;
          return  {
            paid: data.filter(bill => bill.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0),
            pending: data.filter(bill => bill.status === 'pending').reduce((sum, bill) => sum + bill.amount, 0)
          };
        })
    ]);

    const numberOfPatients = paitentCount.count ?? 0;
    const numberOfDoctors = doctorsCount.count ?? 0;
    const totalPaidBills = formatCurrency(billStatus.paid ?? 0);
    const totalPendingBills = formatCurrency(billStatus.pending ?? 0);

    return {
        numberOfPatients,
        numberOfDoctors,
        totalPaidBills,
        totalPendingBills,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchTodaysCardData() {
    try {
      // Run multiple queries in parallel using Promise.all
      const [staffCount, appointmentsCount] = await Promise.all([
        supabase.from('users')
        .select('*', { count: 'exact' })
        .eq('role', 'doctor'),
        supabase.from('appointments').select('*', { count: 'exact' }),
        
      ]);
  
      const numberOfStaffOnDuty = staffCount.count ?? 0;
      const numberOfAppointments = appointmentsCount.count ?? 0;
     
  
      return {
        numberOfStaffOnDuty,
        numberOfAppointments,
        
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
  }

// function formatCurrency(amount) {
//   return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
// }

  






