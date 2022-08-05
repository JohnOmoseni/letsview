import { addGlobalEventListener } from "./function.js"
import { toggleLikeIncrease } from "./engagement.js"

// window.addEventListener('click', (e) => {
//     console.log(e.target);
// })

// Global Event Listener for Options Btn
addGlobalEventListener('click', '[data-options]', (e) => {
    let targetParent;
    if(e.target.matches('.option-circle')) {
        targetParent = e.target.parentElement.parentElement.parentElement
    } else {
        targetParent = e.target.parentElement.parentElement
    }
    targetParent.classList.add('open-options')
    console.log(targetParent)
})
// Global Event Listener for remove delete-post-btn on click
addGlobalEventListener('click', '.post', (e) => {
    const target = e.target
    const isDeleteBtn = target.closest('#delete-post') || target.closest('.options')
    
    if(!isDeleteBtn) {
        target.classList.remove('open-options')
    }
})
// Global Event Listener for delete post on click
addGlobalEventListener('click', '#delete-post', (e) => {
    const target = e.target
    const post = target.parentElement
    console.log(post);
    post.remove()
})
// Global Event Listener for comment btn on click
addGlobalEventListener('click', '.post .btns button:last-of-type', (e) => {
    const input = e.target.offsetParent.querySelector("#post-comment input");
    // console.log(e.target.offsetParent, input);
    input.focus()
})
// Global Event Listener for Like btn on click
addGlobalEventListener('click', '.post .btns .like-btn', (e) => {
    let targetParent;
    if(e.target.matches('.like')) {
        // console.log('clicked on heart icon');
        targetParent = e.target.parentElement.parentElement
    } else {
        targetParent = e.target.parentElement
    }
    const likeCount = targetParent.previousElementSibling.querySelector('.like-count')
    // console.log(targetParent, likeCount);

    // let isIncrease = true;
    toggleLikeIncrease(e, likeCount)
})
// Global Event Listener for Like Icon on click
addGlobalEventListener('click', '.engagements .likes', (e) => {
    const target = e.target;    
    let likeCount = target.nextElementSibling
    
    toggleLikeIncrease(e, likeCount)
})
// Global Event Listener for Submit Comment-form on submit
addGlobalEventListener('submit', '#index-page #post-comment', (e) => {
    e.preventDefault();
    const postCommentForm = e.target

    const commentBox = postCommentForm.nextElementSibling;
    const input = postCommentForm.querySelector('input')
    const comment = input.value.trim()
    if(input.value === '') {
        return
    }
    const li = document.createElement('li')
    const img = document.createElement('img')
    const para = document.createElement('p')
    const span = document.createElement('span')

    img.src = "../images/pngtree-creative-suv-advertising-illustrator-vector-material-png-image_15369.jpg" 
    span.innerHTML = '&#10006';
    span.setAttribute('data-close-btn', '')
    span.classList.add('close-comment');
    para.innerText = comment;

    li.className = 'comment';
    li.append(img)
    li.append(para)
    li.append(span)

    commentBox.append(li);
    input.value = "";

    // Increase the number of comment shown
    const parentElement = postCommentForm.parentElement.parentElement;
    const commentDiv = parentElement.querySelector('.comment-count');
    const commentCount = commentDiv.textContent
    let countString = commentCount.split(' ')[0]
    let count = parseInt(countString)
    count++

    let text = (count <= 1) ? count + ' comment' : count + ' comments'
    commentDiv.innerText = text;
    // console.log(count);

})
addGlobalEventListener('click', '.close-comment', (e) => {
    const parent = e.path[1]
    parent.remove()

    const post = e.path[4]
    const countElement = post.querySelector('.engagements .comment-count')

    let count = countElement.innerText.split(' ')[0]
    let text = '';
    console.log(count);

    count--
    if(count < 0) {
        text = 0 + ' comment'
    }else if(count <= 1) {
        text += count + ' comment'
    }else {
        text += count + ' comments'
    }
    // console.log(text)

    countElement.innerText = text;
})
