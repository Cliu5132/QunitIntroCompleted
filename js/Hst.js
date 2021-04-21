export default class Hst{
    calculate(kg, province){
        let cost;
        if(kg - 0.75 > 0){
            switch(province){
                case 'ON':
                    cost = Math.ceil(kg - .75) * .8 + 23.19;
                    break;
                case 'SK':
                    cost = Math.ceil(kg - .75) * 4.5 + 45.44;
                    break;
                case 'MB':
                case 'NS':
                    cost = Math.ceil(kg - .75) * 3.5 + 34.26;
                    break;
                case 'AB':
                    cost = Math.ceil(kg - .75) * 5 + 53.32;
                    break;
                case 'QC':
                    cost = Math.ceil(kg - .75) * 1.5 + 28.37;
                    break;
                case 'PE':
                    cost = Math.ceil(kg - .75) * 3.1 + 44.11;
                    break;
                default:
                    throw "unimplemented";
            }
        }else{
            switch(province){
                case 'ON':
                    cost = 23.19;
                    break;
                case 'SK':
                    cost = 45.44;
                    break;
                case 'MB':
                case 'NS':
                    cost = 34.26;
                    break;
                case 'AB':
                    cost = 53.32;
                    break;
                case 'QC':
                    cost = 28.37;
                    break;
                case 'PE':
                    cost = 44.11;
                    break;
                default:
                    throw "unimplemented";
            }
        }
        
        return cost.toFixed(2);
    }

}