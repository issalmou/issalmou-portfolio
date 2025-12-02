export async function sendMessageToAPI(message) {
    const response = await fetch("https://chatbot-portfolio-yk56.onrender.com/chatbot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: message })
    });

    const data = await response.json();
    return data.response;
}
