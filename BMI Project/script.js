const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if( height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter valid height ${height}`;
    }
    if( weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter valid weight ${weight}`;
    }
    else{
        const bmi = (weight/(height**2/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = `you are Underweight and your BMI is -> ${bmi}`;
        }
        else if(18.6 < bmi && bmi < 24.9){
            result.innerHTML = `your weight is Normal and your BMI is -> ${bmi}`;
        }
        else if ( bmi > 24.9){
            result.innerHTML = `you are Overweight and your BMI is -> ${bmi}`;
        }
        ;
    }
});




