const getStoredApp=() => {

    const storedAppSTR=localStorage.getItem("appList");
    if(storedAppSTR){
        const storeAppData=JSON.parse(storedAppSTR);
        return storeAppData;
    }
    else{
        return [];
    }
}

const addToStoreDB=(id) => {
const storeAppData=getStoredApp();

if(storeAppData.includes(id)) {
alert("installed")
}
else {
    storeAppData.push(id);
    const data=JSON.stringify(storeAppData);
    localStorage.setItem("appList",data)
}
}

export {addToStoreDB,getStoredApp};