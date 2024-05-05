import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
export const FormHitungInputBiaya = () => {
  return (
    <>
      <Label htmlFor="customerName">Nama Pelanggan</Label>
      <Input type="text" id="customerName" placeholder="Dzaky Razi" />
    </>
  );
};
