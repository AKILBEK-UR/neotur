import axios from "axios";
export default function Submit({phoneNumber, comments,count,id}){
      axios.post("https://neotour-production-0f7a.up.railway.app/bookings/book", {
            phoneNumber,
            comments,
            count,
            tourId: id
        })
        .then((response) => {
          alert("Succesfully booked" + " " + response);
        })
        .catch((error) => {
          alert(error)
        });
}