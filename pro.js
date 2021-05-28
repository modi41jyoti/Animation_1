const bollywoodAds = async () => {
    let response = await axios.get("https://reqres.in/api/users?page=2s")
    let responseData = response.data.data
    responseData.map(function (x) {
        document.write(x.id + "<br>")
    })

}

const hollywoodAds = async () => {
    let response = await axios.get("https://reqres.in/api/users?page=2s")
    let responseData = response.data.data
    responseData.map(function (x) {
        document.write(x.first_name + x.last_name + "<br>")
    })
}

const tollywoodAds = async () => {
    let response = await axios.get("https://reqres.in/api/users?page=2s")
    let responseData = response.data.data
    responseData.map(function (x) {
        document.write(x.email + "<br>")
    })
}


const closeAllDiv = () => {
    console.log("hello")
    const data = document.getElementsByClassName("outerDiv")
    data[0].style.display = "none"
}