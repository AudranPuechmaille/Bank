export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  date: Date;
  description: string;
  [key: string]: any; // Signature d'index pour permettre l'accès par clé de type string
}
