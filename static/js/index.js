console.log('Home!! 😁')


// [ =============================== fullpage js =============================== ]
window.onload = () => {
  const loading = document.querySelector('.loading')

  setTimeout(() => {
    loading.className += ' visually-hidden'

    $(function(){
      $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
          navigation:true, //네비게이션 존재여부
          navigationPosition:'right', //네비게이션 위치
          // sectionsColor: [
          //     '#fff', '#bbb', '#ddd', '#eee', '#fff'
          // ]
      });
    })
  
    const firstSection = document.querySelector('#first')
    
    setTimeout( ()=>{
      firstSection.className += ' first'
    },
    500
    )
  },
  3000
  )

  

}








// [ =============================== swiper js =============================== ]
var swiper = new Swiper(".swiper-content .swiper-container", {
  slidesPerView: 1, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데에 보이게 하기
  loop: true, // 반복재생 여부

  navigation: {
    prevEl: '.swiper-content .swiper-prev',
    nextEl: '.swiper-content .swiper-next'
  }
});
