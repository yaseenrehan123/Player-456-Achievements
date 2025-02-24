import * as achievementsData from "../data/achievements-data.js";
function Achievement(title,imgSrc,description){
    this.title= title,
    this.imgSrc = imgSrc,
    this.description = description;
};
const achievements = achievementsData.achievementsData.map
(achievement => new Achievement(achievement.title,achievement.imgSrc,achievement.description));
achievements.forEach(function(achievement){
    const achievementTemplate = `<div class="achievement-container">
            <div class="title-section">
                <div class="heading">${achievement.title}</div>
                <div class="achievement-img-container">
                    <img class="achievement-img" src="${achievement.imgSrc}"></img>
                </div>
            </div>
            <div class="content">
                <p>
                    ${achievement.description}
                </p>
            </div>
        </div>`
    document.querySelector('.achievements-container').insertAdjacentHTML('beforeend',achievementTemplate);
});
console.log(achievements);
