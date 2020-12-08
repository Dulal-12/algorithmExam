const calculation = (element , totalWeight) =>{

    // arranage with per wight profit
                               
    var newElement = element.sort(function(first,second) {
        return (second.profit / second.weight) - (first.profit / first.weight);
    });
//    console.log(newElement);
 
     var newWeight = 0;
     var newProfitValue = 0;
    var product = [];

     var pos = 0;

    while (newWeight < totalWeight) {

        var kgProfit = Math.ceil(newElement[pos].profit / newElement[pos].weight);
        newProfitValue += kgProfit;                                                                                  //add one kg by  one kg 
                                                                                                                                    //this is right or not!!!
        newWeight++;

        if (newWeight === newElement[pos].weight) {
           product.push(newElement[pos].product);
            pos++;

        }
    }


    console.log(newWeight , newProfitValue ,product) ;
 }


var element = [
                         {product:1 , profit : 10 , weight : 2},
                         {product:2 , profit: 5 ,weight : 3},
                         {product:3 ,profit : 15 , weight: 5},
                         {product:4 ,profit : 7 , weight: 7},
                         {product:5 ,profit : 6 , weight: 1},
                         {product:6 ,profit : 18 , weight: 4},
                         {product:7 ,profit : 3 , weight: 1},
]

const totalWeight = 15;
calculation (element , totalWeight);
