var buttonBack = document.getElementById('button-back');
var buttonForward = document.getElementById('button-forward');
var toggleImg = document.getElementById('toggleimg');
var portfolioGrid = document.getElementById('portfoliogrid');
var landscape = document.getElementById('landscape');
var landscapeToggleStatus = true;
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
function changeRatio(){
    if(landscapeToggleStatus){
        if(screen.width > 480){
            landscapeToggleStatus = false;
            landscape.style.width = 'calc(133vh - 80px';    
        }
        if(screen.width > 900){
            landscapeToggleStatus = false;
            landscape.style.width = '133vh';
        }

    }
    else{
        if(screen.width > 480){
            landscapeToggleStatus = true;
            landscape.style.width = 'calc(177vh - 107px)';    
        }
        if(screen.width > 900){
            landscapeToggleStatus = true;
            landscape.style.width = '100vw';
        }
    }
}

function changeToGrid(){
    if(toggleStatus){
        toggleImg.innerHTML = '<img src="assets/icons/img-landscape.png" alt=""></img>'
        buttonBack.style.display = 'none';
        buttonForward.style.display = 'none';
        portfolioGrid.style.display = 'grid';
        portfolioGrid.style.position = 'absolute';
        portfolioGrid.style.top = '0px';
        portfolioGrid.style.gridTemplateColumns = 'repeat(' + Math.ceil(portfoliolist.length / 3) + ', 1fr)';
        toggleStatus = false;
        
    }
    else{
        toggleImg.innerHTML = '<img src="assets/icons/img-grid.png" alt="">'
        buttonBack.style.display = 'unset';
        buttonForward.style.display = 'unset';
        portfolioGrid.style.display = 'none';
        toggleStatus = true;
    }
    if(screen.width > 900){
        portfolioGrid.style.gridTemplateColumns = 'repeat(' + portfoliolist.length + ', 200px)';
        portfolioGrid.style.gridTemplateRows = '150px';
        portfolioGrid.style.top = 'calc(100vh - 170px)';
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
        toggleImg.innerHTML = '<img src="assets/icons/img-grid.png" alt="">'
        portfolioGrid.style.display = 'none';
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
        landscape.style.width = '100vw';
        landscape.style.height = '75vw';
    }else{
        portfolioGrid.style.display = 'none';
        landscape.style.height = 'calc(100vh - 60px)';
        landscape.style.width = 'calc(177vh - 107px)';
    }
    if(screen.width > 900){
        landscape.style.height = '100vh';
        landscape.style.width = '100vw';
    }
}

createElementsForGrid();
landscape.onclick = changeRatio;
toggleImg.onclick = changeToGrid;
buttonBack.onclick = clickBack;
buttonForward.onclick = clickForward;
window.addEventListener('resize', updateSizeViewport);