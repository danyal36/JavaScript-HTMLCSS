let a = async (x,sec) => {
    return new Promise(resolve => {

        console.log('Start: ' + x);
        
        setTimeout(() => {
            console.log('End: ' + x);
            resolve(x);
        }, sec *1000);

    });
}

async function ParallelFlow(){
 
    let result1 =  a(1,1);
    let result2 =  a(2,2);
     
    let finalResult =await result1+ await result2;
    let result3 = a(3,3);
    await result3;
    return finalResult;
}
     
ParallelFlow();