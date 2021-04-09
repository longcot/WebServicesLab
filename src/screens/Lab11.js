import React, { useState } from 'react'
import styled from "styled-components";

const Lab11 = () => {
    const [arr,setArr] = useState([""])
    

    const renderList = dataList =>{
        const parser = new DOMParser()
        let str = ''
        dataList.map(data => {
            str += `<p> ${data.ten}, ${data.tuoi} dat ${data.lapTrinh} diem lap trinh.`
            return ( 
                <div>
                    alo {str}
                </div>  
            )
        });
    }

    

    const getReq = async () =>{
        const req = new XMLHttpRequest()
        await req.open('GET','http://localhost:3006/blogPost')
        req.onload = () =>{
            if(req.status >= 200 && req.status < 400){
                const data = JSON.parse(req.responseText)
               
                setArr(data)
                console.log(arr);
            }else{
                console.log('Failed');
            }
        }

        req.onerror = (e) =>{
            console.log('Error', e);
        }

        req.send()
    }

    return (
        <div>
            <div onClick= {getReq} className="btn ui blue submit button">Lấy dữ liệu </div>
                <div>
                   <table className="ui table segment">
                    <thead>
                        <tr><th>Name</th>
                        <th>Status</th>
                    
                    </tr></thead>
                    <tbody>
                    {arr.map((item) =>
                        (<tr>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        </tr>)    
                    )
                }                        
                    </tbody>
                    </table>
                </div> 
        </div>
    )
}

export default Lab11

const NewsItem = styled.div`
  position:relative;
  padding: 1rem;
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }
`;