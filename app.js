// 创建 WebSocket 连接
const socket = new WebSocket('https://roger0719.github.io/test/card.html');

// 当连接建立时触发
socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
});

// 当接收到消息时触发
socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    console.log('Received message:', message);

    // 在这里处理游戏逻辑，根据消息更新界面等
});

// 当连接关闭时触发
socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
});

// 处理用户输入等游戏逻辑
function handleUserInput() {
    // 在这里添加处理用户输入的代码
    // 例如，当用户点击屏幕时，发送消息给服务器
    const message = {
        type: 'user_input',
        data: /* 用户输入的数据 */,
    };

    // 发送消息到服务器
    socket.send(JSON.stringify(message));
}

// 在页面加载完成后执行初始化代码
document.addEventListener('DOMContentLoaded', () => {
    // 在这里添加初始化代码，例如创建游戏界面
    // 也可以添加事件监听器，以便处理用户输入
});
