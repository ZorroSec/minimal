async function queryIp(){
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data
}

export default queryIp