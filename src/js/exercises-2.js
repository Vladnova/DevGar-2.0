import fetchSportEnergy from './api/apiSport';


const list = document.querySelector('.filter-list-js');
const Exercises = document.querySelector(".exercises_list");


list.addEventListener('click', handlerClickFilterCards);

async function handlerClickFilterCards(e) {
  e.preventDefault()
  // list.classList.add("visually-hidden");
  const {target} = e
  let nameFilter;
  let nameCard;
  try{
  
  if (target.nodeName === "IMG") {
    nameFilter = target.parentNode.parentNode.dataset.filter;
    nameCard = target.parentNode.parentNode.dataset.name;
  } if (target.nodeName === "P" || target.nodeName === "H3") {
    nameFilter = target.parentNode.parentNode.parentNode.dataset.filter;
    nameCard = target.parentNode.parentNode.parentNode.dataset.name;
  }
  const dataExercises = {
    [nameFilter]: [nameCard],
    keyword: 'pull',
    page: 1,
    limit: 10,
  };
  list.innerHTML="";
  document.querySelector(".muscles-section").classList.remove("muscles-section")
list.classList.remove("muscles-list");
list.classList.add("exercises_list");
    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
   
    list.insertAdjacentHTML('afterbegin', makeMarkupCards(exercises));
    
  } catch (er) {
    console.log(er.message);
  }
}


  export function makeMarkupCards (exercises) {
    // console.log(exercises.results.length)
  if (exercises.results.length){
    // console.log("here")
    const markup = exercises.results
    .map(({_id, target, rating,name }) => {
      console.log(_id)
      return `
      <li class="exercises_list_item" id=${_id}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${target}</div>
          <p class="exercises_rating">${rating}.0</p>
          <div class="exercises_list_item_icon_star">
            <svg class="exercises_list_item_icon_svg_star" width="18px" height="18px">
              <use xlink:href="./img/icons.svg#icon-star" fill=""></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right">
          <button class="exercises_btn_start">
            <p class="exercises_btn_start_text">start</p>
            <svg class="exercises_btn_start_icon" width="56px" height="18px">
              <use xlink:href="../img/icons.svg#icon-arrow"></use>
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24px" height="24px">
            <use xlink:href="./img/icons.svg#icon-running-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title">${name}</h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>312 / 3 min</span>
            </p>
          </li>
        </ul>
        </div>
    </li>`
    })
    .join('');
  //  console.log(markup)
    return markup;
  } else {
    const underfinde = "<p>Sorry</p>"
    console.log("sorry")
    return underfinde
  }
  // makeMarkupCards(exercises)
  }


