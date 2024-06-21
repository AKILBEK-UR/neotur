import Tours from "../Tours/Tours";
import example from "../../mock.json"
export default function Tour() {
    return (
        <div >
          <div>
            <Tours tours={example} />
          </div>
        </div>
    );
  }