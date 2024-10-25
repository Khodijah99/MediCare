// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    email: "jane.smith@hospital.com",
    password: "hashedpassword123",
    role: "doctor",
    specialization: "Obstetrics",
    created_at: "2023-10-10T10:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  },
  {
    id: 2,
    name: "Nurse Kelly Brown",
    email: "kelly.brown@hospital.com",
    password: "hashedpassword456",
    role: "nurse",
    specialization: null,
    created_at: "2023-09-15T12:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  },
  {
    id: 3,
    name: "Admin John Doe",
    email: "john.doe@hospital.com",
    password: "hashedpassword789",
    role: "admin",
    specialization: null,
    created_at: "2023-08-25T08:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  }
];


const patients = [
  {
    id: 1,
    name: "Emily Johnson",
    dob: "1990-05-15",
    contact: "+1234567890",
    address: "123 Maple Street, Cityville",
    gender: "female",
    medical_history: "Hypertension",
    obstetric_history: "2 pregnancies, 1 C-section",
    created_at: "2023-10-01T09:00:00Z",
    updated_at: "2023-10-10T11:00:00Z"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    dob: "1985-11-20",
    contact: "+0987654321",
    address: "456 Oak Avenue, Townsville",
    gender: "female",
    medical_history: "Diabetes",
    obstetric_history: "1 pregnancy, normal delivery",
    created_at: "2023-09-20T11:30:00Z",
    updated_at: "2023-10-11T14:00:00Z"
  }
];

const appointments = [
  {
    id: 1,
    patient_id: 1,
    doctor_id: 1,
    appointment_date: "2023-10-12T14:00:00Z",
    appointment_type: "prenatal",
    status: "scheduled",
    notes: "Routine prenatal check-up",
    created_at: "2023-10-10T09:00:00Z",
    updated_at: "2023-10-10T09:30:00Z"
  },
  {
    id: 2,
    patient_id: 2,
    doctor_id: 1,
    appointment_date: "2023-10-15T09:00:00Z",
    appointment_type: "ultrasound",
    status: "scheduled",
    notes: "Second trimester ultrasound",
    created_at: "2023-10-11T10:00:00Z",
    updated_at: "2023-10-11T10:30:00Z"
  }
];

const medicalRecords = [
  {
    id: 1,
    patient_id: 1,
    doctor_id: 1,
    record_type: "prenatal",
    visit_date: "2023-10-01T14:30:00Z",
    description: "First prenatal visit. Blood pressure slightly elevated.",
    test_results: "Blood test normal, ultrasound results pending.",
    prescription: "Prenatal vitamins, calcium supplements.",
    created_at: "2023-10-01T15:00:00Z",
    updated_at: "2023-10-01T15:30:00Z"
  },
  {
    id: 2,
    patient_id: 2,
    doctor_id: 1,
    record_type: "gynecological",
    visit_date: "2023-09-20T09:00:00Z",
    description: "Annual gynecological exam, normal results.",
    test_results: "Pap smear negative.",
    prescription: "None.",
    created_at: "2023-09-20T09:30:00Z",
    updated_at: "2023-09-20T10:00:00Z"
  }
];



const billing = [
  {
    id: 1,
    patient_id: 1,
    appointment_id: 1,
    amount: 150.00,
    status: "unpaid",
    payment_date: null,
    created_at: "2023-10-10T15:00:00Z",
    updated_at: "2023-10-10T15:30:00Z"
  },
  {
    id: 2,
    patient_id: 2,
    appointment_id: 2,
    amount: 200.00,
    status: "paid",
    payment_date: "2023-10-11T11:00:00Z",
    created_at: "2023-10-11T10:00:00Z",
    updated_at: "2023-10-11T11:00:00Z"
  }
];


export { users, patients, medicalRecords, billing };
