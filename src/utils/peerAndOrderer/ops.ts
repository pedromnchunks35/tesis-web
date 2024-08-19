import { executeGraphQLQuery } from "../connection/connection";

export const showResponse = (text_to_display: any) => {
    let box: HTMLElement | null = document.getElementById("checkbox-enabler");
    if (box != null)
        box.classList.remove("hidden");

    let response: HTMLElement | null = document.getElementById("response-enabler");
    if (response != null)
        response.classList.remove("hidden");

    let text_to_set: HTMLElement | null = document.getElementById("content-to-display");
    if (text_to_set != null)
        text_to_set.textContent = text_to_display;
}

export const getFileBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Read the file as a data URL

        reader.onload = () => resolve(reader.result); // Resolve the promise with the base64 string
        reader.onerror = error => reject(error); // Reject the promise in case of an error
    });
}

export const send_chaincode_peer = async (service_name: any, urls: any, file_name: any, base_64_file: any) => {
    console.log(service_name);
    console.log(urls);
    console.log(file_name);
    console.log(base_64_file);
    let query: any = `
     mutation SendChaincodePeer(
              $file: String!,
              $file_name: String!,
              $service_name: String!
            ) {
              Send_chaincode_peer(
                file: $file,
                file_name: $file_name,
                service_name: $service_name
              ) {
                response {
                  message
                  status
                }
              }
            }
    `
    let variables: any = {
        "service_name": service_name,
        "file_name": file_name,
        "file": base_64_file
    }
    executeGraphQLQuery(urls, query, variables)
        .then(response => {
            showResponse(response.Send_chaincode_peer.response.message);
        })
        .catch(err => {
            showResponse("Something went wrong with the request");
        })

}

export const uploadFile = async (id_form: any, service_name: any, urls: any) => {
    let element: any = document.getElementById(id_form);
    const file = element.files[0];
    if (!file) {
        showResponse("No file was presented");
        return;
    }
    let file_name: string = file.name;
    let base_64_file: any = await getFileBase64(file);
    base_64_file = base_64_file.split(',')[1];
    await send_chaincode_peer(service_name, urls, file_name, base_64_file);
}