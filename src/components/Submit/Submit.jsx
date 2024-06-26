import axios from "axios";
import { useEffect } from "react";
export default function Submit({phoneNumber, comments,numberOfPerson,id}){
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.post("https://neotour-production-0f7a.up.railway.app/bookings/book", {
          phoneNumber,
          comments,
          numberOfPerson,
          tourId: id
        });
        console.log("Booking submitted successfully:", response.data);
      } catch (error) {
        console.error('Error submitting booking:', error);
      }
    };

    fetchTours();
  }, [phoneNumber, comments, numberOfPerson, id]);
}