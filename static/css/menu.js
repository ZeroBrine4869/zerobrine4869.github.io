// script.js
$(document).ready(function() {
    $('#menu-toggle').on('click', function() {
        $('#sidebar').toggleClass('show'); // 切换菜单显示状态
    });
});
// 使用 jQuery 示例
$(document).ready(function() {
    $('#menu-toggle').click(function() {
        $('#overlay').fadeToggle(); // 显示/隐藏覆盖层
        $('#sidebar').toggleClass('active'); // 控制侧边栏的显示与隐藏
    });

    // 点击覆盖层时隐藏侧边栏和覆盖层
    $('#overlay').click(function() {
        $(this).fadeOut(); // 隐藏覆盖层
        $('#sidebar').removeClass('active'); // 隐藏侧边栏
    });
});
