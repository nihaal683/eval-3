const api_key="https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function searchMovies(q){
        

    try{
        let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

        let res = await fetch(url);

        let data = await res.json();

        return data.Search;
    }catch(error){
        console.log('error:',error)
    }
}
