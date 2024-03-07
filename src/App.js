import './App.css';
import {Nav} from "./Nav";
import {useRef} from "react";

function App() {

    const menuRef = useRef(null);

        function selectCard() {
            const swiperContainer = menuRef.current;
            const activeCard = swiperContainer.childNodes[swiperContainer.swiper.activeIndex];
            if (activeCard.style.backgroundColor !== 'mediumseagreen') {
                activeCard.style['background-color'] = 'mediumseagreen';
            }
            setTimeout(function(){
                if (activeCard.style.backgroundColor === 'mediumseagreen') {
                    activeCard.style['background-color'] = 'rgba(0,0,0,0)';
                }
            }, 500);
        }

  return (
      <div className={'App'}>

          <swiper-container class={"my-thumbs"} effect={"cards"} ref={menuRef}>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
              <swiper-slide></swiper-slide>
          </swiper-container>

          <Nav keyCount={8} clickEvent={selectCard} />

      </div>
  );
}

export default App;
