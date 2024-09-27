 
//fetching the dat rom the post query  

import client from './apolloConn';
import {GET_DATA} from './post'


let data :any=[] ;
let cursor:any="true";
 
export async function fetchdata(){
  let newData;
  while(cursor){

    try  
  {    
        const response = await client.query({ query: GET_DATA,  variables: {after: cursor} });  
            newData= response.data; 
             
  }
  catch(error) 
  {
       console.error("Error fetching GraphQL data:", error); 
  }
  cursor=newData.posts.pageInfo.endCursor;
  data=[...data,...newData.posts.nodes];


  }
  return data;  
  }

 
 
   