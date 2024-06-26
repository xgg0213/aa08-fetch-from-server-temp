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