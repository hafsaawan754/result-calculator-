const submitBtn =document.querySelector('#submit')
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const english = parseInt(document.querySelector('#english').value)
    const urdu = parseInt(document.querySelector('#urdu').value)
    const math = parseInt(document.querySelector('#math').value)
    const chemistry = parseInt(document.querySelector('#chemistry').value)
    const physics = parseInt(document.querySelector('#physics').value)
    const totalmarks =document.querySelector('.total-marks').textContent= english+urdu+math+chemistry+physics
    const grade =document.querySelector('.grade').textContent= findGrade(totalmarks)
    const percentage =document.querySelector('.percentage').textContent= totalmarks / 5 +'%'
    document.querySelector('.marks-container').style.visibility = 'hidden'
    document.querySelector('.result-container').style.visibility = 'visible'

})
function findGrade(marks)
{
         if(marks<=500 && marks > 450) return 'A+'
    else if(marks<=449 && marks > 400) return 'A'
    else if(marks<=399 && marks > 350) return 'B+'
    else if(marks<=349 && marks > 300) return 'B'
    else if(marks<=299 && marks > 250) return 'C'
    else if(marks<=249 && marks > 200) return 'D'
    else if(marks<=199 && marks > 150) return 'E'
    else if(marks<=149) return 'fail'
}