import './App.css';
import {Nav} from "./components/Nav";
import {useRef} from "react";

function App() {

    const menuRef = useRef(null);

        function selectCard() {
            const swiperContainer = menuRef.current;
            const activeCard = swiperContainer.childNodes[swiperContainer.swiper.activeIndex];
            console.log(activeCard)
            if (activeCard.style.backgroundColor !== 'mediumseagreen') {
                activeCard.style['background-color'] = 'mediumseagreen';
            }
            setTimeout(function(){
                if (activeCard.style.backgroundColor === 'mediumseagreen') {
                    activeCard.style['background-color'] = 'darksalmon';
                }
            }, 500);
        }

  return (
      <div className={'App'}>

          <swiper-container class={"my-thumbs"} effect={"cards"} ref={menuRef}>
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <swiper-slide>Slide 6</swiper-slide>
              <swiper-slide>Slide 7</swiper-slide>
              <swiper-slide>Slide 8</swiper-slide>
              <swiper-slide>Slide 9</swiper-slide>
          </swiper-container>

          <Nav keyCount={9} clickEvent={selectCard} />

      </div>
  );
}

export default App;
