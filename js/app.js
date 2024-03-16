const intensCourse = document.querySelector(".launch__intens");
const onlineCourse = document.querySelector(".launch__online");
setInterval(() => {
    intensCourse.classList.toggle("active");
    onlineCourse.classList.toggle("active");
}, 3000)
