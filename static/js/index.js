console.log('Home!! ๐')


// [ =============================== fullpage js =============================== ]
window.onload = () => {
  const loading = document.querySelector('.loading')
  const main = document.querySelector('main')
  const header = document.querySelector('header')
  const aside = document.querySelector('aside')

  setTimeout(() => {
    loading.className += ' visually-hidden'
    header.classList.remove('visually-hidden')
    aside.classList.remove('visually-hidden')
    main.classList.remove('visually-hidden')

    $(function(){
      $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
          navigation:true, //๋ค๋น๊ฒ์ด์ ์กด์ฌ์ฌ๋ถ
          navigationPosition:'right', //๋ค๋น๊ฒ์ด์ ์์น
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
  slidesPerView: 1, //ํ๋ฒ์ ๋ณด์ฌ์ค ์ฌ๋ผ์ด๋ ๊ฐ์
  spaceBetween: 10, // ์ฌ๋ผ์ด๋ ์ฌ์ด ์ฌ๋ฐฑ
  centeredSlides: true, //1๋ฒ ์ฌ๋ผ์ด๋๊ฐ ๊ฐ์ด๋ฐ์ ๋ณด์ด๊ฒ ํ๊ธฐ
  loop: true, // ๋ฐ๋ณต์ฌ์ ์ฌ๋ถ

  navigation: {
    prevEl: '.swiper-content .swiper-prev',
    nextEl: '.swiper-content .swiper-next'
  }
});
