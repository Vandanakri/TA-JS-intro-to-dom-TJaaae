
let parentDiv = document.querySelector('.parent');

got.houses.forEach((house)=> {
  house.people.forEach((ele) => {
    let div = document.createElement('div');
    div.style.height = "200px";
    div.style.width = "400px";
    div.style.border = "1px solid black";
    div.style.margin = "20px"
    div.style.borderRadius = "5px"
    div.style.padding = "1rem"

    let img = document.createElement('img');
    img.style.borderRadius = "50%";
    


    let h2 = document.createElement('h2');
    h2.style.marginTop = "-40px"
    h2.style.marginLeft = "2.5rem"
    h2.style.textAlign = "center"
    h2.style.paddingBottom = "1rem"
    
    h2.style.fontSize = "1.5rem"

    let p = document.createElement('p');
    p.style.paddingTop = "1rem"
    p.style.textAlign = "center"
    p.style.paddingBottom = "0.5rem"
    

    let button = document.createElement('button');
    button.style.background = "rgb(53,127,128)";
    button.style.color = "white";
    button.innerText = "Learn More!";
    button.style.width = "100%"
    button.style.height = "2rem"
    button.style.marginTop = "1rem"

    img.src = ele.image;
    h2.innerText = ele.name;
    p.innerText = ele.description;
    div.append(img,h2,p,button);
    parentDiv.append(div);
  })  
});
