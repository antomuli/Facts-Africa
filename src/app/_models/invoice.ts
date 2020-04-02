import { Status } from './status';

export class Invoice {
    sort(arg0: (a: any, b: any) => number) {
      throw new Error("Method not implemented.");
    }
    id: number;
    supplier_id: number;
    buyer_id: number;
    invoice_status: Status;
    invoice_amount: number;
    due_date: Date;
    created_at: Date;
    updated_at: Date;
}

