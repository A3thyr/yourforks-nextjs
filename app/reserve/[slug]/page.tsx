import ReserveHeader from "./components/ReserveHeader";
import Form from "./components/Form";

export default function ReservationPage() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReserveHeader />
        <Form />
      </div>
    </div>
  );
}
