export function getAllDogs() {
    // Your code here 
    const url = "/dogs";
    const headers = false;
    // Use the URLSearchParams API to format your body as shown below
    const body = false;

    const options = {
        method: "GET", 
        headers: headers,
        body: body
    };

    return fetch(url);
}

export function getDogNumberTwo() {
    // Your code here 
    const url = "/dogs/2";
    // const headers = {"Content-Type": "Request body's Content-Type"};
    // // Use the URLSearchParams API to format your body as shown below
    // const body = new URLSearchParams({
    //     key: "value"
    // });

    // const options = {
    //     method: "GET|POST|PUT|DELETE", 
    //     headers: headers,
    //     body: body
    // };
    return fetch(url)
}

export function postNewDog() {
    // Your code here 
}

export function postNewDogV2(name, age) {
     // Your code here 
}

export function deleteDog(id) {
      // Your code here 
}