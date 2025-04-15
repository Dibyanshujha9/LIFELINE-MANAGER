import React , {useEffect , useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from 'moment'

const HomePage = () => {
  const { loading, error , user } = useSelector((state) => state.auth);
const [ data , setData ] = useState([]);
const navigate = useNavigate()

// get blood function 
const getBloodRecords = async() =>{
  try {
    const {data} = await API.get('/inventory/get-inventory')
    if(data?.success){
      setData(data?.inventory)
      // console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
getBloodRecords();
},[]);


  return (
    <Layout>
{user?.role === 'admin' &&  navigate("/admin")}
      {error && <span>{error}</span>}
      {loading ? (
        <Spinner />
      ) : (
        // <h1>Home Page</h1>
        <>
        <div className="container">
     <h4
  className="ms-4"  
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
  style={{ cursor: "pointer" }}
>
  <i className="fa-solid fa-plus text-success py-4 me-2"></i>
  <span style={{ fontSize: "1.9rem", fontWeight: "bold" , color:"red" }}>✚</span> <span style={{ fontSize: "1.66rem" , color: "red"}}>Add Inventory</span>
</h4>


{/* table starts  */}
<table className="table">
  <thead>
    <tr>
      <th scope="col">Blood Group </th>
      <th scope="col">Inventory Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Donar Email</th>
      <th scope="col">Time & Date </th>
    </tr>
  </thead>
  <tbody>
    {data?.map((record)=>(
      <tr key={record._id}>
      <td>{record.bloodGroup}</td>
      <td>{record.inventoryType}</td>
      <td>{record.quantity} (ML)</td>
      <td>{record.email}</td>
      <td>{moment(record.createdAt).format("DD/MM/YY hh:mm A")}</td>

    </tr>
    ))}
   
  </tbody>
</table>
{/* table ends  */}

            <Modal />
            </div>
        </>
      )}
    </Layout>
    
  );
};

export default HomePage;
  