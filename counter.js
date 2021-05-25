// set initial count
let count = 0;
const value = document.getElementById('value')
const btns = document.querySelectorAll('.button')

btns.forEach((btn) =>{
    btn.addEventListener('click', (e)=> {   
    const styles = e.currentTarget.classList;
    if(styles.contains('is-danger')){
        count --
        value.textContent = count
    }else if(styles.contains('is-primary')){
        count ++
        value.textContent = count
    }else{
        count = 0
        value.textContent = count
    }if(count >0){
        value.classList.add('has-text-success')
    }if(count < 0){
        value.classList.add('has-text-danger')
    }if(count === 0){
        value.classList.remove('has-text-success','has-text-danger')
    }
    
    })
})