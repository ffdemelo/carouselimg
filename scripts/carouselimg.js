var buttonBack = document.getElementById('button-back');
var buttonForward = document.getElementById('button-forward');
var toggleImg = document.getElementById('toggleimg');
var portfolioGrid = document.getElementById('portfoliogrid');
var landscape = document.getElementById('landscape');
var toggleStatus = true;
var currentImgId = 0;

// Create element for Grid of images:
function createElementsForGrid(){
    portfolioGrid.innerHTML = '';
    for(img of portfoliolist){
        const div = document.createElement("div");
        div.id = currentImgId;
        div.style.backgroundImage = "url(" + "'assets/thumbs/" + img + "')";
        // Append to portfolioGrid:
        portfolioGrid.appendChild(div);
        div.onclick = thumbChangeImg;
        currentImgId++;
    }
    currentImgId = 0;
    landscape.style.backgroundImage = "url(" + "'assets/imgportfolio/" + portfoliolist[currentImgId] + "')";
}

function changeToGrid(){
    if(toggleStatus){
        toggleImg.innerHTML = '<img src="assets/icons/img-landscape.png" alt=""></img>'
        buttonBack.style.display = 'none';
        buttonForward.style.display = 'none';
        portfolioGrid.style.position = 'absolute';
        portfolioGrid.style.top = '0px';
        portfolioGrid.style.gridTemplateColumns = 'repeat(' + Math.ceil(portfoliolist.length / 3) + ', 1fr)';
        toggleStatus = false;
        
    }
    else{
        toggleImg.innerHTML = '<img src="assets/icons/img-grid.png" alt="">'
        buttonBack.style.display = 'unset';
        buttonForward.style.display = 'unset';
        portfolioGrid.style.display = 'grid';
        portfolioGrid.style.top = '100vh';
        toggleStatus = true;
    }
}

function clickBack(){
    if(currentImgId <= 0){
        currentImgId = portfoliolist.length - 1;
    }
    else{
        currentImgId--;
    }
    landscape.style.backgroundImage = "url(" + "'assets/imgportfolio/" + portfoliolist[currentImgId] + "')";
}

function clickForward(){
    if(currentImgId >= (portfoliolist.length - 1)){
        currentImgId = 0;
    }
    else{
        currentImgId++;
    } 
    landscape.style.backgroundImage = "url(" + "'assets/imgportfolio/" + portfoliolist[currentImgId] + "')";   
}

function thumbChangeImg(){
    if(screen.width > 480){
        portfolioGrid.style.top = '100vh';
    }
    if(toggleStatus){
        toggleStatus = false;
    }
    else{
        buttonBack.style.display = 'unset';
        buttonForward.style.display = 'unset';
        toggleStatus = true;
    }
    currentImgId = this.id;
    landscape.style.backgroundImage = "url(" + "'assets/imgportfolio/" + portfoliolist[currentImgId] + "')";
}

function updateSizeViewport(){
    if(screen.width <= 480){
        buttonBack.style.display = 'unset';
        buttonForward.style.display = 'unset';
        portfolioGrid.style.gridTemplateColumns = '1fr 1fr';
        portfolioGrid.style.display = 'grid';
        portfolioGrid.style.position = 'unset';
        portfolioGrid.style.top ='unset';
        landscape.style.backgroundImage = "url(" + "'assets/imgportfolio/" + portfoliolist[currentImgId] + "')";
        toggleImg.innerHTML = '<img src="assets/icons/img-grid.png" alt=""></img>';
        buttonBack.style.display = 'flex';
        buttonForward.style.display = 'flex';
        toggleStatus = true;
    }
}

createElementsForGrid();
toggleImg.onclick = changeToGrid;
buttonBack.onclick = clickBack;
buttonForward.onclick = clickForward;
window.addEventListener('resize', updateSizeViewport);
