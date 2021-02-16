

const loginPageElements = 
{
    LOGIN_EMAIL_INPUT: ".modal__body [name='email']",
    LOGIN_PASSWORD_INPUT: ".modal__body [name='password']",
    LOGIN_LOG_IN: ".modal__body [title='Log in']"
   };

const stan ={
    HEADER_LOGIN_LINK:".site__login",
    PROFILE_BUTTON:".profiles__button",
    PROFILE_OVERLAY:".wiw-profiles__icon-overlay",
    PROFILE_NAME_TXTBX : "#name",
    CANCEL_BUTTON : ".profiles__button--secondary",
    SAVE_BUTTON : ".profiles__button--primary",
    PROFILE_NAME_LABEL : ":nth-child(1) > .wiw-profiles__name > p",
    PROFILE_ICON : ".profile__icon--remote"
  };

const stanWatchpage = 
{
    SERIES_BUMP: "[data-id='62908']",
    WATCH_BUMP_NOW: "[title='Start your free trial']",
    EPISODES_DROPDOWN: "[data-app='DropDownApp']",
    EPISODES_TRAILER_EXTRA : '[href="/watch/bump/trailers-and-extras"]',
    LOGIN_LOG_IN: ".modal__body [title='Log in']",
    STAN_WATCH_MAIN_PAGE_HEADER: "header",
    STAN_WATCH_PLAN_PAGE_HEADER: ".modal__header"
   };

   const stanPlaypage = 
   {
     SEARCH_TEXTBOX : ".search__input",
     SEARCH_RESULT:".search__results",
     SEARCH_LISTITEM:"li",

    STAN_SEARCH_ICON : ".search--mobile > .search__query > .search__input-wrapper > .search__icon > .icon",
    STAN_SEARCH_TEXTBOX: ".search--mobile > .search__query > .search__input-wrapper > .search__input",
    STAN_MY_LIST_BUTTON:".my",
    STAN_HAMBURGER_MENU : ".icon--button > .icon",
    STAN_MY_LIST_LINK:".menu__item--shift > .menu__link",
    STAN_PROGRAM_LIST:".programs__item",
    STAN_REMOVE_LIST_BUTTON:".overlay"
   }


   export {loginPageElements};
   export {stan};
   export {stanWatchpage};
   export {stanPlaypage};
