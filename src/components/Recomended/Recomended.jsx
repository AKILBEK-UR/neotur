/* eslint-disable react/prop-types */
import "./Recomended.css"
import Tours from "../Tours/Tours";
// eslint-disable-next-line react/prop-types
export default function Recomended({rec}){
    return(<>
        <div className="recomended-container">
            <h1>Recomended</h1>
                <Tours tours = {rec} />
        </div>
    </>);
}