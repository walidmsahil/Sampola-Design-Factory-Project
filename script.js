// ChatGPT API 配置
const API_KEY = 'sk--FQ32quhEHyOxxxjLt2o-lPVHGqAnoN9lZIWCR3v_kT3BlbkFJ5j9uGfOA3CRQeF6uWvuQM0gFdKIvjjDKgIOckgDW4A';  // 这里替换为你的OpenAI API密钥
// ChatGPT API 配置

// 语音识别设置
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// 定义页面与URL的映射
const pageMappings = {
    "首页": "/index.html",
    "产品": "/products.html",
    "服务": "/services.html",
    "联系我们": "/contact.html"
};

// 开始语音识别
function startListening() {
    recognition.start();
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        processUserInput(transcript);
    };

    recognition.onerror = function(event) {
        console.error("语音识别错误: ", event.error);
    };
}

// 处理用户输入并调用 ChatGPT API
async function processUserInput(input) {
    try {
        console.log("用户输入: ", input);

        // 调用 ChatGPT API 处理用户输入
        const response = await callChatGPTAPI(input);

        // 确保响应中有 choices
        if (response.choices && response.choices.length > 0) {
            const aiResponse = response.choices[0].message.content.trim();  // 使用正确的响应字段
            console.log("AI响应: ", aiResponse);

            // 遍历 pageMappings 并查找匹配的页面
            let targetURL = null;
            for (const key in pageMappings) {
                if (aiResponse.includes(key)) {
                    targetURL = pageMappings[key];
                    break;
                }
            }

            if (targetURL) {
                // 跳转到目标页面
                window.location.href = targetURL;
            } else {
                alert("抱歉，我没有找到相关内容。");
            }
        } else {
            console.error("ChatGPT API 没有返回有效的响应。");
        }
    } catch (error) {
        console.error("调用 ChatGPT API 时发生错误: ", error);
    }
}

// 调用 ChatGPT API
async function callChatGPTAPI(userInput) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {  // 改为正确的 ChatGPT API 路径
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` // 传入你的 API Key
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // 使用 ChatGPT 模型
            messages: [
                { role: "system", content: "You are a helpful assistant." },  // 系统指令，定义 AI 的行为
                { role: "user", content: userInput }  // 用户输入的内容
            ],
            max_tokens: 150
        })
    });

    return await response.json();
}
