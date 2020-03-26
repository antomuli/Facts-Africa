import { Status } from './status';

export class Invoice {
    id: number;
    supplier_id: number;
    buyer_id: number;
    invoice_status: Status;
    invoice_amount: number;
    due_date: Date;
    created_at: Date;
    updated_at: Date;
}

// {
//     id: 4,
//     "supplier_id": 3,
//     "buyer_id": 4,
//     "invoice_status": 2,
//     "invoice_amount": "95000",
//     "due_date": "2020-04-04",
//     "created_at": "2020-03-18T12:16:42.000000Z",
//     "updated_at": "2020-03-18T12:26:42.000000Z"
// },