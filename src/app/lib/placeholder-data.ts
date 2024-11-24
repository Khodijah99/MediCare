// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  {
    id:"8abe4658-34a4-4ed4-8f04-fdf6f9694d30",
    name: "Jane Smith",
    email: "janeSmith@hospital.com",
    phone_no:"0801234567",
    password: "hashedpassword123",
    role: "doctor",
    specialization: "Obstetrics",
    user_img:"/images/users/user1.jpg",
    created_at: "2023-10-10T10:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  },
  {
    id:"95059698-d6b7-4921-80af-0d2db4b5c151",
    name: "Kelly Brown",
    email: "kellyBrown@hospital.com",
    phone_no:"08012308567",
    password: "hashedpassword456",
    role: "nurse",
    specialization: null,
    user_img:"/images/users/user2.jpeg",
    created_at: "2023-09-15T12:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  },
  {
    id:"71bbbe41-969b-41dc-be41-3b2d84698d22",
    name: "John Doe",
    email: "johnDoe@hospital.com",
    phone_no:"0801238867",
    password: "hashedpassword789",
    role: "admin",
    specialization: null,
    user_img:"/images/users/user3.jpg",
    created_at: "2023-08-25T08:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  },
  {
    id:"ecc9cc48-3db0-4032-9eca-14900c482fdf",
    name: "Alex Asana",
    email: "alexAsana@hospital.com",
    phone_no:"0803454567",
    password: "hashedpassword333",
    role: "doctor",
    specialization: "Gynecologist",
    user_img:"/images/users/user4.jpg",
    created_at: "2023-10-10T10:00:00Z",
    updated_at: "2023-10-11T10:00:00Z"
  },
];

const patients = [
  {
    id:"3af9e426-858f-4732-9256-f12da4062d20",
    name: "Emily Johnson",
    dob: "1990-05-15",
    email:"emilyJohson@mailinator.com",
    phone_no: "+1234567890",
    address: "123 Maple Street, Cityville",
    gender: "female",
    medical_history: "Hypertension",
    obstetric_history: "2 pregnancies, 1 C-section",
    patient_img:"/images/patients/patient1.jpeg",
    created_at: "2023-10-01T09:00:00",
    updated_at: "2023-10-10T11:00:00"
  },
  {
    id:"464e4515-2c47-4edb-97f0-f7e335691ba7",
    name: "Sophia Martinez",
    dob: "1985-11-20",
    email:"sophiamartinez@mailinator.com",
    phone_no: "+0987654321",
    address: "456 Oak Avenue, Townsville",
    gender: "female",
    medical_history: "Diabetes",
    obstetric_history: "1 pregnancy, normal delivery",
    patient_img:"/images/patients/patient2.jpeg",
    created_at: "2023-09-20T11:30:00",
    updated_at: "2023-10-11T14:00:00"
  }
];

const appointments = [
  {
    id: "d96795e3-eabc-430f-9e2c-6597adc4f1a9",
    patient_id: patients[0].id,
    doctor_id: users[0].id,
    appointment_date: "2023-10-12T14:00:00",
    appointment_type: "prenatal",
    status: "scheduled",
    notes: "Routine prenatal check-up",
    created_at: "2023-10-10T09:00:00",
    updated_at: "2023-10-10T09:30:00"
  },
  {
    id: "4fe30c73-53e0-4273-b534-06289a74b196",
    patient_id: patients[1].id,
    doctor_id: users[3].id,
    appointment_date: "2023-10-15T09:00:00",
    appointment_type: "ultrasound",
    status: "cancelled",
    notes: "Second trimester ultrasound",
    created_at: "2023-10-11T10:00:00",
    updated_at: "2023-10-11T10:30:00"
  }
];

const medicalRecords = [
  {
    id:"f0a36c1d-dbf4-42db-acb1-e5272f1aa045",
    patient_id: patients[0].id,
    doctor_id: users[0].id,
    record_type: "prenatal",
    visit_date: "2023-10-01T14:30:00",
    description: "First prenatal visit. Blood pressure slightly elevated.",
    test_results: "Blood test normal, ultrasound results pending.",
    prescription: "Prenatal vitamins, calcium supplements.",
    created_at: "2023-10-01T15:00:00",
    updated_at: "2023-10-01T15:30:00"
  },
  {
    id:"6d0050a6-4e8c-468f-a993-404493e6c2c3",
    patient_id: patients[1].id,
    doctor_id: users[3].id,
    record_type: "gynecological",
    visit_date: "2023-09-20T09:00:00Z",
    description: "Annual gynecological exam, normal results.",
    test_results: "Pap smear negative.",
    prescription: "None.",
    created_at: "2023-09-20T09:30:00",
    updated_at: "2023-09-20T10:00:00"
  }
];



const billings = [
  {
    id:"35b00d14-a769-4953-9dd9-84c1cd5e763a",
    patient_id: patients[0].id,
    appointment_id: appointments[0].id,
    amount: 150.00,
    status: "pending",
    payment_date: null,
    created_at: "2023-10-10T15:00:00",
    updated_at: "2023-10-10T15:30:00"
  },
  {
    id:"032d89cd-28fb-4e6a-935a-c8dbc4592083",
    patient_id: patients[1].id,
    appointment_id: appointments[1].id,
    amount: 200.00,
    status: "paid",
    payment_date: "2023-10-11T11:00:00",
    created_at: "2023-10-11T10:00:00",
    updated_at: "2023-10-11T11:00:00"
  }
];


 export { users, patients, appointments, medicalRecords, billings };
