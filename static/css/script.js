// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");
    const closeButton = document.getElementById("closeButton");

    menuButton.addEventListener("click", function() {
        sidebar.classList.toggle("show"); // 切换侧边栏的显示状态
    });

    closeButton.addEventListener("click", function() {
        sidebar.classList.remove("show"); // 关闭侧边栏
    });
});
