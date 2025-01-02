const rainContainer = document.getElementById('rain-container');

const imageUrl = 'static/image/rbp.png'; 

function createRainDrop() {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');  // 使用独立的类名
    drop.style.backgroundImage = `url(${imageUrl})`; // 设置背景图片
    drop.style.backgroundSize = 'contain';
    drop.style.backgroundRepeat = 'no-repeat';
    
    const startPosX = Math.random() * window.innerWidth; // 随机水平位置
    const animationDuration = Math.random() * 2 + 3; // 随机动画时间
    const animationDelay = Math.random() * 3; // 随机延迟时间

    drop.style.left = `${startPosX}px`;
    drop.style.animationDuration = `${animationDuration}s`;
    drop.style.animationDelay = `${animationDelay}s`;
    
    rainContainer.appendChild(drop);  // 将雨滴添加到容器中

    // 清除掉已经下落的雨滴
    setTimeout(() => {
        drop.remove();
    }, animationDuration * 1000);
}

setInterval(createRainDrop, 100);  // 每100毫秒生成一个新的雨滴
