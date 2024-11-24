import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    HeartIcon,
    CalendarDaysIcon,
    CalendarIcon
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
 import { fetchCardData, fetchTodaysCardData } from '@/app/lib/data';
import { appointments } from '@/app/lib/placeholder-data';
  
  const iconMap = {
    patients: HeartIcon,
    doctors: UserGroupIcon,
    pending: ClockIcon,
    paid: BanknotesIcon,
    };
  const  TodayIcon ={
    staff: UserGroupIcon,
    appointments: CalendarDaysIcon,
  }
  
  export default async function CardWrapper() {   
    const {
      numberOfPatients,
      numberOfDoctors,
      totalPaidBills,
      totalPendingBills,
    } = await fetchCardData();
    return (
      <>
        <Card
          title="Total Doctors"
          value={numberOfPatients}
          type="doctors"
          color='green-500'
        /> 
        <Card
          title="Total Patients"
          value={numberOfDoctors}
          type="patients"
          color='rose-600'
        /> 
         <Card title="Pending Bills"  value={totalPendingBills} type="pending" color='orange-600' />

        <Card title="Total Earnings" value={totalPaidBills} type="paid" color='blue-600' />

       
      
       
      </>
    );
  }

  export  async function TodaysCardWrapper() {   
    const {
      numberOfStaffOnDuty,
      numberOfAppointments,
     
    } = await fetchTodaysCardData();
    return (
      <>
        <TodaysCard
          title="Staff on Duty"
          value={numberOfStaffOnDuty}
          type="staff"
          
        /> 
        <TodaysCard
          title="Today's Appointments "
          value={numberOfAppointments}
          type="appointments"
          
        /> 
         

       
      
       
      </>
    );
  }

export function Card({
    title,
    value,
    type,
    color,
  }: {
    title: string;
    value: number | string;
    type: 'patients' | 'doctors' | 'pending' | 'paid';
    color: string;
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className={` text-${color} rounded-xl flex justify-around items-center bg-gray-extra p-4 shadow-md`}>
        <div className="flex flex-col items-center  p-4">
          <h3 className="font-extralight">{title}</h3>
          <p
          className={`${lusitana.className}
            truncate font-bold  px-4 py-4 text-center text-2xl`}
        >
          {value}
        </p>
        </div>
    
            {Icon ? <Icon className="h-10 w-10" /> : null}
        
      
      </div>
    );
  }

  export function TodaysCard({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'appointments' | 'staff' ;
    
  }) {
    const Icon = TodayIcon[type];
  
    return (
      <div className={` text-blue-dark rounded-xl flex justify-around items-center bg-gray-extra p-4 shadow-md`}>
        <div className="flex flex-col items-center  p-4">
          <h3 className="font-extralight">{title}</h3>
          <p
          className={`${lusitana.className}
            truncate font-bold  px-4 py-4 text-center text-2xl`}
        >
          {value}
        </p>
        </div>
    
            {Icon ? <Icon className="h-10 w-10" /> : null}
        
      
      </div>
    );
  }