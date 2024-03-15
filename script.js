//logic to fill the table
const copyText=(txt)=>{
    navigator.clipboard.writeText(txt).then(
        ()=>{
            alert("copied txt" + txt)
        },
        ()=>{
            alert("faild")
        }
    )
}

const deletePassword=(website)=>{
    let data = localStorage.getItem('passwords')
    let arr = JSON.parse(data)
    arrUpdated= arr.filter((e)=>{

return e.website != website
    })
    localStorage.setItem("passwords",JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}s password`)
    showPasswords()
}


const showPasswords=()=>{
let tb = document.querySelector("table")
let data = localStorage.getItem('passwords')
if(data === null){
    tb.innerHTML= "No data to show"
}
else{
    tb.innerHTML=`<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
</tr> `
let arr = JSON.parse(data)
let str="";
for(let i=0; i<arr.length; i++){
    const element = arr[i]
    
    str += `<tr>
    <td>${element.website} <img  onClick="copyText('${element.website}')" src='copy.svg' alt='button copy' /></td>
    <td>${element.username} <img  onClick="copyText('${element.username}')" src='copy.svg' alt='button copy' /></td>
    <td>${element.password} <img  onClick="copyText('${element.password}')" src='copy.svg' alt='button copy' /></td>
    <td><button class="btnsm" onClick="deletePassword('${element.website}')">Delete</button></td>
    </tr>`
}

    tb.innerHTML= tb.innerHTML +str
}
website.value=""
username.value=""
password.value=""
}


console.log("working")
showPasswords()
document.querySelector('.btn').addEventListener("click",(e)=>{
    e.preventDefault()
    let passwords = localStorage.getItem("passwords");
    console.log(passwords)
    console.log(username.value,password.value)
    if(passwords === null){
        let json = []
        json.push({website:website.value,username:username.value,password:password.value})
        
        alert("Password Saved")
        localStorage.setItem("passwords",JSON.stringify(json))
    }else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website:website.value,username: username.value, password: password.value })
        
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords()
})