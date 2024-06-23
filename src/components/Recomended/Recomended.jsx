/* eslint-disable react/prop-types */
import "./Recomended.css"
import Tours from "../Tours/Tours";
import { api } from "../../api";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Recomended(){
    const [content, setContent] = useState([]);
    useEffect(() => {
        const fetchTours = async () => {
          try {
            const { data } = await api.get(`tours/recommended?page=1&size=3`);
            setContent(data)
          } catch (error) {
            console.error('Error fetching tours:', error);
          }
        };
        fetchTours();
      }, []);
    return(<>
        <div className="recomended-container">
            <h1 style={{marginBottom:"4rem"}}>Recomended</h1>
                <Tours 
                tours = {content}
                count = {5}
                 />
        </div>
    </>);
}