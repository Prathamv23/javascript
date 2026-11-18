//task-4 Add a loading text/spinner and an error message. Test the error by using a wrong URL.

const loader = document.getElementById("loader");
loader.textContent = "Loading..........";
async function test_api(){
    try{
        //real api
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        //wrong url
        //const response = await fetch("https://wrong-api-url-12345.com/posts");

        const data = await response.json();
        console.log(data);
        loader.textContent = "api running properly";

    }catch(e){
        loader.textContent = `${e}`;
    }
};

test_api()