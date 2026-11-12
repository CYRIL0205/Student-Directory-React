import HeaderContainer from '../Components/HeaderContainer';
import FormContainer from '../Components/FormContainer';
import ListContainer from '../Components/ListContainer';
import { useState } from 'react';




const StudentPage = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/students/');

        if(!response.ok){
            throw new Error(response.status);
        }

        const data = response.json();
        return data;
    }

    getData().then((result) => {
        setData(result);
    }).catch((error) => {
        console.log(error);
    })

  return(
    <>
      <HeaderContainer/>
      <FormContainer/>
      <ListContainer data={data}/>
    </>
  )

}

export default StudentPage;