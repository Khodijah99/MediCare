
export type Users = {
  id: string;
  name: string;
  email: string;
  phone_no: string;
  password: string;
  role: string;
  specialization: string;
  user_img: string;
  created_at: string;
    updated_at: string
};

export type Patients = {
    id: string;
    name: string;
    dob: string;
    email: string;
    phone_no: string;
    address: string;
    gender: string;
    medical_history: string;
    obstetric_history: string;
    patient_img: string;
    created_at: string;
    updated_at: string;
};

export type Appointments = {
  id: string;
  patient_id: string;
  doctor_id: string;
    appointment_date: string;
    appointment_type: string;
    status: "scheduled" | "cancelled";
    notes: string;
    created_at: string;
    updated_at: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'scheduled' or 'cancelled'.
 
};

export type MedicalRecords = {
    id: string;
    patient_id: string;
    doctor_id: string;
    visit_date: string;
    record_type: string;
    description: string;
    test_results: string;
    prescription: string;
    created_at: string;
    updated_at: string;
 
 
};

export type Billings = {
    id: string;
    patient_id: string;
    appointment_id: string;
    amount: number;
    status: "paid" | "pending";
    payment_date: string;
    created_at: string;
    updated_at: string;
 
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type AddCustomerField = {
  id: string;
  name: string;
  
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
