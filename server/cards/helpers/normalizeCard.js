const mongoose = require('mongoose');


const normalizeCard = async (rawCard) =>{
const { title, subtitle, description, phone , email, web , bizNumber } = rawCard.card;
const card = {
    title: title || "pc-solution",
    subtitle: subtitle  || "Exper IT specialist remote support services",
    description : description || "computing solution and honest and reliable",
    phone: phone || 054 - 3385602,
    email:email || "admin@pc-solution.com",
    web: web || "www.pc-solution.co.il",
    bizNumber: bizNumber || "03 - 9772345",
}
const { url, alt } = rawCard.image;

const image = {
    url: 
    url || "https://pixabay.com/photos/apple-computer-desk-workspace-1868496/",
    alt: alt || "pc-solution business card image",
}; 
const {state, country , city , street , houseNumber , zip} =  rawCard.address;
const address = {
state: state || "israel",
country: country || "israel",
city:city || "tel aviv", 
street:street || "hertzel", 
houseNumber:houseNumber || "121", 
zip:zip || "345654",

}

return {
...rawCard,
card,
image,
address: {
    ...rawCard.address,
    state: rawCard.address.state || "not defined",
},
user_id:userId,
likes: [ "likes", "my" , "website"]

};
};

module.exports = normalizeCard;


