const jobSequence = ( jobList ) => {

    let shortJobList = jobList.sort(function(a , b){
        return (b.profit - a.profit)
    });
    //console.log(shortJobList);

    let time = [ ]
    shortJobList.map((jobList)=> time.push(jobList.deadline));
    let maxTime = Math.max(...time);
    //console.log(maxTime);


    let timeSlot = [ ];
    for(let i = 0 ; i<maxTime ; i++){
        timeSlot.push(i);
    }

    //console.log(timeSlot);

    let finalJob = [ ];

    for(let i in shortJobList){

        let t  = shortJobList[ i ].deadline - 1;
        let index = timeSlot.indexOf(t);
        
        if ( index > -1)
        {
            timeSlot.splice(index, 1);
            finalJob.push(shortJobList[ i ]);
            if(timeSlot.length === 0){
               break;
           }
        }

        else{
            while(t !== -1){
                t = t -1;
                let index = timeSlot.indexOf(t);
                if ( index > -1)
                {
                        timeSlot.splice(index, 1);
                       finalJob.push(shortJobList[ i ]);
                      if(timeSlot.length === 0){
                        break;
               }  } }  }
    }

  
console.log(finalJob);
let profit = finalJob.reduce((sum, job) => sum + job.profit,0);
return profit;

}


const jobList = [{job : 'J1' , profit : 20 , deadline : 4 },
                         {job : 'J2' , profit : 10 , deadline : 1 },
                         {job : 'J3' , profit : 40 , deadline : 1 },
                         {job : 'J4' , profit : 30 , deadline : 1 },
                        ]

 const maximumProfit = jobSequence(jobList);
 console.log(maximumProfit);