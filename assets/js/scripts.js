// 返回顶部按钮功能
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 为所有导航链接添加平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 页面加载完成后移除加载动画
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});

// 简单的搜索功能实现
document.getElementById('siteSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const content = document.querySelectorAll('.searchable');
    
    content.forEach(element => {
        const text = element.textContent.toLowerCase();
        element.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});