async function fetchData(){
    const options = {
        method: 'GET',
         
    };
    
    const res = await fetch('https://reqres.in/api/users?page=2', options)
    const json = await res.json()
    
    console.log('record',json)

    document.getElementById("concerts").innerHTML = json.data.map(item => `<li>${item.avatar}</li>`).join('');
}
fetchData()