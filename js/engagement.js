
let isIncrease = true;

export function toggleLikeIncrease(e, likeCount) {
    const target = e.target;
    let count = parseInt(likeCount.innerText);

    if(isIncrease) {
        count++
        target.classList.add('liked');
        isIncrease = false;
    } else {
        count--
        target.classList.remove('liked');
        isIncrease = true
    }
    likeCount.innerText = count;
}
