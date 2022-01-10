export const handleZindex = (arr) => {
    arr.forEach((item, i) => {
        item.style.zIndex = i;
    })
}

export const handleRotate = img => {
    const randomDeg = Math.floor(Math.random() * 12) + -12;
    img.style.transform = `rotate(${randomDeg}deg)`;
}


export {handleZindex, handleRotate}