function highlight() {
    //Write your code here
 let allStrong = document.querySelectorAll('strong')
            allStrong.forEach(item=> {
                item.className = 'add-green'
            })

}


function return_normal() {
    //Write your code here
 let allStrong = document.querySelectorAll('strong')
            allStrong.forEach(item=> {
                item.className = 'add-black'
            })
    
}
