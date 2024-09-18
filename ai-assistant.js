document.addEventListener('DOMContentLoaded', function() {
    const chatHistory = document.getElementById('chatHistory');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');
        messageDiv.textContent = content;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            userInput.value = '';
            
            // 模拟AI响应
            setTimeout(() => {
                const aiResponse = "感谢您的问题。作为AI助手，我正在处理您的请求。请稍后，我会尽快给您回复。";
                addMessage(aiResponse);
            }, 1000);
        }
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});