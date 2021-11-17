export interface Case {
    case_primary_key?: number,
   distributor_territory?: string,
   planning_approval_date?: string,
   anatomy?: string,
   psi_case_id?: string,
   region?: string,
   sales_rep_name?: string,
   scan_upload_date?: string,
   case_status?: string,
   surgeon_name?: string,
   surgery_date?: string,
   mfg_lead_time?: string,
   rush?: number,
   account_name?: string,
   modality_code_id?: string,
   procedure_name?: string,
   scan_center_name?: string,
   product_code_id?: string,
   laterality_code_id?: string,
   source_code_id?: string,
   technology_name?: string,
   country?: string,
   date_of_birth?: string,
   first_name?: string,
   middle_name?: string,
   last_name?: string,
   patient_id?: string,
   gender?: string
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Technology {
    technology_name?: string;
}

export interface Anatomy {
    name?: string;
}


