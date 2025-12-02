export async function sendMessageToAPI(message) {
    const response = await fetch("/chatbot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: message })
    });

    const data = await response.json();
    return data.response;
}
