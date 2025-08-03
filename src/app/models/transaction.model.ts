export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  date: string; // ISO string
  description: string;
}
