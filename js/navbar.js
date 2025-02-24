import * as app from "./app.js";
const navTemplate = `<div class="nav-bar">

            <div class="main-bar">
                <div class="left-section">

                </div>
                <div class="middle-section">
                    <ul>
                        <li class="nav-link hide-on-mobile"><a href="index.html">Hall-Of-Fame</a></li>
                        <li class="nav-link hide-on-mobile"><a href="about.html">About</a></li>
                    </ul>
                </div>
                <div class="right-section">
                    <div class="nav-menu-btn">
                        <i class='bx bx-menu'></i>
                    </div>
                </div>
            </div>

            <div class="side-bar">
                <div class="nav-cancel-btn">
                    <i class='bx bx-x'></i>
                </div>

                <ul>
                        <li class="nav-link"><a href="index.html">Hall-Of-Fame</a></li>
                        <li class="nav-link"><a href="about.html">About</a></li>
                    </ul>
            </div>

        </div>`

const navContainer = document.querySelector('.nav-container');
navContainer.innerHTML = navTemplate;
const sideBar = document.querySelector('.side-bar');
document.querySelector('.nav-menu-btn').onclick = () => showSideBar();
document.querySelector('.nav-cancel-btn').onclick = () => hideSideBar();
function showSideBar(){
    
    app.enableObjectInlineBlock(sideBar);
}

function hideSideBar(){
    app.disableObject(sideBar);
}
