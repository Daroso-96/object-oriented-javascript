// Car class
class Car{
    constructor(name,price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
} 
// UI class
class UI {
    addCar(car){ 
    const carList= document.getElementById('car-list');
    const element = document.createElement('div');   
    element.innerHTML = `
    <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Car</strong>: ${car.name} -
            <strong>Price</strong>: ${car.price} - 
            <strong>Year</strong>: ${car.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
    </div>
`; 
carList.appendChild(element);
this.resetForm();


    } 
   //Function reset.
    resetForm(){
        document.getElementById('car-form').reset();
    }
    deleteCar(element){ 
        if(element.name == 'delete'){
    element.parentElement.parentElement.parentElement.remove();
         this.showMessage('Car delete successfully', 'info');   

        }


    } 

    showMessage(message, cssClass){
        document.createElement('div');
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
       const container = document.querySelector('.container');
       const app = document.querySelector('#App');
       // Insert Message in the UI
       container.insertBefore(div, app);
       // Remove the Message after 3 seconds
       setTimeout(function () {
           document.querySelector('.alert').remove();
       }, 3000);
   }
}

//Dom events 
document.getElementById("car-form").addEventListener('submit',function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    console.log(name,price,year); 
    const car = new Car(name,price,year); 
     const  ui = new UI(); 
     if (name == '' || price == '' || year == '') {
       return  ui.showMessage('Complete fields please' ,'danger');
         
     }
    ui.addCar(car);
    ui.resetForm();
   
  ui.showMessage('Car added successfully', 'success');

    

    e.preventDefault(); 
    
}); 
document.getElementById('car-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteCar(e.target);
   


});