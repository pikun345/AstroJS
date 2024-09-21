 
//fetching the dat rom the post query  

import client from './apolloConn';
import {gql} from "../../../node_modules/@apollo/client/index"
import {GET_DATA} from './post'

export async function fetchData(){

try 
{
     const response = await client.query({ query: GET_DATA, }); 
     return response.data
     
}
catch(error) 
{
     console.error("Error fetching GraphQL data:", error); 
}


}