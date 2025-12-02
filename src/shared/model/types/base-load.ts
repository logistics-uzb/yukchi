export interface IBaseLoad {
  countryFrom: string;
  regionFrom: string;
  countryTo: string;
  regionTo: string;
  title: string;
  weight: string;
  cargoUnit: "tons" | "pallet";
  capacity?: string;
  vehicleType: string;
  vehicleBodyType?: string;
  paymentType?: "cash" | "online" | "combo";
  paymentAmount?: string;
  paymentCurrency?: "usd" | "sum";
  pickupDate: string;
  phone_number: string;
  description?: string;
}
